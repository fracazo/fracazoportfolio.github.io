import Link from "next/link";
import { Chip } from "./chip";

type CaseCardProps = {
  href: string;
  image: { src: string; alt: string; srcSet?: string; sizes?: string };
  eyebrow?: string;
  outcome?: string;
  title: string;
  tagline?: string;
  /** Work page variant: single column, 21/9 image, larger type */
  wide?: boolean;
  /** Heading element for the card title (work page uses h2) */
  heading?: "h2" | "h3";
  /**
   * Above-the-fold card: load its image eagerly with high priority instead of
   * lazily. Lazy-loading an image that's already in the initial viewport only
   * delays it, so the first card on a page should set this.
   */
  priority?: boolean;
};

export function CaseCard({
  href,
  image,
  eyebrow,
  outcome,
  title,
  tagline,
  wide = false,
  heading: Heading = "h3",
  priority = false,
}: CaseCardProps) {
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
      className="group flex flex-col overflow-hidden rounded-[10px] bg-card no-underline shadow-elevated transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:no-underline hover:shadow-elevated-hover"
    >
      <div
        className={`overflow-hidden ${wide ? "aspect-[21/9]" : "aspect-[16/10]"}`}
      >
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
      <div className={wide ? "px-6 pt-5 pb-6" : "px-3.5 py-3"}>
        {eyebrow && (
          <div className="mb-2 text-[11px] font-medium tracking-[0.06em] text-muted uppercase">
            {eyebrow}
          </div>
        )}
        <Heading
          className={`m-0 font-semibold text-text transition-colors duration-200 group-hover:text-brand ${
            wide ? "text-[19px] leading-[1.4]" : "text-[16px] leading-[1.4]"
          }`}
        >
          {title}
        </Heading>
        {tagline && (
          <div
            className={`mt-1 font-normal text-muted ${
              wide ? "mt-1.5 text-[15px] leading-[1.55]" : "text-[14px] leading-[1.55]"
            }`}
          >
            {tagline}
          </div>
        )}
        {metrics.length > 0 && (
          <div className={`flex flex-wrap gap-1.5 ${wide ? "mt-4" : "mt-3"}`}>
            {metrics.map((metric) => (
              <Chip key={metric}>{metric}</Chip>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
