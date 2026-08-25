"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { ArrowLeftIcon, CloseIcon } from "./icons";
import { panelRegistry } from "./panel-registry";

/** Below this the split has no room, so the panel becomes a full-screen sheet. */
const SPLIT_MIN = 1200;

type PanelApi = {
  open: (href: string, trigger?: HTMLElement) => void;
  active: string | null;
};

const PanelContext = createContext<PanelApi>({ open: () => {}, active: null });

/** Lets any descendant open the panel. `active` drives the selected state. */
export function usePanel() {
  return useContext(PanelContext);
}

export function PanelShell({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<string | null>(null);
  const [split, setSplit] = useState(false);
  const indexRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  /** Document scroll at the moment of opening, restored on close. */
  const savedScroll = useRef(0);
  /** Element that opened the panel, refocused on close. */
  const opener = useRef<HTMLElement | null>(null);
  /**
   * Where the clicked row sat in the viewport at the moment of the click.
   * Restoring a raw scroll offset is not enough: opening the split reflows the
   * index into a narrower column and compacts the rows, so the same offset
   * lands on different content. Anchoring on the row itself keeps it still.
   */
  const anchor = useRef<{ el: HTMLElement | null; top: number }>({
    el: null,
    top: 0,
  });

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${SPLIT_MIN}px)`);
    const sync = () => setSplit(mq.matches);
    sync();
    // Both listeners on purpose. `change` is the right signal, but it does not
    // fire under every viewport-resize path, which strands the layout in split
    // mode at phone widths. `resize` is the belt to that braces.
    mq.addEventListener("change", sync);
    window.addEventListener("resize", sync);
    return () => {
      mq.removeEventListener("change", sync);
      window.removeEventListener("resize", sync);
    };
  }, []);

  const open = useCallback(
    (href: string, trigger?: HTMLElement) => {
      if (!(href in panelRegistry)) return;
      const el = trigger ?? (document.activeElement as HTMLElement | null);
      anchor.current = { el, top: el?.getBoundingClientRect().top ?? 0 };
      if (active) {
        // Swapping entries replaces the entry rather than stacking one, so a
        // single back press still closes the panel however many you viewed.
        window.history.replaceState({ panel: href }, "");
      } else {
        opener.current = el;
        savedScroll.current = window.scrollY;
        // A history entry so the browser back button closes the panel. The URL
        // is deliberately unchanged: a shareable split URL would make the split
        // a load state, and the split is only ever a response to a click.
        window.history.pushState({ panel: href }, "");
      }
      setActive(href);
    },
    [active],
  );

  // Back button and system back gesture both land here.
  useEffect(() => {
    const onPop = () => setActive(null);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") window.history.back();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  // Keyed on "is the panel open", not on which entry is open. Depending on
  // `active` here would tear this down and re-run it on every swap, snapping
  // the index back to wherever it sat when the panel first opened instead of
  // leaving it where the reader has since scrolled to.
  const isOpen = Boolean(active);
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    panelRef.current?.focus({ preventScroll: true });
    return () => {
      document.body.style.overflow = "";
      // Focus goes back to whatever opened the panel, however it was closed:
      // the button, Escape, the back button, or the system back gesture.
      opener.current?.focus({ preventScroll: true });
      opener.current = null;
    };
  }, [isOpen, split]);

  // Runs after the split has been applied but before paint, so the correction
  // is never visible. Without it the row you clicked slides away under you.
  useLayoutEffect(() => {
    const y = savedScroll.current;
    const inPane = isOpen && split;
    // Coarse restore first, so we are in the right region of the page...
    if (inPane) {
      const pane = indexRef.current;
      if (pane) pane.scrollTop = y;
    } else if (!isOpen) {
      window.scrollTo(0, y);
    }
    // ...then pin the clicked row to exactly where it was. The coarse offset
    // alone is wrong because the split reflows the column and compacts the
    // rows, so the same number of pixels lands on different content.
    // Nothing should ever scroll the split horizontally; the entry transform
    // briefly makes it possible, so pin it.
    const shell = indexRef.current?.parentElement;
    if (shell && shell.scrollLeft !== 0) shell.scrollLeft = 0;

    const { el, top } = anchor.current;
    if (!el || !el.isConnected) return;
    const delta = el.getBoundingClientRect().top - top;
    if (Math.abs(delta) < 1) return;
    if (inPane) {
      const pane = indexRef.current;
      if (pane) pane.scrollTop = pane.scrollTop + delta;
    } else {
      window.scrollBy(0, delta);
    }
  }, [isOpen, split]);

  // Swapping entries resets the panel's own scroll without collapsing the split.
  useEffect(() => {
    if (active && panelRef.current) panelRef.current.scrollTop = 0;
  }, [active]);

  const entry = active ? panelRegistry[active] : null;
  const Content = entry?.load;

  const splitOpen = Boolean(active) && split;

  /*
   * `children` is rendered in exactly one place and the layout changes by
   * swapping classes on its wrapper. Rendering it in a different branch per
   * state would remount the whole index on every open, which throws away the
   * element that opened the panel (so focus cannot return to it) along with
   * any state the index is holding.
   */
  return (
    <PanelContext.Provider value={{ open, active }}>
      <div
        className={
          splitOpen
            ? "fixed inset-0 z-40 grid grid-cols-2 overflow-hidden"
            : undefined
        }
      >
        <div
          ref={indexRef}
          data-panel-split={splitOpen ? "" : undefined}
          // Hidden from assistive tech only as a modal sheet, never in the
          // split, where the index is still real content beside the panel.
          aria-hidden={Boolean(active) && !split ? true : undefined}
          className={
            splitOpen
              ? "overflow-x-hidden overflow-y-auto overscroll-contain border-e border-border"
              : undefined
          }
        >
          {/* The slide belongs to the content, not the pane. Animating the pane
              moved its background and its dividing border too, so the whole
              left region swept in from the right and left a gap down the side.
              The pane holds still and its column travels inside it. */}
          <div className={splitOpen ? "panel-index-enter" : undefined}>
            {children}
          </div>
        </div>

        {active && (
          <div
            ref={panelRef}
            tabIndex={-1}
            role={split ? "region" : "dialog"}
            aria-modal={split ? undefined : true}
            aria-label={entry?.title}
            className={
              splitOpen
                ? "panel-body panel-enter overflow-y-auto overscroll-contain bg-bg px-6 outline-none min-[700px]:px-10"
                : "panel-body panel-enter fixed inset-0 z-50 overflow-y-auto overscroll-contain bg-bg px-6 outline-none"
            }
          >
            <PanelChrome
              onClose={() => window.history.back()}
              label={split ? "Close" : "Back"}
            />
            {Content && <Content />}
          </div>
        )}
      </div>
    </PanelContext.Provider>
  );
}

/**
 * Sticky dismiss control. 44px minimum target, per the touch guidance.
 * Close sits top right, the way a panel beside its index dismisses; Back sits
 * top left, the way a full-screen sheet steps back.
 */
function PanelChrome({
  onClose,
  label,
}: {
  onClose: () => void;
  label: string;
}) {
  return (
    <div
      className={`sticky top-0 z-10 -mx-6 flex bg-bg/85 px-6 py-3 backdrop-blur-md min-[700px]:-mx-10 min-[700px]:px-10 ${
        label === "Close" ? "justify-end" : "justify-start"
      }`}
    >
      <button
        type="button"
        onClick={onClose}
        className="inline-flex h-11 min-w-11 cursor-pointer items-center gap-2 rounded-full border border-border px-4 text-meta text-muted transition-colors hover:bg-panel-2 hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        {label === "Back" ? (
          <ArrowLeftIcon size={14} />
        ) : (
          <CloseIcon size={14} />
        )}
        {label}
      </button>
    </div>
  );
}
