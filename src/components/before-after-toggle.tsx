"use client";

import { useState, type ReactNode } from "react";

type Shot = { src: string; alt: string };
/** A live HTML rebuild instead of a screenshot; `label` names it for screen readers. */
type Pane = { node: ReactNode; label: string };

function Side({ shot, visible }: { shot: Shot | Pane; visible: boolean }) {
  const state = {
    "data-visible": visible || undefined,
    "aria-hidden": !visible || undefined,
  };
  return "node" in shot ? (
    <div className="before-after-pane" role="img" aria-label={shot.label} inert={!visible} {...state}>
      {shot.node}
    </div>
  ) : (
    <img src={shot.src} alt={shot.alt} {...state} />
  );
}

/**
 * BeforeAfterToggle: two screenshots in one frame with a switch above them,
 * labelled Before / After unless `labels` names the two states (e.g. Free /
 * Premium). Switching in place shows what changed better than a side-by-side
 * pair, where the eye has to hunt for the difference. Both images share a single grid cell, so the frame holds
 * the taller one's height and the text below never jumps when you switch.
 * The hidden image is inert and aria-hidden, so screen readers only hear the
 * one on screen.
 */
export function BeforeAfterToggle({
  before,
  after,
  labels = ["Before", "After"],
  caption,
}: {
  before: Shot | Pane;
  after: Shot | Pane;
  labels?: [string, string];
  caption?: ReactNode;
}) {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <figure className="before-after">
      <div className="before-after-switch" role="group" aria-label="Compare screens">
        <button type="button" aria-pressed={!showAfter} onClick={() => setShowAfter(false)}>
          {labels[0]}
        </button>
        <button type="button" aria-pressed={showAfter} onClick={() => setShowAfter(true)}>
          {labels[1]}
        </button>
      </div>
      <div className="before-after-frame">
        <Side shot={before} visible={!showAfter} />
        <Side shot={after} visible={showAfter} />
      </div>
      {caption && <figcaption className="img-caption">{caption}</figcaption>}
    </figure>
  );
}
