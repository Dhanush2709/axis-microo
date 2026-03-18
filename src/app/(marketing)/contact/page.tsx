import type { Metadata } from "next";

export { ContactPage as default } from "@sections/contact";

import { siteConfig } from "@/content/config/site";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Contact Axis Micro";
  const description =
    "Contact Axis Micro for product inquiries, custom manufacturing requirements, quality documentation, and Axis Connect support.";
  return {
    title,
    description,
    keywords: [
      "contact precision manufacturing",
      "Axis Micro inquiry",
      "custom component quote",
      "hydraulic pneumatic component supplier",
    ],
    alternates: { canonical: `${siteConfig.url}/contact` },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/contact`,
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

