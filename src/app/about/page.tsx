import type { Metadata } from "next";
import Link from "next/link";
import { PlainShell } from "@/components/plain-shell";
import { ArrowLeftIcon } from "@/components/icons";

const description =
  "Twenty years of design, from table layouts in Brazil to product work at GitLab.";

export const metadata: Metadata = {
  title: "About - Alex Fracazo Product Designer",
  description,
  openGraph: {
    title: "About - Alex Fracazo Product Designer",
    description,
    images: ["/images/opengraph.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About - Alex Fracazo Product Designer",
    description,
    images: ["/images/opengraph.jpg"],
  },
};

export default function About() {
  return (
    <PlainShell>
      {/* Back to site */}
      <Link
        href="/"
        className="fixed top-5 left-5 z-50 inline-flex items-center gap-1.5 rounded-full border border-border bg-card/80 px-3 py-1.5 text-[13px] font-medium text-muted no-underline backdrop-blur-md transition-colors hover:border-border hover:text-text hover:no-underline"
      >
        <ArrowLeftIcon size={14} />
        Back
      </Link>

      <section className="mx-auto w-full max-w-[640px] pb-20">
        <div className="pt-24 text-left max-md:pt-20">
          <h1 className="h1">About me</h1>

          <div className="writing-body">
            <p>
              I started in 2005 building websites out of table layouts, in an
              agency in Mato Grosso, Brazil. Then tableless. Then Haml and Sass
              at Artia, the first product management software built in Brazil.
              Small agile team, everyone doing a bit of everything, design was
              my specialty and the code was just part of the job.
            </p>

            <p>
              In 2013 I joined B2W, the biggest e-commerce company in South
              America, on the mobile team. The mobile team was the corner nobody
              visited. The company had no responsive website. The native app
              sold about one product a day, and that was considered normal.
            </p>

            <p>
              There was a physical store nearby with a café, and employees got a
              discount, so I went for coffee most days. Walking back one
              afternoon I saw someone using our app while standing in the shop.
              I asked if she ever bought through it. She said no, never. The app
              only took credit cards, and she paid by boleto, which let her
              split the cost into instalments.
            </p>

            <p>
              Two minutes of conversation explained a number our analytics never
              had.
            </p>

            <p>
              Getting boleto into a native app meant going outside my team. The
              web team was already rebuilding the site for small screens, so I
              took the finding to them and made the case for prioritising the
              payment work, then we brought it into the app through a webview. I
              rebuilt the app around the flat design language iOS 7 had just
              introduced. We were the first native app in Brazil built for iOS
              7, and Apple featured us in the App Store. 50 products on the
              first day.
            </p>

            <p>
              Then months of making it faster, which mattered more than the
              redesign did. Mobile revenue grew ten times over the following
              year.
            </p>

            <p>
              I left Brazil not long after and moved to Australia to study UX
              properly. I wanted to understand why that conversation worked when
              a year of data hadn&rsquo;t.
            </p>

            <p>
              Fifteen years followed. Vodafone, Qantas, Woolworths, NAB, Hireup,
              then GitLab, where I was the designer on an engineering-led team
              owning Wiki, GLQL, Pages, and the text editors.
            </p>

            <p>
              Two years ago I started coding again. Not by relearning syntax, by
              directing AI and reviewing what comes back, which is close enough
              to the work I did in 2009 that it feels familiar.
            </p>

            <p>
              The through line is the same as the shop. Go and look at the
              thing. The answer is usually standing right there.
            </p>
          </div>
        </div>
      </section>
    </PlainShell>
  );
}
