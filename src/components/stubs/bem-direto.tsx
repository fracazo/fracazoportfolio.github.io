import { WorkStub } from "@/components/work-stub";

/**
 * Bem Direto and Fisgo. Translated and condensed from the Portuguese
 * descriptions Alex supplied. What he personally did is still outstanding.
 */
export function BemDiretoStub() {
  return (
    <WorkStub
      eyebrow="Bem Direto · 2010–2012"
      title="Bem Direto"
      intro="A two-sided property tool connecting buyers, agencies and brokers."
    >
      <p>
        Bem Direto set out to shorten the distance between people looking for a
        home and the agencies and brokers holding the listings, which is a
        supply and demand problem before it is an interface one.
      </p>
      <p>
        At the same company I worked on Fisgo, which grew into the largest
        classifieds aggregator in Brazil. Both sit on the same side of the
        marketplace problem as Hireup did a decade later: the product only works
        if both sides show up and trust what they see.
      </p>
      <p className="inline-block rounded border border-dashed border-border px-2 py-1 font-mono text-[12px] text-text-tertiary">
        TODO: your actual role on these two, and any number worth citing. The
        descriptions above are the products&rsquo;, not yours.
      </p>
    </WorkStub>
  );
}
