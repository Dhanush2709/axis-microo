import type { Metadata } from "next";

export { BlogIndexPage as default } from "@sections/blog";

export const revalidate = 3600;

import { siteConfig } from "@/content/config/site";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Engineering Insights";
  const description =
    "Expert insights from Axis Micro on precision manufacturing, quality systems, and surface treatment strategy.";
  return {
    title,
    description,
    keywords: [
      "precision manufacturing blog",
      "cnc tolerance guide",
      "surface treatment insights",
      "quality engineering",
    ],
    alternates: { canonical: `${siteConfig.url}/blog` },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/blog`,
      images: ["/og-default.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-default.jpg"],
    },
  };
}

