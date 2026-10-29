"use client";

import { useEffect, useState, type RefObject } from "react";
import { IDLE_CAMERA, SceneCursor, type CursorKey } from "./scene-cursor";

/**
 * The scene pointer drawn over real product footage, for recordings made
 * without a visible cursor. It follows the clip's own clock (currentTime),
 * so it stays on its targets however the browser buffers or loops the
 * video, and it maps the recording's pixels onto the element the way the
 * video is painted (object-cover, anchored top left like .footage-window).
 *
 * Every press sits on a control that really changes the screen a frame or
 * two later: the track is read off the footage, not invented.
 */

type FootageTrack = {
  /** The recording's pixel size; keys are in these pixels. */
  w: number;
  h: number;
  keys: CursorKey[];
  presses: number[];
};

/* flow-demo-thumb.mp4 (1280×720, 15.4s): select 1.2 Create account on the
   map, open it in Live, take the primary action through 1.3, 1.4 and 1.5,
   then Overview back to the map. The cut to the phone at 10.5s is an edit,
   so nothing is clicked there. The first key starts before 0 and the last
   rests where it began, so the loop carries on without a blink. */
const FLOW_REST = { x: 900, y: 430 };
const FLOW_CARD = { x: 675, y: 240 };
const FLOW_ACTION = { x: 255, y: 539 };
const FLOW_OVERVIEW = { x: 612, y: 156 };

const TRACKS: Record<string, FootageTrack> = {
  "/videos/flow-demo-thumb.mp4": {
    w: 1280,
    h: 720,
    keys: [
      { at: -400, ms: 0, ...FLOW_REST },
      { at: 2500, ms: 900, ...FLOW_CARD, hand: true },
      // The map eases onto the selected card; the pointer rides with it.
      { at: 3930, ms: 200, x: 698, y: 218, hand: true },
      { at: 5250, ms: 850, ...FLOW_ACTION, hand: true },
      { at: 8600, ms: 700, x: 610, y: 470 },
      { at: 11300, ms: 800, ...FLOW_OVERVIEW, hand: true },
      { at: 12700, ms: 900, ...FLOW_REST },
    ],
    // Each press bottoms out as the screen responds to it.
    presses: [3880, 5050, 6470, 7380, 8300, 12380],
  },
};

/* The pointer's size on the home stage's clip, about 566px wide at 1440;
   smaller clips (the row thumbnails) shrink it in proportion. */
const STAGE_CLIP_W = 566;

/**
 * Runs off the video's own play and pause events, so it works whoever
 * drives playback: the featured stage's selection or a row's hover.
 */
export function FootageCursor({
  src,
  videoRef,
}: {
  src: string;
  videoRef: RefObject<HTMLVideoElement | null>;
}) {
  const track = TRACKS[src];
  const [t, setT] = useState(Infinity);
  const [frame, setFrame] = useState({ camera: IDLE_CAMERA, size: 40 });

  useEffect(() => {
    const el = videoRef.current;
    if (!el || !track) return;
    const measure = () => {
      const zoom = Math.max(
        el.clientWidth / track.w,
        el.clientHeight / track.h,
      );
      setFrame({
        camera: { tx: 0, ty: 0, zoom },
        size: 40 * Math.min(1, el.clientWidth / STAGE_CLIP_W),
      });
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [videoRef, track]);

  useEffect(() => {
    const el = videoRef.current;
    if (!el || !track) return;
    let raf = 0;
    const tick = () => {
      // Until the clip is actually moving, show nothing rather than a
      // pointer parked over the poster.
      setT(el.readyState < 2 ? Infinity : el.currentTime * 1000);
      raf = requestAnimationFrame(tick);
    };
    const start = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(tick);
    };
    const stop = () => {
      cancelAnimationFrame(raf);
      setT(Infinity);
    };
    el.addEventListener("playing", start);
    el.addEventListener("pause", stop);
    el.addEventListener("emptied", stop);
    if (!el.paused) start();
    return () => {
      stop();
      el.removeEventListener("playing", start);
      el.removeEventListener("pause", stop);
      el.removeEventListener("emptied", stop);
    };
  }, [videoRef, track]);

  if (!track) return null;
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden motion-reduce:hidden"
    >
      <SceneCursor
        t={t}
        keys={track.keys}
        presses={track.presses}
        camera={frame.camera}
        size={frame.size}
      />
    </div>
  );
}
