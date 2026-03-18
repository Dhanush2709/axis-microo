import Link from "next/link";
import Image from "next/image";

import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import type { ProductFrontmatter } from "@/types/product.types";

export function ProductCard({ product }: { product: ProductFrontmatter }) {
  return (
    <Card sx={{ borderRadius: 0, height: "100%", overflow: "hidden" }}>
      <Box sx={{ position: "relative" }}>
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={700}
          height={300}
          style={{ width: "100%", height: 300, objectFit: "cover" }}
        />
        <Chip
          label={product.category.toUpperCase()}
          size="small"
          sx={{
            position: "absolute",
            top: 12,
            left: 12,
            bgcolor: "secondary.main",
            color: "#FFFFFF",
          }}
        />
      </Box>

      <CardContent>
        <Stack spacing={1.1}>
          <Typography sx={{ fontFamily: "var(--font-barlow-condensed)", fontSize: "1.4rem", fontWeight: 700 }}>
            {product.title}
          </Typography>
          <Typography
            sx={{ fontFamily: "var(--font-jetbrains-mono)", color: "text.secondary", fontSize: "0.82rem" }}
          >
            {product.partNumbers[0] ?? "Part # N/A"}
          </Typography>

          <Stack direction="row" spacing={0.8} flexWrap="wrap">
            {product.materials.slice(0, 3).map((material) => (
              <Chip key={material} label={material} size="small" variant="outlined" />
            ))}
          </Stack>

          <Typography color="text.secondary">Tolerance: {product.tolerances}</Typography>

          <Button
            component={Link}
            href={`/products/${product.slug}`}
            variant="text"
            sx={{ px: 0, justifyContent: "flex-start", width: "fit-content" }}
            endIcon={<ArrowOutwardRoundedIcon />}
          >
            View Details
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}

