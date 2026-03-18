"use client";

import Link from "next/link";
import * as React from "react";
import Image from "next/image";

import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";

import { SectionHeader } from "@/components/ui/SectionHeader";

type Category = "all" | "precision" | "hydraulic" | "pneumatic" | "automotive";

const products = [
  {
    name: "Precision Gears",
    slug: "precision-gears",
    category: "precision" as const,
    summary: "Module-matched gear sets with tight tolerance and low runout.",
    image:
      "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=900&q=60",
  },
  {
    name: "Hydraulic Cylinders",
    slug: "hydraulic-cylinders",
    category: "hydraulic" as const,
    summary: "High-pressure ready cylinder components and precision bores.",
    image:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=900&q=60",
  },
  {
    name: "Pneumatic Valves",
    slug: "pneumatic-valves",
    category: "pneumatic" as const,
    summary: "Fast-response valve components for pneumatic control systems.",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=60",
  },
  {
    name: "Automotive Brackets",
    slug: "automotive-brackets",
    category: "automotive" as const,
    summary: "Vibration-resistant structural brackets for vehicle assemblies.",
    image:
      "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=900&q=60",
  },
  {
    name: "Valve Bodies",
    slug: "hydraulic-cylinders",
    category: "hydraulic" as const,
    summary: "Machined valve body geometries with excellent sealing performance.",
    image:
      "https://images.unsplash.com/photo-1581093458791-9d15482f9fbb?auto=format&fit=crop&w=900&q=60",
  },
  {
    name: "Transmission Hubs",
    slug: "precision-gears",
    category: "automotive" as const,
    summary: "Hardened hubs for drivetrain programs requiring repeatability.",
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=900&q=60",
  },
];

const tabs: Array<{ label: string; value: Category }> = [
  { label: "All", value: "all" },
  { label: "Precision Components", value: "precision" },
  { label: "Hydraulic", value: "hydraulic" },
  { label: "Pneumatic", value: "pneumatic" },
  { label: "Automotive", value: "automotive" },
];

export function ProductsShowcase() {
  const [activeTab, setActiveTab] = React.useState<Category>("all");
  const visible = products.filter((product) => activeTab === "all" || product.category === activeTab);

  return (
    <Box sx={{ py: 15, bgcolor: "background.paper" }}>
      <Container maxWidth="lg">
        <SectionHeader eyebrow="Our Products" title="Precision Components Built for Demanding Applications" />

        <Tabs
          value={activeTab}
          onChange={(_, value: Category) => setActiveTab(value)}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            mb: 4,
            "& .MuiTab-root": { textTransform: "none", fontWeight: 600 },
            "& .MuiTabs-indicator": { bgcolor: "secondary.main", height: 3 },
          }}
        >
          {tabs.map((tab) => (
            <Tab key={tab.value} label={tab.label} value={tab.value} sx={{ "&.Mui-selected": { color: "secondary.main" } }} />
          ))}
        </Tabs>

        <Grid container spacing={2.5}>
          {visible.slice(0, 6).map((product) => (
            <Grid key={`${product.slug}-${product.name}`} item xs={12} md={6} lg={4}>
              <Card
                sx={{
                  overflow: "hidden",
                  borderRadius: 1,
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  "&:hover": { transform: "scale(1.01)", boxShadow: 8 },
                }}
              >
                <Box sx={{ position: "relative" }}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={640}
                    height={300}
                    style={{ width: "100%", height: 300, objectFit: "cover" }}
                  />
                  <Chip
                    label={product.category.toUpperCase()}
                    size="small"
                    sx={{ position: "absolute", left: 12, top: 12, bgcolor: "secondary.main", color: "#FFFFFF" }}
                  />
                </Box>
                <CardContent>
                  <Typography sx={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 700, fontSize: "1.25rem" }}>
                    {product.name}
                  </Typography>
                  <Typography color="text.secondary" sx={{ mt: 0.5, minHeight: 46 }}>
                    {product.summary}
                  </Typography>
                  <Typography
                    component={Link}
                    href={`/products/${product.slug}`}
                    sx={{ mt: 1.5, display: "inline-flex", alignItems: "center", gap: 0.5, textDecoration: "none", color: "primary.main", fontWeight: 600 }}
                  >
                    View Details <ArrowOutwardRoundedIcon sx={{ fontSize: 17 }} />
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Stack alignItems="center" sx={{ mt: 5 }}>
          <Button component={Link} href="/products" variant="contained" color="secondary" size="large">
            View All Products
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}

