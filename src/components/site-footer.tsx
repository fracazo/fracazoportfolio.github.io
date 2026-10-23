import { TextLink } from "./text-link";

/** Footer section, identical on every page. */
export function SiteFooter({ className }: { className?: string }) {
  return (
    <section
      aria-labelledby="footer-title"
      className={`mx-auto w-full max-w-content${className ? ` ${className}` : ""}`}
    >
      <footer role="contentinfo">
        <p className="text mt-0">
          <span id="footer-title">
            Hybrid or remote on Australian east coast time, working with teams
            anywhere.
          </span>{" "}
          You can find me on{" "}
          <TextLink href="https://github.com/fracazo">GitHub</TextLink>,{" "}
          <TextLink href="https://www.linkedin.com/in/fracazo">LinkedIn</TextLink>
          , read my <TextLink href="/work">work history</TextLink>, or{" "}
          <TextLink href="mailto:fracazo@duck.com">reach me by email</TextLink>.
        </p>
      </footer>
    </section>
  );
}
