export type BlogFrontmatter = {
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string;
  author: { name: string; avatar: string; role: string };
  publishedAt: string;
  updatedAt?: string;
  readingTime: string;
  tags: string[];
  category: string;
  featured: boolean;
  seoTitle: string;
  seoDesc: string;
};

export type BlogPost = {
  meta: BlogFrontmatter;
  content: string;
};

