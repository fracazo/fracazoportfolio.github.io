import { WorkStub } from "@/components/work-stub";

/**
 * B2W Digital. Drawn from Alex's LinkedIn project entries for Americanas,
 * Submarino and Shoptime. The Portuguese company boilerplate that came with
 * them is condensed to the one line that sizes the work. The boleto story and
 * the app video are shared with the About page: same company, same years, told
 * there as biography and here as the work.
 */
export function B2wStub() {
  return (
    <WorkStub
      eyebrow="B2W Digital · 2013–2015"
      title="Mobile for Americanas, Submarino and Shoptime"
      intro="Rebuilding the mobile experience for three of Brazil's largest e-commerce brands."
    >
      <p>
        I designed the mobile sites for all three brands, working in rapid
        prototypes, documenting the information architecture, and presenting the
        direction to each brand team. I also designed the Submarino iOS 7 app
        redesign, a new visual language for the operating system with a simpler
        way through the catalogue.
      </p>
      <p>
        The scale is the point. Americanas was Brazil&rsquo;s largest online
        store, carrying more than 500,000 items across 32 categories, and had
        taken the Datafolha Top of Mind award in e-commerce seven times.
        Submarino and Shoptime sold through the web, call centres, catalogues
        and, in Shoptime&rsquo;s case, a live television channel reaching 28
        million households.
      </p>
      <p>
        Alongside the three sites I built an internal design system, which is
        what kept a shared mobile experience consistent across separate brand
        teams and their native apps.
      </p>
      <p>
        The native app is its own story. When I joined, the mobile team was the
        corner nobody visited. The company had no responsive website, and the
        app sold about one product a day, which was considered normal.
      </p>
      <p>
        There was a physical store nearby with a café, and employees got a
        discount, so I went for coffee most days. Walking back one afternoon I
        saw someone using our app while standing in the shop. I asked if she
        ever bought through it. She said no, never. The app only took credit
        cards, and she paid by boleto, which let her split the cost into
        instalments. Two minutes of conversation explained a number our
        analytics never had.
      </p>
      <p>
        Getting boleto into a native app meant going outside my team. The web
        team was already rebuilding the site for small screens, so I took the
        finding to them and made the case for prioritising the payment work,
        then we brought it into the app through a webview. I rebuilt the app
        around the flat design language iOS 7 had just introduced. We were the
        first native app in Brazil built for iOS 7, and Apple featured us in
        the App Store. 50 products on the first day.
      </p>
      <figure className="relative my-8 w-full overflow-hidden rounded-card bg-panel pt-[56.25%]">
        <iframe
          src="https://www.youtube-nocookie.com/embed/b_6N9OjKZw8?start=47&rel=0"
          title="Americanas iOS 7 app"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          className="absolute top-0 left-0 h-full w-full border-0"
        />
      </figure>
      <p>
        Then months of making it faster, which mattered more than the redesign
        did. Mobile revenue grew ten times over the following year.
      </p>
    </WorkStub>
  );
}
