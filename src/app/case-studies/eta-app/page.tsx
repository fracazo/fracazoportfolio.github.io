import type { Metadata } from "next";
import { CaseStudyShell } from "@/components/case-study-shell";

const title = "Reducing Friction in Government Visa Applications - Alex Fracazo";
const description = "Automating data entry to improve completion and reduce user effort in a high-stakes service.";

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

export default function EtaApp() {
  return (
    <CaseStudyShell>
      <section className="section case-study-content">
        <div className="case-study-main">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a><span className="breadcrumb-sep"> &gt; </span><a href="/work">Work</a><span className="breadcrumb-sep"> &gt; </span><span>ETA App</span>
        </nav>
        <header className="case-header">
          <h1 className="case-title">Reducing Friction in Government Visa Applications</h1>
          <div className="case-metadata-card">
            <img src="/images/62dc274f132cbe543717e126_work1-p-2000.jpg" alt="ETA App" className="case-hero-image" />
            <div className="metadata-content">
              <div className="metadata-item">
                <svg className="metadata-icon" width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M6 3.75A2.75 2.75 0 0 1 8.75 1h2.5A2.75 2.75 0 0 1 14 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 0 1 6 4.193V3.75Zm6.5 0v.325a41.622 41.622 0 0 0-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25ZM10 10a1 1 0 0 0-1 1v.01a1 1 0 0 0 1 1h.01a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1H10Z" clipRule="evenodd"/><path d="M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 0 1-9.274 0C3.985 17.585 3 16.402 3 15.055Z"/></svg>
                <div className="metadata-text">
                  <p className="metadata-label">Product</p>
                  <p className="metadata-value">Electronic Travel Authority App</p>
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
                  <p className="metadata-value">Lead Product Designer</p>
                </div>
              </div>
              <div className="metadata-item">
                <svg className="metadata-icon" width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M5.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4h.25A2.75 2.75 0 0 1 18 6.75v8.5A2.75 2.75 0 0 1 15.25 18H4.75A2.75 2.75 0 0 1 2 15.25v-8.5A2.75 2.75 0 0 1 4.75 4H5V2.75A.75.75 0 0 1 5.75 2Zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75Z" clipRule="evenodd"/></svg>
                <div className="metadata-text">
                  <p className="metadata-label">Year</p>
                  <p className="metadata-value">2020</p>
                </div>
              </div>
            </div>
          </div>
          <p className="case-intro">Automating data entry to improve completion and reduce user effort in a high-stakes service.</p>
        </header>

        <div className="summary-card">
          <h2><img src="/images/bookmark.svg" alt="" width="24" /> Summary</h2>
          <p>The Department of Home Affairs was finding it difficult to manage the ETA visa data mismatch, due to the time it took to update the traveller data and interact with airlines/gates.</p>
        </div>

        <div className="case-study-section">
          <h2>Discovery & Research</h2>
          
          <h3>Known Facts</h3>
          <p>An ETA is an electronically stored authority equivalent to an e-visa, which is linked to a passport number.</p>
          <img src="/images/62ca9453bd099acc44edfcac_Screen-Shot-2015-08-23-at-2.02.32-PM.png" alt="Australian Government ETA website" />
          <p className="img-caption">Australian Government ETA web-based website</p>
          <p>When the project started, the Department of Home Affairs offered an <strong>ETA product (web-based website)</strong> as the primary entry point for users to apply for the ETA, to facilitate clients <strong>from nominated countries</strong> visiting Australia <strong>for short-term tourist or limited business activities.</strong> The process could take anywhere from a <strong>week to two months</strong>.</p>

          <h3>User Immersion</h3>
          <p>I wanted to meet with those who were significantly involved in the visa approval process the border control and management providers. Therefore, I contacted the key stakeholders in Sydney, SITA and the Department of Home Affairs. I gained access to relevant and high-security data and also interviewed some of their staff. Some data analysed:</p>
          <ul>
            <li>Quantity of ETAs processed</li>
            <li>% of data success rate, and ETAs not completed</li>
            <li>Average % of processing time of ETAs</li>
            <li>Data accuracy recorded from the last year</li>
          </ul>

          <h3>Problem Analysis</h3>
          <p>Before visiting Australia, people need to apply for a visa and manually fill out a multi-page form on the ETA website with the following information:</p>
          <ul>
            <li><strong>Passport</strong> information</li>
            <li><strong>Identity</strong> details</li>
            <li><strong>Personal</strong> information</li>
            <li>Visitor <strong>integrity</strong> information</li>
          </ul>
          <img src="/images/62c93ec16128094ec8c19b4b_Screen-Shot-2022-07-09-at-6.39.18-pm.png" alt="ETA form" />

          <h3>Competitive Landscape</h3>
          <p>We also analysed worldwide business trends on e-visas and found out that:</p>
          <blockquote>Malaysia was the first country from APAC to collect biometrics through visa applicants and now expected to have the largest market share in the Asia-Pacific e-visa market.</blockquote>
          <p>Countries that have additional support for e-visas have helped the market share grow in the region.</p>

          <h3>Key Insights</h3>
          <p>The need for smart processes that <strong>eliminate manual entries</strong> and support operators and the demand for flexibility and scalability, are expected to be the key drivers for the future.</p>

          <h2>Defining the Solution</h2>

          <h3>Problem Reframing</h3>
          <p>I took a few steps back and looked at the original challenge again. This time, with much more context to the problem.</p>
          
          <h4>What were we trying to achieve?</h4>
          <p>Improve the quality of data from travellers and improve the application user experience</p>
          
          <h4>Why were we not achieving the goal yet?</h4>
          <p>Traveller data was manually entered in a web-based application</p>
          
          <h4>What could be a solution to the problem?</h4>
          <p>A solution to improve the data quality could be capturing the biometrics and passport chip information using a mobile app to extract the data</p>
          
          <h4>How might we test a solution hypothesis?</h4>
          <p>Implement an external SDK module on a mobile app, where we could test the impact of using the device's capabilities to collect biometrics</p>

          <h3>Problem Statement & Design Prompt</h3>
          <blockquote>The <strong>manual method</strong> of data entry has downstream impacts on the border process as it is susceptible to accidental human error</blockquote>
          <p>Design an improved ETA application experience that will help travellers to Australia apply for an e-visa using their personal device.</p>

          <h3>Business Requirements</h3>
          <ol>
            <li>Reach the desired goal of 100% e-chip biographic and biometric data held on the passport</li>
            <li>A live facial image</li>
            <li>Improve data integrity</li>
            <li>Reduce time spent updating client data</li>
            <li>Reduce time spent interacting with airlines/gates when there is a data mismatch</li>
          </ol>

          <h3>Technical Constraints</h3>
          <h4>SDK technology to scan passports had lots of limitations:</h4>
          <ol>
            <li>No user controls in the interface to lock the camera focus</li>
            <li>No clear feedback on errors</li>
            <li>The user could not choose device orientation</li>
          </ol>

          <h3>User Needs</h3>
          <ul>
            <li>Reduce impacts on the border process</li>
            <li>Meet the need for a fast ETA approval process</li>
            <li>Remove or reduce the manual entry when people are applying for an ETA</li>
          </ul>
          
          <blockquote>The Minimum Viable Product for the ETA mobile app would be the capability to capture the passport data and user biometrics, and also enable users to easily pay for an ETA application using their device.</blockquote>
          
          <h4>Features to be rolled out after the MVP phase</h4>
          <p>The user would be able to add multiple travellers' ETA applications, bucket payments and submissions.</p>

          <h2>Design & Prototyping</h2>

          <h3>Solution Exploration</h3>
          <p>Due to the complexity of the problem, I started sketching some possible solutions and decided to break it down into a few <strong>"How might we"</strong> questions, allowing me to focus on one challenge at a time.</p>
          <blockquote>How might we easily guide the user step by step, to capture user and passport biometrics?</blockquote>
          <blockquote>How might we automatically capture data from the user's passport using the user's personal device?</blockquote>
          <blockquote>How might we design and develop an ETA mobile app to improve the quality of data received from the traveller, capture the biometrics of the applicant and improve the overall user experience in applying for an ETA?</blockquote>
          <img src="/images/62c9751009e7a26955e26495_Screen-Shot-2022-07-09-at-10.30.39-pm.png" alt="Sketches" className="img-small" />

          <h4>The goal:</h4>
          <p>Improve the ETA application experience for travellers wanting to visit Australia</p>
          
          <h4>Identified Jobs to be done:</h4>
          <p>Given the ideas that came up in the sketching sessions, I defined which solutions had the most potential to effectively solve the problem and decided to map out a possible main user flow.</p>
          <ol>
            <li>Capture a passport photo</li>
            <li>Scan passport using NFC</li>
            <li>Take a face capture (selfie)</li>
            <li>Confirm Information</li>
            <li>Pay for the ETA</li>
            <li>Submit application</li>
          </ol>

          <h3>User Flows & Wireframing</h3>
          <p>As the solution became increasingly clear, so did the level of detail and fidelity of the artefacts. At this point, I began to explore user flows in more detail, while at the same time considering possible interactions and interfaces.</p>

          <h3>Prototype & User Testing</h3>
          <p>I ran user testing with 8 participants combining early design concepts and the biometrics SDK software we would incorporate in the app. Our primary objective was to identify:</p>
          <ul>
            <li>First impressions of the app</li>
            <li>How it compares to expectations</li>
            <li>How understandable the screens, sequence and questions are</li>
            <li>Perceived ease of use</li>
            <li>Ease of navigation</li>
            <li>Task satisfaction</li>
            <li>Learnability</li>
          </ul>

          <h3>Testing Insights</h3>
          <img src="/images/62ca526de691b2001b6b472a_Screen-Shot-2022-07-10-at-2.15.21-pm.png" alt="User testing results" className="img-small" />
          <ul>
            <li>Most of the flow met their expectations</li>
            <li>Some were hesitant about the app and the T&Cs of the app individually</li>
            <li>Reducing the number of permission screens would increase favourability</li>
            <li>Changes to text and descriptions should resolve most misunderstandings</li>
          </ul>

          <h3>Onboarding Flow</h3>
          <p>Due to the legal complexity of collecting private and biometrics data from users, the onboarding and registration process was 5 multi-complex steps where users needed to view, acknowledge and agree.</p>
          <img src="/images/62ca744f6e94d7bd98361a9b_Iterations.png" alt="Iterations" />

          <h3>Iteration Process</h3>
          <p>We tried different approaches to reduce the steps from the user side and had approval from the legal team.</p>
          <img src="/images/62caa729b362d1faa50a4f05_idea-1.png" alt="Design idea" className="img-small" />
          <p>My approach was to remove the checkboxes and merge the agreements into a single page.</p>
          <img src="/images/62ca9fbbb362d10f340a0a49_iPhone-8---TC.png" alt="Solution implemented" className="img-xs" />
          <p className="img-caption">Solution Implemented</p>

          <h3>Design Details</h3>
          <p>The design principles that I focused on most for this project were accessibility and inclusion, as it is an application that people from different cultures and age groups can use. Some of the guidelines I had in mind while creating the user interface were:</p>
          <blockquote>The app provides a utility so the <strong>interface should feel native and simple</strong> to the device the person is using</blockquote>
          <p>The colours used in the design were adapted from the <strong>Home Affairs Brand guidelines to create customer empathy</strong> through the visual and brand connection.</p>
          <p>The preferred typeface from the Brand Guidelines was Helvetica Neue, but since the App is heavy on data, I chose to use the <strong>device's native fonts</strong> to minimise the screen load so that the app feels light weight <strong>as user actions should be quick to respond.</strong></p>
          <img src="/images/62ca98319e6ac4a404da4d49_Screen-Shot-2022-07-10-at-7.13.01-pm.png" alt="Design details" className="img-small" />

          <h2>Key Features</h2>

          <h3>Feature Overview</h3>
          <img src="/images/62caa63e33c6504c2ebe850c_Android--iPhone.png" alt="Final results - Android and iPhone" />

          <h3>Dashboards</h3>
          <img src="/images/62ca9af337b2819503bdf0e1_Dashboards.png" alt="Dashboards" />

          <h3>Capture Passport Photo</h3>
          <p>One of the biggest trade-offs for this project was having to compromise usability. We had to change the design of the passport capture screen to accommodate an SDK interface from an external provider, we were using their service to capture the passport information and process it into data.</p>
          <img src="/images/62caab5eca69f313a9a5b8c5_SDK-Contraints.png" alt="SDK constraints" />

          <h3>NFC Scan</h3>
          <img src="/images/62ca9d1c707bc54c532d4461_NFC-Scan.png" alt="NFC Scan" />

          <h3>Live Photo Capture</h3>
          <img src="/images/62caac8537b28197abbe90b9_Live-Photo-Capture.png" alt="Live photo capture" />
          <img src="/images/62cab1cd6e94d7a4ab3881ba_Confirm-info.png" alt="Confirm info" />
          <img src="/images/62cab1e2707bc5d01d2e6328_Payment.png" alt="Payment" />
          <img src="/images/62cab1f7ca69f3a06ca60419_Submission.webp" alt="Submission" />

          <h3>Copywriting & Microcopy</h3>
          <p>Microcopy played a huge role in product design, many rounds of copy review went into this project. Some guidelines used in the designs and development were related to title style capitalisation.</p>

          <h2>Outcomes & Learnings</h2>

          <h3>Implementation</h3>
          <img src="/images/62cab39b903d34450f12a591_Screen-Shot-2022-07-10-at-9.10.01-pm.webp" alt="Building phase" className="img-small" />
          <p>Working with engineers is a big part of my role which I love. For this project, I've used Sketch, Abstract and Zeplin, which work great for syncing files and providing developers with assets.</p>
          <p>Assets were created for <strong>Android and iOS</strong></p>
          
          <h4>Delightful Details</h4>
          <p>There's a user expectation of how these types of UIs operate, so there aren't many opportunities to take a conceptually unique approach. My solution was to design a "standard" step-by-step app that included fun details where possible, such as loading state and user feedback animations.</p>
          <img src="/images/62c94c07a33caa58679afdc3_NFC-Entrant.gif" alt="NFC animation" className="img-small" />

          <h3>Key Learnings</h3>
          <ul>
            <li>Using an external SDK provider made our team more agile on deliverables</li>
            <li>I learned how to work with the legal team. I organised multiple showcases and workshops that helped to bring clarity on why we were doing this and how it was aligned with the company's key objectives and unblocked the team</li>
          </ul>

          <h3>Future Improvements</h3>
          <ul>
            <li>Checking analytics to see where users would drop off</li>
            <li>Creating a feature where the user could get help</li>
          </ul>
          
          <p><strong>Additional metrics I would look for</strong></p>
          <ul>
            <li>% time of visa application process</li>
            <li>% of visa applications using the ETA app <strong>compared with</strong> web-based Visa applications</li>
            <li>% of data accuracy reported by the Department of Home Affairs</li>
            <li>% of visa applications via the ETA App</li>
            <li>% of abandoned applications via the ETA App <strong>compared with</strong> web-based Visa applications</li>
          </ul>

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
            <a href="/case-studies/qantas-entertainment-app" className="card-project">
              <div className="image-project">
                <img src="/images/62dc26d29e21732abffdaacd_work4-p-1080.png" alt="Qantas Entertainment" />
              </div>
              <div className="content-project">
                <h4 className="h4">Driving Engagement Through a Unified Entertainment Experience</h4>
                <p className="tagline">Reimagining in-flight entertainment as a cohesive product ecosystem.</p>
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
