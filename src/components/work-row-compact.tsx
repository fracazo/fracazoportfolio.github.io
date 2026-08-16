import { PanelLink } from "./panel-link";
import { Chip } from "./chip";

type WorkRowCompactProps = {
  /** Omitted when no detail page exists; the row then renders unlinked. */
  href?: string;
  /** Company and year, e.g. "Qantas · 2018". Uppercased in CSS. */
  eyebrow?: string;
  title: string;
  tagline?: string;
  /** A single supporting fact. Compact rows carry one, full rows carry two. */
  metric?: string;
  /** Copy Alex still owes this entry. Renders as an obvious unfinished marker. */
  todo?: string;
};

/**
 * The lighter of the two work card weights. Same top border and eyebrow/title
 * hierarchy as `WorkRow`, but no thumbnail, one metric instead of two, and
 * shorter vertical padding so it sits under the full cards without looking
 * like a full card with a missing image. Rows with no detail page render as a
 * plain div rather than a dead link.
 */
export function WorkRowCompact({
  href,
  eyebrow,
  title,
  tagline,
  metric,
  todo,
}: WorkRowCompactProps) {
  const content = (
    <div className="min-w-0 @min-[600px]:col-start-2">
      {eyebrow && (
        <div className="mb-1.5 text-[11px] font-medium tracking-[0.06em] text-muted uppercase">
          {eyebrow}
        </div>
      )}
      <h3
        className={`m-0 text-[17px] leading-[1.4] font-semibold text-text ${
          href ? "transition-colors duration-200 group-hover:text-brand" : ""
        }`}
      >
        {title}
      </h3>
      {tagline && (
        <p className="mt-1 mb-0 text-[15px] leading-[1.55] font-normal text-muted">
          {tagline}
        </p>
      )}
      {todo && (
        <p className="mt-1.5 mb-0 inline-block rounded border border-dashed border-border px-2 py-1 font-mono text-[12px] leading-[1.4] text-text-tertiary">
          TODO: {todo}
        </p>
      )}
      {metric && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          <Chip>{metric}</Chip>
        </div>
      )}
    </div>
  );

  /* Container query, not a viewport one: in the split layout this row lives in
     a pane roughly half the window, so keying off the window would hold the
     two-column grid at widths that cannot carry it. */
  const rowClass =
    "grid grid-cols-1 border-t border-border py-5 @min-[600px]:grid-cols-[280px_1fr] @min-[600px]:gap-8";

  if (!href) {
    return <div className={rowClass}>{content}</div>;
  }

  return (
    <PanelLink
      href={href}
      className={`group ${rowClass} no-underline hover:no-underline`}
    >
      {content}
    </PanelLink>
  );
}
