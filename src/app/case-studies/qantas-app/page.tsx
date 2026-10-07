import { RedirectTo } from "@/components/redirect-to";

/** Case studies moved under /work, next to the work history they belong to. */
export default function Page() {
  return <RedirectTo href="/work/qantas-app" />;
}
