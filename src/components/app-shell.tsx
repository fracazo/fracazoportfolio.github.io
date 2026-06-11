"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import { ThemeToggle } from "./theme-toggle";
import {
  HomeIcon,
  WorkIcon,
  WritingIcon,
  ContactIcon,
  CloseIcon,
  MenuIcon,
} from "./icons";

const navLinks = [
  { href: "/", label: "Home", icon: HomeIcon },
  { href: "/work", label: "Work", icon: WorkIcon },
  { href: "/writing", label: "Writing", icon: WritingIcon },
  { href: "/contact", label: "Contact", icon: ContactIcon },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

/**
 * App chrome shared by every page: fixed hamburger (mobile), sidebar with
 * brand + nav + theme toggle, backdrop, and the main content grid.
 * Case study pages pass `sidebarNav` to swap the primary nav for a
 * back link + table of contents.
 */
export function AppShell({
  children,
  sidebarNav,
}: {
  children: ReactNode;
  sidebarNav?: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {!open && (
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen(true)}
          className="fixed top-4 left-4 z-90 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[rgba(11,12,15,0.75)] text-text backdrop-blur-[8px] transition-colors duration-150 hover:bg-white/12 focus-visible:rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring light:bg-white/75 light:hover:bg-black/8 desk:hidden"
        >
          <MenuIcon />
        </button>
      )}

      <div className="grid min-h-dvh grid-cols-1 desk:grid-cols-[280px_1fr]">
        <aside
          aria-label="Sidebar"
          className={`fixed top-0 left-0 z-100 flex h-dvh w-[280px] flex-col gap-5 border-r border-border bg-panel p-5 transition-transform duration-300 desk:sticky desk:z-auto desk:w-auto desk:translate-x-0 desk:self-start ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <Link
              href="/"
              aria-label="Home"
              className="flex items-center gap-2.5 px-2.5 py-2 font-bold text-text no-underline hover:text-brand hover:no-underline"
            >
              <span>Alex Fracazo</span>
            </Link>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="cursor-pointer rounded-lg border-none bg-transparent p-2 text-muted transition-all duration-150 hover:bg-panel-2 hover:text-text desk:hidden"
            >
              <CloseIcon />
            </button>
          </div>

          {/* Close the overlay when any sidebar link is followed */}
          <div
            className="contents"
            onClick={(e) => {
              if ((e.target as HTMLElement).closest("a")) setOpen(false);
            }}
          >
            {sidebarNav ?? (
              <nav aria-label="Primary" className="grid gap-1.5">
                {navLinks.map(({ href, label, icon: Icon }) => {
                  const active = isActive(pathname, href);
                  return (
                    <Link
                      key={href}
                      href={href}
                      aria-current={active ? "page" : undefined}
                      className={`flex items-center gap-2 rounded-lg border px-2.5 py-2 no-underline hover:border-border hover:bg-panel-2 hover:text-text hover:no-underline ${
                        active
                          ? "border-border bg-panel-2 text-text"
                          : "border-transparent text-muted"
                      }`}
                    >
                      <Icon />
                      {label}
                    </Link>
                  );
                })}
              </nav>
            )}
          </div>

          <div className="mt-auto grid gap-2.5">
            <ThemeToggle />
          </div>
        </aside>

        {open && (
          <div
            aria-hidden="true"
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-99 bg-black/50 desk:hidden"
          />
        )}

        <main
          id="content"
          className="mx-auto grid w-full max-w-[1200px] gap-16 px-6 pt-18 pb-18 desk:pt-8 [&>*]:min-w-0"
        >
          {children}
        </main>
      </div>
    </>
  );
}
