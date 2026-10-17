"use client";

import { useEffect, useRef, useState } from "react";

/**
 * The "Recent pages deployments" block from the GitLab Pages overview,
 * rebuilt in HTML from the shipped screenshots so it can be shown crisp and
 * changed. `shipped` is the design as it went live (five stacked lines per
 * row); `compact` is what Alex would change now (two lines per row).
 *
 * It renders at GitLab's own size (894px wide, Pajamas tokens, GitLab Sans)
 * and scales down to fit its column like a screenshot would, so type and
 * spacing keep GitLab's proportions at any width. Light only, like the
 * product screens it sits next to.
 */

export type MockDeployment = {
  name: string;
  path: string;
  job: number;
  files: string;
  author: string;
  ago: string;
  expires: string;
};

const NATIVE_WIDTH = 894;

const SuccessIcon = () => (
  <svg viewBox="0 0 14 14" width="12" height="12" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M0 7a7 7 0 1114 0A7 7 0 010 7zm6.278.697L5.045 6.464a.296.296 0 00-.42-.002l-.613.614a.298.298 0 00.002.42l1.91 1.909a.5.5 0 00.703.005l.265-.265L9.997 6.04a.291.291 0 00-.009-.408l-.614-.614a.29.29 0 00-.408-.009L6.278 7.697z"
    />
  </svg>
);

const DeploymentsIcon = () => (
  <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M3.75 1a.75.75 0 000 1.5h6.5a3.25 3.25 0 013.25 3.25V9.5h-.75a.75.75 0 000 1.5H15V5.75A4.75 4.75 0 0010.25 1h-6.5zM13 14.25a.75.75 0 01-.75.75h-6.5A4.75 4.75 0 011 10.25V5h2.25a.75.75 0 010 1.5H2.5v3.75a3.25 3.25 0 003.25 3.25h6.5a.75.75 0 01.75.75zM6.22 5.22a.75.75 0 011.06 0l2.25 2.25.53.53-.53.53-2.25 2.25a.75.75 0 11-1.06-1.06L7.94 8 6.22 6.28a.75.75 0 010-1.06z"
    />
  </svg>
);

const FolderIcon = () => (
  <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M1.5 4V2.5h4.697l1 1.5H1.5zM0 4V2a1 1 0 011-1h5.465a1 1 0 01.832.445l1.667 2.5.034.055H15a1 1 0 011 1v8a1 1 0 01-1 1H1a1 1 0 01-1-1V4zm1.5 1.5v7h13v-7h-13z"
    />
  </svg>
);

const TrashIcon = () => (
  <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M5.75 3V1.5h4.5V3h-4.5zm-1.5 0V1a1 1 0 011-1h5.5a1 1 0 011 1v2h2.5a.75.75 0 010 1.5h-.365l-.743 9.653A2 2 0 0111.148 16H4.852a2 2 0 01-1.994-1.847L2.115 4.5H1.75a.75.75 0 010-1.5h2.5zm-.63 1.5h8.76l-.734 9.538a.5.5 0 01-.498.462H4.852a.5.5 0 01-.498-.462L3.62 4.5z"
    />
  </svg>
);

/* The usage ring beside the count: a thin track with the used share drawn. */
const UsageRing = ({ used, total }: { used: number; total: number }) => {
  const r = 5.5;
  const c = 2 * Math.PI * r;
  return (
    <svg viewBox="0 0 14 14" width="14" height="14" aria-hidden="true">
      <circle cx="7" cy="7" r={r} fill="none" stroke="#89888d" strokeWidth="1.5" />
      <circle
        cx="7"
        cy="7"
        r={r}
        fill="none"
        stroke="#1f75cb"
        strokeWidth="1.5"
        strokeDasharray={`${Math.max((used / total) * c, 1.5)} ${c}`}
        transform="rotate(-90 7 7)"
      />
    </svg>
  );
};

function Badge() {
  return (
    <span className="glm-badge">
      <SuccessIcon />
      Active
    </span>
  );
}

/* A span, not an img: the case study's image rules (frames, the before/after
   toggle's hide-the-inactive-image rule) would otherwise catch it. */
function Avatar() {
  return <span className="glm-avatar" aria-hidden="true" />;
}

export function GitlabPagesDeploymentsMock({
  variant,
  deployments,
  used,
  limit = 100,
  showMore = true,
}: {
  variant: "shipped" | "compact";
  deployments: MockDeployment[];
  used: number;
  limit?: number;
  showMore?: boolean;
}) {
  const outer = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);
  const [fit, setFit] = useState<{ scale: number; height: number } | null>(null);

  // Scale the native-size block to the column, and reserve its scaled height
  // so the text after it doesn't overlap.
  useEffect(() => {
    const o = outer.current;
    const i = inner.current;
    if (!o || !i) return;
    const measure = () => {
      const scale = Math.min(1, o.clientWidth / NATIVE_WIDTH);
      setFit({ scale, height: i.offsetHeight * scale });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(o);
    ro.observe(i);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={outer} className="glm-fit" style={fit ? { height: fit.height } : undefined}>
      <div
        ref={inner}
        className={`glm glm--${variant}`}
        style={fit ? { transform: `scale(${fit.scale})` } : undefined}
      >
        <div className="glm-card">
          <div className="glm-head">
            Recent pages deployments
            <span className="glm-count">
              <UsageRing used={used} total={limit} />
              {used}/{limit}
            </span>
          </div>
          <div className="glm-row glm-row--th">
            <div>Name</div>
            <div>Pages deployments</div>
            <div className="glm-actions">Actions</div>
          </div>
          {deployments.map((d) => (
            <div key={d.name} className="glm-row">
              <div>
                <span className="glm-link">{d.name}</span>
              </div>
              {variant === "shipped" ? (
                <div className="glm-stack">
                  <div>
                    <Badge />
                  </div>
                  <span className="glm-link">{d.path}</span>
                  <span className="glm-line">
                    <DeploymentsIcon />
                    <span>
                      Deploy job: <span className="glm-link">{d.job}</span>
                    </span>
                  </span>
                  <span className="glm-line glm-line--tight">
                    <FolderIcon />
                    {d.files}
                  </span>
                  <span className="glm-line glm-line--tight">
                    <Avatar />
                    <span>
                      <span className="glm-link">{d.author}</span> {d.ago}
                    </span>
                  </span>
                </div>
              ) : (
                <div className="glm-pair">
                  <span className="glm-line">
                    <Badge />
                    <span className="glm-link">{d.path}</span>
                  </span>
                  <span className="glm-meta">
                    Deploy job <span className="glm-link">{d.job}</span>
                    <span className="glm-dot">·</span>
                    {d.files}
                    <span className="glm-dot">·</span>
                    <span className="glm-link">{d.author}</span>, {d.ago}
                  </span>
                </div>
              )}
              <div className="glm-actions">
                {variant === "shipped" ? (
                  <>
                    <span className="glm-icon-btn">
                      <TrashIcon />
                    </span>
                    <span className="glm-muted">{d.expires}</span>
                  </>
                ) : (
                  <span className="glm-line">
                    <span className="glm-muted">{d.expires}</span>
                    <span className="glm-icon-btn">
                      <TrashIcon />
                    </span>
                  </span>
                )}
              </div>
            </div>
          ))}
          {showMore && (
            <div className="glm-more">
              <span className="glm-link">Show more pages deployments</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
