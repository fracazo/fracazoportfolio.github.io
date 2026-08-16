import type { ReactNode } from "react";

/**
 * Panel content for work that has no case study.
 *
 * Deliberately short: a few paragraphs of context rather than a write-up, so
 * these entries can earn a place in the index without pretending to a depth
 * they do not have. Uses the case study type styles so a stub and a study feel
 * like the same publication at different lengths.
 */
export function WorkStub({
  eyebrow,
  title,
  intro,
  children,
}: {
  /** Company and years, e.g. "Vodafone · 2015–2016". */
  eyebrow: string;
  title: string;
  /** One line, set larger, mirroring a case study's deck. */
  intro?: string;
  children: ReactNode;
}) {
  return (
    <section className="section case-study-content">
      <div className="case-study-main">
        <header className="case-header">
          <p className="mb-2 text-[11px] font-medium tracking-[0.06em] text-muted uppercase">
            {eyebrow}
          </p>
          <h1 className="case-title">{title}</h1>
          {intro && <p className="case-intro">{intro}</p>}
        </header>
        <div className="case-study-section">{children}</div>
      </div>
    </section>
  );
}
