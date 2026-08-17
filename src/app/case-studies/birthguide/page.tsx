import type { Metadata } from "next";
import { CaseStudyShell } from "@/components/case-study-shell";
import { BirthguideContent } from "@/components/case-studies/birthguide";
import { SiteFooter } from "@/components/site-footer";

const title = "I built a birth plan generator. My users were using it to learn. - Alex Fracazo";
const description = "Shipped in ten days, sold for six months, then the research said the document was not the valuable part. How I inverted the business model in twenty-six days.";

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

export default function Birthguide() {
  return (
    <CaseStudyShell>
      <BirthguideContent
        breadcrumb={
              <nav className="breadcrumb" aria-label="Breadcrumb">
                <a href="/">Home</a><span className="breadcrumb-sep"> &gt; </span><span>BirthGuide</span>
              </nav>
        }
        tail={
              <div className="case-next">
                <a href="/case-studies/bringing-visibility-to-workers-status"><span className="case-next-label">Next case study</span><span className="case-next-title">Changing Booking Behaviour Through Worker Status Visibility</span></a>
              </div>
        }
      />

      <SiteFooter />
    </CaseStudyShell>
  );
}
