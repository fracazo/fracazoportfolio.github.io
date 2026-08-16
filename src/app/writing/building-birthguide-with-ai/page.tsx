import type { Metadata } from "next";
import { BackToSite } from "@/components/back-to-site";
import { BuildingBirthguideWithAiContent } from "@/components/writing/building-birthguide-with-ai";
import { PlainShell } from "@/components/plain-shell";


export const metadata: Metadata = {
  title: "Building BirthGuide as a solo designer using AI, Alex Fracazo",
  description:
    "How I built BirthGuide from zero to production as a solo designer using AI tools.",
  openGraph: {
    title: "Building BirthGuide as a solo designer using AI, Alex Fracazo",
    description:
    "How I built BirthGuide from zero to production as a solo designer using AI tools.",
    images: ["/images/opengraph.jpg"],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Building BirthGuide as a solo designer using AI, Alex Fracazo",
    description:
    "How I built BirthGuide from zero to production as a solo designer using AI tools.",
    images: ["/images/opengraph.jpg"],
  },
};

export default function Page() {
  return (
    <PlainShell>
      <BuildingBirthguideWithAiContent back={<BackToSite href="/writing" label="Writing" />} />
    </PlainShell>
  );
}
