import Link from "next/link";
import type { Metadata } from "next";
import { CaseStudyShell } from "@/components/case-study-shell";
import { QantasAppContent } from "@/components/case-studies/qantas-app";

const title = "Increasing App Adoption by Integrating Entertainment Services - Alex Fracazo";
const description = "Using entertainment features to drive a 70% increase in app downloads.";

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
    <CaseStudyShell>
      <QantasAppContent
        breadcrumb={
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link><span className="breadcrumb-sep"> &gt; </span><Link href="/work">Work history</Link><span className="breadcrumb-sep"> &gt; </span><span>Qantas App</span>
            </nav>
        }
      />
    </CaseStudyShell>
  );
}
