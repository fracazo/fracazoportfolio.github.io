/* Recognition strip. Marks rather than words, because a logo is recognised
   before it is read. Each is drawn as a CSS mask filled with currentColor, so
   they are monochrome and follow the theme in both directions rather than
   dropping a brand palette into the page.
   Heights are tuned per mark, not shared: the two symbols need more height
   than a wordmark to carry the same weight. Ordered by recognition, not date. */
const brandMarks = [
  { name: "Qantas", src: "/images/brands/qantas.svg", w: 44, h: 37 },
  /* The two-tone T masks to a single silhouette, which is still the mark. */
  { name: "Telstra", src: "/images/brands/telstra.svg", w: 32, h: 37 },
  /* PNG, not the source webp: the webp's comma counter is opaque white rather
     than a hole, so an alpha mask filled it in and flattened the mark. */
  { name: "Vodafone", src: "/images/brands/vodafone.png", w: 86, h: 23 },
  /* The Commonwealth Coat of Arms, cropped to its own bounds: the supplied
     artboard carried ~18% dead space, which left it floating high against the
     wordmarks. */
  {
    name: "Australian Government",
    src: "/images/brands/home-affairs.svg",
    w: 50,
    h: 37,
  },
  { name: "GitLab", src: "/images/brands/gitlab.svg", w: 100, h: 22 },
];

/**
 * Row of client marks, monochrome and theme-aware.
 *
 * Carries its own containment context so it spreads edge to edge wherever it
 * is placed, including inside one pane of a split, rather than keying off the
 * window. Spacing around it belongs to the caller via `className`.
 */
export function BrandStrip({ className = "" }: { className?: string }) {
  return (
    <div className={`@container ${className}`}>
      <ul
        aria-label="Previously worked with"
        /* Wide enough for all five on one line: justify-between spreads them
           edge to edge and squares the row off against the column's measure.
           Narrower, they wrap, where justify-between would strand the last
           row, so it falls back to a plain gap. */
        className="m-0 flex list-none flex-wrap items-center gap-x-7 gap-y-4 p-0 text-text-tertiary @min-[600px]:justify-between @min-[600px]:gap-x-0"
      >
        {brandMarks.map((brand) => (
          <li key={brand.name} className="flex">
            <span
              role="img"
              aria-label={brand.name}
              style={{
                width: brand.w,
                height: brand.h,
                backgroundColor: "currentColor",
                WebkitMaskImage: `url(${brand.src})`,
                maskImage: `url(${brand.src})`,
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                maskPosition: "center",
                WebkitMaskSize: "contain",
                maskSize: "contain",
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
