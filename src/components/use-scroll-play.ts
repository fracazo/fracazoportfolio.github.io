"use client";

import { useEffect, useState, type RefObject } from "react";

/* Active while the row overlaps the middle 10% of the viewport; -45% each
   side leaves that band. Tall stacked cards overlap it for most of their
   time on screen, so the scene isn't cut off mid-play. */
const MID_BAND = "-45% 0px -45% 0px";

/* Long enough that a fast flick through the band never fires a scene,
   short enough that a normal scroll-and-settle feels immediate. Deliberately
   shorter than the hover intent delay: scrolling a row to mid-screen is
   already the "intent". */
const SCROLL_INTENT_MS = 150;

/**
 * Touch stand-in for hover: rows on devices with no hover play their motion
 * while they sit mid-viewport instead. Returns true while the ancestor row
 * (found via `rowSelector`) overlaps the middle band of the screen.
 *
 * `hoverQuery` is the media query the caller's hover path is gated to; while
 * it matches, this hook stays inert so a device never gets both triggers.
 * Gates are checked per intersection so OS-level setting changes apply
 * without a reload, mirroring the hover path.
 */
export function useScrollPlay(
  ref: RefObject<Element | null>,
  rowSelector: string,
  hoverQuery: string,
) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const row = ref.current?.closest(rowSelector);
    if (!row || typeof IntersectionObserver === "undefined") return;
    let timer: number | undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[entries.length - 1];
        if (!entry.isIntersecting) {
          clearTimeout(timer);
          setActive(false);
          return;
        }
        if (window.matchMedia(hoverQuery).matches) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
          return;
        /* The split-panel list shrinks thumbs to 88px: no stage to play on,
           same bail as the hover path. */
        if (row.closest("[data-panel-split]")) return;
        timer = window.setTimeout(() => setActive(true), SCROLL_INTENT_MS);
      },
      { rootMargin: MID_BAND },
    );
    observer.observe(row);
    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [ref, rowSelector, hoverQuery]);

  return active;
}
