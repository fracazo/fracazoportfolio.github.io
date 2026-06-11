import type { Metadata } from "next";
import { CaseStudyShell } from "@/components/case-study-shell";

const title = "Summarize Merge Request with AI - Alex Fracazo";
const description = "How three iterations and a Qualtrics survey reshaped an AI feature from reviewer-facing summary to author-facing writing assistant.";

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

export default function MrSummaryAi() {
  return (
    <CaseStudyShell backHref="/case-studies/gitlab" backLabel="Back to GitLab">
      <section className="section case-study-content">
        <div className="case-study-main">

          <nav className="breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a><span className="breadcrumb-sep"> &gt; </span><a href="/work">Work</a><span className="breadcrumb-sep"> &gt; </span><a href="/case-studies/gitlab">GitLab</a><span className="breadcrumb-sep"> &gt; </span><span>Summarize MR with AI</span>
          </nav>

          <header className="case-header">
            <h1 className="case-title">Summarize Merge Request with AI</h1>
            <div className="case-metadata-card">
              <div className="metadata-content">
                <div className="metadata-item">
                  <svg className="metadata-icon" width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M6 3.75A2.75 2.75 0 0 1 8.75 1h2.5A2.75 2.75 0 0 1 14 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 0 1 6 4.193V3.75Zm6.5 0v.325a41.622 41.622 0 0 0-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25ZM10 10a1 1 0 0 0-1 1v.01a1 1 0 0 0 1 1h.01a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1H10Z" clipRule="evenodd"/><path d="M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 0 1-9.274 0C3.985 17.585 3 16.402 3 15.055Z"/></svg>
                  <div className="metadata-text">
                    <p className="metadata-label">Team</p>
                    <p className="metadata-value">Code Review</p>
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
                    <p className="metadata-value">Product Designer</p>
                  </div>
                </div>
                <div className="metadata-item">
                  <svg className="metadata-icon" width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M5.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4h.25A2.75 2.75 0 0 1 18 6.75v8.5A2.75 2.75 0 0 1 15.25 18H4.75A2.75 2.75 0 0 1 2 15.25v-8.5A2.75 2.75 0 0 1 4.75 4H5V2.75A.75.75 0 0 1 5.75 2Zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75Z" clipRule="evenodd"/></svg>
                  <div className="metadata-text">
                    <p className="metadata-label">Period</p>
                    <p className="metadata-value">Jan 2023 - May 2024</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="case-intro">Shipped three iterations of an AI-powered merge request summary feature over 16 months. A Qualtrics survey revealing trust and control problems led to a fundamental pivot: from AI generating summaries for reviewers to AI helping authors write better descriptions at creation time. The <a href="https://gitlab.com/groups/gitlab-org/-/work_items/10401" target="_blank" rel="noopener">epic closed in May 2024</a> with all 24 child issues completed.</p>
          </header>

          <ul className="case-stats" role="list">
            <li><span className="case-stat-value">3</span><span className="case-stat-label">shipped iterations</span></li>
            <li><span className="case-stat-value">24</span><span className="case-stat-label">issues delivered across design, frontend and backend</span></li>
            <li><span className="case-stat-value">16 mo</span><span className="case-stat-label">Jan 2023 to May 2024</span></li>
          </ul>

          <div className="summary-card">
            <h2><img src="/images/bookmark.svg" alt="" width="24" /> Summary</h2>
            <p>This was January 2023, two months after ChatGPT launched. GitLab's approach to AI was deliberately different from the standard product development process: prototype and ship experiments as fast as possible to assess feasibility and potential value from real AI outputs, then mature to Beta and GA based on feedback. I joined the Code Review team, mapped the complete author/reviewer cycle from scratch, and led the design through three distinct iterations. The feature we shipped at the end was fundamentally different from the one we started with, and the journey to get there was the most instructive AI design work I have done.</p>
          </div>

          <div className="case-study-section">
            <h2>The Problem</h2>

            <p>A merge request contains changes across many files and relates back to an issue being resolved. The description communicates the intent of the changes, but as review cycles progress, it becomes stale. It no longer reflects what was actually changed to achieve the solution. Reviewers and authors get out of sync.</p>

            <p>To illustrate the scale of this problem, I found what was probably the longest merge request in GitLab's history: an enormous description, dozens of file changes, and a wall of comments accumulated over weeks. The cognitive load of getting up to speed was real and measurable.</p>

            <p>The hypothesis: what if AI could summarize the description and commit changes into a brief, well-articulated sentence, reducing the time it takes for reviewers and authors to get up to speed?</p>
          </div>

          <div className="case-study-section">
            <h2>Building Foundational Understanding</h2>

            <p>When I joined the Code Review team, I needed to rapidly understand one of GitLab's most complex workflows. Before designing anything, I mapped the complete review cycle flow between authors and reviewers in Figma. Every touchpoint: draft, ready for review, first review, changes requested, re-review, approval, and merge. This map became the baseline for all AI feature work on the team.</p>

            <p>The systems-level view was critical. It shifted the team's conversation from "where do we put a summary button" to "how does AI fit into the entire review workflow." When I later marked AI intervention points across the map in orange, the placement decisions became much easier to reason about together.</p>
          </div>

          <div className="case-study-section">
            <h2>Iteration 1: Quick Action Summary</h2>

            <img src="/images/merge-request-changes-summary-ai.gif" alt="Merge request changes summary AI quick action" className="gitlab-contrib-img" />

            <p>The first version was intentionally minimal. We added a quick action in the MR comment box that triggered AI to read the merge request diff and generate a digestible summary, posted as a comment. We weren't focused on UX or design polish at this stage. We wanted to know: is AI-generated summary content useful to users at all?</p>

            <p>We deliberately scoped out summarizing review comments to keep the question tight. We released internally and collected feedback in a <a href="https://gitlab.com/gitlab-org/gitlab/-/issues/408726" target="_blank" rel="noopener">dedicated issue</a>.</p>

            <h3>What we learned</h3>
            <p>Engineers found the content helpful and gave specific, actionable feedback. Clustering that feedback revealed three distinct problems:</p>

            <ul>
              <li><strong>Comments were not grouped.</strong> Multiple summary comments appeared scattered across the MR with no clear organization.</li>
              <li><strong>No attribution.</strong> There was no indication of who requested the summary or what event triggered it.</li>
              <li><strong>Wrong placement.</strong> By the time users reached the comment box at the bottom of the MR, they had already read the full description. The summary was useful content landing in the wrong moment.</li>
            </ul>

            <p>The placement insight was the most important. It reframed the design problem entirely: the summary needed to reach users before they read the MR, not after.</p>
          </div>

          <div className="case-study-section">
            <h2>Iteration 2: Contextual Placement</h2>

            <div className="wiki-cc-video">
              <div className="wiki-cc-video-embed">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/fwTfD7EpbvA" title="UX Showcase: Summarize my merge request with AI" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <p className="glql-video-caption">UX Showcase (Jun 2023) presenting the first experiment results, the review cycle flowchart with AI intervention points, and the Iteration 2 direction including to-do notifications and the summary side drawer.</p>
            </div>

            <img src="/images/review_cycle_flowchart.png" alt="Review cycle flowchart with AI intervention points" className="gitlab-contrib-img" />

            <p>Based on the placement insight, I updated the review cycle flowchart to mark where AI could meaningfully enhance the experience. This systems view guided the v2 design goals.</p>

            <p><strong>For reviewers:</strong> When a review is requested, provide an AI summary in the to-do notification and email. Once they reach the MR page, provide a history of summaries in a side drawer so the context carries through from notification to page.</p>

            <p><strong>For authors:</strong> After review rounds, consolidate notifications into a single email with a brief summary of changes rather than multiple individual emails.</p>

            <div className="wiki-cc-video">
              <div className="wiki-cc-video-embed">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/ZjoY_cciIR0" title="Summarize proposed changes in a merge request, Iteration 2 update" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <p className="glql-video-caption">Walkthrough of the Iteration 2 direction: problems found in the first experiment, updated goals for reviewers and authors, the review cycle flow with AI intervention points, and the side drawer design.</p>
            </div>

            <h3>The designed solution</h3>

            <p><strong>To-do and email notifications.</strong> When you are requested to review an MR, the AI summary appears in your to-do item and email notification. You arrive at the MR already oriented.</p>

            <img src="/images/To_do_list_-_summary.png" alt="To-do list showing AI-generated MR summary" className="gitlab-contrib-img" />

            <p><strong>Summary side drawer on the MR page.</strong> Clicking the ellipsis menu reveals a "View Summary Notes" option. This opens a side drawer showing a chronological history of all summaries. Each entry includes a header with a title, an "Experimental" label, and copy stating "Summaries are written by AI" to clearly communicate that users are interacting with AI-generated content.</p>

            <img src="/images/MR_-_Summary_notes_-_side_drawer.png" alt="MR summary notes side drawer" className="gitlab-contrib-img" />

            <p><strong>Chronological summary list.</strong> Organized by time, showing when commits were made, summaries auto-generated, and when reviewers submitted their reviews. A timeline of the MR's evolution rather than a static snapshot.</p>

            <p><strong>Email consolidation.</strong> Rather than multiple notification emails, we consolidated into a single email per MR with all changes summarized together.</p>

            <img src="/images/summay_email.png" alt="Email notification with AI-generated MR summary" className="gitlab-contrib-img" />

            <h3>Design decisions and tradeoffs</h3>
            <p>I had designed a versioned approach with a dropdown to show only the latest summary, with historical versions accessible via progressive disclosure. The team decided to ship the flat chronological list first to test as an experiment before adding complexity. The right call for the stage we were at.</p>

            <h3>Issues delivered</h3>
            <ul>
              <li><a href="https://gitlab.com/gitlab-org/gitlab/-/issues/408307" target="_blank" rel="noopener">Design</a></li>
              <li><a href="https://gitlab.com/gitlab-org/gitlab/-/issues/408434" target="_blank" rel="noopener">Auto-generate change summaries</a></li>
              <li><a href="https://gitlab.com/gitlab-org/gitlab/-/issues/408436" target="_blank" rel="noopener">GraphQL endpoint for LLM summaries</a></li>
              <li><a href="https://gitlab.com/gitlab-org/gitlab/-/issues/408640" target="_blank" rel="noopener">MR page frontend</a></li>
              <li><a href="https://gitlab.com/gitlab-org/gitlab/-/issues/408641" target="_blank" rel="noopener">To-do list frontend</a></li>
              <li><a href="https://gitlab.com/gitlab-org/gitlab/-/issues/414401" target="_blank" rel="noopener">Email notifications</a></li>
            </ul>
          </div>

          <div className="case-study-section">
            <h2>The Pivot: Trust and Control</h2>

            <img src="/images/merge_request_ai_summary.gif" alt="Merge request AI summary" className="gitlab-contrib-img" />

            <p>As soon as we placed the AI-generated summary directly on the MR page, we started receiving feedback we hadn't seen before. Users reported problems with output quality. Our first instinct was to fix the prompts, and we made several improvements, but the summaries still weren't always correct. We were also dealing with real technical issues: summaries generating as random characters, encoding failures, content length problems, and issues with binary files in diffs.</p>

            <p>After collecting more of this feedback, I recorded a 10-minute walkthrough for the team presenting the workflow problems, research insights, and recommendations before running a broader Qualtrics survey.</p>

            <div className="wiki-cc-video">
              <div className="wiki-cc-video-embed">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/yLQDJKmplVc" title="Recommendations for AI feature: Summarise changes in a Merge Request" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <p className="glql-video-caption">Walkthrough presenting the identified workflow problems, user research insights, and the recommendation to pivot from reviewer-facing summary to author-facing writing assistant.</p>
            </div>

            <p>The Qualtrics survey confirmed two core problems that prompt improvements alone couldn't fix:</p>

            <ul>
              <li><strong>Lack of user trust.</strong> Users didn't trust the AI-generated summary, even when it was accurate. The presence of an AI summary alongside a human description created doubt about which one was correct. Users reported spending time cross-checking the two rather than trusting either.</li>
              <li><strong>Lack of user control.</strong> The UI gave users no way to edit, remove, or regenerate the summary. The experience felt imposed rather than assistive. Something had been added to their merge request that they hadn't authored and couldn't remove.</li>
            </ul>

            <p>The consequences were layered: duplicate content on the page, potentially conflicting information, no authorship control, and even when the AI got it right, having both a human description and an AI summary covering the same ground increased mental effort with no additional value.</p>

            <blockquote>A colleague observed during one of the showcases that if we had known at the beginning that the AI was only around 50% accurate, we could have treated that as a design constraint and potentially skipped several iterations. We were initially confident we could improve prompts to near-perfect accuracy. That overconfidence shaped early design decisions in ways we had to unlearn.</blockquote>

            <h3>AI in the wrong role</h3>
            <p>The pivot came from a single reframe: we had been putting AI in the wrong role. Instead of generating a separate summary for reviewers to read alongside the human description, AI should help authors write better descriptions in the first place. The problem was a stale description. The right intervention was at creation time, not review time.</p>

            <p>In the redesigned flow, when an author pushes code and creates a merge request, the creation form offers an AI-generated summary they can choose to add to their description. The author has full control: edit it, regenerate it, remove details, add more details, or connect it with GitLab Duo.</p>

            <img src="/images/auto_generate_ai_summary.gif" alt="Auto-generate AI summary button on the MR description box" className="gitlab-contrib-img" />
            <p className="img-caption">A "Summarise my code changes" button on the MR creation form. The author can generate a summary, review it, edit it, and make it their own before saving.</p>

            <p>The result: a cleaner MR page with a single description, a correct description because the author verified it, full control for the author, and trust maintained because the human remained in the loop.</p>

            <h3>What we turned off</h3>
            <p>Shipping the new approach meant removing what we had built: AI summaries in to-do notifications and emails, and the auto-generated summary on the MR page. The <a href="https://gitlab.com/gitlab-org/gitlab/-/issues/443331" target="_blank" rel="noopener">frontend was removed</a> and the <a href="https://gitlab.com/gitlab-org/gitlab/-/issues/451241" target="_blank" rel="noopener">backend components cleaned up</a>.</p>

            <p>These weren't failures. They were necessary steps to learn that the right intervention point was upstream at creation time, not downstream during review. The <a href="https://gitlab.com/groups/gitlab-org/-/work_items/10401" target="_blank" rel="noopener">epic closed in May 2024</a> with all 24 child issues completed.</p>
          </div>

          <div className="case-study-section">
            <h2>Outcomes</h2>

            <ul>
              <li>Three distinct iterations shipped over 16 months (Jan 2023 - May 2024)</li>
              <li>24 issues delivered across design, frontend, backend, and infrastructure</li>
              <li>Qualtrics survey validating trust and control findings at scale, used to make the case for the pivot</li>
              <li>Feature direction pivoted from reviewer-facing summary to author-facing writing assistant</li>
              <li>Contributed Experiment/Beta <a href="https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/merge_requests/3374" target="_blank" rel="noopener">feature badge to the Pajamas Design System</a></li>
              <li>Ran multiple usability studies on Code Review AI features with UX researcher (<a href="https://gitlab.com/gitlab-org/ux-research/-/issues/2708" target="_blank" rel="noopener">ux-research#2708</a>)</li>
              <li>Review cycle flow mapping became a reusable baseline for other AI feature work on the team</li>
            </ul>

            <h3>What I learned</h3>

            <p><strong>AI output quality is a design constraint, not just an engineering problem.</strong> Prompt improvements can raise quality, but they cannot fully replace contextual human understanding. Design needs to account for the gap from the start. Building in user control and transparency is not a nice-to-have for AI features. It is load-bearing.</p>

            <p><strong>The value of shipping to learn.</strong> Each iteration gave us feedback we couldn't have predicted. The quick action taught us about placement. The to-do and email integration taught us about continuity expectations. The MR page summary taught us about trust and control. Without shipping those versions, we wouldn't have arrived at the right one. This approach requires a team willing to revisit and remove decisions, which is harder than it sounds.</p>

            <p><strong>Workflow-driven design in complex domains.</strong> My manager at the time noted in my FY24 performance review that my workflow-driven approach was "exactly the right approach for a complex area like Code Review, to make sure we don't look at features in isolation, but how they fit into the complete context of the user." Mapping the full review cycle before designing any individual feature was what allowed me to see where AI interventions would genuinely help versus where they would add friction.</p>

            <p><strong>Knowing when to remove a feature takes more conviction than shipping one.</strong> Recommending that we turn off the to-do summaries, remove the MR page summary, and pivot the entire approach required strong evidence and a clear alternative. The survey data and the redesigned creation flow gave the team the confidence to make that call.</p>
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
          <a href="/case-studies/glql"><span className="case-next-label">Next case study</span><span className="case-next-title">GLQL: Embedded Views for Work Tracking</span></a>
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
