import type { Metadata } from "next";
import { CaseStudyShell } from "@/components/case-study-shell";
import { ExternalLinkIcon } from "@/components/icons";

const title = "GitLab - Alex Fracazo";
const description = "Product Designer on the Plan: Knowledge team, owning UX across Wiki, GLQL, GitLab Pages, and text editors.";

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

export default function Gitlab() {
  return (
    <CaseStudyShell>
      <section className="section case-study-content">
        <div className="case-study-main">

          <nav className="breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a><span className="breadcrumb-sep"> &gt; </span><a href="/work">Work</a><span className="breadcrumb-sep"> &gt; </span><span>GitLab</span>
          </nav>

          {/* Header with metadata card */}
          <header className="case-header">
            <h1 className="case-title">GitLab</h1>
            <div className="case-metadata-card">
              <div className="metadata-content">
                <div className="metadata-item">
                  <svg className="metadata-icon" width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M6 3.75A2.75 2.75 0 0 1 8.75 1h2.5A2.75 2.75 0 0 1 14 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 0 1 6 4.193V3.75Zm6.5 0v.325a41.622 41.622 0 0 0-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25ZM10 10a1 1 0 0 0-1 1v.01a1 1 0 0 0 1 1h.01a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1H10Z" clipRule="evenodd"/><path d="M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 0 1-9.274 0C3.985 17.585 3 16.402 3 15.055Z"/></svg>
                  <div className="metadata-text">
                    <p className="metadata-label">Teams</p>
                    <p className="metadata-value">Create: Code Review (2022-2024)</p>
                    <p className="metadata-value">Plan: Knowledge (2024-Present)</p>
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
                    <p className="metadata-value">Senior Product Designer</p>
                  </div>
                </div>
                <div className="metadata-item">
                  <svg className="metadata-icon" width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M5.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4h.25A2.75 2.75 0 0 1 18 6.75v8.5A2.75 2.75 0 0 1 15.25 18H4.75A2.75 2.75 0 0 1 2 15.25v-8.5A2.75 2.75 0 0 1 4.75 4H5V2.75A.75.75 0 0 1 5.75 2Zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75Z" clipRule="evenodd"/></svg>
                  <div className="metadata-text">
                    <p className="metadata-label">Period</p>
                    <p className="metadata-value">2022-Present</p>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Intro */}
          <div className="case-study-section">
            <p>I am the sole product designer on GitLab&rsquo;s Knowledge team, owning UX for Wiki, GLQL, Pages, and text editors on a platform used by millions of developers. I led GLQL, the first query language built natively into GitLab, for embedding live, filtered views of issues into wikis and docs, from research to a GA launch where adoption grew 33%. I led the Wiki redesign, from the panel layout to contextual comments, positioning it as a competitive alternative to Confluence. All of it shipped to production, including direct code contributions via merge requests.</p>
            <img src="/images/gitlab_team_lasvegas.jpeg" alt="GitLab team in Las Vegas" className="gitlab-team-photo gitlab-contrib-img" />
            <p>It has also stretched me in ways I didn't expect. Everything at GitLab is async-first: decisions happen in issues, not meetings. Your rationale needs to stand on its own in a comment thread read days later by someone in a different timezone. That changed how I think about communication entirely.</p>
            <p>On top of that, my team had never had a dedicated designer before. GitLab has a mature UX department with established research methods, design critique practices, and the <a href="https://design.gitlab.com/" target="_blank" rel="noopener">Pajamas design system</a>, but none of that had been applied locally to the Knowledge team. I brought those practices in, adapted them to the group's workflow, and connected UX decisions back to product strategy. No big rollout, I just kept showing up with research, rationale, and results until it became the way we worked. Earning the trust of a highly technical, engineering-led group through evidence rather than opinion is something I'm genuinely proud of.</p>
            <div className="testimonial-list">
              <blockquote className="testimonial">
                <p>"Alex is the best designer I've worked with. We collaborated closely on several high-profile projects at GitLab, most notably the design, validation, and development of GitLab Query Language (GLQL), the first query language built natively into GitLab. Alex thinks thoughtfully about how each decision impacts customers, thoroughly researches the problem space, and builds for long-term scale rather than just the immediate need. As a PM, I always felt confident knowing Alex's designs would point us in the right direction."</p>
                <footer>
                  <cite>Senior Product Manager · Knowledge team</cite>
                </footer>
              </blockquote>
              <blockquote className="testimonial">
                <p>"I worked closely with Alex at GitLab, where he was the product designer on my team.</p>
                <p>Alex is at his best on hard, open-ended problems. He led the design of our wiki, including the new panel layout and the contextual discussions feature, and he took on technical work like a visual builder and tokenized filtering for our query language, GLQL. He grounds his decisions in research. When the wiki needed the right reading width for long-form content, he went and studied it.</p>
                <p>He works well with engineers. He partnered closely with the team to unblock implementation, and his designs shipped. He was also thinking ahead about how AI could fit into the wiki and our planning workflows.</p>
                <p>Alex would strengthen any product team, and I recommend him without hesitation."</p>
                <footer>
                  <cite>Engineering Manager · Knowledge team</cite>
                </footer>
              </blockquote>
            </div>
            <h3>Contributions activity</h3>
            <img src="/images/gitlab-activity.png" alt="GitLab contribution activity graph" className="gitlab-contrib-img" />
            <p>Aside from the features shipped to production, including direct code contributions via merge requests, here are some of the most relevant projects I've been part of:</p>
          </div>

          {/* Work */}
          <div className="case-study-section">
            <ul className="gl-work-list">

              <li>
                <div className="gl-work-row">
                  <span className="gl-work-row-left">
                    <span className="gl-work-row-title">Summarize Merge Request with AI</span>
                    <span className="gl-work-row-sep" aria-hidden="true">|</span>
                    <a href="/case-studies/mr-summary-ai" className="gl-work-row-type gl-work-row-link">Case study &rarr;</a>
                    <span className="gl-work-row-sep" aria-hidden="true">|</span>
                    <a href="https://gitlab.com/gitlab-org/gitlab/-/work_items/429882" target="_blank" rel="noopener" className="gl-work-row-type gl-work-row-link">GitLab issue &rarr;</a>
                  </span>
                  <span className="gl-work-row-date">Code Review &middot; 2023</span>
                </div>
              </li>

              <li>
                <div className="gl-work-row">
                  <span className="gl-work-row-left">
                    <span className="gl-work-row-title">GLQL / Embedded Views</span>
                    <span className="gl-work-row-sep" aria-hidden="true">|</span>
                    <a href="/case-studies/glql" className="gl-work-row-type gl-work-row-link">Case study &rarr;</a>
                    <span className="gl-work-row-sep" aria-hidden="true">|</span>
                    <a href="https://about.gitlab.com/blog/embedded-views-the-future-of-work-tracking-in-gitlab/" target="_blank" rel="noopener" className="gl-work-row-type gl-work-row-link">Blog post &rarr;</a>
                    <span className="gl-work-row-sep" aria-hidden="true">|</span>
                    <a href="https://docs.gitlab.com/user/glql/" target="_blank" rel="noopener" className="gl-work-row-type gl-work-row-link">Docs &rarr;</a>
                  </span>
                  <span className="gl-work-row-date">2024-2025</span>
                </div>
              </li>

              <li>
                <a href="https://gitlab.com/gitlab-org/gitlab/-/work_items/590402" target="_blank" rel="noopener" className="gl-work-row">
                  <span className="gl-work-row-left">
                    <span className="gl-work-row-title">Wiki Sidebar Redesign</span>
                    <span className="gl-work-row-sep" aria-hidden="true">|</span>
                    <span className="gl-work-row-type">GitLab issue &rarr;</span>
                  </span>
                  <span className="gl-work-row-date">2026</span>
                </a>
              </li>

              <li>
                <div className="gl-work-row">
                  <span className="gl-work-row-left">
                    <span className="gl-work-row-title">Wiki Contextual Comments</span>
                    <span className="gl-work-row-sep" aria-hidden="true">|</span>
                    <a href="/case-studies/wiki-contextual-comments" className="gl-work-row-type gl-work-row-link">Case study &rarr;</a>
                    <span className="gl-work-row-sep" aria-hidden="true">|</span>
                    <a href="https://gitlab.com/gitlab-org/gitlab/-/work_items/509789" target="_blank" rel="noopener" className="gl-work-row-type gl-work-row-link">GitLab issue &rarr;</a>
                    <span className="gl-work-row-sep" aria-hidden="true">|</span>
                    <a href="https://youtu.be/67UZDRRE7gQ" target="_blank" rel="noopener" className="gl-work-row-type gl-work-row-link">Design critique &rarr;</a>
                  </span>
                  <span className="gl-work-row-date">2025</span>
                </div>
              </li>

              <li>
                <a href="https://about.gitlab.com/blog/build-a-new-website-in-a-few-easy-steps-with-gitlab-pages/" target="_blank" rel="noopener" className="gl-work-row">
                  <span className="gl-work-row-left">
                    <span className="gl-work-row-title">Build a website with GitLab Pages</span>
                    <span className="gl-work-row-sep" aria-hidden="true">|</span>
                    <span className="gl-work-row-type">Blog post &rarr;</span>
                  </span>
                  <span className="gl-work-row-date">March 2025</span>
                </a>
              </li>

              <li>
                <a href="https://www.youtube.com/watch?v=wuM58BBGSg0" target="_blank" rel="noopener" className="gl-work-row">
                  <span className="gl-work-row-left">
                    <span className="gl-work-row-title">UX Forum: Rich Links</span>
                    <span className="gl-work-row-sep" aria-hidden="true">|</span>
                    <span className="gl-work-row-type">Video &rarr;</span>
                  </span>
                  <span className="gl-work-row-date">2026</span>
                </a>

              </li>

            </ul>
          </div>{/* /Work */}

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
            <a href="https://www.linkedin.com/in/fracazo" target="_blank" rel="noopener" className="btn btn-ghost">LinkedIn<ExternalLinkIcon size={14} className="opacity-70" /></a>
          </div>
        </div>
        <div className="case-next">
          <a href="/case-studies/mr-summary-ai"><span className="case-next-label">Next case study</span><span className="case-next-title">Summarize Merge Requests with AI</span></a>
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
