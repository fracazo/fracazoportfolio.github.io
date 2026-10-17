import type { Metadata } from "next";
import { CaseStudyShell } from "@/components/case-study-shell";
import { BringingVisibilityToWorkersStatusContent } from "@/components/case-studies/bringing-visibility-to-workers-status";

const title =
  "Changing booking behaviour by making worker status visible - Alex Fracazo";
const description =
  "Clients kept messaging support workers who had stopped using Hireup. I redesigned how workers see and change their availability on iOS and Android.";

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
    <CaseStudyShell wide>
      <BringingVisibilityToWorkersStatusContent />
    </CaseStudyShell>
  );
}
