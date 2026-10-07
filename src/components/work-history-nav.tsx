"use client";

import { useEffect, useState } from "react";

/**
 * Sticky jump list for the work history. It names every stop up front, so a
 * recruiter sees the whole career before scrolling, and marks the section in
 * view so a long page never loses its place. Plain anchors: no JavaScript
 * needed to jump, only to highlight.
 */
export function WorkHistoryNav({ items }: { items: { id: string; label: string }[] }) {
  const [current, setCurrent] = useState(items[0]?.id);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);
    // A band near the top of the viewport: whichever section crosses it is
    // the one being read.
    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries.find((entry) => entry.isIntersecting);
        if (hit) setCurrent(hit.target.id);
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav
      aria-label="Work history sections"
      className="sticky top-0 z-40 -mx-6 mb-6 bg-bg/90 px-6 py-3 pe-16 backdrop-blur-md"
    >
      <ul
        role="list"
        className="m-0 flex list-none gap-1 overflow-x-auto p-0 [scrollbar-width:none]"
      >
        {items.map((item) => {
          const active = item.id === current;
          return (
            <li key={item.id} className="flex-none">
              <a
                href={`#${item.id}`}
                aria-current={active ? "location" : undefined}
                className={`block rounded-full px-3 py-1.5 text-meta whitespace-nowrap no-underline transition-colors duration-200 hover:no-underline ${
                  active
                    ? "bg-panel-2 font-medium text-text"
                    : "text-muted hover:text-text"
                }`}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
