"use client";

import { useEffect, useRef } from "react";

/* The career at a glance: every project as a stop on one line, oldest on
   the left, laid out like the 2020 portfolio timeline. Each stop is an
   anchor into the work history below, so the line doubles as its index.

   At rest every stop is small (a dot, a stem, a tiny mark) so the whole
   career fits on one line; near the pointer the stops magnify like the
   macOS Dock and their labels fade in. Narrow columns (phones, the split
   pane) leave it out. The jump is a plain #anchor, so it works without
   JavaScript (CSS :hover then magnifies the one stop). */

export type Brand = {
  name: string;
  /** Own work with no client: no mark on the line. */
  hideMark?: boolean;
  /** Monochrome mask. Without one the brand name is set as text. */
  logo?: { src: string; w: number; h: number };
};

export type TimelineStop = {
  /** Column weight. An employer with a single stop gets 2, so its name
      and years fit under it. */
  weight: number;
  /** Anchor id of the entry this stop jumps to. */
  id: string;
  brand: Brand;
  /** Short label under the logo, e.g. "Chatbot". */
  label: string;
  /** Full name for screen readers, e.g. "Qantas concierge chatbot, 2018". */
  name: string;
};

export type TimelineEmployer = {
  name: string;
  years: string;
  /** How many stops, in order, sit under this employer. */
  span: number;
};

/* Geometry, in px. The line sits at LINE_Y; stems reach STEM px off it at
   full magnification. The scaling itself lives in globals.css under
   .timeline-stop, driven by the --m variable (0 at rest, 1 under the
   pointer). */
const HEIGHT = 236;
const LINE_Y = 118;
const STEM = 26;
/* How far the magnification reaches either side of the pointer: about one
   and a half stops, so the neighbours swell too, as in the Dock. */
const FALLOFF_PX = 72;

function Mark({ brand }: { brand: Brand }) {
  if (brand.hideMark) return null;
  if (!brand.logo) {
    return (
      <span className="timeline-mark block text-meta font-semibold whitespace-nowrap text-text">
        {brand.name}
      </span>
    );
  }
  return (
    <span
      aria-hidden="true"
      className="timeline-mark mx-auto block text-text"
      style={{
        width: brand.logo.w,
        height: brand.logo.h,
        backgroundColor: "currentColor",
        WebkitMaskImage: `url(${brand.logo.src})`,
        maskImage: `url(${brand.logo.src})`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskSize: "contain",
        maskSize: "contain",
      }}
    />
  );
}

/**
 * Horizontal on a wide column; below 720px of column (phones, and the split
 * pane) the same stops become a vertical list, newest first to match the
 * history underneath. Labels alternate above and below the line so
 * neighbouring stops each get twice their column's width. The brand mark
 * shows only on the first stop of a run, so Qantas reads once with its
 * projects strung after it.
 */
export function WorkTimeline({
  stops,
  employers,
  hrefBase = "",
  sweep = false,
  label = "Career timeline",
}: {
  stops: TimelineStop[];
  employers: TimelineEmployer[];
  /** Page the stops jump into; empty means this page (the work history). */
  hrefBase?: string;
  /** Play one magnification wave along the line the first time it is seen. */
  sweep?: boolean;
  label?: string;
}) {
  /* Arriving from another page with a #entry (the home page's Earlier work
     rows) lands at the top: the router does not scroll to the hash after a
     page change, and its own scroll reset cancels a smooth one. Jump there
     instantly once the router is done. */
  useEffect(() => {
    if (hrefBase) return;
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;
    const jump = () => {
      const entry = document.getElementById(id);
      if (!entry) return;
      entry.scrollIntoView({ block: "start", behavior: "instant" });
      // :target does not update on a router navigation, so flash by class.
      entry.classList.add("is-arrived");
    };
    // On a fresh load something resets the scroll after the first jump, so
    // check again shortly and repeat if it was undone.
    const timer = window.setTimeout(jump, 50);
    const retry = window.setTimeout(() => {
      const entry = document.getElementById(id);
      if (entry && Math.abs(entry.getBoundingClientRect().top) > 120) jump();
    }, 450);
    return () => {
      clearTimeout(timer);
      clearTimeout(retry);
    };
  }, [hrefBase]);

  return (
    <nav aria-label={label} className="@container">
      {/* The whole career on one line, magnified by the pointer. Below
          720px of column (phones, the split pane) it is left out: the
          line needs the width to read, and the history below carries
          the same entries. */}
      <div className="hidden @min-[720px]:block">
        <Track
          stops={stops}
          employers={employers}
          hrefBase={hrefBase}
          sweep={sweep}
        />
      </div>
    </nav>
  );
}

/* How long the wide line's one-time sweep takes, end to end. */
const SWEEP_MS = 2600;

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * The line itself: every stop fits the column, and the stops around the
 * pointer magnify.
 */
function Track({
  stops,
  employers,
  hrefBase,
  sweep,
}: {
  stops: TimelineStop[];
  employers: TimelineEmployer[];
  hrefBase: string;
  sweep: boolean;
}) {
  const height = HEIGHT;
  const lineY = LINE_Y;
  const columns = stops.map((stop) => `minmax(0, ${stop.weight}fr)`).join(" ");
  const listRef = useRef<HTMLOListElement>(null);
  const itemRefs = useRef<Array<HTMLLIElement | null>>([]);

  /* Dock magnification: every stop grows by how close it is to x, on a
     gaussian falloff, so the stop at x is full size, its neighbours half
     way, and the rest stay small. Written straight to a CSS variable per
     stop, so following the pointer or the scroll never re-renders React. */
  const magnify = (x: number) => {
    const list = listRef.current;
    if (!list) return;
    list.dataset.active = "";
    for (const item of itemRefs.current) {
      if (!item) continue;
      const box = item.getBoundingClientRect();
      const distance = (x - (box.left + box.width / 2)) / FALLOFF_PX;
      item.style.setProperty("--m", Math.exp(-distance * distance).toFixed(3));
    }
  };
  const rest = () => {
    const list = listRef.current;
    if (!list) return;
    delete list.dataset.active;
    for (const item of itemRefs.current) item?.style.setProperty("--m", "0");
  };

  /* The wide line's sweep: one magnification wave travels left to right
     the first time the line is mostly on screen, then settles. A real
     pointer on the line takes over at once. */
  const pointerOn = useRef(false);
  useEffect(() => {
    if (!sweep || prefersReducedMotion()) return;
    const list = listRef.current;
    if (!list) return;
    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          if (pointerOn.current) return;
          const t = Math.min(1, (now - start) / SWEEP_MS);
          // Ease in and out, so the wave gathers, travels, and lands.
          const eased = t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2;
          const box = list.getBoundingClientRect();
          magnify(box.left - FALLOFF_PX + (box.width + 2 * FALLOFF_PX) * eased);
          if (t < 1) frame = requestAnimationFrame(tick);
          else rest();
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    observer.observe(list);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sweep]);

  const line = (
    <>
      <ol
        ref={listRef}
        role="list"
        className="timeline-dock relative m-0 grid list-none p-0"
        style={{ gridTemplateColumns: columns, height }}
        onPointerMove={(event) => {
          if (event.pointerType !== "mouse") return;
          pointerOn.current = true;
          magnify(event.clientX);
        }}
        onPointerLeave={() => {
          pointerOn.current = false;
          rest();
        }}
        onFocus={(event) => {
          const li = (event.target as HTMLElement).closest("li");
          if (!li) return;
          const box = li.getBoundingClientRect();
          magnify(box.left + box.width / 2);
        }}
        onBlur={rest}
      >
        {/* The line itself. */}
        <li
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 h-px bg-border"
          style={{ top: lineY }}
        />
        {stops.map((stop, index) => {
          const up = index % 2 === 0;
          // The brand shows once per run of its stops.
          const showMark =
            index === 0 || stops[index - 1].brand.name !== stop.brand.name;
          return (
            <li
              key={stop.id}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              className="timeline-stop relative"
            >
              {/* Hairline through the stop, the fine grid behind the line. */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 left-1/2 w-px bg-border-muted"
              />
              <a
                href={`${hrefBase}#${stop.id}`}
                className="group absolute inset-0 block no-underline hover:no-underline focus-visible:outline-none"
              >
                <span className="sr-only">{stop.name}</span>
                {/* Dot on the line. */}
                <span
                  aria-hidden="true"
                  className="timeline-dot absolute left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent group-focus-visible:ring-2 group-focus-visible:ring-ring group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-bg"
                  style={{ top: lineY }}
                />
                {/* Dashed stem: stretches with magnification. */}
                <span
                  aria-hidden="true"
                  className={`timeline-stem absolute left-1/2 w-0 border-l border-dashed border-accent/70 ${
                    up ? "origin-bottom" : "origin-top"
                  }`}
                  style={
                    up
                      ? { bottom: height - lineY + 5, height: STEM }
                      : { top: lineY + 5, height: STEM }
                  }
                />
                <span
                  aria-hidden="true"
                  className={`timeline-label absolute left-1/2 flex w-28 -translate-x-1/2 flex-col items-center gap-1 text-center ${
                    up
                      ? "origin-bottom justify-end"
                      : "origin-top justify-start"
                  }`}
                  data-dir={up ? "up" : "down"}
                  style={
                    up
                      ? { bottom: height - lineY + 5 + STEM + 4 }
                      : { top: lineY + 5 + STEM + 4 }
                  }
                >
                  {showMark && <Mark brand={stop.brand} />}
                  <span className="timeline-text block text-meta leading-tight text-text">
                    {stop.label}
                  </span>
                </span>
              </a>
            </li>
          );
        })}
      </ol>

      {/* Where I worked: one bracket per employer under its stops. */}
      <ol
        role="list"
        className="m-0 mt-1 grid list-none gap-x-2 p-0"
        style={{ gridTemplateColumns: columns }}
      >
        {employers.map((employer) => (
          <li
            key={employer.name}
            className="min-w-0 border-t border-border pt-2 text-center"
            style={{ gridColumn: `span ${employer.span}` }}
          >
            <span className="block truncate text-meta font-medium text-text-body">
              {employer.name}
            </span>
            <span className="block truncate text-meta text-muted">
              {employer.years}
            </span>
          </li>
        ))}
      </ol>
    </>
  );

  return line;
}
