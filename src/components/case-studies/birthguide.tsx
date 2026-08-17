import type { ReactNode } from "react";

/**
 * Body of the birthguide case study, without the route chrome.
 *
 * Lives apart from the route so the same content can render inside the work
 * panel on the home page. `breadcrumb` and `tail` are slots the route fills
 * and the panel leaves empty, since neither belongs beside the index.
 */
export function BirthguideContent({
  breadcrumb,
  tail,
}: {
  breadcrumb?: ReactNode;
  tail?: ReactNode;
} = {}) {
  return (
      <section className="section case-study-content">
        <div className="case-study-main">

        {breadcrumb}

          <header className="case-header">
            <h1 className="case-title">I built a birth plan generator. My users were using it to learn.</h1>
            <div className="case-metadata-card">
              <img src="/images/birthguide-hero.svg" alt="The BirthGuide mark: a winding route icon above the wordmark and birthguide.com.au" className="case-hero-image" />
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
                    <p className="metadata-value">Founder, product designer, sole builder</p>
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
            <p className="case-intro">I shipped a birth plan generator in ten days and sold it for six months. Then session recordings and a round of user emails told me the document was not the thing people valued. The teaching wrapped around it was. So I inverted the business model: the learning became the paid product, and the birth plan builder moved to its own site as a free tool. This is the case study of getting the thesis right, then finding a better one underneath it.</p>
          </header>

          <div className="summary-card">
            <h2><img src="/images/bookmark.svg" alt="" width="24" /> Summary</h2>
            <p>BirthGuide is a consumer birth planning product I designed, specified, and shipped alone: live and taking Stripe payments ten days after I named it. The first paying customer confirmed the design thesis, sharing her plan with her birth team and never downloading a PDF. She did not confirm the business thesis. Session recordings, then a round of emails to payers and non-payers alike, said the same thing: the value was the learning, not the document. So I inverted the model in twenty-six days. The teaching became the paid product, and the plan builder moved to its own site as a free tool.</p>
          </div>

          <div className="case-study-section">
            <h2>Part one: the product I shipped first</h2>

            <h3>Templates assume you already know</h3>
            <p>Birth plan templates are written for people who already understand the terminology. Delayed cord clamping. Active management of the third stage. Continuous CTG monitoring. First-time parents meet these terms with no context. The template does not help them decide, it asks them to tick a box next to words they have never seen.</p>
            <p>AI tools can generate a birth plan, but they produce five pages of prose. A midwife scans a birth plan in three to five seconds. Length is not thoroughness, it is noise.</p>
            <p>And paper fails on the day. A printed plan has to be remembered, packed, and produced at the right moment. "Where is our birth plan?" is a real question asked in a real rush.</p>

            <h3>One questionnaire, four outputs</h3>
            <p>The core design decision was to separate the input experience from the output formats. Parents answered one guided questionnaire in under ten minutes, and the system generated four things at once:</p>
            <ul>
              <li><strong>An interactive birth plan page</strong> at a human-readable URL, with tabs for summary, contacts, and hospital bag. Top five priorities surface first. Contact numbers are tap-to-call. The checklist has working checkboxes.</li>
              <li><strong>A partner labour cheat sheet.</strong> One landscape page, large type, scannable in under thirty seconds by a stressed partner under fluorescent lights.</li>
              <li><strong>A full birth plan PDF.</strong> Colour-coded, single page, structured around decision points rather than scenarios.</li>
              <li><strong>A personalised hospital bag checklist.</strong> Built from actual answers. Choose a water birth and it includes swimwear. Choose hypnobirthing and it includes affirmation cards.</li>
            </ul>

            <h3>Designing for the moment of use, not the moment of planning</h3>
            <p>Most birth plan tools are designed for a person at a desk at 32 weeks with time to think. BirthGuide was designed for a labour ward at 2am, a partner fumbling with a phone, and a midwife with thirty seconds. During active labour the birthing parent cannot read their own plan, so the partner becomes the primary reader. That constraint drove every hierarchy decision.</p>

            <video autoPlay loop muted playsInline style={{ width: "100%", maxWidth: "320px", borderRadius: "12px", display: "block", margin: "1.5rem auto 0", background: "#000" }}>
              <source src="/images/birthguide-demo-compressed.mp4" type="video/mp4" />
            </video>
            <p className="img-caption">The interactive birth plan page in use. Top five priorities first, tap-to-call contacts, and a working hospital bag checklist.</p>

            <h3>Repositioning: from kit to page</h3>
            <p>The first version sold a "birth plan kit" with four downloadable outputs listed as equals. Writing the landing copy exposed the problem: the interactive page was the most differentiated output and it was buried as one of four.</p>
            <p>I took the naming pattern from products that had solved this already. Paperless Post calls the digital version "the card" and the printed one "the printable". Linktree is "your Linktree". The interactive version owns the unqualified noun; the static version carries the format qualifier.</p>
            <p>"Kit" came off every surface. The page became "your birth plan". The PDFs became "print versions".</p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", margin: "1.5rem 0" }}>
              <div style={{ background: "var(--panel)", border: "1px solid var(--border)", borderTop: "3px solid #dc2626", padding: "1.25rem" }}>
                <p style={{ fontSize: "0.7rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", color: "#dc2626", marginBottom: "0.75rem" }}>Before</p>
                <p style={{ fontSize: "0.88rem", lineHeight: "1.6", color: "var(--muted)", margin: "0" }}>Get your Birth Plan Kit: 4 outputs including an online birth plan, full PDF, cheat sheet, and hospital bag checklist.</p>
              </div>
              <div style={{ background: "var(--panel)", border: "1px solid var(--border)", borderTop: "3px solid #16a34a", padding: "1.25rem" }}>
                <p style={{ fontSize: "0.7rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", color: "#16a34a", marginBottom: "0.75rem" }}>After</p>
                <p style={{ fontSize: "0.88rem", lineHeight: "1.6", color: "var(--muted)", margin: "0" }}>A birth plan you share. Send your preferences to your midwife and partner in one tap. Print versions included for the hospital bag.</p>
              </div>
            </div>

            <p>That repositioning was correct, and the first customer's behaviour confirmed it. It was also answering a smaller question than the one that mattered.</p>
          </div>

          <div className="case-study-section">
            <h2>Part two: instrumentation instead of a research budget</h2>
            <p>With no budget for formal research and low early traffic, the measurement stack had to do the work usability studies would normally do. I instrumented the funnel before publishing a line of content.</p>
            <p>GA4 carries a custom event taxonomy across every step: questionnaire started, each section completed, abandonment fired on tab visibility change, preview viewed, payment initiated, file downloaded. Each event carries the section name and completion percentage, so a drop-off tells me <em>where</em> people stop, not just <em>that</em> they stopped. If abandonment clusters at section three, the problem is section three.</p>
            <p>Microsoft Clarity records the sessions: heatmaps, scroll depth, rage clicks, dead clicks. The GA4 integration means a funnel drop-off can be traced to the recording of that exact session.</p>
            <p><strong>It earned its keep early.</strong> For weeks after launch, recordings showed mobile visitors staring at a blank white screen for several seconds before bouncing. The cause was a rendering decision: the server was not sending visible HTML until JavaScript had loaded and executed. The fix took minutes. Finding it required watching recordings. In aggregate data it was invisible, just a bounce with no explanation.</p>
            <p>A second, smaller find from the same source: users were abandoning mid-questionnaire by clicking footer links. The footer now stays hidden on the questionnaire and plan routes.</p>
            <p>Both of those are ordinary optimisation. The instrumentation was in place for months before it showed me something I could not fix with a patch.</p>
          </div>

          <div className="case-study-section">
            <h2>Part three: the moment the thesis broke</h2>

            <h3>What the recordings showed</h3>
            <p>Every question in the questionnaire had an optional explainer behind it. A "quick lesson" bottom sheet, and a "did you know" card carrying a cited statistic from AIHW, WHO, or RANZCOG. I had built them as scaffolding, support for the real job of producing a document.</p>
            <p>In the recordings, people were not skimming them. They were opening them, reading, opening the next one. They would work through the whole questionnaire, reach the end, leave an email address to save their plan, and not pay.</p>
            <p>I had a hypothesis, and a hypothesis from watching recordings is still just a hypothesis. So I went and asked.</p>

            <h3>The email round</h3>
            <p>I emailed everyone who had left an address. Not a sample, the whole list, and both sides of it: people who had paid and people who had not. I asked what the questionnaire had been worth to them. The answers converged from both directions.</p>
            <p><strong>Both groups said the same thing.</strong> The value was the learning, not the document. Payment was the only difference between the two groups, which is what told me this was a business model problem and not a pricing problem. If converters had valued the artefact and non-converters had not, that is a price test. When both groups tell you the paid thing is not the valuable thing, the model is wrong.</p>
            <p><strong>Non-converters wanted more learning, not a better document.</strong> They were not asking for more outputs or a cheaper plan. They wanted more of the thing I was giving away.</p>
            <p><strong>And they had already taken it.</strong> By the time they reached the paywall, they had understood their options. That was what they came for. There was nothing left to buy.</p>

            <h3>The corroboration I had been ignoring</h3>
            <p>Once I saw it, the codebase had been telling me for months.</p>
            <p>When I specced the program, I counted the teaching material that already existed inside the birth plan tool: 75 help sheets, 15 cited fact cards, 11 published guide articles, roughly 22,000 words. The program needed about 14,000 words of lesson bodies. <strong>Sixty to seventy per cent of it was adapted from copy that was already there.</strong></p>
            <p>I had not decided to build a course. I had built a form, and then spent five months writing teaching material to make the form usable, until the teaching was the larger part of the product. The users were reading the course. I was selling them the receipt.</p>

            <h3>The conclusion</h3>
            <p>The model I had been running was, in my own notes, <em>learning free, artifact paid</em>. The research said the value sat entirely on the free side of that line. My paywall and my value proposition were on opposite sides of the product.</p>
          </div>

          <div className="case-study-section">
            <h2>Part four: inverting the model</h2>
            <p>On 19 July I locked the decision:</p>

            <blockquote>The program is the product and the paywall gates the learning. This supersedes the previous standing model (learning free, artifact paid).</blockquote>

            <p>The questionnaire became an eight-module program. Every lesson runs the same three beats: <strong>learn</strong>, 250 to 400 words of cited teaching; <strong>decide</strong>, the existing question screen, unchanged; <strong>reflect</strong>, a note for the midwife. The plan assembles as you learn. Around 70 to 100 minutes end to end, taken over weeks, in two to three minute pieces.</p>
            <p>The program is pathway-aware. Thirty-one lessons for a standard vaginal birth, thirty-three for a VBAC, twenty-two for a planned caesarean. The caesarean track swaps modules rather than hiding them, and a planned-caesarean parent who wants the vaginal preferences as a backup unlocks two more modules mid-flow.</p>
            <p>Module one is free. The paywall sits immediately after it, and the email capture sits immediately before the paywall, because the people who do not convert are only worth something if I still hold their email and their due date.</p>

            <h3>Why I did not delete the old product</h3>
            <p>The plan builder was not broken. It worked, people finished it, and one thing the research made clear is that some parents genuinely do just want the document. They know what they want and need it written down.</p>
            <p>So the old model moved rather than died. <strong>birthplans.app</strong> is now a separate product: a free basic plan builder, global, priced in USD, and the destination for the calls to action inside the guide articles and calculator tools. It carries the model BirthGuide gave up. It also protects a channel: birth educators and doulas are a distribution route I am building, and a standing constraint is that their own paid offerings are never undercut by mine. That channel is served by the free tool on its own pricing, not by the program.</p>
            <p>Two decisions inside that split are worth naming, because both were tempting to get wrong.</p>
            <p><strong>The four outputs did not move.</strong> The program still builds the birth plan, the cheat sheet, the hospital bag checklist, and the shareable page. That output set is part of what A$69 buys. There is a comment in the landing page source that exists purely to stop future me from being clever about it: birthplans.app produces the birth plan and nothing else, and the other three must never be promised on that side of the page.</p>
            <p><strong>I had to stop making the free option sound better than the paid one.</strong> An early version of the new landing page offered "learn the choices before you face them, or go straight to writing the plan", which presented a A$69 program and a free tool as equal options and then made the free one sound faster, in the most prominent paragraph on the site. I rewrote it. The two offerings now sit in one comparison, honestly:</p>

            <div className="case-table-scroll">
              <table className="case-table">
                <thead>
                  <tr>
                    <td />
                    <th scope="col">The program</th>
                    <th scope="col">Birth plan builder</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">For</th>
                    <td data-col="The program">You want to understand each choice before you make it</td>
                    <td data-col="Birth plan builder">You know what you want and need it written down</td>
                  </tr>
                  <tr>
                    <th scope="row">How</th>
                    <td data-col="The program">Learn, decide, reflect. One lesson at a time</td>
                    <td data-col="Birth plan builder">Tap through your choices</td>
                  </tr>
                  <tr>
                    <th scope="row">Time</th>
                    <td data-col="The program">Around 70 to 100 minutes, spread over weeks</td>
                    <td data-col="Birth plan builder">About four minutes</td>
                  </tr>
                  <tr>
                    <th scope="row">Price</th>
                    <td data-col="The program">A$69. Module one is free</td>
                    <td data-col="Birth plan builder">Free for a basic plan</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="case-study-section">
            <h2>Part five: executing the pivot in twenty-six days</h2>
            <p>19 July, spec written. 20 July, first program code. 25 July, entitlements, checkout, and paywall in a single day. 30 July, the birthplans.app split ships. 3 to 4 August, all 41 lessons transcribed. 8 August, "course" renamed "program". 13 August, full clinical review and go-live. 14 August, the questionnaire redirected and the legacy landing page deleted. 16 August, the old route and its paywall deleted outright, a net removal of 660 lines.</p>
            <p>Two decisions from that stretch that a design leader would want to interrogate.</p>

            <h3>One gate, ever</h3>
            <p>The old product charged at the document. The new one charges once, before module two, and never again. There is no second charge at review or download. A paid program that charged again for the documents would poison the trust claim the whole thing rests on.</p>

            <h3>Retiring the old product without breaking the people using it</h3>
            <p>The obvious move was to redirect <code>/questionnaire</code> to <code>/program</code> and be done. That would have bounced every paying user out of the review screen they had just paid for, because the program still finished on the old route.</p>
            <p>So it went in three steps. Give the program its own completion screen. Then redirect. Then, two days later, once nothing had been reachable for a month, delete the route and its paywall. The legacy checkout endpoints are still there, untouched, because retiring live payment infrastructure is its own decision and not a side effect of a cleanup.</p>
          </div>

          <div className="case-study-section">
            <h2>Part six: two things I got wrong</h2>
            <p>A pivot executed in twenty-six days, with an AI agent writing the code and a lot of content moving fast, produces mistakes. Two of them are worth showing, because the interesting part is not the error, it is what caught it.</p>
            <p><strong>A fabricated statistic with a real citation.</strong> One lesson claimed that around a third of caesareans take more than two hours from decision to theatre, attributed to AIHW Mothers and Babies 2023. AIHW does not publish decision-to-delivery intervals. The number could not be sourced and is clinically implausible. It was a fabricated figure wearing a real-looking citation, which is the worst failure mode in the set, because it survives every check that is not a domain expert reading the sentence. The clinical review caught it. Nothing else would have.</p>
            <p><strong>A statistic that was already going out to customers.</strong> I had a "locked framing" rule that the overall Australian caesarean rate should be stated one way everywhere. Auditing it, I found I had been treating three different statistics as one number: the overall rate, the public hospital rate, and the private rate, with different denominators. They do not unify. Worse, one of the superseded figures was live in an automated email sequence and had already gone to real customers.</p>
            <p>The response to both was structural rather than editorial. There is now a content check wired into the build that fails on em dashes, American spellings, uncited statistic callouts, and drift from the locked statistical framings. Content is not a thing you review once. Content that makes a claim about someone's medical care is not a thing you review at all if you cannot re-check it on every commit.</p>
          </div>

          <div className="case-study-section">
            <h2>What I would defend, and what I do not know yet</h2>
            <p><strong>What I would defend.</strong> The research method: observe in recordings, then go and ask, and ask the people who paid as well as the people who did not. If I had only asked non-converters I would have run a price test and shipped a discount. The finding only became a pivot because converters said the same thing.</p>
            <p>I would also defend relocating the old model rather than killing it. It works. It just could not be the business.</p>
            <p><strong>What I do not know yet.</strong> Whether Australian parents will pay A$69 for text-based birth education from a brand with no clinical institution behind it. The program went live on 13 August 2026. It has not made its first sale. I have a validated understanding of what people value and no evidence yet that they will pay for it in this form.</p>
            <p><strong>What would tell me I am wrong.</strong> If module one completes at a healthy rate and the paywall converts near zero, then people value the learning and not enough to pay, and the answer is a different monetisation model rather than a better program. If people do not finish module one, the format is wrong, not the thesis. Those two failures look identical in a revenue chart and completely different in the funnel, which is why the instrumentation went in first.</p>
          </div>

          <div className="case-study-section">
            <h2>How it was built</h2>
            <p>I have been designing and building for the web since 2005, starting with table layouts. I am not an engineer by trade, and I write specifications rather than production code. BirthGuide was built from design specifications I wrote, executed by an AI coding agent, first OpenCode and later Claude Code. Zero funding, no engineering hire, built alongside a full-time role.</p>
            <p>The design system is the part that made the pace survivable. Colour, spacing, and type live as tokens, an ESLint rule fails the build on any raw hex value, and a snapshot script proves that a token refactor changed nothing on screen. Dark mode was close to free because of it. The system lives in the agent's rules file, so it builds to the system by default instead of guessing.</p>
            <ul>
              <li>Next.js 16, React 19, TypeScript, Tailwind CSS v4</li>
              <li>Supabase, Stripe, Resend, Vercel</li>
              <li>GA4 with a custom event taxonomy, Microsoft Clarity session recording</li>
              <li>Gemini via Google AI Studio for the on-site chat assistant</li>
              <li>Storybook for the design system, with snapshot-based visual verification</li>
            </ul>
            <p>I have written the process up separately, on how I actually work with an AI agent, what stays mine, and where the craft still has to come from a person: <a href="/writing/building-birthguide-with-ai">Building BirthGuide as a solo designer using AI</a>.</p>
          </div>

        {tail}

        </div>
      </section>
  );
}
