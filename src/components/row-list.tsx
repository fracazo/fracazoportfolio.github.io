"use client";

import { PanelLink } from "./panel-link";
import { useRef, useState } from "react";

export type RowItem = {
  href: string;
  name: string;
  meta?: string;
  /** When present, a thumbnail preview follows the cursor on hover. */
  image?: { src: string };
};

/** Compact bordered row list ("More case studies", homepage Writing list). */
export function RowList({ items }: { items: RowItem[] }) {
  const [preview, setPreview] = useState<RowItem["image"]>();
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
      <ul role="list" className="m-0 list-none p-0">
        {items.map((item) => (
          <li key={item.href} className="border-b border-border">
            <PanelLink
              href={item.href}
              onMouseEnter={
                item.image ? () => setPreview(item.image) : undefined
              }
              onMouseLeave={item.image ? () => setPreview(undefined) : undefined}
              className="group flex items-baseline justify-between gap-4 px-0.5 py-3.5 text-[15px] leading-[1.4] font-medium text-text no-underline hover:no-underline"
            >
              <span className="group-hover:text-brand">{item.name}</span>
              {item.meta && (
                <span className="text-[13px] font-normal whitespace-nowrap text-muted">
                  {item.meta}
                </span>
              )}
            </PanelLink>
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
