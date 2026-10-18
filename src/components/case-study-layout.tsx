"use client";

import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from "react";

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
  const active = useActiveChapter(chapters);

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

  // Facts and numbers close the story on every layout, as credits under the
  // last chapter: the reader meets the product and the work first, and the
  // role and numbers land once they mean something.
  return (
    <div className="cs">
      <div className="cs-layout">
        <div className="cs-rail">
          <div className="cs-id">
            <span className="cs-icon">{icon}</span>
            <h1 className="cs-title">{title}</h1>
            <p className="cs-subtitle">{subtitle}</p>
          </div>

          <nav className="cs-nav" aria-label="Chapters">
            <ol role="list">
              {chapters.map((c) => (
                <li key={c.id}>
                  <a
                    href={`#${c.id}`}
                    onClick={(e) => jump(e, c.id)}
                    aria-current={active === c.id ? "location" : undefined}
                  >
                    {c.label}
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
 * The chapter whose heading most recently crossed the reading line, a third
 * of the way down the screen. Sections between chapters keep the last one
 * lit, so the nav names the part of the story you are in, not the heading
 * nearest your eye. Listens in the capture phase so it hears the side sheet's
 * scroller as well as the page.
 */
function useActiveChapter(chapters: CaseStudyChapter[]) {
  const [active, setActive] = useState<string | null>(null);
  const ids = useRef(chapters.map((c) => c.id));

  useEffect(() => {
    let frame = 0;
    const measure = () => {
      frame = 0;
      const line = window.innerHeight / 3;
      let current: string | null = null;
      for (const id of ids.current) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
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
  }, []);

  return active;
}
