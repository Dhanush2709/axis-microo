import dynamic from "next/dynamic";

import { getBlogSlugs } from "@/lib/blog";
import { generateBlogMetadata } from "@/sections/blog";

const BlogPostPage = dynamic(
  () => import("@/sections/blog/BlogPostPage").then((m) => m.BlogPostPage),
);

export const revalidate = 3600;

export async function generateStaticParams() {
  const slugs = await getBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return generateBlogMetadata(slug);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <BlogPostPage slug={slug} />;
}

