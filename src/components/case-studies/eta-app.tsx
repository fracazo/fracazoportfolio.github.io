import type { ReactNode } from "react";
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
      <section className="section case-study-content">
        <div className="case-study-main">
        {breadcrumb}
        <header className="case-header">
          <h1 className="case-title">Replacing a visa form with a passport scan</h1>
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
            </div>
          </div>
          <p className="case-intro">Travellers to Australia typed their passport details into a long web form, and every typo caused trouble at the border. We built an app that reads the passport chip instead.</p>
          <AwardBadge
            title="Sydney Design Awards"
            detail="Gold 2021 · Government Services"
            href="https://betterfutureawards.com/syd21/project.asp?ID=22007"
          />
        </header>


        <div className="case-study-section">
          <h2>Context</h2>
          <p>An ETA is Australia&rsquo;s e-visa for short tourist and business trips. Approval could take a week or two months.</p>
          <p>I was the lead product designer at Arq Group. We worked with the Department of Home Affairs and SITA, the company behind the border systems.</p>
          <img src="/images/62c93ec16128094ec8c19b4b_Screen-Shot-2022-07-09-at-6.39.18-pm.png" alt="The old ETA web form" />
          <p className="img-caption">The old web form. Every field typed by hand.</p>

          <h2>The form wasn&rsquo;t the problem. The typing was.</h2>
          <p>I spent time with Home Affairs and SITA staff and went through a year of their processing data. The mistakes came from people typing passport details by hand. Every mismatch meant staff chasing airlines and gates to fix it.</p>
          <p>The passport already held all of that data on its chip. So the question changed. Why ask people to type what their phone can read?</p>
          <p>The app became six steps. Photograph the passport, scan the chip with NFC, take a selfie, check the details, pay and submit.</p>
          <img src="/images/62ca9d1c707bc54c532d4461_NFC-Scan.png" alt="NFC passport scan screens" />

          <h2>Five legal screens became one</h2>
          <p>Collecting someone&rsquo;s face and passport data comes with a lot of legal text. The first version had five consent steps, and each one asked people to read, tick and agree.</p>
          <p>We tested with eight people. Some hesitated at the terms before they had even started.</p>
          <p>I ran workshops with the legal team to show why this mattered. Together we removed the checkboxes and merged every agreement into one page.</p>
          <img src="/images/62ca744f6e94d7bd98361a9b_Iterations.png" alt="Onboarding iterations" />
          <img src="/images/62ca9fbbb362d10f340a0a49_iPhone-8---TC.png" alt="Single agreement page" className="img-xs" />
          <p className="img-caption">Five steps, merged into one page.</p>

          <h2>Words fixed more than layouts did</h2>
          <p>Testing showed that most problems could be fixed by changing the words. So I treated copy as part of the interface.</p>
          <p>Every screen went through rounds of review, down to how titles were capitalised.</p>
          <img src="/images/62ca526de691b2001b6b472a_Screen-Shot-2022-07-10-at-2.15.21-pm.png" alt="User testing results" className="img-small" />

          <h2>Where I let the SDK win</h2>
          <p>The passport capture ran on an SDK from an outside vendor. It got us to launch faster, but its camera screen came as it was. People couldn&rsquo;t lock the focus or turn the phone, and a failed scan gave no clear message.</p>
          <p>I couldn&rsquo;t change the screen, so I changed the words around it. We rewrote the instructions many times until people got the scan right.</p>
          <img src="/images/62caab5eca69f313a9a5b8c5_SDK-Contraints.png" alt="SDK constraints on the passport capture screen" />

          <h2>Native fonts over brand fonts</h2>
          <p>People of every age and culture would use this app. It had to feel native to their phone and easy to use.</p>
          <p>The brand asked for Helvetica Neue. I used each phone&rsquo;s system font instead, so screens loaded fast and felt familiar.</p>
          <p>The colours stayed with the Home Affairs brand, so the app looked like the government service people already knew. That matters when you&rsquo;re asking for someone&rsquo;s passport.</p>
          <img src="/images/62ca98319e6ac4a404da4d49_Screen-Shot-2022-07-10-at-7.13.01-pm.png" alt="Type and colour details" className="img-small" />

          <h2>Six steps, on iOS and Android</h2>
          <img src="/images/62caa63e33c6504c2ebe850c_Android--iPhone.png" alt="The ETA app on Android and iPhone" />
          <p>I worked alongside the engineers through the build. A government app should behave the way people expect, so I kept the flow standard.</p>
          <p>The personality went into loading states and feedback animations, where it couldn&rsquo;t cost clarity.</p>
          <img src="/images/62c94c07a33caa58679afdc3_NFC-Entrant.gif" alt="NFC scan animation" className="img-small" />
          <img src="/images/62ca9af337b2819503bdf0e1_Dashboards.png" alt="Dashboards" />
          <img src="/images/62caac8537b28197abbe90b9_Live-Photo-Capture.png" alt="Live photo capture" />
          <img src="/images/62cab1cd6e94d7a4ab3881ba_Confirm-info.png" alt="Confirm details" />
          <img src="/images/62cab1e2707bc5d01d2e6328_Payment.png" alt="Payment" />
          <img src="/images/62cab1f7ca69f3a06ca60419_Submission.webp" alt="Submission" />

          <h2>Gold at the Sydney Design Awards</h2>
          <p>The app won Gold in Government Services in 2021. The award went to the joint team from Home Affairs, SITA and Arq Group.</p>
          <ul>
            <li><a href="https://betterfutureawards.com/syd21/project.asp?ID=22007" target="_blank" rel="noopener">The award listing<ExternalLinkIcon size={12} className="external-mark" /></a>, betterfutureawards.com</li>
          </ul>

          <h2>What I took from it</h2>
          <p>Bring legal into the room early. Once they saw where people struggled, they helped us cut five steps down to one.</p>
          <p>And when a vendor&rsquo;s screen can&rsquo;t change, the words around it still can.</p>

        </div>

        </div>
      </section>
  );
}
