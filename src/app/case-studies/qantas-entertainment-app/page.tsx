import type { Metadata } from "next";
import { CaseStudyShell } from "@/components/case-study-shell";

const title = "Driving Engagement Through a Unified Entertainment Experience - Alex Fracazo";
const description = "Reimagining in-flight entertainment as a cohesive product ecosystem.";

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

export default function QantasEntertainmentApp() {
  return (
    <CaseStudyShell>
      <section className="section case-study-content">
        <div className="case-study-main">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a><span className="breadcrumb-sep"> &gt; </span><a href="/work">Work</a><span className="breadcrumb-sep"> &gt; </span><span>Qantas Entertainment</span>
        </nav>
        <header className="case-header">
          <h1 className="case-title">Driving Engagement Through a Unified Entertainment Experience</h1>
          <div className="case-metadata-card">
            <img src="/images/62dc26d29e21732abffdaacd_work4-p-1080.png" alt="Qantas Entertainment App" className="case-hero-image" />
            <div className="metadata-content">
              <div className="metadata-item">
                <svg className="metadata-icon" width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M6 3.75A2.75 2.75 0 0 1 8.75 1h2.5A2.75 2.75 0 0 1 14 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 0 1 6 4.193V3.75Zm6.5 0v.325a41.622 41.622 0 0 0-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25ZM10 10a1 1 0 0 0-1 1v.01a1 1 0 0 0 1 1h.01a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1H10Z" clipRule="evenodd"/><path d="M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 0 1-9.274 0C3.985 17.585 3 16.402 3 15.055Z"/></svg>
                <div className="metadata-text">
                  <p className="metadata-label">Product</p>
                  <p className="metadata-value">Qantas Entertainment App</p>
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
                  <p className="metadata-value">2018</p>
                </div>
              </div>
            </div>
          </div>
          <p className="case-intro">Reimagining in-flight entertainment as a cohesive product ecosystem.</p>
        </header>

        <div className="summary-card">
          <h2><img src="/images/bookmark.svg" alt="" width="24" /> Summary</h2>
          <p>With every passenger carrying a smartphone, tablet or laptop, Qantas saw an opportunity to transform the travel experience by installing inflight Wi-Fi on some aircraft. During my time working at Qantas, I was the lead product designer on the Entertainment squad. We identified 2 hypotheses that could increase app usage.</p>
        </div>

        <div className="case-study-section">
          <h2>Understanding the Opportunity</h2>

          <h3>User Insights</h3>
          <p>Having an in-depth understanding of the traveller's flight journey – pre-flight, during, and after – laid the foundations for building an effective customer experience. I held multiple workshops, conducted qualitative interviews and tested our initial assumptions via face-to-face conversations and prototypes. My desire to make the app experience as smooth and effortless as possible drove our team's design thinking, and also led to the implementation of interesting features.</p>

          <h3>Current State Analysis</h3>
          <p>The Qantas Entertainment app is used to stream entertainment to a customer's personal device, it allows the user to watch or listen to various forms of media.</p>
          <p>A known <strong>problem</strong> was that the current app only worked when the user was on board the plane and connected to a Qantas streaming network.</p>
          <img src="/images/62db95b70af0c632dbf50130_Screen-Shot-2022-07-23-at-4.29.49-pm.webp" alt="Current app state" className="img-small" />
          <img src="/images/62db960e9e2cf8f5ed8f3cc0_Screen-Shot-2022-07-23-at-4.29.55-pm.webp" alt="App screens" className="img-small" />

          <h3>Project Goals</h3>
          <blockquote>Increase Entertainment app usage.</blockquote>

          <h3>Core Problem</h3>
          <blockquote>Travellers that have the Entertainment app installed on their phone don't engage with it, because the app doesn't work if not connected to the Qantas network.</blockquote>

          <h3>Hypothesis</h3>
          <blockquote>We predict that increasing the entertainment offering before and after the flight will increase the app usage.</blockquote>

          <h2>Design & Iteration</h2>

          <h3>Concept Development</h3>
          <p>Workshops with stakeholders and team members.</p>
          <img src="/images/62dbb2f91599635a246c14ba_Sketch.webp" alt="Sketches" />

          <h3>Iteration & Testing</h3>
          <p>The winning ideas are iterated and turned into mockups for user research.</p>
          <img src="/images/62ddc453f0156d74347ac1cf_IMG_8141.webp" alt="Testing" />

          <h2>Icon Redesign</h2>

          <h3>Icon Strategy</h3>
          <p>Redesigning the app icon was part of the process during the project, as it should be the strongest connection with the user. It is what they will see first when they land or search in the App Store.</p>

          <h4>What problems does the current app icon have?</h4>
          <img src="/images/62db9a6a0af0c66bb8f54054_icon-redesign.webp" alt="Icon problems" />
          <ul>
            <li>The image of an old TV from the 80s could imply that streaming would be slow</li>
            <li>The red background is the same colour as the Qantas Airways app, which could cause confusion when trying to find it in the App Store</li>
          </ul>
          <img src="/images/62dba00a2ccfa45b6b5caa25_icon.webp" alt="Icon comparison" className="img-xs" />

          <h3>Design Rationale</h3>
          <p>An app icon is expected to be a visual anchor for the product. It is a small piece of branding that, in addition to being attractive and standing out, should ideally also communicate the essence of the Qantas Entertainment (QE) app.</p>

          <h4>I created the QE app icon with 4 basic design principles in mind:</h4>
          <ul>
            <li>Scalability</li>
            <li>Recognisability</li>
            <li>Consistency</li>
            <li>Uniqueness</li>
          </ul>
          <p>Reviewing the Qantas Brand Guidelines, I discovered a branded device called "pebble shape" that would work perfectly to hold a play icon.</p>
          <img src="/images/62ef65249d54c22b8832a872_icon-rationality.webp" alt="Icon rationality" />

          <h3>Final Icon Design</h3>
          <p>The new icon had visibility across the Qantas group and the brand manager adopted the icon as the Qantas brand for entertainment.</p>
          <img src="/images/62dfbfe1ae91243f8a293521_icon.webp" alt="New icon" />

          <h2>Product Experience</h2>

          <h3>Feature Design</h3>
          <p>Qantas Entertainment can retrieve data from the Qantas Airways app, like user name, flight and frequent flyer info.</p>
          <img src="/images/62dbf1780df0886dbe040658_Experience-1.webp" alt="Experience 1" />

          <h4>The UI adapts to the entertainment type the aircraft supports</h4>
          <ul>
            <li>User has no upcoming trips - show the latest 5 movies</li>
            <li>Aircraft only has the seatback screen</li>
            <li>Aircraft only has streaming services</li>
            <li>Aircraft has both (seat back and streaming services)</li>
            <li>Aircraft has neither (users only have access to Newspapers & Magazines, and exclusive offers)</li>
          </ul>
          <img src="/images/62dbf18c99bfd636c45d7ceb_Experience-2.webp" alt="Experience 2" />
          <img src="/images/62dbf33322fdbe67a1f79575_redesigned---ready-to-flight.webp" alt="Ready to flight" />
          <img src="/images/62dbb371788939d647160c0f_redesigned---at-the-airplane.webp" alt="At the airplane" />
          <img src="/images/62ef67ff917ce135295b4b6c_Experience-3.webp" alt="Experience 3" />

          <h3>User Research</h3>
          <p>The way I like to perform qualitative user testing is to start talking about their life. In a relaxing way, I ask about specific things that have happened in the past and how they solved them. After gathering an understanding of their situation, I ask them to perform a task and I watch to see how they complete it, without helping them along the way.</p>
          <img src="/images/62ddc62adc69f994be51a3a8_IMG_8117.webp" alt="Research 1" className="img-small" />
          <img src="/images/62ddc5e63b3a73d76a254359_IMG_8124.webp" alt="Research 2" className="img-xs" />

          <h3>Ongoing Validation</h3>
          <p>We also ran embedded user tests, on board the plane.</p>
          <img src="/images/62ddc5473b3a732620253c07_IMG_4772.webp" alt="Testing on plane" className="img-small" />
          <img src="/images/62ddc4c6ee175f391ba87014_IMG_1742.webp" alt="Testing 2" className="img-xs" />

          <h3>Cross-Channel Integration</h3>
          <p>I worked closely with engineers to validate the design and copy implementations. Along with daily stand-ups, we also had weekly demos and would occasionally sit together to cross-check implementation with final designs.</p>
          <ul>
            <li>4 rounds of user testing</li>
            <li>2 rounds of design critique / Jam</li>
          </ul>

          <img src="/images/user-flow.webp" alt="User flow" className="img-full" />

          <img src="/images/62ddc84c1ae3453b107eac6d_effedb79-f8b4-48eb-8219-395614866761.webp" alt="Presentation" className="img-small" />
          <p className="img-caption">Presenting iPad results during Qantas showcase</p>

          <h2>Impact & Learnings</h2>

          <h3>Results</h3>
          <p>Help customers to be fully prepared by guiding them on downloading the Qantas Entertainment app before they board, including informing them on what devices to bring onboard to make the most of the Entertainment & Wi-Fi on flights.</p>
          <img src="/images/62de6bf705fafdd2df4c3e83_IFE-Image-1-1024x690.webp" alt="Results" className="img-small" />

          <h4>Monthly Active Users (MAU)</h4>
          <ul>
            <li>Start of the project (2017) = 165k</li>
            <li>After redesign (~2019) = 180k • <strong>+10%</strong></li>
          </ul>

          <h4>App Store Rating</h4>
          <ul>
            <li>Start of the project (2017) = 2.1</li>
            <li>After redesign (~2019) = 4.5 • <strong>+114%</strong></li>
          </ul>

          <h4>Advertising Revenue (from partners' offers)</h4>
          <ul>
            <li>Start of the project (2017) = 225k</li>
            <li>After implementation (~2019) = 675k • <strong>+~200%</strong></li>
          </ul>

          <h3>Key Learnings</h3>

          <h4>Don't take simple implementations for granted</h4>
          <p>The "what's new" feature displayed the latest 5 new movies available for the user's flight. We identified huge engagement with this design pattern. There was an opportunity to add offers from Qantas partners.</p>

          <h4>Bring engineers early on to uncover blind spots on implementation</h4>
          <p>The tech review happened only after the design was approved. During the tech review, we identified that to create this service (back-end) would take ~6 months. Therefore I changed the design and created a new design pattern. I've learned to bring engineers to the design reviews early in the discovery journey.</p>

          <h3>Future Opportunities</h3>
          <p>Some ideas related to traveller expectations that could be explored further:</p>
          <ul>
            <li>Premium content within the app</li>
            <li>Flight information such as refreshment times and flight crew profiles</li>
            <li>What other passengers are watching on the same flight</li>
            <li>Onboard cabin upgrade options (during the flight)</li>
          </ul>
          <img src="/images/62dc0d9832dfaec69cd1fe1c_Experience-4.webp" alt="Next steps" />

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
            <a href="/case-studies/qantas-app" className="card-project">
              <div className="image-project">
                <img src="/images/62dc1d83920df32baae28d6b_work2-p-1080.png" alt="Qantas App" />
              </div>
              <div className="content-project">
                <h4 className="h4">Increasing App Adoption by Integrating Entertainment Services</h4>
                <p className="tagline">Using entertainment features to drive a 70% increase in app downloads.</p>
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
