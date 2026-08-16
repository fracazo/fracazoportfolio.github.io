import { WorkStub } from "@/components/work-stub";

/**
 * B2W Digital. Drawn from Alex's LinkedIn project entries for Americanas,
 * Submarino and Shoptime. The Portuguese company boilerplate that came with
 * them is condensed to the one line that sizes the work.
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
    </WorkStub>
  );
}
