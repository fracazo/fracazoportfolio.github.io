"use client";

import Link from "next/link";
import { ExternalLinkIcon } from "./icons";
import { useRef, useState } from "react";

export type LinkRowItem = {
  title: string;
  /** Right-hand context: company and year. */
  meta?: string;
  /** One or more destinations. Paths starting with "/" route internally. */
  links: { href: string; label: string }[];
  /** When present, a thumbnail preview follows the cursor on hover. */
  image?: { src: string };
};

/**
 * Row list where a piece of work points at one or more destinations
 * (case study, issue, blog post, video). A row with exactly one destination
 * is one full-row link, like RowList: the meta-size label alone was a
 * hopeless touch target. Only when a row has several destinations do the
 * links stay separate, with their hit areas padded out instead.
 */
export function LinkRowList({ items }: { items: LinkRowItem[] }) {
  const [preview, setPreview] = useState<LinkRowItem["image"]>();
  const floatRef = useRef<HTMLDivElement>(null);
  const hasPreviews = items.some((item) => item.image);

  // Position the floating preview at the cursor; flip left near the right edge
  // so it never overflows the viewport. Set via ref to avoid re-rendering on
  // every mouse move.
  function movePreview(e: React.MouseEvent) {
    const el = floatRef.current;
    if (!el) return;
    const offset = 24;
    const width = 240;
    const x =
      e.clientX + offset + width > window.innerWidth
        ? e.clientX - offset - width
        : e.clientX + offset;
    el.style.left = `${x}px`;
    el.style.top = `${e.clientY - 80}px`;
  }

  return (
    <div onMouseMove={hasPreviews ? movePreview : undefined}>
      <ul role="list" className="m-0 list-none border-t border-border p-0">
        {items.map((item) => {
          const single = item.links.length === 1 ? item.links[0] : null;
          const rowLayout =
            "flex items-baseline justify-between gap-4 px-0.5 py-3.5";
          const meta = item.meta && (
            <span className="flex-none text-meta whitespace-nowrap text-muted opacity-70">
              {item.meta}
            </span>
          );

          // Single-destination row: title, label and meta travel together
          // inside the one anchor, so hover colors title and label as a unit.
          const singleBody = single && (
            <>
              <span className="flex min-w-0 flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="text-body font-medium text-text transition-colors duration-150 group-hover:text-brand">
                  {item.title}
                </span>
                <span className="inline-flex items-center gap-1 text-meta text-muted transition-colors duration-150 group-hover:text-brand">
                  {single.label}
                  {single.href.startsWith("/") ? (
                    <>&nbsp;&rarr;</>
                  ) : (
                    <ExternalLinkIcon size={12} className="opacity-70" />
                  )}
                </span>
              </span>
              {meta}
            </>
          );
          const singleClass = `group ${rowLayout} touch-manipulation no-underline hover:no-underline`;

          // Multi-destination link: the visible label stays meta-size while
          // padding grows the tap target; the negative margins hand the space
          // back to the layout. ±4px horizontal fits inside the 12px gap
          // between links, so neighbouring hit areas never overlap.
          const multiLinkClass =
            "-mx-1 -my-3 px-1 py-3 text-meta text-muted no-underline transition-colors duration-150 touch-manipulation hover:text-brand hover:no-underline";

          return (
            <li
              key={item.title}
              onMouseEnter={
                item.image ? () => setPreview(item.image) : undefined
              }
              onMouseLeave={item.image ? () => setPreview(undefined) : undefined}
              className="border-b border-border"
            >
              {single ? (
                single.href.startsWith("/") ? (
                  <Link href={single.href} className={singleClass}>
                    {singleBody}
                  </Link>
                ) : (
                  <a
                    href={single.href}
                    target="_blank"
                    rel="noopener"
                    className={singleClass}
                  >
                    {singleBody}
                  </a>
                )
              ) : (
                <div className={rowLayout}>
                  <div className="flex min-w-0 flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="text-body font-medium text-text">
                      {item.title}
                    </span>
                    <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      {item.links.map((link) =>
                        link.href.startsWith("/") ? (
                          <Link
                            key={link.href}
                            href={link.href}
                            className={multiLinkClass}
                          >
                            {link.label}&nbsp;&rarr;
                          </Link>
                        ) : (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener"
                            className={`inline-flex items-center gap-1 ${multiLinkClass}`}
                          >
                            {link.label}
                            <ExternalLinkIcon size={12} className="opacity-70" />
                          </a>
                        ),
                      )}
                    </span>
                  </div>
                  {meta}
                </div>
              )}
            </li>
          );
        })}
      </ul>

      {hasPreviews && (
        <div
          ref={floatRef}
          aria-hidden="true"
          className={`thumb-frame pointer-events-none fixed top-0 left-0 z-50 w-[240px] origin-top-left overflow-hidden rounded-card bg-panel-2 transition-[opacity,transform] duration-200 ease-out motion-reduce:transition-none ${
            preview
              ? "opacity-100 [transform:scale(1)]"
              : "opacity-0 [transform:scale(0.95)]"
          }`}
        >
          <div className="aspect-[16/10]">
            {preview && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={preview.src}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
