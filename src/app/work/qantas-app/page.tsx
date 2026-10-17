import type { Metadata } from "next";
import { CaseStudyShell } from "@/components/case-study-shell";
import { QantasAppContent } from "@/components/case-studies/qantas-app";

const title =
  "Qantas Airways app: putting entertainment on the flight card - Alex Fracazo";
const description =
  "Travellers didn’t know the Qantas Entertainment app existed until they boarded. An aircraft-aware notice on the flight card got 27k download taps in its first day.";

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

export default function QantasApp() {
  return (
    <CaseStudyShell wide>
      <QantasAppContent />
    </CaseStudyShell>
  );
}
