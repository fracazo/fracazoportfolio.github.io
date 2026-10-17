import type { ReactNode } from "react";
import { CaseStudyLayout } from "@/components/case-study-layout";
import { HomeAffairsCrest } from "@/components/scene-marks";
import { AwardBadge } from "@/components/award-badge";
import { ExternalLinkIcon } from "@/components/icons";

/**
 * Body of the eta-app case study, without the route chrome.
 *
 * Lives apart from the route so the same content can render inside the work
 * panel on the home page. `breadcrumb` is a slot the route fills and the
 * panel leaves empty, since it doesn't belong beside the index.
 */
export function EtaAppContent({
  breadcrumb,
}: {
  breadcrumb?: ReactNode;
} = {}) {
  return (
    <CaseStudyLayout
      icon={<HomeAffairsCrest />}
      title="Electronic Travel Authority"
      subtitle="Replacing a visa form with a passport scan"
      meta={[
        { label: "Role", value: "Lead Product Designer" },
        { label: "Project type", value: "Zero to one" },
        { label: "Platform", value: ["iOS", "Android"] },
      ]}
      chapters={[
        { id: "eta-context", label: "Context" },
        { id: "eta-typing", label: "The typing was the problem" },
        { id: "eta-legal", label: "Five legal screens to one" },
        { id: "eta-words", label: "Words over layouts" },
        { id: "eta-sdk", label: "Where the SDK won" },
        { id: "eta-fonts", label: "Native fonts" },
        { id: "eta-steps", label: "Six steps" },
        { id: "eta-award", label: "Gold award" },
      ]}
      hero={
        <img src="/images/62dc274f132cbe543717e126_work1-p-2000.jpg" width={2000} height={1085} alt="A face outline being scanned, with the Australian Government Department of Home Affairs crest" />
      }
    >
      <section className="section case-study-content">
        <div className="case-study-main">
        {breadcrumb}

          <p className="cs-intro">Travellers to Australia typed their passport details into a long web form, and every typo caused trouble at the border. We built an app that reads the passport chip instead.</p>
          <AwardBadge
            title="Sydney Design Awards"
            detail="Gold · Government Services"
            href="https://betterfutureawards.com/syd21/project.asp?ID=22007"
          />

        <div className="case-study-section">
          <h2 id="eta-context">Context</h2>
          <p>An ETA is Australia&rsquo;s e-visa for short tourist and business trips. Approval could take a week or two months.</p>
          <p>Australia expected visitor numbers to grow from about 9 million a year toward 14 million within a decade. Every typo and every slow approval would grow with them. That is why Home Affairs started this work.</p>
          <p>I was the lead product designer at Arq Group. We worked with the Department of Home Affairs and SITA, the company behind the border systems.</p>

          <h2 id="eta-typing">The form wasn&rsquo;t the problem. The typing was.</h2>
          <p>I spent time with Home Affairs and SITA staff and went through a year of their processing data. The mistakes came from people typing passport details by hand. Every mismatch meant staff chasing airlines and gates to fix it.</p>
          <p>The passport already held all of that data on its chip. So the question changed. Why ask people to type what their phone can read?</p>
          <p>The app became six steps. Photograph the passport, scan the chip with NFC, take a selfie, check the details, pay and submit.</p>
          <img src="/images/62ca9d1c707bc54c532d4461_NFC-Scan.png" alt="NFC passport scan screens" />

          <h2 id="eta-legal">Five legal screens became one</h2>
          <p>Collecting someone&rsquo;s face and passport data comes with a lot of legal text. The first version had five consent steps, and each one asked people to read, tick and agree.</p>
          <p>We tested with eight people. Some hesitated at the terms before they had even started.</p>
          <p>I ran workshops with the legal team to show why this mattered. Together we removed the checkboxes and merged every agreement into one page.</p>
          <img src="/images/62ca744f6e94d7bd98361a9b_Iterations.png" alt="Onboarding iterations" />
          <img src="/images/62ca9fbbb362d10f340a0a49_iPhone-8---TC.png" alt="Single agreement page" className="img-xs" />
          <p className="img-caption">Five steps, merged into one page.</p>

          <h2 id="eta-words">Words fixed more than layouts did</h2>
          <p>Testing showed that most problems could be fixed by changing the words. So I treated copy as part of the interface.</p>
          <p>Every screen went through rounds of review, down to how titles were capitalised.</p>
          <img src="/images/62ca526de691b2001b6b472a_Screen-Shot-2022-07-10-at-2.15.21-pm.png" alt="User testing results" className="img-small" />

          <h2 id="eta-sdk">Where I let the SDK win</h2>
          <p>The passport capture ran on an SDK from an outside vendor. It got us to launch faster, but its camera screen came as it was. People couldn&rsquo;t lock the focus or turn the phone, and a failed scan gave no clear message.</p>
          <p>I couldn&rsquo;t change the screen, so I changed the words around it. We rewrote the instructions many times until people got the scan right.</p>
          <img src="/images/62caab5eca69f313a9a5b8c5_SDK-Contraints.png" alt="SDK constraints on the passport capture screen" />

          <h2 id="eta-fonts">Native fonts over brand fonts</h2>
          <p>People of every age and culture would use this app. It had to feel native to their phone and easy to use.</p>
          <p>The brand asked for Helvetica Neue. I used each phone&rsquo;s system font instead, so screens loaded fast and felt familiar.</p>
          <p>The colours stayed with the Home Affairs brand, so the app looked like the government service people already knew. That matters when you&rsquo;re asking for someone&rsquo;s passport.</p>
          <img src="/images/62ca98319e6ac4a404da4d49_Screen-Shot-2022-07-10-at-7.13.01-pm.png" alt="Type and colour details" className="img-small" />

          <h2 id="eta-steps">Six steps, on iOS and Android</h2>
          <img src="/images/62caa63e33c6504c2ebe850c_Android--iPhone.png" alt="The ETA app on Android and iPhone" />
          <p>I worked alongside the engineers through the build. A government app should behave the way people expect, so I kept the flow standard.</p>
          <p>The personality went into loading states and feedback animations, where it couldn&rsquo;t cost clarity.</p>
          <img src="/images/62c94c07a33caa58679afdc3_NFC-Entrant.gif" alt="NFC scan animation" className="img-small" />
          <img src="/images/62ca9af337b2819503bdf0e1_Dashboards.png" alt="Dashboards" />
          <img src="/images/62caac8537b28197abbe90b9_Live-Photo-Capture.png" alt="Live photo capture" />
          <img src="/images/62cab1cd6e94d7a4ab3881ba_Confirm-info.png" alt="Confirm details" />
          <img src="/images/62cab1e2707bc5d01d2e6328_Payment.png" alt="Payment" />
          <img src="/images/62cab1f7ca69f3a06ca60419_Submission.webp" alt="Submission" />

          <h2 id="eta-award">Gold at the Sydney Design Awards</h2>
          <p>The app won Gold in Government Services. The award went to the joint team from Home Affairs, SITA and Arq Group.</p>
          <ul>
            <li><a href="https://betterfutureawards.com/syd21/project.asp?ID=22007" target="_blank" rel="noopener">The award listing<ExternalLinkIcon size={12} className="external-mark" /></a>, betterfutureawards.com</li>
          </ul>

          <h2 id="eta-learned">What I took from it</h2>
          <p>Bring legal into the room early. Once they saw where people struggled, they helped us cut five steps down to one.</p>
          <p>And when a vendor&rsquo;s screen can&rsquo;t change, the words around it still can.</p>

        </div>

        </div>
      </section>
    </CaseStudyLayout>
  );
}
