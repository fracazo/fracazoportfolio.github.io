import type { Metadata } from "next";
import { CaseStudyShell } from "@/components/case-study-shell";
import { BirthguideContent } from "@/components/case-studies/birthguide";
import { SiteFooter } from "@/components/site-footer";

const title = "The birth plan that advocates for you during labour - Alex Fracazo";
const description = "A birth plan you open on your phone, not one you forget in your bag. Designed and shipped in 10 days as a solo non-developer founder.";

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
