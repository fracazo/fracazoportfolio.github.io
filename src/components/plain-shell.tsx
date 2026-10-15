import type { ReactNode } from "react";
import { PageTransition } from "./page-transition";
import { PhoneTabBar } from "./phone-tab-bar";
import { ThemeToggle } from "./theme-toggle";

/**
 * Sidebar-free, menu-free chrome: a single centred content column, with
 * the theme toggle floating in the corner on the home page and a floating
 * way back on every other page (on phones, a Home/Work tab bar instead). Used by the landing page, where the
 * hero is the first thing on the page and navigation lives in the work rows
 * and the footer, and by the reading pages (writing, about, case studies),
 * which carry their own back pill. Utility pages still use AppShell.
 */
export function PlainShell({
  children,
  wide = false,
  back,
  themeToggle = false,
}: {
  children: ReactNode;
  /** The page's floating way back (BackToSite), on wide screens. Every
      page but home has one; phones get the tab bar instead. */
  back?: ReactNode;
  /** Light/dark control. Home only: one place to set it, kept everywhere. */
  themeToggle?: boolean;
  /* Drops the 1200px cap so a child can bleed to the pane edge. Only for
     pages whose sections each carry their own max width (the landing page). */
  wide?: boolean;
}) {
  return (
    <>
      <PageTransition>
        <div className="min-h-dvh">
          {themeToggle && (
            <div className="fixed top-4 end-4 z-50">
              <ThemeToggle side="bottom" className="glass glass-interactive" />
            </div>
          )}
          {back}

          <main
            id="content"
            className={`mx-auto grid w-full gap-16 px-6 pb-18 [&>*]:min-w-0 ${
              wide ? "" : "max-w-[1200px]"
            } max-md:pb-28`}
          >
            {children}
          </main>
        </div>
      </PageTransition>
      {/* Outside the page transition: the tab bar stays put while the page
        beneath it changes. */}
      <PhoneTabBar />
    </>
  );
}
