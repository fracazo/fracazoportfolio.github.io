import type { Metadata } from "next";
import { CaseStudyShell } from "@/components/case-study-shell";
import { GitlabPagesContent } from "@/components/case-studies/gitlab-pages";

const title = "GitLab Pages: shipping a redesign without a team - Alex Fracazo";
const description =
  "GitLab Pages spread site status across four blocks and hid DNS problems until something broke. I designed the fix and, with no team assigned to Pages, got it shipped in a single release.";

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
    <CaseStudyShell wide>
      <GitlabPagesContent />
    </CaseStudyShell>
  );
}
