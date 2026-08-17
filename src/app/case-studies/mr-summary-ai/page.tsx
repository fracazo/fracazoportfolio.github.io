import type { Metadata } from "next";
import { CaseStudyShell } from "@/components/case-study-shell";
import { MrSummaryAiContent } from "@/components/case-studies/mr-summary-ai";
import { ExternalLinkIcon } from "@/components/icons";
import { SiteFooter } from "@/components/site-footer";

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
    <CaseStudyShell>
      <MrSummaryAiContent
        breadcrumb={
              <nav className="breadcrumb" aria-label="Breadcrumb">
                <a href="/">Home</a><span className="breadcrumb-sep"> &gt; </span><span>Summarize MR with AI</span>
              </nav>
        }
      />

      {/* Work with me */}
      <section className="section case-study-content" aria-label="Work with Alex">
        <div className="case-cta">
          <h2>Work with me</h2>
          <p>I'm available for product design roles and contract engagements, hybrid in Melbourne or remote (UTC+10). If the way I work resonates, let's talk.</p>
          <div className="case-cta-actions">
            <a href="mailto:fracazo@duck.com" className="btn btn-primary">Email me</a>
            <a href="/resume" className="btn btn-ghost">Work history</a>
            <a href="https://www.linkedin.com/in/fracazo" target="_blank" rel="noopener" className="btn btn-ghost">LinkedIn<ExternalLinkIcon size={14} className="opacity-70" /></a>
          </div>
        </div>
        <div className="case-next">
          <a href="/case-studies/glql"><span className="case-next-label">Next case study</span><span className="case-next-title">GLQL: Embedded Views for Work Tracking</span></a>
        </div>
        </section>

      <SiteFooter />
    </CaseStudyShell>
  );
}
