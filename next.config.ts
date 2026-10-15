import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export for GitHub Pages (no Node server at runtime).
  output: "export",
  // Emit /work.html instead of /work/index.html so every existing inbound
  // URL keeps working after cutover (GitHub Pages also serves /work from
  // work.html, so clean internal links work too).
  trailingSlash: false,
  turbopack: {
    // Pin the root to this folder. In a git worktree under .claude/worktrees
    // there is a second package-lock.json further up (the main checkout's),
    // and Turbopack would pick that as the root, then stop seeing edits to
    // the worktree's files and keep serving stale CSS.
    root: path.resolve(__dirname),
  },
  experimental: {
    // Page-to-page crossfades via React's <ViewTransition> (see
    // components/page-transition.tsx).
    viewTransition: true,
  },
  images: {
    // Pages can't run the Next image optimizer; serve images as-is.
    unoptimized: true,
  },
};

export default nextConfig;
