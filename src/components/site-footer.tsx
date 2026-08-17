import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Footer section; pass `links` to override the default contact line, or `null`
 * to drop it (for pages that already list the same links in their content).
 */
export function SiteFooter({
  links,
  className,
}: {
  links?: ReactNode | null;
  className?: string;
}) {
  return (
    <section
      aria-labelledby="footer-title"
      className={`mx-auto w-full max-w-[640px]${className ? ` ${className}` : ""}`}
    >
      <footer role="contentinfo">
        <div className="grid gap-2">
          <p id="footer-title" className="text mt-0 text-text">
            Based in Melbourne. Working globally.
          </p>
          {links !== null && (
            <p className="text mt-2">
              {links ?? (
                <>
                  You can find me on{" "}
                  <a href="https://github.com/fracazo" target="_blank">
                    GitHub
                  </a>
                  ,{" "}
                  <a href="https://www.linkedin.com/in/fracazo" target="_blank">
                    LinkedIn
                  </a>
                  , read my <Link href="/resume">work history</Link>, or{" "}
                  <a href="mailto:fracazo@duck.com">reach me by email</a>.
                </>
              )}
            </p>
          )}
        </div>
      </footer>
    </section>
  );
}
