"use client";

import { useRouter, useSearchParams } from "next/navigation";
import * as React from "react";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import InputAdornment from "@mui/material/InputAdornment";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export function ProductsHero() {
  const params = useSearchParams();
  const router = useRouter();
  const [query, setQuery] = React.useState(params.get("q") ?? "");

  React.useEffect(() => {
    setQuery(params.get("q") ?? "");
  }, [params]);

  const onQueryChange = (value: string) => {
    setQuery(value);
    const next = new URLSearchParams(params.toString());
    if (value.trim()) next.set("q", value.trim());
    else next.delete("q");
    router.replace(`/products?${next.toString()}`, { scroll: false });
  };

  return (
    <Box
      sx={{
        py: { xs: 8, md: 10 },
        bgcolor: "primary.dark",
        color: "#FFFFFF",
        backgroundImage:
          "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
        backgroundSize: "16px 16px",
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={2.2}>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Products" }]} />
          <Typography sx={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 700, fontSize: { xs: "2.1rem", md: "3.2rem" } }}>
            Our Product Catalog
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.84)", maxWidth: 760 }}>
            Browse precision, hydraulic, pneumatic, and automotive components designed for
            reliability, repeatability, and scale.
          </Typography>

          <TextField
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Search by product name..."
            sx={{ maxWidth: 480, bgcolor: "#FFFFFF", borderRadius: 0.5 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchRoundedIcon />
                </InputAdornment>
              ),
            }}
          />
        </Stack>
      </Container>
    </Box>
  );
}

