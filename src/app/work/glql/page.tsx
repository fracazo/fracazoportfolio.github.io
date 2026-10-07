import type { Metadata } from "next";
import { CaseStudyShell } from "@/components/case-study-shell";
import { GlqlContent } from "@/components/case-studies/glql";

const title = "GLQL (GitLab Query Language): Embedded Views for Work Tracking - Alex Fracazo";
const description =
  "GitLab Query Language (GLQL) was powerful, but you had to write queries by hand to use it. I made it work for people who had only ever used filters, without taking any power away from the experts.";

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
    <CaseStudyShell>
      <GlqlContent />
    </CaseStudyShell>
  );
}
