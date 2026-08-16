export type StripPhoto = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

/**
 * PhotoStrip — a low, scrollable band of thumbnails. Scene-setting rather than
 * a gallery: the photos stay small, nothing opens on click. The row itself is
 * focusable so it can be scrolled from the keyboard, which a plain overflow
 * container cannot be.
 *
 * The row breaks out of the text column and runs the full width of the
 * viewport. Its leading edge is padded back to where the column starts, so the
 * first photo lines up with the prose while the rest of the strip bleeds off
 * both ends. The caption stays in the column.
 */
export function PhotoStrip({
  photos,
  caption,
  label,
  className = "",
}: {
  photos: StripPhoto[];
  caption: string;
  label: string;
  className?: string;
}) {
  return (
    <figure className={`my-8 ${className}`}>
      <div
        role="group"
        aria-label={label}
        tabIndex={0}
        className="photo-strip-row mx-[calc(50%-50vw)] flex w-screen gap-2 overflow-x-auto pb-1 ps-[max(1.5rem,calc(50vw-320px))] pe-6 outline-offset-4"
      >
        {photos.map((photo) => (
          <img
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            loading="lazy"
            draggable={false}
            className="h-[100px] w-auto shrink-0 rounded-lg sm:h-[120px]"
          />
        ))}
      </div>
      <figcaption className="mt-3 text-[13px] leading-normal text-muted italic">
        {caption}
      </figcaption>
    </figure>
  );
}
