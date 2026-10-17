import type { ReactNode } from "react";

/**
 * Body of the bringing-visibility-to-workers-status case study, without the route chrome.
 *
 * Lives apart from the route so the same content can render inside the work
 * panel on the home page. `breadcrumb` is a slot the route fills and the
 * panel leaves empty, since it doesn't belong beside the index.
 */
export function BringingVisibilityToWorkersStatusContent({
  breadcrumb,
}: {
  breadcrumb?: ReactNode;
} = {}) {
  return (
      <section className="section case-study-content">
        <div className="case-study-main">
        {breadcrumb}
        <header className="case-header">
          <h1 className="case-title">Changing booking behaviour by making worker status visible</h1>
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
            </div>
          </div>
          <p className="case-intro">Clients on Hireup, Australia&rsquo;s largest disability support marketplace, kept messaging support workers who had stopped using the app, and never heard back. I redesigned how workers see and change their availability on iOS and Android. In the experiment group, almost every client went on to message active workers, and twice as many workers kept their status up to date.</p>
        </header>

        <div className="case-study-section">
          <h2>The problem</h2>
          <p>Hireup matches people with disability (clients) with support workers. A worker can mark themselves as open for work or not, and only workers who are open appear in client search and get job alerts. Clients were complaining that workers weren&rsquo;t getting back to them.</p>
          <p>I sent a short survey to workers about how they use their status. Most set it to open during onboarding and never touched it again. Some left it open in case the right job came along.</p>
          <p>Changing it was also hard. Workers had to tap their avatar, scroll through My Account to find My Availability, and switch it there.</p>
          <img src="/images/62fdcd93d56ca3a042cc5291_current-flow.gif" alt="The old flow: avatar, then My Account, then My Availability, then the switch" className="img-xs" />
          <img src="/images/62fb7e3f6533969785087587_Current-experience.png" alt="The screens a worker passed through to change their availability before the redesign" />
          <p>The flow data showed it. Fewer than 1 in 10 workers who opened My Account went on to update their availability.</p>
          <img src="/images/62fc2b5863456152bfa022e5_flow-report.png" alt="Flow report before the redesign: most workers who opened My Account never reached Update availability" />
        </div>

        <div className="case-study-section">
          <h2>Workers who come back</h2>
          <p>As a team, we agreed to switch availability off automatically after 30 days without activity. The business was concerned it would shrink the pool of available workers, but clients would reach the workers who actually reply, and that trade-off made the call.</p>
          <p>That took inactive workers out of search, but I could see a second problem coming. Workers had told us they set their status once and forget it. I asked the data team about reactivations, and they showed a large spike every January and February. Those workers would come back switched off without knowing it, and miss out on work.</p>
          <img src="/images/62fc0f9fc79dbff73d588373_Reactivation-metrics.png" alt="Reactivations of inactive support workers, peaking in January and February" />
          <p>Some on the team suggested switching returning workers back on automatically. I argued against it. Opening the app doesn&rsquo;t mean you want work, in the same way that logging in to LinkedIn doesn&rsquo;t mean you want your profile to say &ldquo;open to work&rdquo;. Workers needed a status they could see and change themselves.</p>
        </div>

        <div className="case-study-section">
          <h2>Keeping the toggle in My Account</h2>
          <p>The PM wanted a new home-screen module with the switch, one tap away. I argued for keeping the toggle in My Account, for three reasons. Availability is a setting, and workers already look for settings there, so a second place for the same control means two places to check. The home screen only had to answer &ldquo;what is my status right now?&rdquo;, and a signifier could do that on every page without holding the control. And once one setting earns a home-screen module, every future setting has a claim to the same space. The team agreed.</p>
          <img src="/images/62fb817e7d3362906fa43868_My-Account.png" alt="My Account with the availability card at the top" />
          <p>I also rewrote the labels. &ldquo;Looking for support work&rdquo; became &ldquo;You are open for work&rdquo;, with a line underneath that says what it means: your profile appears in search and you receive job alerts.</p>
          <img src="/images/62fc90125c97db0ee5c84b53_open-for-work---not-open-for-work.gif" alt="The availability card switching between open for work and not open for work" className="img-xs" />
          <img src="/images/62fc52776345612371bb29d8_My-account---thought-process.png" alt="Iterations of the My Account availability card" />
          <p className="img-caption">How the availability card changed through testing and critique.</p>
        </div>

        <div className="case-study-section">
          <h2>Status on every screen</h2>
          <p>Next to the worker&rsquo;s avatar at the top of every main page, a small badge shows their status. It uses the same bag icon as jobs in the rest of the app, so workers recognise it without having to learn it.</p>
          <img src="/images/62fc5238e209d1f5865eda41_Home-page.png" alt="The home screen with the status badge beside the avatar, not open for work on the left and open for work on the right" />
          <img src="/images/62fbe16ca13a8d3ee01e9078_Home-page---thought-process.png" alt="Iterations of the status badge" />
          <p className="img-caption">How the badge changed through testing and critique.</p>
          <p>The designs went through four rounds of user testing and two design critiques, and I checked each build against them with the engineers.</p>
          <img src="/images/62fc5222cf2458417e3c4205_Final-design.png" alt="The final design across the home screen and My Account" />
          <img src="/images/62fc9b36aee467542d9116cf_final-design.gif" alt="Prototype: a worker checks their status and switches it on" className="img-xs" />
        </div>

        <div className="case-study-section">
          <h2>Rollout</h2>
          <p>We released to cohorts, with a control group of workers in Sydney and Melbourne. With the marketing team, I planned the messages for workers affected by the auto-off: a warning by push, SMS and email after 25 days without activity, then a notice when they were switched off at 30 days.</p>
          <img src="/images/62fc4c700a231f91c8fcf134_Implementing-the-solution.png" alt="The warning and switch-off messages sent to inactive workers" className="img-md" />
          <p>For workers who missed those messages, we added a &ldquo;What&rsquo;s new&rdquo; screen that explains the change when they next open the app.</p>
          <img src="/images/62fc51dad208697fbaaaf774_whats-new.png" alt="The What's new screen shown to returning workers" />
        </div>

        <div className="case-study-section">
          <h2>Results</h2>
          <p>Figures adjusted at Hireup&rsquo;s request to protect commercial data. The direction and scale of each change are accurate.</p>
          <p>In the experiment group, about 99% of clients were messaging active workers by the end of the trial.</p>
          <p>46% of inactive workers logged back in.</p>
          <img src="/images/62fc4eb12b9343326b9c9ecc_first-results.png" alt="Share of inactive workers who logged back in" className="img-small" />
          <p>Twice as many workers who opened My Account went on to update their availability.</p>
          <img src="/images/62fc1ff1d055b02593cac784_flow-report-future.png" alt="Flow report after the redesign, with more workers reaching Update availability" />
          <p>Response and connection rates both rose in the experiment group, while the control group&rsquo;s fell.</p>
          <img src="/images/62fc1fc75683e24e4d73f378_Response-rate.png" alt="Response rate before and after, control and experiment groups" className="img-small" />
          <img src="/images/62fc1fbd85376430031ca998_Connection-rate.png" alt="Connection rate before and after, control and experiment groups" className="img-small" />
        </div>

        </div>
      </section>
  );
}
