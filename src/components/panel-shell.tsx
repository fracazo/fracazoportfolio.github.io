"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type AnimationEvent,
  type ReactNode,
} from "react";
import Link from "next/link";
import { CloseIcon, ExpandIcon } from "./icons";
import { panelRegistry } from "./panel-registry";
import { BackBar } from "./back-bar";
import {
  clearReturnContext,
  readReturnContext,
  saveReturnContext,
} from "./panel-return";

/**
 * From here up the panel is a sheet laid over the page, with a strip of the
 * page left showing down the left edge as the way back. Below it there is no
 * room for the strip, so the panel becomes a full-screen sheet.
 */
const SHEET_MIN = 768;

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
  /** True while the sheet plays its exit, before it unmounts. */
  const [closing, setClosing] = useState(false);
  const [wide, setWide] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  /** Element that opened the panel, refocused on close. */
  const opener = useRef<HTMLElement | null>(null);
  /** Panel-body scroll to apply on the next open, from a full-page return. */
  const pendingBodyScroll = useRef(0);

  // The panel's history entry carries { panel }, so mounting on that entry
  // means arriving back at an open panel: browser back from the full page the
  // expand control opened, or a reload mid-panel. Reopen it, and when the
  // saved context matches, put the page and the sheet back where they were.
  useEffect(() => {
    const href = window.history.state?.panel;
    if (typeof href !== "string" || !(href in panelRegistry)) return;
    const ctx = readReturnContext();
    clearReturnContext();
    if (ctx?.panel === href) {
      window.scrollTo({ top: ctx.index, behavior: "instant" });
      pendingBodyScroll.current = ctx.body;
    }
    setActive(href);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${SHEET_MIN}px)`);
    const sync = () => setWide(mq.matches);
    sync();
    // Both listeners on purpose. `change` is the right signal, but it does not
    // fire under every viewport-resize path, which strands the layout in the
    // wrong mode at phone widths. `resize` is the belt to that braces.
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
      if (active) {
        // Swapping entries replaces the entry rather than stacking one, so a
        // single back press still closes the panel however many you viewed.
        window.history.replaceState({ panel: href }, "");
      } else {
        opener.current =
          trigger ?? (document.activeElement as HTMLElement | null);
        // A history entry so the browser back button closes the panel. The URL
        // is deliberately unchanged: a shareable sheet URL would make the
        // sheet a load state, and the sheet is only ever a response to a click.
        window.history.pushState({ panel: href }, "");
      }
      setClosing(false);
      setActive(href);
    },
    [active],
  );

  // Every close goes through history (the strip, the close button, Escape,
  // the back button, the system back gesture) and lands here. The wide sheet
  // slides back out before it unmounts; the full-screen sheet and reduced
  // motion just go.
  useEffect(() => {
    const onPop = () => {
      const animate =
        window.matchMedia(`(min-width: ${SHEET_MIN}px)`).matches &&
        !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (animate) setClosing(true);
      else setActive(null);
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const finishClose = (e: AnimationEvent<HTMLDivElement>) => {
    if (!closing || e.target !== e.currentTarget) return;
    setClosing(false);
    setActive(null);
  };

  useEffect(() => {
    if (!active || closing) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") window.history.back();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, closing]);

  // Keyed on "is the panel open", not on which entry is open, so swapping
  // entries does not unlock and relock the page underneath.
  const isOpen = Boolean(active);
  useEffect(() => {
    if (!isOpen) return;
    // The page behind holds still while the sheet is up. The reserved gutter
    // stops the page from widening by a scrollbar and reflowing under the
    // sheet the moment its scrollbar is taken away.
    const root = document.documentElement.style;
    root.overflow = "hidden";
    root.scrollbarGutter = "stable";
    panelRef.current?.focus({ preventScroll: true });
    return () => {
      root.overflow = "";
      root.scrollbarGutter = "";
      // Focus goes back to whatever opened the panel, however it was closed.
      opener.current?.focus({ preventScroll: true });
      opener.current = null;
    };
  }, [isOpen]);

  // Swapping entries resets the panel's own scroll. A return from the full
  // page restores the reading depth instead; the entry's content arrives via
  // dynamic import, so the sheet may not be tall enough yet, and the restore
  // waits on it rather than clamping to 0.
  useEffect(() => {
    const pane = panelRef.current;
    if (!active || !pane) return;
    const target = pendingBodyScroll.current;
    pendingBodyScroll.current = 0;
    pane.scrollTop = target;
    if (!target) return;
    let tries = 60;
    let raf = 0;
    const settle = () => {
      if (tries-- <= 0) return;
      if (pane.scrollHeight - pane.clientHeight >= target) {
        pane.scrollTop = target;
        return;
      }
      raf = requestAnimationFrame(settle);
    };
    raf = requestAnimationFrame(settle);
    return () => cancelAnimationFrame(raf);
  }, [active]);

  const entry = active ? panelRegistry[active] : null;
  const Content = entry?.load;

  /** Captures the page and sheet scroll so the trip back reopens it here. */
  const saveContext = () => {
    if (!active) return;
    saveReturnContext({
      panel: active,
      index: window.scrollY,
      body: panelRef.current?.scrollTop ?? 0,
    });
  };

  const close = () => {
    if (!closing) window.history.back();
  };

  /*
   * `children` is rendered in exactly one place and never moves. The sheet
   * lies over it rather than reflowing it, so the page underneath keeps its
   * scroll position, its state, and the element that opened the panel (which
   * is where focus returns).
   */
  return (
    <PanelContext.Provider value={{ open, active }}>
      <div inert={isOpen || undefined}>{children}</div>

      {active && wide && (
        // The way back is the page itself: the strip of it left showing down
        // the left edge. A pointer affordance only, so it stays out of the tab
        // order and the accessibility tree; the close button in the sheet is
        // the route for keyboard and assistive tech.
        <div
          aria-hidden="true"
          onClick={close}
          className={`panel-return-strip${closing ? " is-closing" : ""}`}
        />
      )}

      {active && (
        // The frame carries the material (glass, highlight edge, shadow) and
        // the overlays that sit above the scrolling content: the dissolving
        // edges and, on the wide sheet, the controls. The scroller inside it
        // holds only the content.
        <div
          role="dialog"
          aria-modal="true"
          aria-label={entry?.title}
          onAnimationEnd={finishClose}
          className={
            wide
              ? `panel-sheet${closing ? " panel-sheet-exit" : ""}`
              : "panel-enter fixed inset-0 z-50 bg-bg"
          }
        >
          {wide && (
            <>
              <EdgeBlur edge="top" />
              <EdgeBlur edge="bottom" />
              <SheetControls
                onClose={close}
                // Stubs have no page of their own; everything else keyed by a
                // route can be reopened there.
                fullHref={active.startsWith("/") ? active : undefined}
                onExpand={saveContext}
              />
            </>
          )}
          <div
            ref={panelRef}
            tabIndex={-1}
            className={
              wide
                ? "panel-body panel-scroll h-full overflow-y-auto overscroll-contain px-10 pt-20 pb-16 outline-none"
                : "panel-body h-full overflow-y-auto overscroll-contain px-6 outline-none"
            }
          >
            {!wide && <BackBar onClick={close} className="-mx-6 px-6" />}
            <Reveal key={active} enabled={wide}>
              {Content && <Content />}
            </Reveal>
          </div>
        </div>
      )}
    </PanelContext.Provider>
  );
}

/** Icon segment inside the capsule. 44px target, per the touch guidance. */
const chromeSegment =
  "group relative inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-muted transition-colors hover:bg-text/8 hover:text-text active:bg-text/12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

const chromeTooltip =
  "pointer-events-none invisible absolute end-0 top-[calc(100%+8px)] z-20 whitespace-nowrap glass rounded-lg px-2.5 py-1.5 text-meta font-medium text-text opacity-0 transition-opacity duration-200 group-hover:visible group-hover:opacity-100 group-focus-visible:visible group-focus-visible:opacity-100";

/**
 * The wide sheet's dismiss controls: a capsule of icon buttons pinned top
 * right, over the content rather than in its flow, so the content can pass
 * beneath it into the blurred edge. Expand to the entry's real page, then
 * close. Each explains itself in a tooltip, since neither has a text label.
 * (The full-screen sheet uses the site's labelled Back pill instead.)
 */
function SheetControls({
  onClose,
  fullHref,
  onExpand,
}: {
  onClose: () => void;
  /** Route of the entry's real page; when set, an expand control links to it. */
  fullHref?: string;
  /** Fires as the expand control is followed, to save the reading context. */
  onExpand?: () => void;
}) {
  return (
    <div className="glass absolute end-4 top-3 z-30 flex items-center rounded-full">
      {fullHref && (
        <Link
          href={fullHref}
          aria-label="Open in full page"
          onClick={onExpand}
          className={chromeSegment}
        >
          <span className={chromeTooltip} aria-hidden="true">
            Open in full page
          </span>
          <ExpandIcon size={16} />
        </Link>
      )}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className={chromeSegment}
      >
        <span className={chromeTooltip} aria-hidden="true">
          Close
        </span>
        <CloseIcon size={16} />
      </button>
    </div>
  );
}

/**
 * A graded blur along one edge of the sheet, so content dissolves into the
 * edge instead of being cut off by it. Each layer blurs harder over a shorter
 * band; stacked, the blur ramps up smoothly toward the edge, which a single
 * blurred band with a gradient mask cannot do.
 */
function EdgeBlur({ edge }: { edge: "top" | "bottom" }) {
  return (
    <div className={`panel-edge-blur panel-edge-blur--${edge}`} aria-hidden="true">
      <i />
      <i />
      <i />
      <i />
    </div>
  );
}

/** How many leading blocks take part in the entry stagger; the rest start below the fold. */
const REVEAL_COUNT = 6;

/**
 * Brings the content in block by block, each one easing out of a light blur,
 * once the sheet has landed. The content arrives through a dynamic import and
 * every entry nests its blocks differently, so the blocks are found at
 * runtime: the first element with more than one child is the column, and its
 * children are the blocks. Until they are tagged the content stays hidden, so
 * nothing paints sharp and then blurs.
 */
function Reveal({
  enabled,
  children,
}: {
  enabled: boolean;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  // Only ever mounted after a click, so the media query is safe to read here.
  const [ready, setReady] = useState(
    () =>
      !enabled ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const root = ref.current;
    if (ready || !root) return;
    let tries = 60;
    const find = () => {
      let column: Element = root;
      while (column.children.length === 1) column = column.children[0];
      if (column.children.length > 1) {
        [...column.children].slice(0, REVEAL_COUNT).forEach((el, i) => {
          (el as HTMLElement).style.setProperty("--reveal-i", String(i));
          el.classList.add("panel-reveal-item");
        });
        setReady(true);
        return;
      }
      // Content still loading; give up gracefully rather than stay hidden.
      if (tries-- <= 0) return setReady(true);
      timer = window.setTimeout(find, 16);
    };
    // Timers, not animation frames: frames pause in a hidden tab, and a pause
    // here would leave the content invisible rather than merely unanimated.
    let timer = window.setTimeout(find, 0);
    return () => clearTimeout(timer);
    // Runs once per mount: the parent keys it on the entry.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={ref} className={ready ? undefined : "opacity-0"}>
      {children}
    </div>
  );
}
