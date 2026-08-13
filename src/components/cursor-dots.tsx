"use client";

import { useEffect } from "react";

/* Dot gap, matching --dot-gap in globals.css — the lit dots have to land on
   the same lattice as the dot field they sit over. */
const GAP = 8;
/* Radius of the pool of lit dots around the cursor. */
const RADIUS = 200;
/* Layer opacity while the pointer is moving, and once it has come to rest. */
const MOVING = 0.6;
const RESTING = 0.2;
/* How long the pointer has to sit still before the pool settles back down. */
const REST_DELAY = 140;

/** Positive modulo — JS `%` keeps the sign, which breaks alignment off-screen. */
function mod(n: number, m: number) {
  return ((n % m) + m) % m;
}

/**
 * Lights the backdrop dots around the cursor. A single fixed layer follows the
 * pointer and paints the same lattice as .dot-grid, but as small bright squares
 * instead of dots, so the field reads as tiny lit squares wherever the pointer
 * is. The pool burns brighter while the pointer moves and settles back once it
 * rests, so movement is what lights the field rather than mere presence.
 * Position and opacity travel as CSS variables on <html>, so the move loop
 * never re-renders React.
 */
export function CursorDots() {
  useEffect(() => {
    // Decoration for mouse users only, and only when motion is welcome.
    if (
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const root = document.documentElement;
    let frame = 0;
    let rest = 0;
    let x = 0;
    let y = 0;

    const paint = () => {
      frame = 0;
      const left = x - RADIUS;
      const top = y - RADIUS;
      root.style.setProperty("--cursor-x", `${left}px`);
      root.style.setProperty("--cursor-y", `${top}px`);
      // Offset the squares by where the pool landed, so they stay on the one
      // viewport-wide lattice instead of drifting with the pool.
      root.style.setProperty("--cursor-dot-x", `${-mod(left, GAP)}px`);
      root.style.setProperty("--cursor-dot-y", `${-mod(top, GAP)}px`);
      // Brighten fast on movement, settle slowly — a symmetric fade makes the
      // dots feel like they lag the pointer.
      root.style.setProperty("--cursor-fade", "120ms");
      root.style.setProperty("--cursor-on", `${MOVING}`);
    };

    const settle = () => {
      rest = 0;
      root.style.setProperty("--cursor-fade", "600ms");
      root.style.setProperty("--cursor-on", `${RESTING}`);
    };

    const onMove = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
      if (!frame) frame = requestAnimationFrame(paint);
      clearTimeout(rest);
      rest = window.setTimeout(settle, REST_DELAY);
    };

    const hide = () => {
      if (frame) {
        cancelAnimationFrame(frame);
        frame = 0;
      }
      clearTimeout(rest);
      root.style.setProperty("--cursor-fade", "600ms");
      root.style.setProperty("--cursor-on", "0");
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", hide);
    window.addEventListener("blur", hide);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      clearTimeout(rest);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", hide);
      window.removeEventListener("blur", hide);
      root.style.removeProperty("--cursor-on");
      root.style.removeProperty("--cursor-fade");
    };
  }, []);

  return <div className="cursor-dots" aria-hidden="true" />;
}
