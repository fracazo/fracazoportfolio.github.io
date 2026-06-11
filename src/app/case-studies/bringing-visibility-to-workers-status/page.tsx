import type { Metadata } from "next";
import { CaseStudyShell } from "@/components/case-study-shell";

const title = "Changing Booking Behaviour Through Worker Status Visibility - Alex Fracazo";
const description = "Reducing uncertainty in a two-sided marketplace and increasing successful bookings by 12%.";

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

export default function BringingVisibilityToWorkersStatus() {
  return (
    <CaseStudyShell>
      <section className="section case-study-content">
        <div className="case-study-main">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a><span className="breadcrumb-sep"> &gt; </span><a href="/work">Work</a><span className="breadcrumb-sep"> &gt; </span><span>Worker Status Visibility</span>
        </nav>
        <header className="case-header">
          <h1 className="case-title">Changing Booking Behaviour Through Worker Status Visibility</h1>
          <div className="case-metadata-card">
            <img src="/images/62fbf14400d70051caf1b477_hireup-project-p-1080.png" alt="Hireup" className="case-hero-image" />
            <div className="metadata-content">
              <div className="metadata-item">
                <svg className="metadata-icon" width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M6 3.75A2.75 2.75 0 0 1 8.75 1h2.5A2.75 2.75 0 0 1 14 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 0 1 6 4.193V3.75Zm6.5 0v.325a41.622 41.622 0 0 0-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25ZM10 10a1 1 0 0 0-1 1v.01a1 1 0 0 0 1 1h.01a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1H10Z" clipRule="evenodd"/><path d="M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 0 1-9.274 0C3.985 17.585 3 16.402 3 15.055Z"/></svg>
                <div className="metadata-text">
                  <p className="metadata-label">Product</p>
                  <p className="metadata-value">Hireup</p>
                </div>
              </div>
              <div className="metadata-item">
                <svg className="metadata-icon" width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M2 4.25A2.25 2.25 0 0 1 4.25 2h11.5A2.25 2.25 0 0 1 18 4.25v8.5A2.25 2.25 0 0 1 15.75 15h-3.105a3.501 3.501 0 0 0 1.1 1.677A.75.75 0 0 1 13.26 18H6.74a.75.75 0 0 1-.484-1.323A3.501 3.501 0 0 0 7.355 15H4.25A2.25 2.25 0 0 1 2 12.75v-8.5Zm1.5 0a.75.75 0 0 1 .75-.75h11.5a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75H4.25a.75.75 0 0 1-.75-.75v-7.5Z" clipRule="evenodd"/></svg>
                <div className="metadata-text">
                  <p className="metadata-label">Platform</p>
                  <p className="metadata-value">iOS and Android</p>
                </div>
              </div>
              <div className="metadata-item">
                <svg className="metadata-icon" width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z"/></svg>
                <div className="metadata-text">
                  <p className="metadata-label">Role</p>
                  <p className="metadata-value">Principal Product Designer</p>
                </div>
              </div>
              <div className="metadata-item">
                <svg className="metadata-icon" width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M5.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4h.25A2.75 2.75 0 0 1 18 6.75v8.5A2.75 2.75 0 0 1 15.25 18H4.75A2.75 2.75 0 0 1 2 15.25v-8.5A2.75 2.75 0 0 1 4.75 4H5V2.75A.75.75 0 0 1 5.75 2Zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75Z" clipRule="evenodd"/></svg>
                <div className="metadata-text">
                  <p className="metadata-label">Year</p>
                  <p className="metadata-value">2022</p>
                </div>
              </div>
            </div>
          </div>
          <p className="case-intro">Redesigned availability visibility across iOS and Android at Hireup, Australia's largest disability support platform. The change lifted response rate from 39.1% to 45.8%, grew connection rate from 3% to 5%, and drove +46% inactive worker reactivations.</p>
        </header>

        <div className="summary-card">
          <h2><img src="/images/bookmark.svg" alt="" width="24" /> Summary</h2>
          <p>A new design that drives user behaviour. The new feature informs and educates support workers on how to keep their availability updated. It automatically sets support workers who have not been active on the platform for over 30 days to "not looking for work". This leads to more responsiveness from workers to clients on the Hireup platform.</p>
        </div>

        <div className="case-study-section">
          <h2>Understanding the Problem</h2>
          
          <h3>About Hireup</h3>
          <p>Hireup is the largest online network of support workers in Australia for people with disabilities. The software is a marketplace that matches people with disabilities ("clients") with support workers ("workers").</p>
          
          <h3>How the Platform Works</h3>
          <img src="/images/62fb51f3578196031228354d_How-does-it-work.png" alt="How Hireup works" />
          
          <h3>The Problem</h3>
          <p>In order to support our company-wide quarter objective of improving the discovery and connection between support workers (workers) and people with disabilities (clients), we started to investigate complaints from clients about workers not getting back to them.</p>
          
          <blockquote>We noticed from our data that 39.1% of clients who were looking for support were messaging workers that hadn't been active on the platform but had kept their availability status as "Looking for support work".</blockquote>
          
          <p>A support worker at Hireup can choose to update their availability to "Looking for work" or "Not looking for work". This means when they are looking for work their profile will be listed in the client search and they can receive job alerts from clients that are looking for a support worker.</p>
          <p>For more clarity on the problem, I ran lean research - sent an email survey asking workers about how they use and update their availability status. Early insight on this was that workers set their status as "open to work" and forget to update their availability later.</p>
          <p>Most of the respondents set it during their account creation and onboarding. Another reason given was that they leave their status open only in case the "right" job arises.</p>

          <h3>Current User Flow Analysis</h3>
          <p>How would workers update their availability status?</p>
          <img src="/images/62fdcd93d56ca3a042cc5291_current-flow.gif" alt="Current flow animation" className="img-xs" />
          <p>They would tap on their profile avatar which would open "My account" page. Inside this page, the user would skim through more options until they find "My Availability", which would open the page where they could switch their "Looking for support work" status to on/off.</p>
          <img src="/images/62fb7e3f6533969785087587_Current-experience.png" alt="Current experience" />

          <h3>Flow Report</h3>
          <p>By analysing the data, I noticed that few workers were tapping to update their availability.</p>
          <img src="/images/62fc2b5863456152bfa022e5_flow-report.png" alt="Flow report" />

          <h3>Why This Mattered</h3>
          <p>This problem impacted Hireup's connection rate. "Connection" is the first booking between a client and a support worker. We noticed a drop in clients creating a new connection with a support worker, meaning a low connection rate. This also impacted client activation, which in turn impacted user churn.</p>

          <h3>Key Metrics</h3>
          <ul>
            <li><strong>Response rate:</strong> Workers that respond (within 3 days) to clients' first message</li>
            <li><strong>Connection rate:</strong> Connections are created within 7 days after the first message from the client</li>
            <li><strong>Availability update:</strong> % of workers that update their availability</li>
          </ul>

          <h3>Inactive workers</h3>
          <p>The solution proposed, led by the data team and the product manager, was to automatically turn off the availability status for workers who maintain their status as "Looking for Support Work" but have not been active on the platform in the last 30 days. This would result in those inactive workers being filtered out from search results.</p>
          
          <p><strong>This solved part of the problem</strong></p>
          <p>I shared my learnings about the common behaviour of workers setting and forgetting their availability to "open for work". I was also thinking about users that might decide to provide services for Hireup again after some time off. I asked the data team about reactivations and flagged my team that workers could reactivate after being inactive. They might not know they had to update their availability to "Looking for support work".</p>
          <img src="/images/62fc0f9fc79dbff73d588373_Reactivation-metrics.png" alt="Reactivation metrics" />
          
          <p>We could see that there was a large spike in reactivations from inactive support workers, seasonally, around January - February.</p>
          
          <blockquote>Because of this, we predicted that these workers that planned to reactivate might not manually switch their availability back to "Looking for work", so their profile would not appear on search results. This would result in them potentially missing out on work opportunities.</blockquote>
          
          <p>There were discussions in the team of simply reversing the mechanism to automatically switch reactivated support workers back to "Looking for work". I was concerned about the assumption that workers who would be back on the platform would be "Looking for work" as they may or may not be. A scenario I used to explain my line of thought was LinkedIn - when people log on to LinkedIn, it doesn't mean they want their profile to say "open to work".</p>

          <h2>Designing the Solution</h2>

          <h3>Problem Statement & Design Prompt</h3>
          <p>Workers who have returned to the platform after being inactive may not get new jobs on Hireup. This is because the software triggers the worker's availability status to "not looking for work" when they remain 30 days without using the platform (inactive user).</p>
          
          <blockquote>How might we design an experience that makes it easy for current active workers and workers who return to the platform after being inactive to identify and understand what their availability status means and why it is important to keep it up to date?</blockquote>

          <h3>Design Approach</h3>
          <ul>
            <li>No clear visibility on the availability status</li>
            <li>Hard to find how to switch the "Looking for support work" feature on/off</li>
            <li>Workers set their status to "open to work" and forget to update</li>
            <li>Inactive workers that become active again on the platform, might not notice they were set to "not looking for work" status and have to manually switch it back to "looking for support work"</li>
          </ul>
          
          <p>I started by organising the workload according to user input touchpoints:</p>
          <ul>
            <li>My Account</li>
            <li>Home Page</li>
          </ul>

          <h3>My Account</h3>
          <p><strong>Surface toggle on my account</strong></p>
          <p>There was a debate on where to place this feature in our software, the PM suggested creating a new module with a switch where users could easily interact with it directly from the home screen, but I argued that it should stay in "My Account" to maintain consistency and reduce cognitive load. To help guide my arguments, I developed themes such as scalability, future-proofing, and consistency. By focusing on these principles, I was able to articulate my thoughts clearly and convince the team to keep the feature where it was. This experience taught me the importance of having a strong set of principles to guide decision-making in software design.</p>
          <img src="/images/62fb817e7d3362906fa43868_My-Account.png" alt="My Account design" />

          <h3>Copywriting with empathy</h3>
          <p>I've recommended to change the microcopy from "Looking for support work / Not looking for support work" to a more direct and simple, plain language that is easy to understand for everyone.</p>
          <img src="/images/62fc90125c97db0ee5c84b53_open-for-work---not-open-for-work.gif" alt="Copywriting animation" className="img-xs" />

          <p><strong>Thought process and design evolution</strong></p>
          <p>The process to decide on a solution was through design iteration based on feedback from multiple teams involved in the project and insights from user research.</p>
          <img src="/images/62fc52776345612371bb29d8_My-account---thought-process.png" alt="My Account thought process" />

          <h3>Home Page Design</h3>
          <p><strong>Status signifier on avatar</strong></p>
          <p>This solution brought visibility of workers' availability status across all main app pages, as it was consistently at the top of the nav bar. The use of the "Bag" iconography across other features of the software (the same icon used on jobs) made this pattern easy to understand and recognise.</p>
          <img src="/images/62fc5238e209d1f5865eda41_Home-page.png" alt="Home page design" />

          <p><strong>Thought process and design evolution</strong></p>
          <p>This solution would also educate workers on what it means to turn it on/off, driving a key behaviour for Hireup.</p>
          <img src="/images/62fbe16ca13a8d3ee01e9078_Home-page---thought-process.png" alt="Home page thought process" />

          <p><strong>The Design Process Included:</strong></p>
          <ul>
            <li>4 rounds of user testing</li>
            <li>2 rounds of design critique / Jam</li>
            <li>Working closely with engineers to validate the design and copy implementations. Along with daily stand-ups, we also had weekly demos and occasionally huddled together over slack and cross-checked implementation with final designs.</li>
          </ul>

          <h3>Final design</h3>
          <img src="/images/62fc5222cf2458417e3c4205_Final-design.png" alt="Final design" />

          <h2>Implementation & Testing</h2>

          <h3>Prototype</h3>
          <img src="/images/62fc9b36aee467542d9116cf_final-design.gif" alt="Prototype animation" className="img-xs" />

          <h3>Release Strategy</h3>
          <p>To measure and control risks, the team planned to release this feature by using experimentation and testing with cohorts.</p>
          <p>I worked alongside engineers through implementation, cross-checking each build against the final designs.</p>
          <p>I worked with the marketing team on clear release communication to workers affected by the change. This communication was sent to workers who were automatically set to "not looking for work". They were notified using a mix of push, SMS and email. They receive a warning after 25 days of inactivity and are switched off, then also informed at the 30-day mark.</p>
          <img src="/images/62fc4c700a231f91c8fcf134_Implementing-the-solution.png" alt="Implementation" className="img-md" />
          
          <p>Setting workers to "not looking for work" was done in stages and comms were sent out to workers that may have been impacted by the change.</p>

          <h3>User Communication</h3>
          <p>We also introduced a new feature that communicates important changes to users that return to the app. This helps to gather context in case they miss comms for any reason. They would see it when they are back on the app.</p>
          <img src="/images/62fc51dad208697fbaaaf774_whats-new.png" alt="What's new feature" />

          <h2>Results & Impact</h2>

          <h3>Behavior Change</h3>
          <img src="/images/62fc4eb12b9343326b9c9ecc_first-results.png" alt="First results" className="img-small" />
          <p>By monitoring our data, we saw a +46.24% increase in inactive workers returning to the platform.</p>

          <p><strong>Experimenting with cohorts</strong></p>
          <p>A subset of workers in Sydney and Melbourne markets were grouped as the control group</p>
          <img src="/images/62fbefd1b95849422076b287_control-groups.png" alt="Control groups" />

          <h3>Response Rate Improvement</h3>
          <img src="/images/62fc1fc75683e24e4d73f378_Response-rate.png" alt="Response rate" className="img-small" />
          <p>Response rate for the experimental group increased from 39.1% to 45.8%.</p>

          <h3>Connection Rate Growth</h3>
          <img src="/images/62fc1fbd85376430031ca998_Connection-rate.png" alt="Connection rate" className="img-small" />
          <p>Connection rate for the experimental group increased from 3% to 5%</p>

          <h3>Availability Updates</h3>
          <img src="/images/62fc1ff1d055b02593cac784_flow-report-future.png" alt="Flow report future" />
          <p>An increase of +10% workers updating their availability.</p>

          <p><strong>Overall impact</strong></p>
          <ul>
            <li>An increase in connection rate, within 7 days of the client message</li>
            <li>We estimate that <strong>40 new connections per month</strong> were generated due to this new feature.</li>
            <li>We estimate that automatically setting inactive workers to "not looking for work" has had a <strong>+12% incremental impact on the connections from client first messages</strong>.</li>
          </ul>

          <h2>Key Learnings</h2>
          <ul>
            <li>Working with a diverse team that had to combine efforts to launch this feature: Product, Engineering, Data, Marketing and Design.</li>
            <li>The design work was created in a way that would drive user behaviour, this was key to understanding that the design decisions we made impact lots of users every day.</li>
            <li>Having organised and led many design critiques within the design team, sparring sessions with the engineers led to multiple feedback and design rounds. I had to look back on the original problem and own my design decisions to filter out feedback that would increase the scope and not add value.</li>
            <li>It was important to bring many questions to different teams to gather knowledge and clarity.</li>
          </ul>

          <p><strong>What's next?</strong></p>
          <p>Continue to monitor how this affects important client experience metrics. We want to learn something statistically significant about messages, we know that message is the first step before a connection between a worker and a client. Next, I would use the learnings here to improve the message feature.</p>

        </div>

          <div className="up-next">
          <h2 className="h2">Up Next</h2>
          <div className="up-next-grid">
            <a href="/case-studies/mr-summary-ai" className="card-project">
              <div className="image-project">
                <img src="/images/To_do_list_-_summary.png" alt="AI-generated merge request summary in the GitLab to-do list" />
              </div>
              <div className="content-project">
                <h4 className="h4">Summarize Merge Requests with AI</h4>
                <p className="tagline">Finding where AI summaries earn trust in code review. GitLab, 2023.</p>
              </div>
            </a>
            <a href="/case-studies/eta-app" className="card-project">
              <div className="image-project">
                <img src="/images/62dc274f132cbe543717e126_work1-p-2000.jpg" alt="ETA App" />
              </div>
              <div className="content-project">
                <h4 className="h4">Reducing Friction in Government Visa Applications</h4>
                <p className="tagline">Automating data entry to improve completion and reduce user effort in a high-stakes service.</p>
              </div>
            </a>
            <a href="/case-studies/qantas-entertainment-app" className="card-project">
              <div className="image-project">
                <img src="/images/62dc26d29e21732abffdaacd_work4-p-1080.png" alt="Qantas Entertainment" />
              </div>
              <div className="content-project">
                <h4 className="h4">Driving Engagement Through a Unified Entertainment Experience</h4>
                <p className="tagline">Reimagining in-flight entertainment as a cohesive product ecosystem.</p>
              </div>
            </a>
          </div>
        </div>
        </div>
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
        </section>

      {/* Footer */}
      <section className="section" aria-labelledby="footer-title">
        <footer role="contentinfo">
          <div className="footer-inner">
            <p id="footer-title" className="text footer-location">Based in Melbourne. Working globally.</p>
            <p className="text footer-links">
              You can find me on <a href="http://www.linkedin.com/in/fracazo" target="_blank">LinkedIn</a>, or <a href="/contact">reach me by email</a>.
            </p>
          </div>
        </footer>
      </section>
    </CaseStudyShell>
  );
}
