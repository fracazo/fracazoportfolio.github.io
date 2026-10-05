import { AvatarGreeting } from "@/components/avatar-greeting";
import { BrandStrip } from "@/components/brand-strip";
import { PlainShell } from "@/components/plain-shell";
import { PanelShell } from "@/components/panel-shell";
import { WorkRow } from "@/components/work-row";
import { WorkRowCompact } from "@/components/work-row-compact";
import { FeaturedWork, type FeaturedItem } from "@/components/featured-work";
import { RowList } from "@/components/row-list";
import { LinkRowList } from "@/components/link-row-list";
import { SiteFooter } from "@/components/site-footer";
import { TextLink } from "@/components/text-link";
import { ExternalLinkIcon } from "@/components/icons";

/* The hero's lead work, in stage order: two case studies and a tool. The
   meta line names the client, so the stage reads as shipped work. Each
   needs a standalone vignette for the narrow layouts and, ideally, a hero
   scene (hero-scenes.tsx) for the stage. */
const featuredWork: FeaturedItem[] = [
      {
        href: "/case-studies/glql",
        meta: "GitLab · 2024–2025",
        title: "GLQL: Embedded Views for Work Tracking",
        tagline:
          "Making a YAML query language work for people who had only ever used filters, through research that changed the team’s direction.",
        outcome: "+33% adoption post-GA",
        vignette: "glql",
      },
      {
        href: "/case-studies/bringing-visibility-to-workers-status",
        meta: "Hireup · 2022",
        title: "Worker Status Visibility",
        tagline:
          "Reducing uncertainty in a two-sided marketplace by making availability honest.",
        outcome: "+12% bookings · Connection rate 3% → 5%",
        vignette: "hireup",
      },
      {
        href: "/tools/flow-prototype",
        meta: "Personal project · 2026",
        title: "Flow prototype",
        tagline:
          "Every screen your coding agent builds, connected on one canvas you can zoom in and out of. Works on any device.",
        outcome: "Claude Code skill",
        vignette: "flow",
      },
];

/* Every full case study outside Featured, newest first. The meta line names
   the company and year, so the list needs no category labels to scan. */
const caseStudies = [
  {
    href: "/case-studies/birthguide",
    meta: "Founder · 2026",
    title: "BirthGuide",
    tagline:
      "Birth plans had to be printed. I made one that lives online and goes to the hospital on your phone.",
    outcome: "Sole builder",
    vignette: "birthguide" as const,
  },
  {
    href: "/case-studies/wiki-contextual-comments",
    meta: "GitLab · 2025",
    title: "GitLab Wiki: Contextual Comments",
    tagline:
      "Tying a discussion to the exact line it refers to, closing a competitive gap against Confluence and Notion.",
    vignette: "wiki" as const,
  },
  {
    href: "/case-studies/gitlab-pages",
    meta: "GitLab · 2025",
    title: "Making Site Status Visible in GitLab Pages",
    tagline:
      "Status spread across screens and DNS hidden until something broke. With no delivery team on Pages, I took the fix through Paper Cuts and shipped it in one release.",
    outcome: "Monetisation foundation · Cross-team delivery",
    vignette: "pages" as const,
  },
  {
    href: "/case-studies/mr-summary-ai",
    meta: "GitLab · 2023–2024",
    title: "Summarize Merge Requests with AI",
    tagline:
      "Finding where AI summaries earn trust in code review, including the conviction to remove what didn’t work.",
    outcome: "3 shipped iterations",
    vignette: "mr-summary" as const,
  },
  {
    href: "/case-studies/eta-app",
    image: {
      src: "/images/62dc274f132cbe543717e126_work1-p-2000.jpg",
      alt: "The Australian Government ETA visa app",
    },
    video: { src: "/videos/eta-face-scan.mp4" },
    meta: "Department of Home Affairs · 2020–2021",
    title: "Reducing Friction in Government Visa Applications",
    tagline:
      "Automating data entry to improve completion and reduce user effort in a high-stakes service.",
    outcome: "From 0 to 1",
    award: { title: "Sydney Design Awards", detail: "Gold 2021" },
  },
  {
    href: "/case-studies/qantas-entertainment-app",
    image: {
      src: "/images/62dc26d29e21732abffdaacd_work4-p-1080.png",
      alt: "Qantas Entertainment App",
    },
    video: { src: "/videos/qantas-entertainment-spotlights.mp4" },
    meta: "Qantas · 2018",
    title: "A Unified In-flight Entertainment Experience",
    tagline:
      "Making the entertainment app useful before and after the flight, not just on board.",
    outcome: "Ad revenue 225k → 675k",
  },
  {
    href: "/case-studies/qantas-app",
    image: {
      src: "/images/62dc1d83920df32baae28d6b_work2-p-1080.png",
      alt: "Qantas Airways App",
    },
    video: { src: "/videos/qantas-app-kangaroo.mp4" },
    meta: "Qantas · 2016",
    title: "Increasing App Adoption Through Entertainment",
    tagline:
      "Using entertainment features to pull travellers into the main Qantas app.",
    outcome: "+70% downloads",
  },
  {
    href: "/case-studies/vodafone-mymix",
    meta: "Vodafone · 2015–2016",
    title: "MyMix",
    tagline:
      "Letting prepaid customers build their own recharge, in four taps.",
    outcome: "72 combinations · 4 taps",
    vignette: "mymix" as const,
  },
];

/* Work with no full case study. Each row opens a short stub in the panel. */
const earlierWork = [
  {
    stub: "stub:b2w",
    image: {
      src: "/images/b2w-americanas-app.jpg",
      alt: "A hand holding an iPhone running the americanas.com app, showing the deal of the day",
    },
    video: { src: "/videos/b2w-mobile-shopping.mp4" },
    meta: "B2W Digital · 2013–2015",
    title: "Mobile for Americanas, Submarino and Shoptime",
    tagline:
      "Rebuilding mobile for three of Brazil's largest e-commerce brands.",
    metric: "500,000+ items",
  },
  {
    stub: "stub:coursify",
    vignette: "coursify" as const,
    meta: "Co-founder · 2012–2014",
    title: "Coursify.me",
    tagline:
      "An online course platform: create courses, tutorials and ebooks, and sell them.",
    metric: "50,000 students",
  },
  {
    stub: "stub:bem-direto",
    vignette: "bemdireto" as const,
    meta: "First designer · 2012–2013",
    title: "Bem Direto",
    tagline:
      "Brazil's first real estate marketplace for agents, designed from scratch.",
    metric: "From 0 to 1",
  },
];

/* Every tool, Featured or not: this is the complete list of what I've built,
   so Flow prototype appears here as well as on the stage. */
const built = [
  {
    title: "Flow prototype",
    meta: "Claude Code skill · 2026",
    links: [{ href: "/tools/flow-prototype", label: "Details" }],
  },
  {
    title: "Birth Plans",
    meta: "Web app · 2026",
    links: [{ href: "https://birthplans.app", label: "Site" }],
  },
  {
    title: "Agent-native design system",
    meta: "npm package · 2026",
    links: [
      { href: "https://github.com/fracazo/design-system", label: "GitHub" },
    ],
  },
  {
    title: "Triage Agent",
    meta: "Support-triage agent · 2026",
    links: [
      { href: "https://github.com/fracazo/triage-agent", label: "GitHub" },
    ],
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
      {
        href: "https://www.raycast.com/fracazo/contrast-lab",
        label: "Raycast Store",
      },
    ],
  },
];

/* Talks and posts published elsewhere; they sit under Writing with the essays. */
const talks = [
  {
    title: "UX Forum: Rich Links",
    meta: "GitLab · 2026",
    links: [
      { href: "https://www.youtube.com/watch?v=wuM58BBGSg0", label: "Video" },
    ],
  },
  {
    title: "Embedded views: The future of work tracking in GitLab",
    meta: "GitLab · 2025",
    links: [
      {
        href: "https://about.gitlab.com/blog/embedded-views-the-future-of-work-tracking-in-gitlab/",
        label: "Blog post",
      },
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
    <PlainShell wide>
      {/* Hero */}
      <section
        aria-labelledby="hero-title"
        className="mx-auto w-full max-w-home"
      >
        <div className="grid grid-cols-1 items-start gap-6 text-left">
          <div className="reveal-group">
            <AvatarGreeting />
            <h1 id="hero-title" className="h1">
              I take new ideas from zero to one.
            </h1>
            {/* Pull against .h1's 32px bottom margin so the greeting reads as
                part of the headline. One step up from body, in the primary
                colour, so it stays with the H1 rather than the paragraph. */}
            <p className="-mt-5 text-subhead text-text-primary">
              👋 <span lang="pt">Olá</span>, I&rsquo;m Alex Fracazo, a product
              designer. New ideas don&rsquo;t come with patterns, so I start
              with what people already understand.
            </p>
            {/* The explanation of the claim above, at reading size. Its links
                replace the old About me / Work history / Get in touch buttons;
                the first two open the same panels, so /about stays reachable
                from home. */}
            <div className="mt-5 flex flex-col gap-4 text-body text-text-body">
              <p>
                Then I sweat the details and never over-engineer. Some call it{" "}
                <TextLink href="https://capwatkins.com/blog/the-boring-designer">
                  boring design
                </TextLink>
                . It&rsquo;s the opposite of design that&rsquo;s too clever or
                too complicated. That kind of design makes people stop and
                figure things out. Boring design lets them get on with their
                day.
              </p>
              <p>
                Read my{" "}
                <TextLink href="/resume" panel>
                  work history
                </TextLink>
                , a bit{" "}
                <TextLink href="/about" panel>
                  more about me
                </TextLink>
                , or <TextLink href="mailto:fracazo@duck.com">get in touch</TextLink>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client marks, edge to edge of the page (or of the index pane when a
          panel is open), outside the 1040px column. -mx-6 cancels main's
          gutter; the strip's own px-6 keeps the marks off the edge. Hairlines
          in the faintest border token mark the bleed as deliberate without
          boxing the marks in. -my-6 tightens main's 64px section gap to 40px
          outside the rules; py-6 is the air inside them. */}
      <BrandStrip className="reveal-after -mx-6 -my-6 border-y border-border-muted px-6 py-6" />

      {/* Featured: the lead case studies get a list-and-stage hero. */}
      <section
        aria-labelledby="featured-title"
        className="reveal-after @container mx-auto w-full max-w-home"
      >
        <h2
          id="featured-title"
          className="m-0 mb-4 text-meta font-medium leading-none tracking-[0.06em] text-muted uppercase"
        >
          Featured
        </h2>
        <FeaturedWork items={featuredWork} />
      </section>

      {/* The rest of the work reveals as its own block, sorted by what a click
          gives you: a full case study, a short stub, or something to try. */}
      <div className="reveal-after mx-auto grid w-full max-w-home gap-22">
        <section
          id="Work"
          aria-labelledby="case-studies-title"
          /* Containment context for the work cards. They size off this column
             rather than the window, so they stay correct once the column becomes
             one half of a split rather than the whole page. */
          className="@container w-full"
        >
          <h2
            id="case-studies-title"
            className="m-0 mb-4 text-meta font-medium leading-none tracking-[0.06em] text-muted uppercase"
          >
            Case studies
          </h2>
          <ul role="list" className="m-0 flex list-none flex-col gap-1 p-0">
            {caseStudies.map((work) => (
              <li key={work.href}>
                <WorkRow {...work} />
              </li>
            ))}
          </ul>
        </section>

        <section
          aria-labelledby="earlier-work-title"
          className="@container w-full"
        >
          <h2
            id="earlier-work-title"
            className="m-0 mb-4 text-meta font-medium leading-none tracking-[0.06em] text-muted uppercase"
          >
            Earlier work
          </h2>
          <ul role="list" className="m-0 flex list-none flex-col gap-1 p-0">
            {earlierWork.map((work) => (
              <li key={work.title}>
                <WorkRowCompact {...work} />
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="built-title" className="w-full">
          <h2
            id="built-title"
            className="m-0 mb-1 text-meta font-medium leading-none tracking-[0.06em] text-muted uppercase"
          >
            Things I&rsquo;ve built
          </h2>
          <LinkRowList items={built} />
        </section>
      </div>

      {/* Writing */}
      <section
        aria-labelledby="writing-title"
        className="mx-auto w-full max-w-home"
      >
        <div className="grid gap-4">
          <h2 id="writing-title" className="h2">
            Writing and talks
          </h2>
          <div>
            <RowList items={writing} />
            <LinkRowList items={talks} />
          </div>
        </div>
      </section>

      {/* Working with Alex */}
      <section
        aria-labelledby="testimonials-title"
        className="mx-auto w-full max-w-home pt-12 pb-12"
      >
        <h2 id="testimonials-title" className="h3 mb-6 font-medium text-muted">
          Working with me
        </h2>
        <div className="flex flex-col gap-6">
          <blockquote className="m-0 border-s-2 border-border ps-4">
            <p className="m-0 mb-2 text-body text-text-body">
              &ldquo;He led the design for a new feature, GLQL, showcasing a deft
              approach to greenfield design. As the only designer working
              directly in his feature area, Alex was a consistent advocate for
              UX, collaborating with product and engineering but pushing back
              when needed to ensure quality outcomes.&rdquo;
            </p>
            <footer className="m-0 flex items-center gap-2.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/testimonial-nick-leonard.jpg"
                alt=""
                width={36}
                height={36}
                loading="lazy"
                decoding="async"
                className="h-9 w-9 flex-none rounded-full object-cover"
              />
              <cite className="text-meta not-italic">
                <span className="block font-medium text-text">
                  Nick Leonard
                </span>
                <span className="block text-muted opacity-70">
                  Product Designer at GitLab
                </span>
              </cite>
            </footer>
          </blockquote>
          <blockquote className="m-0 border-s-2 border-border ps-4">
            <p className="m-0 mb-2 text-body text-text-body">
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
              <cite className="text-meta not-italic">
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
            <p className="m-0 mb-2 text-body text-text-body">
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
              <cite className="text-meta not-italic">
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
            <p className="m-0 mb-2 text-body text-text-body">
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
              <cite className="text-meta not-italic">
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
            <p className="m-0 mb-2 text-body text-text-body">
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
              <cite className="text-meta not-italic">
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
            className="inline-flex items-center gap-1.5 text-meta text-muted hover:text-brand"
          >
            Read full recommendations on LinkedIn
            <ExternalLinkIcon size={13} className="opacity-70" />
          </a>
        </p>
      </section>

      {/* SiteFooter centres its own 700px column; here it sits on the home
          column's left edge instead. */}
      <div className="mx-auto w-full max-w-home">
        <SiteFooter className="!ml-0" />
      </div>
    </PlainShell>
    </PanelShell>
  );
}
