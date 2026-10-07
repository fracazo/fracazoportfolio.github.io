import type { SideProject } from "@/content/work";
import { ExternalLinkIcon } from "./icons";

/**
 * The smaller things I've built, as one scannable list. Each row is one
 * link: the title and its one line on the leading edge, what it is and
 * where the link goes on the trailing edge, so the eye can run down either
 * column. Same hover pill and title weight as the work rows above, so the
 * list reads as part of the same page rather than a footnote.
 *
 * Narrow columns drop the trailing column under the description as one
 * meta line.
 */
export function SideProjectList({ items }: { items: SideProject[] }) {
  return (
    <ul role="list" className="m-0 flex list-none flex-col gap-1 p-0">
      {items.map((project) => {
        const link = project.links[0];
        // "npm package · 2026": the year is already the section's, so only
        // the kind of thing is shown.
        const kind = project.meta.split("·")[0].trim();
        return (
          <li key={project.title}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener"
              className="group -mx-5 grid grid-cols-1 rounded-card px-5 py-4 no-underline transition-colors duration-200 hover:bg-panel-2 hover:no-underline @min-[600px]:grid-cols-[minmax(0,1fr)_11rem] @min-[600px]:gap-x-8"
            >
              <span className="min-w-0">
                <span className="block text-subhead-sm font-semibold text-text transition-colors duration-200 group-hover:text-brand">
                  {project.title}
                </span>
                <span className="mt-1 block text-body leading-[1.3] text-text-body">
                  {project.description}
                </span>
              </span>
              {/* Trailing column. Top-aligned with the title, set on its
                  baseline by matching the title's line box. */}
              <span className="mt-2 flex items-baseline gap-3 text-meta text-muted @min-[600px]:mt-0 @min-[600px]:flex-col @min-[600px]:items-end @min-[600px]:gap-0.5 @min-[600px]:pt-[0.2em] @min-[600px]:text-right">
                <span>{kind}</span>
                <span className="inline-flex items-center gap-1 transition-colors duration-200 group-hover:text-brand">
                  {link.label}
                  <span className="sr-only"> (opens in a new tab)</span>
                  <ExternalLinkIcon
                    size={12}
                    className="opacity-70 transition-transform duration-200 group-hover:translate-x-[1.5px] group-hover:-translate-y-[1.5px] motion-reduce:transition-none"
                  />
                </span>
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
