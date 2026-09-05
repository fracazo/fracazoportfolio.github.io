import type { ReactNode } from "react";
import { MymixBuilder } from "./mymix-builder";

/**
 * Body of the Vodafone MyMix case study, without the route chrome.
 *
 * Same split as the other studies: the route supplies the breadcrumb,
 * the panel renders the body alone. Facts come from the original 2015-16
 * project artefacts (workshop capture, testing decks, journey PDFs, both
 * prototypes), not from memory.
 */
export function VodafoneMymixContent({
  breadcrumb,
}: {
  breadcrumb?: ReactNode;
} = {}) {
  return (
    <section className="section case-study-content">
      <div className="case-study-main">
        {breadcrumb}
        <header className="case-header">
          <h1 className="case-title">
            Letting Prepaid Customers Design Their Own Recharge
          </h1>
          <div className="case-metadata-card">
            <img
              src="/images/vodafone/mymix-hero-phone.webp"
              alt="The MyMix recharge builder with all four inclusions selected and a $40 price"
              className="case-hero-image"
            />
            <div className="metadata-content">
              <div className="metadata-item">
                <svg className="metadata-icon" width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M6 3.75A2.75 2.75 0 0 1 8.75 1h2.5A2.75 2.75 0 0 1 14 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 0 1 6 4.193V3.75Zm6.5 0v.325a41.622 41.622 0 0 0-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25ZM10 10a1 1 0 0 0-1 1v.01a1 1 0 0 0 1 1h.01a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1H10Z" clipRule="evenodd"/><path d="M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 0 1-9.274 0C3.985 17.585 3 16.402 3 15.055Z"/></svg>
                <div className="metadata-text">
                  <p className="metadata-label">Product</p>
                  <p className="metadata-value">Vodafone MyMix</p>
                </div>
              </div>
              <div className="metadata-item">
                <svg className="metadata-icon" width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M2 4.25A2.25 2.25 0 0 1 4.25 2h11.5A2.25 2.25 0 0 1 18 4.25v8.5A2.25 2.25 0 0 1 15.75 15h-3.105a3.501 3.501 0 0 0 1.1 1.677A.75.75 0 0 1 13.26 18H6.74a.75.75 0 0 1-.484-1.323A3.501 3.501 0 0 0 7.355 15H4.25A2.25 2.25 0 0 1 2 12.75v-8.5Zm1.5 0a.75.75 0 0 1 .75-.75h11.5a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75H4.25a.75.75 0 0 1-.75-.75v-7.5Z" clipRule="evenodd"/></svg>
                <div className="metadata-text">
                  <p className="metadata-label">Platform</p>
                  <p className="metadata-value">Web and MyVodafone app</p>
                </div>
              </div>
              <div className="metadata-item">
                <svg className="metadata-icon" width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z"/></svg>
                <div className="metadata-text">
                  <p className="metadata-label">Role</p>
                  <p className="metadata-value">Senior UX Designer</p>
                </div>
              </div>
              <div className="metadata-item">
                <svg className="metadata-icon" width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M5.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4h.25A2.75 2.75 0 0 1 18 6.75v8.5A2.75 2.75 0 0 1 15.25 18H4.75A2.75 2.75 0 0 1 2 15.25v-8.5A2.75 2.75 0 0 1 4.75 4H5V2.75A.75.75 0 0 1 5.75 2Zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75Z" clipRule="evenodd"/></svg>
                <div className="metadata-text">
                  <p className="metadata-label">Year</p>
                  <p className="metadata-value">2015&ndash;16</p>
                </div>
              </div>
            </div>
          </div>
          <p className="case-intro">
            Prepaid customers build their own recharge from a menu of data,
            voice and international inclusions. Four taps, one price.
          </p>
        </header>


        <div className="case-study-section">
          <h2>The Challenge</h2>
          <p>
            Prepaid recharges were fixed combinations. If you wanted more data
            you also paid for voice minutes you never used, and the plan names
            told you nothing about what was inside. The product bet, internally
            called Pick &amp; Mix, was to let customers choose their data,
            voice, international minutes and expiry independently, and see a
            single price for the mix.
          </p>
          <p>
            The pricing reality behind that promise was the first problem. The
            offer sheet worked out to 72 possible combinations across 18 unique
            price points, and every one of them had to make commercial sense.
            We mapped the risks early in a workshop that kept resurfacing the
            same two constraints: most prepaid customers recharge with
            fixed-value vouchers, and no screen can show 72 combinations at
            once.
          </p>
          <img
            src="/images/vodafone/mymix-workshop-postits.webp"
            alt="Post-it wall from the June 2015 risks workshop, grouped into risks, constraints, technical notes and questions"
          />

          <h3>First sketches</h3>
          <p>
            I started on paper, sketching the recharge entry points and a
            builder where each inclusion is its own control. The paper
            prototype already had the shape the product would ship with: one
            group per inclusion, a running summary, one price.
          </p>
          <img
            src="/images/vodafone/mymix-sketches.webp"
            alt="Pen sketches of the voucher entry screen and the inclusion picker"
            className="img-small"
          />
          <img
            src="/images/vodafone/mymix-paper-prototype.webp"
            alt="Paper prototype of the builder with a printed 2GB selection"
            className="img-small"
          />
        </div>

        <div className="case-study-section">
          <h2>Two Ways to Build a Plan</h2>
          <p>
            Sliders had a champion before they had a prototype. The
            project&rsquo;s sponsor was a senior executive who sat a floor
            above the team and joined us for showcases; he had seen
            build-your-own plans sold with sliders by an overseas operator and
            was certain customers would find sliding easy. My read was the
            opposite: our offer was a set of fixed combinations, and a slider
            promises a kind of control the pricing could never give. A
            showcase is a bad place to settle conviction against conviction,
            so each hypothesis became a working prototype we could put in
            front of customers.
          </p>

          <h3>Hypothesis one: sliders</h3>
          <p>
            Four vertical sliders, one per inclusion. It felt tactile and
            expressive, the price updating as you drag. We built it in Axure
            and it demoed well in the office.
          </p>
          <img
            src="/images/vodafone/mymix-slider-default.webp"
            alt="The Axure slider prototype: four vertical sliders for expiry, data, voice and international"
            className="img-small"
          />

          <h3>Hypothesis two: buttons</h3>
          <p>
            A grid of buttons, one row per inclusion. Less spectacular in a
            demo, but honest about what the offer really was: a set of fixed
            options, not a continuous range.
          </p>
          <p>
            For the test to mean anything the prototype had to enforce the real
            pricing rules, so I coded it in AngularJS with the actual price
            matrix behind it, all 72 combinations. Pick an option and the
            combinations that no longer exist grey out before you can commit to
            them. Until every group has a selection, the price shows the range
            you could still land in.
          </p>
          <img
            src="/images/vodafone/mymix-angular-default.webp"
            alt="The coded AngularJS prototype in the $30 voucher scenario, no options selected"
            className="img-small"
          />

          <h3>Try the test rig</h3>
          <p>
            This is a working model of that rig, rebuilt for this page and
            running the original pricing matrix. Switch hypotheses and
            scenarios, and notice where each one tells you the truth about
            what you can have.
          </p>
          <MymixBuilder />
        </div>

        <div className="case-study-section">
          <h2>Testing the Hypotheses</h2>
          <p>
            We ran two rounds of moderated sessions: three prepay customers
            aged 18 to 27 recharging with a voucher and with a credit card,
            then five aged 29 to 60 recharging online with a $30 voucher.
          </p>

          <h3>The sliders promised something the pricing couldn&rsquo;t keep</h3>
          <p>
            The data slider had stops at 500MB and 2GB. Participants dragged
            for the middle, wanting 1GB, because a slider says every position
            is a value. When the handle snapped away, or a combination
            wasn&rsquo;t available at their voucher value, the prototype could
            only apologise:
          </p>
          <img
            src="/images/vodafone/mymix-slider-oops.webp"
            alt="The slider prototype showing an error dialog: the option you have chosen isn't available at this voucher value"
            className="img-small"
          />
          <blockquote>It is unclear what half-way on the slider means</blockquote>
          <blockquote>I find the sliders more difficult to use</blockquote>
          <p>
            Nobody asked the button prototype for 1GB. The same constraint
            that broke the sliders read as a menu of choices when it was drawn
            as buttons, and the greyed-out states did the explaining before
            anyone hit a wall:
          </p>
          <img
            src="/images/vodafone/mymix-angular-selection.webp"
            alt="The coded prototype after two selections, with unavailable options greyed out"
            className="img-small"
          />
          <blockquote>This view instantly tells me what I can and cannot choose</blockquote>
          <blockquote>There is no point showing me options that I cannot have</blockquote>
          <p>
            The lesson wasn&rsquo;t that sliders are bad. It&rsquo;s that a
            control is a promise about the data behind it. The slider pattern
            carries a convention of control, of tuning a value to exactly
            where you want it, and Pick &amp; Mix had 72 fixed combinations to
            sell. Buttons made the constraint legible instead of apologising
            for it.
          </p>

          <h3>Bringing the users to the sponsor</h3>
          <p>
            The findings were obvious in the room and invisible outside it.
            The sponsor wasn&rsquo;t part of the sessions, and another
            showcase slide from the team he&rsquo;d been pushing back on
            wasn&rsquo;t going to move him. So we made the evidence do the
            travelling: every session was recorded, and we cut the moments
            where participants fought the sliders into short clips he could
            hear for himself. Customers saying it did what us saying it never
            could. The sliders were retired without another debate.
          </p>

          <h3>Testing also changed the launch conversation</h3>
          <p>
            The voucher scenario surfaced a harder problem than the controls.
            A fixed-value voucher fights a build-your-own product: a $30
            voucher often pushed people into a 7-day expiry they didn&rsquo;t
            want, meaning four recharges a month. Around 60 to 70% of
            customers recharged with vouchers, yet only 7.4% of recharges were
            vouchers redeemed online. Our recommendation went beyond the UI:
            delay the launch until wallet functionality could hold a
            voucher&rsquo;s value as credit, so the builder wouldn&rsquo;t be
            boxed in by the voucher&rsquo;s fixed price.
          </p>
          <p>
            Smaller recommendations from the sessions went straight into the
            design: expiry moved to the top of the builder because it
            constrains the most, and a reset control lets people start their
            mix again.
          </p>
        </div>

        <div className="case-study-section">
          <h2>What Shipped</h2>
          <p>
            The shipped builder is the button hypothesis with the testing
            recommendations applied. The price panel starts at $0, shows an
            estimated range while the mix is incomplete, and settles on the
            exact price once all four choices are made. The Continue button
            stays faded until the mix is real.
          </p>
          <img
            src="/images/vodafone/mymix-cc-progression.webp"
            alt="Three states of the shipped builder: empty at $0, partial with an estimated $25 to $60 range, complete at $40"
          />
          <p>
            Recharging with a voucher keeps the same builder but works inside
            the voucher&rsquo;s fixed value. Options the voucher can&rsquo;t
            cover grey out as you pick, and a lightbox explains the limit when
            you tap one anyway.
          </p>
          <img
            src="/images/vodafone/mymix-voucher-states.webp"
            alt="Six states of the voucher flow, including greyed-out options and the inclusion limit lightbox"
          />

          <h3>Journeys and handoff</h3>
          <p>
            I documented the end-to-end journeys for both payment paths and
            redlined the components for the build teams across the site and
            the MyVodafone app.
          </p>
          <img
            src="/images/vodafone/mymix-journey-voucher.webp"
            alt="End-to-end express recharge journey with a voucher, from number entry to success"
          />
          <img
            src="/images/vodafone/mymix-journey-cc.webp"
            alt="End-to-end recharge journey with credit card or PayPal, from number entry to success"
          />
          <img
            src="/images/vodafone/mymix-specs-redline.webp"
            alt="Redline spec of the builder with measurements and colour values"
            className="img-small"
          />
          <p>
            The desktop web version keeps the same anatomy at a wider
            measure, so a customer moving between the app and the site never
            relearns the builder.
          </p>
          <img
            src="/images/vodafone/mymix-desktop.webp"
            alt="The desktop web version of the recharge builder"
            className="img-small"
          />
        </div>

        <div className="case-study-section">
          <h2>Rollout</h2>
          <p>
            The product launched in 2016 as MyMix, in the MyVodafone app and
            on the website, with a public selector at vodafone.com.au/mymix.
            Because retail and care staff would be explaining a product with
            72 answers to &ldquo;what does it cost?&rdquo;, the launch included
            an internal training course built around the same tool customers
            use.
          </p>
          <img
            src="/images/vodafone/mymix-course-tool.webp"
            alt="Vodafone staff training course walking through the MyMix selector tool"
          />
          <img
            src="/images/vodafone/mymix-course-inclusions.webp"
            alt="Vodafone staff training course explaining the four inclusions and what every recharge includes"
          />

          <h3>What I took from it</h3>
          <p>
            This project settled a habit I still have: when two ideas both
            have believers, build both and let users break one. The slider
            prototype cost us days and saved us a launch, and the coded
            prototype made the test honest, because it argued with the real
            pricing rules instead of a happy path. It also taught me how
            evidence moves people that opinion can&rsquo;t: thirty seconds of
            a customer fighting a slider ended a debate that showcases
            couldn&rsquo;t. And I stopped treating controls as styling
            decisions. The control is the promise; pick the one your data can
            keep.
          </p>
        </div>
      </div>
    </section>
  );
}
