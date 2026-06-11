import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      // Long-form content keeps raw quotes/apostrophes so the JSX stays
      // diffable against the original HTML it was ported from.
      "react/no-unescaped-entities": "off",
    },
  },
  {
    // Pages ported 1:1 from the static site keep plain <a> internal links
    // (full-page navigation, same behaviour as the old site).
    files: ["src/app/case-studies/**", "src/app/information/**"],
    rules: {
      "@next/next/no-html-link-for-pages": "off",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // One-shot migration helper scripts
    "scripts/**",
  ]),
]);

export default eslintConfig;
