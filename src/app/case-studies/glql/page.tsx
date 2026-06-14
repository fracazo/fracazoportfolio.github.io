import type { Metadata } from "next";
import { CaseStudyShell } from "@/components/case-study-shell";

const title = "GLQL / Embedded Views - Alex Fracazo";
const description =
  "Turning a query language built by engineers into something a non-technical person could actually use, without taking any power away from the experts.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: ["/images/opengraph.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/opengraph.jpg"],
  },
};

export default function Glql() {
  return (
    <CaseStudyShell backHref="/case-studies/gitlab" backLabel="Back to GitLab">
      <section className="section case-study-content">
        <div className="case-study-main">

          <nav className="breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a><span className="breadcrumb-sep"> &gt; </span><a href="/work">Work</a><span className="breadcrumb-sep"> &gt; </span><a href="/case-studies/gitlab">GitLab</a><span className="breadcrumb-sep"> &gt; </span><span>GLQL / Embedded Views</span>
          </nav>

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
                    <p className="metadata-value">Sole Product Designer · Knowledge team</p>
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
            <p className="case-intro">Turning a query language built by engineers into something a non-technical person could actually use, without taking any power away from the experts.</p>
          </header>

          <ul className="case-stats" role="list">
            <li><span className="case-stat-value">+33%</span><span className="case-stat-label">adoption growth in the first weeks post-GA</span></li>
            <li><span className="case-stat-value">94%</span><span className="case-stat-label">balanced scorecard score</span></li>
            <li><span className="case-stat-value">0</span><span className="case-stat-label">critical bugs at GA launch</span></li>
          </ul>

          <div className="case-study-section">
            <blockquote>Adoption grew about a third in the first weeks after GA, driven by discoverability I designed.</blockquote>
          </div>

          <div className="case-study-section">
            <h2>The challenge</h2>
            <p>GLQL launched as an experimental engineering feature. Powerful, and built with no user input. The job it was meant to serve was easy to say and hard to do: let someone track work progress without stitching it together by hand across boards, milestones, and issues.</p>
            <p>The catch showed up fast. The same tool had to serve two people with opposite instincts. A project manager who never wants to see a line of code, and a power user who expects a query to behave exactly like the ones they already write. Most query tools pick one of those people and lose the other.</p>
          </div>

          <div className="case-study-section">
            <h2>My role</h2>
            <p>I was the only designer on the team, in an engineering-led group with no design practice, no research process, and no shared way of deciding what users actually needed. So the first job was not a screen. It was earning the right to be in the room, and making design useful fast enough that it sped the team up instead of slowing it down.</p>
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
              <figcaption className="glql-video-caption">Early prototype recording (Aug 2024), produced with Himanshu Kapoor before any design refinements, showing the raw capability of GLQL. Used internally to gather early feedback and build cross-functional alignment on what the feature could become.</figcaption>
            </figure>
          </div>

          <div className="case-study-section">
            <h2>Decision one: the syntax is the UX</h2>
            <p>Three syntax options were on the table, and the engineering instinct was to move toward SQL. Clean, familiar, a tidy separation of concerns. My argument was that the syntax is the first thing a user touches, so it is the interface, and we should not lock it on instinct before testing it. We tested it. The plain-language option won, and we shipped it with full backward compatibility.</p>

            <div className="glql-syntax-group">
              <div className="glql-syntax-card">
                <div className="glql-syntax-label">Option 1: YAML frontmatter + query <span className="glql-syntax-tag glql-syntax-tag--current">Current</span></div>
                <pre className="glql-code">{`---
display: table
fields: state, title, labels("workflow")
---
project = "gitlab-org/gitlab" and milestone = "17.4" and label = "group::knowledge"`}</pre>
                <p className="glql-syntax-note">Presentation options live in YAML frontmatter above the query. The query itself is a plain expression. Separation is visual but the two live inside the same code block.</p>
              </div>

              <div className="glql-syntax-card">
                <div className="glql-syntax-label">Option 2: Pure YAML, query as a property <span className="glql-syntax-tag glql-syntax-tag--winner">Plain-language winner</span></div>
                <pre className="glql-code">{`display: table
fields: state, title, labels("workflow")
filter: project = "gitlab-org/gitlab" and milestone = "17.4" and label = "group::knowledge"`}</pre>
                <p className="glql-syntax-note">The entire block is YAML. The query becomes a <code>filter:</code> property. No frontmatter delimiter needed. Reads top-to-bottom like a configuration file.</p>
              </div>

              <div className="glql-syntax-card">
                <div className="glql-syntax-label">Option 3: SQL-style syntax</div>
                <pre className="glql-code">{`SELECT state, title, labels("workflow")
WHERE project = "gitlab-org/gitlab"
  AND milestone = "17.4"
  AND label = "group::knowledge"
DISPLAY AS table`}</pre>
                <p className="glql-syntax-note">Full SQL-adjacent syntax. Familiar to data-literate users but risks importing SQL expectations that GLQL doesn&apos;t fully support.</p>
              </div>
            </div>
          </div>

          <div className="case-study-section">
            <h2>Decision two: bring the starting point in-product</h2>
            <p>User testing surfaced a behavior I had not designed for: people did not write queries from scratch. They found an example in the documentation, copied it, pasted it into GitLab, and adjusted from there. The docs were the starting point and the product was the workbench, with a round trip between the two every time they got stuck.</p>

            <img src="/images/glql-decision2.gif" alt="The GitLab documentation page for GLQL embedded views, the source users copied examples from" />
            <p className="img-caption">The starting point in almost every session: an example copied straight from the GLQL documentation, then pasted into GitLab to try.</p>

            <p>That told me where GLQL belonged. If the real workflow was copy from the docs and try it in the product, the design job was to close that gap and pull the starting point in-product: working examples and templates surfaced inside the editor, so the first usable query was one click away instead of a tab away. That insight set the direction for the discoverability work that followed, and for the visual builder.</p>
          </div>

          <div className="case-study-section">
            <h2>Driving adoption through design</h2>
            <p>A good feature buried in a menu nobody opens is a feature nobody uses. The metric itself was the PM&apos;s call, as the person who owned that decision, and we measured adoption. What I owned was moving that number. I led the discoverability work: surfacing the feature inside the editor at the moment someone is writing, getting it placed as a primary item in the release post, and featuring it in GitLab&apos;s What&apos;s New. Adoption grew about a third in the first weeks after GA alongside that push.</p>

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
            <h2>The vision: a visual query builder</h2>
            <p>From day one the goal was the person who does not want to learn a query language. The syntax made GLQL usable. This was the vision that would have made it effortless.</p>
            <p>A visual builder, where one click drops in a smart template and you see a live view of your own work immediately, then adjust only if you want to. Outcome first, settings second.</p>

            <img src="/images/builder-final.gif" alt="An embeddable view adding without needing to write code" />
            <p className="img-caption">The vision in motion: adding an embeddable view and seeing live results immediately, without writing a query.</p>

            <p>The research said this was the right direction for non-technical users. The work then grew into a platform-wide initiative beyond our team&apos;s scope, so it did not ship from us. I documented it fully so the thinking would not be lost, and I still believe it is where this should go.</p>
          </div>

          <div className="case-study-section">
            <h2>Outcomes and what I learned</h2>
            <p>Adoption grew about a third in the early weeks, driven by the discoverability work. The result I am prouder of is quieter and lasts longer: I joined a team with no research process and no design practice and left it with both, which made the projects after this one, the Wiki sidebar and contextual comments, faster and less contentious to build.</p>

            <p>What I would carry into the next one:</p>
            <ul>
              <li>The syntax is the UX. The first thing a user touches is the interface, whatever engineering calls it.</li>
              <li>Outcome first, settings second.</li>
              <li>Errors are part of the design, not cleanup.</li>
              <li>Design for the person who does not want to learn the tool.</li>
            </ul>

            <p>What I would do differently: set up the measurement earlier, so I could show not just that adoption grew but which design choices drove it, and push sooner for the visual layer that non-technical users needed from the start.</p>
          </div>

        </div>{/* /case-study-main */}
      </section>

      {/* Work with me */}
      <section className="section case-study-content" aria-label="Work with Alex">
        <div className="case-cta">
          <h2>Work with me</h2>
          <p>I'm available for product design roles and contract engagements, hybrid in Melbourne or remote (UTC+10). If the way I work resonates, let's talk.</p>
          <div className="case-cta-actions">
            <a href="mailto:fracazo@duck.com" className="btn btn-primary">Email me</a>
            <a href="/resume" className="btn btn-ghost">Résumé</a>
            <a href="https://www.linkedin.com/in/fracazo" target="_blank" rel="noopener" className="btn btn-ghost">LinkedIn</a>
          </div>
        </div>
        <div className="case-next">
          <a href="/case-studies/wiki-contextual-comments"><span className="case-next-label">Next case study</span><span className="case-next-title">Wiki Contextual Comments</span></a>
        </div>
        </section>

      {/* Footer */}
      <section className="section" aria-labelledby="footer-title">
        <footer role="contentinfo">
          <div className="footer-inner">
            <p id="footer-title" className="text footer-location">Based in Melbourne. Working globally.</p>
            <p className="text footer-links">
              You can find me on <a href="http://www.linkedin.com/in/fracazo" target="_blank" rel="noopener">LinkedIn</a>, or <a href="/contact">reach me by email</a>.
            </p>
          </div>
        </footer>
      </section>
    </CaseStudyShell>
  );
}
