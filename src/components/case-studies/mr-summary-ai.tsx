import type { ReactNode } from "react";
import { CaseStudyLayout } from "@/components/case-study-layout";
import { ExternalLinkIcon } from "@/components/icons";
import { TanukiMark } from "@/components/scene-marks";

/**
 * Body of the mr-summary-ai case study, without the route chrome.
 *
 * Lives apart from the route so the same content can render inside the work
 * panel on the home page. `breadcrumb` is a slot the route fills and the
 * panel leaves empty, since it doesn't belong beside the index.
 */
export function MrSummaryAiContent({
  breadcrumb,
}: {
  breadcrumb?: ReactNode;
} = {}) {
  return (
    <CaseStudyLayout
      icon={<TanukiMark size={36} />}
      title="Merge request summaries"
      subtitle="Moving AI from the reviewer to the author"
      meta={[
        { label: "Role", value: "Product Designer" },
        { label: "Project type", value: ["Experiment to product", "AI feature"] },
        { label: "Platform", value: ["GitLab SaaS", "Self-managed"] },
      ]}
      chapters={[
        { id: "mr-challenge", label: "The challenge" },
        { id: "mr-v1", label: "A quick action" },
        { id: "mr-v2", label: "Before the review starts" },
        { id: "mr-trust", label: "Trust and control" },
        { id: "mr-role", label: "AI in the wrong role" },
        { id: "mr-success", label: "What success meant" },
      ]}
      hero={
        <video autoPlay muted loop playsInline preload="metadata" poster="/images/mr-summary-author-poster.jpg" aria-label="The final design: on the new merge request form, the author selects Summarize my code changes, AI writes a summary into the description, and the author can regenerate or save it">
          <source src="/images/mr-summary-author.mp4" type="video/mp4" />
        </video>
      }
    >
      <section className="section case-study-content">
        <div className="case-study-main">

        {breadcrumb}

          <p className="cs-intro">An AI feature that took three shipped versions and a survey to get right, and ended somewhere it didn&rsquo;t start. The first idea was AI summarizing merge requests for reviewers. Where it ended was AI helping the author write the description, with the author in control.</p>

          <div className="case-study-section">
            <h2 id="mr-challenge">The challenge</h2>
            <p>A merge request holds changes across many files, and its description explains the intent. As review rounds go on, the description goes stale. It stops matching what actually changed, and reviewers and authors drift out of sync. To show the scale, I found one of the longest merge requests in GitLab&rsquo;s history: a huge description, dozens of changed files and weeks of comments. Getting up to speed on it was real work.</p>
            <p>The obvious idea was to have AI summarize the description and the changes into a short paragraph. Most of this case study is about why that was the wrong answer.</p>
            <p>This was early in the generative AI wave. GitLab ran AI work as fast experiments: ship to real users, judge the real output, then mature it. I was the product designer on the Code Review team. Before designing anything, I mapped the whole review cycle, every step between author and reviewer from draft to merge, so placement could be a decision rather than a guess. My manager called it &ldquo;exactly the right approach for a complex area like Code Review&rdquo;.</p>
          </div>

          <div className="case-study-section">
            <h2 id="mr-v1">Iteration one: a quick action</h2>
            <img src="/images/merge-request-changes-summary-ai.gif" alt="A quick action in the comment box that posts an AI summary of the changes as a comment" className="gitlab-contrib-img" />
            <p>The first version answered one question: is an AI summary useful at all? A quick action in the comment box read the changes and posted a summary as a comment. No polish. We released it internally and collected feedback in one place.</p>
            <p>People found the content helpful, and their feedback grouped into three problems. Summary comments were scattered across the page. Nothing said who asked for a summary or why. And the summary arrived too late: by the time someone reached the comment box at the bottom, they had already read the whole description. That last one reframed the problem. The summary had to reach people before they read the merge request.</p>
          </div>

          <div className="case-study-section">
            <h2 id="mr-v2">Iteration two: before the review starts</h2>
            <p>I marked on the review cycle map where AI could actually help, and that set the goals for the second version. Reviewers would get the summary in their to-do item and email when a review was requested, so they arrived already oriented. On the page, a side drawer kept a dated history of summaries, labelled as experimental and written by AI. Authors would get one consolidated email per round instead of many.</p>
            <img src="/images/review_cycle_flowchart.png" alt="The review cycle from draft to merge, with the points where AI could help marked" className="gitlab-contrib-img" />
            <div className="wiki-cc-video">
              <div className="wiki-cc-video-embed">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/fwTfD7EpbvA" title="UX Showcase: Summarize my merge request with AI" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <p className="glql-video-caption">A UX Showcase presenting the first experiment&rsquo;s results, the review cycle map with the points where AI could help, and the second iteration: to-do notifications and the summary side drawer.</p>
            </div>
            <img src="/images/To_do_list_-_summary.png" alt="A to-do item for a requested review, with the AI summary of the merge request" className="gitlab-contrib-img" />
            <img src="/images/MR_-_Summary_notes_-_side_drawer.png" alt="The summary notes side drawer on the merge request page, listing AI summaries in date order, labelled Experimental" className="gitlab-contrib-img" />
            <p>I had also designed a versioned view that showed only the latest summary, with older ones a click away. The team shipped the simple dated list first to test it before adding complexity, which was the right call at that stage.</p>
          </div>

          <div className="case-study-section">
            <h2 id="mr-trust">The pivot: trust and control</h2>
            <img src="/images/merge_request_ai_summary.gif" alt="The AI summary shown on the merge request page next to the author's own description" className="gitlab-contrib-img" />
            <p>Once the summary sat on the merge request page itself, new feedback came in: the summaries were often wrong. We improved the prompts several times, and they still weren&rsquo;t reliably right. I recorded a walkthrough for the team with the workflow problems and my recommendation, then ran a broader survey to test it.</p>
            <div className="wiki-cc-video">
              <div className="wiki-cc-video-embed">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/yLQDJKmplVc" title="Recommendations for AI feature: Summarise changes in a Merge Request" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <p className="glql-video-caption">My walkthrough for the team: the workflow problems, what users told us, and the recommendation to move from a reviewer-facing summary to helping the author write.</p>
            </div>
            <p>The survey confirmed two problems that better prompts couldn&rsquo;t fix:</p>
            <ul>
              <li><strong>No trust.</strong> People didn&rsquo;t trust the AI summary even when it was right. With an AI summary next to a human description, they spent time cross-checking the two instead of trusting either.</li>
              <li><strong>No control.</strong> There was no way to edit, remove or regenerate the summary. It felt imposed: something added to their merge request that they hadn&rsquo;t written and couldn&rsquo;t take off.</li>
            </ul>
            <p>Even when the AI got it right, two texts covering the same ground meant more reading for no extra value. Looking back, we were confident better prompts would make the summaries nearly perfect, and that confidence shaped early decisions we later had to unlearn. Treating the model&rsquo;s real accuracy as a design constraint from the start could have saved iterations.</p>
          </div>

          <div className="case-study-section">
            <h2 id="mr-role">AI in the wrong role</h2>
            <p>The pivot came from one reframe: we had put AI in the wrong role. The real problem was a stale description, so the help belonged where the description is written, not where it&rsquo;s read. Instead of a second text for reviewers, AI should help authors write a better description in the first place.</p>
            <p>In the final design, the new merge request form offers &ldquo;Summarize my code changes&rdquo;. The author decides whether to use it, then edits, regenerates or removes it before saving. The page ends up with one description, checked by the person who wrote the code, and the human stays in the loop.</p>
            <p>Shipping that meant switching off what we had built: summaries in to-dos and emails, and the summary on the merge request page. Those weren&rsquo;t failures. They were how we learned that the right moment was creation, not review.</p>
          </div>

          <div className="case-study-section">
            <h2 id="mr-success">What success meant</h2>
            <p>Moving AI to the author also changed what success meant, and made it measurable in a way the reviewer summary never was. Two signals mattered:</p>
            <ul>
              <li><strong>Adoption:</strong> authors choosing to generate a summary at all. With a reviewer summary, AI text simply appeared; now every use is a deliberate choice.</li>
              <li><strong>Acceptance:</strong> authors keeping the summary in their description, edited or not. A kept summary is one a person read and agreed with.</li>
            </ul>
            <p>Both measure trust directly, which is exactly what the survey said the first versions lacked.</p>
            <p>Along the way I contributed the Experiment and Beta feature badge to <a href="https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/merge_requests/3374" target="_blank" rel="noopener">GitLab&rsquo;s Pajamas design system<ExternalLinkIcon size={12} className="external-mark" /></a>, ran usability studies on Code Review AI features with a UX researcher, and the review cycle map became a baseline for the team&rsquo;s other AI work.</p>
            <p>What I&rsquo;d carry into the next one: ship to learn, and be willing to remove what you shipped. The quick action taught us about timing, the notifications about continuity, and the on-page summary about trust. We couldn&rsquo;t have reasoned our way to the final design without shipping the wrong ones first, and removing a feature takes more conviction than shipping one.</p>
          </div>

          <div className="case-study-section">
            <h2>Links</h2>
            <ul>
              <li><a href="https://gitlab.com/gitlab-org/gitlab/-/work_items/429882" target="_blank" rel="noopener">Add AI summary on a new merge request screen<ExternalLinkIcon size={12} className="external-mark" /></a>, the issue for the final, author-facing design</li>
            </ul>
          </div>

        </div>
      </section>
    </CaseStudyLayout>
  );
}
