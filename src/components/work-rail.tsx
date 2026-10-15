"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Mark, type TimelineStop } from "./work-timeline";

/* The career line, stood upright in the left margin. It appears once you
   jump to a job point (a stop on the line at the top, or arriving with a
   #entry), and only while that line is off screen, so the two never show
   together. From then on it keeps your place: the entry you are reading
   lights its dot and its brand as you scroll, and every other stop is a
   jump.

   Brands and dots only, no project names: the history beside it already
   names the entry, so the rail stays quiet. Same language as the line at
   the top otherwise: a hairline, clay dots, the brand mark once per
   employer, and Dock magnification near the pointer, here running up and
   down. Wide screens only (globals.css, .work-rail): it
   needs the margin beside the column, and the split pane hides it. */

/* How far the magnification reaches above and below the pointer. */
const FALLOFF_PX = 44;
/* An entry counts as the one being read once its top passes this line, in
   px from the top of the viewport. Entries run about 220px apart, so it
   sits above the next one when a jump lands an entry at the top. */
const READ_LINE = 140;

type Group = { brandName: string; stops: TimelineStop[] };

export function WorkRail({
  stops,
  lineSelector,
}: {
  /** Oldest first, as the line at the top takes them. */
  stops: TimelineStop[];
  /** The line at the top. The rail stays hidden while it is on screen. */
  lineSelector: string;
}) {
  // Newest first, to match the history beside it.
  const ordered = useMemo(() => [...stops].reverse(), [stops]);
  const groups = useMemo(() => {
    const out: Group[] = [];
    for (const stop of ordered) {
      const last = out[out.length - 1];
      if (last && last.brandName === stop.brand.name) last.stops.push(stop);
      else out.push({ brandName: stop.brand.name, stops: [stop] });
    }
    return out;
  }, [ordered]);

  const [jumped, setJumped] = useState(false);
  const [lineOnScreen, setLineOnScreen] = useState(true);
  const [current, setCurrent] = useState(ordered[0]?.id);
  const listRef = useRef<HTMLDivElement>(null);
  /* The entry you jumped to stays current while it is on screen, even when
     it sits too near the end of the page to scroll up to the read line. */
  const pinned = useRef<string | null>(null);

  /* The trigger: a jump to one of the stops, by hash. Same-page anchor
     clicks fire hashchange; an arrival from another page carries it. */
  useEffect(() => {
    const ids = new Set(ordered.map((stop) => stop.id));
    const check = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      if (ids.has(id)) {
        pinned.current = id;
        setJumped(true);
        setCurrent(id);
      }
    };
    check();
    window.addEventListener("hashchange", check);
    return () => window.removeEventListener("hashchange", check);
  }, [ordered]);

  useEffect(() => {
    const line = document.querySelector(lineSelector);
    if (!line) return;
    const observer = new IntersectionObserver(([entry]) =>
      setLineOnScreen(entry.isIntersecting),
    );
    observer.observe(line);
    return () => observer.disconnect();
  }, [lineSelector]);

  /* Where you are: the last entry whose top has passed the read line. */
  useEffect(() => {
    if (!jumped) return;
    const entries = ordered
      .map((stop) => document.getElementById(stop.id))
      .filter((el): el is HTMLElement => Boolean(el));
    let frame = 0;
    const update = () => {
      frame = 0;
      const pin = pinned.current && document.getElementById(pinned.current);
      if (pin) {
        const top = pin.getBoundingClientRect().top;
        if (top >= 0 && top <= window.innerHeight * 0.8) {
          setCurrent(pin.id);
          return;
        }
        pinned.current = null;
      }
      let id = entries[0]?.id;
      for (const el of entries) {
        if (el.getBoundingClientRect().top <= READ_LINE) id = el.id;
        else break;
      }
      if (id) setCurrent(id);
    };
    // The jump itself may have landed before this listened.
    update();
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [jumped, ordered]);

  /* Dock magnification, as on the line at the top, by distance in y. */
  const magnify = (y: number) => {
    const list = listRef.current;
    if (!list) return;
    list.dataset.active = "";
    for (const item of list.querySelectorAll<HTMLElement>(".rail-stop")) {
      const box = item.getBoundingClientRect();
      const distance = (y - (box.top + box.height / 2)) / FALLOFF_PX;
      item.style.setProperty("--m", Math.exp(-distance * distance).toFixed(3));
    }
  };
  const rest = () => {
    const list = listRef.current;
    if (!list) return;
    delete list.dataset.active;
    for (const item of list.querySelectorAll<HTMLElement>(".rail-stop"))
      item.style.setProperty("--m", "0");
  };

  const shown = jumped && !lineOnScreen;

  return (
    <nav
      aria-label="Career timeline, where you are"
      className="work-rail"
      data-shown={shown ? "" : undefined}
    >
      <div
        ref={listRef}
        className="rail-dock relative"
        onPointerMove={(event) => {
          if (event.pointerType === "mouse") magnify(event.clientY);
        }}
        onPointerLeave={rest}
        onFocus={(event) => {
          const item = (event.target as HTMLElement).closest(".rail-stop");
          if (!item) return;
          const box = item.getBoundingClientRect();
          magnify(box.top + box.height / 2);
        }}
        onBlur={rest}
      >
        {/* The line itself, through the dots. */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-1 right-[7.5px] w-px bg-border"
        />
        {groups.map((group) => {
          const brand = group.stops[0].brand;
          const holdsCurrent = group.stops.some((stop) => stop.id === current);
          return (
            <div key={group.stops[0].id} className="rail-group">
              {!brand.hideMark && (
                <div
                  aria-hidden="true"
                  className="rail-mark"
                  data-current={holdsCurrent ? "" : undefined}
                >
                  <Mark brand={brand} />
                </div>
              )}
              <ol role="list" className="m-0 list-none p-0">
                {group.stops.map((stop) => {
                  const isCurrent = stop.id === current;
                  return (
                    <li key={stop.id} className="rail-stop">
                      <a
                        href={`#${stop.id}`}
                        aria-current={isCurrent ? "location" : undefined}
                        className="group rail-link flex items-center justify-end no-underline hover:no-underline focus-visible:outline-none"
                      >
                        <span className="sr-only">{stop.name}</span>
                        <span
                          aria-hidden="true"
                          className="flex w-4 flex-none justify-center"
                        >
                          <span className="rail-dot block size-1.5 rounded-full group-focus-visible:ring-2 group-focus-visible:ring-ring group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-bg" />
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ol>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
