import { PanelLink } from "./panel-link";
import { Chip } from "./chip";
import { HoverVideo } from "./hover-video";
import { WorkVignette } from "./work-vignette";
import {
  VIGNETTE_REPLACES_IMAGE,
  type WorkVignetteKind,
} from "./work-vignette-kinds";

type WorkRowProps = {
  href: string;
  /** Screenshot thumbnail; omitted when a standalone vignette is the thumb. */
  image?: { src: string; alt: string; srcSet?: string; sizes?: string };
  title: string;
  tagline?: string;
  /** "·"-separated facts; each becomes a Chip, matching the /work cards. */
  outcome?: string;
  /** Optional hover clip: fades in over the still and plays while the row is
      hovered (or, on touch, while the row sits mid-viewport). Keyboard and
      reduced-motion users keep the still. */
  video?: { src: string };
  /**
   * Above-the-fold row: load its image eagerly. The first row on the landing
   * page should set this so its thumbnail isn't lazy-loaded into view.
   */
  priority?: boolean;
  /** Optional hover scene in the thumbnail; see WorkVignette. Standalone
      kinds replace the image entirely and rest in their settled frame. */
  vignette?: WorkVignetteKind;
};

/**
 * Editorial "selected work" row: the case study's title and tagline on the
 * leading edge so a reader skimming down the column hits every title, a
 * uniform framed thumbnail on the trailing edge, and the outcome chips
 * spanning the card below both.
 * Used on both the landing page and /work. The title is white and shifts
 * to brand on hover with no underline. Stacks to one column below `desk`; a
 * top border draws the divider between rows.
 */
export function WorkRow({
  href,
  image,
  title,
  tagline,
  outcome,
  video,
  priority = false,
  vignette,
}: WorkRowProps) {
  // Each "·"-separated fact becomes its own chip (e.g. "Shipped · 3 iterations").
  const metrics = outcome
    ? outcome
        .split("·")
        .map((part) => part.trim())
        .filter(Boolean)
    : [];

  return (
    <PanelLink
      href={href}
      /* Container query, not a viewport one: in the split layout this row lives
         in a pane roughly half the window, so keying off the window would hold
         the thumbnail column at widths that cannot carry it. */
      className="work-row group grid grid-cols-1 border-t border-border py-5 no-underline hover:no-underline @min-[600px]:grid-cols-[1fr_280px] @min-[600px]:items-start @min-[600px]:gap-x-8"
    >
      {/* Thumbnail — uniform frame so the mismatched screenshots stop clashing.
          DOM order keeps it first so the stacked (sub-600px) card still leads
          with the image; at two columns it moves to the trailing edge so the
          text owns the scan line. */}
      <div className="thumb-frame overflow-hidden rounded-card bg-panel-2 transition-shadow duration-200 @min-[600px]:col-start-2 @min-[600px]:row-start-1">
        {video && image ? (
          <HoverVideo src={video.src} image={image} priority={priority} />
        ) : (
          <div className="relative aspect-[16/10] overflow-hidden">
            {image && !(vignette && VIGNETTE_REPLACES_IMAGE[vignette]) && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={image.src}
                alt={image.alt}
                srcSet={image.srcSet}
                sizes={image.sizes}
                loading={priority ? "eager" : "lazy"}
                fetchPriority={priority ? "high" : undefined}
                className="h-full w-full object-cover"
              />
            )}
            {vignette && <WorkVignette kind={vignette} />}
          </div>
        )}
      </div>

      {/* Title + tagline + chips. The chips live inside the text column so
          they sit right under the tagline; as a separate grid row they could
          not start until the image's full height, leaving a dead gap. They
          may wrap inside the ~328px column, which is the accepted trade. */}
      <div className="work-row-body mt-4 min-w-0 @min-[600px]:col-start-1 @min-[600px]:row-start-1 @min-[600px]:mt-0">
        <h3 className="m-0 text-subhead-sm font-semibold text-text transition-colors duration-200 group-hover:text-brand">
          {title}
        </h3>
        {tagline && (
          <p className="mt-1 mb-0 text-body leading-[1.3] font-normal text-text-body">
            {tagline}
          </p>
        )}
        {metrics.length > 0 && (
          <div className="work-row-chips mt-3 flex flex-wrap gap-1.5">
            {metrics.map((metric) => (
              <Chip key={metric}>{metric}</Chip>
            ))}
          </div>
        )}
      </div>
    </PanelLink>
  );
}
