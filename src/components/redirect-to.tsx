/**
 * A permanent move on a static host. GitHub Pages can't send a 301, so the
 * old URL serves this: a meta refresh that works without JavaScript, and a
 * visible link for anything that ignores both.
 */
export function RedirectTo({ href }: { href: string }) {
  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${href}`} />
      <link rel="canonical" href={href} />
      <p className="p-6">
        This page has moved to <a href={href}>{href}</a>.
      </p>
    </>
  );
}
