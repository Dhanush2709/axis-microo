"use client";

import Link from "next/link";
import Image from "next/image";
import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";

import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";

import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { ShareButtons } from "@/components/ui/ShareButtons";
import { siteConfig } from "@/content/config/site";
import type { ProductFrontmatter } from "@/types/product.types";
import { ProductCard } from "@/sections/products/ProductCard";

export function ProductDetailSections({
  product,
  relatedProducts,
  children,
}: {
  product: ProductFrontmatter;
  relatedProducts: ProductFrontmatter[];
  children: React.ReactNode;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [active, setActive] = React.useState(0);

  React.useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setActive(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const specs: Array<{ label: string; value: React.ReactNode }> = [
    { label: "Part Numbers", value: product.partNumbers.join(", ") || "-" },
    { label: "Materials", value: product.materials.join(", ") || "-" },
    { label: "Tolerances", value: product.tolerances },
    { label: "Finishes", value: product.finishes.join(", ") || "-" },
    { label: "Standards", value: product.standards.join(", ") || "-" },
    { label: "Min Order", value: `${product.minOrderQty} units` },
    { label: "Lead Time", value: `${product.leadTimeDays} days` },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={7}>
          <Box sx={{ overflow: "hidden" }} ref={emblaRef}>
            <Box sx={{ display: "flex" }}>
              {product.images.map((img, index) => (
                <Box key={`${img}-${index}`} sx={{ minWidth: "100%", position: "relative", overflow: "hidden" }}>
                  <Image
                    src={img}
                    alt={`${product.title} ${index + 1}`}
                    width={960}
                    height={620}
                    style={{ width: "100%", height: "auto", objectFit: "cover", transition: "transform 0.3s ease" }}
                  />
                </Box>
              ))}
            </Box>
          </Box>

          <Stack direction="row" spacing={1} sx={{ mt: 1.2 }}>
            {product.images.map((img, index) => (
              <Box
                key={`${img}-thumb-${index}`}
                sx={{
                  border: index === active ? "2px solid" : "1px solid",
                  borderColor: index === active ? "secondary.main" : "divider",
                  p: 0.3,
                  cursor: "pointer",
                }}
                onClick={() => emblaApi?.scrollTo(index)}
              >
                <Image src={img} alt={`${product.title} thumb ${index + 1}`} width={90} height={70} style={{ objectFit: "cover", width: 90, height: 70 }} />
              </Box>
            ))}
          </Stack>
        </Grid>

        <Grid item xs={12} md={5}>
          <Stack spacing={2}>
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Products", href: "/products" },
                { label: product.title },
              ]}
            />
            <Stack direction="row" spacing={1} flexWrap="wrap">
              <Chip label={product.category.toUpperCase()} color="secondary" size="small" />
              {product.industries.map((industry) => (
                <Chip key={industry} label={industry} size="small" />
              ))}
            </Stack>
            <Typography sx={{ fontFamily: "var(--font-barlow-condensed)", fontSize: { xs: "2rem", md: "3rem" }, lineHeight: 1, fontWeight: 700 }}>
              {product.title}
            </Typography>

            <Table size="small">
              <TableBody>
                {specs.map((row, index) => (
                  <TableRow key={row.label} sx={{ bgcolor: index % 2 ? "transparent" : "rgba(26,35,126,0.04)" }}>
                    <TableCell sx={{ fontWeight: 700 }}>{row.label}</TableCell>
                    <TableCell sx={{ fontFamily: row.label === "Part Numbers" ? "var(--font-jetbrains-mono)" : "inherit" }}>
                      {row.value}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            {product.certFile ? (
              <Button
                component={Link}
                href={product.certFile}
                variant="outlined"
                startIcon={<DescriptionOutlinedIcon />}
                sx={{ width: "fit-content" }}
              >
                Product Datasheet
              </Button>
            ) : null}

            <Accordion defaultExpanded>
              <AccordionSummary>Request a Quote for This Product</AccordionSummary>
              <AccordionDetails>
                <InquiryForm product={product} />
              </AccordionDetails>
            </Accordion>

            <Stack spacing={0.8}>
              <Typography sx={{ fontWeight: 700 }}>Share This Product</Typography>
              <ShareButtons url={`${siteConfig.url}/products/${product.slug}`} title={product.title} />
            </Stack>
          </Stack>
        </Grid>
      </Grid>

      <Divider sx={{ my: 5 }} />

      <Stack spacing={2.2} sx={{ mb: 5 }}>
        <Typography variant="h4">Product Description</Typography>
        <Box sx={{ "& h2": { mt: 2 }, "& p": { color: "text.secondary" } }}>{children}</Box>
      </Stack>

      <Stack spacing={2}>
        <Typography variant="h4">Related Products</Typography>
        <Grid container spacing={2.5}>
          {relatedProducts.map((item) => (
            <Grid key={item.slug} item xs={12} md={4}>
              <ProductCard product={item} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  );
}

