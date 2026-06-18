"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { AppShell } from "./app-shell";
import { ArrowLeftIcon } from "./icons";

type TocItem = { id: string; label: string };

function DyslexiaFab() {
  const [active, setActive] = useState(false);

  function toggle() {
    const on = document.documentElement.classList.toggle("dyslexia-mode");
    setActive(on);
  }

  // Session-only: clear the mode when leaving case study pages
  useEffect(() => {
    return () => {
      document.documentElement.classList.remove("dyslexia-mode");
    };
  }, []);

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={active}
      className={`dyslexia-fab${active ? " active" : ""}`}
    >
      <span className="dyslexia-fab-icon">Aa</span>
      <span className="dyslexia-tooltip">Dyslexic friendly</span>
    </button>
  );
}

/**
 * Case study chrome: swaps the primary nav for a back link plus a table of
 * contents generated from the content's h2 headings (mirrors the old inline
 * script, including the scrollspy IntersectionObserver), and adds the
 * dyslexia-friendly reading FAB.
 */
export function CaseStudyShell({
  children,
  backHref = "/work",
  backLabel = "Back to Work",
}: {
  children: ReactNode;
  /** Sub-case-studies (e.g. GLQL) link back to their parent page instead */
  backHref?: string;
  backLabel?: string;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [toc, setToc] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    const headings = content.querySelectorAll<HTMLHeadingElement>(
      ".summary-card h2, .case-study-section h2, .up-next h2",
    );
    if (headings.length === 0) return;

    const seen: Record<string, number> = {};
    const items: TocItem[] = [];
    headings.forEach((h) => {
      if (!h.id) {
        const raw = (h.textContent ?? "")
          .trim()
          .toLowerCase()
          .replace(/[^\w\s-]/g, "")
          .replace(/\s+/g, "-")
          .replace(/-+/g, "-");
        h.id = seen[raw] ? `${raw}-${++seen[raw]}` : ((seen[raw] = 1), raw);
      }
      items.push({
        id: h.id,
        label: (h.textContent ?? "").replace(/\s*\[.*?\]\s*/g, "").trim(),
      });
    });
    setToc(items);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-100px 0px -80% 0px", threshold: 0 },
    );
    headings.forEach((h) => io.observe(h));
    return () => io.disconnect();
  }, []);

  const sidebarNav = (
    <nav
      aria-label="Case study navigation"
      className="flex min-h-0 flex-1 flex-col gap-6 overflow-y-auto"
    >
      <Link
        href={backHref}
        className="flex items-center gap-2 rounded-lg border border-border px-2.5 py-2 text-sm text-muted no-underline transition-colors duration-200 hover:bg-panel-2 hover:text-text hover:no-underline"
      >
        <ArrowLeftIcon className="shrink-0" />
        {backLabel}
      </Link>
      {toc.length > 0 && (
        <div>
          <h2 className="m-0 mt-2 px-2.5 text-[12px] font-semibold tracking-[0.06em] text-muted uppercase opacity-60">
            On this page
          </h2>
          <ul className="m-0 mt-3 flex list-none flex-col gap-0.5 p-0">
            {toc.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`block rounded-lg px-2.5 py-1.5 text-sm leading-[1.4] no-underline transition-colors duration-200 hover:bg-panel-2 hover:text-text hover:no-underline ${
                    activeId === id
                      ? "bg-accent/10 font-medium text-accent"
                      : "text-muted"
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );

  return (
    <AppShell sidebarNav={sidebarNav}>
      <div
        ref={contentRef}
        className="mx-auto grid w-full max-w-[800px] gap-16 [&>*]:min-w-0"
      >
        {children}
      </div>
      <DyslexiaFab />
    </AppShell>
  );
}
