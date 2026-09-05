import Link from "next/link";
import type { ReactNode } from "react";
import { Chip } from "./chip";
import { ExternalLinkIcon } from "./icons";
import { caseSummaries } from "./case-study-summaries";

/**
 * Renders an outcome line, turning `[label](href)` into a link. Kept this
 * small on purpose: the summaries are data, and a link is the only markup
 * they need.
 */
function withLinks(text: string) {
  const parts: ReactNode[] = [];
  const pattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  for (const match of text.matchAll(pattern)) {
    const [whole, label, href] = match;
    const at = match.index ?? 0;
    if (at > last) parts.push(text.slice(last, at));
    parts.push(
      <a key={at} href={href} target="_blank" rel="noopener noreferrer">
        {label}
      </a>,
    );
    last = at + whole.length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

/** A phone screen at phone width, centred. Inline so it beats the image's
    own full-width rule without a specificity fight. */
const portraitStyle = { maxWidth: 320, marginInline: "auto", display: "block" } as const;

/**
 * The summary of a case study.
 *
 * Two surfaces, one source. The panel shows it beside the index; the study's
 * route shows the same thing at full width, so the expand control means what
 * it means everywhere else on the site. Either way the button leads on to
 * the complete study at `/full`. Typography rides on `.case-study-section`
 * so it matches the study it summarises.
 */
export function CaseSummary({
  href,
  breadcrumb,
  onExpand,
}: {
  /** Route of the study's summary, which is also its key in the summaries map. */
  href: string;
  /** Slot the route fills and the panel leaves empty. */
  breadcrumb?: ReactNode;
  /** Fires as the read-more button is followed, to save the panel's context. */
  onExpand?: () => void;
}) {
  const summary = caseSummaries[href];
  if (!summary) return null;

  return (
    <section className="section case-study-content">
      <div className="case-study-main">
        {breadcrumb}

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
              <li key={outcome}>{withLinks(outcome)}</li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-2.5">
            <Link
              href={`${href}/full`}
              onClick={onExpand}
              className="btn btn-primary inline-flex items-center gap-2 px-4 py-2.5 whitespace-nowrap no-underline hover:no-underline"
            >
              Read the full case study
            </Link>
            {summary.links?.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn inline-flex items-center gap-2 px-4 py-2.5 whitespace-nowrap no-underline hover:no-underline"
              >
                {link.label}
                <ExternalLinkIcon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
