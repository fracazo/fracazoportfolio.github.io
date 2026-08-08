import Link from "next/link";
import type { ReactNode } from "react";
import { SiteFooter } from "./site-footer";
import { ArrowLeftIcon } from "./icons";

type ArticleLink = { href: string; title: string };

const navLinkClass =
  "flex flex-col gap-[3px] text-muted no-underline hover:text-brand hover:no-underline";

/**
 * Shell for a writing article: back pill, tags, title, meta, body, prev/next
 * and the shared footer. Matches the chrome of the writing index.
 */
export function WritingArticle({
  tags,
  title,
  meta,
  prev,
  next,
  children,
}: {
  tags: string[];
  title: string;
  meta: string;
  prev?: ArticleLink;
  next?: ArticleLink;
  children: ReactNode;
}) {
  return (
    <>
      {/* Back to the writing index */}
      <Link
        href="/writing"
        className="fixed top-5 left-5 z-50 inline-flex items-center gap-1.5 rounded-full border border-border bg-card/80 px-3 py-1.5 text-[13px] font-medium text-muted no-underline backdrop-blur-md transition-colors hover:border-border hover:text-text hover:no-underline"
      >
        <ArrowLeftIcon size={14} />
        Writing
      </Link>

      <article className="mx-auto w-full max-w-[640px] pt-24 max-md:pt-20">
        <div className="writing-tags">
          {tags.map((tag) => (
            <span key={tag} className="writing-tag">
              {tag}
            </span>
          ))}
        </div>

        <h1 className="writing-article-title">{title}</h1>
        <p className="writing-article-meta">{meta}</p>

        <hr className="writing-rule" />

        <div className="writing-body">{children}</div>

        {(prev || next) && (
          <>
            <hr className="mt-16 mb-0 border-0 border-t border-border" />
            <nav
              aria-label="Article navigation"
              className="mt-12 flex items-start justify-between gap-6"
            >
              {prev && (
                <Link
                  href={prev.href}
                  className={`${navLinkClass} items-start text-left`}
                >
                  <span className="text-[13px] font-medium opacity-65">
                    Previous
                  </span>
                  <span className="text-[13px] leading-[1.4] font-medium">
                    {prev.title}
                  </span>
                </Link>
              )}
              {next && (
                <Link
                  href={next.href}
                  className={`${navLinkClass} ml-auto items-end text-right`}
                >
                  <span className="text-[13px] font-medium opacity-65">
                    Next
                  </span>
                  <span className="text-[13px] leading-[1.4] font-medium">
                    {next.title}
                  </span>
                </Link>
              )}
            </nav>
          </>
        )}
      </article>

      <SiteFooter />
    </>
  );
}
