import { PanelLink } from "./panel-link";
import { Chip } from "./chip";

type WorkRowProps = {
  href: string;
  image: { src: string; alt: string; srcSet?: string; sizes?: string };
  /** Left segments of the eyebrow, e.g. "GitLab · 2023". Uppercased in CSS. */
  eyebrow?: string;
  /** Trailing eyebrow segment naming the problem space, e.g. "AI & Code Review". */
  category?: string;
  title: string;
  tagline?: string;
  /** "·"-separated facts; each becomes a Chip, matching the /work cards. */
  outcome?: string;
  /**
   * Above-the-fold row: load its image eagerly. The first row on the landing
   * page should set this so its thumbnail isn't lazy-loaded into view.
   */
  priority?: boolean;
};

/**
 * Editorial "selected work" row: a uniform framed thumbnail on the leading
 * edge, the case study's eyebrow, title, and tagline beside it, and the
 * outcome chips spanning the card below both.
 * Used on both the landing page and /work. The title is white and shifts
 * to brand on hover with no underline. Stacks to one column below `desk`; a
 * top border draws the divider between rows.
 */
export function WorkRow({
  href,
  image,
  eyebrow,
  category,
  title,
  tagline,
  outcome,
  priority = false,
}: WorkRowProps) {
  const eyebrowText = [eyebrow, category].filter(Boolean).join(" · ");
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
         the thumbnail column at widths that cannot carry it. Vertical rhythm
         lives on the items (body/chips margins) rather than a row gap, so the
         full-width chips row below adds no track gap of its own. */
      className="work-row group grid grid-cols-1 border-t border-border py-8 no-underline hover:no-underline @min-[600px]:grid-cols-[280px_1fr] @min-[600px]:items-center @min-[600px]:gap-x-8"
    >
      {/* Thumbnail — uniform frame so the mismatched screenshots stop clashing */}
      <div className="thumb-frame overflow-hidden rounded-card bg-panel-2 transition-shadow duration-200">
        <div className="aspect-[16/10] overflow-hidden">
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
        </div>
      </div>

      {/* Eyebrow + title + tagline (matches the /work card) */}
      <div className="mt-5 min-w-0 @min-[600px]:mt-0">
        {eyebrowText && (
          <div className="mb-2 text-meta font-medium tracking-[0.06em] text-muted uppercase">
            {eyebrowText}
          </div>
        )}
        <h3 className="m-0 text-subhead font-semibold text-text transition-colors duration-200 group-hover:text-brand">
          {title}
        </h3>
        {tagline && (
          <p className="mt-1.5 mb-0 text-body leading-[1.3] font-normal text-text-body">
            {tagline}
          </p>
        )}
      </div>

      {/* Chips span the card below the thumbnail row: two facts side by side
          outgrow the ~328px text column, and the compact rows already carry
          their chips this way. */}
      {metrics.length > 0 && (
        <div className="work-row-chips mt-4 flex flex-wrap gap-1.5 @min-[600px]:col-span-2">
          {metrics.map((metric) => (
            <Chip key={metric}>{metric}</Chip>
          ))}
        </div>
      )}
    </PanelLink>
  );
}
