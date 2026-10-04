import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRightIcon, ContactIcon, ExternalLinkIcon } from "./icons";
import { PanelLink } from "./panel-link";

/* All three marks share one size and weight so they read as a set. Sized in
   em so they track the fluid body size instead of shrinking to specks beside
   it, and drawn at full strength in the link colour. The hover underline and
   mark motion live in globals.css under .text-link. */
const markClass =
  "text-link-mark ms-[0.2em] inline-block size-[0.85em] align-[-0.1em]";

/**
 * Inline prose link that says where it goes, using the same marks as the
 * link rows: → stays on this site (a panel or another page here), ↗ leaves
 * for another site in a new tab, and an envelope starts an email, since an
 * arrow there would promise a page that never opens.
 *
 * `panel` opens the target in the side panel; only use it on pages wrapped
 * in PanelShell, where the panel exists. The link and its mark never wrap
 * apart, so an arrow is never stranded at the start of a line.
 */
export function TextLink({
  href,
  panel = false,
  children,
}: {
  href: string;
  panel?: boolean;
  children: ReactNode;
}) {
  const label = <span className="text-link-label">{children}</span>;

  if (href.startsWith("mailto:")) {
    return (
      <a href={href} className="text-link">
        {label}
        <ContactIcon size={12} className={markClass} data-mark="email" />
      </a>
    );
  }

  if (/^https?:\/\//.test(href)) {
    return (
      <a href={href} target="_blank" rel="noopener" className="text-link">
        {label}
        <span className="sr-only"> (opens in a new tab)</span>
        <ExternalLinkIcon size={12} className={markClass} data-mark="external" />
      </a>
    );
  }

  const body = (
    <>
      {label}
      <ArrowRightIcon size={12} className={markClass} data-mark="internal" />
    </>
  );
  return panel ? (
    <PanelLink href={href} className="text-link">
      {body}
    </PanelLink>
  ) : (
    <Link href={href} className="text-link">
      {body}
    </Link>
  );
}
