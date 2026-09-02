import type { ReactNode } from "react";
import { ExternalLinkIcon } from "@/components/icons";

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
      <section className="section case-study-content">
        <div className="case-study-main">

        {breadcrumb}

          <header className="case-header">
            <h1 className="case-title">Making Site Status Visible in GitLab Pages</h1>
            <div className="case-metadata-card">
              <div className="metadata-content">
                <div className="metadata-item">
                  <svg className="metadata-icon" width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M6 3.75A2.75 2.75 0 0 1 8.75 1h2.5A2.75 2.75 0 0 1 14 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 0 1 6 4.193V3.75Zm6.5 0v.325a41.622 41.622 0 0 0-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25ZM10 10a1 1 0 0 0-1 1v.01a1 1 0 0 0 1 1h.01a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1H10Z" clipRule="evenodd"/><path d="M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 0 1-9.274 0C3.985 17.585 3 16.402 3 15.055Z"/></svg>
                  <div className="metadata-text">
                    <p className="metadata-label">Product</p>
                    <p className="metadata-value">GitLab Pages</p>
                  </div>
                </div>
                <div className="metadata-item">
                  <svg className="metadata-icon" width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M2 4.25A2.25 2.25 0 0 1 4.25 2h11.5A2.25 2.25 0 0 1 18 4.25v8.5A2.25 2.25 0 0 1 15.75 15h-3.105a3.501 3.501 0 0 0 1.1 1.677A.75.75 0 0 1 13.26 18H6.74a.75.75 0 0 1-.484-1.323A3.501 3.501 0 0 0 7.355 15H4.25A2.25 2.25 0 0 1 2 12.75v-8.5Zm1.5 0a.75.75 0 0 1 .75-.75h11.5a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75H4.25a.75.75 0 0 1-.75-.75v-7.5Z" clipRule="evenodd"/></svg>
                  <div className="metadata-text">
                    <p className="metadata-label">Platform</p>
                    <p className="metadata-value">GitLab Web (SaaS &amp; Self-managed)</p>
                  </div>
                </div>
                <div className="metadata-item">
                  <svg className="metadata-icon" width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z"/></svg>
                  <div className="metadata-text">
                    <p className="metadata-label">Role</p>
                    <p className="metadata-value">Product Designer · Knowledge group</p>
                  </div>
                </div>
                <div className="metadata-item">
                  <svg className="metadata-icon" width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M5.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4h.25A2.75 2.75 0 0 1 18 6.75v8.5A2.75 2.75 0 0 1 15.25 18H4.75A2.75 2.75 0 0 1 2 15.25v-8.5A2.75 2.75 0 0 1 4.75 4H5V2.75A.75.75 0 0 1 5.75 2Zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75Z" clipRule="evenodd"/></svg>
                  <div className="metadata-text">
                    <p className="metadata-label">Year</p>
                    <p className="metadata-value">2025</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="case-intro">GitLab Pages had spread the state of your site across four disconnected blocks. Deployment status was ambiguous, and DNS and SSL problems stayed hidden until something broke. I wrote the diagnosis, proposed the fix, and when my own team could not build it, convinced another team to pick it up. Most of it shipped in GitLab 18.1.</p>
          </header>

          <div className="summary-card">
            <h2><img src="/images/bookmark.svg" alt="" width="24" /> Summary</h2>
            <p>Pages is the first thing many people deploy on GitLab, and its settings page was working against that. Site status, domains and deployments were split across four blocks on two pages, so the one question every site owner has, is it live and where, took three separate lookups. I surfaced the problem in a UX scorecard run, proposed a tab-based structure that answers that question first, and argued every decision the same way: what problem it solves, how it affects the person using it, and why it beats the alternative. Five weeks of review with the Pages engineers, the PM and the technical writer got it ready to build. When the Pages team&rsquo;s capacity went elsewhere, I locked in written sign-off from every stakeholder and took the finished design to the UX Paper Cuts team, who shipped it as eleven merge requests in GitLab 18.1. The PM approved it as the foundation for anything the company later wants to build or charge for in Pages. The issue closed in 2026 because Pages stopped being a priority, not because the work didn&rsquo;t land.</p>
          </div>

          <div className="case-study-section">
            <h2>My Role and Context</h2>

            <h3>Starting from the product, not a brief</h3>
            <p>I was the product designer for the Knowledge group, which owned Wiki, GLQL and Pages. Pages had a small, dedicated engineering team and no roadmap pressure on its interface, which is exactly the condition under which usability debt builds up unnoticed. I decided it deserved a designer&rsquo;s attention before a customer escalation or a competitor forced the question. So I ran GitLab&rsquo;s UX scorecard on it, a structured evaluation of a product&rsquo;s main jobs that repeats each milestone. That run surfaced the site-status problems documented below, and the issue list it produced is what I took to the PM to argue Pages onto the roadmap.</p>

            <p>I opened issue 511049 on 31 December 2024 with a written diagnosis and a proposal, tagged the Pages engineers and the PM, and asked for their critique. There was no brief, no research budget and no allocated engineering time. What I had was the product itself, a docs site I was maintaining on it, and engineers willing to tell me where I was wrong.</p>

            <h3>Who was in the room</h3>
            <p>The work ran entirely asynchronously in the issue and its design threads. The people who shaped it: two backend engineers who knew Pages best, the engineer who had just shipped the primary domain feature, the engineer taking over the Rails work, the PM, and the technical writer who reviewed every line of interface copy. An engineer from a different team built it.</p>
          </div>

          <div className="case-study-section">
            <h2>Problem Definition</h2>

            <h3>Four blocks, one question</h3>
            <p>The Pages settings page was a stack of unrelated sections. Global settings at the top, with a maximum size field, a Force HTTPS checkbox and a &ldquo;Use unique domain&rdquo; checkbox nobody could explain. Then a block called &ldquo;Access pages&rdquo; listing URLs. Then a separate &ldquo;Domains&rdquo; block listing some of the same URLs again, with different actions. Then a red &ldquo;Remove pages&rdquo; box. Deployments lived on a different page altogether.</p>

            <img src="/images/gitlab-pages-before.png" alt="The old GitLab Pages settings page: a maximum size field, Force HTTPS and Use unique domain checkboxes, a primary domain dropdown, an Access pages block listing two URLs, a Domains block repeating one of them with a not-verified warning, and a red Remove pages box" />
            <p className="img-caption">Before: settings, access URLs, domains and a danger zone stacked on one page, with deployments somewhere else entirely.</p>

            <p>The specific problems I documented:</p>

            <ul>
              <li><strong>Status was spread across screens.</strong> Whether the site was live, which URL was canonical, and whether the last deployment succeeded were three separate lookups on two pages.</li>
              <li><strong>Deployment states were unclear.</strong> Parallel deployments had only recently been renamed from &ldquo;extra deployments&rdquo;, and the list showed them behind an accordion with badges that didn&rsquo;t distinguish active from stopped at a glance.</li>
              <li><strong>DNS and SSL were hidden until something broke.</strong> A custom domain could sit unverified with no indication on the main page. You found out when visitors did.</li>
              <li><strong>The copy assumed you already knew.</strong> &ldquo;Use unique domain&rdquo; told you nothing about why you would want one. &ldquo;Force HTTPS&rdquo; sat next to domain validation and users conflated the two. The primary domain setting was a dropdown labelled &ldquo;Don&rsquo;t enforce a primary domain&rdquo;.</li>
              <li><strong>&ldquo;Access pages&rdquo; and &ldquo;Domains&rdquo; overlapped.</strong> One of the Pages engineers had wanted to remove the first block for a while, since the second had replaced its purpose. Nobody had made the case.</li>
            </ul>

            <h3>Why it mattered beyond tidiness</h3>
            <p>Pages is often the first thing someone deploys on GitLab. It is the demo, the docs site, the personal blog. A confusing settings page there is a confusing first impression of GitLab as a deployment platform. The PM later framed the same point commercially: a coherent Pages surface is the foundation for anything the company might want to charge for in Pages, because there is finally a sensible place to put it.</p>
          </div>

          <div className="case-study-section">
            <h2>Design Explorations</h2>

            <h3>From &ldquo;fix domains&rdquo; to &ldquo;fix the page&rdquo;</h3>
            <p>The issue title changed three times, which tells the story of the scope. It started as &ldquo;Improve GitLab pages&rdquo;, a grab bag. After the first round of feedback I narrowed it to &ldquo;Simplify domain management&rdquo;, because that was where the most visible pain was: merging Access pages into Domains, inline DNS and certificate status, and a clearer way to set a primary domain. By late January it had widened again into a full redesign, because every domain fix I proposed kept bumping into the layout around it.</p>

            <h3>How I argued each decision</h3>
            <p>I ran the review the way Tom Greever lays out in <em>Articulating Design Decisions</em>. Every proposal in the thread answered three questions: what problem does this solve, how does it affect the user, and why is it better than the alternative. Framing it that way kept the discussion about the site owner rather than about taste. It also made corrections cheap to accept, because when an engineer had a better answer to one of the three questions, the design changed and the argument was over.</p>

            <h3>Absorbing engineering constraints</h3>
            <p>Each round of feedback from the engineers changed the design in a concrete way, and I made a point of taking their corrections rather than defending the mockup:</p>

            <ul>
              <li><strong>Ports stay in the URL.</strong> One of the backend engineers pointed out that some self-managed instances run Pages on non-standard ports, so the friendly URLs in my mockups would have produced broken links. Every URL in the final design carries its port.</li>
              <li><strong>&ldquo;Use GitLab-provided subdomain&rdquo; was wrong.</strong> My first rename of &ldquo;Use unique domain&rdquo; assumed the alternative was a custom domain. The engineer who built the domain feature corrected me: both URL patterns are GitLab-provided. The setting is about whether the subdomain is random, which exists to stop cookies leaking between projects. Another engineer suggested &ldquo;Use a random subdomain&rdquo;, and the final copy explains the security reason instead of just naming the mechanism.</li>
              <li><strong>Hide the security option, don&rsquo;t remove it.</strong> The same backend engineer suggested the unique domain toggle belonged behind the actions menu with a note that it should stay on. Most users never need to touch it, and the ones who do know why.</li>
              <li><strong>Edit and set-primary need to be findable.</strong> The domain feature&rsquo;s engineer asked how a user edits a domain or picks the primary one from my &ldquo;Options&rdquo; dropdown. Fair question. The final design puts both as named actions in the row menu and adds a confirmation modal for changing the primary domain, since it triggers a permanent 301 redirect.</li>
            </ul>

            <h3>The argument I chose not to win</h3>
            <p>Halfway through, I raised a bigger question. GitLab already has a Deployments list under Environments. Pages has its own deployments list. Same word, two places, no relationship between them. I argued in the thread that we were letting implementation details drive the interface: a Pages deployment being &ldquo;basically a file in object storage&rdquo; is not a reason to make users learn two mental models, any more than email and calendar should be shown separately because one uses IMAP and the other iCal.</p>

            <p>The two backend engineers pushed back, and their reasons were good. Environments was heading toward Kubernetes and user-owned infrastructure. The feature overlap was tiny. Merging them would create cross-team dependencies that would stop the Pages team iterating at all, and most of the review-app benefit was already available with one line in the CI config. I still think the user-facing point stands. But I also knew that if I made the redesign depend on that outcome, nothing would ship.</p>

            <p>Greever draws a line between agreement on the details and support to move forward. I did not need the engineers to agree with me about Environments. I needed their support for the redesign. So I did two things. I wrote the unification down as a recommended future iteration in the final proposal, explicitly out of scope, so the argument was on the record without blocking anything. And I solved the confusion I could solve: terminology. Every instance of &ldquo;deployment&rdquo; in Pages became &ldquo;Pages deployment&rdquo;. &ldquo;Latest deployment&rdquo; became &ldquo;Latest Pages deployment&rdquo;, the tab is &ldquo;Pages deployments&rdquo;, the limit reads &ldquo;Pages deployments: 2/100&rdquo;. It costs one word and it tells users which of the two systems they are looking at.</p>
          </div>

          <div className="case-study-section">
            <h2>Proposed Solution</h2>

            <h3>Three tabs, one question answered first</h3>
            <p>The final proposal organised Pages around what someone actually comes to the page to find out:</p>

            <ul>
              <li><strong>Overview.</strong> A live block at the top: &ldquo;Your Pages site is live at&rdquo;, the address, the deploy job that put it there, who triggered it and when, and a Visit site button. Below it, configuration alerts for unverified domains or missing certificates, and a preview of recent Pages deployments with a limit badge. If you only look at one screen, this is it.</li>
              <li><strong>Pages deployments.</strong> The full list, with the main site in its own block above the additional deployments used for merge request previews. Each row shows status, URL, deploy job, file count and size, who deployed it and when, and its expiry, with actions visible rather than hidden in an accordion. A toggle shows stopped deployments when you need them and hides them when you don&rsquo;t.</li>
              <li><strong>Domain &amp; settings.</strong> Every domain in one list with its role and its DNS check inline: the GitLab-provided one, the custom one marked as primary, and any others noted as redirecting to it. A domain that fails verification shows the failure in red and an alert underneath saying exactly what to add at your registrar. Set as primary, Edit and Remove live in the row menu. Force HTTPS and the unique domain setting sit below the domains with copy that explains what each one does. The danger zone at the bottom became &ldquo;Delete Pages&rdquo;, with a sentence on what is deleted and how to get it back.</li>
            </ul>

            <img src="/images/gitlab-pages-after.png" alt="The redesigned GitLab Pages overview tab: three tabs (Overview, Pages deployments, Domain and settings), a block reading Your pages site is live at docs.company.com with the deploy job and a Visit site button, and a Recent pages deployments list showing a 2/100 limit badge and four active merge request previews with URL, job, size and expiry" />
            <p className="img-caption">After: the Overview tab. The first thing on the page is whether the site is live and where. Deployments are labelled as Pages deployments to keep them distinct from Environments.</p>

            <h3>Designing for the tiers</h3>
            <p>The design covered the states the engineers would need, not just the happy path. Nine screens in total, handed over as a set so nothing had to be guessed during implementation.</p>

            <figure className="pages-figure-pair">
              <div className="pages-figure-pair-grid">
                <img src="/images/gitlab-pages-overview-alert.png" alt="Overview tab with a Domain setup needed alert under the live block, listing the two steps to verify the custom domain and an Edit domain button" />
                <img src="/images/gitlab-pages-overview-prompt.png" alt="Overview tab where the live block shows the GitLab-provided address and a one-line prompt to add a custom domain" />
              </div>
              <figcaption>The &ldquo;hidden until something broke&rdquo; problem, solved on the first screen. Left: a custom domain that isn&rsquo;t verified yet gets an alert with the exact steps. Right: with no custom domain, the live block offers to add one, instead of a settings field nobody finds.</figcaption>
            </figure>

            <figure className="pages-figure-pair">
              <div className="pages-figure-pair-grid">
                <img src="/images/gitlab-pages-overview-free.png" alt="Overview tab on the Free tier with an empty state explaining parallel deployments and an Upgrade to Premium button" />
                <img src="/images/gitlab-pages-overview-premium.png" alt="Overview tab on the Premium tier with the same empty state and a Learn more link instead of an upgrade button" />
              </div>
              <figcaption>The same empty state for two tiers. Free (left) explains what parallel deployments are and offers the upgrade. Premium (right) gets the explanation without the upsell.</figcaption>
            </figure>

            <figure className="pages-figure-pair">
              <div className="pages-figure-pair-grid">
                <img src="/images/gitlab-pages-deployments.png" alt="Pages deployments tab with the main site in its own block, additional deployments at 2 of 100 below it, a toggle to show stopped deployments, and pagination" />
                <img src="/images/gitlab-pages-deployments-limit.png" alt="Pages deployments tab at 99 of 100, with the badge in red, a Reached pages deployment limit usage bar and a Manage deployment limit link" />
              </div>
              <figcaption>The Pages deployments tab. Left: the main site separated from merge request previews, with a toggle for stopped deployments. Right: the limit reached, shown as a red badge, a usage bar and a link to manage it, before the next pipeline fails rather than after.</figcaption>
            </figure>

            <figure className="pages-figure-pair">
              <div className="pages-figure-pair-grid">
                <img src="/images/gitlab-pages-settings.png" alt="Domains and settings tab: three domains listed with a Primary domain badge, DNS check results inline, a verification alert with an Edit domain button, Force HTTPS and Use unique domain settings with explanatory copy, and a Delete Pages block" />
                <img src="/images/gitlab-pages-settings-menu.png" alt="The same tab with a domain's row menu open, showing Set as primary, Edit domain and Remove" />
              </div>
              <figcaption>Domains &amp; settings, resting and with a row menu open. Each domain carries its role and its DNS check inline. The settings copy explains what each option does, and the danger zone says what gets deleted and how to get it back.</figcaption>
            </figure>

            <p>Loading, empty and error states for the deployments list were specified alongside these so they could be cleaned up in the same pass.</p>

            <h3>Copy as part of the design</h3>
            <p>The technical writer reviewed every string across the overview, deployments and settings designs, and I updated the copy in a single pass in early February. The generic &ldquo;Learn more&rdquo; help link became a question, &ldquo;How do I publish my site with Pages?&rdquo;. &ldquo;Create domain&rdquo; became &ldquo;Add domain&rdquo;. The domain verification warning was rewritten to say what to do. None of this shows up in a screenshot comparison, and all of it is the difference between a page that explains itself and one that sends you to the docs.</p>
          </div>

          <div className="case-study-section">
            <h2>Cross-functional Process</h2>

            <h3>Loved, and unaffordable</h3>
            <p>On 5 February 2025 I marked the designs as final and asked the team for a last review. The reply from the senior backend engineer was honest and, at the time, deflating. They loved the design and thought it would make Pages look much better. They also said the team was spending too much of its capacity on Pages, wanted to move toward Wiki, and was shortest on exactly the front-end skills this needed. Their suggestion was to find a minimal slice and open it to community contributors.</p>

            <p>That would have meant the design sitting in the backlog indefinitely. I kept the issue warm instead: resolved every open design thread, kept the designs updated as related questions came in, and when a duplicate issue for the deployment limit badge appeared I folded it in rather than letting the work fragment.</p>

            <h3>Finding a team that could build it</h3>
            <p>The way in was the UX Paper Cuts team, a small group under the foundations department that ships focused interface improvements each milestone. In late April my manager asked in the issue whether the work was completely ready for implementation, because the Paper Cuts leadership wanted to know if it was a worthwhile effort for that team to take on. I said the designs were reviewed and every thread resolved, then asked the Pages engineers and the PM directly for a final sign-off so the Paper Cuts team wasn&rsquo;t walking into an unsettled debate. This was the lock-in step: a direct request for agreement, in writing, from each person who could later reopen the discussion.</p>

            <p>The PM re-reviewed and approved the proposal without further changes, citing the strategic value beyond the immediate fix. Two of the engineers signed off. The third was on leave and the PM confirmed that shouldn&rsquo;t block a start. A Paper Cuts engineer picked it up for the 18.1 milestone.</p>

            <h3>Shipping in slices</h3>
            <p>They broke the design into eleven merge requests over ten days in May 2025, each with a before-and-after screenshot linked back to the issue. In order: the help link copy, migrating the deployments list to the standard CRUD component, reorganising each deployment row, cleaning up loading, empty and error states, the tabs, the domain settings copy, the delete block, inline domain verification status, the live block on the overview, moving settings into the CRUD component, and a final spacing fix. Working from a complete set of specified states meant none of those merge requests came back with a design question.</p>

            <p>Not everything landed. The dedicated Pages deployments tab was scoped out of the tabs merge request, and the dropdown migration and set-primary-domain flow were deferred from the verification work. Those remain open.</p>
          </div>

          <div className="case-study-section">
            <h2>Outcomes</h2>

            <h3>What shipped</h3>
            <ul>
              <li>Tab-based Pages page with the overview and domain &amp; settings tabs, live in GitLab 18.1 (June 2025)</li>
              <li>&ldquo;Your Pages site is live at&rdquo; block with deploy job, author and time</li>
              <li>Inline domain verification status and rewritten domain copy</li>
              <li>Reorganised deployment rows with visible actions, grouped file and size information, and clearer active and stopped states</li>
              <li>Cleaned-up loading, empty and error states for deployments</li>
              <li>Settings and the remove action aligned with GitLab&rsquo;s standard CRUD layout</li>
            </ul>

            <h3>What it led to</h3>
            <p>Within a month one of the Pages engineers had used the new interface in earnest and opened two follow-up issues with feedback, which is the outcome you want: a real user of the feature filing real paper cuts against the new baseline instead of the old one. The question I raised about whether &ldquo;Use unique domain&rdquo; should be on by default was spun out into its own issue, and the permissions split between Pages maintainers and developers was queued behind this work. I also wrote a GitLab blog post, &ldquo;Build a new website in a few easy steps with GitLab Pages&rdquo;, walking through the new experience end to end.</p>

            <p>The issue itself was closed as complete in early 2026, when the PM and I agreed Pages would not be prioritised again soon and the Paper Cuts work had covered the bulk of it. It closed because the product moved on, not because the design didn&rsquo;t ship.</p>

            <h3>What I&rsquo;d approach differently</h3>
            <p>I would attach a metric to the proposal on day one. The diagnosis was sound and the reviewers agreed with it, but the issue never carried a number: time to find the site address, support requests about unverified domains, the share of Pages projects that add a custom domain. Greever&rsquo;s warning that projects without goals languish is what happened once the design was ready and nobody was measuring the cost of not building it. A metric would have turned the capacity conversation in February into a trade-off instead of a preference.</p>

            <p>I would lock in agreement in February, not April. When I marked the designs final I asked for a last review, which invites more comments. The right ask was the direct one: do we agree to move forward with this? That explicit yes only came two months later, when a build team appeared and my manager asked whether the work was ready. Asking for it the day the design was finished would have given me a decision to carry to other teams straight away, rather than a well-liked idea.</p>
          </div>

          <div className="case-study-section">
            <h2>Links</h2>
            <ul>
              <li><a href="https://gitlab.com/gitlab-org/gitlab/-/issues/511049" target="_blank" rel="noopener">GitLab issue 511049<ExternalLinkIcon size={12} className="external-mark" /></a>, the diagnosis, proposal and full design discussion</li>
              <li><a href="https://gitlab.com/gitlab-org/gitlab/-/merge_requests/191744" target="_blank" rel="noopener">Pages: Add tabs<ExternalLinkIcon size={12} className="external-mark" /></a>, the merge request that landed the new structure, one of eleven in 18.1</li>
              <li><a href="https://gitlab.com/gitlab-org/gitlab/-/merge_requests/191809" target="_blank" rel="noopener">Pages live block<ExternalLinkIcon size={12} className="external-mark" /></a>, the &ldquo;Your Pages site is live at&rdquo; block</li>
              <li><a href="https://about.gitlab.com/blog/build-a-new-website-in-a-few-easy-steps-with-gitlab-pages/" target="_blank" rel="noopener">Build a new website in a few easy steps with GitLab Pages<ExternalLinkIcon size={12} className="external-mark" /></a>, GitLab Blog, 2025</li>
            </ul>
            <p>The scorecard run that started this work, and the roadmap discussion around it, live in confidential GitLab issues and epics, so only the public artifacts are linked above.</p>
          </div>

        </div>{/* /case-study-main */}
      </section>
  );
}
