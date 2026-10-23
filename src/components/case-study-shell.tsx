import type { ReactNode } from "react";
import { BackToSite } from "./back-to-site";
import { MoreWork } from "./more-work";
import { caseStudyAnchors } from "./work-history";
import { PlainShell } from "./plain-shell";

/**
 * Case study chrome: a sidebar-free reading page, matching the writing
 * articles. The full page is what a shared link, a reload or a new tab lands
 * on, and the reader came for the study, not the site nav: the fixed back
 * pill carries the way back, to the work history the studies live under.
 * The standalone route and the panel keep rendering the same content rather
 * than diverging.
 */
export function CaseStudyShell({
  children,
  backHref = "/work",
  wide = false,
}: {
  children: ReactNode;
  /** Where the back pill lands when there is no panel to return to. */
  backHref?: string;
  /** Room for CaseStudyLayout's rail beside the story. Its top padding
      matches the side sheet's, so the rail pins at the same height in both. */
  wide?: boolean;
}) {
  return (
    <PlainShell
      back={<BackToSite href={backHref} column={wide ? "1152px" : "800px"} />}
    >
      <div
        className={`mx-auto grid w-full gap-16 [&>*]:min-w-0 ${
          wide ? "max-w-[1200px] pt-20 max-md:pt-10" : "max-w-[800px] pt-24 max-md:pt-10"
        }`}
      >
        {children}
        <MoreWork anchors={caseStudyAnchors} />
      </div>
    </PlainShell>
  );
}
