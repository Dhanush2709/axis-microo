import Link from "next/link";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import type { ProductFrontmatter } from "@/types/product.types";
import { ProductCard } from "@/sections/products/ProductCard";

export function RelatedProducts({
  industry,
  products,
}: {
  industry: string;
  products: ProductFrontmatter[];
}) {
  return (
    <Box sx={{ py: 10, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <Stack direction={{ xs: "column", md: "row" }} justifyContent="space-between" spacing={1.5} sx={{ mb: 3 }}>
          <Typography variant="h3">{industry} Related Products</Typography>
          <Typography
            component={Link}
            href={`/products?industry=${industry.toLowerCase()}`}
            sx={{ textDecoration: "none", color: "secondary.main", fontWeight: 700, alignSelf: "center" }}
          >
            View All {industry} Products →
          </Typography>
        </Stack>

        <Grid container spacing={2.5}>
          {products.slice(0, 3).map((product) => (
            <Grid key={product.slug} item xs={12} md={4}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>

        {industry.toLowerCase() !== "automotive" ? (
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={1.5}
            alignItems={{ md: "center" }}
            justifyContent="space-between"
            sx={{ mt: 4, p: 2.2, border: "1px solid", borderColor: "secondary.main", bgcolor: "rgba(255,111,0,0.04)" }}
          >
            <Typography>
              Surface treatment required? Compare verified plating vendors on Axis Connect.
            </Typography>
            <Button component={Link} href="/axis-connect" variant="contained" color="secondary">
              Explore Axis Connect
            </Button>
          </Stack>
        ) : null}
      </Container>
    </Box>
  );
}

