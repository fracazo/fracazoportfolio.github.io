import type { Metadata } from "next";
import { BackToSite } from "@/components/back-to-site";
import { EffortAndImpactContent } from "@/components/writing/effort-and-impact-are-not-the-same-thing";
import { PlainShell } from "@/components/plain-shell";


export const metadata: Metadata = {
  title: "Effort and impact are not the same thing Alex Fracazo",
  description:
    "Why effort and impact are not the same thing, and the four words that changed how I mentor designers.",
  openGraph: {
    title: "Effort and impact are not the same thing Alex Fracazo",
    description:
    "Why effort and impact are not the same thing, and the four words that changed how I mentor designers.",
    images: ["/images/opengraph.jpg"],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Effort and impact are not the same thing Alex Fracazo",
    description:
    "Why effort and impact are not the same thing, and the four words that changed how I mentor designers.",
    images: ["/images/opengraph.jpg"],
  },
};

export default function Page() {
  return (
    <PlainShell>
      <EffortAndImpactContent back={<BackToSite href="/writing" label="Writing" />} />
    </PlainShell>
  );
}
