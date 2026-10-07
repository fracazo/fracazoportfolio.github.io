"use client";

import { ViewTransition, type ReactNode } from "react";

/**
 * Moving between pages slides like the side panel opens: the new page comes
 * in from the right on the panel's own curve and timing, the old one eases
 * left. A link tagged `nav-back` (the Back pill) plays it in reverse. Every
 * page's shell wraps itself in this under one shared name, so the outgoing
 * and incoming pages animate as a pair; the motion lives in globals.css
 * under ::view-transition-*(.page-forward / .page-back).
 *
 * Only router navigations animate: the first load and the panel opening
 * (which pushes history itself) are left alone.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <ViewTransition
      name="page"
      share={{ "nav-back": "page-back", default: "page-forward" }}
      default="none"
    >
      {children}
    </ViewTransition>
  );
}
