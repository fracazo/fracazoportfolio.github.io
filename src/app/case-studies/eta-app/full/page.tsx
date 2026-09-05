import type { Metadata } from "next";
import { CaseStudyShell } from "@/components/case-study-shell";
import { EtaAppContent } from "@/components/case-studies/eta-app";

const title = "Reducing Friction in Government Visa Applications - Alex Fracazo";
const description = "Automating data entry to improve completion and reduce user effort in a high-stakes service.";

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

export default function EtaApp() {
  return (
    <CaseStudyShell backHref="/case-studies/eta-app">
      <EtaAppContent
        breadcrumb={
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <a href="/">Home</a><span className="breadcrumb-sep"> &gt; </span><a href="/case-studies/eta-app">ETA App</a><span className="breadcrumb-sep"> &gt; </span><span>Full case study</span>
            </nav>
        }
      />
    </CaseStudyShell>
  );
}
