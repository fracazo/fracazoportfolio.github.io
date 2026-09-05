import type { Metadata } from "next";
import { CaseStudyShell } from "@/components/case-study-shell";
import { BringingVisibilityToWorkersStatusContent } from "@/components/case-studies/bringing-visibility-to-workers-status";

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
    <CaseStudyShell backHref="/case-studies/bringing-visibility-to-workers-status">
      <BringingVisibilityToWorkersStatusContent
        breadcrumb={
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <a href="/">Home</a><span className="breadcrumb-sep"> &gt; </span><a href="/case-studies/bringing-visibility-to-workers-status">Worker Status Visibility</a><span className="breadcrumb-sep"> &gt; </span><span>Full case study</span>
            </nav>
        }
      />
    </CaseStudyShell>
  );
}
