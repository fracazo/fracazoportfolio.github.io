import type { ReactNode } from "react";
import { CaseStudyLayout } from "@/components/case-study-layout";
import { ExternalLinkIcon } from "@/components/icons";
import { TanukiMark } from "@/components/scene-marks";

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
    <CaseStudyLayout
      icon={<TanukiMark size={36} />}
      brand="GitLab"
      title="GLQL"
      subtitle="GitLab Query Language"
      meta={[
        { label: "Role", value: "Product Designer" },
        { label: "Year", value: "2024–25" },
        { label: "Platform", value: "SaaS & Self-managed" },
      ]}
      stats={[
        { value: "+33%", label: "adoption in the first weeks after launch" },
        { value: "0", label: "critical bugs at launch" },
      ]}
      chapters={[
        { id: "glql-challenge", label: "The challenge" },
        { id: "glql-research", label: "Research" },
        { id: "glql-syntax", label: "The syntax is the UX" },
        { id: "glql-starting-point", label: "A starting point" },
        { id: "glql-duo-embed", label: "Ask for the view" },
        { id: "glql-outcomes", label: "Outcomes" },
      ]}
      link={{ href: "https://docs.gitlab.com/user/glql/", label: "docs.gitlab.com/user/glql" }}
      hero={
        <video autoPlay muted loop playsInline preload="metadata" poster="/images/glql-duo-result.png" aria-label="Duo embed: a plain-language prompt becomes a live embedded view">
          <source src="/images/glql-duo-embed.mp4" type="video/mp4" />
        </video>
      }
    >
      <section className="section case-study-content">
        <div className="case-study-main">

        {breadcrumb}

          <p className="cs-intro">GitLab Query Language (GLQL) was powerful, but you had to write queries by hand to use it. I made it work for people who had only ever used filters, without taking any power away from the experts. The end goal was simple to say: describe the view you want in plain words, and let AI write the query for you.</p>


          <div className="case-study-section">
            <h2 id="glql-challenge">The challenge</h2>
            <p>GLQL started as an experimental feature and a strong proof of concept. It was a technical solution designed for technical people, and it worked. The job it was meant to serve was easy to say and hard to do: let someone track work progress without stitching it together by hand across boards, milestones, and issues.</p>
            <p>Many of the people with that job were not the people it was first built for. They were used to filters and boards, not writing code, and asking them to start from an empty code block was a big step.</p>
            <p>The same tool had to serve two people with opposite instincts. A project manager who never wants to see a line of code, and a power user who expects a query to behave exactly like the ones they already write. Most query tools pick one of those people and lose the other.</p>
          </div>

          <div className="case-study-section">
            <h2 id="glql-vision">The vision</h2>
            <p>Where we wanted to end up: you describe what you want to see in plain words, GitLab Duo (GitLab&apos;s AI assistant) writes the query, and the live view appears in front of you. If you want to, you open the query and edit it. Nobody has to learn the language to get value from it, and the people who already know it keep full control.</p>
            <p>None of that was possible without the language. A query language is what let one view pull work from across groups and projects, and it was the only way to trial the feature at all. It was also what the AI would eventually write, so it had to be one a person could read and fix.</p>
            <p>The first release tested one narrow question. Can people query issues from other projects and see them as a table or a list? If the answer was yes, everything else in the vision had something to stand on.</p>
            <p>From there the work went in three steps: make the language readable, make it easy to start, then let people ask for what they want. The rest of this case study follows those steps.</p>
          </div>

          <div className="case-study-section">
            <h2 id="glql-role">My role</h2>
            <p>I owned four products across the Knowledge group as its designer, embedded with engineering. The GLQL team had built something powerful quickly, and research had not been part of how it got there yet. So my first job was not a screen. It was making design useful fast enough that it sped the team up instead of slowing it down.</p>
            <p>My way in was a UX scorecard run, GitLab&apos;s standing process where a designer walks a product&apos;s main jobs as a new user would and grades the experience. Scoring GLQL that way turned my concerns into an issue list the team could work through line by line, and it is what I took to the PM to make the case for proper research.</p>
          </div>

          <div className="case-study-section">
            <h2 id="glql-research">Research</h2>
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
            <h2 id="glql-syntax">Step one: the syntax is the UX</h2>
            <p>Three syntax options were on the table, and SQL was the natural pick. Clean, familiar to the technical users GLQL was first built for, with a tidy separation of concerns.</p>
            <p>SQL would have bought us something real. Technical users would have felt at home on day one. What it would have cost was everyone else, and the vision depended on everyone else. A query Duo writes later has to be one a project manager can read and correct, and SQL also brought expectations our language could not meet.</p>
            <p>My argument was that the syntax is the first thing a user touches, so it is the interface, and we should test it with the people we wanted to reach before locking it in. We tested it. The plain-language option won, and we shipped it with full backward compatibility, so nobody who had already written queries had to rewrite them.</p>

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
            <h2 id="glql-starting-point">Step two: bring the starting point in-product</h2>
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

            <p>It also showed me what the last step had to beat. If people already started from someone else&apos;s example, a prompt that writes the example for you was the natural next move.</p>
          </div>

          <div className="case-study-section">
            <h2 id="glql-discoverability">Getting it found</h2>
            <p>Even a strong feature has to be found before it gets used. I led the discoverability work: surfacing the feature inside the editor at the moment someone is writing, getting it placed as a primary item in the release post, and featuring it in GitLab&apos;s What&apos;s New. Adoption grew about a third in the first weeks after launch alongside that push.</p>

            <figure className="glql-figure-pair">
              <div className="glql-figure-pair-grid">
                <img src="/images/discoverability-popover.png" alt="A discoverability popover surfacing GLQL inside the editor while a user is writing" />
                <img src="/images/discoverability-popover2.png" alt="A second view of the in-editor discoverability popover promoting GLQL embedded views" />
              </div>
              <figcaption>Discoverability by design: surfacing GLQL inside the editor at the moment someone is writing.</figcaption>
            </figure>
          </div>

          <div className="case-study-section">
            <h2 id="glql-shipping">Shipping in code</h2>
            <p>I did not hand off a spec and walk away. I worked in the same repository as the engineers, through the same review, and merged to production myself.</p>
            <p>One example: an empty embedded view showed no count at all, so you could not scan a page of views and tell which ones had no results without opening each one. The cause was a shared component used in over fifty places that could only show a zero when it also had an icon. I fixed it without breaking the other places, wrote the tests, and shipped it. Being held to the same bar as the engineers is what earned the team&apos;s trust.</p>

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
            <h2 id="glql-duo-embed">Step three: ask for the view, keep the query</h2>
            <p>The readable syntax served both audiences, but it was still writing. Someone new to it had to know which fields existed and how to combine them before they saw anything useful.</p>
            <p>The view builder I designed lowered that barrier. It opened on a live result, so you saw your work before touching a single setting. But assembling a view was still friction.</p>
            <p>When GitLab rolled out Duo&apos;s AI agents, the vision became buildable. I brought Duo into the view builder and called it Duo embed. You pick it from the editor&apos;s insert menu and describe the view you want in plain language, like &quot;show me issues and epics with the Brouns label across my most important projects.&quot; Duo builds the GLQL query and renders the live table in place, before you insert anything.</p>

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

            <p>This is where the first two steps paid off. Duo could only write queries people could check because the language was readable, and power users kept their control because every answer was a real query. The language stayed the foundation. The prompt became the fastest way in.</p>
          </div>

          <div className="case-study-section">
            <h2 id="glql-next-steps">Next steps of the vision</h2>
            <p>Each next step came out of something the first release or the research taught us.</p>
            <ul>
              <li><strong>More than issues.</strong> The first release proved people wanted to pull issues from other projects into one view. The same need applied to the rest of their work, like epics, so the next step was widening what a view could show.</li>
              <li><strong>Start from a prompt, not a blank query.</strong> People already began from someone else&apos;s example. Letting Duo write that example for them was the shortest path to a first working view.</li>
              <li><strong>Error messages that guide.</strong> People found their way by running a query and reading the error. Clearer errors help everyone who still writes queries by hand.</li>
              <li><strong>The query always stays editable.</strong> An AI answer has to be something you can check and fix, and power users had to keep the control they came for.</li>
            </ul>
          </div>

          <div className="case-study-section">
            <h2 id="glql-outcomes">Outcomes and what I learned</h2>
            <p>Adoption grew about a third in the early weeks, on the back of a solid product from the whole team and a discoverability push that put it in front of people. Duo embed took the work from that first release to a final prototype of the end goal. The result I am prouder of is quieter and lasts longer. Research became part of how the team decided what to build, which made the projects after this one, the Wiki sidebar and contextual comments, faster to agree on and build.</p>

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
            <h2 id="glql-links">Links</h2>
            <ul>
              <li><a href="https://about.gitlab.com/blog/embedded-views-the-future-of-work-tracking-in-gitlab/" target="_blank" rel="noopener">Blog post<ExternalLinkIcon size={12} className="external-mark" /></a>, about.gitlab.com</li>
              <li><a href="https://docs.gitlab.com/user/glql/" target="_blank" rel="noopener">Documentation<ExternalLinkIcon size={12} className="external-mark" /></a>, docs.gitlab.com</li>
            </ul>
            <p>The scorecard run and the research studies behind these decisions sit in confidential GitLab issues and epics, so they cannot be linked here.</p>
          </div>

        </div>{/* /case-study-main */}
      </section>
    </CaseStudyLayout>
  );
}
