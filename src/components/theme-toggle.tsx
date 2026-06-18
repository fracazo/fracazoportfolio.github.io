"use client";

import { SunIcon, MoonIcon } from "./icons";

const tooltipClass =
  "pointer-events-none invisible absolute left-[calc(100%+10px)] top-1/2 z-20 -translate-y-1/2 whitespace-nowrap rounded-lg border border-border bg-card px-2.5 py-1.5 text-[13px] font-medium text-text opacity-0 shadow-elevated transition-opacity duration-200 group-hover:visible group-hover:opacity-100";

export function ThemeToggle() {
  function toggle() {
    const isLight = document.documentElement.classList.toggle("light");
    try {
      localStorage.setItem("theme", isLight ? "light" : "dark");
    } catch {
      /* private browsing: theme just won't persist */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle theme"
      className="group relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-card text-muted shadow-elevated transition-[color,box-shadow,transform] duration-200 hover:text-brand hover:shadow-elevated-hover active:scale-[0.96]"
    >
      <span className={`${tooltipClass} light:hidden`} aria-hidden="true">
        Switch to light mode
      </span>
      <span className={`${tooltipClass} hidden light:block`} aria-hidden="true">
        Switch to dark mode
      </span>
      <SunIcon className="theme-toggle-icon theme-toggle-icon--sun" />
      <MoonIcon className="theme-toggle-icon theme-toggle-icon--moon" />
    </button>
  );
}
