"use client";

import { useRef } from "react";

/* The career at a glance: every project as a stop on one line, oldest on
   the left, laid out like the 2020 portfolio timeline. Each stop is an
   anchor into the work history below, so the line doubles as its index.

   At rest every stop is small (a dot, a stem, a tiny mark) so the whole
   career fits on one line; near the pointer the stops magnify like the
   macOS Dock and their labels fade in. The jump is a plain #anchor, so it
   works without JavaScript (CSS :hover then magnifies the one stop). */

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
  /** Short label under the logo, e.g. "Alexa skill". */
  label: string;
  /** Full name for screen readers, e.g. "Qantas Alexa skill, 2017". */
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
}: {
  stops: TimelineStop[];
  employers: TimelineEmployer[];
}) {
  const columns = stops.map((stop) => `minmax(0, ${stop.weight}fr)`).join(" ");
  const listRef = useRef<HTMLOListElement>(null);
  const itemRefs = useRef<Array<HTMLLIElement | null>>([]);

  /* Dock magnification: every stop grows by how close it is to the pointer,
     on a gaussian falloff, so the hovered stop is full size, its neighbours
     half way, and the rest stay small. Written straight to a CSS variable
     per stop, so following the pointer never re-renders React. */
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

  return (
    <nav aria-label="Career timeline" className="@container">
      {/* Wide: the line. */}
      <div className="hidden @min-[720px]:block">
        <ol
          ref={listRef}
          role="list"
          className="timeline-dock relative m-0 grid list-none p-0"
          style={{
            gridTemplateColumns: columns,
            height: HEIGHT,
          }}
          onPointerMove={(event) => {
            if (event.pointerType === "mouse") magnify(event.clientX);
          }}
          onPointerLeave={rest}
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
            style={{ top: LINE_Y }}
          />
          {stops.map((stop, index) => {
            const up = index % 2 === 0;
            const showMark = index === 0 || stops[index - 1].brand.name !== stop.brand.name;
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
                  href={`#${stop.id}`}
                  className="group absolute inset-0 block no-underline hover:no-underline focus-visible:outline-none"
                >
                  <span className="sr-only">{stop.name}</span>
                  {/* Dot on the line. */}
                  <span
                    aria-hidden="true"
                    className="timeline-dot absolute left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent group-focus-visible:ring-2 group-focus-visible:ring-ring group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-bg"
                    style={{ top: LINE_Y }}
                  />
                  {/* Dashed stem: stretches with magnification. */}
                  <span
                    aria-hidden="true"
                    className={`timeline-stem absolute left-1/2 w-0 border-l border-dashed border-accent/70 ${
                      up ? "origin-bottom" : "origin-top"
                    }`}
                    style={up ? { bottom: HEIGHT - LINE_Y + 5, height: STEM } : { top: LINE_Y + 5, height: STEM }}
                  />
                  <span
                    aria-hidden="true"
                    className={`timeline-label absolute left-1/2 flex w-28 -translate-x-1/2 flex-col items-center gap-1 text-center ${
                      up ? "origin-bottom justify-end" : "origin-top justify-start"
                    }`}
                    data-dir={up ? "up" : "down"}
                    style={
                      up
                        ? { bottom: HEIGHT - LINE_Y + 5 + STEM + 4 }
                        : { top: LINE_Y + 5 + STEM + 4 }
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
              <span className="block truncate text-meta text-muted">{employer.years}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* Narrow: the same stops as a vertical list, newest first. */}
      <ol
        role="list"
        className="m-0 list-none border-s border-border p-0 @min-[720px]:hidden"
      >
        {[...stops].reverse().map((stop) => (
          <li key={stop.id}>
            <a
              href={`#${stop.id}`}
              className="group relative -ms-px flex items-baseline gap-3 py-2 ps-5 no-underline hover:no-underline"
            >
              <span
                aria-hidden="true"
                className="absolute top-1/2 -left-[5px] size-2.5 -translate-y-1/2 rounded-full bg-accent transition-transform duration-200 group-hover:scale-150"
              />
              <span className="w-24 flex-none text-meta text-muted">
                {stop.brand.hideMark ? "" : stop.brand.name}
              </span>
              <span className="text-body text-text-body transition-colors duration-200 group-hover:text-brand">
                {stop.label}
              </span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
