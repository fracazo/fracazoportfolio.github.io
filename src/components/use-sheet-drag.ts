"use client";

import { useEffect, useRef, type RefObject } from "react";

/** Pull this far, or flick this fast, and the sheet goes. */
const DISMISS_PX = 120;
const DISMISS_SPEED = 0.6; // px per ms

/**
 * Pull-down-to-dismiss for the phone sheet, the way native sheets behave.
 * A drag that starts on the grabber always moves the sheet; one that starts
 * on the content only does once the content is scrolled to the top, so
 * reading never fights the gesture. Past the threshold the sheet hands off
 * to `onDismiss` from where the finger left it (`--drag-y` feeds the exit
 * animation); short of it, it springs back.
 */
export function useSheetDrag({
  sheet,
  scroller,
  grabber,
  enabled,
  onDismiss,
}: {
  sheet: RefObject<HTMLElement | null>;
  scroller: RefObject<HTMLElement | null>;
  grabber: RefObject<HTMLElement | null>;
  enabled: boolean;
  onDismiss: () => void;
}) {
  // Read through a ref so a re-render mid-drag never re-binds the listeners.
  const dismiss = useRef(onDismiss);
  useEffect(() => {
    dismiss.current = onDismiss;
  });

  useEffect(() => {
    const el = sheet.current;
    if (!enabled || !el) return;

    let startY = 0;
    let startT = 0;
    let dy = 0;
    let fromGrabber = false;
    let dragging = false;
    let tracking = false;

    // `translate`, not `transform`: the entry animation holds `transform` for
    // good, and an animation outranks an inline style, so a transform here
    // would never show. The two properties compose.
    const set = (y: number) => {
      el.style.transition = "none";
      el.style.translate = y > 0 ? `0 ${y}px` : "";
    };

    const onStart = (e: TouchEvent) => {
      if (e.touches.length !== 1) return;
      startY = e.touches[0].clientY;
      startT = e.timeStamp;
      dy = 0;
      dragging = false;
      fromGrabber = Boolean(grabber.current?.contains(e.target as Node));
      tracking = fromGrabber || (scroller.current?.scrollTop ?? 0) <= 0;
    };

    const onMove = (e: TouchEvent) => {
      if (!tracking) return;
      dy = e.touches[0].clientY - startY;
      if (!dragging) {
        // Pushing up reads the content; only a pull down becomes a drag.
        if (dy <= 4) {
          if (dy < 0 && !fromGrabber) tracking = false;
          return;
        }
        if (!fromGrabber && (scroller.current?.scrollTop ?? 0) > 0) {
          tracking = false;
          return;
        }
        dragging = true;
      }
      e.preventDefault();
      set(Math.max(0, dy));
    };

    const onEnd = (e: TouchEvent) => {
      if (!dragging) {
        tracking = false;
        return;
      }
      dragging = tracking = false;
      const speed = dy / Math.max(1, e.timeStamp - startT);
      if (dy > DISMISS_PX || speed > DISMISS_SPEED) {
        // The exit animation takes over from where the finger let go.
        el.style.setProperty("--drag-y", `${dy}px`);
        el.style.transition = "";
        el.style.translate = "";
        dismiss.current();
      } else {
        el.style.transition = "translate 320ms cubic-bezier(0.32, 0.72, 0, 1)";
        el.style.translate = "";
      }
    };

    el.addEventListener("touchstart", onStart, { passive: true });
    el.addEventListener("touchmove", onMove, { passive: false });
    el.addEventListener("touchend", onEnd);
    el.addEventListener("touchcancel", onEnd);
    return () => {
      el.removeEventListener("touchstart", onStart);
      el.removeEventListener("touchmove", onMove);
      el.removeEventListener("touchend", onEnd);
      el.removeEventListener("touchcancel", onEnd);
      // --drag-y stays: the exit animation, which starts as this unbinds,
      // still needs to know where the finger let go.
      el.style.translate = "";
      el.style.transition = "";
    };
  }, [sheet, scroller, grabber, enabled]);
}
