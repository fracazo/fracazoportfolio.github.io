import type { Metadata } from "next";
import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { SiteFooter } from "@/components/site-footer";
import { DownloadIcon, ExternalLinkIcon } from "@/components/icons";

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
    role: "Senior Product Designer",
    context:
      "Sole designer, Knowledge team, reporting to the Senior Director of Product Design.",
    period: "2022–2026",
    location: "Remote, global",
    outcome: "+33% adoption · 0 bugs · code in production",
    points: [
      "Led GLQL from research through GA launch: 33% adoption growth, zero bugs, and shipped my own code to production via merge requests.",
      "Led the Wiki UX transformation: shipped the sidebar redesign to production through code contributions and finalised the contextual comments design system now in engineering development, positioning GitLab Wiki against Confluence.",
      "Ran usability studies and a Qualtrics survey on AI code review features that exposed trust and control problems. The findings drove a full product pivot — the team turned off live AI summary features and shipped an author-facing writing assistant instead.",
    ],
  },
  {
    company: "Hireup",
    role: "Principal Product Designer",
    context: "Australia's largest disability support platform.",
    period: "2021–2022",
    location: "Sydney",
    outcome: "Connection rate 3% → 5% (+67% relative)",
    points: [
      "Identified through data analysis that 39.1% of clients were messaging inactive workers, dragging down platform-wide connection rates.",
      "Designed an availability visibility system across iOS and Android, validated through lean research and cohort experiments in Sydney and Melbourne. Lifted response rate from 39.1% to 45.8% and drove +46% inactive worker reactivations.",
      "Redesigned the core booking experience, achieving a +12% increase in booking rates.",
    ],
  },
  {
    company: "Arq Group & Outware",
    role: "Team Lead and Lead Product Designer",
    context: null,
    period: "2016–2020",
    location: "Sydney",
    outcome: "+70% app downloads · Sydney Design Award",
    points: [
      "Led product design across web, mobile, and wearable for Qantas, Woolworths, and NAB; managed designers and established research practices across teams.",
      "Led the Qantas Entertainment app redesign end-to-end, increasing downloads +70%. Designed the Australian ETA visa app, winner of the Sydney Design Award.",
    ],
  },
  {
    company: "Vodafone",
    role: "Senior Product Designer",
    context: null,
    period: "2015–2016",
    location: "Sydney",
    outcome: null,
    points: [
      "Led UX for the self-service team across web and native apps; established user research and testing processes across multiple products.",
    ],
  },
  {
    company: "B2W Digital",
    role: "Senior Product Designer",
    context: "LATAM's largest e-commerce company.",
    period: "2013–2015",
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
    detail:
      "Nielsen Norman Group, 2021 · Interaction, Research, Management",
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

export default function Resume() {
  return (
    <AppShell>
      {/* Header */}
      <section
        aria-labelledby="resume-title"
        className="mx-auto w-full max-w-[640px]"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/avatar.png"
          alt="Alex Fracazo"
          className="mt-[168px] mb-8 h-[60px] w-[60px] rounded-full object-cover max-md:mt-14"
        />
        <p className="mb-4 flex items-start gap-2 font-mono text-[13px] text-balance text-muted">
          <span className="mt-[7px] h-2 w-2 flex-none rounded-full bg-[#34d399] shadow-[0_0_0_3px_rgba(52,211,153,0.15)]" />
          Available for design roles &amp; contract work · Melbourne or remote
          (UTC+10)
        </p>
        <h1 id="resume-title" className="h1 mb-2">
          Alex Fracazo
        </h1>
        <p className="text-lg font-medium text-text">
          Product Designer &amp; Front-end Engineer
        </p>
        <p className="mt-4 text-lg leading-[1.6] text-text-body">
          I design and build end-to-end, from user research to production code,
          using AI-powered tools to move fast without losing craft. Most
          recently I led design for GitLab&rsquo;s Knowledge platform as sole
          designer in an engineering-led group, growing feature adoption 33% and
          contributing code to production.
        </p>
        <div className="mt-6 flex flex-wrap gap-2.5">
          <a
            href={RESUME_PDF}
            download
            className="btn btn-primary inline-flex items-center gap-2 px-4 py-2.5 text-sm whitespace-nowrap no-underline hover:no-underline"
          >
            <DownloadIcon size={16} />
            Download résumé
          </a>
          <a
            href="mailto:fracazo@duck.com"
            className="btn btn-ghost inline-flex items-center gap-2 px-4 py-2.5 text-sm whitespace-nowrap no-underline hover:no-underline"
          >
            Email me
          </a>
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
        <p className="mt-5 text-sm text-muted">
          Prefer the PDF?{" "}
          <a href={RESUME_PDF} target="_blank" rel="noopener">
            View it in your browser
          </a>
          .
        </p>
      </section>

      {/* Experience */}
      <section
        aria-labelledby="experience-title"
        className="mx-auto w-full max-w-[640px]"
      >
        <h2 id="experience-title" className="h2 mb-6">
          Experience
        </h2>
        <div className="flex flex-col gap-6">
          {experience.map((job) => (
            <article
              key={`${job.company}-${job.period}`}
              className="border-t border-border pt-6"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-[18px] font-semibold text-text">
                  {job.company}
                </h3>
                <span className="font-mono text-[13px] whitespace-nowrap text-muted">
                  {job.period} · {job.location}
                </span>
              </div>
              <p className="mt-1 text-[15px] text-muted">
                {job.role}
                {job.context ? ` — ${job.context}` : ""}
              </p>
              {job.outcome && (
                <p className="mt-3">
                  <span className="inline-flex items-center rounded-full bg-[rgba(59,130,246,0.12)] px-3 py-1 text-[12.5px] font-medium text-brand">
                    {job.outcome}
                  </span>
                </p>
              )}
              <ul className="mt-3 list-disc space-y-2 pl-5 text-[15px] leading-[1.6] text-text-body">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mt-6 text-[14px] leading-[1.7] text-muted">
          <span className="font-medium text-text">Earlier:</span>{" "}
          Bem Direto (2012–2013), first designer at Brazil&rsquo;s first real
          estate
          marketplace for agents · Smartia (2011–2012), Brazil&rsquo;s first car
          insurance comparison platform · Artia (2009–2011), designed and
          implemented my own UI in Haml, Sass, and Rails · Sitevip (2005–2009),
          front-end coder in a fast-paced agency.
        </p>
      </section>

      {/* Skills */}
      <section
        aria-labelledby="skills-title"
        className="mx-auto w-full max-w-[640px]"
      >
        <h2 id="skills-title" className="h2 mb-6">
          Skills
        </h2>
        <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
          {skills.map((skill) => (
            <div key={skill.label}>
              <p className="mb-1.5 text-[11px] font-semibold tracking-[0.06em] text-muted uppercase">
                {skill.label}
              </p>
              <p className="text-[15px] leading-[1.6] text-text-body">
                {skill.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Education & More */}
      <section
        aria-labelledby="education-title"
        className="mx-auto w-full max-w-[640px]"
      >
        <h2 id="education-title" className="h2 mb-4">
          Education &amp; more
        </h2>
        <ul className="m-0 list-none divide-y divide-border p-0">
          {education.map((item) => (
            <li
              key={item.title}
              className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
            >
              <span className="text-[15px] font-medium text-text">
                {item.title}
              </span>
              <span className="text-[14px] leading-[1.5] text-muted sm:text-right">
                {item.detail}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Download CTA */}
      <section
        aria-labelledby="resume-cta-title"
        className="mx-auto w-full max-w-[640px]"
      >
        <div className="rounded-card border border-border bg-panel p-7">
          <h2 id="resume-cta-title" className="h3 mb-2 font-semibold text-text">
            Want a copy to keep?
          </h2>
          <p className="text mt-0 mb-5">
            Download the one-page PDF, or{" "}
            <Link href="/contact">get in touch</Link>{" "}
            if you&rsquo;d like to talk.
          </p>
          <div className="flex flex-wrap gap-2.5">
            <a
              href={RESUME_PDF}
              download
              className="btn btn-primary inline-flex items-center gap-2 px-4 py-2.5 text-sm whitespace-nowrap no-underline hover:no-underline"
            >
              <DownloadIcon size={16} />
              Download résumé
            </a>
            <a
              href="mailto:fracazo@duck.com"
              className="btn btn-ghost inline-flex items-center gap-2 px-4 py-2.5 text-sm whitespace-nowrap no-underline hover:no-underline"
            >
              Email me
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </AppShell>
  );
}
