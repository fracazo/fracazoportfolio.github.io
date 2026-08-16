import Link from "next/link";
import type { ReactNode } from "react";

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

/**
 * Body of the writing index, without the route chrome.
 */
export function WritingIndexContent({ back }: { back?: ReactNode } = {}) {
  return (
    <>
      {back}
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
    </>
  );
}
