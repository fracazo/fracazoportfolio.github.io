import type { Metadata } from "next";
import { CaseStudyShell } from "@/components/case-study-shell";
import { EtaAppContent } from "@/components/case-studies/eta-app";

const title =
  "Replacing a visa form with a passport scan - Alex Fracazo";
const description =
  "An app that reads the passport chip, so travellers to Australia stop typing their details into a long form.";

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
    <CaseStudyShell wide>
      <EtaAppContent />
    </CaseStudyShell>
  );
}
