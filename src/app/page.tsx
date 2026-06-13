import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { CaseCard } from "@/components/case-card";
import { RowList } from "@/components/row-list";
import { SiteFooter } from "@/components/site-footer";
import { ExternalLinkIcon } from "@/components/icons";

const selectedWork = [
  {
    href: "/case-studies/mr-summary-ai",
    image: {
      src: "/images/To_do_list_-_summary.png",
      alt: "AI-generated merge request summary shown in the GitLab to-do list",
    },
    eyebrow: "GitLab · 2023",
    outcome: "Shipped · 3 iterations",
    title: "Summarize Merge Requests with AI",
    tagline:
      "Finding where AI summaries earn trust in code review, including the conviction to remove what didn't work.",
  },
  {
    href: "/case-studies/glql",
    image: {
      src: "/images/glql-embedded-view-card.png",
      alt: "GLQL code block rendering into an embedded table view of issues in GitLab",
    },
    eyebrow: "GitLab · 2024–2025",
    outcome: "+33% adoption post-GA",
    title: "GLQL: Embedded Views for Work Tracking",
    tagline:
      "Turning an engineer-built query language into a usable product, through research that overturned the team's assumptions.",
  },
  {
    href: "/case-studies/bringing-visibility-to-workers-status",
    image: {
      src: "/images/62fbf14400d70051caf1b477_hireup-project-p-1080.png",
      alt: "Hireup brand with arrows that connects both the customer and the worker",
      srcSet:
        "/images/62fbf14400d70051caf1b477_hireup-project-p-1080-p-500.png 500w, /images/62fbf14400d70051caf1b477_hireup-project-p-1080-p-800.png 800w, /images/62fbf14400d70051caf1b477_hireup-project-p-1080.png 1080w",
      sizes:
        "(max-width: 479px) 93vw, (max-width: 767px) 95vw, (max-width: 1919px) 47vw, 570px",
    },
    eyebrow: "Hireup · 2022",
    outcome: "+12% bookings",
    title: "Worker Status Visibility",
    tagline:
      "Reducing uncertainty in a two-sided marketplace by making availability honest.",
  },
];

const moreCaseStudies = [
  {
    href: "/case-studies/wiki-contextual-comments",
    name: "Wiki Contextual Comments",
    meta: "GitLab",
  },
  {
    href: "/case-studies/eta-app",
    name: "Reducing Friction in Government Visa Applications",
    meta: "Dept. of Home Affairs",
  },
  {
    href: "/case-studies/qantas-app",
    name: "Increasing App Adoption (+70% downloads)",
    meta: "Qantas",
  },
  {
    href: "/case-studies/qantas-entertainment-app",
    name: "A Unified In-flight Entertainment Experience",
    meta: "Qantas",
  },
];

const writing = [
  { href: "/writing/titles-are-a-trap", name: "Titles are a trap", meta: "Essay" },
  {
    href: "/writing/effort-and-impact-are-not-the-same-thing",
    name: "Effort and impact are not the same thing",
    meta: "Essay",
  },
  {
    href: "/writing/building-birthguide-with-ai",
    name: "Building BirthGuide with AI",
    meta: "Essay",
  },
];

export default function Home() {
  return (
    <AppShell>
      {/* Hero */}
      <section aria-labelledby="hero-title" className="mx-auto w-full max-w-[640px]">
        <div className="grid grid-cols-1 items-start gap-6 text-left">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/avatar.png"
              alt="Alex Fracazo"
              className="mt-[168px] mb-8 h-[60px] w-[60px] rounded-full object-cover max-md:mt-14"
            />
            <p className="mb-4 flex items-start gap-2 font-mono text-[13px] text-balance text-muted">
              <span className="mt-[7px] h-2 w-2 flex-none rounded-full bg-[#34d399] shadow-[0_0_0_3px_rgba(52,211,153,0.15)]" />
              Available for design roles &amp; contract work · Melbourne or
              remote (UTC+10)
            </p>
            <h1 id="hero-title" className="h1">
              I turn messy, cross-team problems into shipped product.
            </h1>
            <p className="mt-3 text-lg leading-[1.6] text-text-body">
              <strong className="font-semibold text-text">Alex Fracazo</strong>,
              product designer and front-end engineer. I design and build
              end-to-end, from research to production code, for consumer and
              enterprise products.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              <a
                href="mailto:fracazo@duck.com"
                className="btn btn-primary inline-flex items-center gap-2 px-4 py-2.5 text-sm whitespace-nowrap no-underline hover:no-underline"
              >
                Email me
              </a>
              <Link
                href="/resume"
                className="btn btn-ghost inline-flex items-center gap-2 px-4 py-2.5 text-sm whitespace-nowrap no-underline hover:no-underline"
              >
                Résumé
              </Link>
              <a
                href="https://www.linkedin.com/in/fracazo"
                target="_blank"
                rel="noopener"
                className="btn btn-ghost inline-flex items-center gap-2 px-4 py-2.5 text-sm whitespace-nowrap no-underline hover:no-underline"
              >
                LinkedIn
                <ExternalLinkIcon size={14} className="opacity-70" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section
        id="Work"
        aria-labelledby="work-title"
        className="mx-auto grid w-full max-w-[640px] gap-4"
      >
        <div className="grid gap-1">
          <h2 id="work-title" className="h2">
            Selected work
          </h2>
          <p className="text mt-0">
            Case studies focused on product impact, decision-making, and
            outcomes.
          </p>
        </div>
        <ul
          role="list"
          className="m-0 grid list-none grid-cols-2 gap-4 p-0 max-[800px]:grid-cols-1"
        >
          {selectedWork.map((work) => (
            <li key={work.href}>
              <CaseCard {...work} />
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <p className="mb-1 text-[13px] font-medium tracking-[0.06em] text-muted uppercase">
            More case studies
          </p>
          <RowList items={moreCaseStudies} />
        </div>
      </section>

      {/* How I Work */}
      <section
        aria-labelledby="how-i-work-title"
        className="mx-auto w-full max-w-[640px]"
      >
        <h2 id="how-i-work-title" className="h2">
          How I work
        </h2>
        <p className="text mb-0">I do my best work on problems that are:</p>
        <ul className="mt-2 list-disc pl-5 leading-[1.6] text-text-body">
          <li className="my-1.5">unclear or under-defined</li>
          <li className="my-1.5">shared across multiple teams</li>
          <li className="my-1.5">
            constrained by legacy systems or organisational complexity
          </li>
        </ul>
        <p className="text mt-6">
          I prefer written, async collaboration for day-to-day work, and use
          synchronous conversations when alignment, ambiguity, or feedback
          quality really matters.
        </p>
      </section>

      {/* Background */}
      <section
        aria-labelledby="experience-title"
        className="mx-auto w-full max-w-[640px]"
      >
        <div className="grid gap-4">
          <h2 id="experience-title" className="h2">
            Background
          </h2>
          <div>
            <p className="text mt-0">
              Before <Link href="/case-studies/gitlab">GitLab</Link>, I was a
              Principal Product Designer at Hireup, Australia&rsquo;s largest
              disability support platform, where I led mobile design and
              contributed to a{" "}
              <Link href="/case-studies/bringing-visibility-to-workers-status">
                +12% increase in booking rates
              </Link>
              .
            </p>
            <p className="text mt-6">
              Earlier, I designed web and mobile products for Qantas, Vodafone,
              Woolworths, and NAB, and was the first designer at several
              startups, building design systems, defining product direction, and
              occasionally writing code alongside engineers.
            </p>
            <p className="text mt-6">
              Outside of that, I founded and solo-built{" "}
              <a href="https://birthguide.com.au" target="_blank" rel="noopener">
                BirthGuide
              </a>
              , a consumer product for Australian first-time parents, designed
              and shipped end-to-end on Next.js, Supabase, and Stripe.
            </p>
          </div>
        </div>
      </section>

      {/* Writing */}
      <section
        aria-labelledby="writing-title"
        className="mx-auto w-full max-w-[640px]"
      >
        <div className="grid gap-4">
          <h2 id="writing-title" className="h2">
            Writing
          </h2>
          <RowList items={writing} />
        </div>
      </section>

      {/* Working with Alex */}
      <section
        aria-labelledby="testimonials-title"
        className="mx-auto w-full max-w-[640px] pt-12 pb-12"
      >
        <h2 id="testimonials-title" className="h3 mb-6 font-medium text-muted">
          Working with Alex
        </h2>
        <div className="flex flex-col gap-6">
          <blockquote className="m-0 border-l-2 border-border pl-4">
            <p className="m-0 mb-2 text-[15px] leading-[1.7] text-text-body">
              &ldquo;Alex consistently demonstrated strong design leadership and
              strategic thinking. He translated complex technical constraints
              into clear, user-centred direction that directly shaped product
              decisions.&rdquo;
            </p>
            <footer className="m-0">
              <cite className="text-[13px] text-muted not-italic opacity-70">
                Design Manager · GitLab
              </cite>
            </footer>
          </blockquote>
          <blockquote className="m-0 border-l-2 border-border pl-4">
            <p className="m-0 mb-2 text-[15px] leading-[1.7] text-text-body">
              &ldquo;Alex brings a rare mix of big-picture perspective and
              grounded execution. He consistently raises the quality of thinking
              across the team and creates space for others to grow.&rdquo;
            </p>
            <footer className="m-0">
              <cite className="text-[13px] text-muted not-italic opacity-70">
                Product Designer · Hireup
              </cite>
            </footer>
          </blockquote>
          <blockquote className="m-0 border-l-2 border-border pl-4">
            <p className="m-0 mb-2 text-[15px] leading-[1.7] text-text-body">
              &ldquo;Alex is the best designer I&rsquo;ve worked with. On GitLab
              Query Language (GLQL) he thought through how every decision
              impacts customers and built for long-term scale, not just the
              immediate need.&rdquo;
            </p>
            <footer className="m-0">
              <cite className="text-[13px] text-muted not-italic opacity-70">
                Product Manager · GitLab
              </cite>
            </footer>
          </blockquote>
          <blockquote className="m-0 border-l-2 border-border pl-4">
            <p className="m-0 mb-2 text-[15px] leading-[1.7] text-text-body">
              &ldquo;Alex is at his best on hard, open-ended problems. He
              grounds his decisions in research and took on technical work like
              the visual builder and tokenized filtering for our query
              language, GLQL.&rdquo;
            </p>
            <footer className="m-0">
              <cite className="text-[13px] text-muted not-italic opacity-70">
                Engineering Manager · GitLab
              </cite>
            </footer>
          </blockquote>
        </div>
        {/* TODO: with permission, replace role-only attributions with full names; anonymous quotes carry far less weight */}
        <p className="text mt-2">
          <a
            href="https://www.linkedin.com/in/fracazo/details/recommendations/"
            target="_blank"
            rel="noopener"
            className="text-sm text-muted hover:text-brand"
          >
            Read full recommendations on LinkedIn &rarr;
          </a>
        </p>
      </section>

      <SiteFooter />
    </AppShell>
  );
}
