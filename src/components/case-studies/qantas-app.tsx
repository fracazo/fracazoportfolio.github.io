import type { ReactNode } from "react";
import { CaseStudyLayout } from "@/components/case-study-layout";

/**
 * Body of the qantas-app case study, without the route chrome.
 *
 * Lives apart from the route so the same content can render inside the work
 * panel on the home page. `breadcrumb` is a slot the route fills and the
 * panel leaves empty, since it doesn't belong beside the index.
 */
export function QantasAppContent({
  breadcrumb,
}: {
  breadcrumb?: ReactNode;
} = {}) {
  return (
    <CaseStudyLayout
      icon={<img className="cs-app-icon" src="/images/qantas-airways-icon.webp" width={256} height={256} alt="" />}
      brand="#e40000"
      title="Qantas Airways app"
      subtitle="Putting entertainment on the flight card"
      meta={[
        { label: "Role", value: "Lead Designer" },
        { label: "Project type", value: "New feature" },
        { label: "Platform", value: ["iOS", "Android"] },
      ]}
      stats={[
        { value: "27k", label: "taps on Download Qantas Entertainment app in the first 24 hours" },
        { value: "+70%", label: "year-on-year App Store download growth, up from +58%" },
      ]}
      chapters={[
        { id: "qa-problem", label: "Nobody knew the app existed" },
        { id: "qa-notice", label: "A notice that knows the aircraft" },
        { id: "qa-launch", label: "27k taps in a day" },
        { id: "qa-home", label: "Onto the home screen" },
        { id: "qa-results", label: "Results" },
      ]}
      hero={
        <img src="/images/62db651e9b61420fa9ab20ce_formfactor.webp" width={1544} height={672} alt="The flight card in the Qantas Airways app with a Download Qantas Entertainment app row, and the notice's variants for seatback screens, streaming, and the app already installed" />
      }
    >
      <section className="section case-study-content">
        <div className="case-study-main">

        {breadcrumb}

          <p className="cs-intro">More and more Qantas travellers watch on their own phones and tablets, but most didn&rsquo;t know the Qantas Entertainment app existed until they were on board, too late to download it. I designed a notice on the flight card in the Qantas Airways app that knows which aircraft you&rsquo;re flying and whether you have the app, then grew it into entertainment on the app&rsquo;s home screen.</p>

          <div className="case-study-section">
            <h2 id="qa-problem">Nobody knew the app existed</h2>
            <p>Qantas had a strong seatback experience but no easy way to watch on your own device, even as travellers brought more of them on board. I led design for the Entertainment squad in Qantas Digital Direct, working with the Travel, Emerging Channels, Loyalty and Smart Retail squads. I ran discovery, guerrilla tests at the airport and interviews in the Qantas Lounge, and showed the work to the wider team every two weeks.</p>
            <img src="/images/62cd72933cf5aa86945be94f_Screen-Shot-2022-07-12-at-11.09.27-pm.webp" alt="The traveller journey from booking to landing, with pain points: not knowing to download another app, not knowing what is new for the flight, not wanting to wait for the flight to start entertainment, not finishing what they were watching" />
            <blockquote>Travellers <strong>don&rsquo;t know</strong> about the Entertainment app until they get on board the flight.</blockquote>
            <p>But they did open the Qantas Airways app before flying: 35% of trips were synced or added to it a week before departure. So the experiment was to put a message about the Entertainment app on the flight card in the Qantas Airways app, and measure Entertainment app downloads from the App Store.</p>
            <img src="/images/62d92064bd8dc262d8f4684e_Screen-Shot-2022-07-21-at-7.45.40-pm.webp" alt="The original flow: home screen, then the trip itinerary, with no mention of entertainment" />
          </div>

          <div className="case-study-section">
            <h2 id="qa-notice">A notice that knows the aircraft</h2>
            <p>The notice only works if it&rsquo;s true for your flight. Qantas flies aircraft with different systems, so I designed it around four situations:</p>
            <ul>
              <li>The aircraft only has seatback screens</li>
              <li>It only has streaming to your device</li>
              <li>It has both</li>
              <li>It has neither, so the notice stays hidden</li>
            </ul>
            <p>It also checks whether you already have the Entertainment app, and adjusts the message to match. Each message stays short and out of the way, so the flight card still does its main job.</p>
            <img src="/images/62d920e6a8820bb1f683016a_Screen-Shot-2022-07-21-at-7.48.07-pm.webp" alt="The flight card on the home screen with the Download the Qantas Entertainment app before you fly notice highlighted" className="img-xs" />
            <img src="/images/62d923ef2a634d7332345a07_Screen-Shot-2022-07-21-at-8.01.09-pm.webp" alt="The redesigned flow: from the notice on the home screen and itinerary straight to the Entertainment app in the App Store" />
          </div>

          <div className="case-study-section">
            <h2 id="qa-launch">27k taps in a day</h2>
            <p>In the first 24 hours after launch, 27k unique visitors tapped &ldquo;Download Qantas Entertainment app&rdquo;, and 9k tapped &ldquo;Open Qantas Entertainment app&rdquo;. The flight card was the right place: people were already there, planning their trip.</p>
          </div>

          <div className="case-study-section">
            <h2 id="qa-home">Onto the home screen</h2>
            <p>With that result, we added more to get travellers excited about their trip, starting with the five latest movies on their flight, then a detail page that could hold movies, TV shows, games and music.</p>
            <img src="/images/62d932ca88b9cb77a06bf8ee_Screen-Shot-2022-07-21-at-9.04.18-pm.webp" alt="Entertainment on the itinerary: the latest movies for the flight and the download notice" className="img-small" />
            <img src="/images/62db6a93b82931731af85715_Media-details.webp" alt="Detail pages for a movie, a TV show, a game and music, each with where to watch on this flight" />
            <p>Meanwhile the Travel squad was bringing the itinerary onto the app&rsquo;s home screen, so travellers wouldn&rsquo;t need to tap a card to see what mattered for their flight. Because the entertainment pattern was simple, consistent and cheap to build, it moved onto the new home screen as it was. Entertainment for your flight went from a tap away to the first screen 1.17 million monthly users see.</p>
            <img src="/images/62d9376db01acdaf39623982_Screen-Shot-2022-07-21-at-9.23.58-pm.webp" alt="How the pattern evolved: the notice on the flight card, then on the itinerary, then entertainment on the new home screen" className="img-small" />
          </div>

          <div className="case-study-section">
            <h2 id="qa-results">Results</h2>
            <p>Entertainment is now on the Qantas Airways app&rsquo;s home screen, telling travellers what&rsquo;s on their flight before they board. Year-on-year App Store download growth went from +58% at the start of the project to +70% after the redesign, helped a lot by that home screen placement.</p>
            <img src="/images/62de769d97f4602e89070492_user-flow.webp" alt="The final flow: whether the traveller has a trip and the app, through the home screen and itinerary, to the Entertainment app or the App Store" />
            <img src="/images/62df2cccc02b82ce55e9b9f3_conclusion.webp" alt="A traveller holding a phone with the Qantas Entertainment app open" />
            <p>This is one half of the story. The other half is the <a href="/work/qantas-entertainment-app">Qantas Entertainment app redesign</a>, where the same idea continues inside the streaming app.</p>
          </div>

        </div>
      </section>
    </CaseStudyLayout>
  );
}
