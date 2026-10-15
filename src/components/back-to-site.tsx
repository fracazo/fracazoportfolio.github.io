import { BackPill } from "./back-pill";

/**
 * The way back on the standalone routes: the same floating pill the panel's
 * full-screen sheet shows. It is route chrome rather than page content, so
 * pages hand it to PlainShell's `back` slot and the panel never renders it.
 */
export function BackToSite({
  href = "/",
  home = false,
}: {
  href?: string;
  /** House and "Home" instead of arrow and "Back" (the work history). */
  home?: boolean;
}) {
  return <BackPill href={href} home={home} placement="page" />;
}
