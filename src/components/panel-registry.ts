import dynamic from "next/dynamic";

/**
 * Everything that can open in the side panel, keyed by the route it mirrors.
 *
 * Each entry is a lazy import, so a click pulls only the content it needs
 * rather than shipping every case study in the home page bundle. Content
 * components render the body alone: no shell, no breadcrumb, no footer, since
 * the panel supplies its own chrome.
 */
export const panelRegistry: Record<
  string,
  { title: string; load: React.ComponentType }
> = {
  "stub:b2w": {
    title: "Mobile for Americanas, Submarino and Shoptime",
    load: dynamic(() => import("@/components/stubs/b2w").then((m) => m.B2wStub)),
  },
  "stub:bem-direto": {
    title: "Bem Direto",
    load: dynamic(() =>
      import("@/components/stubs/bem-direto").then((m) => m.BemDiretoStub),
    ),
  },
  "stub:coursify": {
    title: "Coursify.me",
    load: dynamic(() =>
      import("@/components/stubs/coursify").then((m) => m.CoursifyStub),
    ),
  },
  "/about": {
    title: "About me",
    load: dynamic(() =>
      import("@/components/about-content").then((m) => m.AboutContent),
    ),
  },
  "/resume": {
    title: "Work history",
    load: dynamic(() =>
      import("@/components/resume-content").then((m) => m.ResumeContent),
    ),
  },
  "/writing/titles-are-a-trap": {
    title: "Titles are a trap",
    load: dynamic(() =>
      import("@/components/writing/titles-are-a-trap").then(
        (m) => m.TitlesAreATrapContent,
      ),
    ),
  },
  "/writing/effort-and-impact-are-not-the-same-thing": {
    title: "Effort and impact are not the same thing",
    load: dynamic(() =>
      import("@/components/writing/effort-and-impact-are-not-the-same-thing").then(
        (m) => m.EffortAndImpactContent,
      ),
    ),
  },
  "/writing/building-birthguide-with-ai": {
    title: "Building BirthGuide with AI",
    load: dynamic(() =>
      import("@/components/writing/building-birthguide-with-ai").then(
        (m) => m.BuildingBirthguideWithAiContent,
      ),
    ),
  },
  "/case-studies/vodafone-mymix": {
    title: "MyMix",
    load: dynamic(() =>
      import("@/components/case-studies/vodafone-mymix").then(
        (m) => m.VodafoneMymixContent,
      ),
    ),
  },
  "/case-studies/glql": {
    title: "GLQL / Embedded Views",
    load: dynamic(() =>
      import("@/components/case-studies/glql").then((m) => m.GlqlContent),
    ),
  },
  "/case-studies/wiki-contextual-comments": {
    title: "Wiki Contextual Comments",
    load: dynamic(() =>
      import("@/components/case-studies/wiki-contextual-comments").then(
        (m) => m.WikiContextualCommentsContent,
      ),
    ),
  },
  "/case-studies/gitlab-pages": {
    title: "GitLab Pages Redesign",
    load: dynamic(() =>
      import("@/components/case-studies/gitlab-pages").then(
        (m) => m.GitlabPagesContent,
      ),
    ),
  },
  "/case-studies/birthguide": {
    title: "BirthGuide",
    load: dynamic(() =>
      import("@/components/case-studies/birthguide").then(
        (m) => m.BirthguideContent,
      ),
    ),
  },
  "/case-studies/mr-summary-ai": {
    title: "Summarize Merge Requests with AI",
    load: dynamic(() =>
      import("@/components/case-studies/mr-summary-ai").then(
        (m) => m.MrSummaryAiContent,
      ),
    ),
  },
  "/case-studies/eta-app": {
    title: "Reducing Friction in Government Visa Applications",
    load: dynamic(() =>
      import("@/components/case-studies/eta-app").then((m) => m.EtaAppContent),
    ),
  },
  "/case-studies/qantas-app": {
    title: "Increasing App Adoption Through Entertainment",
    load: dynamic(() =>
      import("@/components/case-studies/qantas-app").then(
        (m) => m.QantasAppContent,
      ),
    ),
  },
  "/case-studies/qantas-entertainment-app": {
    title: "A Unified In-flight Entertainment Experience",
    load: dynamic(() =>
      import("@/components/case-studies/qantas-entertainment-app").then(
        (m) => m.QantasEntertainmentAppContent,
      ),
    ),
  },
  "/case-studies/bringing-visibility-to-workers-status": {
    title: "Worker Status Visibility",
    load: dynamic(() =>
      import("@/components/case-studies/bringing-visibility-to-workers-status").then(
        (m) => m.BringingVisibilityToWorkersStatusContent,
      ),
    ),
  },
};

export function isPanelTarget(href: string) {
  return href in panelRegistry;
}
