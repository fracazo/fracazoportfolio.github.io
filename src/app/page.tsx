import { AvatarGreeting } from "@/components/avatar-greeting";
import { BrandStrip } from "@/components/brand-strip";
import { PlainShell } from "@/components/plain-shell";
import { PanelShell } from "@/components/panel-shell";
import { FeaturedWork, type FeaturedItem } from "@/components/featured-work";
import { WorkRow } from "@/components/work-row";
import { RowList } from "@/components/row-list";
import { LinkRowList } from "@/components/link-row-list";
import { SiteFooter } from "@/components/site-footer";
import { TextLink } from "@/components/text-link";
import { ExternalLinkIcon } from "@/components/icons";
import { work } from "@/content/work";
import { WorkTimeline } from "@/components/work-timeline";
import { earlierTimeline } from "@/components/work-history";

/* The hero's lead work, in stage order: two case studies and a tool. The
   meta line names the client, so the stage reads as shipped work. Each
   needs a standalone vignette for the narrow layouts and, ideally, a hero
   scene (hero-scenes.tsx) for the stage. */
const featuredWork: FeaturedItem[] = [work.glql, work.hireup, work.flow];

/* The Australian case studies outside Featured, newest first. Everything
   else, GitLab included, is listed on /work. */
const caseStudies = [work.eta, work.qantasEntertainment, work.qantasApp];

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
  {
    href: "/writing/titles-are-a-trap",
    name: "Titles are a trap",
    meta: "Essay",
  },
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
      <PlainShell wide themeToggle>
        {/* Hero */}
        <section
          aria-labelledby="hero-title"
          className="mx-auto w-full max-w-home"
        >
          <div className="grid grid-cols-1 items-start gap-6 text-left">
            <div className="reveal-group">
              <AvatarGreeting />
              <h1 id="hero-title" className="h1">
                I take new ideas from zero to one
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
                replace the old About me / Work history / Get in touch buttons.
                Work history is a full page (it is the index of all the work);
                About opens in the panel. */}
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
                  Read my <TextLink href="/work">work history</TextLink>, a bit{" "}
                  <TextLink href="/about" panel>
                    more about me
                  </TextLink>
                  , or{" "}
                  <TextLink href="https://www.linkedin.com/in/fracazo">
                    connect on LinkedIn
                  </TextLink>
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

        <div className="reveal-after mx-auto grid w-full max-w-home gap-22">
          <section
            id="Work"
            aria-labelledby="case-studies-title"
            /* Containment context for the work cards, so they size off this
             column rather than the window (it halves when the panel opens). */
            className="@container w-full"
          >
            <h2
              id="case-studies-title"
              className="m-0 mb-4 text-meta font-medium leading-none tracking-[0.06em] text-muted uppercase"
            >
              Case studies
            </h2>
            <ul role="list" className="m-0 flex list-none flex-col gap-1 p-0">
              {caseStudies.map((entry) => (
                <li key={entry.href}>
                  <WorkRow {...entry} />
                </li>
              ))}
            </ul>
          </section>

          {/* The years before Hireup as a preview of the work history's
            timeline: one wave sweeps along it as it comes into view, then
            the pointer (or thumb) drives it, and each stop opens the work
            history at that entry. */}
          <section aria-labelledby="earlier-work-title" className="w-full">
            <h2
              id="earlier-work-title"
              className="m-0 mb-2 text-meta font-medium leading-none tracking-[0.06em] text-muted uppercase"
            >
              Earlier work
            </h2>
            <WorkTimeline
              stops={earlierTimeline.stops}
              employers={earlierTimeline.employers}
              hrefBase="/work"
              sweep
              label="Earlier work timeline"
            />
            <p className="text mt-6 max-w-[620px] text-body text-text-body">
              Before Hireup and GitLab, I designed for Qantas, Telstra, Vodafone
              and the Australian Government. Before that, the first versions of
              startups in Brazil. It&rsquo;s all in my{" "}
              <TextLink href="/work">work history</TextLink>.
            </p>
          </section>
        </div>

        {/* Working with Alex */}
        <section
          aria-labelledby="testimonials-title"
          className="mx-auto w-full max-w-home pt-12 pb-12"
        >
          <h2
            id="testimonials-title"
            className="h3 mb-6 font-medium text-muted"
          >
            Working with me
          </h2>
          <div className="flex flex-col gap-6">
            <blockquote className="m-0 border-s-2 border-border ps-4">
              <p className="m-0 mb-2 text-body text-text-body">
                &ldquo;He led the design for a new feature, GLQL, showcasing a
                deft approach to greenfield design. As the only designer working
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
                &ldquo;Alex consistently demonstrated strong design leadership
                and strategic thinking. He translated complex technical
                constraints into clear, user-centred direction that directly
                shaped product decisions.&rdquo;
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
                &ldquo;Alex is the best designer I&rsquo;ve worked with. On
                GitLab Query Language (GLQL) he thought through how every
                decision impacts customers and built for long-term scale, not
                just the immediate need.&rdquo;
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
                grounds his decisions in research and took on technical work
                like the visual builder and tokenized filtering for our query
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
                knowledge in the UX domain. With his help both in my learning
                and job-search coaching, I ended up receiving multiple job
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
              className="-my-3 inline-flex items-center gap-1.5 py-3 text-meta text-muted hover:text-brand active:text-brand"
            >
              Read full recommendations on LinkedIn
              <ExternalLinkIcon size={13} className="opacity-70" />
            </a>
          </p>
        </section>

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

        {/* SiteFooter centres its own 700px column; here it sits on the home
          column's left edge instead. */}
        <div className="mx-auto w-full max-w-home">
          <SiteFooter className="!ml-0" />
        </div>
      </PlainShell>
    </PanelShell>
  );
}
