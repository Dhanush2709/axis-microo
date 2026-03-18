import type { Metadata } from "next";

export { QualityPage as default } from "@sections/quality";

import { siteConfig } from "@/content/config/site";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Quality & Certifications";
  const description = "Explore Axis Micro certifications, quality checkpoints, and testing capabilities.";
  return {
    title,
    description,
    keywords: ["ISO 9001", "IATF 16949", "precision quality control", "CMM inspection"],
    alternates: { canonical: `${siteConfig.url}/quality` },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/quality`,
      images: ["/og-default.jpg"],
    },
    twitter: { card: "summary_large_image", images: ["/og-default.jpg"] },
  };
}

