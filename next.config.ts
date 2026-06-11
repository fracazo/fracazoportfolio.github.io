import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export for GitHub Pages (no Node server at runtime).
  output: "export",
  // Emit /work.html instead of /work/index.html so every existing inbound
  // URL keeps working after cutover (GitHub Pages also serves /work from
  // work.html, so clean internal links work too).
  trailingSlash: false,
  images: {
    // Pages can't run the Next image optimizer; serve images as-is.
    unoptimized: true,
  },
};

export default nextConfig;
