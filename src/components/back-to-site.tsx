"use client";

import Link from "next/link";
import { ArrowLeftIcon } from "./icons";
import { readReturnContext, sameRoute } from "./panel-return";

/**
 * The fixed back pill used by the standalone routes.
 *
 * It is `position: fixed`, which is exactly why it is a route concern rather
 * than page content: inside a panel it would pin to the window instead of the
 * pane and float over the index. Content components take it as a slot the
 * route fills and the panel leaves empty.
 *
 * When this page was reached through the panel's expand control, the pill
 * steps back through history instead of loading the index from the top, so
 * the split reopens exactly where the reader left it.
 */
export function BackToSite({
  href = "/",
  label = "Back",
}: {
  href?: string;
  label?: string;
}) {
  return (
    <Link
      href={href}
      onClick={(e) => {
        if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey) return;
        const ctx = readReturnContext();
        // The complete study lives under its summary's route, so it returns
        // to the same panel the summary came from.
        const here = window.location.pathname.replace(/\/full\/?$/, "");
        if (ctx && sameRoute(ctx.panel, here)) {
          e.preventDefault();
          window.history.back();
        }
      }}
      className="fixed top-5 left-5 z-50 inline-flex items-center gap-1.5 rounded-full border border-border bg-card/80 px-3 py-1.5 text-meta font-medium text-muted no-underline backdrop-blur-md transition-colors hover:border-border hover:text-text hover:no-underline"
    >
      <ArrowLeftIcon size={14} />
      {label}
    </Link>
  );
}
