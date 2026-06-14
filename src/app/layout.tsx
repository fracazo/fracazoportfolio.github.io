import type { Metadata } from "next";
import { Geist, Young_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// Display face for page titles and section headings (single 400 weight).
const youngSerif = Young_Serif({
  variable: "--font-young-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alexfracazo.com"),
  title: "Alex Fracazo - Product Designer",
  description:
    "Software designer who ships. I design and build end-to-end, from research and strategy to a working product, for consumer and enterprise.",
  icons: {
    shortcut: "/images/favicon.svg",
    apple: "/images/webclip.svg",
  },
  openGraph: {
    title: "Alex Fracazo - Product Designer",
    description:
      "Software designer who ships. I design and build end-to-end, from research and strategy to a working product, for consumer and enterprise.",
    images: ["/images/opengraph.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Fracazo - Product Designer",
    description:
      "Software designer who ships. I design and build end-to-end, from research and strategy to a working product, for consumer and enterprise.",
    images: ["/images/opengraph.jpg"],
  },
};

/* Applies the saved (or system-preferred) theme before first paint so the
   page never flashes the wrong background. Mirrors the old inline script. */
const themeInit = `(function(){try{var s=localStorage.getItem('theme');var l=window.matchMedia('(prefers-color-scheme: light)').matches;var m=s||(l?'light':'dark');document.documentElement.classList.toggle('light',m==='light');}catch(e){}})();`;

/* Drives the landing-page intro reveal (see globals.css). Runs before first
   paint so the hero can start hidden without a flash. Plays on every full load
   of the home route (like Linear's landing page). `.intro` is removed once the
   reveal has played so client-side navigation back to the home page doesn't
   replay it — only an actual page load does. */
const introInit = `(function(){try{if(location.pathname==='/'){var h=document.documentElement;h.classList.add('intro');addEventListener('load',function(){setTimeout(function(){h.classList.remove('intro');},3000);});}}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${youngSerif.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <script dangerouslySetInnerHTML={{ __html: introInit }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
