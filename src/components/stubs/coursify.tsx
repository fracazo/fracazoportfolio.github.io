import { CaseStudyLayout } from "@/components/case-study-layout";

/**
 * Coursify.me. Product description is its own; the brand work and the
 * concentric-waves origin come from Alex's own study documents.
 * The three product areas and their screen recordings come from the
 * coursify.me home page (the GIFs, re-encoded as video).
 */
export function CoursifyStub() {
  return (
    <CaseStudyLayout
      icon={
        // eslint-disable-next-line @next/next/no-img-element
        <img className="cs-icon-mark" src="/images/coursify-mark.png" width={32} height={59} alt="" />
      }
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
          <video autoPlay muted loop playsInline preload="metadata" poster="/images/coursify-school-poster.jpg" aria-label="Setting up a school: name, slogan and address, logo, cover image and colour scheme">
            <source src="/videos/coursify-school.mp4" type="video/mp4" />
          </video>
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
            <figure className="cs-small-video">
              <video autoPlay muted loop playsInline preload="metadata" poster="/images/coursify-builder-poster.jpg" aria-label="Building a course page: sections, lessons, a presentation video and testimonials, previewed live">
                <source src="/videos/coursify-builder.mp4" type="video/mp4" />
              </video>
            </figure>
          </div>

          <div className="case-study-section">
            <h2 id="cf-student">Student area</h2>
            <p>Students got a dashboard of their courses and progress, and a focused area to follow the lessons and ask questions, all in the school&rsquo;s own logo and colours.</p>
            <figure className="cs-small-video">
              <video autoPlay muted loop playsInline preload="metadata" poster="/images/coursify-student-poster.jpg" aria-label="The student area: a course dashboard with progress, and a lesson with questions">
                <source src="/videos/coursify-student.mp4" type="video/mp4" />
              </video>
            </figure>
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
