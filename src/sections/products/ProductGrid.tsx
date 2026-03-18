import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import type { ProductFrontmatter } from "@/types/product.types";
import { ProductCard } from "@/sections/products/ProductCard";

export function ProductGrid({ products }: { products: ProductFrontmatter[] }) {
  if (!products.length) {
    return (
      <Typography color="text.secondary" sx={{ py: 6 }}>
        No products match the selected filters.
      </Typography>
    );
  }

  return (
    <Grid container spacing={2.5}>
      {products.map((product) => (
        <Grid key={product.slug} item xs={12} md={6} lg={4}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
}

