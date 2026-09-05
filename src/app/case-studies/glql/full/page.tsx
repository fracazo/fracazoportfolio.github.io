import type { Metadata } from "next";
import { CaseStudyShell } from "@/components/case-study-shell";
import { GlqlContent } from "@/components/case-studies/glql";

const title = "GLQL / Embedded Views - Alex Fracazo";
const description =
  "Turning a query language built by engineers into something a non-technical person could actually use, without taking any power away from the experts.";

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

export default function Glql() {
  return (
    <CaseStudyShell backHref="/case-studies/glql">
      <GlqlContent
        breadcrumb={
              <nav className="breadcrumb" aria-label="Breadcrumb">
                <a href="/">Home</a><span className="breadcrumb-sep"> &gt; </span><a href="/case-studies/glql">GLQL / Embedded Views</a><span className="breadcrumb-sep"> &gt; </span><span>Full case study</span>
              </nav>
        }
      />
    </CaseStudyShell>
  );
}
