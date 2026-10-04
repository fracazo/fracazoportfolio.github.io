import { TextLink } from "./text-link";
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
      className={`mx-auto w-full max-w-content${className ? ` ${className}` : ""}`}
    >
      <footer role="contentinfo">
        <div className="grid gap-2">
          <p id="footer-title" className="text mt-0 text-text">
            Hybrid or remote (UTC+10). Working globally.
          </p>
          {links !== null && (
            <p className="text mt-2">
              {links ?? (
                <>
                  You can find me on{" "}
                  <TextLink href="https://github.com/fracazo">GitHub</TextLink>,{" "}
                  <TextLink href="https://www.linkedin.com/in/fracazo">
                    LinkedIn
                  </TextLink>
                  , read my <TextLink href="/resume">work history</TextLink>, or{" "}
                  <TextLink href="mailto:fracazo@duck.com">
                    reach me by email
                  </TextLink>
                  .
                </>
              )}
            </p>
          )}
        </div>
      </footer>
    </section>
  );
}
