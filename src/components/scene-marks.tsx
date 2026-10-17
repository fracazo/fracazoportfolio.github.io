/**
 * Company marks drawn into the product scenes, where the real app would show
 * them: in the header chrome. They tell a reader the scene recreates shipped
 * client work, not a side project. Both are decorative (the scenes are
 * aria-hidden); the company is named in text beside every scene.
 */

/* The Hireup "U" from public/images/brands/hireup.svg, without the wordmark. */
export function HireupMark({ size = 14 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 241 259"
      width={size}
      height={size}
      className="shrink-0 text-hireup"
      fill="currentColor"
    >
      <path d="M237.82 3.68a7.155 7.155 0 00-4.49-3.04c-2.08-.43-4.72.62-9.94 2.7l-79.21 31.67c-5.18 2.06-7.76 3.1-9.66 4.84-1.68 1.51-2.97 3.44-3.77 5.55-.9 2.42-.9 5.19-.9 10.76v197.15c0 2.61 2.13 4.74 4.72 4.74 57.67 0 104.41-46.72 104.41-104.36V13.92c.02-5.64.02-8.44-1.16-10.24zM105.22 51.87c-2.09-.43-4.72.62-9.94 2.7L16.06 86.24c-5.17 2.06-7.76 3.11-9.65 4.84-1.69 1.51-2.97 3.44-3.78 5.55-.9 2.42-.9 5.19-.9 10.76v46.3c0 57.66 46.72 104.41 104.41 104.36 2.61 0 4.73-2.13 4.73-4.74V65.15c0-5.62 0-8.44-1.19-10.24a7.016 7.016 0 00-4.46-3.04z" />
    </svg>
  );
}

/* The GitLab tanuki from public/images/brands/gitlab.svg, in its own colours:
   they hold up on both the paper and espresso surfaces. */
export function TanukiMark({ size = 14 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 76 72"
      width={size}
      height={(size * 72) / 76}
      className="shrink-0"
    >
      <path
        d="M73.52 28.5l-.1-.27L63.24 1.69a2.66 2.66 0 0 0-4.48-.81 2.7 2.7 0 0 0-.6 1.08l-6.87 21.03H23.48L16.61 1.96a2.7 2.7 0 0 0-.6-1.08 2.66 2.66 0 0 0-4.49.81L1.35 28.24l-.1.26a18.9 18.9 0 0 0 6.27 21.84l.04.03.09.06 15.47 11.6 7.68 5.8 4.67 3.53a3.14 3.14 0 0 0 3.8 0l4.67-3.53 7.68-5.8 15.59-11.67.04-.03A18.9 18.9 0 0 0 73.52 28.5z"
        fill="#E24329"
      />
      <path
        d="M73.52 28.5l-.1-.27a34.34 34.34 0 0 0-13.68 6.15L37.4 51.28l14.23 10.75 15.59-11.67.04-.03A18.9 18.9 0 0 0 73.52 28.5z"
        fill="#FC6D26"
      />
      <path
        d="M23.12 62.03l7.68 5.8 4.67 3.53a3.14 3.14 0 0 0 3.8 0l4.67-3.53 7.68-5.8-14.23-10.75-14.27 10.75z"
        fill="#FCA326"
      />
      <path
        d="M15.03 34.38a34.34 34.34 0 0 0-13.68-6.15l-.1.27a18.9 18.9 0 0 0 6.27 21.83l.04.03.09.07 15.47 11.6 14.24-10.75-22.33-16.9z"
        fill="#FC6D26"
      />
    </svg>
  );
}


/* The Qantas Entertainment app icon Alex designed: a play symbol in the
   Qantas brand's pebble shape, on the app's dark background. Drawn edge to
   edge so it fills the case study's icon tile, which supplies the rounded
   corners. Redrawn from the 64px store asset so it stays sharp at 2x. */
export function QantasEntertainmentAppIcon() {
  return (
    <svg viewBox="0 0 512 512" className="cs-app-icon" aria-hidden="true">
      <defs>
        <linearGradient id="qe-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2e2e2e" />
          <stop offset="1" stopColor="#1a1a1a" />
        </linearGradient>
        <linearGradient id="qe-pebble" x1="0.3" y1="0" x2="0.6" y2="1">
          <stop offset="0" stopColor="#ff0a0a" />
          <stop offset="1" stopColor="#c40000" />
        </linearGradient>
        <linearGradient id="qe-play" x1="0.7" y1="0.3" x2="0.2" y2="0.9">
          <stop offset="0.45" stopColor="#ffffff" />
          <stop offset="1" stopColor="#c9c9c9" />
        </linearGradient>
      </defs>
      <rect width="512" height="512" fill="url(#qe-bg)" />
      <path
        d="M188 101c86-6 186 58 220 132 32 72-20 172-142 172C156 405 92 343 92 252c0-90 38-146 96-151Z"
        fill="url(#qe-pebble)"
      />
      <path
        d="M206 192c0-11 12-18 22-12l96 60c9 6 9 19 0 25l-96 60c-10 6-22-1-22-12V192Z"
        fill="url(#qe-play)"
      />
    </svg>
  );
}
