import Link from "next/link";

type WorkRowProps = {
  href: string;
  image: { src: string; alt: string; srcSet?: string; sizes?: string };
  /** Left segments of the eyebrow, e.g. "GitLab · 2023". Uppercased in CSS. */
  eyebrow: string;
  /** Trailing eyebrow segment naming the problem space, e.g. "AI & Code Review". */
  category?: string;
  title: string;
  tagline?: string;
  /** Pulled-out outcome: a large value plus a small label, e.g. 3 / "Iterations shipped". */
  metric?: { value: string; label: string };
  /**
   * Above-the-fold row: load its image eagerly. The first row on the landing
   * page should set this so its thumbnail isn't lazy-loaded into view.
   */
  priority?: boolean;
};

/**
 * Editorial "selected work" row: a uniform framed thumbnail on the leading
 * edge, the title + tagline in the middle, and a single headline metric on the
 * trailing edge. Rows stack into one column below `desk`. A top border draws
 * the divider between rows (and under the section intro for the first row).
 */
export function WorkRow({
  href,
  image,
  eyebrow,
  category,
  title,
  tagline,
  metric,
  priority = false,
}: WorkRowProps) {
  const eyebrowText = [eyebrow, category].filter(Boolean).join(" · ");

  return (
    <Link
      href={href}
      className="group grid grid-cols-1 gap-5 border-t border-border py-8 no-underline hover:no-underline desk:grid-cols-[280px_1fr_112px] desk:items-center desk:gap-8"
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

      {/* Title + tagline */}
      <div className="min-w-0">
        {eyebrowText && (
          <div className="mb-2 text-[11px] font-medium tracking-[0.06em] text-muted uppercase">
            {eyebrowText}
          </div>
        )}
        <h3 className="m-0 text-[22px] leading-[1.25] font-semibold text-brand underline-offset-[3px] transition-colors duration-200 group-hover:underline desk:text-[24px]">
          {title}
        </h3>
        {tagline && (
          <p className="mt-2 mb-0 text-[15px] leading-[1.55] text-muted">
            {tagline}
          </p>
        )}
      </div>

      {/* Headline metric */}
      {metric && (
        <div className="desk:text-right">
          <div className="text-[34px] leading-none font-semibold tracking-[-0.01em] text-text tabular-nums">
            {metric.value}
          </div>
          <div className="mt-2 text-[11px] font-medium tracking-[0.06em] text-muted uppercase">
            {metric.label}
          </div>
        </div>
      )}
    </Link>
  );
}
