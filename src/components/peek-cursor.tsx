"use client";

import { useEffect, useRef, type RefObject } from "react";
import { CornerUpLeftIcon } from "./icons";

/** Where the arrow sits inside the pill, so it lands under the pointer. */
const HOTSPOT_X = 15;
const HOTSPOT_Y = 20;
/** Keeps the pill off the window's left edge when the pointer hugs it. */
const EDGE = 8;
/** How long the pointer must rest on the strip for a pass to count as a peek. */
const PEEK_MIN = 200;

/**
 * Studies already peeked at, for as long as the page stays loaded. The first
 * peek at a study is only a nudge; once it has counted, every later peek at
 * that study is the full one. A reload starts over.
 */
const peeked = new Set<string>();

/**
 * The pointer over the sheet's way back. The system cursor hides and a small
 * glass pill takes its place, built like the page's back pill: the arrow
 * back, then the name of the page underneath ("Home" or "Work").
 *
 * It comes in two steps per study. The first peek is a hint: the sheet
 * nudges aside and the pill is the arrow alone. From the second, the sheet
 * slides well aside and the pill opens out to name the page, so the reader
 * sees where a click will land while the page itself shows through. It sets
 * both (the strip's `data-peek`, the pill's `data-full`), and globals.css
 * does the rest.
 *
 * Only for a fine pointer that can hover; touch and pen keep the system
 * behaviour. Purely visual (aria-hidden, no pointer events): the click still
 * lands on the strip underneath, and the sheet's close button is the route
 * for keyboard and assistive tech.
 */
export function PeekCursor({
  strip,
  base,
  panelId,
  hidden,
}: {
  /** The return strip the pointer moves over. */
  strip: RefObject<HTMLElement | null>;
  /** The path of the page under the sheet. */
  base: string;
  /** Which study is open, so each one starts with the nudge. */
  panelId: string;
  /** True while the sheet is closing. */
  hidden: boolean;
}) {
  const pill = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = strip.current;
    const p = pill.current;
    if (!el || !p) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    let frame = 0;
    let counted = 0;
    /** True from the first real move on the strip in this pass. */
    let moved = false;
    let enteredAt = { x: 0, y: 0 };
    let x = 0;
    let y = 0;
    const place = () => {
      frame = 0;
      p.style.translate = `${Math.max(x, EDGE + HOTSPOT_X) - HOTSPOT_X}px ${y - HOTSPOT_Y}px`;
    };
    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      // Only a pass the pointer makes counts as a peek. The sheet sliding in
      // under a still pointer also enters the strip, without a real move.
      // Brushing past doesn't use up the nudge either: it has to stay.
      if (!moved && !peeked.has(panelId) && (x !== enteredAt.x || y !== enteredAt.y)) {
        moved = true;
        counted = window.setTimeout(() => peeked.add(panelId), PEEK_MIN);
      }
      if (!frame) frame = requestAnimationFrame(place);
    };
    const onEnter = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      // Placed before it shows, so it never flies in from the last spot.
      place();
      p.dataset.visible = "";
      enteredAt = { x, y };
      moved = false;
      if (peeked.has(panelId)) {
        el.dataset.peek = "full";
        p.dataset.full = "";
      } else {
        delete el.dataset.peek;
        delete p.dataset.full;
      }
    };
    const onLeave = () => {
      clearTimeout(counted);
      delete p.dataset.visible;
    };

    el.addEventListener("pointerenter", onEnter);
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      clearTimeout(counted);
      cancelAnimationFrame(frame);
      el.removeEventListener("pointerenter", onEnter);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [strip, panelId]);

  const home = base === "/" || base.startsWith("/?") || base.startsWith("/#");
  const work = !home && base.startsWith("/work");
  const label = home ? "Home" : work ? "Work" : "Back";

  return (
    <div
      ref={pill}
      className="peek-cursor glass"
      data-hidden={hidden || undefined}
      aria-hidden="true"
    >
      <CornerUpLeftIcon />
      <span className="peek-cursor-label">
        <span>{label}</span>
      </span>
    </div>
  );
}
