"use client";

import Link from "next/link";
import {
  useEffect,
  useState,
  type MouseEventHandler,
  type ReactNode,
  type RefObject,
} from "react";
import { CornerUpLeftIcon } from "./icons";

/** Scroll depth before the pill may tuck itself away. */
const COMPACT_AFTER_PX = 240;
/** Scroll that counts as a direction, not a jitter. */
const DIRECTION_PX = 6;

/**
 * True while the reader is scrolling down into the content, false when they
 * scroll back up or are near the top. Reading means the pill can step back;
 * scrolling up means looking for the way out, so it returns. Watches the
 * window, or `scroller` when the content scrolls inside an element.
 */
export function useCompactOnScroll(scroller?: RefObject<HTMLElement | null>) {
  const [compact, setCompact] = useState(false);
  useEffect(() => {
    const el = scroller?.current ?? null;
    const target: HTMLElement | Window = el ?? window;
    const depth = () => (el ? el.scrollTop : window.scrollY);
    let last = depth();
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const y = depth();
        const delta = y - last;
        if (y < COMPACT_AFTER_PX) setCompact(false);
        else if (delta > DIRECTION_PX) setCompact(true);
        else if (delta < -DIRECTION_PX) setCompact(false);
        // Small moves add up until they make a direction.
        if (Math.abs(delta) > DIRECTION_PX || y < COMPACT_AFTER_PX) last = y;
      });
    };
    target.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      target.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [scroller]);
  return compact;
}

/**
 * The way back: one floating glass pill. On a page it sits top left on
 * wide screens; phones get the tab bar instead (phone-tab-bar.tsx). In the
 * phone sheet it sits at the bottom, in thumb reach. While the reader scrolls
 * down it tucks into an icon-only circle, still there as the reminder of the
 * way out, and comes back when they scroll up (or hover it, on desktop).
 *
 * One glyph for every way back, an arrow turning a corner, so the pill, the
 * sheet's and the peek cursor read the same. `home` names the way "Home"
 * instead of "Back", for the page whose way out is always the home page
 * (the work history). Pass `href` for
 * a page (a real link) or only `onClick` for the sheet (a button). `end`
 * holds an optional control beside the pill.
 */
export function BackPill({
  href,
  onClick,
  home = false,
  placement,
  scroller,
  end,
}: {
  href?: string;
  onClick?: MouseEventHandler<HTMLElement>;
  home?: boolean;
  /** `page`: fixed to the viewport. `sheet`: pinned inside the phone sheet. */
  placement: "page" | "sheet";
  /** The element whose scroll tucks the pill; the window when left out. */
  scroller?: RefObject<HTMLElement | null>;
  end?: ReactNode;
}) {
  const compact = useCompactOnScroll(scroller);
  const label = home ? "Home" : "Back";
  const content = (
    <>
      <CornerUpLeftIcon />
      <span className="back-pill-label">
        <span>{label}</span>
      </span>
    </>
  );
  const pillProps = {
    className: "back-pill glass glass-interactive",
    "data-compact": compact || undefined,
  };

  return (
    <div className={`back-pill-dock back-pill-dock--${placement}`}>
      {href ? (
        <Link href={href} onClick={onClick} {...pillProps}>
          {content}
        </Link>
      ) : (
        <button type="button" onClick={onClick} {...pillProps}>
          {content}
        </button>
      )}
      {end}
    </div>
  );
}
