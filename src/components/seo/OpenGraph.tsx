import type { Metadata } from "next";

export function OpenGraph({
  title,
  description,
  url,
  image = "/og-default.jpg",
}: {
  title: string;
  description: string;
  url: string;
  image?: string;
}): Metadata["openGraph"] {
  return {
    title,
    description,
    url,
    type: "website",
    images: [{ url: image, width: 1200, height: 630, alt: title }],
  };
}
