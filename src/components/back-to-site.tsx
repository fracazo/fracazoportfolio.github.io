import Link from "next/link";
import { ArrowLeftIcon } from "./icons";

/**
 * The fixed back pill used by the standalone routes.
 *
 * It is `position: fixed`, which is exactly why it is a route concern rather
 * than page content: inside a panel it would pin to the window instead of the
 * pane and float over the index. Content components take it as a slot the
 * route fills and the panel leaves empty.
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
      className="fixed top-5 left-5 z-50 inline-flex items-center gap-1.5 rounded-full border border-border bg-card/80 px-3 py-1.5 text-[13px] font-medium text-muted no-underline backdrop-blur-md transition-colors hover:border-border hover:text-text hover:no-underline"
    >
      <ArrowLeftIcon size={14} />
      {label}
    </Link>
  );
}
