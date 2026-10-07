import Link from "next/link";
import type { ReactNode } from "react";
import { stubs, sideProjects, work, type StubEntry, type WorkEntry } from "@/content/work";
import { Chip } from "./chip";
import { DownloadIcon, ExternalLinkIcon } from "./icons";
import { LinkedInButton } from "./linkedin-button";
import { WorkHistoryNav } from "./work-history-nav";
import { WorkRow } from "./work-row";
import { WorkRowCompact } from "./work-row-compact";

const RESUME_PDF = "/files/Alex Fracazo - Resume.pdf";

/* One-line facts under the summary. Mirrors the Focus / Stack / Languages
   strip on the PDF so both versions lead with the same framing. */
const facts = [
  {
    label: "Focus",
    value: "Zero to one · AI products · Developer tools · Design systems",
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

/* A client engagement inside a forward-deployed role, with the case studies
   that came out of it, so each study sits under the client it was for. */
type Client = {
  name: string;
  project: string;
  text: string;
  work?: WorkEntry[];
};

type Job = {
  /** Anchor for the jump nav. */
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  context?: string;
  outcome?: string;
  points?: string[];
  clients?: Client[];
  /** Role-wide line that reads after the client entries. */
  closing?: string;
  work?: WorkEntry[];
  stubs?: StubEntry[];
  /** Short trailing line for roles too small for an entry of their own. */
  also?: string;
};

const jobs: Job[] = [
  {
    id: "gitlab",
    company: "GitLab",
    role: "Senior Product Designer",
    period: "Nov 2022 – Jul 2026",
    location: "Remote",
    outcome: "+33% weekly users · Code in production",
    points: [
      "Took GLQL, GitLab’s in-product query language for tracking work, from a tool made for technical users to one that works for everyone, from research to general availability. Interviewed customers, scoped with product and engineering, and shipped production code. Grew weekly users from 600 to 801 by surfacing it inside the editor at the moment of writing.",
      "Found site status, deployment and DNS problems in GitLab Pages through my own UX scorecards, designed the fix, and shipped it through the Paper Cuts team as eleven merge requests in one release.",
      "Ran surveys and usability studies on AI code review that exposed trust and control problems, then reframed the product around the author. The resulting writing assistant shipped to general availability and is still in the product.",
      "Set up an AI-assisted research and prototyping pipeline, from anonymised product data and interview guides to working responsive prototypes. Mentored designers across the design org and ran critiques.",
    ],
    work: [work.glql, work.wiki, work.pages, work.mrSummary],
  },
  {
    id: "hireup",
    company: "Hireup",
    role: "Principal Product Designer",
    period: "Mar 2021 – Oct 2022",
    location: "Sydney",
    context:
      "Australia’s largest disability support marketplace. Led design for the iOS and Android apps.",
    outcome: "Connection rate 3% → 5% · Booking rate +12%",
    points: [
      "Found that 39.1% of clients were messaging inactive workers, then introduced a worker availability system across iOS and Android with engineering. Response rate rose from 39.1% to 45.8%, and 46% more inactive workers came back.",
      "Streamlined the core booking flow, lifting booking rate 12%.",
    ],
    work: [work.hireup],
  },
  {
    id: "arq",
    company: "Arq Group and Outware Mobile",
    role: "Forward Deployed Product Designer (Team Lead)",
    period: "Jul 2016 – Jun 2020",
    location: "Sydney",
    context:
      "Embedded with client product teams to take work from discovery through to launch.",
    outcome: "Tripled ad revenue · Sydney Design Awards Gold",
    clients: [
      {
        name: "Department of Home Affairs",
        project: "Electronic Travel Authority app, zero to one",
        text: "Investigated visa processing and data accuracy with Home Affairs and SITA staff, then reframed the problem from form design to data capture. Designed an iOS and Android flow that reads the passport chip over NFC and captures a live face image, removing manual entry.",
        work: [work.eta],
      },
      {
        name: "Qantas",
        project: "Entertainment app",
        text: "Redesigned the app to work before and after the flight, extending it beyond the on-board network. Tripled advertising revenue from partner offers, and raised the App Store rating from 2.1 to 4.5.",
        work: [work.qantasEntertainment, work.qantasApp],
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
    closing: "Mentored designers and set up research practices across teams.",
  },
  {
    id: "vodafone",
    company: "Vodafone",
    role: "Senior Product Designer",
    period: "Jun 2015 – Aug 2016",
    location: "Sydney",
    points: [
      "Created MyMix, a personalised prepaid plan builder, and set up research and testing practices across the self-service team on web and native apps.",
    ],
    work: [work.mymix],
  },
  {
    id: "b2w",
    company: "B2W Digital",
    role: "Senior Product Designer",
    period: "Jun 2013 – May 2015",
    location: "Rio de Janeiro",
    context: "Latin America’s largest e-commerce company.",
    outcome: "Featured by Apple · Mobile revenue 10x",
    points: [
      "Found in a two-minute conversation with a shopper why the app barely sold: it only took credit cards, and many customers paid by boleto. Worked with the web team to bring boleto into the app.",
      "Rebuilt the app for iOS 7, the first native app in Brazil designed for it. Apple featured it, and mobile revenue grew ten times over the following year.",
      "Built a responsive white-label platform for several store brands, and moved three native apps onto one design system.",
    ],
    stubs: [stubs.b2w],
  },
  {
    id: "brazil",
    company: "Startups in Brazil",
    role: "First designer, co-founder, front-end engineer",
    period: "2005 – 2013",
    location: "Brazil",
    context:
      "First versions of products Brazil had no local reference for: a real estate marketplace for agents, an online course platform, and a car insurance comparison site.",
    stubs: [stubs.bemDireto, stubs.coursify],
    also:
      "Also Smartia (2011–2012), Brazil’s first car insurance comparison platform · Artia (2009–2011), front-end engineer on Ruby on Rails · Sitevip (2005–2009), front-end coder at an agency.",
  },
];

const skills = [
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
  {
    label: "Front end",
    value: "TypeScript, JavaScript, React, Next.js, Tailwind CSS, HTML, CSS",
  },
  {
    label: "AI",
    value:
      "Anthropic SDK, Claude Code, Cursor, Model Context Protocol (MCP), structured outputs, evals and guardrails",
  },
  {
    label: "Platform",
    value: "Supabase, PostgreSQL, Stripe, Vercel, Git",
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

/* The jump nav's stops, in page order. */
const navItems = [
  ...jobs.map((job) => ({
    id: job.id,
    label: job.id === "arq" ? "Qantas & Gov" : job.id === "brazil" ? "Brazil" : job.company,
  })),
  { id: "side-projects", label: "Side projects" },
  { id: "skills", label: "Skills" },
];

/* Same small-caps label the home page uses over its sections. */
const sectionLabel =
  "m-0 mb-4 text-meta font-medium leading-none tracking-[0.06em] text-muted uppercase";

function chips(outcome?: string) {
  if (!outcome) return null;
  return (
    <div className="mt-3 flex flex-wrap gap-1.5">
      {outcome
        .split("·")
        .map((part) => part.trim())
        .filter(Boolean)
        .map((metric) => (
          <Chip key={metric}>{metric}</Chip>
        ))}
    </div>
  );
}

function WorkList({ items, stubItems }: { items?: WorkEntry[]; stubItems?: StubEntry[] }) {
  if (!items?.length && !stubItems?.length) return null;
  return (
    <ul role="list" className="m-0 mt-5 flex list-none flex-col gap-1 p-0">
      {items?.map((entry) => (
        <li key={entry.href}>
          <WorkRow {...entry} />
        </li>
      ))}
      {stubItems?.map((entry) => (
        <li key={entry.stub}>
          <WorkRowCompact {...entry} />
        </li>
      ))}
    </ul>
  );
}

/**
 * One role on the timeline. On a wide column the facts (when, where, what
 * title, what moved) hold a sticky left rail while the story and its case
 * studies scroll past on the right, so the reader never loses which job
 * they are in. Narrow columns stack the two.
 */
function JobEntry({ job }: { job: Job }) {
  return (
    <article
      id={job.id}
      className="grid scroll-mt-20 grid-cols-1 gap-x-10 gap-y-4 border-t border-border pt-10 @min-[760px]:grid-cols-[minmax(0,15rem)_minmax(0,1fr)]"
    >
      <header className="@min-[760px]:sticky @min-[760px]:top-20 @min-[760px]:self-start">
        <p className="m-0 mb-1 text-meta text-muted">
          {job.period} · {job.location}
        </p>
        <h2 className="m-0 text-subhead font-semibold text-text">{job.company}</h2>
        <p className="m-0 mt-1 text-body text-text-body">{job.role}</p>
        {chips(job.outcome)}
      </header>

      <div className="@container min-w-0">
        {job.context && (
          <p className="m-0 text-body text-text-body">{job.context}</p>
        )}
        {job.points && (
          <ul
            className={`m-0 list-disc space-y-2 ps-[18px] text-body text-text-body ${
              job.context ? "mt-3" : ""
            }`}
          >
            {job.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        )}
        {job.clients && (
          <ul role="list" className="m-0 mt-6 flex list-none flex-col gap-7 p-0">
            {job.clients.map((client) => (
              <li key={client.name}>
                <h3 className="m-0 text-subhead-sm font-semibold text-text">
                  {client.name}
                </h3>
                <p className="m-0 mt-0.5 text-meta text-muted">{client.project}</p>
                <p className="m-0 mt-2 text-body text-text-body">{client.text}</p>
                <WorkList items={client.work} />
              </li>
            ))}
          </ul>
        )}
        {job.closing && (
          <p className="m-0 mt-6 text-body text-text-body">{job.closing}</p>
        )}
        <WorkList items={job.work} stubItems={job.stubs} />
        {job.also && (
          <p className="m-0 mt-5 text-meta text-muted">{job.also}</p>
        )}
      </div>
    </article>
  );
}

/**
 * The work history: every role, newest first, with its case studies and
 * short write-ups inline, then side projects, skills and education. The home
 * page keeps only the highlights; this is where everything else lives.
 */
export function WorkHistory({ footer }: { footer?: ReactNode }) {
  return (
    <>
      <header className="mx-auto w-full max-w-home pt-24 max-md:pt-20">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span className="breadcrumb-sep"> &gt; </span>
          <span>Work history</span>
        </nav>
        <h1 className="h1">Work history</h1>
        <div className="flex max-w-[620px] flex-col gap-3 text-body text-text-body">
          <p className="m-0">
            Product designer who takes new ideas from zero to one, from
            research through to a working product.
          </p>
          <p className="m-0">
            Built at GitLab, Qantas, Vodafone and Telstra. Took GitLab&rsquo;s
            in-product query language from research to launch, grew weekly
            users 33%, and shipped my own code to production. Four years
            forward deployed into enterprise and federal government teams.
          </p>
          <p className="m-0">Founded BirthGuide, live with paying users, built solo.</p>
        </div>

        {/* Two-column grid so every value starts on the same line and the
            list scans down one edge. */}
        <dl className="mt-5 grid max-w-[620px] grid-cols-[max-content_1fr] gap-x-3 gap-y-1.5 text-meta text-muted">
          {facts.map((fact) => (
            <div key={fact.label} className="contents">
              <dt className="font-medium text-text">{fact.label}</dt>
              <dd className="m-0">{fact.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-6 flex flex-wrap items-center gap-2.5">
          <a
            href={RESUME_PDF}
            download
            className="btn btn-primary inline-flex items-center justify-center gap-2 px-4 py-2.5 whitespace-nowrap no-underline hover:no-underline max-sm:w-full"
          >
            <DownloadIcon size={16} />
            Download résumé (PDF)
          </a>
          <LinkedInButton secondary />
        </div>
      </header>

      <div className="@container mx-auto w-full max-w-home">
        <WorkHistoryNav items={navItems} />

        <div className="flex flex-col gap-14">
          {jobs.map((job) => (
            <JobEntry key={job.id} job={job} />
          ))}

          <section
            id="side-projects"
            aria-labelledby="side-projects-title"
            className="grid scroll-mt-20 grid-cols-1 gap-x-10 gap-y-4 border-t border-border pt-10 @min-[760px]:grid-cols-[minmax(0,15rem)_minmax(0,1fr)]"
          >
            <header className="@min-[760px]:sticky @min-[760px]:top-20 @min-[760px]:self-start">
              <p className="m-0 mb-1 text-meta text-muted">2026</p>
              <h2
                id="side-projects-title"
                className="m-0 text-subhead font-semibold text-text"
              >
                Side projects
              </h2>
              <p className="m-0 mt-1 text-body text-text-body">Designed and built solo</p>
            </header>
            <div className="@container min-w-0">
              <ul role="list" className="m-0 flex list-none flex-col gap-1 p-0">
                {[work.birthguide, work.flow].map((entry) => (
                  <li key={entry.href}>
                    <WorkRow {...entry} />
                  </li>
                ))}
              </ul>
              <ul role="list" className="m-0 mt-4 flex list-none flex-col gap-1 p-0">
                {sideProjects.map((project) => (
                  <li key={project.title}>
                    <a
                      href={project.links[0].href}
                      target="_blank"
                      rel="noopener"
                      className="group -mx-5 block rounded-card px-5 py-4 no-underline transition-colors duration-200 hover:bg-panel-2 hover:no-underline"
                    >
                      <span className="flex items-baseline justify-between gap-4">
                        <span className="inline-flex items-center gap-1.5 text-body font-semibold text-text transition-colors duration-200 group-hover:text-brand">
                          {project.title}
                          <span className="sr-only"> (opens in a new tab)</span>
                          <ExternalLinkIcon size={13} className="opacity-70" />
                        </span>
                        <span className="flex-none text-meta whitespace-nowrap text-muted">
                          {project.meta}
                        </span>
                      </span>
                      <span className="mt-1 block text-body text-text-body">
                        {project.description}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section
            id="skills"
            aria-labelledby="skills-title"
            className="grid scroll-mt-20 grid-cols-1 gap-x-10 gap-y-4 border-t border-border pt-10 @min-[760px]:grid-cols-[minmax(0,15rem)_minmax(0,1fr)]"
          >
            <h2 id="skills-title" className="m-0 text-subhead font-semibold text-text">
              Skills and education
            </h2>
            <div className="min-w-0">
              <dl className="m-0 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
                {skills.map((skill) => (
                  <div key={skill.label}>
                    <dt className="text-body font-medium text-text">{skill.label}</dt>
                    <dd className="m-0 mt-0.5 text-body text-text-body">{skill.value}</dd>
                  </div>
                ))}
              </dl>
              <h3 className={`${sectionLabel} mt-10`}>Education and publications</h3>
              <ul className="m-0 list-none divide-y divide-border p-0">
                {education.map((item) => (
                  <li
                    key={item.detail}
                    className="flex flex-col gap-0.5 py-3.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                  >
                    <span className="text-meta font-medium text-text">{item.title}</span>
                    <span className="text-meta text-muted sm:text-right">{item.detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>

      {footer}
    </>
  );
}
