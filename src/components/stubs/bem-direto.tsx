import { CaseStudyLayout } from "@/components/case-study-layout";
import { ExternalLinkIcon } from "@/components/icons";

/**
 * Bem Direto and Fisgo. Facts from Alex (Aug 2026): first designer, Photoshop
 * era with no UX practice yet, shipped web software, then landing page, then
 * iOS, then Android; no A/B tests were run; the company ran out of funding
 * and the product stopped. Screenshots come from his own design files.
 */
export function BemDiretoStub() {
  return (
    <CaseStudyLayout
      icon={
        // eslint-disable-next-line @next/next/no-img-element
        <img className="cs-app-icon cs-app-icon--clip" src="/images/bemdireto-icon.webp" width={256} height={256} alt="" />
      }
      title="Bem Direto"
      subtitle="Brazil&rsquo;s first real estate marketplace for agents"
      meta={[
        { label: "Role", value: "First designer" },
        { label: "Project type", value: "Zero to one" },
        { label: "Platform", value: ["Web", "iOS", "Android"] },
      ]}
      stats={[
        { value: "15,000", label: "new leads a month" },
        { value: "2,000", label: "new agents a month, the numbers Exame cited" },
      ]}
      chapters={[
        { id: "bd-product", label: "The product" },
        { id: "bd-craft", label: "The craft of the era" },
        { id: "bd-outcome", label: "What it led to" },
      ]}
      hero={
        // eslint-disable-next-line @next/next/no-img-element
        <img src="/images/bemdireto-hero.jpg" width={1600} height={810} alt="A launch marketing photo: a hand holding an iPhone 5 running the app, showing a list of buyer leads with the price to unlock each contact" />
      }
    >
      <section className="section case-study-content">
        <div className="case-study-main">
          <p className="cs-intro">Brazil&rsquo;s first real estate marketplace for agents, designed from scratch.</p>

          <div className="case-study-section">
            <h2 id="bd-product">The product</h2>
          <p>
            I was the first designer on the team, and this was before I was a UX
            designer. I worked in Photoshop, screen by screen, and everything the
            product showed came out of those PSDs: the web software first, then the
            landing page, then the iOS app, then Android.
          </p>
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
          </div>

          <div className="case-study-section">
            <h2 id="bd-craft">The craft of the era</h2>
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
          </div>

          <div className="case-study-section">
            <h2 id="bd-outcome">What it led to</h2>
          <p>
            The model found its market. Within two years the platform was generating
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
              Exame&rsquo;s top 10 startups of the year
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
          </div>
        </div>
      </section>
    </CaseStudyLayout>
  );
}
