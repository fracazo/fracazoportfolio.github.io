import type { ReactNode } from "react";
import { ExternalLinkIcon } from "@/components/icons";

/**
 * Body of the glql case study, without the route chrome.
 *
 * Lives apart from the route so the same content can render inside the work
 * panel on the home page. `breadcrumb` is a slot the route fills and the
 * panel leaves empty, since it doesn't belong beside the index.
 */
export function GlqlContent({
  breadcrumb,
}: {
  breadcrumb?: ReactNode;
} = {}) {
  return (
      <section className="section case-study-content">
        <div className="case-study-main">

        {breadcrumb}

          <header className="case-header">
            <h1 className="case-title">GLQL / Embedded Views</h1>
            <div className="case-metadata-card">
              <div className="metadata-content">
                <div className="metadata-item">
                  <svg className="metadata-icon" width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M6 3.75A2.75 2.75 0 0 1 8.75 1h2.5A2.75 2.75 0 0 1 14 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 0 1 6 4.193V3.75Zm6.5 0v.325a41.622 41.622 0 0 0-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25ZM10 10a1 1 0 0 0-1 1v.01a1 1 0 0 0 1 1h.01a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1H10Z" clipRule="evenodd"/><path d="M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 0 1-9.274 0C3.985 17.585 3 16.402 3 15.055Z"/></svg>
                  <div className="metadata-text">
                    <p className="metadata-label">Product</p>
                    <p className="metadata-value">GitLab Query Language (GLQL)</p>
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
                    <p className="metadata-value">2024–2025</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="case-intro">GLQL was powerful, but you had to write YAML to use it. I made it work for people who had only ever used filters, without taking any power away from the experts.</p>
          </header>

          <ul className="case-stats" role="list">
            <li><span className="case-stat-value">+33%</span><span className="case-stat-label">adoption growth in the first weeks post-GA</span></li>
            <li><span className="case-stat-value">94%</span><span className="case-stat-label">balanced scorecard score</span></li>
            <li><span className="case-stat-value">0</span><span className="case-stat-label">critical bugs at GA launch</span></li>
          </ul>

          <div className="case-study-section">
            <blockquote>Adoption grew about a third in the first weeks after GA. The team shipped something worth using, and the discoverability work I led helped people find it.</blockquote>
          </div>


          <div className="case-study-section">
            <h2>The challenge</h2>
            <p>GLQL started as an experimental feature and a strong proof of concept. It was a technical solution designed for technical people, and it worked. The job it was meant to serve was easy to say and hard to do: let someone track work progress without stitching it together by hand across boards, milestones, and issues.</p>
            <p>Many of the people with that job were not the people it was first built for. They were used to filters and boards, not writing code, and asking them to start from YAML was a big step.</p>
            <p>The catch showed up fast. The same tool had to serve two people with opposite instincts. A project manager who never wants to see a line of code, and a power user who expects a query to behave exactly like the ones they already write. Most query tools pick one of those people and lose the other.</p>
          </div>

          <div className="case-study-section">
            <h2>My role</h2>
            <p>I owned four products across the Knowledge group as its designer, embedded with engineering. The GLQL team had built something powerful quickly, and research had not been part of how it got there yet. So my first job was not a screen. It was making design useful fast enough that it sped the team up instead of slowing it down.</p>
            <p>My way in was a UX scorecard run, GitLab&apos;s standing process where a designer walks a product&apos;s main jobs as a new user would and grades the experience. Scoring GLQL that way turned my concerns into an issue list the team could work through line by line, and it is what I took to the PM to make the case for proper research.</p>
          </div>

          <div className="case-study-section">
            <h2>Research</h2>
            <p>I ran problem validation with our researcher to confirm the job was real, then a two-phase study on the part that worried me most: the syntax. Twelve participants, half internal, half external. In the first phase they wrote real queries against live documentation. In the second they compared three different syntax styles.</p>
            <p>Watching them write was where the design direction came from. People did not read their query before running it. They typed, hit an error, and used the error message to find their way. When the message was vague, they were stuck. The error messages were the navigation, not the docs.</p>
            <p>And the finding that changed the team&apos;s mind: plain-language syntax was easier for non-technical users than a SQL-style one, because the people who knew SQL arrived expecting things our language could not do. Familiarity was a trap, not a shortcut.</p>

            <figure className="glql-video-figure">
              <video controls playsInline preload="metadata" className="glql-proto-video">
                <source src="/images/Screen_Recording_2024-08-05_at_17.15.37.mov" type="video/mp4" />
                Your browser does not support the video element.
              </video>
              <figcaption className="glql-video-caption">Early prototype recording (Aug 2024), made with one of the GLQL engineers to show what GLQL could already do before any design work. We used it internally to gather feedback and agree on what the feature could become.</figcaption>
            </figure>
          </div>

          <div className="case-study-section">
            <h2>Decision one: the syntax is the UX</h2>
            <p>Three syntax options were on the table, and SQL was the natural pick. Clean, familiar to the technical users GLQL was first built for, with a tidy separation of concerns.</p>
            <p>My argument was that the syntax is the first thing a user touches, so it is the interface, and we should test it with the people we wanted to reach before locking it in.</p>
            <p>We tested it.</p>
            <p>The plain-language option won, and we shipped it with full backward compatibility.</p>

            <div className="glql-syntax-group">
              <div className="glql-syntax-card">
                <div className="glql-syntax-label">Option 1: YAML frontmatter + query <span className="glql-syntax-tag glql-syntax-tag--current">Current</span></div>
                <img className="glql-syntax-img" src="/images/glql-syntax-frontmatter.png" width={541} height={231} alt={`GLQL with YAML frontmatter, marked deprecated: a --- fenced block with display: table and fields: state, title, labels("workflow"), then the query project = "gitlab-org/gitlab" and milestone = "17.4" and label = "group::knowledge"`} />
                <p className="glql-syntax-note">Presentation options live in YAML frontmatter above the query. The query itself is a plain expression. Separation is visual but the two live inside the same code block.</p>
              </div>

              <div className="glql-syntax-card">
                <div className="glql-syntax-label">Option 2: Mix YAML, query as a property <span className="glql-syntax-tag glql-syntax-tag--winner">Plain-language winner</span></div>
                <img className="glql-syntax-img" src="/images/glql-syntax-mix-yaml.png" width={520} height={192} alt={`The winning mix YAML syntax: display: table, fields: state, title, labels("workflow"), and query: type = Issue AND group = "gitlab-org" AND assignee = currentUser() AND state = opened`} />
                <p className="glql-syntax-note">Every line is a key and a value. The query becomes a <code>query:</code> property next to the display settings, with no frontmatter delimiter. Reads like a sentence and behaves predictably.</p>
              </div>

              <div className="glql-syntax-card">
                <div className="glql-syntax-label">Option 3: SQL-style syntax</div>
                <img className="glql-syntax-img" src="/images/glql-syntax-sql.png" width={478} height={164} alt={`SQL-style GLQL: SELECT state, title, labels("workflow") WHERE project = "gitlab-org/gitlab" AND milestone = "17.4" AND label = "group::knowledge" DISPLAY AS table`} />
                <p className="glql-syntax-note">Full SQL-adjacent syntax. Familiar to data-literate users but risks importing SQL expectations that GLQL doesn&apos;t fully support.</p>
              </div>
            </div>
          </div>

          <div className="case-study-section">
            <h2>Decision two: bring the starting point in-product</h2>
            <p>User testing surfaced a behavior I had not designed for: people did not write queries from scratch. They found an example in the documentation, copied it, pasted it into GitLab, and adjusted from there. The docs were the starting point and the product was the workbench, with a round trip between the two every time they got stuck.</p>

            <img src="/images/glql-decision2.gif" alt="The GitLab documentation page for GLQL embedded views, the source users copied examples from" />
            <p className="img-caption">The starting point in almost every session: an example copied straight from the GLQL documentation, then pasted into GitLab to try.</p>

            <p>That told me where GLQL belonged. If the real workflow was copy from the docs and try it in the product, the design job was to close that gap and pull the starting point in-product: working examples and templates surfaced inside the editor, so the first usable query was one click away instead of a tab away.</p>

            <figure className="glql-video-figure">
              <video controls playsInline preload="metadata" className="glql-proto-video">
                <source src="/images/glql-table.mp4" type="video/mp4" />
                Your browser does not support the video element.
              </video>
            </figure>

            <p>That insight set the direction for the discoverability work that followed, and for the visual builder.</p>
          </div>

          <div className="case-study-section">
            <h2>Driving adoption through design</h2>
            <p>Even a strong feature has to be found before it gets used.</p>
            <p>I led the discoverability work: surfacing the feature inside the editor at the moment someone is writing, getting it placed as a primary item in the release post, and featuring it in GitLab&apos;s What&apos;s New.</p>
            <p>Adoption grew about a third in the first weeks after GA alongside that push.</p>

            <figure className="glql-figure-pair">
              <div className="glql-figure-pair-grid">
                <img src="/images/discoverability-popover.png" alt="A discoverability popover surfacing GLQL inside the editor while a user is writing" />
                <img src="/images/discoverability-popover2.png" alt="A second view of the in-editor discoverability popover promoting GLQL embedded views" />
              </div>
              <figcaption>Discoverability by design: surfacing GLQL inside the editor at the moment someone is writing.</figcaption>
            </figure>
          </div>

          <div className="case-study-section">
            <h2>Shipping in code</h2>
            <p>I did not hand off a spec and walk away. I worked in the same repository as the engineers, through the same review, and merged to production myself.</p>
            <p>One example: embedded views could not show a &quot;0&quot; when a table was empty, so you could not scan a page of tables and tell which ones had no results without opening each one. I traced it to a shared component whose zero-count logic was tied to having an icon, which meant most of the fifty-plus components using it could not show a zero at all. I added an explicit prop to control it, kept it backward compatible, wrote the tests, and shipped it. (Merge request !209750.)</p>
            <p>That changed how the team treated design. Less lost in translation, faster iteration, and trust, because I was held to the same bar they were.</p>

            <figure className="glql-beforeafter-figure">
              <div className="glql-beforeafter">
                <div className="glql-ba-col">
                  <div className="glql-ba-label">Before</div>
                  <div className="glql-ba-desc">No count shown for empty results</div>
                  <div className="glql-ba-shot">
                    <img src="/images/shipping-into-code-before.png" alt="An empty GLQL embedded view titled 'My new table' with no count badge in the header" />
                  </div>
                </div>
                <div className="glql-ba-col">
                  <div className="glql-ba-label">After</div>
                  <div className="glql-ba-desc">Shows &quot;0&quot; for empty results</div>
                  <div className="glql-ba-shot">
                    <img src="/images/shipping-into-code-after.png" alt="The same empty GLQL embedded view now showing a 0 count badge next to the title" />
                  </div>
                </div>
              </div>
              <figcaption>The fix in practice: an empty embedded view now shows a 0 in its header count, so a page of views can be scanned without opening each one.</figcaption>
            </figure>
          </div>

          <div className="case-study-section">
            <h2>Duo embed: ask for the view, keep the query</h2>
            <p>From day one the goal was to make GLQL easy for non-technical people while giving full control to the technical users GitLab is built for. The syntax served both, but it was still writing. Someone new to it had to know which fields existed and how to combine them before they saw anything useful.</p>
            <p>The view builder I designed lowered that barrier. It opened on a live result, so you saw your work before touching a single setting. But assembling a view was still friction.</p>
            <p>At the same time, GitLab was rolling out Duo&apos;s AI agents. So I brought Duo into the view builder and called it Duo embed. You pick it from the editor&apos;s insert menu and describe the view you want in plain language, like &quot;show me issues and epics with the Brouns label across my most important projects.&quot; Duo builds the GLQL query and renders the live table in place, before you insert anything.</p>

            <figure className="glql-video-figure">
              <video controls playsInline preload="metadata" className="glql-proto-video">
                <source src="/images/glql-duo-embed.mp4" type="video/mp4" />
                Your browser does not support the video element.
              </video>
              <figcaption className="glql-video-caption">Final Duo embed prototype: a plain-language prompt becomes a live embedded view, with the generated query one tab away.</figcaption>
            </figure>

            <img src="/images/glql-duo-flow.png" alt="The four-step flow: Duo embed in the editor's insert menu, an empty prompt in the Embedded view with Duo dialog, the prompt turned into filters with a live table, and the Query code tab showing the generated GLQL" />
            <p className="img-caption">The whole flow starts where people already write: one item in the insert menu, one prompt, a live view, and the query behind it.</p>

            <img src="/images/glql-duo-result.png" alt="A plain-language prompt turned into editable filter tokens for label and author, with a live GLQL table of results below" />
            <p className="img-caption">The prompt becomes filters you can see and change, with the live result underneath and a display switch for table, list, or ordered list.</p>

            <p>It is never a black box. The filters Duo generated show up as tokens you can remove or swap, and the Query code tab shows the exact GLQL it wrote. A power user can edit it line by line. Everyone else can ignore it. Because there is a real query underneath every answer, you can always see how you were understood and correct it.</p>

            <img src="/images/glql-duo-query-code.png" alt="The Query code tab of the same dialog showing the generated GLQL, editable, above the same live table" />
            <p className="img-caption">Same view, Query code tab: the generated GLQL is right there to read, edit, and rerun.</p>

            <p>The language stayed the foundation. The prompt became the fastest way in.</p>
          </div>

          <div className="case-study-section">
            <h2>Outcomes and what I learned</h2>
            <p>Adoption grew about a third in the early weeks, on the back of a solid product from the whole team and a discoverability push that put it in front of people. The result I am prouder of is quieter and lasts longer. Research became part of how the team decided what to build, which made the projects after this one, the Wiki sidebar and contextual comments, faster to agree on and build.</p>

            <p>What I would carry into the next one:</p>
            <ul>
              <li>Keep what works and refine the details. The query language was sound. Most of the design work was making it approachable.</li>
              <li>The syntax is the UX. Whatever a user touches first is the interface.</li>
              <li>Outcome first, settings second.</li>
              <li>Errors are part of the design, not cleanup.</li>
              <li>Design for the person who does not want to learn the tool.</li>
            </ul>

            <p>What I would do differently: set up the measurement earlier, so I could point to the design choices that drove adoption, and push sooner for the visual layer that non-technical users needed from the start.</p>
          </div>

          <div className="case-study-section">
            <h2>Links</h2>
            <ul>
              <li><a href="https://about.gitlab.com/blog/embedded-views-the-future-of-work-tracking-in-gitlab/" target="_blank" rel="noopener">Blog post<ExternalLinkIcon size={12} className="external-mark" /></a>, about.gitlab.com</li>
              <li><a href="https://docs.gitlab.com/user/glql/" target="_blank" rel="noopener">Documentation<ExternalLinkIcon size={12} className="external-mark" /></a>, docs.gitlab.com</li>
            </ul>
            <p>The scorecard run and the research studies behind these decisions sit in confidential GitLab issues and epics, so they cannot be linked here.</p>
          </div>

        </div>{/* /case-study-main */}
      </section>
  );
}
