import type { Award } from "@/components/award-badge";
import type { WorkVignetteKind } from "@/components/work-vignette-kinds";

/* One entry per piece of work, shared by the home page and /work so a title,
   tagline or metric only ever changes in one place. */

export type WorkEntry = {
  href: string;
  /** Context line above the title, e.g. "Hireup · 2022". */
  meta: string;
  title: string;
  tagline: string;
  /** "·"-separated facts; each becomes a Chip. */
  outcome?: string;
  vignette?: WorkVignetteKind;
  image?: { src: string; alt: string };
  video?: { src: string };
  award?: Award;
};

/* Stub entries open a short write-up in the side panel instead of a route. */
export type StubEntry = {
  stub: string;
  meta: string;
  title: string;
  tagline: string;
  metric?: string;
  vignette?: WorkVignetteKind;
  image?: { src: string; alt: string };
  video?: { src: string };
};

export const work = {
  glql: {
    href: "/work/glql",
    meta: "GitLab · 2024–2025",
    title: "GLQL: Embedded Views for Work Tracking",
    tagline:
      "Making a query language work for people who had only ever used filters, through research that changed the team’s direction.",
    outcome: "+33% adoption post-GA",
    vignette: "glql",
  },
  wiki: {
    href: "/work/wiki-contextual-comments",
    meta: "GitLab · 2025",
    title: "GitLab Wiki: Contextual Comments",
    tagline:
      "Tying a discussion to the exact line it refers to, closing a competitive gap against Confluence and Notion.",
    vignette: "wiki",
  },
  pages: {
    href: "/work/gitlab-pages",
    meta: "GitLab · 2025",
    title: "Making Site Status Visible in GitLab Pages",
    tagline:
      "Status spread across screens and DNS hidden until something broke. With no delivery team on Pages, I took the fix through Paper Cuts and shipped it in one release.",
    outcome: "Monetisation foundation · Cross-team delivery",
    vignette: "pages",
  },
  mrSummary: {
    href: "/work/mr-summary-ai",
    meta: "GitLab · 2023–2024",
    title: "Summarize Merge Requests with AI",
    tagline:
      "Finding where AI summaries earn trust in code review, including the conviction to remove what didn’t work.",
    outcome: "3 shipped iterations",
    vignette: "mr-summary",
  },
  hireup: {
    href: "/work/bringing-visibility-to-workers-status",
    meta: "Hireup · 2022",
    title: "Worker Status Visibility",
    tagline:
      "Reducing uncertainty in a two-sided marketplace by making availability honest.",
    outcome: "+12% bookings · Connection rate 3% → 5%",
    vignette: "hireup",
  },
  eta: {
    href: "/work/eta-app",
    meta: "Department of Home Affairs · 2020–2021",
    title: "Reducing Friction in Government Visa Applications",
    tagline:
      "Automating data entry to improve completion and reduce user effort in a high-stakes service.",
    outcome: "From 0 to 1",
    image: {
      src: "/images/62dc274f132cbe543717e126_work1-p-2000.jpg",
      alt: "The Australian Government ETA visa app",
    },
    video: { src: "/videos/eta-face-scan.mp4" },
    award: { title: "Sydney Design Awards", detail: "Gold 2021" },
  },
  qantasEntertainment: {
    href: "/work/qantas-entertainment-app",
    meta: "Qantas · 2017–2018",
    title: "A Unified In-flight Entertainment Experience",
    tagline:
      "Making the entertainment app useful before and after the flight, not just on board.",
    outcome: "Ad revenue 225k → 675k",
    image: {
      src: "/images/62dc26d29e21732abffdaacd_work4-p-1080.png",
      alt: "Qantas Entertainment App",
    },
    video: { src: "/videos/qantas-entertainment-spotlights.mp4" },
  },
  qantasApp: {
    href: "/work/qantas-app",
    meta: "Qantas · 2016",
    title: "Increasing App Adoption Through Entertainment",
    tagline:
      "Using entertainment features to pull travellers into the main Qantas app.",
    outcome: "+70% downloads",
    image: {
      src: "/images/62dc1d83920df32baae28d6b_work2-p-1080.png",
      alt: "Qantas Airways App",
    },
    video: { src: "/videos/qantas-app-kangaroo.mp4" },
  },
  mymix: {
    href: "/work/vodafone-mymix",
    meta: "Vodafone · 2015–2016",
    title: "MyMix",
    tagline:
      "Letting prepaid customers build their own recharge, in four taps.",
    outcome: "72 combinations · 4 taps",
    vignette: "mymix",
  },
  birthguide: {
    href: "/work/birthguide",
    meta: "Founder · 2026",
    title: "BirthGuide",
    tagline:
      "Birth plans had to be printed. I made one that lives online and goes to the hospital on your phone.",
    outcome: "Live with paying users · Sole builder",
    vignette: "birthguide",
  },
  flow: {
    href: "/tools/flow-prototype",
    meta: "Personal project · 2026",
    title: "Flow prototype",
    tagline:
      "Every screen your coding agent builds, connected on one canvas you can zoom in and out of. Works on any device.",
    outcome: "Claude Code skill",
    vignette: "flow",
  },
} satisfies Record<string, WorkEntry>;

export const stubs = {
  b2w: {
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
  bemDireto: {
    stub: "stub:bem-direto",
    vignette: "bemdireto",
    meta: "First designer · 2012–2013",
    title: "Bem Direto",
    tagline:
      "Brazil's first real estate marketplace for agents, designed from scratch.",
    metric: "From 0 to 1",
  },
  coursify: {
    stub: "stub:coursify",
    vignette: "coursify",
    meta: "Co-founder · 2012–2014",
    title: "Coursify.me",
    tagline:
      "An online course platform: create courses, tutorials and ebooks, and sell them.",
    metric: "50,000 students",
  },
} satisfies Record<string, StubEntry>;

/* Side projects with no case study or tool page: one line each on what it
   is and why it exists, so no row is a bare name. */
export type SideProject = {
  title: string;
  meta: string;
  description: string;
  links: { href: string; label: string }[];
};

export const sideProjects: SideProject[] = [
  {
    title: "Agent-native design system",
    meta: "npm package · 2026",
    description:
      "When a team ships faster, design review is the first thing to break. This moves the quality bar into lint rules and components that people and AI agents build from alike.",
    links: [{ href: "https://github.com/fracazo/design-system", label: "GitHub" }],
  },
  {
    title: "Birth Plans",
    meta: "Web app · 2026",
    description:
      "A focused global birth-plan builder, kept separate from BirthGuide so one product stays a single-purpose tool.",
    links: [{ href: "https://birthplans.app", label: "Site" }],
  },
  {
    title: "Triage Agent",
    meta: "Support-triage agent · 2026",
    description:
      "A support-triage agent where the model proposes and code decides, with escalation when confidence is low.",
    links: [{ href: "https://github.com/fracazo/triage-agent", label: "GitHub" }],
  },
  {
    title: "Contrast Lab",
    meta: "Raycast extension · 2026",
    description: "WCAG 2 and APCA contrast checking, published to the Raycast store.",
    links: [
      { href: "https://www.raycast.com/fracazo/contrast-lab", label: "Raycast Store" },
    ],
  },
  {
    title: "Don Draper",
    meta: "Claude Code skill · 2026",
    description:
      "A creative-director critique of your pitch or copy, installed into Claude Code with one command.",
    links: [
      { href: "https://github.com/fracazo/don-draper-skill", label: "GitHub" },
    ],
  },
];
