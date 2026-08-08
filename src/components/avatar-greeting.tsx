"use client";

import { useEffect, useRef } from "react";

/**
 * The hero avatar, which waves hello shortly after the page loads and then,
 * if the visitor is still sitting at the top of the page, points down to say
 * there is more below.
 *
 * Both clips are generated from the same still, and both open and close on the
 * same resting pose, so the two <video> layers can be cross-swapped by opacity
 * with no visible seam: whichever one is on top is showing the same resting
 * frame the other one ended on. The still PNG is the poster on both, so the
 * element paints instantly.
 *
 * The clips are still the raw 5s generations, which carry dead frames at each
 * end. Rather than wait on the re-encode, each one is played as a segment
 * between an in and an out frame — the same cut points the trim will bake in,
 * so this previews the final timing. Once the files are trimmed, the frame
 * constants below collapse to the full clip.
 */
const FPS = 24;

/**
 * Frame-accurate in/out points and playback rate per clip.
 *
 * Both clips end by settling back to the resting pose, and the out points have
 * to land *after* that settle finishes or the clip freezes mid-motion and the
 * handoff to the next one shows. Measured against each clip's own final frame,
 * the wave is still 11.1 away at f92 and reaches 1.5 by f100; the point is 9.9
 * away at f104 and only reaches 0.4 by f116. Past those frames each clip is
 * static, so holding longer gains nothing.
 */
const WAVE = { in: 30, out: 100, rate: 1.5 };
const POINT = { in: 8, out: 116, rate: 1.5 };

/** How long after load the greeting plays. Lands just after the intro reveal
 *  has sharpened the avatar into focus and before the headline arrives. */
const WAVE_DELAY = 1100;

/** Quiet beat between the wave settling and the nudge to scroll. */
const POINT_DELAY = 2500;

export function AvatarGreeting() {
  const waveRef = useRef<HTMLVideoElement>(null);
  const pointRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const wave = waveRef.current;
    const point = pointRef.current;
    if (!wave || !point) return;

    // Anyone who has asked for less motion just keeps the still poster.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timers: number[] = [];
    let scrolled = false;
    let cancelled = false;

    /**
     * Plays one clip between two frames. `timeupdate` only fires a few times a
     * second, which is far too coarse to land on a frame, so the out point is
     * watched on an animation frame and the clip is paused there — leaving it
     * held on its closing rest frame.
     */
    const playSegment = async (video: HTMLVideoElement, clip: typeof WAVE) => {
      // Seeking before the metadata has arrived is silently dropped, which
      // would play the clip from frame zero and expose the dead lead-in. iOS
      // ignores `preload` on cellular, so this is the common case there, not an
      // edge case.
      if (video.readyState === 0) {
        await new Promise<void>((resolve) => {
          video.addEventListener("loadedmetadata", () => resolve(), {
            once: true,
          });
        });
      }
      if (cancelled) return;

      return new Promise<void>((resolve) => {
        const out = clip.out / FPS;
        video.currentTime = clip.in / FPS;
        video.playbackRate = clip.rate;

        let done = false;
        const stop = () => {
          if (done) return;
          done = true;
          video.pause();
          resolve();
        };

        const watch = () => {
          if (done) return;
          if (cancelled) return stop();
          if (video.currentTime >= out || video.ended) return stop();
          requestAnimationFrame(watch);
        };

        // Autoplay can still be refused (a background tab with no prior
        // interaction, or low power mode); the clip just stays parked on its
        // opening rest frame, so there is nothing to recover from.
        video.play().then(() => {
          // `requestAnimationFrame` does not fire while the document is
          // hidden, so a page opened in a background tab would sail past the
          // out point and play the dead tail frames. A timer sized to the
          // segment backs the frame-accurate watcher up.
          const ms = ((clip.out - clip.in) / FPS / clip.rate) * 1000;
          timers.push(window.setTimeout(stop, ms + 100));
          requestAnimationFrame(watch);
        }, resolve);
      });
    };

    const onScroll = () => {
      scrolled = true;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    timers.push(
      window.setTimeout(async () => {
        await playSegment(wave, WAVE);
        if (cancelled) return;

        timers.push(
          window.setTimeout(() => {
            // Pointing down at content someone is already reading is noise, so
            // the nudge is skipped outright once they have scrolled. It plays
            // at most once either way.
            if (cancelled || scrolled || window.scrollY > 0) return;
            // Revealed only once it is actually playing: if autoplay is
            // refused there is no reason to swap layers at all.
            point.addEventListener(
              "playing",
              () => {
                point.style.opacity = "1";
              },
              { once: true },
            );
            void playSegment(point, POINT);
          }, POINT_DELAY),
        );
      }, WAVE_DELAY),
    );

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      role="img"
      aria-label="Alex Fracazo"
      className="relative mt-24 mb-8 h-[60px] w-[60px] max-md:mt-14"
    >
      <video
        ref={waveRef}
        src="/images/avatar-wave.mp4"
        poster="/images/avatar.png"
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full rounded-full object-cover"
      />
      <video
        ref={pointRef}
        src="/images/avatar-point.mp4"
        poster="/images/avatar.png"
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        style={{ opacity: 0 }}
        className="absolute inset-0 h-full w-full rounded-full object-cover"
      />
    </div>
  );
}
