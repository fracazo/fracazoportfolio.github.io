import type { Metadata } from "next";
import { CaseStudyShell } from "@/components/case-study-shell";
import { WikiContextualCommentsContent } from "@/components/case-studies/wiki-contextual-comments";

const title = "Wiki Contextual Comments - Alex Fracazo";
const description = "Designing contextual discussions for GitLab Wiki, positioning it as a competitive alternative to Confluence and Notion for async collaboration.";

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
    <CaseStudyShell>
      <WikiContextualCommentsContent
        breadcrumb={
              <nav className="breadcrumb" aria-label="Breadcrumb">
                <a href="/">Home</a><span className="breadcrumb-sep"> &gt; </span><span>Wiki Contextual Comments</span>
              </nav>
        }
      />
    </CaseStudyShell>
  );
}
