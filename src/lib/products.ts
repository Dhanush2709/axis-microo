import "server-only";

import fs from "node:fs/promises";
import path from "node:path";

import matter from "gray-matter";

import { contentPath } from "@/lib/mdx";
import type { ProductCategory, ProductFrontmatter, ProductWithContent } from "@/types/product.types";

const PRODUCTS_DIR = contentPath("products");

function toArray(value: unknown): string[] {
  return Array.isArray(value) ? value.map(String) : [];
}

function toDateValue(value: string) {
  const t = new Date(value).getTime();
  return Number.isFinite(t) ? t : 0;
}

function parseFrontmatter(data: Record<string, unknown>, slug: string): ProductFrontmatter {
  return {
    title: String(data.title ?? slug),
    slug,
    category: String(data.category ?? "precision") as ProductCategory,
    industries: toArray(data.industries),
    thumbnail: String(data.thumbnail ?? `/images/products/${slug}/thumb.jpg`),
    images: toArray(data.images),
    partNumbers: toArray(data.partNumbers),
    materials: toArray(data.materials),
    tolerances: String(data.tolerances ?? "±0.01mm"),
    finishes: toArray(data.finishes),
    standards: toArray(data.standards),
    minOrderQty: Number(data.minOrderQty ?? 100),
    leadTimeDays: Number(data.leadTimeDays ?? 14),
    certFile: data.certFile ? String(data.certFile) : null,
    featured: Boolean(data.featured ?? false),
    publishedAt: String(data.publishedAt ?? new Date().toISOString()),
    seoTitle: String(data.seoTitle ?? data.title ?? slug),
    seoDesc: String(data.seoDesc ?? ""),
  };
}

async function readProductFile(fileName: string): Promise<ProductWithContent> {
  const slug = fileName.replace(/\.mdx$/, "");
  const fullPath = path.join(PRODUCTS_DIR, fileName);
  const raw = await fs.readFile(fullPath, "utf8");
  const parsed = matter(raw);
  return {
    meta: parseFrontmatter(parsed.data as Record<string, unknown>, slug),
    content: parsed.content,
  };
}

export async function getProductSlugs(): Promise<string[]> {
  const files = await fs.readdir(PRODUCTS_DIR);
  return files.filter((file) => file.endsWith(".mdx")).map((file) => file.replace(/\.mdx$/, ""));
}

export async function getAllProducts(): Promise<ProductFrontmatter[]> {
  const files = await fs.readdir(PRODUCTS_DIR);
  const items = await Promise.all(files.filter((file) => file.endsWith(".mdx")).map(readProductFile));
  return items.map((item) => item.meta).sort((a, b) => toDateValue(b.publishedAt) - toDateValue(a.publishedAt));
}

export async function getProductBySlug(slug: string): Promise<ProductWithContent> {
  const fullPath = path.join(PRODUCTS_DIR, `${slug}.mdx`);
  const raw = await fs.readFile(fullPath, "utf8");
  const parsed = matter(raw);
  return {
    meta: parseFrontmatter(parsed.data as Record<string, unknown>, slug),
    content: parsed.content,
  };
}

export async function getProductsByCategory(category: ProductCategory): Promise<ProductFrontmatter[]> {
  const products = await getAllProducts();
  return products.filter((product) => product.category === category);
}

export async function getFeaturedProducts(): Promise<ProductFrontmatter[]> {
  const products = await getAllProducts();
  return products.filter((product) => product.featured);
}

export async function getRelatedProducts(
  currentSlug: string,
  industry: string,
): Promise<ProductFrontmatter[]> {
  const products = await getAllProducts();
  const sameIndustry = products.filter(
    (product) => product.slug !== currentSlug && product.industries.includes(industry),
  );

  if (sameIndustry.length >= 3) return sameIndustry.slice(0, 3);

  const fallback = products.filter((product) => product.slug !== currentSlug);
  return [...sameIndustry, ...fallback].slice(0, 3);
}

