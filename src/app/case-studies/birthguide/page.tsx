import type { Metadata } from "next";
import { CaseStudyShell } from "@/components/case-study-shell";

const title = "The birth plan that advocates for you during labour - Alex Fracazo";
const description = "A birth plan you open on your phone, not one you forget in your bag. Designed and shipped in 10 days as a solo non-developer founder.";

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

export default function Birthguide() {
  return (
    <CaseStudyShell>
      <section className="section case-study-content">
        <div className="case-study-main">

          <nav className="breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a><span className="breadcrumb-sep"> &gt; </span><a href="/work">Work</a><span className="breadcrumb-sep"> &gt; </span><span>BirthGuide</span>
          </nav>

          <header className="case-header">
            <h1 className="case-title">The birth plan that advocates for you during labour</h1>
            <div className="case-metadata-card">
              <img src="/images/birthguide-hero.svg" alt="BirthGuide interactive birth plan on mobile" className="case-hero-image" />
              <div className="metadata-content">
                <div className="metadata-item">
                  <svg className="metadata-icon" width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M6 3.75A2.75 2.75 0 0 1 8.75 1h2.5A2.75 2.75 0 0 1 14 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 0 1 6 4.193V3.75Zm6.5 0v.325a41.622 41.622 0 0 0-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25ZM10 10a1 1 0 0 0-1 1v.01a1 1 0 0 0 1 1h.01a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1H10Z" clipRule="evenodd"/><path d="M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 0 1-9.274 0C3.985 17.585 3 16.402 3 15.055Z"/></svg>
                  <div className="metadata-text">
                    <p className="metadata-label">Product</p>
                    <p className="metadata-value">BirthGuide</p>
                  </div>
                </div>
                <div className="metadata-item">
                  <svg className="metadata-icon" width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M2 4.25A2.25 2.25 0 0 1 4.25 2h11.5A2.25 2.25 0 0 1 18 4.25v8.5A2.25 2.25 0 0 1 15.75 15h-3.105a3.501 3.501 0 0 0 1.1 1.677A.75.75 0 0 1 13.26 18H6.74a.75.75 0 0 1-.484-1.323A3.501 3.501 0 0 0 7.355 15H4.25A2.25 2.25 0 0 1 2 12.75v-8.5Zm1.5 0a.75.75 0 0 1 .75-.75h11.5a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75H4.25a.75.75 0 0 1-.75-.75v-7.5Z" clipRule="evenodd"/></svg>
                  <div className="metadata-text">
                    <p className="metadata-label">Platform</p>
                    <p className="metadata-value">Web (mobile-first)</p>
                  </div>
                </div>
                <div className="metadata-item">
                  <svg className="metadata-icon" width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z"/></svg>
                  <div className="metadata-text">
                    <p className="metadata-label">Role</p>
                    <p className="metadata-value">Founder &amp; Product Designer</p>
                  </div>
                </div>
                <div className="metadata-item">
                  <svg className="metadata-icon" width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M5.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4h.25A2.75 2.75 0 0 1 18 6.75v8.5A2.75 2.75 0 0 1 15.25 18H4.75A2.75 2.75 0 0 1 2 15.25v-8.5A2.75 2.75 0 0 1 4.75 4H5V2.75A.75.75 0 0 1 5.75 2Zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75Z" clipRule="evenodd"/></svg>
                  <div className="metadata-text">
                    <p className="metadata-label">Year</p>
                    <p className="metadata-value">2026</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="case-intro">Birth plan templates are full of medical terms first-time parents do not understand. AI tools generate five pages nobody reads during labour. A printed piece of paper gets left at home. BirthGuide is a shareable URL: your birth preferences, your contacts, your hospital bag checklist, on any phone, in one tap.</p>
          </header>

          <div className="summary-card">
            <h2><img src="/images/bookmark.svg" alt="" width="24" /> Summary</h2>
            <p>BirthGuide is a live consumer product I designed and shipped as a solo non-developer founder in under two weeks. From the first conversation on February 9, 2026 (naming the product, registering the ABN, writing the full PRD) to a deployed, payment-taking product on February 18. A guided questionnaire produces four personalised outputs: a shareable interactive birth plan page, a partner labour cheat sheet, a clinical PDF, and a personalised hospital bag checklist. The first paying customer found the product through a ChatGPT referral, completed the questionnaire in under 10 minutes, paid A$4.99, and immediately shared her plan with her birth team. She never downloaded the PDFs. That single data point confirmed the core thesis: the shareable page is the product.</p>
          </div>

          <div className="case-study-section">
            <h2>The problem</h2>

            <h3>Templates assume you already know</h3>
            <p>Birth plan templates are written for people who already understand the terminology. Delayed cord clamping. Active management of third stage. Continuous CTG monitoring. First-time parents encounter these terms with no context and no explanation. The template does not help them decide. It asks them to tick a box next to words they have never seen.</p>

            <h3>More content is not better content</h3>
            <p>AI tools like ChatGPT can generate a birth plan, but they produce five pages of prose. A midwife in a labour ward has 30 seconds, not 30 minutes. Length is not thoroughness. It is noise.</p>

            <h3>Paper fails on the day</h3>
            <p>A printed birth plan has to be remembered, packed, and produced at the right moment. On the day of the birth, in the rush to get to the hospital, "where is our birth plan?" is a real question. How many copies? Did we pack it? Is it the latest version? A piece of paper in a bag is not a reliable system for the most important day of your life.</p>

            <h3>What BirthGuide solves</h3>
            <p>Each of these three problems has a direct solution in the product:</p>
            <ul>
              <li>A guided questionnaire that explains every option in plain language, so parents understand what they are choosing, not just what they are ticking.</li>
              <li>A single interactive page with only the information that matters, scannable in seconds. Top 5 priorities surface first. Everything else is one tap away.</li>
              <li>A shareable URL that lives on your phone, never needs printing, includes a QR code for anyone who wants a physical copy, and has tap-to-call contacts for emergencies and services like placenta collection.</li>
              <li>A personalised hospital bag checklist built from your actual birth preferences. If you are planning a water birth, it includes swimwear. If you chose hypnobirthing, it includes affirmation cards. Generic templates assume every birth is the same.</li>
            </ul>

            <blockquote>During active labour, the birthing parent cannot read their own plan. The partner becomes the primary reader. They need something scannable on a phone, not a five-page Word document.</blockquote>

            <h3>No category leader</h3>
            <p>"Birth plan template" and "birth plan generator" are high-intent search terms with meaningful Australian volume (estimated 1,000–2,700 monthly searches for "birth plan" alone) and zero Australian-specific interactive tools competing for them. The market has template blogs, generic PDFs, and a handful of US-focused apps. None produce a shareable, interactive output designed for the Australian maternity system: RANZCOG guidelines, MGP care models, public vs. private hospital pathways.</p>
          </div>

          <div className="case-study-section">
            <h2>The product design</h2>

            <h3>One questionnaire, four outputs</h3>
            <p>The core design decision was to separate the input experience from the output formats. Parents answer one guided questionnaire in under 10 minutes. From that single session, the system generates four things simultaneously:</p>
            <ul>
              <li><strong>An interactive birth plan page.</strong> A unique URL at birthguide.com.au/plan/[name] with tabs for Summary, Contacts, and Hospital Bag. The Summary surfaces a "Top 5 priorities" list. Contact numbers are tap-to-call. The Hospital Bag tab has interactive checkboxes. Designed to be pulled up on a phone in a labour ward.</li>
              <li><strong>A partner labour cheat sheet (PDF).</strong> A single page designed for the birth partner to hold. Large text, colour-coded sections, scannable in under 30 seconds.</li>
              <li><strong>A full birth plan PDF.</strong> A colour-coded, single-page A4 document with a 4-column grid layout for clinical use. Multiple birth plan variants (primary, epidural backup, caesarean) fit on one page. Format validated by Australian midwives.</li>
              <li><strong>A personalised hospital bag checklist (PDF).</strong> Generated from the parent's specific preferences, not a generic list. If they chose a water birth, it includes swimwear. If they chose hypnobirthing, it includes affirmation cards.</li>
            </ul>

            <h3>The shareable URL as the core product</h3>
            <p>Most competitors produce a document. BirthGuide produces a living page. This was a deliberate design bet. A PDF is a dead end: printed once, filed, forgotten. A URL is shareable, updateable, and viewable on any device without a download. It also has a built-in viral loop: every completed birth plan creates a shareable URL that exposes BirthGuide to the parent's birth team, partner, midwife, family.</p>

            <blockquote>The interactive page is the product. It owns the unqualified noun "birth plan." The PDFs are supplementary print formats for contexts where a screen is not accessible.</blockquote>

            <h3>Repositioning: from kit to shareable page</h3>
            <p>The initial version of BirthGuide was positioned as a "birth plan kit" with four downloadable outputs listed as equals: a birth plan PDF, a partner cheat sheet, a hospital bag checklist, and an interactive shareable page. The landing page treated all four as selling points.</p>
            <p>Through the process of writing landing page copy and testing how people described the product, a pattern emerged. The interactive page was the most differentiated output but was being buried as one of four equal items. That was the wrong hierarchy.</p>
            <p>The repositioning was informed by how successful digital products name their formats. Paperless Post calls the digital version "the card" and the printed one "the printable." Linktree is "your Linktree," not "your Linktree link page." The pattern is consistent: the interactive version owns the unqualified noun. The static version carries the format qualifier.</p>
            <p>"Kit" was removed from every surface. The interactive page became "your birth plan." The PDFs became "print versions." The headline became four words: "A birth plan you share."</p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", margin: "1.5rem 0" }}>
              <div style={{ background: "var(--panel)", border: "1px solid var(--border)", borderTop: "3px solid #dc2626", borderRadius: "10px", padding: "1.25rem" }}>
                <p style={{ fontSize: "0.7rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", color: "#dc2626", marginBottom: "0.75rem" }}>Before</p>
                <p style={{ fontSize: "0.88rem", lineHeight: "1.6", color: "var(--muted)", margin: "0" }}>Get your Birth Plan Kit: 4 outputs including an online birth plan, full PDF, cheat sheet, and hospital bag checklist.</p>
              </div>
              <div style={{ background: "var(--panel)", border: "1px solid var(--border)", borderTop: "3px solid #16a34a", borderRadius: "10px", padding: "1.25rem" }}>
                <p style={{ fontSize: "0.7rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", color: "#16a34a", marginBottom: "0.75rem" }}>After</p>
                <p style={{ fontSize: "0.88rem", lineHeight: "1.6", color: "var(--muted)", margin: "0" }}>A birth plan you share. Send your preferences to your midwife and partner in one tap. Print versions included for the hospital bag.</p>
              </div>
            </div>

            <h3>Designing for the real moment of use</h3>
            <p>Most birth plan tools are designed for the planning phase: sitting at a desk, at 32 weeks, with time to think. BirthGuide is designed for the use phase: a labour ward at 2am, a partner fumbling with a phone, a midwife with 30 seconds to scan. That constraint drove every layout and hierarchy decision. Top 5 priorities first. Tap-to-call for every number. No narrative prose in the summary. Colour-coded sections matching the PDF so a midwife who has seen the printed version can orient in the digital one instantly.</p>

            <video autoPlay loop muted playsInline style={{ width: "100%", maxWidth: "320px", borderRadius: "12px", display: "block", margin: "1.5rem auto 0", background: "#000" }}>
              <source src="/images/birthguide-demo-compressed.mp4" type="video/mp4" />
            </video>
            <p className="img-caption">The interactive birth plan page in use. Summary tab shows Top 5 priorities first, tap-to-call contacts, and interactive hospital bag checklist.</p>


          </div>

          <div className="case-study-section">
            <h2>Instrumentation and iteration</h2>

            <h3>Replacing usability testing with passive observation</h3>
            <p>With no budget for formal research and low traffic volume in early weeks, the measurement stack had to do the work that usability studies would normally do. Before the first line of content was published, I instrumented the funnel end-to-end.</p>
            <p>GA4 tracks a custom event taxonomy across every step: questionnaire started, each section completed, abandonment (fires on tab visibility change), preview viewed, payment initiated, and file downloaded. Each event carries metadata including section name, completion percentage, and active time spent.</p>
            <p>Microsoft Clarity records every session: heatmaps, scroll depth, rage clicks, and dead clicks. The GA4 integration means a drop-off identified in the funnel can be traced to the exact Clarity recording of that session.</p>

            <h3>Finding the blank screen problem</h3>
            <p>This instrumentation resolved a critical issue early. For weeks after launch, Clarity recordings showed mobile visitors staring at a blank white screen for several seconds before bouncing. The root cause was a rendering architecture decision: the server was not sending visible HTML until JavaScript had loaded and executed. Fixing it took minutes. Finding it required watching session recordings. Without instrumentation, this would have been invisible in aggregate data. The session would just appear as a bounce with no explanation.</p>

            <blockquote>The cycle is: measure, watch recordings, identify friction, write a spec, ship the fix, measure again. Every feature is instrumented before it ships. Every decision is informed by what the data shows.</blockquote>

            <h3>The questionnaire abandonment model</h3>
            <p>Abandonment events fire when a user switches tabs or the browser loses focus. Because each event carries the section name and completion percentage, I can see exactly where in the questionnaire people stop, not just that they stopped. This is more useful than a completion rate alone. If abandonment clusters at section 3 of 6, the problem is section 3, not the questionnaire in general.</p>
          </div>

          <div className="case-study-section">
            <h2>Early traction</h2>

            <h3>First customer</h3>
            <p>BirthGuide launched in February 2026 and received its first paying customer on May 5, 2026. A first-time mother in Perth, due May 29, found the product through a ChatGPT referral. GA4 attribution shows exactly one session from chatgpt.com/referral that day. She completed the questionnaire in a single sitting, paid A$4.99, and immediately viewed and shared her interactive birth plan page with at least two other people: her partner and/or midwife. She never downloaded the PDFs.</p>

            <blockquote>This is the validation signal. The first real customer used the shareable interactive page, not the documents. The product thesis was correct: the URL is the product.</blockquote>

            <h3>What the funnel data shows</h3>
            <p>The conversion funnel works end-to-end: from external referral, through a 10-minute questionnaire, to payment, to usage, to sharing in approximately four minutes from first visit to payment. The product has the viral loop built in: every completed plan creates a URL that travels to people who may be expecting or know someone who is.</p>

            <h3>Unit economics</h3>
            <p>BirthGuide runs on serverless infrastructure: Vercel, Supabase free tier, Stripe. The marginal cost of serving an additional user is effectively zero at current scale. Fixed monthly infrastructure cost is under A$20. At A$4.99, the business is profitable from the first customer on a per-unit basis.</p>
            <p>The price was reduced from A$14.99 to A$4.99 to lower the barrier for early adoption and validate the funnel before optimising for revenue. The more significant model shift is the subscription play: a parent who pays A$4.99 for the birth plan and converts to A$7.99/month for postnatal tools has an LTV of approximately A$100 in the first year. Under that model, the birth plan is the acquisition cost, not the revenue.</p>
          </div>

          <div className="case-study-section">
            <h2>How it grows</h2>

            <h3>Why paid acquisition doesn't work at A$4.99</h3>
            <p>At A$4.99, paid acquisition on cold traffic is not viable. CPA across Google, Facebook, and Reddit typically meets or exceeds the product price. The growth strategy is organic-first, with four compounding channels:</p>
            <ul>
              <li><strong>SEO content.</strong> A 12-month calendar of 48 articles targeting high-intent Australian birth planning keywords. Six articles are publication-ready. Each answers a real question and funnels readers to the paid questionnaire.</li>
              <li><strong>AI referrals.</strong> ChatGPT already recommends BirthGuide. As AI assistants become the primary research tool for expecting parents, being the product an AI can describe and link to is a compounding distribution advantage.</li>
              <li><strong>Organic sharing.</strong> Every completed birth plan creates a shareable URL. The parent shares it with their partner, midwife, and family. Each share is a product demo.</li>
              <li><strong>Clinical credibility.</strong> A mapped pathway to endorsement through the Australian College of Midwives (CPD accreditation). ACM National Conference in September 2026 is the first engagement target. Midwife trust drives organic recommendations.</li>
            </ul>

            <h3>The competitive position</h3>
            <p>The birth planning space has no category leader. Existing tools fall into three groups: template blogs (static, no personalisation, US-focused), PDF generators (documents with no shareable experience), and pregnancy apps where birth plans are a minor feature buried inside a larger product not designed for the Australian system.</p>
            <p>The likely challenge from Flo or Ovia is real. They have distribution and could add a birth plan feature. The answer is Australian clinical specificity (RANZCOG guidelines, MGP care models, public vs. private hospital pathways), the shareable interactive format as a standalone product rather than a buried feature, and formal midwifery endorsement. Each layer is harder to copy than the technology underneath it.</p>
          </div>

          <div className="case-study-section">
            <h2>What comes next</h2>
            <p>The birth plan is the entry point, not the ceiling. The same product pattern (guided questionnaire, personalised output, shareable with a support team) applies to postnatal recovery, newborn feeding, and infant sleep. Each moment in the parenting journey where people search for structured, personalised guidance can be served by the same design system.</p>
            <p>The near-term priorities are the SEO content calendar (48 articles targeting Australian birth planning keywords), clinical endorsement through the Australian College of Midwives, and the first postnatal product to test whether the questionnaire-to-personalised-output pattern extends beyond birth planning.</p>
            <p>The long-term vision is a lifecycle parenting platform where the birth plan is the acquisition wedge and subscription products carry the revenue. Distribution scales through B2B2C partnerships with private health insurers and hospital networks who offer BirthGuide as a branded service to their maternity members.</p>
          </div>

          <div className="case-study-section">
            <h2>How it was built</h2>
            <p>I am not an engineer. My background is product design and strategy. BirthGuide is built entirely from design specifications I wrote: every feature, every edge case, every instrumentation decision, executed by an AI coding agent (OpenCode) from those specs. Zero external funding. Zero engineering hire. Built alongside a full-time role at GitLab.</p>
            <p>The timeline: February 9, named the product and registered the ABN. February 9–16, wrote the full PRD and researched the visual design direction. February 17, OpenCode built Phase 0 and Phase 1 from the spec. February 18, deployed to Vercel, configured DNS, went live with Stripe payments and email delivery via Resend. Ten days from idea to a product accepting real money.</p>

            <blockquote>The build was 10 days. The first customer took longer, because of an SSR rendering issue killing mobile traffic that only session recordings could surface, and because organic content takes time to compound. Those are two different clocks.</blockquote>

            <p>Every technical decision was a product decision: what to build, what to defer, and how each piece serves the user at the specific moment they need it. The constraint of not being able to write code made every spec more precise, not less.</p>
            <ul>
              <li>Next.js, TypeScript, Tailwind CSS</li>
              <li>Supabase (database and auth), Stripe (payments), Vercel (hosting)</li>
              <li>GA4 with custom event taxonomy, Microsoft Clarity session recording</li>
              <li>Claude API for the on-site conversational assistant</li>
            </ul>

            <div className="notice-box">
              <img src="/images/privacy.svg" alt="Privacy" />
              <div>
                <p><strong>Protecting Data Privacy</strong></p>
                <p>All user data referenced in this case study is from BirthGuide's own product analytics. No individual users are identified beyond what they have consented to share as customers of the product.</p>
              </div>
            </div>
          </div>

          <div className="up-next">
            <h2 className="h2">Up Next</h2>
            <div className="up-next-grid">
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
