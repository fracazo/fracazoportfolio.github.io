import type { Metadata } from "next";
import { CaseStudyShell } from "@/components/case-study-shell";
import { ExternalLinkIcon } from "@/components/icons";

const title = "Increasing App Adoption by Integrating Entertainment Services - Alex Fracazo";
const description = "Using entertainment features to drive a 70% increase in app downloads.";

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

export default function QantasApp() {
  return (
    <CaseStudyShell>
      <section className="section case-study-content">
        <div className="case-study-main">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a><span className="breadcrumb-sep"> &gt; </span><a href="/work">Work</a><span className="breadcrumb-sep"> &gt; </span><span>Qantas App</span>
        </nav>
        <header className="case-header">
          <h1 className="case-title">Increasing App Adoption by Integrating Entertainment Services</h1>
          <div className="case-metadata-card">
            <img src="/images/62dc1d83920df32baae28d6b_work2-p-1080.png" alt="Qantas Airways App" className="case-hero-image" />
            <div className="metadata-content">
              <div className="metadata-item">
                <svg className="metadata-icon" width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M6 3.75A2.75 2.75 0 0 1 8.75 1h2.5A2.75 2.75 0 0 1 14 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 0 1 6 4.193V3.75Zm6.5 0v.325a41.622 41.622 0 0 0-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25ZM10 10a1 1 0 0 0-1 1v.01a1 1 0 0 0 1 1h.01a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1H10Z" clipRule="evenodd"/><path d="M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 0 1-9.274 0C3.985 17.585 3 16.402 3 15.055Z"/></svg>
                <div className="metadata-text">
                  <p className="metadata-label">Product</p>
                  <p className="metadata-value">Qantas Airways App</p>
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
                  <p className="metadata-value">Lead Designer</p>
                </div>
              </div>
              <div className="metadata-item">
                <svg className="metadata-icon" width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M5.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4h.25A2.75 2.75 0 0 1 18 6.75v8.5A2.75 2.75 0 0 1 15.25 18H4.75A2.75 2.75 0 0 1 2 15.25v-8.5A2.75 2.75 0 0 1 4.75 4H5V2.75A.75.75 0 0 1 5.75 2Zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75Z" clipRule="evenodd"/></svg>
                <div className="metadata-text">
                  <p className="metadata-label">Year</p>
                  <p className="metadata-value">2016</p>
                </div>
              </div>
            </div>
          </div>
          <p className="case-intro">Using entertainment features to drive a 70% increase in app downloads.</p>
        </header>

        <div className="summary-card">
          <h2><img src="/images/bookmark.svg" alt="" width="24" /> Summary</h2>
          <p>Qantas is on a mission to be the global leader in travel. One of the key factors in achieving this is to bring the entertainment experience into the top consideration for travellers to choose Qantas. The key success metric is the increased use of their entertainment app.</p>
        </div>

        <div className="case-study-section">
          <h2>The Challenge</h2>

          <h3>The Challenge</h3>
          <p>Qantas provides a wide range of inflight entertainment systems, using multiple providers for aircraft hardware. Traveller behaviour is moving towards bringing personal devices on board. We've seen more and more travellers using their personal devices to stream content as well as switch devices/systems at will.</p>
          <p>Qantas already has an appealing seatback screen experience but lacks a hassle-free personal device experience. Building a better experience for entertainment using the Qantas Airways app is a great extension of the company's mission, while managing to leverage its existing systems and providers, increase its value for customers and provide the company with another revenue stream.</p>

          <h3>Team & Context</h3>
          <img src="/images/62d8b0123816d7fee7a5344b_Screen-Shot-2022-07-21-at-11.46.45-am.webp" alt="Team structure" className="img-small" />
          <p>I had heaps of fun working with these folks, under the Qantas Digital Direct Team. I was leading the design for the Entertainment Squad. I had also collaborated with the Travel Squad, Emerging Channels Squad, Loyalty Squad, and Smart Retail Squad.</p>
          
          <h4>Key milestones</h4>
          <ul>
            <li>Lead discovery research & ideation sessions</li>
            <li>Present and showcase my findings, prototypes, visual designs and rationales to the Qantas Digital Direct team every 2 weeks</li>
            <li>Lead informal design reviews</li>
            <li>Organise and run guerrilla testing at the airport</li>
          </ul>

          <h3>Research & Discovery</h3>
          <p>Some known facts about Qantas product offering that is relevant for entertainment:</p>
          
          <h4>1. Qantas Airways app (Flagship) - 1.17 million active monthly users</h4>
          <ul>
            <li>Utility</li>
            <li>Check-in, select seat, access boarding pass or manage the trip</li>
            <li>Book flights, hotels, request an Uber and more</li>
          </ul>

          <h4>2. Qantas Entertainment app (Streaming) - 107k active monthly users</h4>
          <ul>
            <li>Stream Entertainment to a customer's personal device</li>
            <li>Watch or listen to movies, TV shows & boxsets, podcasts, and games</li>
          </ul>

          <h4>Leveraging insights and data</h4>
          <p>Focus on deeply understanding the problem by leveraging insights from other teams. I started mapping the customer journey and adding important touch points where users had an action to complete.</p>

          <h4>Mapping the customer journey</h4>
          <p>In addition to analysis of previous research conducted by the Qantas team including customer journeys, personas and competitor analysis, we also had free access to the Qantas Lounge to interview travellers. Here is what we found:</p>
          <img src="/images/62cd72933cf5aa86945be94f_Screen-Shot-2022-07-12-at-11.09.27-pm.webp" alt="Customer journey" />

          <h3>Problem Definition</h3>
          <blockquote>Travellers <strong>don't know</strong> about the Entertainment app until they get on board the flight</blockquote>
          <p>A known fact for Qantas was that 35% of trips are synced or added to the "Qantas Airways app" one week before departure. Our solution hypothesis was that there is an opportunity to engage travellers through the Qantas Airways app, and this would lead to increased use of the entertainment app.</p>

          <h4>Experiment:</h4>
          <p>Incorporate a message about the Qantas Entertainment app in the "flight card" of the Qantas Airways app</p>
          
          <h4>Main Metric:</h4>
          <p>The Qantas Entertainment app downloads from the App Store</p>

          <h4>User flow - Original version</h4>
          <img src="/images/62d92064bd8dc262d8f4684e_Screen-Shot-2022-07-21-at-7.45.40-pm.webp" alt="Original user flow" />

          <h2>Solution & Design</h2>

          <h3>Solution Exploration</h3>
          <p>Every week the Qantas design team holds a sparring/jam session, with the aim to understand what each designer is working on and how they are collaborating on each project, and also to establish our design experience principles used across the Qantas products. Here's how I connected those principles to the solutions presented:</p>

          <h4>Simple and streamlined</h4>
          <blockquote>Focus on primary needs without distractions</blockquote>

          <h4>Connect experience across channels</h4>
          <blockquote>Start, continue and complete tasks across platforms</blockquote>

          <h4>Leverage device strengths</h4>
          <blockquote>Supercharge experiences utilising channel capabilities</blockquote>

          <h4>Respect context</h4>
          <blockquote>Give the user the right experience at the right time</blockquote>

          <h3>Design & Experience</h3>
          <p>One of our solutions was to identify whether users have the Qantas Entertainment App installed on their device, and if not, to surface a distraction-free notice:</p>
          <img src="/images/62d920e6a8820bb1f683016a_Screen-Shot-2022-07-21-at-7.48.07-pm.webp" alt="Notice design" className="img-xs" />

          <h3>Redesigned User Flow</h3>
          <img src="/images/62d923ef2a634d7332345a07_Screen-Shot-2022-07-21-at-8.01.09-pm.webp" alt="Redesigned user flow" />

          <h3>Technical Constraints</h3>
          <p>The thought process for creating this "notice" was based on which model of aircraft the traveller was flying. Qantas operates a fleet of 126 aircraft: Airbus A380, Airbus A330, Boeing 737 and Boeing 787. Our team had to understand the basics to create this experience. So we considered four different situations regarding the aircraft system:</p>
          <ul>
            <li>Aircraft only has the seatback screen</li>
            <li>Aircraft only has wi-fi streaming enabled</li>
            <li>Aircraft has both (seatback and streaming services)</li>
            <li>Aircraft has neither (hide the notice)</li>
          </ul>
          <p>The feature needed to understand which system was available on the aircraft and also whether the user had the app installed on their device to adjust the message accordingly.</p>
          <img src="/images/62db651e9b61420fa9ab20ce_formfactor.webp" alt="Form factor" />

          <h2>Rollout & Iteration</h2>

          <h3>Experiment Results</h3>
          <p>We collect the following data 24 hours after launch:</p>
          <ul>
            <li>27k unique visitors tapped on the 'Download Qantas Entertainment app'</li>
            <li>9k unique visitors tapped on 'Open Qantas Entertainment app'</li>
          </ul>

          <h3>Progressive Releases</h3>
          <p>With the positive results of our experiment, we decided to launch more features that we believed could solve other user-identified pain points and also get travellers engaged and excited about their trip. We start by showing the 5 latest movies available for their flight.</p>
          <img src="/images/62d932ca88b9cb77a06bf8ee_Screen-Shot-2022-07-21-at-9.04.18-pm.webp" alt="Movies feature" />

          <h3>Media Content</h3>
          <p>We also decided to explore a page structure that would accommodate:</p>
          <ul>
            <li>Movies</li>
            <li>TV Shows</li>
            <li>Games</li>
            <li>Music</li>
          </ul>
          <img src="/images/62db6a93b82931731af85715_Media-details.webp" alt="Media details" />

          <h3>Home Page Integration</h3>
          <p>During this process, the Qantas Airways app was also improved by another team on the Travel Squad. Their objective was to surface the itinerary page on the home page so that users wouldn't need to tap on a card to see what's important for their flight.</p>
          <p>This project directly benefited us when released. The entertainment design pattern I designed worked perfectly with this change, users would see what entertainment was available for their flight on the Qantas Airways app home page, which had a huge impact on our team metrics.</p>

          <h3>Design Evolution</h3>
          <ul>
            <li>Surface important user actions</li>
            <li>Cheap to implement and roll-out</li>
            <li>A consistent design pattern across app releases</li>
            <li>High learnability due to user recognition</li>
          </ul>
          <img src="/images/62d9376db01acdaf39623982_Screen-Shot-2022-07-21-at-9.23.58-pm.webp" alt="Design evolution" className="img-small" />

          <h2>Results & Learnings</h2>

          <h3>Outcomes</h3>
          <ol>
            <li>Entertainment is now on the Qantas Airways app home page</li>
            <li>Informing <strong>1.17 million active monthly users</strong> of the entertainment offering for their flight</li>
            <li>App Store downloads: Start of the project (2017) = +58%, After redesign (~2018) = <strong>+70%</strong></li>
          </ol>

          <img src="/images/62de769d97f4602e89070492_user-flow.webp" alt="Final user flow" className="img-full" />

          <h3>Key Takeaways</h3>
          <p>Beyond building a simple design pattern, we allow passengers to discover what's showing on board their next flight. This feature delivers awareness of what entertainment is available when travelling with Qantas and further strengthens the passengers' engagement with the app and the Qantas brand.</p>
          <img src="/images/62df2cccc02b82ce55e9b9f3_conclusion.webp" alt="Conclusion" />
          <p>After working many months, participating in all stages of this project, see also the redesign of Qantas Entertainment app case study, which was fundamental for the success of the business. I'm excited to see how many improvements we made as a team, creating something really exciting, and a product we are all proud of.</p>

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
            <a href="/case-studies/bringing-visibility-to-workers-status" className="card-project">
              <div className="image-project">
                <img src="/images/62fbf14400d70051caf1b477_hireup-project-p-1080.png" alt="Hireup" />
              </div>
              <div className="content-project">
                <h4 className="h4">Changing Booking Behaviour Through Worker Status Visibility</h4>
                <p className="tagline">Reducing uncertainty in a two-sided marketplace and increasing successful bookings by 12%.</p>
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
            <a href="/resume" className="btn btn-ghost">Résumé</a>
            <a href="https://www.linkedin.com/in/fracazo" target="_blank" rel="noopener" className="btn btn-ghost">LinkedIn<ExternalLinkIcon size={14} className="opacity-70" /></a>
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
