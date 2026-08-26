import { PanelButton } from "./panel-button";
import { PanelLink } from "./panel-link";
import { Chip } from "./chip";
import { HoverVideo } from "./hover-video";
import { WorkVignette } from "./work-vignette";
import {
  VIGNETTE_REPLACES_IMAGE,
  type WorkVignetteKind,
} from "./work-vignette-kinds";

type WorkRowCompactProps = {
  /** Omitted when no detail page exists; the row then renders unlinked. */
  href?: string;
  title: string;
  tagline?: string;
  /** "·"-separated facts; each becomes a Chip, matching `WorkRow`. */
  metric?: string;
  /** Copy Alex still owes this entry. Renders as an obvious unfinished marker. */
  todo?: string;
  /** Optional thumbnail. Fills the trailing grid column the row already
      reserves, so a row with one lines up with a row without. */
  image?: { src: string; alt: string };
  /** Registry key for work with no route: opens a short stub in the panel. */
  stub?: string;
  /** Optional hover clip: fades in over the still and plays while the row is
      hovered. Touch, keyboard, and reduced-motion users keep the still. */
  video?: { src: string };
  /** Optional hover scene in the thumbnail; see WorkVignette. Standalone
      kinds replace the image entirely and rest in their settled frame. */
  vignette?: WorkVignetteKind;
};

/**
 * The lighter of the two work card weights. Same top border and title
 * hierarchy as `WorkRow`, but an optional thumbnail and shorter vertical
 * padding so it sits under the full cards without looking like a full card
 * with a missing image. Rows with no detail page render as a plain div rather
 * than a dead link.
 */
export function WorkRowCompact({
  href,
  title,
  tagline,
  metric,
  todo,
  image,
  stub,
  video,
  vignette,
}: WorkRowCompactProps) {
  // Each "·"-separated fact becomes its own chip (e.g. "From 0 to 1 · Gold").
  const metrics = metric
    ? metric
        .split("·")
        .map((part) => part.trim())
        .filter(Boolean)
    : [];

  const thumb =
    image || vignette ? (
      <div className="thumb-frame overflow-hidden rounded-card bg-panel-2 @min-[600px]:col-start-2 @min-[600px]:row-start-1">
        {video && image ? (
          <HoverVideo src={video.src} image={image} />
        ) : (
          <div className="relative aspect-[16/10] overflow-hidden">
            {image && !(vignette && VIGNETTE_REPLACES_IMAGE[vignette]) && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            )}
            {vignette && <WorkVignette kind={vignette} />}
          </div>
        )}
      </div>
    ) : null;

  const content = (
    <div
      className={`work-row-body min-w-0 @min-[600px]:col-start-1 @min-[600px]:row-start-1${
        thumb ? " mt-4 @min-[600px]:mt-0" : ""
      }`}
    >
      <h3
        className={`m-0 text-subhead-sm font-semibold text-text ${
          href ? "transition-colors duration-200 group-hover:text-brand" : ""
        }`}
      >
        {title}
      </h3>
      {tagline && (
        <p className="mt-1 mb-0 text-body leading-[1.3] font-normal text-text-body">
          {tagline}
        </p>
      )}
      {todo && (
        <p className="mt-1.5 mb-0 inline-block rounded border border-dashed border-border px-2 py-1 font-mono text-meta text-text-tertiary">
          TODO: {todo}
        </p>
      )}
      {/* Chips flow right after the tagline inside the text column; as a
          separate grid row they could not start until the image's full
          height, leaving a dead gap. They may wrap in the ~328px column. */}
      {metrics.length > 0 && (
        <div className="work-row-chips mt-3 flex flex-wrap gap-1.5">
          {metrics.map((fact) => (
            <Chip key={fact}>{fact}</Chip>
          ))}
        </div>
      )}
    </div>
  );

  /* Container query, not a viewport one: in the split layout this row lives in
     a pane roughly half the window, so keying off the window would hold the
     two-column grid at widths that cannot carry it. `items-start` keeps the
     thumb frame at its image's height instead of stretching to match a taller
     text column. */
  const rowClass =
    "work-row-compact grid grid-cols-1 border-t border-border py-5 @min-[600px]:grid-cols-[1fr_280px] @min-[600px]:items-start @min-[600px]:gap-x-8";

  if (stub) {
    return (
      <PanelButton
        panelKey={stub}
        className={`group ${rowClass} w-full cursor-pointer text-start`}
      >
        {thumb}
        {content}
      </PanelButton>
    );
  }

  if (!href) {
    return (
      <div className={rowClass}>
        {thumb}
        {content}
      </div>
    );
  }

  return (
    <PanelLink
      href={href}
      className={`group ${rowClass} no-underline hover:no-underline`}
    >
      {thumb}
      {content}
    </PanelLink>
  );
}
