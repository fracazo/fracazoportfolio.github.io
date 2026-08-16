import Link from "next/link";
import type { ReactNode } from "react";
import { SiteFooter } from "./site-footer";

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
  back,
}: {
  tags: string[];
  title: string;
  meta: string;
  prev?: ArticleLink;
  next?: ArticleLink;
  children: ReactNode;
  /** Route chrome. Omitted in the panel, where a fixed pill would misplace. */
  back?: ReactNode;
}) {
  return (
    <>
      {back}

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
