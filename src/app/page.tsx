import { AvatarGreeting } from "@/components/avatar-greeting";
import { PlainShell } from "@/components/plain-shell";
import { BrandStrip } from "@/components/brand-strip";
import { PanelLink } from "@/components/panel-link";
import { PanelShell } from "@/components/panel-shell";
import { WorkRow } from "@/components/work-row";
import { WorkRowCompact } from "@/components/work-row-compact";
import { RowList } from "@/components/row-list";
import { LinkRowList } from "@/components/link-row-list";
import { SiteFooter } from "@/components/site-footer";
import { ArrowRightIcon, ExternalLinkIcon } from "@/components/icons";

/* Work is grouped by the kind of problem, not by date. Each group leads with
   the full case studies and follows with compact rows, so the weight change
   lands once per group rather than alternating down the page. */
const workGroups = [
  {
    id: "knowledge-products",
    title: "Knowledge products",
    context:
      "Ten years building tools people use to find, write, and share what they know.",
    full: [
      {
        href: "/case-studies/glql",
        image: {
          src: "/images/glql-embedded-view-card.png",
          alt: "GLQL code block rendering into an embedded table view of issues in GitLab",
        },
        eyebrow: "GitLab · 2024–2025",
        category: "Work Tracking",
        title: "GLQL: Embedded Views for Work Tracking",
        tagline:
          "Turning an engineer-built query language into a usable product, through research that overturned the team’s assumptions.",
        outcome: "+33% adoption post-GA · 0 critical bugs at GA",
      },
      {
        href: "/case-studies/wiki-contextual-comments",
        image: {
          src: "/images/wiki-comments-card.png",
          alt: "A GitLab wiki page with highlighted passages linked to threaded discussions in a right-side comments panel",
        },
        eyebrow: "GitLab · 2025",
        category: "Documentation",
        title: "GitLab Wiki: Contextual Comments",
        tagline:
          "Tying a discussion to the exact line it refers to, closing a competitive gap against Confluence and Notion.",
        outcome: "5 competitors analysed · In engineering development",
      },
      {
        href: "/case-studies/birthguide",
        image: {
          src: "/images/birthguide-hero.svg",
          alt: "BirthGuide interactive birth plan on mobile",
        },
        eyebrow: "Solo build · 2026",
        category: "Consumer Health",
        title: "BirthGuide",
        tagline:
          "A birth plan you open on your phone, not one you forget in your bag.",
        outcome: "Shipped in 10 days · Live and taking payments",
      },
    ],
    compact: [
      {
        eyebrow: "Co-founded · 2012–2014",
        title: "Coursify.me",
        metric: "50,000 students",
        todo: "One line on what it was and what you did. Everything else here is yours.",
      },
      {
        href: "/case-studies/mr-summary-ai",
        eyebrow: "GitLab · 2023",
        title: "Summarize Merge Requests with AI",
        tagline:
          "Finding where AI summaries earn trust in code review, including the conviction to remove what didn’t work.",
        metric: "3 shipped iterations",
      },
    ],
  },
  {
    id: "consumer-at-scale",
    title: "Consumer at scale",
    context: "Products used by millions of Australians and Brazilians.",
    full: [],
    compact: [
      {
        href: "/case-studies/qantas-entertainment-app",
        eyebrow: "Qantas · 2018",
        title: "A Unified In-flight Entertainment Experience",
        tagline:
          "Reimagining in-flight entertainment as a cohesive product ecosystem.",
        todo: "One metric for the chip. The case study ships no numbers.",
      },
      {
        href: "/case-studies/qantas-app",
        eyebrow: "Qantas · 2016",
        title: "Increasing App Adoption Through Entertainment",
        tagline:
          "Using entertainment features to pull travellers into the main Qantas app.",
        metric: "+70% downloads",
      },
      {
        href: "/case-studies/eta-app",
        eyebrow: "Australian Government · 2020",
        title: "Reducing Friction in Government Visa Applications",
        tagline:
          "Automating data entry to improve completion and reduce user effort in a high-stakes service.",
        metric: "Sydney Design Award",
      },
      {
        eyebrow: "B2W Digital · 2013–2015",
        title: "B2W Digital",
        tagline:
          "A responsive white-label e-commerce platform supporting multiple branded stores.",
        metric: "3 native apps unified",
        todo: "A real project title, and confirmation the résumé line above is the one you want here.",
      },
      {
        eyebrow: "Vodafone · 2015–2016",
        title: "Vodafone",
        tagline: "UX for the self-service team across web and native apps.",
        todo: "A real project title, a metric, and confirmation the résumé line above is the one you want here.",
      },
    ],
  },
  {
    id: "marketplaces",
    title: "Marketplaces",
    context:
      "Two-sided platforms where supply and demand both need designing.",
    full: [
      {
        href: "/case-studies/bringing-visibility-to-workers-status",
        image: {
          src: "/images/62fbf14400d70051caf1b477_hireup-project-p-1080.png",
          alt: "Hireup brand with arrows that connects both the customer and the worker",
          srcSet:
            "/images/62fbf14400d70051caf1b477_hireup-project-p-1080-p-500.png 500w, /images/62fbf14400d70051caf1b477_hireup-project-p-1080-p-800.png 800w, /images/62fbf14400d70051caf1b477_hireup-project-p-1080.png 1080w",
          sizes: "(min-width: 980px) 280px, 92vw",
        },
        eyebrow: "Hireup · 2022",
        category: "Marketplace",
        title: "Worker Status Visibility",
        tagline:
          "Reducing uncertainty in a two-sided marketplace by making availability honest.",
        outcome: "+12% bookings · Connection rate 3% → 5%",
      },
    ],
    compact: [
      {
        title: "Bem Direto",
        todo: "Years, what it was, your role, and a one-line outcome. The site carries one clause about it on the résumé and nothing else.",
      },
    ],
  },
];

const productDesign = [
  {
    title: "UX Forum: Rich Links",
    meta: "GitLab · 2026",
    links: [
      { href: "https://www.youtube.com/watch?v=wuM58BBGSg0", label: "Video" },
    ],
  },
  {
    title: "Wiki Sidebar Redesign",
    meta: "GitLab · 2026",
    links: [
      {
        href: "https://gitlab.com/gitlab-org/gitlab/-/work_items/590402",
        label: "GitLab issue",
      },
    ],
  },
  {
    title: "Build a website with GitLab Pages",
    meta: "GitLab · March 2025",
    links: [
      {
        href: "https://about.gitlab.com/blog/build-a-new-website-in-a-few-easy-steps-with-gitlab-pages/",
        label: "Blog post",
      },
    ],
  },
];

const designEngineering = [
  {
    title: "Birth Plans",
    meta: "Solo build · 2026",
    links: [{ href: "https://birthplans.app", label: "Site" }],
  },
  {
    title: "Don Draper",
    meta: "Claude Code skill · 2026",
    links: [
      { href: "https://github.com/fracazo/don-draper-skill", label: "GitHub" },
    ],
  },
  {
    title: "Contrast Lab",
    meta: "Raycast extension · 2026",
    links: [
      { href: "https://github.com/fracazo/contrast-lab", label: "GitHub" },
    ],
  },
  {
    title: "Triage Agent",
    meta: "TypeScript and MCP · 2026",
    links: [
      { href: "https://github.com/fracazo/triage-agent", label: "GitHub" },
    ],
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
    <PanelShell>
    <PlainShell>
      {/* Hero */}
      <section
        aria-labelledby="hero-title"
        className="mx-auto w-full max-w-[640px]"
      >
        <div className="grid grid-cols-1 items-start gap-6 text-left">
          <div className="reveal-group">
            <AvatarGreeting />
            <p className="mb-4 font-mono text-[13px] text-muted">
              Welcome to my portfolio
            </p>
            <h1 id="hero-title" className="h1">
              👋 <span lang="pt">Olá</span>, I&rsquo;m Alex!
            </h1>
            <p className="mt-3 text-lg leading-[1.6] text-text-body">
              I&rsquo;m a designer who makes hard things work inside big, messy
              organisations. Most recently at GitLab,
              where I worked with product managers to grow a core
              feature&rsquo;s adoption by a third. Before that: Qantas,
              Vodafone, and the Australian Government&rsquo;s ETA visa app,
              which I led design on and took to Gold at the Sydney Design
              Awards.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              <PanelLink
                href="/about"
                className="btn btn-primary inline-flex items-center gap-2 px-4 py-2.5 text-sm whitespace-nowrap no-underline hover:no-underline"
              >
                About me
              </PanelLink>
              <a
                href="mailto:fracazo@duck.com"
                className="btn btn-ghost inline-flex items-center gap-2 px-4 py-2.5 text-sm whitespace-nowrap no-underline hover:no-underline"
              >
                Email me
              </a>
              <PanelLink
                href="/resume"
                className="btn btn-ghost inline-flex items-center gap-2 px-4 py-2.5 text-sm whitespace-nowrap no-underline hover:no-underline"
              >
                Résumé
              </PanelLink>
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
        /* Containment context for the work cards. They size off this column
           rather than the window, so they stay correct once the column becomes
           one half of a split rather than the whole page. */
        className="@container reveal-after mx-auto grid w-full max-w-[640px] gap-4"
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
        <BrandStrip className="mt-2 mb-4" />
        {workGroups.map((group, groupIndex) => (
          <section
            key={group.id}
            aria-labelledby={`${group.id}-title`}
            className="mt-8 first:mt-2"
          >
            <h3
              id={`${group.id}-title`}
              className="m-0 text-[13px] font-medium tracking-[0.06em] text-muted uppercase"
            >
              {group.title}
            </h3>
            <p className="mt-1.5 mb-0 text-[15px] leading-[1.55] text-text-body">
              {group.context}
            </p>
            <ul role="list" className="m-0 mt-4 flex list-none flex-col p-0">
              {group.full.map((work, index) => (
                <li key={work.href}>
                  <WorkRow
                    {...work}
                    priority={groupIndex === 0 && index === 0}
                  />
                </li>
              ))}
              {group.compact.map((work) => (
                <li key={work.title}>
                  <WorkRowCompact {...work} />
                </li>
              ))}
            </ul>
          </section>
        ))}
        <div className="mt-10">
          <p className="mb-1 text-[13px] font-medium tracking-[0.06em] text-muted uppercase">
            Product design
          </p>
          <LinkRowList items={productDesign} />
        </div>
        <div className="mt-10">
          <p className="mb-1 text-[13px] font-medium tracking-[0.06em] text-muted uppercase">
            Design engineering with AI
          </p>
          <LinkRowList items={designEngineering} />
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
        <ul className="mt-2 list-disc ps-5 leading-[1.6] text-text-body">
          <li className="my-1.5">unclear or under-defined</li>
          <li className="my-1.5">shared across multiple teams</li>
          <li className="my-1.5">
            constrained by legacy systems or organisational complexity
          </li>
        </ul>
        <p className="text mt-6">
          I close the loop. I prototype, build, and ship the thing, using
          AI-assisted tooling to move faster through the code.
        </p>
      </section>

      {/* Writing */}
      <section
        aria-labelledby="writing-title"
        className="mx-auto w-full max-w-[640px]"
      >
        <div className="grid gap-4">
          <div className="flex items-baseline justify-between gap-4">
            <h2 id="writing-title" className="h2">
              Writing
            </h2>
            <PanelLink
              href="/writing"
              className="group -m-2 inline-flex items-center gap-1.5 p-2 text-sm whitespace-nowrap text-text no-underline transition-colors duration-150 hover:text-brand hover:no-underline"
            >
              All writing
              <ArrowRightIcon
                size={14}
                className="transition-transform duration-150 group-hover:translate-x-0.5"
              />
            </PanelLink>
          </div>
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
          <blockquote className="m-0 border-s-2 border-border ps-4">
            <p className="m-0 mb-2 text-[15px] leading-[1.7] text-text-body">
              &ldquo;Alex consistently demonstrated strong design leadership and
              strategic thinking. He translated complex technical constraints
              into clear, user-centred direction that directly shaped product
              decisions.&rdquo;
            </p>
            <footer className="m-0 flex items-center gap-2.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/testimonial-caitlin-steele.jpg"
                alt=""
                width={36}
                height={36}
                loading="lazy"
                decoding="async"
                className="h-9 w-9 flex-none rounded-full object-cover"
              />
              <cite className="text-[13px] not-italic">
                <span className="block font-medium text-text">
                  Caitlin Steele
                </span>
                <span className="block text-muted opacity-70">
                  Design Manager at GitLab
                </span>
              </cite>
            </footer>
          </blockquote>
          <blockquote className="m-0 border-s-2 border-border ps-4">
            <p className="m-0 mb-2 text-[15px] leading-[1.7] text-text-body">
              &ldquo;Alex is the best designer I&rsquo;ve worked with. On GitLab
              Query Language (GLQL) he thought through how every decision
              impacts customers and built for long-term scale, not just the
              immediate need.&rdquo;
            </p>
            <footer className="m-0 flex items-center gap-2.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/testimonial-matthew-macfarlane.jpg"
                alt=""
                width={36}
                height={36}
                loading="lazy"
                decoding="async"
                className="h-9 w-9 flex-none rounded-full object-cover"
              />
              <cite className="text-[13px] not-italic">
                <span className="block font-medium text-text">
                  Matthew Macfarlane
                </span>
                <span className="block text-muted opacity-70">
                  Senior Product Manager at GitLab
                </span>
              </cite>
            </footer>
          </blockquote>
          <blockquote className="m-0 border-s-2 border-border ps-4">
            <p className="m-0 mb-2 text-[15px] leading-[1.7] text-text-body">
              &ldquo;Alex is at his best on hard, open-ended problems. He
              grounds his decisions in research and took on technical work like
              the visual builder and tokenized filtering for our query
              language, GLQL.&rdquo;
            </p>
            <footer className="m-0 flex items-center gap-2.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/testimonial-armin-pasalic.jpg"
                alt=""
                width={36}
                height={36}
                loading="lazy"
                decoding="async"
                className="h-9 w-9 flex-none rounded-full object-cover"
              />
              <cite className="text-[13px] not-italic">
                <span className="block font-medium text-text">
                  Armin Pašalić
                </span>
                <span className="block text-muted opacity-70">
                  Engineering Manager at GitLab
                </span>
              </cite>
            </footer>
          </blockquote>
          <blockquote className="m-0 border-s-2 border-border ps-4">
            <p className="m-0 mb-2 text-[15px] leading-[1.7] text-text-body">
              &ldquo;What excellent luck to have encountered such a mentor.
              He&rsquo;s got sharp analytical skills and a broad body of
              knowledge in the UX domain. With his help both in my learning and
              job-search coaching, I ended up receiving multiple job
              offers.&rdquo;
            </p>
            <footer className="m-0 flex items-center gap-2.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/testimonial-cherie-k.jpg"
                alt=""
                width={36}
                height={36}
                loading="lazy"
                decoding="async"
                className="h-9 w-9 flex-none rounded-full object-cover"
              />
              <cite className="text-[13px] not-italic">
                <span className="block font-medium text-text">Cherie K.</span>
                <span className="block text-muted opacity-70">
                  Product Designer
                </span>
              </cite>
            </footer>
          </blockquote>
        </div>
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
    </PlainShell>
    </PanelShell>
  );
}
