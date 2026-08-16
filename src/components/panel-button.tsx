"use client";

import type { ReactNode } from "react";
import { usePanel } from "./panel-shell";

/**
 * Opens panel content that has no route behind it.
 *
 * `PanelLink` stays an anchor so middle click and crawlers still reach the
 * real page. A stub has no page, so an anchor would be a lie: cmd-click would
 * land on a 404. This is a button instead, which is what it actually is.
 */
export function PanelButton({
  panelKey,
  className,
  children,
}: {
  panelKey: string;
  className?: string;
  children: ReactNode;
}) {
  const { open, active } = usePanel();
  return (
    <button
      type="button"
      onClick={(e) => open(panelKey, e.currentTarget)}
      aria-pressed={active === panelKey}
      data-selected={active === panelKey ? "" : undefined}
      className={className}
    >
      {children}
    </button>
  );
}
