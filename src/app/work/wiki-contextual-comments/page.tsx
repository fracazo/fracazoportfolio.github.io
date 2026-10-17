import type { Metadata } from "next";
import { CaseStudyShell } from "@/components/case-study-shell";
import { WikiContextualCommentsContent } from "@/components/case-studies/wiki-contextual-comments";

const title = "Wiki contextual comments: tying discussion to the text - Alex Fracazo";
const description =
  "Comments on GitLab Wiki pages had no link to the text they discussed. I designed contextual comments without the clutter, from problem to engineering handoff.";

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

export default function WikiContextualComments() {
  return (
    <CaseStudyShell wide>
      <WikiContextualCommentsContent />
    </CaseStudyShell>
  );
}
