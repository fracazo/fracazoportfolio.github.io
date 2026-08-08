import type { Metadata } from "next";
import Link from "next/link";
import { PlainShell } from "@/components/plain-shell";
import { SiteFooter } from "@/components/site-footer";
import { ArrowLeftIcon } from "@/components/icons";

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

const years: { year: string; posts: { href: string; title: string }[] }[] = [
  {
    year: "2026",
    posts: [
      {
        href: "/writing/building-birthguide-with-ai",
        title: "Building BirthGuide as a solo designer using AI",
      },
      {
        href: "/writing/titles-are-a-trap",
        title: "Titles are a trap. And the inner critic knows it.",
      },
    ],
  },
  {
    year: "2022",
    posts: [
      {
        href: "/writing/effort-and-impact-are-not-the-same-thing",
        title: "Effort and impact are not the same thing",
      },
    ],
  },
];

export default function Writing() {
  return (
    <PlainShell>
      {/* Back to site */}
      <Link
        href="/"
        className="fixed top-5 left-5 z-50 inline-flex items-center gap-1.5 rounded-full border border-border bg-card/80 px-3 py-1.5 text-[13px] font-medium text-muted no-underline backdrop-blur-md transition-colors hover:border-border hover:text-text hover:no-underline"
      >
        <ArrowLeftIcon size={14} />
        Back
      </Link>

      <section
        aria-labelledby="writing-title"
        className="mx-auto w-full max-w-[640px] pt-24 max-md:pt-20"
      >
        <h1 id="writing-title" className="h1">
          Writing
        </h1>

        {years.map(({ year, posts }, i) => (
          <div key={year} className={i > 0 ? "mt-12" : undefined}>
            <h2 className="mb-4 text-[12px] font-semibold tracking-[0.06em] text-muted uppercase">
              {year}
            </h2>
            <ul className="m-0 list-none p-0">
              {posts.map((post) => (
                <li
                  key={post.href}
                  className="border-b border-border first:border-t"
                >
                  <Link
                    href={post.href}
                    className="group flex items-baseline justify-between gap-4 py-3.5 no-underline hover:no-underline"
                  >
                    <span className="text-[15px] font-normal leading-[1.4] text-text transition-colors duration-150 group-hover:text-brand">
                      {post.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <SiteFooter />
    </PlainShell>
  );
}
