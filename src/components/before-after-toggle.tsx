"use client";

import { useState } from "react";

type Shot = { src: string; alt: string };

/**
 * BeforeAfterToggle — two screenshots in one frame with a Before / After
 * switch above them. Both images share a single grid cell, so the frame holds
 * the taller one's height and the text below never jumps when you switch.
 * The hidden image is inert and aria-hidden, so screen readers only hear the
 * one on screen.
 */
export function BeforeAfterToggle({
  before,
  after,
}: {
  before: Shot;
  after: Shot;
}) {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <figure className="before-after">
      <div className="before-after-switch" role="group" aria-label="Compare screens">
        <button type="button" aria-pressed={!showAfter} onClick={() => setShowAfter(false)}>
          Before
        </button>
        <button type="button" aria-pressed={showAfter} onClick={() => setShowAfter(true)}>
          After
        </button>
      </div>
      <div className="before-after-frame">
        <img
          src={before.src}
          alt={before.alt}
          data-visible={!showAfter || undefined}
          aria-hidden={showAfter || undefined}
        />
        <img
          src={after.src}
          alt={after.alt}
          data-visible={showAfter || undefined}
          aria-hidden={!showAfter || undefined}
        />
      </div>
    </figure>
  );
}
