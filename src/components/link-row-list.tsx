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
 * Row list where a single piece of work points at several destinations
 * (case study, issue, blog post, video). Unlike RowList the row itself is not
 * clickable, because there is no single obvious target.
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
        {items.map((item) => (
          <li
            key={item.title}
            onMouseEnter={item.image ? () => setPreview(item.image) : undefined}
            onMouseLeave={item.image ? () => setPreview(undefined) : undefined}
            className="flex items-baseline justify-between gap-4 border-b border-border px-0.5 py-3.5"
          >
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
                      className="text-meta text-muted no-underline transition-colors duration-150 hover:text-brand hover:no-underline"
                    >
                      {link.label}&nbsp;&rarr;
                    </Link>
                  ) : (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener"
                      className="inline-flex items-center gap-1 text-meta text-muted no-underline transition-colors duration-150 hover:text-brand hover:no-underline"
                    >
                      {link.label}
                      <ExternalLinkIcon size={12} className="opacity-70" />
                    </a>
                  ),
                )}
              </span>
            </div>
            {item.meta && (
              <span className="flex-none text-meta whitespace-nowrap text-muted opacity-70">
                {item.meta}
              </span>
            )}
          </li>
        ))}
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
