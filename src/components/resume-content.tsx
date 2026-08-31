import Link from "next/link";
import type { ReactNode } from "react";
import { DownloadIcon, ExternalLinkIcon } from "@/components/icons";

const RESUME_PDF = "/files/Alex Fracazo - Resume.pdf";

const experience = [
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
    ],
    role: "Senior Product Designer",
    context:
      "Paired with the senior product manager to define the roadmap for Knowledge, covering Wiki, GLQL (GitLab Query Language), Pages, and text editors.",
    period: "2022 – 2026",
    location: "Remote, global",
    outcome: "+33% adoption · code in production",
    points: [
      "Led GLQL from research through GA launch: 33% adoption growth and shipped my own code to production via merge requests.",
      "Led the Wiki UX transformation, shipping the sidebar redesign to production through code contributions, and finalising the contextual comments design system now in engineering development.",
      "Ran usability studies and a survey on AI code review that exposed trust and control problems, driving a full product pivot to an author-facing writing assistant.",
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
    period: "2021 – 2022",
    location: "Sydney",
    outcome: "Connection rate 3% → 5% (+67% relative)",
    points: [
      "Found through data analysis that 39.1% of clients were messaging inactive workers, dragging down platform-wide connection rates.",
      "Designed an availability visibility system across iOS and Android that lifted connection rate from 3% to 5% (+67% relative), response rate from 39.1% to 45.8%, and drove +46% inactive worker reactivations.",
      "Redesigned the core booking experience, achieving a +12% increase in booking rates.",
    ],
  },
  {
    company: "Outware Mobile, later Arq Group",
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
    role: "Lead Product Designer",
    context:
      "Led product design across web, mobile, and wearable for Qantas, Telstra, NAB, and Endeavour Group. Managed designers and established research practices across teams.",
    period: "2016 – 2020",
    location: "Sydney",
    outcome: "+70% app downloads · Sydney Design Awards Gold",
    points: [
      "Led Qantas Entertainment app redesign, increasing app downloads +70%.",
      "Designed the Australian ETA visa app from 0 to 1, Gold at the Sydney Design Awards.",
    ],
  },
  {
    company: "Vodafone",
    caseStudies: [{ title: "MyMix", href: "/case-studies/vodafone-mymix" }],
    role: "Senior Product Designer",
    context: null,
    period: "2015 – 2016",
    location: "Sydney",
    outcome: null,
    points: [
      "Led UX for the self-service team across web and native apps, and established user research and testing processes across multiple products.",
    ],
  },
  {
    company: "B2W Digital",
    caseStudies: null,
    role: "Senior Product Designer",
    context: "LATAM's largest e-commerce company.",
    period: "2013 – 2015",
    location: "Rio de Janeiro",
    outcome: "1 design system · 3 apps unified",
    points: [
      "Designed a responsive white-label e-commerce platform supporting multiple branded stores, and created an internal design system that improved consistency across 3 native apps.",
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
      "A consumer birth-planning product for Australian first-time parents, designed and built solo, end-to-end, on Next.js, React 19, Supabase, and Stripe using AI-powered tools (Claude, Claude Code). Parents answer a guided questionnaire and receive an interactive birth plan with a QR code midwives scan on their phone, plus a printable partner summary.",
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
    label: "Design",
    value:
      "UX research, product strategy, interaction design, design systems, prototyping, iOS and Android",
  },
  {
    label: "Build and ship",
    value:
      "Next.js, React, TypeScript, Tailwind CSS, Supabase, Stripe, Vercel, Git",
  },
  {
    label: "AI tools",
    value: "Claude, Claude Code, Cursor, OpenCode, Claude Design",
  },
  { label: "Analytics", value: "GA4, Clarity, cohort analysis, A/B testing" },
];

const education = [
  {
    title: "UX Master Certificate (UXMC)",
    detail: "Nielsen Norman Group, 2021 · Interaction, Research, Management",
  },
  { title: "MBA", detail: "d.MBA, 2020" },
  {
    title: "User Experience Design Immersive",
    detail: "General Assembly, Sydney, 2015",
  },
  {
    title: "Interaction Design",
    detail: "Faber-Ludens Institute, Brazil, 2010–2012",
  },
  {
    title: "Publication",
    detail:
      "“Build a new website in a few easy steps with GitLab Pages”, GitLab Blog, 2025",
  },
  {
    title: "Design Mentor",
    detail: "Springboard and CareerFoundry, 2020–2021",
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
          <p className="mt-1 text-meta text-muted">
            I work end to end, from research and strategy through to a working
            product.
          </p>
          <p className="mt-5 text-body text-text-body">
            I&rsquo;m a designer who makes hard things work inside big, messy
            organisations. Most recently at GitLab, where a feature I
            redesigned saw 33% more use after launch. Before that: Qantas,
            Vodafone, and the Australian Government&rsquo;s ETA visa app, which
            I led design on and which won Gold at the Sydney Design Awards.
          </p>

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
          </p>
        </header>

        {/* Products */}
        <section className="mt-14 border-t border-border pt-10">
          <h2 className={sectionLabel}>Products</h2>
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
                <ul className="mt-2.5 list-disc space-y-1.5 pl-[18px] text-body text-text-body">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
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
            car insurance comparison platform · Artia (2009–2011), built my own
            UI in Haml, Sass, and Rails · Sitevip (2005–2009), front-end coder
            in a fast-paced agency.
          </p>
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

        {/* Education & more */}
        <section className="mt-14 border-t border-border pt-10">
          <h2 className={sectionLabel}>Education &amp; more</h2>
          <ul className="m-0 list-none divide-y divide-border p-0">
            {education.map((item) => (
              <li
                key={item.title}
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
          <span>Melbourne or remote (UTC+10)</span>
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
