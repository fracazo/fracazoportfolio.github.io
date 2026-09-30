import Link from "next/link";
import type { ReactNode } from "react";
import { DownloadIcon, ExternalLinkIcon } from "@/components/icons";
import { BrandStrip } from "@/components/brand-strip";

const RESUME_PDF = "/files/Alex Fracazo - Resume.pdf";

/* One-line facts under the summary. Mirrors the Focus / Stack / Languages
   strip on the PDF so both versions lead with the same framing. */
const facts = [
  {
    label: "Focus",
    value: "AI products · Developer tools · Design systems · Zero to one",
  },
  {
    label: "Stack",
    value: "TypeScript · React · Next.js · Tailwind · Supabase · Anthropic SDK",
  },
  {
    label: "Languages",
    value:
      "Portuguese native, English professional, Spanish elementary · Australian and Brazilian citizen",
  },
];

type CaseStudy = { title: string; href: string };

/* A client engagement inside a forward-deployed role. Rendered as its own
   sub-entry so the client and product read before the outcome. */
type Client = { name: string; project: string; text: string };

type Job = {
  company: string;
  caseStudies: CaseStudy[] | null;
  role: string;
  context: string | null;
  period: string;
  location: string;
  outcome: string | null;
  points: string[];
  clients?: Client[];
};

const experience: Job[] = [
  {
    company: "GitLab",
    caseStudies: [
      { title: "GLQL / Embedded Views", href: "/case-studies/glql" },
      {
        title: "Wiki Contextual Comments",
        href: "/case-studies/wiki-contextual-comments",
      },
      {
        title: "Summarize Merge Requests with AI",
        href: "/case-studies/mr-summary-ai",
      },
      { title: "Making Site Status Visible in GitLab Pages", href: "/case-studies/gitlab-pages" },
    ],
    role: "Senior Product Designer",
    context: null,
    period: "Nov 2022 – Jul 2026",
    location: "Remote",
    outcome: "+33% weekly users · code in production",
    points: [
      "Built GLQL (GitLab Query Language), an in-product query language for tracking work, from research to general availability. Interviewed customers, scoped with the product manager and engineering, and shipped production code via merge requests. Grew weekly users from 600 to 801, a 33% increase, by surfacing it inside the editor at the moment of writing.",
      "Surveyed and ran usability studies on AI code review that exposed trust and control problems, then reframed the product around the author. The resulting writing assistant shipped and reached broad adoption with no critical feedback.",
      "Established an AI-assisted research and prototyping pipeline: analysed anonymised product data, generated interview guides, synthesised transcripts, then produced user flows, wireframes and working responsive prototypes across desktop, tablet and mobile. Mentored designers across the design org and ran critiques.",
    ],
  },
  {
    company: "Hireup",
    caseStudies: [
      {
        title: "Worker Status Visibility",
        href: "/case-studies/bringing-visibility-to-workers-status",
      },
    ],
    role: "Principal Product Designer",
    context:
      "Australia's largest disability support marketplace. Designer on the iOS and Android app team.",
    period: "Mar 2021 – Oct 2022",
    location: "Sydney",
    outcome: "Connection rate 3% → 5% · booking rate +12%",
    points: [
      "Discovered that 39.1% of clients were messaging inactive workers, then introduced a worker availability system across iOS and Android with engineering. Connection rate rose from 3% to 5%, response rate from 39.1% to 45.8%, with 46% more inactive workers reactivated.",
      "Streamlined the core booking flow, lifting booking rate 12%.",
    ],
  },
  {
    company: "Arq Group and Outware Mobile",
    caseStudies: [
      {
        title: "A Unified In-flight Entertainment Experience",
        href: "/case-studies/qantas-entertainment-app",
      },
      {
        title: "Increasing App Adoption Through Entertainment",
        href: "/case-studies/qantas-app",
      },
      {
        title: "Reducing Friction in Government Visa Applications",
        href: "/case-studies/eta-app",
      },
    ],
    role: "Forward Deployed Product Designer",
    context:
      "Embedded with client product teams to take work from discovery through to launch.",
    period: "Jul 2016 – Jun 2020",
    location: "Sydney",
    outcome: "Tripled ad revenue · Sydney Design Awards Gold",
    points: [],
    clients: [
      {
        name: "Qantas",
        project: "Entertainment app",
        text: "Redesigned the app to work before and after the flight, extending it beyond the on-board Qantas network. Tripled advertising revenue from partner offers, 225k to 675k, and raised the App Store rating from 2.1 to 4.5.",
      },
      {
        name: "Department of Home Affairs",
        project: "Electronic Travel Authority app, zero to one",
        text: "Investigated visa processing and data accuracy with Home Affairs and SITA staff, then reframed the problem from form design to data capture. Designed an iOS and Android flow that reads the passport chip over NFC and captures a live face image, removing manual entry. Won Gold at the Sydney Design Awards.",
      },
      {
        name: "Telstra",
        project: "Design system",
        text: "Standardised components and usage guidance across product teams, cutting duplicated design and build effort on new projects.",
      },
      {
        name: "Endeavour Group",
        project: "BWS app, zero to one",
        text: "Launched a liquor retail app on iOS and Android from concept, and coached the in-house design team through working directly with engineers.",
      },
    ],
  },
  {
    company: "Vodafone",
    caseStudies: [{ title: "MyMix", href: "/case-studies/vodafone-mymix" }],
    role: "Senior Product Designer",
    context: null,
    period: "Jun 2015 – Aug 2016",
    location: "Sydney",
    outcome: null,
    points: [
      "Created MyMix, a personalised prepaid plan builder, and instituted research and testing practices across the self-service team on web and native apps.",
    ],
  },
  {
    company: "B2W Digital",
    caseStudies: null,
    role: "Senior Product Designer",
    context: null,
    period: "Jun 2013 – May 2015",
    location: "Rio de Janeiro",
    outcome: "3 apps · 1 design system",
    points: [
      "Developed a responsive white-label platform for multiple store brands at LATAM's largest e-commerce company, and consolidated three native apps onto a single design system.",
    ],
  },
  {
    company: "Artia",
    caseStudies: null,
    role: "Frontend Engineer",
    context: null,
    period: "Sep 2009 – Jun 2011",
    location: "Joinville, Brazil",
    outcome: null,
    points: [
      "Programmed my own interface designs in Haml, Sass, Ruby on Rails and jQuery on an agile team.",
    ],
  },
];

/* BirthGuide carries the bullets; the rest stay one line each so the section
   reads as one flagship product followed by a shipping record. */
const projects = [
  {
    name: "BirthGuide",
    href: "https://birthguide.com.au",
    year: "Solo build · 2026",
    context:
      "A consumer birth-planning product for Australian first-time parents, live with paying users. Designed and built solo, end-to-end, on Next.js, React 19, Supabase, Stripe and the Anthropic SDK. Parents answer a guided questionnaire and receive an interactive birth plan with a QR code midwives scan on their phone, plus a printable partner summary.",
    points: [
      "Reframed the category from ‘printable template’ to ‘labour communication tool’ after research revealed the partner is the primary plan reader during active labour.",
      "Validated real usage with Clarity session recordings, and built free tools, guides, and an AI chat assistant as an organic acquisition strategy.",
    ],
  },
  {
    name: "Birth Plans",
    href: "https://birthplans.app",
    year: "Solo build · 2026",
    context:
      "A focused global birth-plan builder, kept separate from BirthGuide so one product stays a single-purpose tool while the other expands into the full pregnancy journey.",
  },
  {
    name: "Triage Agent",
    href: "https://github.com/fracazo/triage-agent",
    year: "TypeScript and MCP · 2026",
    context:
      "A support-triage agent built on a ‘model proposes, code decides’ architecture. A deterministic policy module holds the final call, with adversarial eval sets, injection blocking, and confidence-based escalation.",
  },
  {
    name: "Contrast Lab",
    href: "https://www.raycast.com/fracazo/contrast-lab",
    year: "Raycast extension · 2026",
    context:
      "WCAG 2 and APCA contrast checking in pure TypeScript, published to the Raycast store.",
  },
  {
    name: "Don Draper",
    href: "https://github.com/fracazo/don-draper-skill",
    year: "Claude Code skill · 2026",
    context:
      "A creative-director critique agent built on the Agent Skills standard. Installs into Claude Code or OpenCode with one command.",
  },
];

const skills = [
  {
    label: "Front end",
    value: "TypeScript, JavaScript, React, Next.js, Tailwind CSS, HTML, CSS",
  },
  {
    label: "Platform",
    value: "Supabase, PostgreSQL, Stripe, Vercel, Git",
  },
  {
    label: "AI",
    value:
      "Anthropic SDK, Claude Code, Cursor, Model Context Protocol (MCP), structured outputs, evals and guardrails",
  },
  {
    label: "Design",
    value:
      "Figma, design systems, interaction design, prototyping, WCAG 2 and APCA contrast",
  },
  {
    label: "Research and analytics",
    value:
      "User interviews, usability testing, A/B testing, GA4, Microsoft Clarity",
  },
];

const education = [
  {
    title: "UX Master Certificate (UXMC)",
    detail: "Nielsen Norman Group, 2021",
  },
  { title: "MBA for Designers", detail: "d.MBA, 2020" },
  {
    title: "Interaction Design",
    detail: "Faber-Ludens Institute, Brazil, 2010–2012",
  },
  {
    title: "Publication",
    detail:
      "“Embedded views: the future of work tracking in GitLab”, GitLab Blog, 2025",
  },
  {
    title: "Publication",
    detail:
      "“Build a new website in a few easy steps with GitLab Pages”, GitLab Blog, 2025",
  },
];

const sectionLabel =
  "mb-6 text-meta font-semibold tracking-[0.09em] text-muted uppercase";


/**
 * Body of the résumé, without the route chrome.
 *
 * Lives apart from the route so the same content can render inside the side
 * panel. `back` is a slot the route fills and the panel leaves empty.
 */
export function ResumeContent({ back }: { back?: ReactNode } = {}) {
  return (
    <div className="min-h-dvh">
      {back}
      <main className="mx-auto w-full max-w-[620px] px-6 pt-24 pb-24 max-md:pt-20">
        {/* Header */}
        <header>
          <h1 className="h1">Work history</h1>
          {/* Pull against .h1's 32px bottom margin so the line reads as the
              heading's caption, not a new block. Same move as the home hero. */}
          <p className="-mt-5 text-meta text-muted">
            I work end to end, from research and strategy through to a working
            product.
          </p>
          {/* Client marks sit with the work history, where they are evidence
              for the claim above them rather than decoration on the home page.
              No heading: the strip's own aria-label ("Previously worked with")
              names it for readers the logos can't reach. */}
          <BrandStrip className="mt-5" />
          <p className="mt-5 text-body text-text-body">
            Product designer and front-end developer who has built products at
            GitLab, Qantas, Vodafone and Telstra. Took GitLab&rsquo;s
            in-product query language from research to launch, grew weekly
            users 33%, and shipped my own merge requests to production. Founded
            and shipped BirthGuide, live with paying users, built solo on
            Next.js, Supabase and the Anthropic SDK. Four years forward
            deployed into enterprise and federal government teams.
          </p>

          <dl className="mt-5 flex flex-col gap-1.5 text-meta text-muted">
            {facts.map((fact) => (
              <div key={fact.label} className="flex gap-2">
                <dt className="shrink-0 font-medium text-text">{fact.label}</dt>
                <dd className="m-0">{fact.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-6 flex flex-wrap items-center gap-2.5">
            <a
              href={RESUME_PDF}
              download
              className="btn btn-primary inline-flex items-center gap-2 px-4 py-2.5 whitespace-nowrap no-underline hover:no-underline"
            >
              <DownloadIcon size={16} />
              Download résumé (PDF)
            </a>
          </div>

          <p className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-meta text-muted">
            <a href="mailto:fracazo@duck.com">fracazo@duck.com</a>
            <span aria-hidden className="text-border">
              ·
            </span>
            <a
              href="https://www.linkedin.com/in/fracazo"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-1"
            >
              LinkedIn
              <ExternalLinkIcon size={13} className="opacity-70" />
            </a>
            <span aria-hidden className="text-border">
              ·
            </span>
            <a
              href="https://github.com/fracazo"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-1"
            >
              GitHub
              <ExternalLinkIcon size={13} className="opacity-70" />
            </a>
          </p>
        </header>

        {/* Experience */}
        <section className="mt-14 border-t border-border pt-10">
          <h2 className={sectionLabel}>Experience</h2>
          <div className="flex flex-col gap-9">
            {experience.map((job) => (
              <article key={`${job.company}-${job.period}`}>
                <p className="mb-1.5 text-meta tracking-[0.02em] text-muted">
                  {job.period} · {job.location}
                </p>
                <h3 className="text-subhead font-semibold text-text">
                  {job.company}
                </h3>
                <p className="mt-0.5 text-meta text-muted">
                  {job.role}
                </p>
                {job.context && (
                  <p className="mt-0.5 text-meta text-muted">
                    {job.context}
                  </p>
                )}
                {job.outcome && (
                  <p className="mt-2.5">
                    <span className="inline-flex items-center rounded-full bg-accent/10 px-2.5 py-1 text-meta font-medium text-accent">
                      {job.outcome}
                    </span>
                  </p>
                )}
                {job.points.length > 0 && (
                  <ul className="mt-2.5 list-disc space-y-1.5 pl-[18px] text-body text-text-body">
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                )}
                {job.clients && (
                  <ul className="m-0 mt-4 flex list-none flex-col gap-4 p-0">
                    {job.clients.map((client) => (
                      <li key={client.name}>
                        <p className="text-meta text-muted">
                          <span className="font-medium text-text">
                            {client.name}
                          </span>{" "}
                          · {client.project}
                        </p>
                        <p className="mt-1 text-body text-text-body">
                          {client.text}
                        </p>
                      </li>
                    ))}
                  </ul>
                )}
                {job.caseStudies && (
                  <div className="mt-4">
                    <p className="text-meta font-semibold tracking-[0.06em] text-muted uppercase">
                      {job.caseStudies.length > 1
                        ? "Case studies"
                        : "Case study"}
                    </p>
                    <ul className="m-0 mt-0.5 list-none p-0">
                      {job.caseStudies.map((study) => (
                        <li key={study.href}>
                          {/* Body-size and padded: these are content links, and
                              a meta-size inline run was too small to read or
                              tap on a phone. */}
                          <Link
                            href={study.href}
                            className="inline-block py-2 text-body text-brand no-underline touch-manipulation hover:underline"
                          >
                            {study.title}&nbsp;&rarr;
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </article>
            ))}
          </div>
          <p className="mt-8 text-meta text-muted">
            <span className="font-medium text-text">Earlier:</span> Bem Direto
            (2012–2013), first designer at Brazil&rsquo;s first real estate
            marketplace for agents · Smartia (2011–2012), Brazil&rsquo;s first
            car insurance comparison platform · Sitevip (2005–2009), front-end
            coder in an agency.
          </p>
        </section>

        {/* Projects */}
        <section className="mt-14 border-t border-border pt-10">
          <h2 className={sectionLabel}>Projects</h2>
          <div className="flex flex-col gap-9">
            {projects.map((project) => (
              <article key={project.name}>
                <p className="mb-1.5 text-meta tracking-[0.02em] text-muted">
                  {project.year}
                </p>
                <h3 className="text-subhead font-semibold text-text">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-1 text-brand"
                  >
                    {project.name}
                    <ExternalLinkIcon size={13} className="opacity-70" />
                  </a>
                </h3>
                <p className="mt-0.5 text-meta text-muted">
                  {project.context}
                </p>
                {project.points && (
                  <ul className="mt-2.5 list-disc space-y-1.5 pl-[18px] text-body text-text-body">
                    {project.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mt-14 border-t border-border pt-10">
          <h2 className={sectionLabel}>Skills</h2>
          <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
            {skills.map((skill) => (
              <div key={skill.label}>
                <p className="mb-1 text-meta font-semibold tracking-[0.06em] text-muted uppercase">
                  {skill.label}
                </p>
                <p className="text-body text-text-body">
                  {skill.value}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Education & publications */}
        <section className="mt-14 border-t border-border pt-10">
          <h2 className={sectionLabel}>Education &amp; publications</h2>
          <ul className="m-0 list-none divide-y divide-border p-0">
            {education.map((item) => (
              <li
                key={item.detail}
                className="flex flex-col gap-0.5 py-3.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <span className="text-meta font-medium text-text">
                  {item.title}
                </span>
                <span className="text-meta text-muted sm:text-right">
                  {item.detail}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Footer */}
        <footer className="mt-14 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-8 text-meta text-muted">
          <span>Hybrid or remote (UTC+10)</span>
          <a
            href={RESUME_PDF}
            download
            className="inline-flex items-center gap-1.5 font-medium text-brand"
          >
            <DownloadIcon size={14} />
            Download PDF
          </a>
        </footer>
      </main>
    </div>
  );
}
