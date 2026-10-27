import type { ReactNode } from "react";

/**
 * A pointer and a camera for the hero scenes, so a reader sees where each
 * click lands and the stage leans in on the part of the product that moves.
 *
 * Both are plain functions of the scene clock `t`, like the scenes: a track
 * of moves, each starting at `at` and easing to its target over `ms`. The
 * cursor is drawn outside the camera, at a constant size, at the screen
 * position of its scene point under the current camera, so it stays on its
 * target while the camera zooms or pans. The settled frame (t = Infinity,
 * also what reduced motion shows) has the camera pulled back and no cursor.
 */

export type CameraKey = {
  at: number;
  ms: number;
  /** The scene point the camera centres on. */
  x: number;
  y: number;
  zoom: number;
};

export type CursorKey = {
  at: number;
  ms: number;
  /** The hotspot's target, in scene pixels. */
  x: number;
  y: number;
  /** Becomes a hand as it arrives: it is over something clickable. */
  hand?: boolean;
};

export type Camera = { tx: number; ty: number; zoom: number };

export const IDLE_CAMERA: Camera = { tx: 0, ty: 0, zoom: 1 };

const easeInOut = (p: number) =>
  p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;

const clamp01 = (p: number) => Math.min(1, Math.max(0, p));

/* Where a track is at `t`: the last move that has started, eased from the
   point the previous one ended on. `progress` is that move's eased 0..1. */
function trackAt<K extends { at: number; ms: number }>(t: number, keys: K[]) {
  let i = 0;
  keys.forEach((key, k) => {
    if (t >= key.at) i = k;
  });
  const to = keys[i];
  const from = keys[Math.max(0, i - 1)];
  const raw = to.ms === 0 ? 1 : clamp01((t - to.at) / to.ms);
  return { from, to, raw, progress: easeInOut(raw) };
}

const lerp = (a: number, b: number, p: number) => a + (b - a) * p;

/**
 * The camera at `t` for a `w` × `h` scene, kept inside the scene's edges so
 * zooming never shows past the drawing.
 */
export function cameraAt(
  t: number,
  keys: CameraKey[],
  w: number,
  h: number,
): Camera {
  if (!Number.isFinite(t) || keys.length === 0) return IDLE_CAMERA;
  const { from, to, progress } = trackAt(t, keys);
  const zoom = lerp(from.zoom, to.zoom, progress);
  const x = lerp(from.x, to.x, progress);
  const y = lerp(from.y, to.y, progress);
  const tx = Math.min(0, Math.max(w - w * zoom, w / 2 - zoom * x));
  const ty = Math.min(0, Math.max(h - h * zoom, h / 2 - zoom * y));
  return { tx, ty, zoom };
}

export const cameraTransform = ({ tx, ty, zoom }: Camera) =>
  `translate(${tx}px, ${ty}px) scale(${zoom})`;

/** The scene, framed by the camera. */
export function SceneCamera({
  camera,
  w,
  h,
  children,
}: {
  camera: Camera;
  w: number;
  h: number;
  children: ReactNode;
}) {
  return (
    <div
      className="absolute top-0 left-0 origin-top-left"
      style={{ width: w, height: h, transform: cameraTransform(camera) }}
    >
      {children}
    </div>
  );
}

/* Hotspots inside each drawing's 24-unit box: the arrow's tip and the
   hand's fingertip. */
const ARROW_HOT = { x: 4, y: 2.5 };
const HAND_HOT = { x: 9.5, y: 2 };
/* Drawn size in scene pixels: about 42px on the home stage at 1440, big enough to
   find at a glance, like a screen recording's pointer. */
const CURSOR_SIZE = 40;
const PRESS_MS = 180;
const RIPPLE_MS = 560;
/* Moves bow slightly off the straight line, as a hand on a mouse does. */
const ARC = 0.12;

/**
 * The pointer. `presses` are click times: the pointer dips and a ring
 * ripples out from the hotspot in `color`. Hidden on the settled frame.
 */
export function SceneCursor({
  t,
  keys,
  presses,
  camera = IDLE_CAMERA,
  color = "var(--accent)",
}: {
  t: number;
  keys: CursorKey[];
  presses: number[];
  camera?: Camera;
  color?: string;
}) {
  if (!Number.isFinite(t) || keys.length === 0) return null;

  const { from, to, raw, progress } = trackAt(t, keys);
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const bow = Math.sin(Math.PI * progress) * ARC;
  const x = lerp(from.x, to.x, progress) - dy * bow;
  const y = lerp(from.y, to.y, progress) + dx * bow;
  const hand = raw > 0.85 ? Boolean(to.hand) : Boolean(from.hand && raw < 0.15);

  const press = presses.find((at) => t >= at && t < at + RIPPLE_MS);
  const pressP = press === undefined ? 1 : clamp01((t - press) / PRESS_MS);
  const dip = 1 - 0.14 * Math.sin(Math.PI * pressP);
  const rippleP = press === undefined ? 1 : clamp01((t - press) / RIPPLE_MS);

  const sx = camera.tx + camera.zoom * x;
  const sy = camera.ty + camera.zoom * y;
  const hot = hand ? HAND_HOT : ARROW_HOT;
  const unit = CURSOR_SIZE / 24;

  return (
    <div
      className="absolute top-0 left-0"
      style={{
        transform: `translate(${sx}px, ${sy}px)`,
        opacity: clamp01((t - keys[0].at) / 200),
      }}
    >
      {press !== undefined && (
        <span
          className="absolute rounded-full border-2"
          style={{
            width: 44,
            height: 44,
            left: -22,
            top: -22,
            borderColor: color,
            background: `color-mix(in oklab, ${color} 18%, transparent)`,
            opacity: 1 - rippleP,
            transform: `scale(${0.3 + 0.7 * easeOut(rippleP)})`,
          }}
        />
      )}
      <svg
        viewBox="0 0 24 24"
        width={CURSOR_SIZE}
        height={CURSOR_SIZE}
        className="absolute overflow-visible"
        style={{
          left: -hot.x * unit,
          top: -hot.y * unit,
          transform: `scale(${dip})`,
          transformOrigin: `${hot.x * unit}px ${hot.y * unit}px`,
          filter: "drop-shadow(0 2px 3px rgb(0 0 0 / 0.28))",
        }}
      >
        {hand ? <HandShape /> : <ArrowShape />}
      </svg>
    </div>
  );
}

const easeOut = (p: number) => 1 - Math.pow(1 - p, 3);

/* Cursors stay white with a near-black edge in both modes, as the system's
   do, so they read as the reader's own pointer rather than part of the UI. */
const INK = "#16140f";
const FILL = "#ffffff";

function ArrowShape() {
  return (
    <path
      d="M4 2.5v16.2l4-3.9 2.9 6.4 2.8-1.2-2.8-6.3h5.7Z"
      fill={FILL}
      stroke={INK}
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  );
}

/* The pointing hand, built from round-capped strokes: each part is drawn
   once wide in ink and again narrower in white, so the parts merge into one
   outlined silhouette with no seams where they overlap. */
const HAND_PARTS: Array<{ d: string; w: number }> = [
  { d: "M9.5 4v10", w: 4 },
  { d: "M13.5 10v4.5", w: 4 },
  { d: "M17.3 11v4", w: 3.8 },
  { d: "M20.6 12.6v3.4", w: 3.4 },
  { d: "M4.6 14.6 8.4 19", w: 3.8 },
  { d: "M11.5 15.5h6.6M10.5 18.5h9.4M12 20.8h7", w: 5.4 },
];

function HandShape() {
  return (
    <g strokeLinecap="round" strokeLinejoin="round" fill="none">
      {HAND_PARTS.map((part) => (
        <path key={part.d} d={part.d} stroke={INK} strokeWidth={part.w + 2.2} />
      ))}
      {HAND_PARTS.map((part) => (
        <path key={part.d} d={part.d} stroke={FILL} strokeWidth={part.w} />
      ))}
      {/* Knuckle creases between the folded fingers. */}
      <path
        d="M11.5 13.6v2.4M15.4 14v2.2M19 14.6v1.8"
        stroke={INK}
        strokeWidth="1.1"
      />
    </g>
  );
}
