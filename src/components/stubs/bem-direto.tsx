import { ExternalLinkIcon } from "@/components/icons";
import { WorkStub } from "@/components/work-stub";

/**
 * Bem Direto and Fisgo. Facts from Alex (Aug 2026): first designer, Photoshop
 * era with no UX practice yet, shipped web software, then landing page, then
 * iOS, then Android; no A/B tests were run; the company ran out of funding
 * and the product stopped. Screenshots come from his own design files.
 */
export function BemDiretoStub() {
  return (
    <WorkStub
      eyebrow="Bem Direto · 2012–2013"
      title="Bem Direto"
      intro="Brazil's first real estate marketplace for agents, designed from scratch."
    >
      <p>
        I was the first designer on the team, and this was before I was a UX
        designer. I worked in Photoshop, screen by screen, and everything the
        product showed came out of those PSDs: the web software first, then the
        landing page, then the iOS app, then Android.
      </p>
      <figure className="my-8">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/bemdireto-hero.jpg"
          alt="A launch marketing photo: a hand holding an iPhone 5 running the app, showing a list of buyer leads with the price to unlock each contact"
          width={1600}
          height={810}
          loading="lazy"
          decoding="async"
          className="w-full rounded-card"
        />
      </figure>
      <p>
        The model was new in Brazil. People looking to buy or rent a home left
        what they wanted, and agents browsed those leads, each one priced at a
        few reais. The client&rsquo;s phone number stayed masked until an agent
        paid to unlock it. Signing up came with R$25 in credits, so the first
        contacts were free. Around that lead engine the product grew a full
        toolkit for agents: a CRM, a portfolio showcase, a public profile, and
        a website and email on the agent&rsquo;s own domain.
      </p>
      <figure className="my-8 grid gap-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/bemdireto-web-software.jpg"
          alt="The desktop software: an agent's search across buyer leads in Rio de Janeiro, with filters, badges, and a green button reading Ver contato por R$42,90 on each lead"
          width={1240}
          height={1121}
          loading="lazy"
          decoding="async"
          className="w-full rounded-card"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/bemdireto-landing-hero.jpg"
          alt="The landing page hero: the headline Sim, nós temos clientes!, a product tour video, and a green sign-up button offering R$25 in credits"
          width={1024}
          height={580}
          loading="lazy"
          decoding="async"
          className="w-full rounded-card"
        />
      </figure>
      <p>
        The craft of that era was rendering. Textured backgrounds, gradients,
        and pixel slices cut by hand at every density for web, iOS 6 and
        Android. I drew the app icon too, the brand&rsquo;s arrow given the
        full iOS treatment of the time. What I did not have yet was research,
        testing, or any way to measure whether a design worked beyond watching
        what happened.
      </p>
      <figure className="my-8 grid grid-cols-2 gap-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/bemdireto-oportunidades.png"
          alt="The Oportunidades screen of the iOS app: a list of buyer leads, each with the property they want and the price to unlock the contact"
          width={640}
          height={960}
          loading="lazy"
          decoding="async"
          className="w-full rounded-card"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/bemdireto-contato-mascarado.png"
          alt="A client detail screen with the phone number masked as (021) 8187 **** above a green button reading Entrar em contato por R$99,99"
          width={640}
          height={960}
          loading="lazy"
          decoding="async"
          className="w-full rounded-card"
        />
      </figure>
      <figure className="my-8">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/bemdireto-icon-board.jpg"
          alt="The original app icon presentation board from the Photoshop source: the orange arrow icon at every iOS size over the era's water-drop wallpaper, with an earlier gradient iteration in a tray on the right"
          width={1024}
          height={768}
          loading="lazy"
          decoding="async"
          className="w-full rounded-card"
        />
      </figure>
      <p>
        The model found its market. By late 2013 the platform was generating
        15,000 new leads a month and registering 2,000 new agents in the same
        window, numbers Exame cited when it picked Fisgo, the company behind
        Bem Direto, as one of Brazil&rsquo;s top 10 startups of the year.
      </p>
      <p>
        What Bem Direto left me was the shape of two-sided problems: a
        marketplace lives or dies on whether both sides keep showing up, and no
        screen fixes an empty side. When I met that shape again at Hireup, I
        had the research and measurement tools to work it properly.
      </p>
      <p>
        At the same company I worked on Fisgo, which grew into the largest
        classifieds aggregator in Brazil.
      </p>
      <p>
        <a
          href="https://exame.com/pme/as-10-startups-que-mais-se-destacaram-em-2013/"
          target="_blank"
          rel="noopener"
        >
          Exame&rsquo;s top 10 startups of 2013
          <ExternalLinkIcon size={12} className="external-mark" />
        </a>
      </p>
      <p>
        <a
          href="https://www.behance.net/gallery/6990589/iPhone-App-BemDireto"
          target="_blank"
          rel="noopener"
        >
          The iOS app on Behance
          <ExternalLinkIcon size={12} className="external-mark" />
        </a>
      </p>
    </WorkStub>
  );
}
