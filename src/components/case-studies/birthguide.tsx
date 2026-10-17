import type { ReactNode } from "react";
import { CaseStudyLayout } from "@/components/case-study-layout";
import { BirthGuideAppIcon } from "@/components/scene-marks";

/**
 * Body of the birthguide case study, without the route chrome.
 *
 * Lives apart from the route so the same content can render inside the work
 * panel on the home page. `breadcrumb` is a slot the route fills and the
 * panel leaves empty, since it doesn't belong beside the index.
 */
export function BirthguideContent({
  breadcrumb,
}: {
  breadcrumb?: ReactNode;
} = {}) {
  return (
    <CaseStudyLayout
      icon={<BirthGuideAppIcon />}
      title="BirthGuide"
      subtitle="Making the learning the product"
      meta={[
        { label: "Role", value: ["Founder", "Product designer", "Sole builder"] },
        { label: "Project type", value: "Zero to one" },
        { label: "Platform", value: ["Web", "Mobile-first"] },
      ]}
      stats={[
        { value: "10 days", label: "to ship the first version" },
        { value: "26 days", label: "from deciding to invert the model to the new product going live" },
      ]}
      chapters={[
        { id: "bg-first", label: "The first product" },
        { id: "bg-instrument", label: "Instruments, not a budget" },
        { id: "bg-thesis", label: "The thesis broke" },
        { id: "bg-inversion", label: "Inverting the model" },
        { id: "bg-pivot", label: "Twenty-six days" },
        { id: "bg-wrong", label: "Two things I got wrong" },
        { id: "bg-unknown", label: "What I don\u2019t know yet" },
      ]}
      link={{ href: "https://www.birthguide.com.au", label: "birthguide.com.au" }}
      hero={
        <img src="/images/birthguide-two-paths.webp" width={2000} height={1090} alt="The BirthGuide landing page after the inversion: two cards side by side, The program marked Start here with an Explore the program free button, and Birth plan with a Go to birthplans.app button" />
      }
    >
      <section className="section case-study-content">
        <div className="case-study-main">

        {breadcrumb}

          <p className="cs-intro">I shipped a birth plan generator in ten days and sold it for six months. Then session recordings, and emails to the people who paid and the people who didn&rsquo;t, told me the document wasn&rsquo;t what they valued. The teaching around it was. So I inverted the business model: the learning became the paid product, and the birth plan builder moved to its own site as a free tool.</p>

          <div className="case-study-section">
            <h2 id="bg-first">The first product</h2>
            <p>Birth plan templates are written for people who already understand the terminology: delayed cord clamping, active management of the third stage, continuous CTG monitoring. First-time parents meet these words with no context and are asked to tick boxes next to them. AI tools go the other way and write five pages of prose, when a midwife scans a birth plan in three to five seconds.</p>
            <p>So I split the input from the outputs. Parents answered one guided questionnaire in under ten minutes and got four things at once: an interactive birth plan page, a one-page cheat sheet for their partner, a full PDF, and a hospital bag checklist built from their actual answers. Choose a water birth and it adds swimwear.</p>
            <p>I designed it for the moment of use, not the moment of planning: a labour ward at 2am, a partner fumbling with a phone, a midwife with thirty seconds. During active labour the birthing parent can&rsquo;t read their own plan, so the partner becomes the main reader, and that drove every hierarchy decision.</p>
            <iframe
              src="https://www.birthguide.com.au/plan/your-name"
              title="Example BirthGuide birth plan, live"
              loading="lazy"
              style={{ width: "100%", maxWidth: "375px", height: "720px", border: "1px solid var(--border)", borderRadius: "12px", display: "block", margin: "1.5rem auto 24px", background: "#000" }}
            />
            <p className="img-caption">The example birth plan, live. Top five priorities first, tap-to-call contacts, and a working hospital bag checklist. <a href="https://www.birthguide.com.au/plan/your-name" target="_blank" rel="noopener noreferrer">Open it full screen</a>.</p>
            <p>Writing the landing copy exposed one more problem. I was selling a &ldquo;birth plan kit&rdquo; with four outputs listed as equals, and the most distinctive one, the interactive page, was buried as one of four. &ldquo;Kit&rdquo; came off every surface: the page became &ldquo;your birth plan&rdquo; and the PDFs became &ldquo;print versions&rdquo;. That was the right call, and it was still answering a smaller question than the one that mattered.</p>
          </div>

          <div className="case-study-section">
            <h2 id="bg-instrument">Instruments instead of a research budget</h2>
            <p>With no research budget and little early traffic, measurement had to do the work of usability studies, so I instrumented the funnel before publishing anything. GA4 tracks every step of the questionnaire with the section and completion percentage, so a drop-off shows <em>where</em> people stop, not just <em>that</em> they stop. Microsoft Clarity records the sessions, and the two are linked, so a drop-off leads straight to the recording of that session.</p>
            <p>It paid off early. Recordings showed mobile visitors staring at a blank screen for several seconds before leaving, because the server sent no visible HTML until JavaScript had run. The fix took minutes; finding it took watching recordings, because in the numbers it was just an unexplained bounce. That kind of find is ordinary optimisation. The instrumentation ran for months before it showed me something no patch could fix.</p>
          </div>

          <div className="case-study-section">
            <h2 id="bg-thesis">The moment the thesis broke</h2>
            <p>Every question had an optional explainer behind it: a short lesson, and a card with a cited statistic from AIHW, WHO or RANZCOG. I had built them as support for the real job of producing a document. In the recordings, people weren&rsquo;t skimming them. They opened one, read it, opened the next. They worked through the whole questionnaire, left an email address to save their plan, and didn&rsquo;t pay.</p>
            <p>A pattern in recordings is still only a hypothesis, so I asked. I emailed everyone who had left an address, both the people who had paid and the people who hadn&rsquo;t, and asked what the questionnaire had been worth to them.</p>
            <p><strong>Both groups said the same thing: the value was the learning, not the document.</strong> That is what made it a business model problem rather than a pricing one. If payers had valued the document and non-payers hadn&rsquo;t, that&rsquo;s a price test. When both groups say the paid thing isn&rsquo;t the valuable thing, the model is wrong. Non-payers didn&rsquo;t want a cheaper plan either. They wanted more of what I was giving away, and by the paywall they had already taken it.</p>
            <p>The codebase had been saying the same for months. The tool already held 75 help sheets, 15 cited fact cards and 11 guide articles, about 22,000 words. A full program needed about 14,000 words of lessons, and 60 to 70 per cent of it could be adapted from what was there. I had built a form, then spent five months writing teaching to make it usable, until the teaching was the bigger part of the product. My own notes described the model as <em>learning free, artifact paid</em>. The paywall and the value sat on opposite sides of the product.</p>
          </div>

          <div className="case-study-section">
            <h2 id="bg-inversion">Inverting the model</h2>
            <blockquote>The program is the product and the paywall gates the learning. This supersedes the previous standing model (learning free, artifact paid).</blockquote>
            <p>The questionnaire became an eight-module program. Every lesson has the same three beats: <strong>learn</strong>, a short piece of cited teaching; <strong>decide</strong>, the existing question, unchanged; <strong>reflect</strong>, a note for the midwife. The plan builds itself as you learn, in two to three minute pieces over weeks. The program follows the birth pathway too: different lessons for a vaginal birth, a VBAC or a planned caesarean.</p>
            <p>Module one is free. The paywall sits straight after it, and the email capture straight before the paywall, because people who don&rsquo;t pay are only worth something if I still have their email and due date.</p>
            <p>I didn&rsquo;t delete the old product. It worked, and the emails made clear that some parents really do just want the document. So it moved: <strong>birthplans.app</strong> is now a separate, free plan builder, priced globally and linked from the guides and tools. It also protects a channel I&rsquo;m building with birth educators and doulas, whose own paid offerings mine must never undercut.</p>
            <p>The hardest part was not making the free option sound better than the paid one. An early landing page offered &ldquo;learn the choices before you face them, or go straight to writing the plan&rdquo;: a A$69 program and a free tool as equals, with the free one sounding faster, in the most prominent paragraph on the site. I rewrote it as one honest comparison.</p>
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
            <h2 id="bg-pivot">Executing the pivot in twenty-six days</h2>
            <p>From the written spec to go-live took twenty-six days: the program, checkout and paywall, the birthplans.app split, 41 lessons, a full clinical review, and finally deleting the old route and its paywall.</p>
            <p><strong>One gate, ever.</strong> The old product charged for the document. The new one charges once, before module two, and never again. Charging a second time for the documents would undo the trust the whole program rests on.</p>
            <p><strong>Retiring the old product without stranding anyone.</strong> Redirecting the old questionnaire to the program would have bounced paying users out of the review screen they had just paid for. So it went in three steps: give the program its own completion screen, then redirect, then delete the old route once nothing could reach it. The old checkout endpoints stayed, because retiring live payment infrastructure is its own decision, not a side effect of a clean-up.</p>
          </div>

          <div className="case-study-section">
            <h2 id="bg-wrong">Two things I got wrong</h2>
            <p>A fast pivot, with an AI agent writing the code and a lot of content moving at once, produces mistakes. What matters is what caught them.</p>
            <p><strong>A made-up statistic with a real citation.</strong> One lesson said about a third of caesareans take more than two hours from decision to theatre, citing AIHW. AIHW doesn&rsquo;t publish that measure, and the number is clinically implausible. It survives every check except a domain expert reading the sentence, and the clinical review caught it.</p>
            <p><strong>Three statistics treated as one.</strong> Auditing my own rule for how to state the Australian caesarean rate, I found I&rsquo;d merged three figures with different denominators: overall, public hospitals and private. One of the outdated figures had already gone out to customers in an automated email.</p>
            <p>The fix for both was structural. A content check now runs on every build and fails on uncited statistics and on drift from the agreed wording. Content that makes claims about someone&rsquo;s medical care can&rsquo;t be reviewed once. It has to be re-checked on every change.</p>
          </div>

          <div className="case-study-section">
            <h2 id="bg-unknown">What I don&rsquo;t know yet</h2>
            <p>I&rsquo;d defend the method: watch the recordings, then ask, and ask the people who paid as well as the people who didn&rsquo;t. Asking only non-payers would have led to a price test and a discount. The finding became a pivot because the payers said the same thing.</p>
            <p>What I don&rsquo;t know yet is whether Australian parents will pay A$69 for written birth education from a brand without a clinical institution behind it. The program hasn&rsquo;t made its first sale. If module one completes well and the paywall converts near zero, people value the learning but not enough to pay, and the answer is a different way to charge. If people don&rsquo;t finish module one, the format is wrong, not the thesis. Those two failures look the same in a revenue chart and completely different in the funnel, which is why the instrumentation went in first.</p>
          </div>

          <div className="case-study-section">
            <h2>How it was built</h2>
            <p>I wrote the specifications and an AI coding agent, first OpenCode and later Claude Code, wrote the code. No funding, no engineering hire, built alongside a full-time role, on Next.js, Supabase and Stripe. The design system made the pace survivable: colour, spacing and type are tokens, the build fails on any raw colour value, and the rules live in the agent&rsquo;s instructions so it builds to the system by default. More in <a href="/writing/building-birthguide-with-ai">Building BirthGuide as a solo designer using AI</a>.</p>
          </div>

        </div>
      </section>
    </CaseStudyLayout>
  );
}
