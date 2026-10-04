export type Award = {
  title: string;
  detail: string;
  href?: string;
};

/**
 * Horizontal award lockup: the awards program's figure mark beside a title,
 * a rule, and a detail line. Drawn in site tokens rather than the program's
 * palette so it sits inside the warm theme.
 *
 * With `href` it links to the public listing so the claim can be checked.
 * Without it, it renders as a plain span, for use inside a row that is
 * already a link (anchors can't nest). `size="sm"` is the home row version.
 */
export function AwardBadge({
  title,
  detail,
  href,
  size = "md",
}: Award & { size?: "md" | "sm" }) {
  const className = `award-badge${size === "sm" ? " award-badge-sm" : ""}`;
  const content = (
    <>
      <svg
        className="award-badge-mark"
        viewBox="0 0 40 40"
        fill="currentColor"
        aria-hidden="true"
      >
        <rect x="17" y="1" width="6" height="6" />
        <path fillRule="evenodd" d="M11 11h18v18H11zM16 16v8h8v-8z" />
        <g stroke="currentColor" strokeWidth="5" strokeLinecap="square">
          <line x1="12" y1="12" x2="5" y2="5" />
          <line x1="28" y1="12" x2="35" y2="5" />
          <line x1="12" y1="28" x2="5" y2="35" />
          <line x1="28" y1="28" x2="35" y2="35" />
        </g>
      </svg>
      <span className="award-badge-text">
        <span className="award-badge-title">{title}</span>
        <span className="award-badge-detail">{detail}</span>
      </span>
    </>
  );

  return href ? (
    <a className={className} href={href} target="_blank" rel="noopener">
      {content}
    </a>
  ) : (
    <span className={className}>{content}</span>
  );
}
