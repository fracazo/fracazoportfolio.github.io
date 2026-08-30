import type { ReactNode } from "react";
import { ThemeToggle } from "./theme-toggle";

/**
 * Sidebar-free, menu-free chrome: a single centred content column with the
 * theme toggle floating in the corner. Used by the landing page, where the
 * hero is the first thing on the page and navigation lives in the work rows
 * and the footer, and by the reading pages (writing, about, case studies),
 * which carry their own back pill. Utility pages still use AppShell.
 */
export function PlainShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh">
      <div className="fixed top-4 end-4 z-50">
        <ThemeToggle side="bottom" className="hover:bg-panel-2" />
      </div>

      <main
        id="content"
        className="mx-auto grid w-full max-w-[1200px] gap-16 px-6 pb-18 [&>*]:min-w-0"
      >
        {children}
      </main>
    </div>
  );
}
