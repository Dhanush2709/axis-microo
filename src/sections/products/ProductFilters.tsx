"use client";

import { useRouter, useSearchParams } from "next/navigation";

import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import type { ProductCategory } from "@/types/product.types";

type SortValue = "newest" | "name" | "moq";

export function ProductFilters({
  category,
  industry,
  sort,
}: {
  category: ProductCategory | "all";
  industry: string | "all";
  sort: SortValue;
}) {
  const router = useRouter();
  const params = useSearchParams();

  const updateParam = (key: string, value: string) => {
    const next = new URLSearchParams(params.toString());
    if (!value || value === "all" || (key === "sort" && value === "newest")) next.delete(key);
    else next.set(key, value);
    router.replace(`/products?${next.toString()}`, { scroll: false });
  };

  const activeChips = [
    category !== "all" ? { label: `Category: ${category}`, key: "category" } : null,
    industry !== "all" ? { label: `Industry: ${industry}`, key: "industry" } : null,
    sort !== "newest" ? { label: `Sort: ${sort}`, key: "sort" } : null,
  ].filter(Boolean) as Array<{ label: string; key: string }>;

  return (
    <Box sx={{ py: 4 }}>
      <Stack spacing={2}>
        <ToggleButtonGroup
          value={category}
          exclusive
          onChange={(_, value) => value && updateParam("category", value)}
          size="small"
          sx={{ flexWrap: "wrap" }}
        >
          <ToggleButton value="all">All</ToggleButton>
          <ToggleButton value="precision">Precision Components</ToggleButton>
          <ToggleButton value="hydraulic">Hydraulic</ToggleButton>
          <ToggleButton value="pneumatic">Pneumatic</ToggleButton>
          <ToggleButton value="automotive">Automotive</ToggleButton>
        </ToggleButtonGroup>

        <Stack direction={{ xs: "column", md: "row" }} spacing={1.5}>
          <FormControl size="small" sx={{ minWidth: 220 }}>
            <InputLabel id="industry-filter-label">Industry</InputLabel>
            <Select
              labelId="industry-filter-label"
              value={industry}
              label="Industry"
              onChange={(event) => updateParam("industry", event.target.value)}
            >
              <MenuItem value="all">All Industries</MenuItem>
              <MenuItem value="automotive">Automotive</MenuItem>
              <MenuItem value="hydraulic">Hydraulic</MenuItem>
              <MenuItem value="pneumatic">Pneumatic</MenuItem>
            </Select>
          </FormControl>

          <FormControl size="small" sx={{ minWidth: 220 }}>
            <InputLabel id="sort-filter-label">Sort</InputLabel>
            <Select
              labelId="sort-filter-label"
              value={sort}
              label="Sort"
              onChange={(event) => updateParam("sort", event.target.value)}
            >
              <MenuItem value="newest">Newest</MenuItem>
              <MenuItem value="name">Name A-Z</MenuItem>
              <MenuItem value="moq">Min Order Qty</MenuItem>
            </Select>
          </FormControl>
        </Stack>

        {activeChips.length ? (
          <Stack direction="row" spacing={1} flexWrap="wrap">
            {activeChips.map((chip) => (
              <Chip
                key={chip.label}
                label={chip.label}
                onDelete={() => updateParam(chip.key, "all")}
                deleteIcon={<CancelRoundedIcon />}
              />
            ))}
          </Stack>
        ) : null}
      </Stack>
    </Box>
  );
}

