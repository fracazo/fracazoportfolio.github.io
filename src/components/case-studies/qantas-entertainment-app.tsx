import type { ReactNode } from "react";
import { CaseStudyLayout } from "@/components/case-study-layout";
import { QantasEntertainmentMark } from "@/components/scene-marks";

/**
 * Body of the qantas-entertainment-app case study, without the route chrome.
 *
 * Lives apart from the route so the same content can render inside the work
 * panel on the home page. `breadcrumb` is a slot the route fills and the
 * panel leaves empty, since it doesn't belong beside the index.
 */
export function QantasEntertainmentAppContent({
  breadcrumb,
}: {
  breadcrumb?: ReactNode;
} = {}) {
  return (
    <CaseStudyLayout
      icon={<QantasEntertainmentMark size={36} />}
      title="Qantas Entertainment"
      subtitle="Tripling ad revenue by making in-flight entertainment work before the flight"
      meta={[
        { label: "Role", value: "Lead Designer" },
        { label: "Project type", value: "Redesign" },
        { label: "Platform", value: ["iOS", "Android"] },
      ]}
      stats={[
        { value: "2.1 → 4.5", label: "App Store rating" },
        { value: "3×", label: "ad revenue from partner offers, AUD 225k to 675k a year" },
      ]}
      chapters={[
        { id: "qe-problem", label: "Only worked on board" },
        { id: "qe-research", label: "Before, during and after" },
        { id: "qe-offers", label: "Offers without a new back end" },
        { id: "qe-aircraft", label: "Five kinds of aircraft" },
        { id: "qe-icon", label: "An icon Qantas adopted" },
        { id: "qe-results", label: "Results" },
      ]}
      hero={
        <img src="/images/62dbf18c99bfd636c45d7ceb_Experience-2.webp" width={3224} height={1856} alt="The redesigned home screen in three states: no trip booked with the latest movies, before a flight with personal device options and partner offers, and on board" />
      }
    >
      <section className="section case-study-content">
        <div className="case-study-main">

        {breadcrumb}

          <p className="cs-intro">The Qantas Entertainment app streamed movies and shows to your own phone or tablet on board, and did nothing on the ground. People installed it and forgot about it. I redesigned it to be useful before and after the flight, and after launch, advertising revenue from partner offers in the app tripled.</p>

          <div className="case-study-section">
            <h2 id="qe-problem">An app that only worked on board</h2>
            <p>The app only worked when you were on the plane and connected to the Qantas network. Open it anywhere else and there was nothing to do, so most people who had it installed rarely opened it.</p>
            <img src="/images/62db95b70af0c632dbf50130_Screen-Shot-2022-07-23-at-4.29.49-pm.webp" alt="The old app, which needed the on-board network to show anything" className="img-small" />
            <img src="/images/62db960e9e2cf8f5ed8f3cc0_Screen-Shot-2022-07-23-at-4.29.55-pm.webp" alt="More screens from the old app" className="img-small" />
          </div>

          <div className="case-study-section">
            <h2 id="qe-research">Before, during and after the flight</h2>
            <p>I mapped the whole trip with travellers: before the flight, on board and after landing. I ran workshops with stakeholders, interviewed travellers and tested early ideas with them face to face. One goal guided the work: get travellers to their entertainment with as little effort as possible.</p>
            <img src="/images/62dbb2f91599635a246c14ba_Sketch.webp" alt="Concept sketches from the workshops" />
            <img src="/images/62ddc453f0156d74347ac1cf_IMG_8141.webp" alt="Testing printed mockups with a traveller" />
            <p>We kept testing as the design took shape, including on board, with travellers using the app during real flights.</p>
            <img src="/images/62ddc62adc69f994be51a3a8_IMG_8117.webp" alt="A user research session with a traveller" className="img-small" />
            <img src="/images/62ddc5e63b3a73d76a254359_IMG_8124.webp" alt="A traveller trying the prototype" className="img-xs" />
            <img src="/images/62ddc5473b3a732620253c07_IMG_4772.webp" alt="Testing the app on board a Qantas flight" className="img-small" />
            <img src="/images/62ddc4c6ee175f391ba87014_IMG_1742.webp" alt="A traveller using the app in their seat" className="img-xs" />
          </div>

          <div className="case-study-section">
            <h2 id="qe-offers">Partner offers without a six-month build</h2>
            <p>The design for partner offers was ready, and the product owner wanted to build it as designed. Looking at it, I could see it needed a new back-end service, and that the service would take a long time to build. I brought the back-end engineer into our discovery sessions, and the engineer confirmed it: about six months.</p>
            <p>So I redesigned the offers before any of that work started. They became a row of cards in the same place as &ldquo;What&rsquo;s new this month&rdquo;, the carousel of the latest movies, which people were already using a lot. Offers sat where travellers were already looking, without the new service.</p>
            <img src="/images/62dbf33322fdbe67a1f79575_redesigned---ready-to-flight.webp" alt="Before the flight: the home screen with entertainment offers at the bottom, next to newspapers and magazines" />
          </div>

          <div className="case-study-section">
            <h2 id="qe-aircraft">One app, five kinds of aircraft</h2>
            <p>The app reads your name, flight and frequent flyer details from the Qantas app, so it knows which aircraft you&rsquo;re on. The home screen changes to match what that aircraft has:</p>
            <ul>
              <li>No upcoming trip: the latest movies</li>
              <li>Seatback screens only</li>
              <li>Streaming to your device only</li>
              <li>Both seatback screens and streaming</li>
              <li>Neither: newspapers, magazines and partner offers</li>
            </ul>
            <img src="/images/62dbf1780df0886dbe040658_Experience-1.webp" alt="Launch screens: the app asks to share details with the Qantas app, then finds your flights" />
            <img src="/images/62ef67ff917ce135295b4b6c_Experience-3.webp" alt="The home screen annotated: greeting and trip, entertainment options by where they play, partner offers, and a badge for plane or lounge wi-fi" />
            <img src="/images/62dbb371788939d647160c0f_redesigned---at-the-airplane.webp" alt="On the plane: each option on the home screen and the service behind it" />
          </div>

          <div className="case-study-section">
            <h2 id="qe-icon">An icon Qantas adopted</h2>
            <p>The old icon was an 80s TV, which hinted at slow streaming. It also used the same red as the Qantas Airways app, so the two were easy to mix up in a folder or in the App Store.</p>
            <img src="/images/62db9a6a0af0c66bb8f54054_icon-redesign.webp" alt="The old icon and its problems" />
            <img src="/images/62dba00a2ccfa45b6b5caa25_icon.webp" alt="The old Entertainment icon next to the Qantas app in a folder, both red" className="img-xs" />
            <p>The Qantas brand guidelines include a secondary &ldquo;pebble&rdquo; shape. I put a play symbol inside it, on the app&rsquo;s own dark background.</p>
            <img src="/images/62ef65249d54c22b8832a872_icon-rationality.webp" alt="How the icon is built: app background colour, the pebble shape, and a symbol for what the app does" />
            <p>The brand manager adopted the icon as the Qantas brand for entertainment.</p>
            <img src="/images/62dfbfe1ae91243f8a293521_icon.webp" alt="The new icon on a phone home screen" />
          </div>

          <div className="case-study-section">
            <h2 id="qe-results">Results</h2>
            <p>After launch, the app&rsquo;s App Store rating went from 2.1 to 4.5. Advertising revenue from partner offers went from AUD 225k to AUD 675k a year.</p>
            <img src="/images/62ddc84c1ae3453b107eac6d_effedb79-f8b4-48eb-8219-395614866761.webp" alt="Presenting the results at a Qantas showcase" className="img-small" />
            <p className="img-caption">Presenting the results at a Qantas showcase.</p>
          </div>

        </div>
      </section>
    </CaseStudyLayout>
  );
}
