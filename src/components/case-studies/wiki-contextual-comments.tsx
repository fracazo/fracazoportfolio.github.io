import type { ReactNode } from "react";
import { CaseStudyLayout } from "@/components/case-study-layout";
import { ExternalLinkIcon } from "@/components/icons";
import { TanukiMark } from "@/components/scene-marks";

/**
 * Body of the wiki-contextual-comments case study, without the route chrome.
 *
 * Lives apart from the route so the same content can render inside the work
 * panel on the home page. `breadcrumb` is a slot the route fills and the
 * panel leaves empty, since it doesn't belong beside the index.
 */
export function WikiContextualCommentsContent({
  breadcrumb,
}: {
  breadcrumb?: ReactNode;
} = {}) {
  return (
    <CaseStudyLayout
      icon={<TanukiMark size={36} />}
      brand="#fc6d26"
      title="Wiki contextual comments"
      subtitle="Tying discussion to the text, without the clutter"
      meta={[
        { label: "Role", value: "Product Designer" },
        { label: "Project type", value: "New feature" },
        { label: "Platform", value: ["GitLab SaaS", "Self-managed"] },
      ]}
      chapters={[
        { id: "wk-problem", label: "Comments with no context" },
        { id: "wk-research", label: "What others got wrong" },
        { id: "wk-approaches", label: "The layout problem" },
        { id: "wk-solution", label: "A hybrid sidebar" },
        { id: "wk-critique", label: "Decisions in critique" },
        { id: "wk-handoff", label: "Through to handoff" },
      ]}
      hero={
        <img src="/images/wiki-comments-sidebar.png" width={2896} height={2000} alt="A GitLab wiki page with contextual comments: highlighted passages in the text link to threaded discussions in a comments panel on the right" />
      }
    >
      <section className="section case-study-content">
        <div className="case-study-main">

        {breadcrumb}

          <p className="cs-intro">GitLab Wiki had comments, but they sat at the bottom of the page with no link to the text they discussed, so the real conversations happened in Slack. I designed a way to tie a discussion to the exact passage it refers to, without the cluttered pages Confluence users complain about, and took it from problem to engineering handoff.</p>

          <div className="case-study-section">
            <h2 id="wk-problem">Comments with no context</h2>
            <p>I put this problem on the roadmap. My UX scorecard run on Wiki, GitLab&rsquo;s structured check of how well a product&rsquo;s main jobs hold up, showed how hard it was to follow comments on long pages, and a scan of the main competitors showed every one of them already had contextual comments. I took both to the PM, who opened a design spike, and I owned the design from there: the constraints, the research, the architecture and the alignment, working asynchronously with the PM and two senior engineers.</p>
            <ul>
              <li><strong>No context.</strong> A note like &ldquo;the third paragraph is unclear&rdquo; left the author hunting for what it meant.</li>
              <li><strong>Decisions lived elsewhere.</strong> Real discussions happened in Slack or email, cut off from the document they shaped.</li>
              <li><strong>No status.</strong> Nothing showed whether feedback had been dealt with, so comments sat at the bottom forever.</li>
            </ul>
            <p>The team&rsquo;s goal was to make Wiki a real Confluence alternative for teams already in GitLab, and contextual comments were table stakes for that. The question wasn&rsquo;t whether to build them, but how to build them without the problem Confluence users report most: inline comments piling up until the page is a mess to read.</p>
          </div>

          <div className="case-study-section">
            <h2 id="wk-research">What the others got wrong</h2>
            <p>The first scan only asked whether competitors had contextual comments. Before sketching, I looked at how they handle contextual and general comments together.</p>
            <ul>
              <li><strong>Google Docs and Notion</strong> have excellent inline comments: highlight text and a thread opens in a side panel. But neither has page-level comments, and GitLab Wiki already had them in wide use.</li>
              <li><strong>Confluence</strong> is the one tool with both. On busy or public pages, the inline highlights pile up and the page gets noisy. That was the failure to avoid.</li>
              <li><strong>GitLab merge requests</strong> already had inline comments on code. The question was how to adapt that to prose, where you anchor to a selection rather than a line.</li>
            </ul>
            <p>The products with the best contextual comments had no general comments, and the only one with both had the messy-page problem. GitLab needed both, without that problem.</p>
          </div>

          <div className="case-study-section">
            <h2 id="wk-approaches">Three approaches, one layout problem</h2>
            <p>I recorded a walkthrough of the research and three directions for the team to review asynchronously.</p>
            <div className="wiki-cc-video">
              <div className="wiki-cc-video-embed">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/k_K77qX_lNw" title="Wiki Contextual Comments: Design Explorations" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <p className="glql-video-caption">My 13-minute walkthrough covering the competitive analysis, three design explorations, and the proposed layout direction. Shared in the issue for async review by the PM and engineers.</p>
            </div>
            <ul>
              <li><strong>Jump to the bottom.</strong> Selecting text scrolled you to the general comments with the quote filled in. Simple to build, but the jump broke reading, and the comment still lived far from its text.</li>
              <li><strong>Floating threads, Google Docs style,</strong> also listed at the bottom. The same comment in two places: exactly the Confluence clutter, plus no clear source of truth.</li>
              <li><strong>A tabbed sidebar</strong> with pages, contents and comments. Comments were hidden by default, so nobody would know a discussion existed.</li>
            </ul>
            <p>All three failed for the same reason: the page had no always-visible space for comments, because the table of contents took the right side. Solving comments meant solving the layout first. That turned a feature into a structural change, and it connected to the Wiki sidebar redesign I was running at the same time, where moving the navigation from right to left would free that space.</p>
          </div>

          <div className="case-study-section">
            <h2 id="wk-solution">A hybrid sidebar</h2>
            <p>The proposal restructured the page around a comments panel on the right:</p>
            <ul>
              <li><strong>Navigation moves left,</strong> freeing the right side without a third column or a narrower reading area.</li>
              <li><strong>A small marker in the text,</strong> one per highlight, instead of whole threads inline. The page stays readable.</li>
              <li><strong>The marker opens its thread in the panel,</strong> next to the document.</li>
              <li><strong>One panel for every comment.</strong> Contextual and general comments share one feed: one source of truth for the page.</li>
            </ul>
            <p>I named the trade-off to the PM up front: reaching a thread takes one more click than fully inline comments. We agreed it was worth it to protect reading, especially on public pages.</p>
          </div>

          <div className="case-study-section">
            <h2 id="wk-critique">Decisions in critique</h2>
            <p>I ran a design critique with a clear agenda: how to start a comment, floating versus sidebar, duplication, and resolved threads.</p>
            <div className="wiki-cc-video">
              <div className="wiki-cc-video-embed">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/67UZDRRE7gQ" title="Design Critique: Wiki Sidebar and Contextual Comments" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <p className="glql-video-caption">Full design critique session recording. Covers triggering mechanisms, floating vs. sidebar placement, comment duplication, resolved threads, orphaned comments, and edit mode integration.</p>
            </div>
            <p><strong>Select text, don&rsquo;t hover a line.</strong> GitLab&rsquo;s code review shows a comment icon when you hover a line, which suits code. For prose you want to pick any fragment, down to a single word, so text selection won. It&rsquo;s also what people know from Google Docs.</p>
            <p><strong>Everything is a comment.</strong> I asked whether contextual comments should also appear at the bottom. We landed on one feed, and an engineer put it best: &ldquo;Just everything is a comment. If it has a quote block attached to it, it&rsquo;s a line-level comment. If it doesn&rsquo;t, it&rsquo;s a doc comment.&rdquo; That became the design direction.</p>
            <p><strong>Sidebar first, floating later.</strong> The team liked my floating-comment explorations, but floating threads get hard to tell apart on nearby words, get hidden by the editor in edit mode, and add a lot of engineering work. The sidebar works in both modes, so it came first, and I documented floating comments as a future direction so engineering could plan for them.</p>
            <p><strong>Collapse the navigation when comments open.</strong> If you&rsquo;re in the comments, you don&rsquo;t need page navigation at the same time, so it collapses by default and can still be reopened.</p>
            <p><strong>Orphaned and resolved threads.</strong> When the commented text is edited away, the thread stays in the panel with its original quote and a marker that the content is gone, as Google Docs does. Resolving a thread removes its highlight and moves it to a collapsed section, so feedback can be closed without losing the record.</p>
            <img src="/images/wiki-comments-orphaned.png" alt="The comments panel with an Original content deleted marker on an orphaned thread, and resolved threads collapsed at the bottom" />
            <p className="img-caption">Edge cases in the panel: an orphaned thread keeps its record behind an &ldquo;Original content deleted&rdquo; marker, and resolved threads collapse at the bottom.</p>
          </div>

          <div className="case-study-section">
            <h2 id="wk-handoff">Through to handoff</h2>
            <p>Two senior engineers shaped the work. The frontend engineer arrived at the critique having reached a layout idea close to mine on their own, which settled the layout quickly. When the other asked whether the new comment box should open in the sidebar or a modal, the frontend engineer answered in the thread that a modal was slightly easier but a shared store was the better long-term investment. It was settled in the issue without a meeting, on the long-term experience rather than short-term convenience.</p>
            <p>To keep the first version focused, the scope was the comments panel, the markers on highlighted text, the single feed, resolved threads and orphaned comments. Floating comments were scoped out with the PM and the lead engineer. Editing in both the markdown and rich text editors went into its own linked issue, so it was tracked without slowing the first version.</p>
            <p>The PM reviewed the complete designs, I iterated on their comments and added the final files to the issue, and the PM closed the spike with the designs handed to engineering. Looking back, I&rsquo;d have named the scope change sooner. Solving this well meant changing the page layout, and saying that plainly at the start would have got us aligned faster than discovering it halfway through.</p>
          </div>

          <div className="case-study-section">
            <h2>Links</h2>
            <ul>
              <li><a href="https://gitlab.com/gitlab-org/gitlab/-/work_items/509789" target="_blank" rel="noopener">Product Design Spike: Contextual Discussions for Wiki Pages<ExternalLinkIcon size={12} className="external-mark" /></a>, the spike this work came from</li>
            </ul>
          </div>

        </div>
      </section>
    </CaseStudyLayout>
  );
}
