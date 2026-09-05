import type { Metadata } from "next";
import { CaseStudyShell } from "@/components/case-study-shell";
import { QantasEntertainmentAppContent } from "@/components/case-studies/qantas-entertainment-app";

const title = "Driving Engagement Through a Unified Entertainment Experience - Alex Fracazo";
const description = "Making the entertainment app useful before and after the flight, not just on board.";

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
    <CaseStudyShell backHref="/case-studies/qantas-entertainment-app">
      <QantasEntertainmentAppContent
        breadcrumb={
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <a href="/">Home</a><span className="breadcrumb-sep"> &gt; </span><a href="/case-studies/qantas-entertainment-app">Qantas Entertainment</a><span className="breadcrumb-sep"> &gt; </span><span>Full case study</span>
            </nav>
        }
      />
    </CaseStudyShell>
  );
}
