import type { ReactNode } from "react";
import { BackToSite } from "./back-to-site";
import { PlainShell } from "./plain-shell";

/**
 * Case study chrome: a sidebar-free reading page, matching the writing
 * articles. The full page is reached from the panel's expand control or a
 * shared link, and either way the reader came for the study, not the site
 * nav: the fixed back pill and the breadcrumb inside each study carry the
 * way back. The standalone route and the panel keep rendering the same
 * content rather than diverging.
 */
export function CaseStudyShell({
  children,
  backHref,
}: {
  children: ReactNode;
  /** Where the back pill lands when there is no panel to return to. */
  backHref?: string;
}) {
  return (
    <PlainShell>
      <BackToSite href={backHref} />
      <div className="mx-auto grid w-full max-w-[800px] gap-16 pt-24 max-md:pt-20 [&>*]:min-w-0">
        {children}
      </div>
    </PlainShell>
  );
}
