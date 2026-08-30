import type { ReactNode } from "react";

/**
 * Shell for a writing article: back pill, tags, title, meta and body. No
 * footer or prev/next links: like the case studies, the article ends with
 * its own content whether it renders in the panel or on the standalone page.
 */
export function WritingArticle({
  tags,
  title,
  meta,
  children,
  back,
}: {
  tags: string[];
  title: string;
  meta: string;
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
      </article>
    </>
  );
}
