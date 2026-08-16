"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { isPanelTarget } from "./panel-registry";
import { usePanel } from "./panel-shell";

/**
 * A link that opens its target in the side panel instead of navigating.
 *
 * It stays a real `<a href>`, so middle click, cmd-click, right click and
 * crawlers all still reach the standalone route. Only a plain left click is
 * intercepted, and only when the target is registered as panel content.
 * Anything unregistered navigates as normal.
 */
export function PanelLink({
  href,
  className,
  children,
  ...rest
}: {
  href: string;
  className?: string;
  children: ReactNode;
} & Omit<React.ComponentProps<typeof Link>, "href" | "className">) {
  const { open, active } = usePanel();
  const panelable = isPanelTarget(href);

  return (
    <Link
      {...rest}
      href={href}
      aria-current={active === href ? "true" : undefined}
      data-selected={active === href ? "" : undefined}
      className={className}
      onClick={(e) => {
        if (!panelable) return;
        // Leave modified clicks alone: they mean "open this somewhere else".
        if (
          e.defaultPrevented ||
          e.metaKey ||
          e.ctrlKey ||
          e.shiftKey ||
          e.altKey ||
          e.button !== 0
        ) {
          return;
        }
        e.preventDefault();
        open(href, e.currentTarget);
      }}
    >
      {children}
    </Link>
  );
}
