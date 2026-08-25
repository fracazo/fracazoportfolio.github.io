"use client";

import { useId, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "./icons";

export type CarouselPhoto = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

const navButtonClass =
  "flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-border bg-card/80 text-muted backdrop-blur-md transition-colors duration-200 hover:text-text disabled:cursor-default disabled:opacity-40 disabled:hover:text-muted";

/**
 * PhotoCarousel — one photo at a time with prev/next controls and dots.
 * Slides are kept in the DOM and hidden rather than unmounted, so the browser
 * can decode the neighbouring photo before it is asked for. Wraps around at
 * both ends, and arrow keys work once a control has focus.
 */
export function PhotoCarousel({
  photos,
  className = "",
}: {
  photos: CarouselPhoto[];
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const groupId = useId();
  const current = photos[index];

  function go(delta: number) {
    setIndex((i) => (i + delta + photos.length) % photos.length);
  }

  return (
    <figure
      className={`my-8 ${className}`}
      role="group"
      aria-roledescription="carousel"
      aria-label="Photos from the Artia team"
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") go(-1);
        if (event.key === "ArrowRight") go(1);
      }}
    >
      <div className="relative w-full overflow-hidden rounded-card bg-panel">
        {photos.map((photo, i) => (
          <img
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            loading={i === 0 ? undefined : "lazy"}
            id={`${groupId}-slide-${i}`}
            aria-hidden={i === index ? undefined : true}
            className={`w-full ${i === index ? "block" : "hidden"}`}
          />
        ))}
      </div>

      <figcaption className="mt-3 flex items-center gap-4">
        <span aria-live="polite" className="flex-1 text-meta text-muted italic">
          {current.caption}
        </span>

        <span className="flex items-center gap-1.5" aria-hidden="true">
          {photos.map((photo, i) => (
            <span
              key={photo.src}
              className={`h-1.5 w-1.5 rounded-full transition-colors duration-200 ${
                i === index ? "bg-brand" : "bg-border"
              }`}
            />
          ))}
        </span>

        <span className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous photo"
            aria-controls={`${groupId}-slide-${index}`}
            className={navButtonClass}
          >
            <ArrowLeftIcon size={16} />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next photo"
            aria-controls={`${groupId}-slide-${index}`}
            className={navButtonClass}
          >
            <ArrowRightIcon size={16} />
          </button>
        </span>
      </figcaption>
    </figure>
  );
}
