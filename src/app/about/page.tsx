import type { Metadata } from "next";
import { PlainShell } from "@/components/plain-shell";
import { AboutContent } from "@/components/about-content";
import { SiteFooter } from "@/components/site-footer";
import { BackToSite } from "@/components/back-to-site";

const description =
  "I work end to end, from research and strategy through to a working product.";

export const metadata: Metadata = {
  title: "About - Alex Fracazo",
  description,
  openGraph: {
    title: "About - Alex Fracazo",
    description,
    images: ["/images/opengraph.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About - Alex Fracazo",
    description,
    images: ["/images/opengraph.jpg"],
  },
};

export default function About() {
  return (
    <PlainShell back={<BackToSite />}>
      <AboutContent />

      <div className="mx-auto w-full max-w-home">
        <SiteFooter className="!ml-0" />
      </div>
    </PlainShell>
  );
}
