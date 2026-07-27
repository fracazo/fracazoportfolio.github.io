import Link from "next/link";
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
 * edge and the case study's eyebrow, title, tagline, and outcome chips beside
 * it. Used on both the landing page and /work. The title is white and shifts
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
    <Link
      href={href}
      className="group grid grid-cols-1 gap-5 border-t border-border py-8 no-underline hover:no-underline desk:grid-cols-[280px_1fr] desk:items-center desk:gap-8"
    >
      {/* Thumbnail — uniform frame so the mismatched screenshots stop clashing */}
      <div className="overflow-hidden rounded-card bg-panel-2 shadow-elevated transition-shadow duration-200 group-hover:shadow-elevated-hover">
        <div className="aspect-[16/10] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image.src}
            alt={image.alt}
            srcSet={image.srcSet}
            sizes={image.sizes}
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : undefined}
            className="h-full w-full object-cover [outline:1px_solid_var(--img-outline)] [outline-offset:-1px]"
          />
        </div>
      </div>

      {/* Eyebrow + title + tagline + outcome chips (matches the /work card) */}
      <div className="min-w-0">
        {eyebrowText && (
          <div className="mb-2 text-[11px] font-medium tracking-[0.06em] text-muted uppercase">
            {eyebrowText}
          </div>
        )}
        <h3 className="m-0 text-[19px] leading-[1.4] font-semibold text-text transition-colors duration-200 group-hover:text-brand">
          {title}
        </h3>
        {tagline && (
          <p className="mt-1.5 mb-0 text-[15px] leading-[1.55] font-normal text-muted">
            {tagline}
          </p>
        )}
        {metrics.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {metrics.map((metric) => (
              <Chip key={metric}>{metric}</Chip>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
