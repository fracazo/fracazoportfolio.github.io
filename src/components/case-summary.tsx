import Link from "next/link";
import { Chip } from "./chip";
import { caseSummaries } from "./case-study-summaries";

/** A phone screen at phone width, centred. Inline so it beats the image's
    own full-width rule without a specificity fight. */
const portraitStyle = { maxWidth: 320, marginInline: "auto", display: "block" } as const;

/**
 * The summary block of a case study.
 *
 * Two surfaces, one source. In the panel it stands in for the whole study:
 * title, meta chips, the shipped screens, the call, what happened, and a
 * button to the route. On the route it sits where the summary card used to,
 * without the title (the page has its h1) and without the button (the reader
 * is already there). Typography rides on `.case-study-section` so it matches
 * the study around it.
 */
export function CaseSummary({
  href,
  variant,
  onExpand,
}: {
  /** Route of the study, which is also its key in the summaries map. */
  href: string;
  variant: "panel" | "page";
  /** Fires as the read-more button is followed, to save the panel's context. */
  onExpand?: () => void;
}) {
  const summary = caseSummaries[href];
  if (!summary) return null;
  const inPanel = variant === "panel";

  return (
    <section
      className={inPanel ? "section case-study-content" : undefined}
      aria-label={inPanel ? undefined : "Summary"}
    >
      <div className="case-study-main">
        {inPanel && (
          <header className="case-header">
            <h1 className="case-title">{summary.title}</h1>
            <ul role="list" className="m-0 mt-5 flex list-none flex-wrap gap-2 p-0">
              {summary.meta.map((item) => (
                <li key={item} className="flex">
                  <Chip>{item}</Chip>
                </li>
              ))}
            </ul>
          </header>
        )}

        {summary.media.map((item) => (
          <figure key={item.src ?? item.video} className="m-0">
            {item.video ? (
              <video
                src={item.video}
                className="case-study-image"
                style={item.portrait ? portraitStyle : undefined}
                autoPlay
                loop
                muted
                playsInline
                aria-label={item.alt}
              />
            ) : (
              <img
                src={item.src}
                alt={item.alt}
                className="case-study-image"
                style={item.portrait ? portraitStyle : undefined}
                loading={inPanel ? "eager" : "lazy"}
              />
            )}
            {item.caption && (
              <figcaption className="img-caption">{item.caption}</figcaption>
            )}
          </figure>
        ))}

        <div className="case-study-section">
          <h2>The call</h2>
          <p>{summary.call}</p>

          <h2 className="mt-10">What happened</h2>
          <ul>
            {summary.outcomes.map((outcome) => (
              <li key={outcome}>{outcome}</li>
            ))}
          </ul>

          {inPanel && (
            <Link
              href={href}
              onClick={onExpand}
              className="btn btn-primary mt-8 inline-flex items-center gap-2 px-4 py-2.5 whitespace-nowrap no-underline hover:no-underline"
            >
              Read the full case study
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
