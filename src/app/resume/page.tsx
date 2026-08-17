import type { Metadata } from "next";
import { BackToSite } from "@/components/back-to-site";
import { ResumeContent } from "@/components/resume-content";

export const metadata: Metadata = {
  title: "Work History - Alex Fracazo",
  description:
    "I work end to end, from research and strategy through to a working product.",
  openGraph: {
    title: "Work History - Alex Fracazo",
    description:
      "I work end to end, from research and strategy through to a working product.",
    images: ["/images/opengraph.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Work History - Alex Fracazo",
    description:
      "I work end to end, from research and strategy through to a working product.",
    images: ["/images/opengraph.jpg"],
  },
};


export default function Resume() {
  return <ResumeContent back={<BackToSite />} />;
}
