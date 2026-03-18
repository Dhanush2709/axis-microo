import "server-only";

import fs from "node:fs/promises";
import path from "node:path";

import matter from "gray-matter";

import { contentPath } from "@/lib/mdx";
import type { BlogFrontmatter, BlogPost } from "@/types/blog.types";

const BLOG_DIR = contentPath("blog");

function toArray(value: unknown): string[] {
  return Array.isArray(value) ? value.map(String) : [];
}

function parseFrontmatter(data: Record<string, unknown>, slug: string): BlogFrontmatter {
  return {
    title: String(data.title ?? slug),
    slug: String(data.slug ?? slug),
    excerpt: String(data.excerpt ?? ""),
    coverImage: String(data.coverImage ?? "/og-default.jpg"),
    author: {
      name: String((data.author as { name?: string } | undefined)?.name ?? "Axis Micro Team"),
      avatar: String((data.author as { avatar?: string } | undefined)?.avatar ?? "/images/team/.gitkeep"),
      role: String((data.author as { role?: string } | undefined)?.role ?? "Engineering"),
    },
    publishedAt: String(data.publishedAt ?? new Date().toISOString()),
    updatedAt: data.updatedAt ? String(data.updatedAt) : undefined,
    readingTime: String(data.readingTime ?? "5 min read"),
    tags: toArray(data.tags),
    category: String(data.category ?? "Engineering"),
    featured: Boolean(data.featured ?? false),
    seoTitle: String(data.seoTitle ?? data.title ?? slug),
    seoDesc: String(data.seoDesc ?? data.excerpt ?? ""),
  };
}

async function readPostFile(fileName: string): Promise<BlogPost> {
  const slug = fileName.replace(/\.mdx$/, "");
  const fullPath = path.join(BLOG_DIR, fileName);
  const raw = await fs.readFile(fullPath, "utf8");
  const parsed = matter(raw);
  return {
    meta: parseFrontmatter(parsed.data as Record<string, unknown>, slug),
    content: parsed.content,
  };
}

export async function getBlogSlugs(): Promise<string[]> {
  const files = await fs.readdir(BLOG_DIR);
  return files.filter((file) => file.endsWith(".mdx")).map((file) => file.replace(/\.mdx$/, ""));
}

export async function getAllPosts(): Promise<BlogFrontmatter[]> {
  const files = await fs.readdir(BLOG_DIR);
  const posts = await Promise.all(files.filter((f) => f.endsWith(".mdx")).map(readPostFile));
  return posts
    .map((post) => post.meta)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export async function getPostBySlug(slug: string): Promise<BlogPost> {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  const raw = await fs.readFile(filePath, "utf8");
  const parsed = matter(raw);
  return {
    meta: parseFrontmatter(parsed.data as Record<string, unknown>, slug),
    content: parsed.content,
  };
}

export async function getFeaturedPosts(): Promise<BlogFrontmatter[]> {
  const posts = await getAllPosts();
  return posts.filter((post) => post.featured);
}

export async function getRelatedPosts(currentSlug: string, tags: string[]): Promise<BlogFrontmatter[]> {
  const posts = await getAllPosts();
  const related = posts.filter(
    (post) => post.slug !== currentSlug && post.tags.some((tag) => tags.includes(tag)),
  );
  if (related.length >= 3) return related.slice(0, 3);
  const fallback = posts.filter((post) => post.slug !== currentSlug);
  return [...related, ...fallback].slice(0, 3);
}

export async function getPostsByTag(tag: string): Promise<BlogFrontmatter[]> {
  const posts = await getAllPosts();
  return posts.filter((post) => post.tags.includes(tag));
}

