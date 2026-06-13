import Link from "next/link";
import type { ReactNode } from "react";

/** Footer section; pass `links` to override the default contact line. */
export function SiteFooter({ links }: { links?: ReactNode }) {
  return (
    <section
      aria-labelledby="footer-title"
      className="mx-auto w-full max-w-[640px]"
    >
      <footer role="contentinfo">
        <div className="grid gap-2">
          <p id="footer-title" className="text mt-0 text-text">
            Based in Melbourne. Working globally.
          </p>
          <p className="text mt-2">
            {links ?? (
              <>
                You can find me on{" "}
                <a href="http://www.linkedin.com/in/fracazo" target="_blank">
                  LinkedIn
                </a>
                , read my <Link href="/resume">résumé</Link>, or{" "}
                <a href="mailto:fracazo@duck.com">reach me by email</a>.
              </>
            )}
          </p>
        </div>
      </footer>
    </section>
  );
}
