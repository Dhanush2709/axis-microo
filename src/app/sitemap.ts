import type { MetadataRoute } from "next";

import { siteConfig } from "@/content/config/site";
import { getAllPosts } from "@/lib/blog";
import { getAllProducts } from "@/lib/products";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = siteConfig.url;
  const now = new Date();

  const staticRoutes = [
    "",
    "/about",
    "/products",
    "/industries",
    "/industries/automotive",
    "/industries/hydraulic",
    "/industries/pneumatic",
    "/services",
    "/quality",
    "/axis-connect",
    "/blog",
    "/careers",
    "/contact",
  ];

  const [products, posts] = await Promise.all([getAllProducts(), getAllPosts()]);

  return [
    ...staticRoutes.map((route) => ({
      url: `${base}${route}`,
      lastModified: now,
    })),
    ...products.map((product) => ({
      url: `${base}/products/${product.slug}`,
      lastModified: product.publishedAt ? new Date(product.publishedAt) : now,
    })),
    ...posts.map((post) => ({
      url: `${base}/blog/${post.slug}`,
      lastModified: post.updatedAt ? new Date(post.updatedAt) : new Date(post.publishedAt),
    })),
  ];
}

