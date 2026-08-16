import type { Metadata } from "next";
import { CaseStudyShell } from "@/components/case-study-shell";
import { BringingVisibilityToWorkersStatusContent } from "@/components/case-studies/bringing-visibility-to-workers-status";
import { ExternalLinkIcon } from "@/components/icons";
import { SiteFooter } from "@/components/site-footer";

const title = "Changing Booking Behaviour Through Worker Status Visibility - Alex Fracazo";
const description = "Reducing uncertainty in a two-sided marketplace and increasing successful bookings by 12%.";

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

export default function BringingVisibilityToWorkersStatus() {
  return (
    <CaseStudyShell>
      <BringingVisibilityToWorkersStatusContent
        breadcrumb={
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <a href="/">Home</a><span className="breadcrumb-sep"> &gt; </span><span>Worker Status Visibility</span>
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
            <a href="/resume" className="btn btn-ghost">Résumé</a>
            <a href="https://www.linkedin.com/in/fracazo" target="_blank" rel="noopener" className="btn btn-ghost">LinkedIn<ExternalLinkIcon size={14} className="opacity-70" /></a>
          </div>
        </div>
        <div className="case-next">
          <a href="/case-studies/eta-app"><span className="case-next-label">Next case study</span><span className="case-next-title">Reducing Friction in Government Visa Applications</span></a>
        </div>
        </section>

      <SiteFooter />
    </CaseStudyShell>
  );
}
