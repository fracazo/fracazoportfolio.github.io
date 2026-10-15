"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRightIcon } from "./icons";

/**
 * The close of a full case study page: the way on to the rest of the work.
 * It lands on this study's own entry in the work history rather than the
 * top of the list, so the reader picks up where the study sits in the
 * career. (The sheet does not show it: there the history is already
 * underneath.)
 */
export function MoreWork({ anchors }: { anchors: Record<string, string> }) {
  const pathname = usePathname().replace(/\/+$/, "");
  const entry = anchors[pathname];
  return (
    <nav aria-label="More work" className="border-t border-border pt-10">
      <Link
        href={entry ? `/work#${entry}` : "/work"}
        className="btn btn-ghost inline-flex items-center gap-2 px-4 py-2.5 no-underline hover:no-underline"
      >
        More work
        <ArrowRightIcon size={16} />
      </Link>
    </nav>
  );
}
