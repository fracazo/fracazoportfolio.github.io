"use client";

import { useEffect, useRef } from "react";

/* The career at a glance: every project as a stop on one line, oldest on
   the left, laid out like the 2020 portfolio timeline. Each stop is an
   anchor into the work history below, so the line doubles as its index.

   At rest every stop is small (a dot, a stem, a tiny mark) so the whole
   career fits on one line; near the pointer the stops magnify like the
   macOS Dock and their labels fade in. On a phone the same line scrolls
   sideways and the stop at the centre is the magnified one. The jump is a
   plain #anchor, so it works without JavaScript (CSS :hover then magnifies
   the one stop). */

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
/* The strip hangs every label below the line (each stop has its own 72px,
   so nothing needs to alternate), which halves its height. */
const STRIP_HEIGHT = 124;
const STRIP_LINE_Y = 22;
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
      {/* Wide: the whole career on one line, magnified by the pointer. */}
      <div className="hidden @min-[720px]:block">
        <Track
          stops={stops}
          employers={employers}
          drive="pointer"
          hrefBase={hrefBase}
          sweep={sweep}
        />
      </div>

      {/* Narrow (phones, and the split pane): the same line in a strip the
          thumb scrubs sideways. The stop at the centre is magnified, so the
          Dock effect follows the scroll instead of a pointer. */}
      <div className="@min-[720px]:hidden">
        <Track
          stops={stops}
          employers={employers}
          drive="scroll"
          hrefBase={hrefBase}
          sweep={sweep}
        />
      </div>
    </nav>
  );
}

/* Width of one stop's column on the scrolling strip; an employer with a
   single stop gets two, as on the wide line. */
const STRIP_STOP_PX = 72;
/* How long the wide line's one-time sweep takes, end to end. */
const SWEEP_MS = 2600;

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * The line itself, shared by both layouts. `pointer` fits every stop into
 * the column and magnifies around the mouse; `scroll` lays stops at a fixed
 * width in a horizontal strip, snaps them to the centre, and magnifies
 * around the centre as it scrolls.
 */
function Track({
  stops,
  employers,
  drive,
  hrefBase,
  sweep,
}: {
  stops: TimelineStop[];
  employers: TimelineEmployer[];
  drive: "pointer" | "scroll";
  hrefBase: string;
  sweep: boolean;
}) {
  const strip = drive === "scroll";
  const height = strip ? STRIP_HEIGHT : HEIGHT;
  const lineY = strip ? STRIP_LINE_Y : LINE_Y;
  const columns = stops
    .map((stop) =>
      strip
        ? `${STRIP_STOP_PX * stop.weight}px`
        : `minmax(0, ${stop.weight}fr)`,
    )
    .join(" ");
  const scrollerRef = useRef<HTMLDivElement>(null);
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
  const magnifyCentre = () => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const box = scroller.getBoundingClientRect();
    magnify(box.left + box.width / 2);
  };

  /* The strip opens on the newest work, at the right-hand end, and keeps
     the centre stop magnified as it scrolls (one update per frame). With
     `sweep` it opens on the oldest instead and glides to the newest the
     first time it comes into view, unless the reader touches it first. */
  useEffect(() => {
    if (!strip) return;
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const glide = sweep && !prefersReducedMotion();
    scroller.scrollLeft = glide ? 0 : scroller.scrollWidth;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(magnifyCentre);
    };
    onScroll();
    scroller.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    let touched = false;
    const touch = () => {
      touched = true;
    };
    scroller.addEventListener("pointerdown", touch, { passive: true });
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        if (!touched) {
          scroller.scrollTo({ left: scroller.scrollWidth, behavior: "smooth" });
        }
      },
      { threshold: 0.8 },
    );
    if (glide) observer.observe(scroller);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      scroller.removeEventListener("scroll", onScroll);
      scroller.removeEventListener("pointerdown", touch);
      window.removeEventListener("resize", onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [strip, sweep]);

  /* The wide line's sweep: one magnification wave travels left to right
     the first time the line is mostly on screen, then settles. A real
     pointer on the line takes over at once. */
  const pointerOn = useRef(false);
  useEffect(() => {
    if (strip || !sweep || prefersReducedMotion()) return;
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
  }, [strip, sweep]);

  const line = (
    <>
      <ol
        ref={listRef}
        role="list"
        className="timeline-dock relative m-0 grid list-none p-0"
        style={{ gridTemplateColumns: columns, height }}
        {...(strip
          ? {}
          : {
              onPointerMove: (event: React.PointerEvent) => {
                if (event.pointerType !== "mouse") return;
                pointerOn.current = true;
                magnify(event.clientX);
              },
              onPointerLeave: () => {
                pointerOn.current = false;
                rest();
              },
              onFocus: (event: React.FocusEvent) => {
                const li = (event.target as HTMLElement).closest("li");
                if (!li) return;
                const box = li.getBoundingClientRect();
                magnify(box.left + box.width / 2);
              },
              onBlur: rest,
            })}
      >
        {/* The line itself. */}
        <li
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 h-px bg-border"
          style={{ top: lineY }}
        />
        {stops.map((stop, index) => {
          const up = !strip && index % 2 === 0;
          // On the strip only a few stops are in view, so every stop
          // carries its brand; the wide line shows it once per run.
          const showMark =
            strip ||
            index === 0 ||
            stops[index - 1].brand.name !== stop.brand.name;
          return (
            <li
              key={stop.id}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              className={`timeline-stop relative ${strip ? "snap-center" : ""}`}
            >
              {/* Hairline through the stop, the fine grid behind the line. */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 left-1/2 w-px bg-border-muted"
              />
              <a
                href={`${hrefBase}#${stop.id}`}
                className="group absolute inset-0 block no-underline hover:no-underline focus-visible:outline-none"
                /* A tap that lands off-centre first brings the stop to the
                   middle, so it is magnified as the page moves to it. */
                onClick={
                  strip && !hrefBase
                    ? (event) =>
                        event.currentTarget.closest("li")?.scrollIntoView({
                          inline: "center",
                          block: "nearest",
                          behavior: "smooth",
                        })
                    : undefined
                }
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
            className={`min-w-0 border-t border-border pt-2 ${strip ? "" : "text-center"}`}
            style={{ gridColumn: `span ${employer.span}` }}
          >
            {/* On the strip an employer can run far wider than the screen,
                so its name rides along under the centre stop (sticky at
                the scrollport's middle) for as long as its range is there. */}
            <span
              className={
                strip
                  ? "sticky inline-block -translate-x-1/2 text-center whitespace-nowrap"
                  : "block"
              }
              style={strip ? { left: "50%" } : undefined}
            >
              <span className="block truncate text-meta font-medium text-text-body">
                {employer.name}
              </span>
              <span className="block truncate text-meta text-muted">
                {employer.years}
              </span>
            </span>
          </li>
        ))}
      </ol>
    </>
  );

  if (!strip) return line;

  /* The strip bleeds to the screen edges (-mx-6 cancels the page gutter)
     and fades out at both, saying "there is more this way". Half-width
     padding at each end lets the first and last stops reach the centre. */
  return (
    <div
      ref={scrollerRef}
      className="-mx-6 snap-x snap-mandatory overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 14%, black 86%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 14%, black 86%, transparent)",
      }}
    >
      <div
        className="w-max"
        style={{ paddingInline: `calc(50% - ${STRIP_STOP_PX / 2}px)` }}
      >
        {line}
      </div>
    </div>
  );
}
