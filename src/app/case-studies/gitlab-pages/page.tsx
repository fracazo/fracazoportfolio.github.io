import type { Metadata } from "next";
import { CaseStudyShell } from "@/components/case-study-shell";
import { GitlabPagesContent } from "@/components/case-studies/gitlab-pages";

const title = "Making Site Status Visible in GitLab Pages - Alex Fracazo";
const description =
  "Diagnosing why GitLab Pages spread site status across four screens, proposing a tab-based fix, and getting it shipped by a team that wasn't mine.";

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

export default function GitlabPages() {
  return (
    <CaseStudyShell>
      <GitlabPagesContent
        breadcrumb={
              <nav className="breadcrumb" aria-label="Breadcrumb">
                <a href="/">Home</a><span className="breadcrumb-sep"> &gt; </span><span>Making Site Status Visible in GitLab Pages</span>
              </nav>
        }
      />
    </CaseStudyShell>
  );
}
