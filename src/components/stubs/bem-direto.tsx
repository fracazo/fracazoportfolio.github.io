import { WorkStub } from "@/components/work-stub";

/** Bem Direto and Fisgo. Role and dates supplied by Alex. */
export function BemDiretoStub() {
  return (
    <WorkStub
      eyebrow="Bem Direto · 2012–2013"
      title="Bem Direto"
      intro="Brazil's first real estate marketplace for agents, designed from scratch."
    >
      <p>
        I was the first designer on the team and designed the whole experience
        from nothing, across web and native apps. Bem Direto set out to shorten
        the distance between people looking for a home and the agencies and
        brokers holding the listings, which is a supply and demand problem
        before it is an interface one.
      </p>
      <p>
        I ran A/B tests on the core actions, measuring against click-through and
        conversion rather than opinion. That is the same instinct that later
        turned up at Hireup: in a two-sided marketplace the product only works
        if both sides show up, so the thing worth measuring is whether they
        actually connect.
      </p>
      <p>
        At the same company I worked on Fisgo, which grew into the largest
        classifieds aggregator in Brazil.
      </p>
    </WorkStub>
  );
}
