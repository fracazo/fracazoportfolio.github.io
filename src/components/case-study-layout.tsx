"use client";

import {
  useEffect,
  useRef,
  useState,
  type MouseEvent,
  type ReactNode,
  type RefObject,
} from "react";

export type CaseStudyMeta = { label: string; value: string | string[] };
export type CaseStudyStat = { value: string; label: string };
export type CaseStudyChapter = { id: string; label: string };

/**
 * Two-column case study: a fixed rail that holds the context (who, what,
 * the numbers, where you are) and a scrolling column that holds the story.
 * The rail never repeats in the body, so the body never has to restate the
 * numbers to keep them in view.
 *
 * The layout answers to its own width, not the screen's (a container query),
 * because the same content renders in the side sheet and as a full page.
 * Narrow, the rail unfolds into a header above the hero, the way an app
 * store page opens: icon, name, a row of facts, then the picture.
 */
export function CaseStudyLayout({
  icon,
  title,
  subtitle,
  meta,
  stats,
  statsNote,
  chapters,
  link,
  hero,
  children,
}: {
  /** Square company mark, set in a tile. */
  icon: ReactNode;
  /** Product name; the page's h1. */
  title: string;
  subtitle: string;
  meta: CaseStudyMeta[];
  stats?: CaseStudyStat[];
  /** A line under the numbers, e.g. that the client had them adjusted. */
  statsNote?: string;
  /** The story's chapters, in order; each id is a section in `children`. */
  chapters: CaseStudyChapter[];
  link?: { href: string; label: string };
  /** Image or video that opens the story. */
  hero: ReactNode;
  children: ReactNode;
}) {
  const nav = useRef<HTMLOListElement>(null);
  const active = useChapterProgress(chapters, nav);

  const jump = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    // Scroll in place rather than follow the hash: in the side sheet a new
    // history entry would read as leaving the sheet.
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "start",
    });
  };

  const facts = (
    <dl className="cs-facts">
      {meta.map((m) => (
        <div key={m.label} className="cs-fact">
          <dt>{m.label}</dt>
          <dd>
            {(Array.isArray(m.value) ? m.value : [m.value]).map((v) => (
              <span key={v} className="cs-chip">
                {v}
              </span>
            ))}
          </dd>
        </div>
      ))}
    </dl>
  );

  const numbers = stats && stats.length > 0 && (
    <div className="cs-numbers">
      <ul className="cs-stats" role="list">
        {stats.map((s) => (
          <li key={s.label}>
            <span className="cs-stat-value">{s.value}</span>
            <span className="cs-stat-label">{s.label}</span>
          </li>
        ))}
      </ul>
      {statsNote && <p className="cs-stats-note">{statsNote}</p>}
    </div>
  );

  // Facts and numbers render in two places and CSS shows one: up front on
  // narrow layouts, where they introduce the story like an app store page,
  // and as closing credits on wide ones, where the rail keeps only identity
  // and wayfinding so the story starts with the picture.
  return (
    <div className="cs">
      <div className="cs-layout">
        <div className="cs-rail">
          <div className="cs-id">
            <span className="cs-icon">{icon}</span>
            <h1 className="cs-title">{title}</h1>
            <p className="cs-subtitle">{subtitle}</p>
          </div>

          <div className="cs-lead">
            {facts}
            {numbers}
          </div>

          <nav className="cs-nav" aria-label="Chapters">
            <ol ref={nav} role="list">
              {chapters.map((c) => (
                <li key={c.id}>
                  <a
                    href={`#${c.id}`}
                    onClick={(e) => jump(e, c.id)}
                    aria-current={active === c.id ? "location" : undefined}
                  >
                    <span>{c.label}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {link && (
            <a className="cs-link" href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          )}
        </div>

        <div className="cs-body">
          <div className="cs-hero">{hero}</div>
          <div className="cs-story">{children}</div>
          <footer className="cs-credits">
            {numbers}
            {facts}
          </footer>
        </div>
      </div>
    </div>
  );
}

/**
 * Where the reader is in the story. Returns the chapter whose heading most
 * recently crossed the reading line, a third of the way down the screen;
 * sections between chapters keep the last one lit, so the nav names the part
 * of the story you are in, not the heading nearest your eye.
 *
 * It also inks the nav as you read: each link gets `--ink`, from 0 (not
 * reached) to 1 (read), for how far the reading line has travelled through
 * that chapter, up to the next heading (the last one, to the story's end).
 * Written straight to the links' style, so scrolling never re-renders.
 *
 * Listens in the capture phase so it hears the side sheet's scroller as well
 * as the page.
 */
function useChapterProgress(
  chapters: CaseStudyChapter[],
  nav: RefObject<HTMLOListElement | null>,
) {
  const [active, setActive] = useState<string | null>(null);
  const ids = useRef(chapters.map((c) => c.id));

  useEffect(() => {
    let frame = 0;
    const measure = () => {
      frame = 0;
      const h = window.innerHeight;
      // Near the end of the scroll the reading line slides from a third of
      // the way down to the bottom of the screen, so a short story still
      // reaches its last chapters and arriving at the end reads them all.
      const scroller = scrollerOf(nav.current);
      const left = scroller.scrollHeight - scroller.clientHeight - scroller.scrollTop;
      const ramp = (h * 2) / 3;
      const line = h / 3 + ramp * (1 - Math.min(Math.max(left, 0) / ramp, 1));
      const tops = ids.current.map(
        (id) => document.getElementById(id)?.getBoundingClientRect().top ?? Infinity,
      );
      const story = document.getElementById(ids.current[0])?.closest(".cs-story");
      const storyEnd = story?.getBoundingClientRect().bottom ?? Infinity;
      const links = nav.current?.querySelectorAll<HTMLElement>("a") ?? [];

      let current: string | null = null;
      tops.forEach((top, i) => {
        if (top <= line) current = ids.current[i];
        // A chapter ends where the next heading meets the line; the last one
        // where the story itself ends.
        const end = i + 1 < tops.length ? tops[i + 1] : storyEnd;
        const span = Math.max(end - top, 1);
        const ink = Math.min(Math.max((line - top) / span, 0), 1);
        links[i]?.style.setProperty("--ink", ink.toFixed(4));
      });
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };
    measure();
    document.addEventListener("scroll", onScroll, { capture: true, passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("scroll", onScroll, { capture: true });
      window.removeEventListener("resize", onScroll);
    };
  }, [nav]);

  return active;
}

/** The element that scrolls the story: the side sheet's body, or the page. */
function scrollerOf(el: Element | null): Element {
  for (let node = el?.parentElement; node; node = node.parentElement) {
    const { overflowY } = getComputedStyle(node);
    const scrolls = overflowY === "auto" || overflowY === "scroll";
    if (scrolls && node.scrollHeight > node.clientHeight) return node;
  }
  return document.scrollingElement ?? document.documentElement;
}
