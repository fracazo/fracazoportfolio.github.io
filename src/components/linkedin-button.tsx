import { ExternalLinkIcon, LinkedInIcon } from "@/components/icons";

/**
 * The one contact action, used on Work history and About.
 *
 * Says where it goes (LinkedIn mark), what you do there (connect), and that it
 * leaves the site (trailing arrow, plus the same thing in words for screen
 * readers), so it never reads as another panel button. Full width on phones,
 * where the label may wrap rather than overflow a 320px screen.
 */
export function LinkedInButton({
  className = "",
  secondary = false,
}: {
  className?: string;
  /* Base .btn instead of .btn-primary, for when it sits beside a lead action
     (Work history's résumé download). */
  secondary?: boolean;
}) {
  return (
    <a
      href="https://www.linkedin.com/in/fracazo"
      target="_blank"
      rel="noopener noreferrer"
      className={`btn ${secondary ? "" : "btn-primary"} inline-flex items-center justify-center gap-2 px-4 py-2.5 text-center no-underline hover:no-underline max-sm:w-full sm:whitespace-nowrap ${className}`}
    >
      <LinkedInIcon size={16} className="shrink-0" />
      Connect with me on LinkedIn
      <span className="sr-only"> (opens in a new tab)</span>
      <ExternalLinkIcon size={13} className="shrink-0 opacity-70" />
    </a>
  );
}
