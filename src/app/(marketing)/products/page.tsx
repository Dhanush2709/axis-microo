import type { Metadata } from "next";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Suspense } from "react";

import { getAllProducts } from "@/lib/products";
import type { ProductCategory } from "@/types/product.types";
import { ProductFilters } from "@/sections/products/ProductFilters";
import { ProductGrid } from "@/sections/products/ProductGrid";
import { ProductsHero } from "@/sections/products/ProductsHero";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Product Catalog",
    description:
      "Browse Axis Micro precision, hydraulic, pneumatic, and automotive components.",
    alternates: { canonical: "/products" },
  };
}

export default async function Page() {
  const all = await getAllProducts();
  const category: ProductCategory | "all" = "all";
  const industry = "all";

  const filtered = all
    .filter((item) => (category === "all" ? true : item.category === category))
    .filter((item) => (industry === "all" ? true : item.industries.includes(industry)))
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  return (
    <>
      <Suspense fallback={null}>
        <ProductsHero />
      </Suspense>
      <Box sx={{ py: 2 }}>
        <Container maxWidth="lg">
          <Suspense fallback={null}>
            <ProductFilters category={category} industry={industry} sort="newest" />
          </Suspense>
          <ProductGrid products={filtered} />
        </Container>
      </Box>
    </>
  );
}
