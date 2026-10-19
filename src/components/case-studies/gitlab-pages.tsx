import type { ReactNode } from "react";
import { BeforeAfterToggle } from "@/components/before-after-toggle";
import { CaseStudyLayout } from "@/components/case-study-layout";
import { ExternalLinkIcon } from "@/components/icons";
import { TanukiMark } from "@/components/scene-marks";

/**
 * Body of the GitLab Pages case study, without the route chrome.
 *
 * Lives apart from the route so the same content can render inside the work
 * panel on the home page. `breadcrumb` is a slot the route fills and the
 * panel leaves empty, since it doesn't belong beside the index.
 */
export function GitlabPagesContent({
  breadcrumb,
}: {
  breadcrumb?: ReactNode;
} = {}) {
  return (
    <CaseStudyLayout
      icon={<TanukiMark size={36} />}
      brand="#fc6d26"
      title="GitLab Pages"
      subtitle="Shipping a redesign without a team"
      meta={[
        { label: "Role", value: "Product Designer" },
        { label: "Project type", value: "Redesign" },
        { label: "Platform", value: ["GitLab SaaS", "Self-managed"] },
      ]}
      chapters={[
        { id: "gp-problem", label: "Four blocks, one question" },
        { id: "gp-engineering", label: "Working with engineering" },
        { id: "gp-design", label: "The design" },
        { id: "gp-shipping", label: "Shipping without a team" },
        { id: "gp-revenue", label: "A new revenue point" },
      ]}
      link={{ href: "https://docs.gitlab.com/user/project/pages/", label: "docs.gitlab.com/user/project/pages" }}
      hero={
        <img src="/images/gitlab-pages-hero.webp" width={1980} height={1356} alt="The redesigned GitLab Pages overview: three tabs, a block reading Your pages site is live at docs.company.com with the deploy job and a Visit site button, and four recent Pages deployments under a 3 of 100 deploys used badge" />
      }
    >
      <section className="section case-study-content">
        <div className="case-study-main">

        {breadcrumb}

          <p className="cs-intro">GitLab Pages spread your site&rsquo;s status across four blocks and two pages, and DNS and SSL problems stayed hidden until something broke. I found the problem, designed the fix, and with no team assigned to Pages, got it built and shipped in a single release.</p>

          <div className="case-study-section">
            <h2 id="gp-problem">Four blocks, one question</h2>
            <p>I was the product designer for the Knowledge group, which owned Wiki, GLQL and Pages. Nobody had asked for Pages work. I ran GitLab&rsquo;s UX scorecard on it, a structured walk through a product&rsquo;s main jobs, then wrote a diagnosis and a proposal in an issue and asked the Pages engineers and the PM to critique it.</p>
            <p>The settings page was a stack of unrelated sections, and deployments lived on another page altogether.</p>
              <BeforeAfterToggle
                before={{
                  src: "/images/gitlab-pages-before.png",
                  alt: "The old GitLab Pages settings page: a maximum size field, Force HTTPS and Use unique domain checkboxes, a primary domain dropdown, an Access pages block listing two URLs, a Domains block repeating one of them with a not-verified warning, and a red Remove pages box",
                }}
                after={{
                  src: "/images/gitlab-pages-after-overview-top.webp",
                  alt: "The redesigned GitLab Pages overview tab: three tabs (Overview, Pages deployments, Domain and settings), a block reading Your pages site is live at docs.company.com with the deploy job and a Visit site button, and the first recent Pages deployments under a 3 of 100 deploys used badge",
                }}
              />
            <ul>
              <li><strong>Status was spread across screens.</strong> Whether the site was live, which URL was canonical and whether the last deployment worked were three lookups on two pages.</li>
              <li><strong>DNS and SSL were hidden until something broke.</strong> An unverified custom domain showed no warning on the main page. You found out when your visitors did.</li>
              <li><strong>The copy assumed you already knew.</strong> &ldquo;Use unique domain&rdquo; didn&rsquo;t say why you&rsquo;d want one, and &ldquo;Force HTTPS&rdquo; sat next to domain validation, so people mixed the two up.</li>
              <li><strong>Two blocks did the same job.</strong> &ldquo;Access pages&rdquo; and &ldquo;Domains&rdquo; listed the same URLs with different actions.</li>
            </ul>
            <p>This mattered beyond tidiness. Pages is often the first thing someone deploys on GitLab: the demo, the docs site, the personal blog. A confusing settings page there is a confusing first impression of GitLab as a place to deploy.</p>
          </div>

          <div className="case-study-section">
            <h2 id="gp-engineering">Working with engineering</h2>
            <p>I argued every proposal in the open, against three questions: what problem it solves, how it affects the user, and why it beats the alternative. When an engineer had a better answer, the design changed. Ports stayed in every URL because self-managed instances use them, and a setting I had renamed kept its name with clearer copy instead.</p>
            <p>I also lost an argument on purpose. I wanted Pages deployments and GitLab&rsquo;s other deployments list in one place: same word, two places. The engineers had good reasons against it, and making the redesign depend on winning would have stalled it. So I recorded it as a future step and fixed what I could: every label now says &ldquo;Pages deployment&rdquo;, so people know which system they&rsquo;re in.</p>
          </div>

          <div className="case-study-section">
            <h2 id="gp-design">The design</h2>
            <p>The final design organises Pages around what people come to find out. The Overview tab opens with &ldquo;Your Pages site is live at&rdquo;, the address, the deploy job behind it and a Visit site button. Pages deployments get their own tab, and every domain sits in one list on Domain &amp; settings, with its DNS check inline.</p>
            <p>I covered the states the engineers would need, not just the happy path: each tier, each domain state, the deployment limit, the menus behind every row, and the loading, empty and error states.</p>
            <BeforeAfterToggle
              labels={["Domain not verified", "No custom domain"]}
              before={{
                src: "/images/gitlab-pages-overview-alert.webp",
                alt: "Overview tab with a Domain setup needed alert under the live block, listing the two steps to verify the custom domain and an Edit domain button",
              }}
              after={{
                src: "/images/gitlab-pages-overview-prompt.webp",
                alt: "Overview tab where the live block shows the GitLab-provided address and a one-line prompt to add a custom domain",
              }}
              caption={<>The &ldquo;hidden until something broke&rdquo; problem, solved on the first screen. A custom domain that isn&rsquo;t verified yet gets an alert with the exact steps. With no custom domain, the live block offers to add one, instead of a settings field nobody finds.</>}
            />

            <BeforeAfterToggle
              labels={["Free", "Premium"]}
              before={{
                src: "/images/gitlab-pages-overview-free.webp",
                alt: "Overview tab on the Free tier with an empty state explaining parallel deployments and an Upgrade to Premium button",
              }}
              after={{
                src: "/images/gitlab-pages-overview-premium.webp",
                alt: "Overview tab on the Premium tier with the same empty state and a Learn more link instead of an upgrade button",
              }}
              caption={<>The same empty state for two tiers. Free explains what parallel deployments are and offers the upgrade. Premium gets the explanation without the upsell.</>}
            />

            <BeforeAfterToggle
              labels={["Within limit", "Limit reached"]}
              before={{
                src: "/images/gitlab-pages-deployments.webp",
                alt: "Pages deployments tab with the main site in its own block, additional deployments below it at 3 of 100 deploys used, a toggle to show stopped deployments, and pagination",
              }}
              after={{
                src: "/images/gitlab-pages-deployments-limit.webp",
                alt: "Pages deployments tab at its limit: a red 100 of 100 deploys used badge, a warning that the pipeline is blocked and that three merge request deployments expire in 23 hours, a full usage bar, and a Manage deployment limit link",
              }}
              caption={<>The Pages deployments tab. Within the limit, the main site sits apart from merge request previews, with a toggle for stopped deployments. At the limit, the badge turns red, a warning says the pipeline is blocked and when the next previews expire, and a full usage bar sits above a link to manage the limit. That link is where the revenue work described below begins.</>}
            />

            <BeforeAfterToggle
              labels={["Resting", "Row menu open"]}
              before={{
                src: "/images/gitlab-pages-settings.webp",
                alt: "Domains and settings tab: three domains listed with a Primary domain badge, DNS check results inline, a verification alert with an Edit domain button, Force HTTPS and Use unique domain settings with explanatory copy, and a Delete Pages block",
              }}
              after={{
                src: "/images/gitlab-pages-settings-menu.webp",
                alt: "The same tab with a domain's row menu open, showing Set as primary, Edit domain and Remove",
              }}
              caption={<>Domains &amp; settings. Each domain carries its role and its DNS check inline. The settings copy explains what each option does, and the danger zone says what gets deleted and how to get it back.</>}
            />

            <p>The technical writer reviewed every string. &ldquo;Learn more&rdquo; became &ldquo;How do I publish my site with Pages?&rdquo;, &ldquo;Create domain&rdquo; became &ldquo;Add domain&rdquo;, and the domain warning now says what to do.</p>
          </div>

          <div className="case-study-section">
            <h2 id="gp-shipping">Shipping without a team</h2>
            <p>When I marked the designs final, the senior backend engineer&rsquo;s reply was honest. They loved the design, but the team was spending too much of its time on Pages, wanted to move on to Wiki, and was short on exactly the front-end skills this needed. Their suggestion was to find a minimal slice and open it to community contributors. That would have left the design in the backlog indefinitely.</p>
            <p>I kept the issue warm, resolving every open thread and folding in a duplicate issue about the deployment limit, and looked for another way to get it built. UX Paper Cuts is a small team that ships focused interface fixes each milestone without needing roadmap time, and the design fit their brief: reviewed, scoped and easy to split. When their leadership asked whether it was ready, I asked the Pages engineers and the PM directly for a final sign-off, so the Paper Cuts team wasn&rsquo;t walking into an open debate. The PM approved it, citing its strategic value, and the engineers signed off.</p>
            <p>I split the redesign into slices that could each be reviewed and merged on their own. Because every state was already specified, none came back with a design question. A Paper Cuts engineer built it in ten days, and it shipped in one monthly release. It&rsquo;s the same instinct I use on my own products: find the problem, fix it, ship it in pieces, just inside a company with a release train.</p>
          </div>

          <div className="case-study-section">
            <h2 id="gp-revenue">A new revenue point</h2>
            <p>The PM had framed a coherent Pages page as the foundation for anything GitLab might charge for in Pages. That turned out to be literal. The redesign made the deployment limit visible for the first time. At 80% the deployments block turns amber and says which merge request previews are about to expire, so you can clean up before a pipeline fails. At 100% it turns red, says the pipeline is blocked and when the next previews expire, and shows a full usage bar.</p>
            <p>Its &ldquo;Manage deployment limit&rdquo; link opens a page that didn&rsquo;t exist before, where a project at its limit can buy more deployment space. I designed that page and the flow through it. It&rsquo;s a new revenue point, built on a settings page that nobody had a roadmap slot for six months earlier. The work is confidential, so it isn&rsquo;t shown here.</p>
          </div>

          <div className="case-study-section">
            <h2>Links</h2>
            <ul>
              <li><a href="https://gitlab.com/gitlab-org/gitlab/-/issues/511049" target="_blank" rel="noopener">Revamp GitLab Pages<ExternalLinkIcon size={12} className="external-mark" /></a>, the diagnosis, proposal and full design discussion</li>
              <li><a href="https://about.gitlab.com/blog/build-a-new-website-in-a-few-easy-steps-with-gitlab-pages/" target="_blank" rel="noopener">Build a new website in a few easy steps with GitLab Pages<ExternalLinkIcon size={12} className="external-mark" /></a>, my walkthrough of the new experience on the GitLab Blog</li>
            </ul>
          </div>

        </div>
      </section>
    </CaseStudyLayout>
  );
}
