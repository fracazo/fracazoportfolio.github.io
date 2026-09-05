import type { Metadata } from "next";
import { CaseStudyShell } from "@/components/case-study-shell";
import { MrSummaryAiContent } from "@/components/case-studies/mr-summary-ai";

const title = "Summarize Merge Requests with AI - Alex Fracazo";
const description = "How three iterations and a Qualtrics survey reshaped an AI feature from reviewer-facing summary to author-facing writing assistant.";

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
    <CaseStudyShell backHref="/case-studies/mr-summary-ai">
      <MrSummaryAiContent
        breadcrumb={
              <nav className="breadcrumb" aria-label="Breadcrumb">
                <a href="/">Home</a><span className="breadcrumb-sep"> &gt; </span><a href="/case-studies/mr-summary-ai">Summarize MR with AI</a><span className="breadcrumb-sep"> &gt; </span><span>Full case study</span>
              </nav>
        }
      />
    </CaseStudyShell>
  );
}
