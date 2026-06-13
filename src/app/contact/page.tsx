import type { Metadata } from "next";
import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { ContactIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact - Alex Fracazo Product Designer",
  description: "Contact Alex Fracazo, product designer based in Melbourne.",
  openGraph: {
    title: "Contact - Alex Fracazo Product Designer",
    description: "Contact Alex Fracazo, product designer based in Melbourne.",
    images: ["/images/opengraph.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact - Alex Fracazo Product Designer",
    description: "Contact Alex Fracazo, product designer based in Melbourne.",
    images: ["/images/opengraph.jpg"],
  },
};

const socialLinkClass =
  "flex max-w-[280px] items-center gap-3 rounded-[10px] border border-border bg-card px-4 py-3 text-[15px] font-medium text-text no-underline transition-all duration-200 hover:bg-panel-2 hover:no-underline group";

const socialIconClass =
  "shrink-0 text-muted transition-colors duration-200 group-hover:text-text";

export default function Contact() {
  return (
    <AppShell>
      <section className="mx-auto w-full max-w-[640px]">
        <div className="pt-[168px] text-left max-md:pt-14">
          <h1 className="h1 mb-3">Let&rsquo;s talk</h1>
          <p className="text">
            The fastest way to reach me is email. I reply within a day.
          </p>

          <ul className="m-0 mt-6 flex list-none flex-col gap-3 p-0">
            <li>
              <a href="mailto:fracazo@duck.com" className={socialLinkClass}>
                <ContactIcon size={20} className={socialIconClass} />
                <span className="flex-1">fracazo@duck.com</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/fracazo"
                target="_blank"
                rel="noopener noreferrer"
                className={socialLinkClass}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={socialIconClass}
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span className="flex-1">LinkedIn</span>
              </a>
            </li>
            <li>
              <Link href="/resume" className={socialLinkClass}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={socialIconClass}
                  aria-hidden="true"
                >
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                  <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                  <path d="M16 13H8" />
                  <path d="M16 17H8" />
                </svg>
                <span className="flex-1">Résumé</span>
              </Link>
            </li>
          </ul>

          <footer
            role="contentinfo"
            aria-labelledby="footer-title"
            className="mt-8"
          >
            <p id="footer-title" className="text mt-0 text-text">
              Based in Melbourne. Working globally.
            </p>
          </footer>
        </div>
      </section>
    </AppShell>
  );
}
