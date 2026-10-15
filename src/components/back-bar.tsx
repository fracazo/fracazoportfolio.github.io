import Link from "next/link";
import type { MouseEventHandler } from "react";
import { ArrowLeftIcon } from "./icons";

/* The labelled Back pill: 44px tall, per the touch guidance. Glass, so the
   page scrolling under it shows through. */
const pill =
  "glass glass-interactive inline-flex h-11 min-w-11 cursor-pointer items-center gap-2 rounded-full px-4 text-meta text-muted no-underline hover:text-text hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

/**
 * The way back, as one sticky header: a row that stays at the top while the
 * content scrolls under it, fading the page out at the edge, and holding a
 * labelled glass Back pill. The panel's full-screen sheet and every standalone page use this
 * same bar, so stepping back looks and behaves the same everywhere.
 *
 * Pass `href` for a page (a real link, with `onClick` free to intercept it)
 * or only `onClick` for the sheet (a button). `className` sets the row's
 * horizontal padding and placement for its container.
 */
export function BackBar({
  href,
  onClick,
  className = "",
}: {
  href?: string;
  onClick?: MouseEventHandler<HTMLElement>;
  className?: string;
}) {
  return (
    <div
      className={`sticky top-0 z-10 flex justify-start bg-linear-to-b from-bg from-30% to-transparent py-3 ${className}`}
    >
      {href ? (
        <Link
          href={href}
          onClick={onClick}
          transitionTypes={["nav-back"]}
          className={pill}
        >
          <ArrowLeftIcon size={14} />
          Back
        </Link>
      ) : (
        <button type="button" onClick={onClick} className={pill}>
          <ArrowLeftIcon size={14} />
          Back
        </button>
      )}
    </div>
  );
}

/** Height of the bar (44px pill + 12px above and below), for callers that
    overlay it on content rather than stacking it above. */
export const BACK_BAR_HEIGHT = 68;
