import Link from "next/link";
import type { ReactNode } from "react";
import {
  stubs,
  sideProjects,
  work,
  type StubEntry,
  type WorkEntry,
} from "@/content/work";
import { CompassIcon, DownloadIcon, LightbulbIcon, UsersIcon } from "./icons";
import { LinkedInButton } from "./linkedin-button";
import { SideProjectList } from "./side-project-list";
import { WorkRow } from "./work-row";
import { WorkRowCompact } from "./work-row-compact";
import { WorkVignette } from "./work-vignette";
import type { WorkVignetteKind } from "./work-vignette-kinds";
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
  /** Year as shown in the meta line. Case studies and stubs show the date
      from their own card instead (see yearsOf). */
  year: string;
  title: string;
  text?: string;
  /** Screen from the old portfolio decks. `contain` shows a wide one whole;
      the default fills the frame. */
  image?: { src: string; alt: string; fit?: "contain" };
  /** Animated scene in place of an image (see WorkVignette). */
  vignette?: WorkVignetteKind;
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
  closing?: {
    title: string;
    lines: { icon: keyof typeof closingIcons; text: string }[];
  };
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
          src: "/images/work/isentia-app.jpg",
          alt: "Two Isentia app screens: the feeds list, and a Telstra news item with its video",
        },
        text: "Discovery to launch on iOS and Android in four months, so client teams can act together as a story breaks.",
      },
      {
        id: "telstra",
        brand: brands.telstra,
        label: "Design system",
        year: "2018–2019",
        title: "Telstra design language system",
        vignette: "telstra",
        text: "The design system was a core pillar of Telstra’s Vision 2022: one visual language across every Telstra app and site. I ran workshops on best practices and team alignment, so distributed teams could adopt the system in their own products.",
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
    ],
    closing: {
      title: "Leading teams",
      lines: [
        {
          icon: "idea",
          text: "Quarterly hackathons with Qantas from 2017: 120 ideas explored, more than 20 concepts in production.",
        },
        {
          icon: "people",
          text: "Skill Share, a platform that connects designers with experienced colleagues for advice outside formal mentoring.",
        },
        {
          icon: "direction",
          text: "A career planning tool designers use to assess their skills against their peers and plan their next goals.",
        },
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

/* The years an entry shows. Case studies and stubs carry their own date
   line ("Qantas · 2017–2018"), so read it from there: one source, so the
   card and the order can never disagree. */
function yearsOf(entry: Entry) {
  const meta = entry.work?.meta ?? entry.stub?.meta;
  return meta ? meta.split("·").pop()!.trim() : entry.year;
}

/* Newest first by the last year shown, then by the later start. Ties keep
   their written order, which follows the month the work happened. */
function sortKey(entry: Entry) {
  const years = yearsOf(entry).match(/\d{4}/g)!.map(Number);
  return [years[years.length - 1], years[0]] as const;
}
for (const role of roles) {
  role.entries.sort((a, b) => {
    const [aEnd, aStart] = sortKey(a);
    const [bEnd, bStart] = sortKey(b);
    return bEnd - aEnd || bStart - aStart;
  });
}

/* Oldest first for the line. Employers bracket their own run of stops.
   `only` limits the line to some roles (the home page's earlier years). */
function timelineFor(only?: string[]) {
  const chronological = [...roles]
    .reverse()
    .filter((role) => !only || only.includes(role.id));
  const stops: TimelineStop[] = chronological.flatMap((role) => {
    const onLine = [...role.entries].reverse().filter((entry) => entry.label);
    return onLine.map((entry) => ({
      weight: onLine.length === 1 ? 2 : 1,
      id: entry.id,
      brand: entry.brand,
      label: entry.label!,
      name: `${entry.title}, ${entry.brand.name}, ${yearsOf(entry)}`,
    }));
  });
  const employers: TimelineEmployer[] = chronological.map((role) => ({
    name: timelineNames[role.id] ?? role.company,
    years: role.years,
    span: role.entries.filter((entry) => entry.label).length,
  }));
  return { stops, employers };
}
const { stops, employers } = timelineFor();

/** The years before Hireup, for the home page's Earlier work. */
export const earlierTimeline = timelineFor([
  "brazil",
  "b2w",
  "vodafone",
  "arq",
]);

/* Icons for the short team lines under a role, in place of bullets. */
const closingIcons = {
  idea: LightbulbIcon,
  people: UsersIcon,
  direction: CompassIcon,
};

/* Same small-caps label the home page uses over its sections. */
const sectionLabel =
  "m-0 mb-3 text-meta font-medium leading-none tracking-[0.06em] text-muted uppercase";

function EntryItem({ entry }: { entry: Entry }) {
  if (entry.work) return <WorkRow {...entry.work} />;
  if (entry.stub) return <WorkRowCompact {...entry.stub} />;
  /* Same grid as WorkRow (text leading, framed 280px thumb trailing) so
     these sit in one rhythm with the case study rows, minus the hover pill:
     there is nowhere further to go. */
  const thumb = entry.vignette ? (
    <WorkVignette kind={entry.vignette} />
  ) : entry.image ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={entry.image.src}
      alt={entry.image.alt}
      loading="lazy"
      className={`h-full w-full ${
        entry.image.fit === "contain"
          ? "object-contain p-1 @min-[600px]:p-3"
          : "object-cover"
      }`}
    />
  ) : null;

  /* Phones: date and title beside a small thumb, the description full
     width below, so the text keeps the whole column and the list stays
     short. From 600px: the WorkRow grid, text leading and a 280px thumb
     trailing, so these sit in one rhythm with the case study rows. The
     thumb spans both rows there; `auto 1fr` keeps the first row to the
     title's height and gives the thumb's extra height to the second, so
     the description sits right under the title. */
  return (
    /* work-row-compact: the hook WorkVignette listens on for row hover. */
    <div
      className={`work-row-compact grid py-5 @min-[600px]:grid-cols-[1fr_280px] @min-[600px]:grid-rows-[auto_1fr] @min-[600px]:gap-x-8 ${
        thumb ? "grid-cols-[minmax(0,1fr)_88px] gap-x-4" : "grid-cols-1"
      }`}
    >
      {thumb && (
        <div className="thumb-frame col-start-2 row-start-1 self-start overflow-hidden rounded-[8px] bg-panel-2 @min-[600px]:row-span-2 @min-[600px]:rounded-card">
          <div className="relative aspect-[16/10] overflow-hidden">{thumb}</div>
        </div>
      )}
      <div className="col-start-1 row-start-1 min-w-0 self-center @min-[600px]:self-start">
        <p className="m-0 mb-1 text-meta text-muted">
          {entry.brand.name} · {yearsOf(entry)}
        </p>
        <h3 className="m-0 text-subhead-sm font-semibold text-text">
          {entry.title}
        </h3>
      </div>
      {entry.text && (
        <p className="col-[1/-1] row-start-2 m-0 mt-2 text-body leading-[1.3] text-text-body @min-[600px]:col-[1] @min-[600px]:mt-1">
          {entry.text}
        </p>
      )}
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
          <ul
            role="list"
            className="m-0 flex max-w-[620px] list-none flex-col gap-4 p-0"
          >
            {role.closing.lines.map((line) => {
              const Icon = closingIcons[line.icon];
              return (
                <li key={line.text} className="flex items-start gap-3.5">
                  {/* The text's leading above the cap height is trimmed, so
                      the tops of its capitals sit level with the tile's top
                      edge: tile and text start on one line. */}
                  <span className="flex size-8 flex-none items-center justify-center rounded-lg bg-panel-2 text-brand">
                    <Icon size={16} />
                  </span>
                  <span className="block text-body text-text-body [text-box:trim-start_cap_alphabetic]">
                    {line.text}
                  </span>
                </li>
              );
            })}
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
        <div className="mt-8">
          <h3 className={sectionLabel}>Also built</h3>
          <SideProjectList items={sideProjects} />
        </div>
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
        <h1 className="h1">Work history</h1>
        {/* Same 12px under the title as the home hero: pull against .h1's
            32px bottom margin. */}
        <p className="-mt-5 mb-0 max-w-[620px] text-body text-text-body">
          Taking new ideas from zero to one: Brazil&rsquo;s first real estate
          marketplace, a Qantas app featured at Apple&rsquo;s WWDC, a government
          visa app built during COVID, and AI features at GitLab.
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

      {/* Phones leave the timeline out (it needs the width); hiding the
          wrapper too keeps the page's section gap from doubling. */}
      <div className="mx-auto w-full max-w-home max-md:hidden">
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
