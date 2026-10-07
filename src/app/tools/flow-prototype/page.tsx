import type { Metadata } from "next";
import { CaseStudyShell } from "@/components/case-study-shell";
import { FlowPrototypeContent } from "@/components/tools/flow-prototype";

const title = "Flow prototype - Alex Fracazo";
const description =
  "A Claude Code skill that puts every screen of a prototype on one zoomable canvas, connected by the paths between them, on any device.";

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
      <FlowPrototypeContent />
    </CaseStudyShell>
  );
}
