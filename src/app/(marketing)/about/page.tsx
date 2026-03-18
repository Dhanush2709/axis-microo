import type { Metadata } from "next";

export { AboutPage as default } from "@sections/about";

import { siteConfig } from "@/content/config/site";

export async function generateMetadata(): Promise<Metadata> {
  const title = "About Axis Micro";
  const description = "Learn Axis Micro's story, milestones, values, leadership, and manufacturing infrastructure.";
  return {
    title,
    description,
    keywords: ["about Axis Micro", "precision engineering company", "Pune manufacturer"],
    alternates: { canonical: `${siteConfig.url}/about` },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/about`,
      images: ["/og-default.jpg"],
    },
    twitter: { card: "summary_large_image", images: ["/og-default.jpg"] },
  };
}

