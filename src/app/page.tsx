import { AvatarGreeting } from "@/components/avatar-greeting";
import { PlainShell } from "@/components/plain-shell";
import { PanelLink } from "@/components/panel-link";
import { PanelShell } from "@/components/panel-shell";
import { WorkRow } from "@/components/work-row";
import { WorkRowCompact } from "@/components/work-row-compact";
import { RowList } from "@/components/row-list";
import { LinkRowList } from "@/components/link-row-list";
import { SiteFooter } from "@/components/site-footer";
import { ExternalLinkIcon } from "@/components/icons";

/* Work is grouped by the kind of problem, not by date. Each group leads with
   the full case studies and follows with compact rows. Both row kinds share
   one padding, so the order is editorial rather than a visual weight change. */
const workGroups = [
  {
    id: "knowledge-products",
    title: "Knowledge products",
    context:
      "I design the tools developers use every day at GitLab, and products people learn with.",
    full: [
      {
        href: "/case-studies/glql",
        title: "GLQL: Embedded Views for Work Tracking",
        tagline:
          "Turning an engineer-built query language into a usable product, through research that overturned the team’s assumptions.",
        outcome: "+33% adoption post-GA",
        vignette: "glql" as const,
      },
      {
        href: "/case-studies/wiki-contextual-comments",
        title: "GitLab Wiki: Contextual Comments",
        tagline:
          "Tying a discussion to the exact line it refers to, closing a competitive gap against Confluence and Notion.",
        vignette: "wiki" as const,
      },
      {
        href: "/case-studies/birthguide",
        image: {
          src: "/images/birthguide-hero.svg",
          alt: "The BirthGuide mark: a winding route icon above the wordmark and birthguide.com.au",
        },
        title: "BirthGuide",
        tagline:
          "The users were there to learn, not to get a document. So the learning became the product.",
        outcome: "Founder · Sole builder",
        vignette: "birthguide" as const,
      },
    ],
    compact: [
      {
        stub: "stub:coursify",
        vignette: "coursify" as const,
        title: "Coursify.me",
        tagline:
          "An online course platform: create courses, tutorials and ebooks, and sell them.",
        metric: "50,000 students",
      },
      {
        href: "/case-studies/gitlab-pages",
        vignette: "pages" as const,
        title: "Making Site Status Visible in GitLab Pages",
        tagline:
          "Status spread across screens and DNS hidden until something broke. I wrote the diagnosis and got another team to ship the fix.",
        metric: "Monetisation foundation · Cross-team delivery",
      },
      {
        href: "/case-studies/mr-summary-ai",
        vignette: "mr-summary" as const,
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
    context:
      "I designed entertainment, recharge and commerce flows for Qantas, Vodafone and Brazil's largest retailers.",
    full: [],
    compact: [
      {
        href: "/case-studies/qantas-entertainment-app",
        image: {
          src: "/images/62dc26d29e21732abffdaacd_work4-p-1080.png",
          alt: "Qantas Entertainment App",
        },
        video: { src: "/videos/qantas-entertainment-spotlights.mp4" },
        title: "A Unified In-flight Entertainment Experience",
        tagline:
          "Making the entertainment app useful before and after the flight, not just on board.",
        metric: "Ad revenue 225k → 675k",
      },
      {
        href: "/case-studies/qantas-app",
        image: {
          src: "/images/62dc1d83920df32baae28d6b_work2-p-1080.png",
          alt: "Qantas Airways App",
        },
        video: { src: "/videos/qantas-app-kangaroo.mp4" },
        title: "Increasing App Adoption Through Entertainment",
        tagline:
          "Using entertainment features to pull travellers into the main Qantas app.",
        metric: "+70% downloads",
      },
      {
        href: "/case-studies/eta-app",
        image: {
          src: "/images/62dc274f132cbe543717e126_work1-p-2000.jpg",
          alt: "The Australian Government ETA visa app",
        },
        video: { src: "/videos/eta-face-scan.mp4" },
        title: "Reducing Friction in Government Visa Applications",
        tagline:
          "Automating data entry to improve completion and reduce user effort in a high-stakes service.",
        metric: "From 0 to 1 · Gold, Sydney Design Awards",
      },
      {
        stub: "stub:b2w",
        image: {
          src: "/images/b2w-americanas-app.jpg",
          alt: "A hand holding an iPhone running the americanas.com app, showing the deal of the day",
        },
        video: { src: "/videos/b2w-mobile-shopping.mp4" },
        title: "Mobile for Americanas, Submarino and Shoptime",
        tagline:
          "Rebuilding mobile for three of Brazil's largest e-commerce brands.",
        metric: "500,000+ items",
      },
      {
        href: "/case-studies/vodafone-mymix",
        vignette: "mymix" as const,
        title: "Vodafone",
        tagline:
          "Letting prepaid customers build their own recharge, in four taps.",
        metric: "72 combinations · 4 taps",
      },
    ],
  },
  {
    id: "marketplaces",
    title: "Marketplaces",
    context:
      "I designed both sides of two-sided platforms, for disability support in Australia and real estate in Brazil.",
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
        video: { src: "/videos/hireup-status-cycle.mp4" },
        title: "Worker Status Visibility",
        tagline:
          "Reducing uncertainty in a two-sided marketplace by making availability honest.",
        outcome: "+12% bookings · Connection rate 3% → 5%",
      },
    ],
    compact: [
      {
        stub: "stub:bem-direto",
        vignette: "bemdireto" as const,
        title: "Bem Direto",
        tagline:
          "Brazil's first real estate marketplace for agents, designed from scratch.",
        metric: "First designer · From 0 to 1",
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

const designEngineering = [
  {
    title: "BirthGuide",
    meta: "Consumer product · 2026",
    links: [{ href: "https://birthguide.com.au", label: "Site" }],
  },
  {
    title: "Birth Plans",
    meta: "Web app · 2026",
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
    meta: "2026",
    links: [
      {
        href: "https://www.raycast.com/fracazo/contrast-lab",
        label: "Raycast Store",
      },
      { href: "https://github.com/fracazo/contrast-lab", label: "GitHub" },
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
            <h1 id="hero-title" className="h1">
              I build software that respects the person using it.
            </h1>
            {/* Pull against .h1's 32px bottom margin so the mission caption
                reads as part of the headline, not a new block. */}
            <p className="-mt-5 text-body text-text-body">
              👋 <span lang="pt">Olá</span>, I&rsquo;m Alex Fracazo. This is my
              mission.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              <PanelLink
                href="/about"
                className="btn btn-primary inline-flex items-center gap-2 px-4 py-2.5 whitespace-nowrap no-underline hover:no-underline"
              >
                About me
              </PanelLink>
              <PanelLink
                href="/resume"
                className="btn btn-primary inline-flex items-center gap-2 px-4 py-2.5 whitespace-nowrap no-underline hover:no-underline"
              >
                Work history
              </PanelLink>
            </div>
          </div>
        </div>
      </section>

      {/* The case studies reveal as their own block. No section heading: the
          group labels carry the structure. */}
      <div className="reveal-after mx-auto grid w-full max-w-[640px] gap-10">
        <section
          id="Work"
          aria-label="Selected projects"
          /* Containment context for the work cards. They size off this column
             rather than the window, so they stay correct once the column becomes
             one half of a split rather than the whole page. */
          className="@container grid w-full gap-4"
        >
          {workGroups.map((group, groupIndex) => (
            <section
              key={group.id}
              aria-labelledby={`${group.id}-title`}
              className="mt-22 first:mt-0"
            >
              <h3
                id={`${group.id}-title`}
                className="m-0 text-meta font-medium leading-none tracking-[0.06em] text-muted uppercase"
              >
                {group.title}
              </h3>
              <p className="mt-1 mb-0 text-body text-text-body">
                {group.context}
              </p>
              <ul
                role="list"
                /* Rows draw their own border-t divider; this closes the group
                   after its last row so the list doesn't trail off open. */
                className="m-0 mt-4 flex list-none flex-col border-b border-border p-0"
              >
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
          <div className="mt-22">
            <p className="mb-1 text-meta font-medium tracking-[0.06em] text-muted uppercase">
              Product design
            </p>
            <LinkRowList items={productDesign} />
          </div>
          <div className="mt-22">
            <p className="mb-1 text-meta font-medium tracking-[0.06em] text-muted uppercase">
              Design engineering with AI
            </p>
            <LinkRowList items={designEngineering} />
          </div>
        </section>
      </div>

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

      <SiteFooter />
    </PlainShell>
    </PanelShell>
  );
}
