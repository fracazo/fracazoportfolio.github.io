import type { Metadata } from "next";
import { CaseStudyShell } from "@/components/case-study-shell";

const title = "Wiki Contextual Comments - Alex Fracazo";
const description = "Designing contextual discussions for GitLab Wiki, positioning it as a competitive alternative to Confluence and Notion for async collaboration.";

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

export default function WikiContextualComments() {
  return (
    <CaseStudyShell backHref="/case-studies/gitlab" backLabel="Back to GitLab">
      <section className="section case-study-content">
        <div className="case-study-main">

          <nav className="breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a><span className="breadcrumb-sep"> &gt; </span><a href="/work">Work</a><span className="breadcrumb-sep"> &gt; </span><a href="/case-studies/gitlab">GitLab</a><span className="breadcrumb-sep"> &gt; </span><span>Wiki Contextual Comments</span>
          </nav>

          <header className="case-header">
            <h1 className="case-title">Wiki Contextual Comments</h1>
            <div className="case-metadata-card">
              <div className="metadata-content">
                <div className="metadata-item">
                  <svg className="metadata-icon" width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M6 3.75A2.75 2.75 0 0 1 8.75 1h2.5A2.75 2.75 0 0 1 14 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 0 1 6 4.193V3.75Zm6.5 0v.325a41.622 41.622 0 0 0-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25ZM10 10a1 1 0 0 0-1 1v.01a1 1 0 0 0 1 1h.01a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1H10Z" clipRule="evenodd"/><path d="M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 0 1-9.274 0C3.985 17.585 3 16.402 3 15.055Z"/></svg>
                  <div className="metadata-text">
                    <p className="metadata-label">Product</p>
                    <p className="metadata-value">GitLab Wiki</p>
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
                    <p className="metadata-value">Sole Product Designer</p>
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
            <p className="case-intro">Designed a contextual commenting system for GitLab Wiki that lets users comment on specific sections of content without the visual clutter seen in Confluence. Completed a full design spike, conducted extensive competitor analysis across Google Docs, Notion, Confluence, and Coda, and delivered designs that are now in active engineering development.</p>
          </header>

          <ul className="case-stats" role="list">
            <li><span className="case-stat-value">5</span><span className="case-stat-label">competitor products analysed in depth</span></li>
            <li><span className="case-stat-value">3</span><span className="case-stat-label">interaction models explored and tested</span></li>
            <li><span className="case-stat-value">2025</span><span className="case-stat-label">in active engineering development</span></li>
          </ul>

          <div className="summary-card">
            <h2><img src="/images/bookmark.svg" alt="" width="24" /> Summary</h2>
            <p>GitLab Wiki had a comments section at the bottom of every page, but discussions about specific content happened scattered across Slack, email, and meetings. There was no way to tie a conversation to the exact line of text it referred to. This was a well-understood competitive gap against Confluence and Notion. I was assigned a design spike to solve it, and what started as a scoped exploration became a full design system: a hybrid sidebar and contextual comment approach that addressed the "messy page" problem that Confluence users consistently complained about.</p>
          </div>

          <div className="case-study-section">
            <h2>My Role and Context</h2>

            <h3>Starting from a spike</h3>
            <p>This work began as a product design spike, issue #509789, created by the PM to scope the problem before committing to a full design cycle. I was assigned to it and took ownership of the design direction from day one. There was no brief beyond the problem statement. I had to define the constraints, conduct the competitor research, propose the architecture, and get cross-functional alignment, all while keeping the PM and two senior engineers in the loop asynchronously.</p>

            <p>The challenge wasn't just designing a commenting feature. It was deciding where comments should live in an interface that already had comments at the bottom, a sidebar navigation on the right, and a full-width reading area. Adding a new discussion layer to this without breaking the existing mental model required thinking about the wiki layout as a whole, not just as a UI component.</p>

            <h3>The broader wiki context</h3>
            <p>This project ran in parallel with the Wiki Sidebar Redesign, where I was also rethinking how the sidebar navigation worked. Moving the sidebar from right to left was partly motivated by this project. A left-positioned navigation would free up the right side of the screen for a comments panel, making the two projects architecturally connected. I was designing both at the same time, which required keeping a consistent layout vision across separate issues and separate engineering conversations.</p>
          </div>

          <div className="case-study-section">
            <h2>Problem Definition</h2>

            <h3>Where discussions were actually happening</h3>
            <p>The existing wiki experience had a general comments section at the bottom of every page. In practice, this created several problems:</p>

            <ul>
              <li>Comments at the bottom had no connection to the specific text they referred to. A reviewer would leave a note like "the third paragraph is unclear" and the author had to hunt for the context.</li>
              <li>Substantive discussions about content happened in Slack or email, creating a permanent disconnect between the decision and the document it informed.</li>
              <li>There was no way to track whether a piece of feedback had been addressed or resolved. Comments lived at the bottom indefinitely with no status.</li>
            </ul>

            <p>This wasn't a niche problem. It was a core reason teams used Confluence or Notion instead of GitLab Wiki for collaborative documentation. Both products had solved inline commenting years earlier.</p>

            <h3>The competitive gap</h3>
            <p>GitLab's positioning for the Knowledge team was to make Wiki a genuine Confluence alternative for teams already working in GitLab. Contextual comments were a table-stakes feature for that positioning. The question wasn't whether to build them. It was how to build them without the problems that Confluence users consistently reported.</p>

            <p>The most cited complaint about Confluence's inline comments: they made pages visually messy, especially on public-facing or high-traffic documentation. Comments accumulated over time, could no longer be resolved if the underlying text changed, and created a fragmented reading experience for anyone who hadn't participated in the discussion. That was the problem to avoid.</p>
          </div>

          <div className="case-study-section">
            <h2>Design Explorations</h2>

            <h3>Competitive analysis</h3>
            <p>Before sketching anything, I mapped how five products handled the intersection of contextual and general comments. The key distinction I was looking for: which products had both, and how did they manage the tension between them.</p>

            <ul>
              <li><strong>Google Docs and Notion:</strong> Excellent inline commenting experience. You highlight text, a comment icon appears, and the thread opens in a right-side panel anchored to that text. Clean and intuitive. The limitation: neither product has a general comments section. All discussions are contextual. That doesn't work for GitLab Wiki, where page-level discussions already exist and are widely used.</li>
              <li><strong>Confluence:</strong> The only major tool that combines both contextual and general comments. Contextual comments appear as highlighted text inline, with threads accessible via click. General comments live at the bottom. The problem I found in user research and public reports: on high-traffic or public-facing pages, the inline highlights accumulate and make the page feel messy. Multiple people commenting simultaneously creates visual noise that's hard to navigate. This was the primary failure mode I was designing to avoid.</li>
              <li><strong>Medium:</strong> The product that first made contextual comments mainstream. When you highlight text, a comment icon appears inline and the comment is anchored to that passage as you read. It was a widely celebrated interaction when it launched. Medium's approach is clean because it has no general comment section competing for attention, but it was the clearest reference for what the interaction should feel like.</li>
              <li><strong>GitLab Merge Requests:</strong> GitLab already had inline commenting on code. The familiar pattern of selecting a line and adding a comment existed in the product. The question was how to adapt that for prose content in a wiki, where the anchor is a text selection rather than a line number.</li>
            </ul>

            <p>The core insight from the analysis: the products with the best contextual comment UX (Google Docs, Notion, Medium) had no general comment section. The only product with both (Confluence) had the messy page problem. GitLab needed both and couldn't afford the Confluence problem. That framed the design challenge clearly.</p>

            <h3>Three approaches explored</h3>
            <p>I recorded a 13-minute walkthrough presenting the full competitive analysis and three design directions to the team for async review and feedback:</p>

            <div className="wiki-cc-video">
              <div className="wiki-cc-video-embed">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/k_K77qX_lNw" title="Wiki Contextual Comments: Design Explorations" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <p className="glql-video-caption">13-minute walkthrough covering the competitive analysis, three design explorations, and the proposed layout direction. Shared in the issue for async review by the PM and engineers.</p>
            </div>

            <p><strong>Approach 1: Simple integration.</strong> Select text, a comment button appears, and clicking it scrolls the page to the general comments section with the selected text pre-filled as context. The simplest implementation path. Rejected because on long wiki pages, the auto-scroll behaviour was jarring and broke the reading flow. More importantly, it didn't actually give users contextual comments while reading, the comment lived at the bottom, disconnected from the content it referred to. That defeated the purpose.</p>

            <p><strong>Approach 2: Floating comments (Google Docs style).</strong> Contextual comments appear as floating threads anchored next to the selected text, with the same thread also visible in the general comments section at the bottom. Rejected because it created direct duplication: the same comment appeared in two places simultaneously. This created the exact Confluence problem: a messy, repetitive page where the same discussions surfaced multiple times. It also raised an unresolved question about which surface was the source of truth.</p>

            <p><strong>Approach 3: Tabbed sidebar.</strong> A right-side sidebar with tabs for Pages, Table of Contents, and Comments. Contextual comments would live in the Comments tab. Rejected because comments were hidden by default. Users arriving at a page would have no indication that a discussion was already in progress. The discoverability was too low, and the risk of duplicate discussions being started in Slack or email remained high.</p>

            <h3>The layout problem underlying all three</h3>
            <p>All three approaches failed for the same underlying reason: the existing wiki layout had no dedicated, always-visible space for comments. The table of contents occupied the right side of the page, leaving nowhere to surface contextual discussions without either hiding them or duplicating them. Solving the comment UX well required first solving the layout. That realisation shifted the scope of the project from a feature design to a structural one.</p>
          </div>

          <div className="case-study-section">
            <h2>Proposed Solution</h2>

            <h3>A hybrid sidebar approach</h3>
            <p>The proposed solution restructured the wiki page layout to create a dedicated right-side comments panel. The key elements of the approach:</p>

            <ul>
              <li><strong>Sidebar repositioned to the left.</strong> Moving the wiki page navigation from right to left freed the right side of the screen for comments without adding a third column or compressing the reading area.</li>
              <li><strong>Minimal contextual indicators in the content.</strong> Rather than rendering full comment threads inline (the Confluence approach), a small indicator appears next to highlighted text. One floating comment bubble per highlight, not a full thread. The content stays readable.</li>
              <li><strong>Clicking the indicator navigates to the thread in the sidebar.</strong> The full thread lives in the right-side comments panel alongside the document. This gave users the thread context they needed without the visual clutter of inline rendering.</li>
              <li><strong>General comments and contextual comments unified in one panel.</strong> Rather than creating two separate comment surfaces, both types of comments appeared in the same right-side panel, with contextual comments anchored to their source text and general comments at the bottom. One source of truth for all page discussions.</li>
            </ul>

            <p>The tradeoff I acknowledged directly with the PM: navigating to the thread required one extra click compared to a purely inline model. The team agreed this was an acceptable tradeoff to preserve the reading experience, especially for public-facing wiki pages.</p>

            <img src="/images/wiki-comments-sidebar.png" alt="GitLab wiki page with contextual comments: highlighted passages in the content link to threaded discussions in a dedicated right-side comments panel" />
            <p className="img-caption">The hybrid approach in the product: highlighted passages anchor to threads in a unified right-side comments panel, with general comments in the same feed.</p>

            <h3>MVC scope</h3>
            <p>After the design critique session (linked below), we aligned on a clear MVC scope:</p>

            <ul>
              <li>Sidebar comments panel (right side)</li>
              <li>Contextual indicators on highlighted text</li>
              <li>Centralised comments view showing all discussions in one space</li>
              <li>Resolved thread status indicators</li>
              <li>Handling for deleted or edited content within comment threads</li>
            </ul>

            <p>Floating comments alongside the text (a Phase 2 vision) were explicitly scoped out of the MVC after discussion with the PM and the lead engineer. I documented this decision in the issue so there was no ambiguity about what was in scope for the first engineering sprint.</p>

            <h3>Design critique session</h3>
            <p>I structured the session with a clear agenda: competitive reference, two triggering options, the floating vs. sidebar question, comment duplication, and resolved thread handling. The session produced several concrete decisions.</p>

            <div className="wiki-cc-video">
              <div className="wiki-cc-video-embed">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/67UZDRRE7gQ" title="Design Critique: Wiki Sidebar and Contextual Comments" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <p className="glql-video-caption">Full design critique session recording. Covers triggering mechanisms, floating vs. sidebar placement, comment duplication, resolved threads, orphaned comments, and edit mode integration.</p>
            </div>

            <h3>Key decisions from the session</h3>

            <p><strong>Triggering mechanism: text selection wins over line hover.</strong> I presented two options. Option 1 showed a comment button when text was selected. Option 2 adapted GitLab's MR inline comment pattern, showing an icon on line hover. The team aligned on Option 1. Line hover worked well for code because comments anchored to a whole line, but for prose you want to select any fragment of text, as granular as a single word. Text selection was more specific, matched Google Docs, and was easier to discover.</p>

            <p><strong>One unified comment panel, no duplication.</strong> I asked directly whether contextual comments should also appear in the general comments section at the bottom. The discussion was substantive. The team landed on a single centralised panel where everything lived together, with contextual comments showing their quoted text anchor and general comments appearing at the bottom of the same feed. The distinction between "inline" and "general" was removed. As one engineer put it: "Just everything is a comment. If it has a quote block attached to it, it's a line-level comment. If it doesn't, it's a doc comment." I synthesised that into the design direction immediately.</p>

            <p><strong>Sidebar first, floating comments as a future phase.</strong> The team was genuinely excited by the floating comment explorations I showed in Figma, but we reasoned through the tradeoffs together. Floating comments have a specific advantage: you can see the comment in context while reading. But they also have real problems: multiple comments on adjacent words become hard to distinguish, they don't work when you're in edit mode since they'd be obscured by the editor, and they add significant engineering complexity. The sidebar gave us a single consistent location, worked in both read and edit modes, and was the right place to start. I proposed adding the floating concept to the design system as a documented future direction, which meant engineering could plan for it without it blocking the MVC.</p>

            <p><strong>Auto-collapsing the wiki nav.</strong> I proposed that when a user opens the comments panel, the wiki page navigation collapses automatically to free up space. The reasoning was simple: if you are interacting with the comments sidebar, there is no realistic scenario where you also need the page navigation open at the same time. The team agreed. Users could still manually reopen the nav if needed, but the default behaviour would keep the layout clean.</p>

            <p><strong>Orphaned comments.</strong> I raised the edge case of what happens when someone comments on a specific passage and the author later edits or deletes that text. I came prepared with how Google Docs handles it, surfacing orphaned comments with a visual indicator. The team agreed GitLab should handle it similarly: keep the comment visible in the panel with the original quoted text preserved, and add a status indicator to show the anchor is gone. This was captured as a design requirement for the MVC.</p>

            <img src="/images/wiki-comments-orphaned.png" alt="Comments panel showing an 'Original content deleted' indicator on an orphaned thread, and a collapsed resolved threads section" />
            <p className="img-caption">Edge cases in the panel: an orphaned thread keeps its record behind an "Original content deleted" indicator, and resolved threads collapse at the bottom.</p>

            <p><strong>Resolved threads.</strong> The team aligned on following the design management pattern: resolving a thread removes the highlight from the content and moves the thread to a collapsed "resolved" section in the panel. This gave authors a clear way to close out feedback without losing the record.</p>

            <p>At the end of the session I committed to mocking up the unified comment panel, the edit mode interaction, and the floating comment concept as a documented future vision. All three were delivered in the subsequent design iteration.</p>


          </div>

          <div className="case-study-section">
            <h2>Cross-functional Process</h2>

            <h3>Working async with engineers</h3>
            <p>This project involved two senior engineers with strong opinions about the implementation: Janis Altherr, who had deep familiarity with the wiki frontend, and Alexandru Croitor, who raised early engineering concerns about comment state management.</p>

            <p>Janis had been thinking about the wiki layout problem independently and came to the design critique with a concrete suggestion: auto-collapse the super sidebar when a wiki page is opened and position a wiki-specific sidebar on the left. His thinking aligned closely with my own direction, which accelerated the layout decision significantly. Getting alignment from an engineer who had already thought through the constraints saved multiple back-and-forth cycles.</p>

            <p>Alexandru raised a question about whether the new comment box should open in the sidebar or as a modal when the floating comment button was clicked. Janis weighed in directly in the issue thread, noting that a modal was slightly easier from an engineering standpoint but that building a shared store was a better long-term investment regardless. The discussion concluded in the issue without needing a meeting, and the design decision was made based on the ultimate UX vision rather than the short-term engineering convenience.</p>

            <h3>Handling hard questions</h3>
            <p>Two significant edge case questions came up during the cross-functional review:</p>

            <p><strong>What happens when the original text is deleted?</strong> If a user comments on a specific paragraph and the author then deletes or rewrites that paragraph, the contextual anchor breaks. This is a known problem in Google Docs, which surfaces orphaned comments with a warning. I documented the GitLab approach for this in the designs: orphaned comments surface in the centralised view with a "content removed" indicator, giving users visibility without breaking the reading experience.</p>

            <p><strong>Do contextual comments work in both the markdown and rich text editors?</strong> The PM flagged this as a requirement for a complete solution. I scoped the edit mode designs into a separate issue (#560758) to keep the MVC focused while ensuring the problem was captured and tracked. The two issues were linked so engineering could plan both in sequence.</p>

            <h3>Shipping the handoff</h3>
            <p>After the PM reviewed the complete designs and left comments, I iterated, updated the design management section in the issue with the final files, and changed the status to In Dev. The PM confirmed all designs were complete and closed the spike issue. The feature moved into the engineering Beta epic for implementation.</p>
          </div>

          <div className="case-study-section">
            <h2>Outcomes</h2>

            <h3>What shipped from this work</h3>
            <ul>
              <li>Complete MVC design system for contextual comments on wiki pages, covering default view, hover state, comment creation, centralised comments view, resolved thread states, and multi-comment scenarios</li>
              <li>Designs for both the comments sidebar in read mode and the integration with the wiki layout restructure</li>
              <li>Clear documentation of scope decisions (MVC vs. Phase 2 floating comments) in the issue, reducing ambiguity at engineering handoff</li>
              <li>The feature moved to In Dev status and is tracked in the Wiki Contextual Discussions Beta epic for implementation</li>
            </ul>

            <h3>What I'd approach differently</h3>
            <p>The scope creep from a design spike to a full layout redesign was the right call, but it took longer than expected to get explicit alignment on the fact that we were now designing a layout change, not just a commenting feature. I'd surface that scope shift earlier and more explicitly next time, with a clear framing like: "solving this well requires changing the page layout. Are we aligned on that?" rather than discovering the connection mid-exploration.</p>

            <p>I'd also push earlier for a prototype users could interact with. Most of the design review happened through video walkthroughs and static designs, which worked well for the team but wouldn't be sufficient if we run solution validation before the engineering build completes. Having a clickable prototype ready earlier would make that research easier to execute.</p>

            <h3>Broader impact</h3>
            <p>This project, combined with the sidebar redesign, set the architectural foundation for GitLab Wiki as a Confluence alternative. Contextual comments were the single most-requested feature in competitive comparisons. Completing the design system positions the team to ship a feature that directly addresses the gap that drives teams toward Confluence, on a product they are already using for code and project management.</p>
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
            <a href="/files/resume_alexfracazo_2026_ats.pdf" target="_blank" rel="noopener" className="btn btn-ghost">Résumé (PDF)</a>
            <a href="https://www.linkedin.com/in/fracazo" target="_blank" rel="noopener" className="btn btn-ghost">LinkedIn</a>
          </div>
        </div>
        <div className="case-next">
          <a href="/case-studies/bringing-visibility-to-workers-status"><span className="case-next-label">Next case study</span><span className="case-next-title">Worker Status Visibility at Hireup</span></a>
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
