"use client";

import { BackBar } from "./back-bar";
import { readReturnContext, sameRoute } from "./panel-return";

/**
 * The back header used by the standalone routes: the same BackBar the
 * panel's full-screen sheet shows. It is route chrome rather than page
 * content, so pages hand it to PlainShell's `back` slot and the panel never
 * renders it.
 *
 * When this page was reached through the panel's expand control, the pill
 * steps back through history instead of loading the index from the top, so
 * the split reopens exactly where the reader left it.
 */
export function BackToSite({
  href = "/",
}: {
  href?: string;
}) {
  return (
    <BackBar
      href={href}
      onClick={(e) => {
        if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey) return;
        const ctx = readReturnContext();
        if (ctx && sameRoute(ctx.panel, window.location.pathname)) {
          e.preventDefault();
          window.history.back();
        }
      }}
      /* Overlaid on the page's own top padding rather than stacked above
         it (the negative margin hands its height back), so page layouts
         keep their spacing; it still sticks as the page scrolls. */
      className="z-40 -mb-[68px] px-6"
    />
  );
}
