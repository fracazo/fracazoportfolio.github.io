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

/* The BirthGuide app mark: the route icon from public/images/birthguide-hero.svg
   (same path, not redrawn), white on the live site's rose tile. It is a full
   app icon, so it fills the case study's icon tile. */
export function BirthGuideAppIcon() {
  return (
    <svg viewBox="0 0 64 64" className="cs-app-icon" aria-hidden="true">
      <rect width="64" height="64" rx="16" fill="#c2727a" />
      <g
        transform="translate(16 16) scale(1.3333)"
        fill="none"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="6" cy="19" r="3" />
        <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
        <circle cx="18" cy="5" r="3" />
      </g>
    </svg>
  );
}

/* Vodafone's speechmark, cut from public/images/brands/vodafone.png (not
   redrawn) and used as a mask: white on Vodafone red, like their app icon.
   A full app icon, so it fills the case study's icon tile. */
export function VodafoneAppIcon() {
  return (
    <span className="cs-app-icon brand-mask-tile" style={{ background: "#e60000" }} aria-hidden="true">
      <span
        className="brand-mask"
        style={{ backgroundColor: "#fff", maskImage: "url(/images/brands/vodafone-mark.png)", WebkitMaskImage: "url(/images/brands/vodafone-mark.png)" }}
      />
    </span>
  );
}

/* The Commonwealth crest from public/images/brands/home-affairs.svg (not
   redrawn), used as a mask in the text colour so it reads in both themes. */
export function HomeAffairsCrest() {
  return (
    <span
      className="brand-mask brand-mask--crest"
      style={{ backgroundColor: "currentColor", maskImage: "url(/images/brands/home-affairs.svg)", WebkitMaskImage: "url(/images/brands/home-affairs.svg)" }}
      aria-hidden="true"
    />
  );
}
