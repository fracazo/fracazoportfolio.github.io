"use client";

import { useEffect, useRef } from "react";
import { useScrollPlay } from "./use-scroll-play";

type HoverVideoProps = {
  /** The hover clip. Muted, looping; only fetched on first play. */
  src: string;
  image: { src: string; alt: string; srcSet?: string; sizes?: string };
  /** Mirrors `WorkRow`'s priority: eager-load the still for above-the-fold rows. */
  priority?: boolean;
};

/**
 * A work-row thumbnail that comes alive on hover: the still image stays as
 * the base layer (and the only layer for keyboard and reduced-motion users),
 * with a video that fades in and plays while the row is hovered. Touch has
 * no hover, so there the clip plays while the row sits mid-viewport instead;
 * the clip is only fetched once something actually triggers it.
 *
 * Playback is driven from the row (`.group`) rather than the frame, so
 * hovering the title animates the thumbnail too. The clip rewinds on leave so
 * every hover replays from the same point as the poster.
 */
export function HoverVideo({ src, image, priority = false }: HoverVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const scrolledTo = useScrollPlay(videoRef, ".group", "(hover: hover)");

  useEffect(() => {
    const video = videoRef.current;
    const row = video?.closest(".group");
    if (!video || !row) return;

    /* Mouse-driven and full-motion only. Touch "hover" is a tap (the scroll
       trigger owns touch), and reduced-motion users keep the still (the CSS
       hides the video too; this guard just spares them the download). */
    const canPlay = window.matchMedia(
      "(hover: hover) and (prefers-reduced-motion: no-preference)",
    );
    const enter = () => {
      if (canPlay.matches) video.play().catch(() => {});
    };
    const leave = () => {
      video.pause();
      video.currentTime = 0;
    };
    row.addEventListener("pointerenter", enter);
    row.addEventListener("pointerleave", leave);
    return () => {
      row.removeEventListener("pointerenter", enter);
      row.removeEventListener("pointerleave", leave);
    };
  }, []);

  // The scroll-driven mirror of enter/leave above.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (scrolledTo) {
      video.play().catch(() => {});
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [scrolledTo]);

  return (
    <div className="relative aspect-[16/10] overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image.src}
        alt={image.alt}
        srcSet={image.srcSet}
        sizes={image.sizes}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        className="h-full w-full object-cover"
      />
      <video
        ref={videoRef}
        src={src}
        poster={image.src}
        muted
        loop
        playsInline
        preload="none"
        aria-hidden="true"
        tabIndex={-1}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-100 motion-reduce:hidden ${
          scrolledTo ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
