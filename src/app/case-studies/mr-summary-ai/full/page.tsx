import { RedirectTo } from "@/components/redirect-to";

/** The study used to sit here behind a summary. It now lives at its own route. */
export default function Page() {
  return <RedirectTo href="/work/mr-summary-ai" />;
}
