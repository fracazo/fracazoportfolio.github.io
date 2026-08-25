import { PanelButton } from "./panel-button";
import { PanelLink } from "./panel-link";
import { Chip } from "./chip";

type WorkRowCompactProps = {
  /** Omitted when no detail page exists; the row then renders unlinked. */
  href?: string;
  /** Company and year, e.g. "Qantas · 2018". Uppercased in CSS. */
  eyebrow?: string;
  title: string;
  tagline?: string;
  /** "·"-separated facts; each becomes a Chip, matching `WorkRow`. */
  metric?: string;
  /** Copy Alex still owes this entry. Renders as an obvious unfinished marker. */
  todo?: string;
  /** Optional thumbnail. Fills the leading grid column the row already
      reserves, so a row with one lines up with a row without. */
  image?: { src: string; alt: string };
  /** Registry key for work with no route: opens a short stub in the panel. */
  stub?: string;
};

/**
 * The lighter of the two work card weights. Same top border and eyebrow/title
 * hierarchy as `WorkRow`, but an optional thumbnail and shorter vertical
 * padding so it sits under the full cards without looking like a full card
 * with a missing image. Rows with no detail page render as a plain div rather
 * than a dead link.
 */
export function WorkRowCompact({
  href,
  eyebrow,
  title,
  tagline,
  metric,
  todo,
  image,
  stub,
}: WorkRowCompactProps) {
  // Each "·"-separated fact becomes its own chip (e.g. "From 0 to 1 · Gold").
  const metrics = metric
    ? metric
        .split("·")
        .map((part) => part.trim())
        .filter(Boolean)
    : [];

  const thumb = image ? (
    <div className="thumb-frame overflow-hidden rounded-card bg-panel-2 @min-[600px]:col-start-1 @min-[600px]:row-start-1">
      <div className="aspect-[16/10] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image.src}
          alt={image.alt}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  ) : null;

  const content = (
    <div
      className={`work-row-body min-w-0 @min-[600px]:col-start-2 @min-[600px]:row-start-1${
        image ? " mt-4 @min-[600px]:mt-0" : ""
      }`}
    >
      {eyebrow && (
        <div className="mb-1.5 text-meta font-medium tracking-[0.06em] text-muted uppercase">
          {eyebrow}
        </div>
      )}
      <h3
        className={`m-0 text-subhead-sm font-semibold text-text ${
          href ? "transition-colors duration-200 group-hover:text-brand" : ""
        }`}
      >
        {title}
      </h3>
      {tagline && (
        <p className="mt-1 mb-0 text-body leading-[1.3] font-normal text-text-body">
          {tagline}
        </p>
      )}
      {todo && (
        <p className="mt-1.5 mb-0 inline-block rounded border border-dashed border-border px-2 py-1 font-mono text-meta text-text-tertiary">
          TODO: {todo}
        </p>
      )}
    </div>
  );

  /* Chips sit outside the text column: two facts side by side outgrow the
     ~328px that column offers, so rows with a thumbnail span the chips across
     the full card width below it. Imageless rows keep them under their text. */
  const chips =
    metrics.length > 0 ? (
      <div
        className={`work-row-chips mt-3 flex flex-wrap gap-1.5 ${
          image ? "@min-[600px]:col-span-2" : "@min-[600px]:col-start-2"
        }`}
      >
        {metrics.map((fact) => (
          <Chip key={fact}>{fact}</Chip>
        ))}
      </div>
    ) : null;

  /* Container query, not a viewport one: in the split layout this row lives in
     a pane roughly half the window, so keying off the window would hold the
     two-column grid at widths that cannot carry it. Vertical rhythm lives on
     the items (content/chips margins) rather than a row gap, so the chips row
     adds no track gap of its own. `items-start` keeps the thumb frame at its
     image's height instead of stretching to match a taller text column. */
  const rowClass =
    "work-row-compact grid grid-cols-1 border-t border-border py-5 @min-[600px]:grid-cols-[280px_1fr] @min-[600px]:items-start @min-[600px]:gap-x-8";

  if (stub) {
    return (
      <PanelButton
        panelKey={stub}
        className={`group ${rowClass} w-full cursor-pointer text-start`}
      >
        {thumb}
        {content}
        {chips}
      </PanelButton>
    );
  }

  if (!href) {
    return (
      <div className={rowClass}>
        {thumb}
        {content}
        {chips}
      </div>
    );
  }

  return (
    <PanelLink
      href={href}
      className={`group ${rowClass} no-underline hover:no-underline`}
    >
      {thumb}
      {content}
      {chips}
    </PanelLink>
  );
}
