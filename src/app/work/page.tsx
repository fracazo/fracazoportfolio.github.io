import type { Metadata } from "next";
import { PanelShell } from "@/components/panel-shell";
import { PlainShell } from "@/components/plain-shell";
import { SiteFooter } from "@/components/site-footer";
import { WorkHistory } from "@/components/work-history";
import { BackToSite } from "@/components/back-to-site";

const title = "Work history - Alex Fracazo";
const description =
  "Every role, newest first, with the case studies from each. Product designer who takes new ideas from zero to one.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: ["/images/opengraph.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/opengraph.jpg"],
  },
};

export default function Work() {
  return (
    <PanelShell>
      <PlainShell wide back={<BackToSite />}>
        <WorkHistory
          footer={
            <div className="mx-auto w-full max-w-home">
              <SiteFooter className="!ml-0" links={null} />
            </div>
          }
        />
      </PlainShell>
    </PanelShell>
  );
}
