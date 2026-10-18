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
import { CheckIcon, CloseIcon, LinkIcon, ShareIcon } from "./icons";
import { panelRegistry } from "./panel-registry";
import { BackPill } from "./back-pill";
import { PeekCursor } from "./peek-cursor";

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

/**
 * The address bar follows the sheet: an entry keyed by a route shows that
 * route, so the URL is the entry's real, shareable page. Stubs have no page
 * of their own and keep the URL of the page underneath (`base`).
 */
function urlFor(href: string, base: string) {
  return href.startsWith("/") ? href : base;
}

/** The panel's history entry: which entry is open, over which page. */
function panelState(): { panel: string; base: string } | null {
  const state = window.history.state;
  const href = state?.panel;
  if (typeof href !== "string" || !(href in panelRegistry)) return null;
  return { panel: href, base: typeof state.base === "string" ? state.base : "/" };
}

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
  const stripRef = useRef<HTMLDivElement>(null);
  /** Element that opened the panel, refocused on close. */
  const opener = useRef<HTMLElement | null>(null);

  // Mounting on the panel's history entry means arriving back at an open
  // panel: browser back from a page a link inside the sheet led to, or a
  // reload on a stub (a route entry reloads as its full page instead, since
  // the URL is that page's). Reopen it.
  useEffect(() => {
    const state = panelState();
    if (state) setActive(state.panel);
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
        const base = panelState()?.base ?? "/";
        window.history.replaceState({ panel: href, base }, "", urlFor(href, base));
      } else {
        opener.current =
          trigger ?? (document.activeElement as HTMLElement | null);
        // A history entry so the browser back button closes the panel, with
        // the entry's own route in the address bar. The sheet never becomes
        // a load state: only the index pages host it, so loading that URL
        // (reload, shared link, new tab) gets the entry's full page.
        const { pathname, search, hash } = window.location;
        const base = pathname + search + hash;
        window.history.pushState({ panel: href, base }, "", urlFor(href, base));
      }
      setClosing(false);
      setActive(href);
    },
    [active],
  );

  // Every close goes through history (the strip, the close button, Escape,
  // the back button, the system back gesture) and lands here. The wide sheet
  // slides back out before it unmounts; the full-screen sheet and reduced
  // motion just go. Forward onto the panel's entry reopens it, so the sheet
  // always matches the URL.
  useEffect(() => {
    const onPop = () => {
      const state = panelState();
      if (state) {
        setClosing(false);
        setActive(state.panel);
        return;
      }
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

  // Swapping entries resets the panel's own scroll.
  useEffect(() => {
    if (active && panelRef.current) panelRef.current.scrollTop = 0;
  }, [active]);

  const entry = active ? panelRegistry[active] : null;
  const Content = entry?.load;

  // The tab title follows the address bar, so tabs and the history list name
  // the entry that is open.
  const entryTitle = entry?.title;
  useEffect(() => {
    if (!entryTitle) return;
    const previous = document.title;
    document.title = `${entryTitle} - Alex Fracazo`;
    return () => {
      document.title = previous;
    };
  }, [entryTitle]);

  /** Absolute URL of the open entry's page; stubs have none to share. */
  const shareUrl =
    active?.startsWith("/") ? new URL(active, window.location.origin).href : undefined;

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
          ref={stripRef}
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
              <SheetControls onClose={close} shareUrl={shareUrl} />
            </>
          )}
          {!wide && (
            <>
              <EdgeBlur edge="top" phone />
              <EdgeBlur edge="bottom" phone />
            </>
          )}
          {!wide && (
            // The phone sheet's way back floats at the bottom, in thumb
            // reach, with Share beside it. First in the DOM so it comes
            // first in the tab order, though it sits at the bottom.
            <BackPill
              onClick={close}
              placement="sheet"
              scroller={panelRef}
              end={
                shareUrl && (
                  <ShareButton key={shareUrl} url={shareUrl} title={entry?.title} />
                )
              }
            />
          )}
          <div
            ref={panelRef}
            tabIndex={-1}
            className={
              wide
                ? "panel-body panel-scroll h-full overflow-y-auto overscroll-contain px-10 pt-20 pb-16 outline-none"
                : "panel-body h-full overflow-y-auto overscroll-contain px-6 pt-10 pb-28 outline-none"
            }
          >
            <Reveal key={active} enabled={wide}>
              {Content && <Content />}
            </Reveal>
          </div>
        </div>
      )}
      {active && wide && (
        // After the sheet, so the strip and the sheet stay adjacent for the
        // peek's sibling selector.
        <PeekCursor strip={stripRef} base={panelState()?.base ?? "/"} hidden={closing} />
      )}
    </PanelContext.Provider>
  );
}

/** Icon segment inside the capsule. 44px target, per the touch guidance. */
const chromeSegment =
  "group relative inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-muted transition-colors hover:bg-text/8 hover:text-text active:bg-text/12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

const chromeTooltip =
  "pointer-events-none invisible absolute end-0 top-[calc(100%+8px)] z-20 whitespace-nowrap glass rounded-lg px-2.5 py-1.5 text-meta font-medium text-text opacity-0 transition-opacity duration-200 group-hover:visible group-hover:opacity-100 group-focus-visible:visible group-focus-visible:opacity-100";

/** Shown on the icon and tooltip after a copy, before it settles back. */
const COPIED_MS = 2000;

/**
 * Copies a URL, falling back to a hidden textarea where the async clipboard
 * is unavailable or refused. `copied` stays true for COPIED_MS afterwards.
 * Callers key the button by URL, so a different entry starts out uncopied.
 */
function useCopyLink(url: string) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number>(undefined);
  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      const field = document.createElement("textarea");
      field.value = url;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.opacity = "0";
      document.body.append(field);
      field.select();
      document.execCommand("copy");
      field.remove();
    }
    setCopied(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopied(false), COPIED_MS);
  }, [url]);

  return { copied, copy };
}

/** Says "Link copied" to assistive tech; the icon swap is the visual cue. */
function CopiedAnnouncement({ copied }: { copied: boolean }) {
  return (
    <span className="sr-only" role="status">
      {copied ? "Link copied" : ""}
    </span>
  );
}

/**
 * The wide sheet's controls: a capsule of icon buttons pinned top right,
 * over the content rather than in its flow, so the content can pass beneath
 * it into the blurred edge. Copy the entry's link, then close. Each explains
 * itself in a tooltip, since neither has a text label. (The full-screen
 * sheet uses the site's floating Back pill instead.)
 */
function SheetControls({
  onClose,
  shareUrl,
}: {
  onClose: () => void;
  /** Absolute URL of the entry's page; when set, a copy control offers it. */
  shareUrl?: string;
}) {
  return (
    <div className="glass absolute end-4 top-3 z-30 flex items-center rounded-full">
      {shareUrl && <CopyLinkButton key={shareUrl} url={shareUrl} />}
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

function CopyLinkButton({ url }: { url: string }) {
  const { copied, copy } = useCopyLink(url);
  return (
    <button
      type="button"
      onClick={copy}
      aria-label="Copy link"
      className={chromeSegment}
    >
      <span className={chromeTooltip} aria-hidden="true">
        {copied ? "Link copied" : "Copy link"}
      </span>
      {copied ? <CheckIcon size={16} /> : <LinkIcon size={16} />}
      <CopiedAnnouncement copied={copied} />
    </button>
  );
}

/**
 * The full-screen sheet's share control, beside its floating Back pill.
 * Phones get the system share sheet (which carries Copy too); where there is
 * none, it copies the link instead.
 */
function ShareButton({ url, title }: { url: string; title?: string }) {
  const { copied, copy } = useCopyLink(url);
  const share = async () => {
    if (typeof navigator.share !== "function") return copy();
    try {
      await navigator.share({ title, url });
    } catch {
      /* dismissed: nothing to do */
    }
  };
  return (
    <button
      type="button"
      onClick={share}
      aria-label="Share"
      className="glass glass-interactive inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-full text-muted hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      {copied ? <CheckIcon size={16} /> : <ShareIcon size={16} />}
      <CopiedAnnouncement copied={copied} />
    </button>
  );
}

/**
 * A graded blur along one edge of the sheet, so content dissolves into the
 * edge instead of being cut off by it. Each layer blurs harder over a shorter
 * band; stacked, the blur ramps up smoothly toward the edge, which a single
 * blurred band with a gradient mask cannot do. The phone sheet uses the same
 * layers full width, and fades to its solid background at both edges.
 */
function EdgeBlur({ edge, phone = false }: { edge: "top" | "bottom"; phone?: boolean }) {
  return (
    <div
      className={`panel-edge-blur panel-edge-blur--${edge}${phone ? " panel-edge-blur--phone" : ""}`}
      aria-hidden="true"
    >
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
