import Link from "next/link";

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
}: CaseCardProps) {
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
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
      <div className={wide ? "px-6 pt-5 pb-6" : "px-3.5 py-3"}>
        {(eyebrow || outcome) && (
          <div className="mb-2 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 text-[11px] font-medium tracking-[0.06em] text-muted uppercase">
            {eyebrow && <span className="whitespace-nowrap">{eyebrow}</span>}
            {outcome && (
              <span className="font-semibold tracking-[0.04em] whitespace-nowrap text-[#34d399] light:text-[#059669]">
                {outcome}
              </span>
            )}
          </div>
        )}
        <Heading
          className={`m-0 font-medium text-text transition-colors duration-200 group-hover:text-brand ${
            wide ? "text-lg leading-[1.4]" : "text-[15px] leading-[1.4]"
          }`}
        >
          {title}
        </Heading>
        {tagline && (
          <div
            className={`mt-1 font-normal text-muted ${
              wide ? "mt-1.5 text-[15px] leading-[1.5]" : "text-[13px] leading-[1.5]"
            }`}
          >
            {tagline}
          </div>
        )}
      </div>
    </Link>
  );
}
