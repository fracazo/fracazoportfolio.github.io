"use client";

import { useRef } from "react";

/**
 * Rainbow fill for the word, in two sets. The dark theme gets bright stops; the
 * light theme gets deeper ones, because gradient text is painted straight onto
 * the page and the bright set washes out on paper. The gradient spans the word
 * exactly once, so the whole spectrum reads at a glance.
 */
const gradient = [
  "bg-[linear-gradient(90deg,#FF8A5B,#FFD166,#6BCB77,#4D96FF,#C77DFF)]",
  "light:bg-[linear-gradient(90deg,#D2451E,#9A6410,#2E7D32,#1565C0,#7B2FBF)]",
].join(" ");

/** How far the card drifts, as a fraction of how far the pointer is off centre. */
const DRIFT_RATIO = 0.5;

/**
 * HoverJoke — a bolded word that reveals a picture on hover, and the card
 * drifts with the pointer as it crosses the word.
 *
 * Two layers do two jobs. The outer one carries the drift on a short ease-out,
 * so following the pointer stays responsive. The inner card carries the
 * entrance: it pops from 60% with a back-out curve, which overshoots and
 * settles the way a spring does, growing from its bottom edge so it reads as
 * coming out of the word. Separating them keeps the springy entrance from
 * making every pointer move wobble.
 *
 * Showing and hiding is still CSS (group-hover and group-focus-within), so it
 * works the same for a mouse and for the keyboard, and the card is centred with
 * no drift when it is reached by tab. The word is a tab stop and points at the
 * card with aria-describedby, so the joke reaches a screen reader too rather
 * than being a sighted-mouse-user easter egg.
 */
export function HoverJoke({
  id,
  word,
  src,
  alt,
  width,
  height,
}: {
  id: string;
  word: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}) {
  const drift = useRef<HTMLSpanElement>(null);

  /**
   * Written straight to the style attribute rather than through state: this
   * fires on every pointer move, and re-rendering at that rate would be silly
   * for what is one number feeding one CSS variable.
   */
  function track(event: React.PointerEvent<HTMLSpanElement>) {
    if (event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    const fromCentre = event.clientX - rect.left - rect.width / 2;
    drift.current?.style.setProperty(
      "--joke-drift",
      `${(fromCentre * DRIFT_RATIO).toFixed(1)}px`,
    );
  }

  function recentre() {
    drift.current?.style.setProperty("--joke-drift", "0px");
  }

  return (
    <span className="group relative inline-block">
      <span
        tabIndex={0}
        aria-describedby={id}
        onPointerMove={track}
        onPointerLeave={recentre}
        className={`bg-clip-text font-semibold text-transparent ${gradient}`}
      >
        {word}
      </span>

      <span
        ref={drift}
        className="pointer-events-none absolute bottom-full left-1/2 z-30 mb-3 block w-[min(320px,80vw)] translate-x-[calc(-50%+var(--joke-drift,0px))] transition-[translate] duration-200 ease-out motion-reduce:transition-none"
      >
        <span
          id={id}
          role="tooltip"
          className="invisible block origin-bottom translate-y-5 scale-[0.6] overflow-hidden rounded-card border border-black/10 bg-white p-1 opacity-0 shadow-elevated transition-[opacity,scale,translate] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:scale-100 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 motion-reduce:transition-none motion-reduce:scale-100"
        >
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading="lazy"
            className="block w-full rounded-[calc(var(--radius)-2px)]"
          />
        </span>
      </span>
    </span>
  );
}
