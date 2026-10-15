"use client";

import { ViewTransition, type ReactNode } from "react";

/**
 * Moving between pages crossfades in place: pages are places, not layers,
 * so nothing slides over anything (that motion belongs to the sheet). Every
 * page's shell wraps itself in this under one shared name, so the outgoing
 * and incoming pages animate as a pair; the motion lives in globals.css
 * under ::view-transition-*(.page-swap).
 *
 * Only router navigations animate: the first load and the panel opening
 * (which pushes history itself) are left alone.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <ViewTransition
      name="page"
      share="page-swap"
      default="none"
    >
      {children}
    </ViewTransition>
  );
}
