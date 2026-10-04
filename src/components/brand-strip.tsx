/* Recognition strip. Marks rather than words, because a logo is recognised
   before it is read. Each is drawn as a CSS mask filled with currentColor, so
   they are monochrome and follow the theme in both directions rather than
   dropping a brand palette into the page.
   Sized by optical weight, not a shared height: each box is set so aspect
   ratio times ink density lands on the same area, which shrinks the dense
   marks (GitLab, Telstra) and grows the light ones (Endeavour, the Arms).
   Box ratios match each file's ink bounds so mask "contain" adds no padding.
   Ordered by recognition, not date. */
const brandMarks = [
  /* Full lockup. The white path inside the roo and the gradient highlights are
     zeroed in the file: opaque they fill the silhouette and lose the shape. */
  { name: "Qantas", src: "/images/brands/qantas.svg", w: 109, h: 22 },
  /* Full lockup, so it sits with the wordmarks rather than the symbols. The
     swoosh carries partial alpha in the file: masking to one flat colour
     collapses the T, which is defined by the colour boundary, not by a hole. */
  { name: "Telstra", src: "/images/brands/telstra.svg", w: 85, h: 23 },
  /* PNG, not the source webp: the webp's comma counter is opaque white rather
     than a hole, so an alpha mask filled it in and flattened the mark. */
  { name: "Vodafone", src: "/images/brands/vodafone.png", w: 102, h: 25 },
  /* The Commonwealth Coat of Arms, cropped to its own bounds: the supplied
     artboard carried ~18% dead space, which left it floating high against the
     wordmarks. */
  {
    name: "Australian Government",
    src: "/images/brands/home-affairs.svg",
    w: 61,
    h: 46,
  },
  /* One flat path, so it needs none of the alpha surgery the others did. */
  { name: "Endeavour Group", src: "/images/brands/endeavour.svg", w: 103, h: 29 },
  { name: "GitLab", src: "/images/brands/gitlab.svg", w: 97, h: 21 },
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
        /* Equal cells, each mark centred in its own, so the row squares off at
           both edges and every mark gets the same air. Columns follow the
           strip's own width, not the window, so a split pane gets the layout
           its width allows: six once each cell clears the widest mark by
           ~55px, three in a pane or tablet, two on a phone. 6 / 3 / 2 all
           divide six, so no row is ever left with a stray mark. Capped at
           1200px so on wide screens the outer marks stay near the content
           column instead of drifting to the window edges. */
        className="mx-auto my-0 grid max-w-[1200px] list-none grid-cols-2 items-center gap-x-6 gap-y-8 p-0 text-text-tertiary @min-[520px]:grid-cols-3 @min-[1040px]:grid-cols-6"
      >
        {brandMarks.map((brand) => (
          <li key={brand.name} className="flex justify-center">
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
