"use client";

import { useEffect, useRef, type RefObject } from "react";
import { CornerUpLeftIcon } from "./icons";

/** Where the arrow sits inside the pill, so it lands under the pointer. */
const HOTSPOT_X = 18;
const HOTSPOT_Y = 20;
/** Keeps the pill off the window's left edge when the pointer hugs it. */
const EDGE = 8;

/**
 * The pointer over the sheet's way back. The system cursor hides and a small
 * glass pill takes its place, built like the page's back pill: the arrow
 * back, then the name of the page underneath ("Home" or "Work"). It opens
 * out as the sheet peeks aside, so the reader sees where a click will land
 * while the page itself shows through.
 *
 * Only for a fine pointer that can hover; touch and pen keep the system
 * behaviour. Purely visual (aria-hidden, no pointer events): the click still
 * lands on the strip underneath, and the sheet's close button is the route
 * for keyboard and assistive tech.
 */
export function PeekCursor({
  strip,
  base,
  hidden,
}: {
  /** The return strip the pointer moves over. */
  strip: RefObject<HTMLElement | null>;
  /** The path of the page under the sheet. */
  base: string;
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
    let x = 0;
    let y = 0;
    const place = () => {
      frame = 0;
      p.style.translate = `${Math.max(x, EDGE + HOTSPOT_X) - HOTSPOT_X}px ${y - HOTSPOT_Y}px`;
    };
    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!frame) frame = requestAnimationFrame(place);
    };
    const onEnter = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      // Placed before it shows, so it never flies in from the last spot.
      place();
      p.dataset.visible = "";
    };
    const onLeave = () => {
      delete p.dataset.visible;
    };

    el.addEventListener("pointerenter", onEnter);
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("pointerenter", onEnter);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [strip]);

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
