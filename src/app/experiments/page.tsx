import type { Metadata } from "next";
import { AppShell } from "@/components/app-shell";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Experiments - Alex Fracazo Product Designer",
  description: "Prototypes and experiments in interaction design and prototyping.",
  openGraph: {
    title: "Experiments - Alex Fracazo Product Designer",
    description:
      "Prototypes and experiments in interaction design and prototyping.",
    images: ["/images/opengraph.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Experiments - Alex Fracazo Product Designer",
    description:
      "Prototypes and experiments in interaction design and prototyping.",
    images: ["/images/opengraph.jpg"],
  },
};

const videoWrapClass =
  "relative w-full overflow-hidden rounded-card bg-panel pt-[56.25%]";

export default function Experiments() {
  return (
    <AppShell>
      <section className="mx-auto w-full max-w-[640px]">
        <h1 className="h1">Prototypes and Experiments</h1>
        <p className="text">Prototypes created on xcode with swiftui</p>

        <div className="mt-12 flex flex-col gap-12">
          {/* Interaction Prototype */}
          <div className="flex flex-col gap-4">
            <div className={videoWrapClass}>
              <video
                autoPlay
                loop
                muted
                playsInline
                controls
                className="absolute top-0 left-0 h-full w-full bg-black object-contain"
              >
                <source src="/images/experiments.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div>
              <h3 className="mb-1 text-lg font-semibold text-text">
                Interaction Prototype
              </h3>
              <p className="text-sm leading-normal text-muted">
                Exploring micro-interactions and transitions in mobile
                interfaces.
              </p>
            </div>
          </div>

          {/* Americanas iOS7 App */}
          <div className="flex flex-col gap-4">
            <div className={videoWrapClass}>
              <iframe
                src="https://www.youtube-nocookie.com/embed/b_6N9OjKZw8?start=47&rel=0"
                title="Americanas iOS7 app"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                className="absolute top-0 left-0 h-full w-full border-0"
              />
            </div>
            <div>
              <h3 className="mb-1 text-lg font-semibold text-text">
                Americanas iOS7 App
              </h3>
              <p className="text-sm leading-normal text-muted">
                E-commerce app design showcase
              </p>
            </div>
          </div>
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
