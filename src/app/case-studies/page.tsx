import { RedirectTo } from "@/components/redirect-to";

/** There was never an index here; the work history is the index now. */
export default function Page() {
  return <RedirectTo href="/work" />;
}
