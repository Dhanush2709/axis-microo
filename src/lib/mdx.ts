import "server-only";

import path from "node:path";
import fs from "node:fs/promises";
import type { MDXComponents } from "mdx/types";

import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

export async function readMdxFile(filePath: string) {
  const raw = await fs.readFile(filePath, "utf8");
  const parsed = matter(raw);
  return { content: parsed.content, data: parsed.data as Record<string, unknown> };
}

export async function compileMdx<TFrontmatter extends Record<string, unknown>>({
  source,
  frontmatter,
  components,
}: {
  source: string;
  frontmatter: TFrontmatter;
  components?: MDXComponents;
}) {
  const compiled = await compileMDX<TFrontmatter>({
    source,
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeSlug,
          [rehypeAutolinkHeadings, { behavior: "wrap" }],
        ],
      },
    },
    components: components ?? {},
  });

  return { ...compiled, frontmatter };
}

export function contentPath(...segments: string[]) {
  return path.join(process.cwd(), "src", "content", ...segments);
}

