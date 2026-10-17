import type { Metadata } from "next";
import { CaseStudyShell } from "@/components/case-study-shell";
import { QantasEntertainmentAppContent } from "@/components/case-studies/qantas-entertainment-app";

const title =
  "Qantas Entertainment: tripling ad revenue by making in-flight entertainment work before the flight - Alex Fracazo";
const description =
  "Making the entertainment app useful before and after the flight, not just on board.";

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

export default function QantasEntertainmentApp() {
  return (
    <CaseStudyShell wide>
      <QantasEntertainmentAppContent />
    </CaseStudyShell>
  );
}
