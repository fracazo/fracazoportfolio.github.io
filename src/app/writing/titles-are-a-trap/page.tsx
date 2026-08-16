import type { Metadata } from "next";
import { BackToSite } from "@/components/back-to-site";
import { TitlesAreATrapContent } from "@/components/writing/titles-are-a-trap";
import { PlainShell } from "@/components/plain-shell";


export const metadata: Metadata = {
  title: "Titles are a trap. And the inner critic knows it. Alex Fracazo",
  description:
    "On job titles, impostor syndrome, and the only thing that actually moves a career forward.",
  openGraph: {
    title: "Titles are a trap. And the inner critic knows it. Alex Fracazo",
    description:
    "On job titles, impostor syndrome, and the only thing that actually moves a career forward.",
    images: ["/images/opengraph.jpg"],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Titles are a trap. And the inner critic knows it. Alex Fracazo",
    description:
    "On job titles, impostor syndrome, and the only thing that actually moves a career forward.",
    images: ["/images/opengraph.jpg"],
  },
};

export default function Page() {
  return (
    <PlainShell>
      <TitlesAreATrapContent back={<BackToSite href="/writing" label="Writing" />} />
    </PlainShell>
  );
}
