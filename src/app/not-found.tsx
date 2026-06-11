import type { Metadata } from "next";
import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Page Not Found - Alex Fracazo",
  description: "The page you are looking for doesn't exist or has been moved.",
};

export default function NotFound() {
  return (
    <AppShell>
      <section className="mx-auto w-full max-w-[640px]">
        <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-12 text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/404.svg"
            alt="404"
            loading="lazy"
            className="mb-8 h-[120px] w-[120px] brightness-0 invert-[0.6]"
          />
          <h1 className="mb-3 text-[32px] font-bold text-text">
            Page Not Found
          </h1>
          <p className="mb-8 max-w-[400px] text-muted">
            The page you are looking for doesn&rsquo;t exist or has been moved.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-card border-0 bg-brand px-6 py-3 text-sm font-semibold text-white no-underline transition-opacity duration-200 hover:opacity-90 hover:no-underline"
          >
            Back home
          </Link>
        </div>
      </section>

      <SiteFooter
        links={
          <>
            You can find me on{" "}
            <a href="http://www.linkedin.com/in/fracazo" target="_blank">
              LinkedIn
            </a>
            , or <a href="/contact">reach me by email</a>.
          </>
        }
      />
    </AppShell>
  );
}
