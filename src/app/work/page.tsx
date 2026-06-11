import type { Metadata } from "next";
import { AppShell } from "@/components/app-shell";
import { CaseCard } from "@/components/case-card";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Work - Alex Fracazo Product Designer",
  description:
    "Alex Fracazo case studies and projects - Product Designer based in Melbourne, Australia",
  openGraph: {
    title: "Work - Alex Fracazo Product Designer",
    description:
      "Alex Fracazo case studies and projects - Product Designer based in Melbourne, Australia",
    images: ["/images/opengraph.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Work - Alex Fracazo Product Designer",
    description:
      "Alex Fracazo case studies and projects - Product Designer based in Melbourne, Australia",
    images: ["/images/opengraph.jpg"],
  },
};

const current = [
  {
    href: "/case-studies/gitlab",
    image: { src: "/images/gitlab-pattern.svg", alt: "GitLab pattern" },
    title: "GitLab",
    tagline:
      "Product Designer - Plan: Knowledge. Designing experiences that support async collaboration and knowledge sharing for distributed teams.",
  },
  {
    href: "/case-studies/mr-summary-ai",
    image: {
      src: "/images/To_do_list_-_summary.png",
      alt: "AI-generated merge request summary shown in the GitLab to-do list",
    },
    eyebrow: "GitLab · 2023",
    outcome: "Shipped · 3 iterations",
    title: "Summarize Merge Requests with AI",
    tagline:
      "Finding where AI summaries earn trust in code review, including the conviction to remove what didn't work.",
  },
  {
    href: "/case-studies/glql",
    image: {
      src: "/images/glql-embedded-view-card.png",
      alt: "GLQL code block rendering into an embedded table view of issues in GitLab",
    },
    eyebrow: "GitLab · 2024–2025",
    outcome: "+33% adoption post-GA",
    title: "GLQL: Embedded Views for Work Tracking",
    tagline:
      "Turning an engineer-built query language into a usable product, through research that overturned the team's assumptions.",
  },
  {
    href: "/case-studies/wiki-contextual-comments",
    image: {
      src: "/images/wiki-comments-card.png",
      alt: "Commenting on a highlighted wiki passage from a dedicated right-side comments panel",
    },
    eyebrow: "GitLab · Plan: Knowledge",
    title: "Wiki Contextual Comments",
    tagline:
      "Tying discussion to the content it's about, so knowledge stops scattering across Slack, email, and meetings.",
  },
  /* BirthGuide hidden until ready:
  {
    href: "/case-studies/birthguide",
    image: {
      src: "/images/birthguide-hero.svg",
      alt: "BirthGuide interactive birth plan on mobile",
    },
    title: "The birth plan that advocates for you during labour",
    tagline: "A birth plan you open on your phone, not one you forget in your bag.",
  },
  */
];

const past = [
  {
    href: "/case-studies/bringing-visibility-to-workers-status",
    image: {
      src: "/images/62fbf14400d70051caf1b477_hireup-project-p-1080.png",
      alt: "Hireup brand with arrows that connects both the customer and the worker",
      srcSet:
        "/images/62fbf14400d70051caf1b477_hireup-project-p-1080-p-500.png 500w, /images/62fbf14400d70051caf1b477_hireup-project-p-1080-p-800.png 800w, /images/62fbf14400d70051caf1b477_hireup-project-p-1080.png 1080w",
      sizes:
        "(max-width: 479px) 93vw, (max-width: 767px) 95vw, (max-width: 1919px) 47vw, 570px",
    },
    eyebrow: "Hireup · 2022",
    outcome: "+12% bookings",
    title: "Changing Booking Behaviour Through Worker Status Visibility",
    tagline:
      "Reducing uncertainty in a two-sided marketplace and increasing successful bookings by 12%.",
  },
  {
    href: "/case-studies/eta-app",
    image: {
      src: "/images/62dc274f132cbe543717e126_work1-p-2000.jpg",
      alt: "A high tech face recognition illustration",
      srcSet:
        "/images/62dc274f132cbe543717e126_work1-p-2000-p-500.jpg 500w, /images/62dc274f132cbe543717e126_work1-p-2000-p-800.jpg 800w, /images/62dc274f132cbe543717e126_work1-p-2000-p-1080.jpg 1080w, /images/62dc274f132cbe543717e126_work1-p-2000-p-1600.jpg 1600w, /images/62dc274f132cbe543717e126_work1-p-2000-p-2000.jpg 2000w, /images/62dc274f132cbe543717e126_work1-p-2000.jpg 2000w",
      sizes:
        "(max-width: 479px) 93vw, (max-width: 767px) 95vw, (max-width: 1919px) 47vw, 570px",
    },
    eyebrow: "Dept. of Home Affairs",
    title: "Reducing Friction in Government Visa Applications",
    tagline:
      "Automating data entry to improve completion and reduce user effort in a high-stakes service.",
  },
  {
    href: "/case-studies/qantas-entertainment-app",
    image: {
      src: "/images/62dc26d29e21732abffdaacd_work4-p-1080.png",
      alt: "The Qantas entertainment logo",
      srcSet:
        "/images/62dc26d29e21732abffdaacd_work4-p-1080-p-500.png 500w, /images/62dc26d29e21732abffdaacd_work4-p-1080-p-800.png 800w, /images/62dc26d29e21732abffdaacd_work4-p-1080-p-1080.png 1080w, /images/62dc26d29e21732abffdaacd_work4-p-1080.png 1080w",
      sizes:
        "(max-width: 479px) 93vw, (max-width: 767px) 95vw, (max-width: 1919px) 47vw, 570px",
    },
    eyebrow: "Qantas",
    title: "Driving Engagement Through a Unified Entertainment Experience",
    tagline: "Reimagining in-flight entertainment as a cohesive product ecosystem.",
  },
  {
    href: "/case-studies/qantas-app",
    image: {
      src: "/images/62dc1d83920df32baae28d6b_work2-p-1080.png",
      alt: "The Qantas's iconic kangaroo logo",
      srcSet:
        "/images/62dc1d83920df32baae28d6b_work2-p-1080-p-500.png 500w, /images/62dc1d83920df32baae28d6b_work2-p-1080-p-800.png 800w, /images/62dc1d83920df32baae28d6b_work2-p-1080-p-1080.png 1080w, /images/62dc1d83920df32baae28d6b_work2-p-1080.png 1080w",
      sizes:
        "(max-width: 479px) 93vw, (max-width: 767px) 95vw, (max-width: 1919px) 47vw, 570px",
    },
    eyebrow: "Qantas",
    outcome: "+70% downloads",
    title: "Increasing App Adoption by Integrating Entertainment Services",
    tagline: "Using entertainment features to drive a 70% increase in app downloads.",
  },
];

const sectionTitleClass =
  "mb-4 text-[11px] font-semibold tracking-[0.06em] text-muted uppercase";

export default function Work() {
  return (
    <AppShell>
      {/* Current */}
      <section aria-labelledby="current-title" className="mx-auto w-full max-w-[640px]">
        <h1 id="work-title" className="h1 mt-[168px] max-md:mt-14">
          Work
        </h1>
        <h2 id="current-title" className={sectionTitleClass}>
          Current
        </h2>
        <hr className="mb-6 h-px border-0 bg-border" />
        <ul role="list" className="m-0 grid list-none grid-cols-1 gap-8 p-0">
          {current.map((work) => (
            <li key={work.href}>
              <CaseCard {...work} wide heading="h2" />
            </li>
          ))}
        </ul>
      </section>

      {/* Past experience */}
      <section aria-labelledby="past-title" className="mx-auto grid w-full max-w-[640px] gap-4">
        <h2 id="past-title" className={`${sectionTitleClass} mt-12 mb-0`}>
          Past experience
        </h2>
        <hr className="m-0 h-px border-0 bg-border" />
        <ul role="list" className="m-0 grid list-none grid-cols-1 gap-8 p-0">
          {past.map((work) => (
            <li key={work.href}>
              <CaseCard {...work} wide heading="h2" />
            </li>
          ))}
        </ul>
      </section>

      <SiteFooter
        links={
          <>
            You can find me on{" "}
            <a href="http://www.linkedin.com/in/fracazo" target="_blank">
              LinkedIn
            </a>
            , or <a href="/contact">reach me by email</a>.
          </>
        }
      />
    </AppShell>
  );
}
