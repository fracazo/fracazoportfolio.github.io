"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { ArrowLeftIcon, CloseIcon } from "./icons";
import { panelRegistry } from "./panel-registry";

/** Below this the split has no room, so the panel becomes a full-screen sheet. */
const SPLIT_MIN = 1200;

type PanelApi = { open: (href: string) => void; active: string | null };

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
    (href: string) => {
      if (!(href in panelRegistry)) return;
      if (active) {
        // Swapping entries replaces the entry rather than stacking one, so a
        // single back press still closes the panel however many you viewed.
        window.history.replaceState({ panel: href }, "");
      } else {
        opener.current = document.activeElement as HTMLElement | null;
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

  // Opening freezes the document behind the panes and hands the saved scroll
  // to the index pane, so the index keeps its place while the panel changes.
  useEffect(() => {
    if (!active) return;
    const y = savedScroll.current;
    document.body.style.overflow = "hidden";
    if (split && indexRef.current) indexRef.current.scrollTop = y;
    panelRef.current?.focus();
    return () => {
      document.body.style.overflow = "";
      window.scrollTo(0, y);
      // Focus goes back to whatever opened the panel, however it was closed:
      // the button, Escape, the back button, or the system back gesture.
      opener.current?.focus();
      opener.current = null;
    };
  }, [active, split]);

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
          // Hidden from assistive tech only as a modal sheet, never in the
          // split, where the index is still real content beside the panel.
          aria-hidden={Boolean(active) && !split ? true : undefined}
          className={
            splitOpen
              ? "animate-[panel-index-in_320ms_cubic-bezier(0.32,0.72,0,1)_both] overflow-x-hidden overflow-y-auto overscroll-contain border-e border-border"
              : undefined
          }
        >
          {children}
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
                ? "animate-[panel-in_320ms_cubic-bezier(0.32,0.72,0,1)_both] overflow-y-auto overscroll-contain bg-bg outline-none"
                : "fixed inset-0 z-50 animate-[panel-in_320ms_cubic-bezier(0.32,0.72,0,1)_both] overflow-y-auto overscroll-contain bg-bg outline-none"
            }
          >
            <PanelChrome
              onClose={() => window.history.back()}
              label={split ? "Back" : "Close"}
            />
            {Content && <Content />}
          </div>
        )}
      </div>
    </PanelContext.Provider>
  );
}

/** Sticky back control. 44px minimum target, per the touch guidance. */
function PanelChrome({
  onClose,
  label,
}: {
  onClose: () => void;
  label: string;
}) {
  return (
    <div className="sticky top-0 z-10 flex justify-end bg-bg/85 px-4 py-3 backdrop-blur-md">
      <button
        type="button"
        onClick={onClose}
        className="inline-flex h-11 min-w-11 cursor-pointer items-center gap-2 rounded-full border border-border px-4 text-sm text-muted transition-colors hover:bg-panel-2 hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
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
