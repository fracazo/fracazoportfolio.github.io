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

function BrandMark({ brand }: { brand: (typeof brandMarks)[number] }) {
  return (
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
  );
}

/**
 * Row of client marks, monochrome and theme-aware. Always one line: where all
 * six fit, a static row; anywhere narrower, the same marks roll slowly past,
 * so the strip stays one mark tall instead of stacking into rows and pushing
 * the work down.
 *
 * Carries its own containment context so it switches on its own width,
 * including inside one pane of a split, rather than keying off the window.
 * Vertical spacing belongs to the caller via `className`.
 */
export function BrandStrip({ className = "" }: { className?: string }) {
  return (
    <div className={`@container ${className}`}>
      <ul
        aria-label="Previously worked with"
        /* Six equal cells, each mark centred in its own, so the row squares off
           at both edges and every mark gets the same air. Shown once each cell
           clears the widest mark by ~55px. Capped at 1200px so on wide screens
           the outer marks stay near the content column instead of drifting to
           the window edges. */
        className="mx-auto my-0 hidden max-w-[1200px] list-none grid-cols-6 items-center gap-x-6 p-0 px-6 text-text-tertiary @min-[1040px]:grid"
      >
        {brandMarks.map((brand) => (
          <li key={brand.name} className="flex justify-center">
            <BrandMark brand={brand} />
          </li>
        ))}
      </ul>

      {/* Narrower than that, the marks roll. The track holds the set twice and
          slides by exactly one set, so the loop has no seam; the copy is
          hidden from assistive tech so the marks are announced once. No
          controls: it is decoration that also says who I worked with, and
          reduced motion stops it (see .brand-marquee in globals.css). */}
      <div className="brand-marquee overflow-hidden text-text-tertiary @min-[1040px]:hidden">
        <div className="brand-marquee-track flex w-max">
          {[false, true].map((isCopy) => (
            <ul
              key={String(isCopy)}
              aria-label={isCopy ? undefined : "Previously worked with"}
              aria-hidden={isCopy || undefined}
              /* pe matches the gap so the space between the last mark and the
                 copy's first equals every other gap. */
              className="m-0 flex list-none items-center gap-14 p-0 pe-14"
            >
              {brandMarks.map((brand) => (
                <li key={brand.name} className="flex flex-none">
                  <BrandMark brand={brand} />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
