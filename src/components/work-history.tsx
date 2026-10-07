import Link from "next/link";
import type { ReactNode } from "react";
import {
  stubs,
  sideProjects,
  work,
  type StubEntry,
  type WorkEntry,
} from "@/content/work";
import { DownloadIcon } from "./icons";
import { LinkedInButton } from "./linkedin-button";
import { WorkRow } from "./work-row";
import { WorkRowCompact } from "./work-row-compact";
import {
  WorkTimeline,
  type Brand,
  type TimelineEmployer,
  type TimelineStop,
} from "./work-timeline";

const RESUME_PDF = "/files/Alex Fracazo - Resume.pdf";

/* Brands on the timeline. Logos are monochrome masks sized by optical
   weight at roughly one cap height; brands with no clean mark are set as
   text instead of a blurry raster. */
const brands = {
  brazil: { name: "Brazil" },
  b2w: { name: "B2W Digital" },
  vodafone: {
    name: "Vodafone",
    logo: { src: "/images/brands/vodafone.png", w: 69, h: 17 },
  },
  woolworths: {
    name: "Woolworths",
    logo: { src: "/images/brands/woolworths.png", w: 60, h: 12 },
  },
  qantas: {
    name: "Qantas",
    logo: { src: "/images/brands/qantas.svg", w: 66, h: 14 },
  },
  telstra: {
    name: "Telstra",
    logo: { src: "/images/brands/telstra.svg", w: 62, h: 17 },
  },
  isentia: {
    name: "Isentia",
    logo: { src: "/images/brands/isentia.png", w: 62, h: 17 },
  },
  homeAffairs: {
    name: "Home Affairs",
    logo: { src: "/images/brands/home-affairs.svg", w: 32, h: 24 },
  },
  beatCovid: {
    name: "Beat Covid-19 Now",
    logo: { src: "/images/brands/beat-covid.png", w: 36, h: 24 },
  },
  yarraTrams: {
    name: "Yarra Trams",
    logo: { src: "/images/brands/yarra-trams.png", w: 71, h: 13 },
  },
  hireup: {
    name: "Hireup",
    logo: { src: "/images/brands/hireup.svg", w: 62, h: 16 },
  },
  gitlab: {
    name: "GitLab",
    logo: { src: "/images/brands/gitlab.svg", w: 69, h: 15 },
  },
  birthguide: { name: "BirthGuide" },
  personal: { name: "Personal", hideMark: true },
} satisfies Record<string, Brand>;

/* One thing I worked on. It is a stop on the timeline (when `label` is set)
   and an entry in the history, which is what the stop jumps to. */
type Entry = {
  id: string;
  brand: Brand;
  /** Short timeline label; omit to keep the entry off the line. */
  label?: string;
  /** Year as shown in the entry's meta line. */
  year: string;
  title: string;
  text?: string;
  /** Screen from the old portfolio decks. `top` crops a tall phone screen
      from its top edge, where the UI is; `contain` shows a wide one whole. */
  image?: { src: string; alt: string; fit?: "contain" | "top" };
  work?: WorkEntry;
  stub?: StubEntry;
};

type Role = {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  /** Short years for the timeline's employer bracket. */
  years: string;
  context?: string;
  /** Newest first, as they read in the history. */
  entries: Entry[];
  /** Short trailing lines, e.g. the team work under Arq. */
  closing?: { title: string; lines: string[] };
  also?: string;
};

/* Newest first. The timeline reads the same list oldest first. */
const roles: Role[] = [
  {
    id: "side-projects",
    company: "Side projects",
    role: "Founder and solo builder",
    period: "2026",
    location: "Melbourne",
    years: "2026",
    entries: [
      {
        id: "flow-prototype",
        brand: brands.personal,
        label: "Flow prototype",
        year: "2026",
        title: "Flow prototype",
        work: work.flow,
      },
      {
        id: "birthguide",
        brand: brands.birthguide,
        label: "Consumer app",
        year: "2026",
        title: "BirthGuide",
        work: work.birthguide,
      },
    ],
  },
  {
    id: "gitlab",
    company: "GitLab",
    role: "Senior Product Designer",
    period: "Nov 2022 – Jul 2026",
    location: "Remote",
    years: "2022–26",
    context:
      "Took GLQL from research to general availability, shipped production code, and mentored designers across the design org.",
    entries: [
      {
        id: "gitlab-wiki",
        brand: brands.gitlab,
        label: "Wiki comments",
        year: "2025",
        title: "Wiki contextual comments",
        work: work.wiki,
      },
      {
        id: "gitlab-pages",
        brand: brands.gitlab,
        label: "Pages",
        year: "2025",
        title: "GitLab Pages",
        work: work.pages,
      },
      {
        id: "glql",
        brand: brands.gitlab,
        label: "GLQL",
        year: "2024",
        title: "GLQL",
        work: work.glql,
      },
      {
        id: "mr-summary",
        brand: brands.gitlab,
        label: "AI summaries",
        year: "2023",
        title: "Merge request summaries",
        work: work.mrSummary,
      },
    ],
  },
  {
    id: "hireup",
    company: "Hireup",
    role: "Principal Product Designer",
    period: "Mar 2021 – Oct 2022",
    location: "Sydney",
    years: "2021–22",
    context:
      "Australia’s largest disability support marketplace. Led design for the iOS and Android apps.",
    entries: [
      {
        id: "hireup-worker-status",
        brand: brands.hireup,
        label: "Worker status",
        year: "2022",
        title: "Worker status",
        work: work.hireup,
      },
    ],
  },
  {
    id: "arq",
    company: "Arq Group and Outware Mobile",
    role: "Forward Deployed Product Designer (Team Lead)",
    period: "Jul 2016 – Jun 2020",
    location: "Sydney",
    years: "2016–20",
    context:
      "Embedded with client product teams to take work from discovery through to launch.",
    entries: [
      {
        id: "yarra-trams",
        brand: brands.yarraTrams,
        label: "Tram displays",
        year: "2020",
        title: "Tram Tracker displays",
        image: {
          src: "/images/work/yarra-trams-display.jpg",
          alt: "A Yarra Trams stop display showing routes and a Grand Prix shuttle notice, beside a tram in Melbourne",
        },
        text: "Service standards for disruption and special-event messages, so people on unfamiliar journeys know what is happening.",
      },
      {
        id: "beat-covid",
        brand: brands.beatCovid,
        label: "Symptom tracker",
        year: "2020",
        title: "Beat Covid-19 Now",
        image: {
          src: "/images/work/beat-covid-screens.jpg",
          alt: "Beat Covid-19 Now app screens: a daily check-in and a live map",
        },
        text: "A daily symptom tracker that maps emerging COVID-19 hotspots for health authorities, designed with a Swinburne professor of global health.",
      },
      {
        id: "eta",
        brand: brands.homeAffairs,
        label: "ETA app",
        year: "2020",
        title: "Electronic Travel Authority app",
        work: work.eta,
      },
      {
        id: "isentia",
        brand: brands.isentia,
        label: "Media app",
        year: "2019",
        title: "Isentia media monitoring app",
        image: {
          src: "/images/work/isentia-feed.jpg",
          alt: "The Isentia app feed of media mentions",
          fit: "top",
        },
        text: "Discovery to launch on iOS and Android in four months, so client teams can act together as a story breaks.",
      },
      {
        id: "telstra",
        brand: brands.telstra,
        label: "Design system",
        year: "2018–2019",
        title: "Telstra design language system",
        image: {
          src: "/images/work/telstra-design-system.jpg",
          alt: "Telstra design language colour and component sheet",
          fit: "top",
        },
        text: "Workshops and guidance so distributed teams across Telstra adopted one system, not just set it up.",
      },
      {
        id: "qantas-chatbot",
        brand: brands.qantas,
        label: "Chatbot",
        year: "2018",
        title: "Qantas concierge chatbot",
        image: {
          src: "/images/work/qantas-chatbot.png",
          alt: "Qantas concierge chatbot conversation screens",
          fit: "contain",
        },
        text: "Resolved 60% of queries on its own and cut live chat waits from 2 hours to 45 minutes.",
      },
      {
        id: "qantas-alexa",
        brand: brands.qantas,
        label: "Alexa skill",
        year: "2017",
        title: "Qantas Alexa skill",
        image: {
          src: "/images/work/qantas-alexa.jpg",
          alt: "An Amazon Echo answering a question about a Qantas flight",
        },
        text: "A voice skill for travel and loyalty, one of 24 launch partners for Alexa in Australia and New Zealand.",
      },
      {
        id: "qantas-entertainment",
        brand: brands.qantas,
        label: "Entertainment",
        year: "2017",
        title: "Qantas Entertainment",
        work: work.qantasEntertainment,
      },
      {
        id: "qantas-app",
        brand: brands.qantas,
        label: "Flagship app",
        year: "2016",
        title: "Qantas app",
        work: work.qantasApp,
      },
      {
        id: "woolworths-driver",
        brand: brands.woolworths,
        label: "Driver app",
        year: "2016",
        title: "Woolworths driver app",
        image: {
          src: "/images/work/woolworths-driver.png",
          alt: "Woolworths driver app dashboard with the next delivery",
          fit: "top",
        },
        text: "Replaced PDAs and paper for delivery drivers, with geofencing to cut wrong deliveries.",
      },
    ],
    closing: {
      title: "Leading teams",
      lines: [
        "Quarterly hackathons with Qantas from 2017: 120 ideas explored, more than 20 concepts in production.",
        "Skill Share, a platform that connects designers with experienced colleagues for advice outside formal mentoring.",
        "A career planning tool designers use to assess their skills against their peers and plan their next goals.",
      ],
    },
  },
  {
    id: "vodafone",
    company: "Vodafone",
    role: "Senior Product Designer",
    period: "Jun 2015 – Aug 2016",
    location: "Sydney",
    years: "2015–16",
    entries: [
      {
        id: "mymix",
        brand: brands.vodafone,
        label: "MyMix",
        year: "2015",
        title: "MyMix",
        work: work.mymix,
      },
    ],
  },
  {
    id: "b2w",
    company: "B2W Digital",
    role: "Senior Product Designer",
    period: "Jun 2013 – May 2015",
    location: "Rio de Janeiro",
    years: "2013–15",
    context:
      "Latin America’s largest e-commerce company. Rebuilt the app for iOS 7; Apple featured it and mobile revenue grew ten times the following year.",
    entries: [
      {
        id: "b2w-mobile",
        brand: brands.b2w,
        label: "Mobile apps",
        year: "2013",
        title: "Mobile apps",
        stub: stubs.b2w,
      },
    ],
  },
  {
    id: "brazil",
    company: "Startups in Brazil",
    role: "First designer, co-founder, front-end engineer",
    period: "2005 – 2013",
    location: "Brazil",
    years: "2005–13",
    entries: [
      {
        id: "coursify",
        brand: brands.brazil,
        label: "Coursify.me",
        year: "2012",
        title: "Coursify.me",
        stub: stubs.coursify,
      },
      {
        id: "bem-direto",
        brand: brands.brazil,
        label: "Bem Direto",
        year: "2012",
        title: "Bem Direto",
        stub: stubs.bemDireto,
      },
    ],
    also: "Also Smartia (2011–2012), Brazil’s first car insurance comparison platform · Artia (2009–2011), front-end engineer on Ruby on Rails · Sitevip (2005–2009), front-end coder at an agency.",
  },
];

/* Shorter employer names for the brackets under the line, where a
   one-project employer only has two columns. */
const timelineNames: Record<string, string> = {
  arq: "Arq Group",
  brazil: "Brazil",
  b2w: "B2W",
  "side-projects": "Own work",
};

/* Oldest first for the line. Employers bracket their own run of stops. */
const chronological = [...roles].reverse();
const stops: TimelineStop[] = chronological.flatMap((role) => {
  const onLine = [...role.entries].reverse().filter((entry) => entry.label);
  return onLine.map((entry) => ({
    weight: onLine.length === 1 ? 2 : 1,
    id: entry.id,
    brand: entry.brand,
    label: entry.label!,
    name: `${entry.title}, ${entry.brand.name}, ${entry.year}`,
  }));
});
const employers: TimelineEmployer[] = chronological.map((role) => ({
  name: timelineNames[role.id] ?? role.company,
  years: role.years,
  span: role.entries.filter((entry) => entry.label).length,
}));

/* Same small-caps label the home page uses over its sections. */
const sectionLabel =
  "m-0 mb-3 text-meta font-medium leading-none tracking-[0.06em] text-muted uppercase";

function EntryItem({ entry }: { entry: Entry }) {
  if (entry.work) return <WorkRow {...entry.work} />;
  if (entry.stub) return <WorkRowCompact {...entry.stub} />;
  /* Same grid as WorkRow (text leading, framed 280px thumb trailing) so
     these sit in one rhythm with the case study rows, minus the hover pill:
     there is nowhere further to go. */
  return (
    <div className="grid grid-cols-1 py-5 @min-[600px]:grid-cols-[1fr_280px] @min-[600px]:items-start @min-[600px]:gap-x-8">
      {entry.image && (
        <div className="thumb-frame overflow-hidden rounded-card bg-panel-2 @min-[600px]:col-start-2 @min-[600px]:row-start-1">
          <div className="relative aspect-[16/10] overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={entry.image.src}
              alt={entry.image.alt}
              loading="lazy"
              className={`h-full w-full ${
                entry.image.fit === "contain"
                  ? "object-contain p-3"
                  : "object-cover"
              }`}
            />
          </div>
        </div>
      )}
      <div
        className={`min-w-0 @min-[600px]:col-start-1 @min-[600px]:row-start-1 ${
          entry.image ? "mt-4 @min-[600px]:mt-0" : ""
        }`}
      >
        <p className="m-0 mb-1 text-meta text-muted">
          {entry.brand.name} · {entry.year}
        </p>
        <h3 className="m-0 text-subhead-sm font-semibold text-text">
          {entry.title}
        </h3>
        {entry.text && (
          <p className="m-0 mt-1 text-body leading-[1.3] text-text-body">
            {entry.text}
          </p>
        )}
      </div>
    </div>
  );
}

function RoleSection({ role }: { role: Role }) {
  return (
    <section
      id={role.id}
      aria-labelledby={`${role.id}-title`}
      className="@container scroll-mt-6"
    >
      <p className="m-0 mb-1 text-meta text-muted">
        {role.period} · {role.location}
      </p>
      <h2 id={`${role.id}-title`} className="h2 m-0">
        {role.company}
      </h2>
      <p className="m-0 mt-1 text-body text-text-body">{role.role}</p>
      {role.context && (
        <p className="m-0 mt-3 max-w-[620px] text-body text-text-body">
          {role.context}
        </p>
      )}

      <ul role="list" className="m-0 mt-5 flex list-none flex-col gap-1 p-0">
        {role.entries.map((entry) => (
          /* The anchor sits on a wrapper that bleeds like the rows' hover
             pill, so the arrival flash frames the whole entry. */
          <li key={entry.id} id={entry.id} className="work-entry -mx-5 px-5">
            <EntryItem entry={entry} />
          </li>
        ))}
      </ul>

      {role.closing && (
        <div className="mt-6">
          <h3 className={sectionLabel}>{role.closing.title}</h3>
          <ul className="m-0 max-w-[620px] list-disc space-y-1.5 ps-[18px] text-body text-text-body">
            {role.closing.lines.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
      )}

      {role.also && (
        /* Its own anchor, so links to roles named only here (Smartia,
           Sitevip) land on this line, not the top of the section. */
        <p
          id={`${role.id}-also`}
          className="work-entry m-0 mt-4 -mx-5 max-w-[660px] px-5 py-2 text-meta text-muted"
        >
          {role.also}
        </p>
      )}

      {role.id === "side-projects" && (
        <ul role="list" className="m-0 mt-4 flex list-none flex-col gap-3 p-0">
          {sideProjects.map((project) => (
            <li key={project.title} className="max-w-[620px]">
              <a
                href={project.links[0].href}
                target="_blank"
                rel="noopener"
                className="text-body font-medium text-text no-underline hover:text-brand hover:no-underline"
              >
                {project.title}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              <span className="text-body text-text-body">
                {" "}
                {project.description}
              </span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

/**
 * The work history: a timeline of every project across the top, then each
 * role, newest first, with its work inline. A stop on the line jumps to its
 * entry. Laid out on the home page's column and type, not as a résumé; the
 * PDF carries the full résumé.
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
        <p className="m-0 max-w-[620px] text-body text-text-body">
          Twenty years of taking new ideas from zero to one, from Brazil&rsquo;s
          first real estate marketplace to GitLab.
        </p>
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

      <div className="mx-auto w-full max-w-home">
        <WorkTimeline stops={stops} employers={employers} />
      </div>

      <div className="mx-auto flex w-full max-w-home flex-col gap-22">
        {roles.map((role) => (
          <RoleSection key={role.id} role={role} />
        ))}
      </div>

      {footer}
    </>
  );
}
