"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCompactOnScroll } from "./back-pill";
import { HomeIcon, WorkIcon } from "./icons";

const tabs = [
  { href: "/", label: "Home", Icon: HomeIcon },
  { href: "/work", label: "Work", Icon: WorkIcon },
] as const;

/** Case studies live under the work, so their pages light the Work tab. */
function activeTab(pathname: string) {
  return /^\/(work|tools)(\/|$)/.test(pathname) ? "/work" : "/";
}

/**
 * Phones' way around the site: a floating glass tab bar at the bottom, in
 * thumb reach, on every page. It stands in for the Back/Home pill below
 * 768px (CSS hides one and shows the other). Home on the left, as every tab
 * bar starts, and the current section lit. While the reader scrolls down
 * the labels tuck away to icons, and come back when they scroll up.
 *
 * Its own view-transition name keeps it out of the page crossfade, so it
 * stays put while the page beneath it changes.
 */
export function PhoneTabBar() {
  const active = activeTab(usePathname());
  const compact = useCompactOnScroll();
  return (
    <nav
      aria-label="Site"
      className="tab-bar glass"
      data-compact={compact || undefined}
    >
      {tabs.map(({ href, label, Icon }) => (
        <Link
          key={href}
          href={href}
          aria-current={active === href ? "page" : undefined}
          className="tab-bar-item"
        >
          <Icon size={18} />
          <span className="tab-bar-label">
            <span>{label}</span>
          </span>
        </Link>
      ))}
    </nav>
  );
}
