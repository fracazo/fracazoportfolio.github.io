import { ExternalLinkIcon } from "@/components/icons";
import { WorkStub } from "@/components/work-stub";

/**
 * Coursify.me. The description is the product's own, and the numbers are
 * Alex's. What he did on it is still outstanding, so the stub says what the
 * thing is and stops rather than filling the gap.
 */
export function CoursifyStub() {
  return (
    <WorkStub
      eyebrow="Co-founded · 2012–2014"
      title="Coursify.me"
      intro="An online course platform: create courses, tutorials and ebooks, and sell them."
    >
      <p>
        Make money selling online courses, tutorials and ebooks. The platform
        lets you easily create online courses and sell them.
      </p>
      <p>
        Co-founded in 2012 and grown to 50,000 students. It is still running
        today.
      </p>
      <p className="inline-block rounded border border-dashed border-border px-2 py-1 font-mono text-[12px] text-text-tertiary">
        TODO: what you actually did on it. Founder is a role, not a
        contribution, and this is the entry that makes the Knowledge products
        group a ten-year story rather than a GitLab one.
      </p>
      <p>
        <a href="https://coursify.me/" target="_blank" rel="noopener">
          coursify.me
          <ExternalLinkIcon size={12} className="external-mark" />
        </a>
      </p>
    </WorkStub>
  );
}
