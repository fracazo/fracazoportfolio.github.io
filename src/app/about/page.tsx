import type { Metadata } from "next";
import Link from "next/link";
import { PlainShell } from "@/components/plain-shell";
import { AboutContent } from "@/components/about-content";
import { SiteFooter } from "@/components/site-footer";
import { ArrowLeftIcon } from "@/components/icons";

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
    <PlainShell>
      <AboutContent
        back={
          <>
            {/* Back to site */}
            <Link
              href="/"
              className="fixed top-5 left-5 z-50 inline-flex items-center gap-1.5 rounded-full border border-border bg-card/80 px-3 py-1.5 text-meta font-medium text-muted no-underline backdrop-blur-md transition-colors hover:border-border hover:text-text hover:no-underline"
            >
              <ArrowLeftIcon size={14} />
              Back
            </Link>
          </>
        }
      />

      <SiteFooter />
    </PlainShell>
  );
}
