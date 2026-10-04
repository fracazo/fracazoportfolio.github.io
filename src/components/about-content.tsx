import { HoverJoke } from "@/components/hover-joke";
import { LinkedInButton } from "@/components/linkedin-button";
import { PhotoCarousel, type CarouselPhoto } from "@/components/photo-carousel";
import { PhotoStrip, type StripPhoto } from "@/components/photo-strip";

/** The Pantanal, out past Cuiaba: where the story starts, before any of the work. */
const pantanalPhotos: StripPhoto[] = [
  {
    src: "/images/pantanal-highway-sign.jpg",
    alt: "A highway gantry over an empty road reading 'O Pantanal e lindo. Quem conhece ama. Boa viagem!'",
    width: 448,
    height: 320,
  },
  {
    src: "/images/pantanal-wooden-bridge.jpg",
    alt: "A car parked at the end of a plank bridge over flooded grassland, doors open.",
    width: 442,
    height: 320,
  },
  {
    src: "/images/pantanal-boats.jpg",
    alt: "Three aluminium boats pulled up on a sandbank under a clear sky, someone loading a pack.",
    width: 428,
    height: 320,
  },
  {
    src: "/images/pantanal-capybara.jpg",
    alt: "A capybara half submerged at the edge of a pond, watching from the reeds.",
    width: 429,
    height: 320,
  },
  {
    src: "/images/pantanal-caiman-riverbank.jpg",
    alt: "A caiman resting at the waterline on an orange sand bank.",
    width: 427,
    height: 320,
  },
  {
    src: "/images/pantanal-piranha.jpg",
    alt: "Two hands holding a piranha in a boat, its jaws open.",
    width: 429,
    height: 320,
  },
  {
    src: "/images/pantanal-jabiru.jpg",
    alt: "A jabiru stork on the bank with a fish held crosswise in its beak.",
    width: 433,
    height: 320,
  },
  {
    src: "/images/pantanal-boat-sunset.jpg",
    alt: "A boat moored on the sand as the sun sets over the river.",
    width: 430,
    height: 320,
  },
  {
    src: "/images/pantanal-sunset-moon.jpg",
    alt: "Trees silhouetted against an orange sunset with a crescent moon above.",
    width: 583,
    height: 320,
  },
  {
    src: "/images/pantanal-caiman-dusk.jpg",
    alt: "The silhouette of a caiman's head breaking still water lit gold by the sunset.",
    width: 582,
    height: 320,
  },
];

/** Artia, early 2010: the sprint boards the team ran the product from. */
const artiaPhotos: CarouselPhoto[] = [
  {
    src: "/images/artia-sprint-review.jpg",
    alt: "A meeting table with an open MacBook, notebooks and sticky notes, colleagues working at desks behind it.",
    caption: "Sprint review at Artia, February 2010.",
    width: 800,
    height: 606,
  },
  {
    src: "/images/artia-sprint-board.jpg",
    alt: "A whiteboard covered in sticky notes, with columns headed Cenarios, Tarefas pendentes, Tarefas em execucao and Tarefas completas, seen over the tops of desktop computers.",
    caption:
      "The sprint board: scenarios down the left, tasks moving across to done.",
    width: 800,
    height: 600,
  },
  {
    src: "/images/artia-new-sprint-board.jpg",
    alt: "A freshly drawn whiteboard with numbered rows of yellow sticky notes under Cenario, and an empty Execucao column.",
    caption: "A new board for the next sprint, before anything had moved.",
    width: 800,
    height: 600,
  },
];


/**
 * Body of the About page, without the route chrome.
 *
 * Lives apart from the route so the same content can render inside the side
 * panel. `back` is a slot the route fills with its fixed back link and the
 * panel leaves empty, because the panel supplies its own back control and a
 * position:fixed link would pin to the window rather than the pane.
 */
export function AboutContent({ back }: { back?: React.ReactNode } = {}) {
  return (
    <>
      {back}
      <section className="mx-auto w-full max-w-content">
        <div className="pt-24 text-left max-md:pt-20">
          <h1 className="h1">About me</h1>

          <div className="writing-body">
            <p>
              I grew up on a farm in Minas Gerais, Brazil. Later we moved to
              Cuiabá, near the Pantanal. English is my second language, and I
              think that&rsquo;s part of why I like simple words and simple
              design.
            </p>

            <PhotoStrip
              photos={pantanalPhotos}
              label="Photos from the Pantanal, Mato Grosso"
              caption="The Pantanal, near Cuiabá."
            />

            <p>
              I started in 2005 at an agency in Mato Grosso,{" "}
              <HoverJoke
                id="photoshop-joke"
                word="designing"
                src="/images/photoshop-grandma.jpg"
                alt="Meme: an elderly woman with a walking frame says 'I used to design websites in photoshop', and the young woman helping her replies 'Sure you did grandma, let's get you back in bed'."
                width={640}
                height={446}
              />{" "}
              websites in Photoshop and building them with table layouts. Later
              I moved to tableless layouts, and then to Haml and Sass at Artia,
              the first product management software built in Brazil.
            </p>

            <PhotoCarousel photos={artiaPhotos} />

            <p>
              It was a small agile team where everyone did a bit of everything.
              Design was my specialty, and code was just part of the job.
            </p>

            <p>
              In 2013 I joined B2W, the biggest e-commerce company in South
              America, on the mobile team. Nobody paid much attention to mobile
              back then. The company had no responsive website, and the native
              app sold about one product a day. Everyone thought that was
              normal.
            </p>

            <p>
              There was a physical store near the office with a café, and
              employees got a discount, so I went for coffee most days. Walking
              back one afternoon, I saw a woman using our app inside the shop.
              I asked if she ever bought through it. She said no, never. The app
              only took credit cards, and she paid by boleto, which let her
              split the cost into instalments.
            </p>

            <p>
              That two-minute conversation explained something our analytics
              never showed us.
            </p>

            <p>
              Adding boleto to the app meant working outside my team. The web
              team was already rebuilding the site for small screens, so I took
              the finding to them and made the case for prioritising the payment
              work. Then we brought it into the app through a webview. I also
              rebuilt the app around the flat design style that iOS 7 had just
              introduced. We were the first native app in Brazil built for iOS
              7, and Apple featured us in the App Store. On the first day, we
              sold 50 products.
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
              Then we spent months making the app faster, which mattered more
              than the redesign. Mobile revenue grew ten times over the
              following year.
            </p>

            <p>
              Not long after, I left Brazil and moved to Australia to study UX
              properly. I wanted to understand why that one conversation worked
              when a year of data hadn&rsquo;t.
            </p>

            <p>
              In Australia I worked with Vodafone, Qantas, Telstra, Endeavour
              Group and Hireup. Along the way, I worked on a government visa app
              that won a Sydney Design Award, and a disability support
              marketplace where one simple change moved connections from 3% to
              5%.
            </p>

            <figure className="my-8">
              <img
                src="/images/MVIMG_20180824_175632-ANIMATION-1.gif"
                alt="A hackathon team of about ten people crowded together and laughing, wearing matching Argathon T-shirts, with a certificate and balloons behind them."
                width={972}
                height={730}
                loading="lazy"
                className="block w-full rounded-[var(--radius)]"
              />
            </figure>

            <p>
              Then GitLab, where I owned Wiki, GLQL, Pages and the text editors.
              I spent as much time on what to build as on how it looked, and I
              was back in the code too, shipping some of my own changes to
              production.
            </p>

            <figure className="my-8">
              <img
                src="/images/gitlab_team_lasvegas.jpeg"
                alt="A large GitLab team gathered around giant GitLab letters and the tanuki logo in a hotel ballroom, most wearing lanyards."
                width={2048}
                height={1536}
                loading="lazy"
                className="block w-full rounded-[var(--radius)]"
              />
            </figure>

            <figure className="my-8">
              <img
                src="/images/gitlab-activity.png"
                alt="A year of GitLab contribution squares, filled in across most weekdays, labelled issues, merge requests, pushes, and comments."
                width={1818}
                height={401}
                loading="lazy"
                /* Dark screenshot kept as-is; the hairline edge stops it
                   floating on the light theme's paper background. */
                className="block w-full rounded-[var(--radius)] border border-border"
              />
            </figure>

            <p>
              Now I build by directing AI and reviewing what it gives back. It
              feels familiar, because it&rsquo;s close to the work I did in 2009.
            </p>

            <p>
              Looking back, the lesson is the same one I learned at the shop: go
              and look at the thing. The answer is usually simpler than anyone expected, and
              it&rsquo;s usually standing right there.
            </p>
          </div>

          <LinkedInButton className="mt-10" />
        </div>
      </section>
    </>
  );
}
