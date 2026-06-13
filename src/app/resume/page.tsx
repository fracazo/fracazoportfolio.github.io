import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeftIcon,
  DownloadIcon,
  ExternalLinkIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Résumé - Alex Fracazo Product Designer",
  description:
    "The résumé of Alex Fracazo - product designer and front-end engineer based in Melbourne. Experience at GitLab, Hireup, Qantas and more. Download the PDF.",
  openGraph: {
    title: "Résumé - Alex Fracazo Product Designer",
    description:
      "The résumé of Alex Fracazo - product designer and front-end engineer based in Melbourne. Experience at GitLab, Hireup, Qantas and more.",
    images: ["/images/opengraph.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Résumé - Alex Fracazo Product Designer",
    description:
      "The résumé of Alex Fracazo - product designer and front-end engineer based in Melbourne. Experience at GitLab, Hireup, Qantas and more.",
    images: ["/images/opengraph.jpg"],
  },
};

const RESUME_PDF = "/files/resume_alexfracazo_2026_ats.pdf";

const experience = [
  {
    company: "GitLab",
    href: "/case-studies/gitlab",
    role: "Senior Product Designer",
    context:
      "Sole designer, Knowledge team, reporting to the Senior Director of Product Design.",
    period: "2022 – 2026",
    location: "Remote, global",
    outcome: "+33% adoption · 0 bugs · code in production",
    points: [
      "Led GLQL from research through GA launch: 33% adoption growth, zero bugs, and shipped my own code to production via merge requests.",
      "Led the Wiki UX transformation — shipped the sidebar redesign to production through code contributions and finalised the contextual comments design system now in engineering development.",
      "Ran usability studies and a Qualtrics survey on AI code review that exposed trust and control problems, driving a full product pivot to an author-facing writing assistant.",
    ],
  },
  {
    company: "Hireup",
    href: "/case-studies/bringing-visibility-to-workers-status",
    role: "Principal Product Designer",
    context: "Australia's largest disability support platform.",
    period: "2021 – 2022",
    location: "Sydney",
    outcome: "Connection rate 3% → 5% (+67% relative)",
    points: [
      "Found through data analysis that 39.1% of clients were messaging inactive workers, dragging down platform-wide connection rates.",
      "Designed an availability visibility system across iOS and Android — lifted response rate from 39.1% to 45.8% and drove +46% inactive worker reactivations.",
      "Redesigned the core booking experience, achieving a +12% increase in booking rates.",
    ],
  },
  {
    company: "Arq Group & Outware",
    href: null,
    role: "Team Lead and Lead Product Designer",
    context: null,
    period: "2016 – 2020",
    location: "Sydney",
    outcome: "+70% app downloads · Sydney Design Award",
    points: [
      "Led product design across web, mobile, and wearable for Qantas, Woolworths, and NAB; managed designers and established research practices across teams.",
      "Led the Qantas Entertainment app redesign end-to-end (+70% downloads) and designed the Australian ETA visa app, winner of the Sydney Design Award.",
    ],
  },
  {
    company: "Vodafone",
    href: null,
    role: "Senior Product Designer",
    context: null,
    period: "2015 – 2016",
    location: "Sydney",
    outcome: null,
    points: [
      "Led UX for the self-service team across web and native apps; established user research and testing processes across multiple products.",
    ],
  },
  {
    company: "B2W Digital",
    href: null,
    role: "Senior Product Designer",
    context: "LATAM's largest e-commerce company.",
    period: "2013 – 2015",
    location: "Rio de Janeiro",
    outcome: "1 design system · 3 apps unified",
    points: [
      "Designed a responsive white-label e-commerce platform supporting multiple branded stores; created an internal design system that improved consistency across 3 native apps.",
    ],
  },
];

const skills = [
  {
    label: "Design",
    value:
      "UX research, product strategy, interaction design, design systems, prototyping, iOS and Android",
  },
  {
    label: "Engineering",
    value:
      "Next.js, React, TypeScript, Tailwind CSS, Supabase, Stripe, Vercel, HTML/CSS, Git",
  },
  { label: "AI tools", value: "Claude, Claude Code, Cursor, OpenCode" },
  { label: "Analytics", value: "GA4, Clarity, cohort analysis, A/B testing" },
];

const education = [
  {
    title: "UX Master Certificate (UXMC)",
    detail: "Nielsen Norman Group, 2021 · Interaction, Research, Management",
  },
  { title: "MBA", detail: "d.MBA, 2020" },
  {
    title: "Interaction Design",
    detail: "Faber-Ludens Institute, Brazil · Graphic Design, UNOPAR, Brazil",
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
  "mb-6 text-[12px] font-semibold tracking-[0.09em] text-muted uppercase";

export default function Resume() {
  return (
    <div className="min-h-dvh">
      {/* Back to site */}
      <Link
        href="/"
        className="fixed top-5 left-5 z-50 inline-flex items-center gap-1.5 rounded-full border border-border bg-card/80 px-3 py-1.5 text-[13px] font-medium text-muted no-underline backdrop-blur-md transition-colors hover:border-border hover:text-text hover:no-underline"
      >
        <ArrowLeftIcon size={14} />
        Back
      </Link>

      <main className="mx-auto w-full max-w-[620px] px-6 pt-24 pb-24 max-md:pt-20">
        {/* Header */}
        <header>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/avatar.png"
            alt="Alex Fracazo"
            className="mb-5 h-14 w-14 rounded-full object-cover"
          />
          <h1 className="text-[23px] font-semibold tracking-[-0.01em] text-text">
            Alex Fracazo
          </h1>
          <p className="mt-0.5 text-[15px] text-muted">
            Product Designer &amp; Front-end Engineer
          </p>
          <p className="mt-5 text-[15px] leading-[1.7] text-text-body">
            I design and build end-to-end, from user research to production
            code, using AI-powered tools to move fast without losing craft. Most
            recently I led design for GitLab&rsquo;s Knowledge platform as sole
            designer in an engineering-led group, growing feature adoption 33%
            and contributing code to production.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-2.5">
            <a
              href={RESUME_PDF}
              download
              className="btn btn-primary inline-flex items-center gap-2 px-4 py-2.5 text-sm whitespace-nowrap no-underline hover:no-underline"
            >
              <DownloadIcon size={16} />
              Download résumé (PDF)
            </a>
          </div>

          <p className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[14px] text-muted">
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
            <span className="text-text-body">Melbourne, Australia (UTC+10)</span>
          </p>
        </header>

        {/* Experience */}
        <section className="mt-14 border-t border-border pt-10">
          <h2 className={sectionLabel}>Experience</h2>
          <div className="flex flex-col gap-9">
            {experience.map((job) => (
              <article key={`${job.company}-${job.period}`}>
                <p className="mb-1.5 text-[12.5px] tracking-[0.02em] text-muted">
                  {job.period} · {job.location}
                </p>
                <h3 className="text-[16px] font-semibold text-text">
                  {job.href ? (
                    <Link href={job.href} className="text-brand">
                      {job.company}
                    </Link>
                  ) : (
                    job.company
                  )}
                </h3>
                <p className="mt-0.5 text-[14px] leading-[1.55] text-muted">
                  {job.role}
                  {job.context ? ` — ${job.context}` : ""}
                </p>
                {job.outcome && (
                  <p className="mt-2.5">
                    <span className="inline-flex items-center rounded-full bg-[rgba(59,130,246,0.12)] px-2.5 py-1 text-[12px] font-medium text-brand">
                      {job.outcome}
                    </span>
                  </p>
                )}
                <ul className="mt-2.5 list-disc space-y-1.5 pl-[18px] text-[14px] leading-[1.6] text-text-body">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="mt-8 text-[13px] leading-[1.7] text-muted">
            <span className="font-medium text-text">Earlier —</span>{" "}
            Bem Direto (2012–2013), first designer at Brazil&rsquo;s first real
            estate marketplace for agents · Smartia (2011–2012), Brazil&rsquo;s
            first car insurance comparison platform · Artia (2009–2011), built my
            own UI in Haml, Sass, and Rails · Sitevip (2005–2009), front-end
            coder in a fast-paced agency.
          </p>
        </section>

        {/* Skills */}
        <section className="mt-14 border-t border-border pt-10">
          <h2 className={sectionLabel}>Skills</h2>
          <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
            {skills.map((skill) => (
              <div key={skill.label}>
                <p className="mb-1 text-[11px] font-semibold tracking-[0.06em] text-muted uppercase">
                  {skill.label}
                </p>
                <p className="text-[14px] leading-[1.6] text-text-body">
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
                <span className="text-[14px] font-medium text-text">
                  {item.title}
                </span>
                <span className="text-[13.5px] leading-[1.5] text-muted sm:text-right">
                  {item.detail}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Footer */}
        <footer className="mt-14 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-8 text-[13px] text-muted">
          <span>Updated June 2026 · Melbourne, Australia</span>
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
