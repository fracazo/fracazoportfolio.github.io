import { CaseStudyLayout } from "@/components/case-study-layout";

/**
 * Coursify.me. Product description is its own; the brand work and the
 * concentric-waves origin come from Alex's own study documents.
 * The three product areas and their screen recordings come from the
 * coursify.me home page (the GIFs, re-encoded as video).
 */
/**
 * A screen recording inside the MacBook frame from coursify.me, as the site
 * shows them. The frame's screen opening is 390x247, the recordings' own
 * size, so they sit 1:1 behind the bezel; the whole frame shows at most at
 * 460px, the size coursify.me uses, so the recordings never scale up.
 */
function MacFrame({ name, label }: { name: string; label: string }) {
  return (
    <figure className="cs-mac">
      <video autoPlay muted loop playsInline preload="metadata" poster={`/images/${name}-poster.jpg`} aria-label={label}>
        <source src={`/videos/${name}.mp4`} type="video/mp4" />
      </video>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/coursify-macbook-frame.png" width={522} height={297} alt="" />
    </figure>
  );
}

export function CoursifyStub() {
  return (
    <CaseStudyLayout
      icon={
        <>
          {/* The full logo, as is: white wordmark on dark, dark on light. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="cs-logo cs-logo--dark" src="/images/coursify-logo-dark.png" width={230} height={59} alt="" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="cs-logo cs-logo--light" src="/images/coursify-logo-light.png" width={230} height={59} alt="" />
        </>
      }
      brand="#faa61a"
      title="Coursify.me"
      subtitle="An online course platform, from the UX to the brand"
      meta={[
        { label: "Role", value: ["Co-founder", "Designer"] },
        { label: "Project type", value: ["Zero to one", "Brand"] },
        { label: "Platform", value: "Web" },
      ]}
      stats={[{ value: "50,000", label: "students reached" }]}
      chapters={[
        { id: "cf-school", label: "Custom online school" },
        { id: "cf-builder", label: "Online course builder" },
        { id: "cf-student", label: "Student area" },
        { id: "cf-brand", label: "The brand" },
      ]}
      link={{ href: "https://coursify.me/", label: "coursify.me" }}
      hero={
        <div className="cs-hero-phone">
          <MacFrame name="coursify-school" label="Setting up a school: name, slogan and address, logo, cover image and colour scheme" />
        </div>
      }
    >
      <section className="section case-study-content">
        <div className="case-study-main">
          <p className="cs-intro">An online course platform. The UX, the UI and the brand were all mine.</p>

          <div className="case-study-section">
          <p>
            Coursify.me let any person or company build a school and sell courses,
            tutorials and ebooks online. The job was connecting teachers and
            companies to their students. It reached 50,000 students and is still
            running.
          </p>
          <p>
            I was the founder designer. The UX covered both sides of the
            marketplace: how a teacher built a school and put courses up for sale,
            and how a student found them, enrolled and learned. I designed the UX
            and UI for every screen those flows ran through.
          </p>
          </div>

          <div className="case-study-section">
            <h2 id="cf-school">Custom online school</h2>
            <p>A teacher set up their school in a few steps: a name, a slogan and an address, then a logo, a cover image and one of eight colour schemes.</p>
          </div>

          <div className="case-study-section">
            <h2 id="cf-builder">Online course builder</h2>
            <p>Courses were built in sections and lessons, with a live view of the course page while you edited it, and room for a presentation video and student testimonials.</p>
            <MacFrame name="coursify-builder" label="Building a course page: sections, lessons, a presentation video and testimonials, previewed live" />
          </div>

          <div className="case-study-section">
            <h2 id="cf-student">Student area</h2>
            <p>Students got a dashboard of their courses and progress, and a focused area to follow the lessons and ask questions, all in the school&rsquo;s own logo and colours.</p>
            <MacFrame name="coursify-student" label="The student area: a course dashboard with progress, and a lesson with questions" />
          </div>

          <div className="case-study-section">
            <h2 id="cf-brand">The brand</h2>
          <p>
            I also designed the brand, it started from a sketch of a person
            broadcasting concentric rings, on the idea that knowledge travels like
            an electromagnetic wave.
          </p>
          <p>
            That sketch became the logo: a C drawn as four nested arcs radiating
            from a centre, so the letter and the transmission are the same shape.
            The construction was geometric rather than decorative, built on
            overlapping circles and axes.
          </p>
          </div>
        </div>
      </section>
    </CaseStudyLayout>
  );
}
