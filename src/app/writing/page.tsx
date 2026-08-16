import type { Metadata } from "next";
import { BackToSite } from "@/components/back-to-site";
import { PlainShell } from "@/components/plain-shell";
import { SiteFooter } from "@/components/site-footer";
import { WritingIndexContent } from "@/components/writing-index-content";

export const metadata: Metadata = {
  title: "Writing - Alex Fracazo",
  description: "Writing by Alex Fracazo on design, product and engineering.",
  openGraph: {
    title: "Writing - Alex Fracazo",
    description: "Writing by Alex Fracazo on design, product and engineering.",
    images: ["/images/opengraph.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Writing - Alex Fracazo",
    description: "Writing by Alex Fracazo on design, product and engineering.",
    images: ["/images/opengraph.jpg"],
  },
};


export default function Writing() {
  return (
    <PlainShell>
      <WritingIndexContent back={<BackToSite href="/" label="Back" />} />
      <SiteFooter />
    </PlainShell>
  );
}
