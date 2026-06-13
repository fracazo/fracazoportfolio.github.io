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
    "Product designer and front-end engineer. I design and build end-to-end, from research to production code, for consumer and enterprise products.",
  icons: {
    shortcut: "/images/favicon.svg",
    apple: "/images/webclip.svg",
  },
  openGraph: {
    title: "Alex Fracazo - Product Designer",
    description:
      "Product designer and front-end engineer. I design and build end-to-end, from research to production code, for consumer and enterprise products.",
    images: ["/images/opengraph.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Fracazo - Product Designer",
    description:
      "Product designer and front-end engineer. I design and build end-to-end, from research to production code, for consumer and enterprise products.",
    images: ["/images/opengraph.jpg"],
  },
};

/* Applies the saved (or system-preferred) theme before first paint so the
   page never flashes the wrong background. Mirrors the old inline script. */
const themeInit = `(function(){try{var s=localStorage.getItem('theme');var l=window.matchMedia('(prefers-color-scheme: light)').matches;var m=s||(l?'light':'dark');document.documentElement.classList.toggle('light',m==='light');}catch(e){}})();`;

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
      </head>
      <body>{children}</body>
    </html>
  );
}
