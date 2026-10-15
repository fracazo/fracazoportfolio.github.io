import { BackBar } from "./back-bar";

/**
 * The back header used by the standalone routes: the same BackBar the
 * panel's full-screen sheet shows. It is route chrome rather than page
 * content, so pages hand it to PlainShell's `back` slot and the panel never
 * renders it.
 */
export function BackToSite({
  href = "/",
}: {
  href?: string;
}) {
  return (
    <BackBar
      href={href}
      /* Overlaid on the page's own top padding rather than stacked above
         it (the negative margin hands its height back), so page layouts
         keep their spacing; it still sticks as the page scrolls. */
      className="z-40 -mb-[68px] px-6"
    />
  );
}
