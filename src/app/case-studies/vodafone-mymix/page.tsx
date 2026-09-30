import type { Metadata } from "next";
import { CaseStudyShell } from "@/components/case-study-shell";
import { VodafoneMymixContent } from "@/components/case-studies/vodafone-mymix";

const title = "Letting Prepaid Customers Design Their Own Recharge - Alex Fracazo";
const description =
  "Two prototypes, one user test: how Vodafone MyMix let prepaid customers build their own recharge in four taps.";

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

export default function VodafoneMymix() {
  return (
    <CaseStudyShell>
      <VodafoneMymixContent
        breadcrumb={
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span className="breadcrumb-sep"> &gt; </span>
            <span>MyMix</span>
          </nav>
        }
      />
    </CaseStudyShell>
  );
}
