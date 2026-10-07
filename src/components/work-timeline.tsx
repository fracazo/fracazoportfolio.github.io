/* The career at a glance: every project as a stop on one line, oldest on
   the left, laid out like the 2020 portfolio timeline. Each stop is an
   anchor into the work history below, so the line doubles as its index.

   Pure CSS: hover and focus grow the stem and lift the label, and the jump
   is a plain #anchor, so it all works without JavaScript. */

export type Brand = {
  name: string;
  /** Own work with no client: no mark on the line. */
  hideMark?: boolean;
  /** Monochrome mask. Without one the brand name is set as text. */
  logo?: { src: string; w: number; h: number };
};

export type TimelineStop = {
  /** Column weight. An employer with a single stop gets 2, so its name
      and years fit under it. */
  weight: number;
  /** Anchor id of the entry this stop jumps to. */
  id: string;
  brand: Brand;
  /** Short label under the logo, e.g. "Alexa skill". */
  label: string;
  /** Full name for screen readers, e.g. "Qantas Alexa skill, 2017". */
  name: string;
};

export type TimelineEmployer = {
  name: string;
  years: string;
  /** How many stops, in order, sit under this employer. */
  span: number;
};

/* Geometry, in px. The line sits at LINE_Y; stems reach STEM px off it. The
   hover growth lives in globals.css under .timeline-stem. */
const HEIGHT = 236;
const LINE_Y = 118;
const STEM = 26;

function Mark({ brand }: { brand: Brand }) {
  if (brand.hideMark) return null;
  if (!brand.logo) {
    return (
      <span className="block text-meta font-semibold text-text-body transition-colors duration-200 group-hover:text-text group-focus-visible:text-text">
        {brand.name}
      </span>
    );
  }
  return (
    <span
      aria-hidden="true"
      className="mx-auto block text-text-tertiary transition-colors duration-200 group-hover:text-text group-focus-visible:text-text"
      style={{
        width: brand.logo.w,
        height: brand.logo.h,
        backgroundColor: "currentColor",
        WebkitMaskImage: `url(${brand.logo.src})`,
        maskImage: `url(${brand.logo.src})`,
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
 * Horizontal on a wide column; below 720px of column (phones, and the split
 * pane) the same stops become a vertical list, newest first to match the
 * history underneath. Labels alternate above and below the line so
 * neighbouring stops each get twice their column's width. The brand mark
 * shows only on the first stop of a run, so Qantas reads once with its
 * projects strung after it.
 */
export function WorkTimeline({
  stops,
  employers,
}: {
  stops: TimelineStop[];
  employers: TimelineEmployer[];
}) {
  const columns = stops.map((stop) => `minmax(0, ${stop.weight}fr)`).join(" ");
  return (
    <nav aria-label="Career timeline" className="@container">
      {/* Wide: the line. */}
      <div className="hidden @min-[720px]:block">
        <ol
          role="list"
          className="relative m-0 grid list-none p-0"
          style={{
            gridTemplateColumns: columns,
            height: HEIGHT,
          }}
        >
          {/* The line itself. */}
          <li
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 h-px bg-border"
            style={{ top: LINE_Y }}
          />
          {stops.map((stop, index) => {
            const up = index % 2 === 0;
            const showMark = index === 0 || stops[index - 1].brand.name !== stop.brand.name;
            return (
              <li
                key={stop.id}
                className={`relative ${index % 2 === 0 ? "bg-panel-2/40" : ""}`}
              >
                <a
                  href={`#${stop.id}`}
                  className="group absolute inset-0 block no-underline hover:no-underline focus-visible:outline-none"
                >
                  <span className="sr-only">{stop.name}</span>
                  {/* Dot on the line. */}
                  <span
                    aria-hidden="true"
                    className="absolute left-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent transition-transform duration-200 group-hover:scale-150 group-focus-visible:scale-150 group-focus-visible:ring-2 group-focus-visible:ring-ring group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-bg"
                    style={{ top: LINE_Y }}
                  />
                  {/* Dashed stem: grows on hover, carrying the label with it. */}
                  <span
                    aria-hidden="true"
                    className={`timeline-stem absolute left-1/2 w-0 border-l border-dashed border-accent/70 ${
                      up ? "origin-bottom" : "origin-top"
                    }`}
                    style={up ? { bottom: HEIGHT - LINE_Y + 6, height: STEM } : { top: LINE_Y + 6, height: STEM }}
                  />
                  <span
                    aria-hidden="true"
                    className={`timeline-label absolute left-1/2 flex w-[calc(200%-8px)] max-w-28 -translate-x-1/2 flex-col items-center gap-1 text-center ${
                      up ? "justify-end" : "justify-start"
                    }`}
                    data-dir={up ? "up" : "down"}
                    style={
                      up
                        ? { bottom: HEIGHT - LINE_Y + 6 + STEM + 6 }
                        : { top: LINE_Y + 6 + STEM + 6 }
                    }
                  >
                    {showMark && <Mark brand={stop.brand} />}
                    <span className="block text-meta leading-tight text-muted transition-colors duration-200 group-hover:text-text group-focus-visible:text-text">
                      {stop.label}
                    </span>
                  </span>
                </a>
              </li>
            );
          })}
        </ol>

        {/* Where I worked: one bracket per employer under its stops. */}
        <ol
          role="list"
          className="m-0 mt-1 grid list-none gap-x-2 p-0"
          style={{ gridTemplateColumns: columns }}
        >
          {employers.map((employer) => (
            <li
              key={employer.name}
              className="min-w-0 border-t border-border pt-2 text-center"
              style={{ gridColumn: `span ${employer.span}` }}
            >
              <span className="block truncate text-meta font-medium text-text-body">
                {employer.name}
              </span>
              <span className="block truncate text-meta text-muted">{employer.years}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* Narrow: the same stops as a vertical list, newest first. */}
      <ol
        role="list"
        className="m-0 list-none border-s border-border p-0 @min-[720px]:hidden"
      >
        {[...stops].reverse().map((stop) => (
          <li key={stop.id}>
            <a
              href={`#${stop.id}`}
              className="group relative -ms-px flex items-baseline gap-3 py-2 ps-5 no-underline hover:no-underline"
            >
              <span
                aria-hidden="true"
                className="absolute top-1/2 -left-[5px] size-2.5 -translate-y-1/2 rounded-full bg-accent transition-transform duration-200 group-hover:scale-150"
              />
              <span className="w-24 flex-none text-meta text-muted">
                {stop.brand.hideMark ? "" : stop.brand.name}
              </span>
              <span className="text-body text-text-body transition-colors duration-200 group-hover:text-brand">
                {stop.label}
              </span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
