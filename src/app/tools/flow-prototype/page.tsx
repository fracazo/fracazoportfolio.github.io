import type { Metadata } from "next";
import Link from "next/link";
import { CaseStudyShell } from "@/components/case-study-shell";
import { FlowPrototypeContent } from "@/components/tools/flow-prototype";

const title = "Flow prototype - Alex Fracazo";
const description =
  "A Claude Code skill: a clickable prototype of every screen in a product, on any device. Map shows every screen; Live walks one path.";

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

export default function FlowPrototype() {
  return (
    <CaseStudyShell>
      <FlowPrototypeContent
        breadcrumb={
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep"> &gt; </span>
            <span>Flow prototype</span>
          </nav>
        }
      />
    </CaseStudyShell>
  );
}
