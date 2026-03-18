export type ProductCategory = "precision" | "hydraulic" | "pneumatic" | "automotive";

export type ProductFrontmatter = {
  title: string;
  slug: string;
  category: ProductCategory;
  industries: string[];
  thumbnail: string;
  images: string[];
  partNumbers: string[];
  materials: string[];
  tolerances: string;
  finishes: string[];
  standards: string[];
  minOrderQty: number;
  leadTimeDays: number;
  certFile: string | null;
  featured: boolean;
  publishedAt: string;
  seoTitle: string;
  seoDesc: string;
};

export type ProductWithContent = {
  meta: ProductFrontmatter;
  content: string;
};

