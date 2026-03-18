import type { Metadata } from "next";

export { CareersPage as default } from "@sections/careers";

import { siteConfig } from "@/content/config/site";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Careers at Axis Micro";
  const description = "Build your career in precision manufacturing at Axis Micro. Explore roles and apply online.";
  return {
    title,
    description,
    keywords: ["manufacturing careers", "CNC jobs Pune", "quality engineer jobs"],
    alternates: { canonical: `${siteConfig.url}/careers` },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/careers`,
      images: ["/og-default.jpg"],
    },
    twitter: { card: "summary_large_image", images: ["/og-default.jpg"] },
  };
}

