import type { Metadata } from "next";
import { CaseStudyShell } from "@/components/case-study-shell";
import { MrSummaryAiContent } from "@/components/case-studies/mr-summary-ai";

const title = "Merge request summaries: moving AI from the reviewer to the author - Alex Fracazo";
const description =
  "Three shipped versions and a survey showed the AI was in the wrong role. The fix was helping authors write the description, with the author in control.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: ["/images/opengraph.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/opengraph.jpg"],
  },
};

export default function MrSummaryAi() {
  return (
    <CaseStudyShell wide>
      <MrSummaryAiContent />
    </CaseStudyShell>
  );
}
