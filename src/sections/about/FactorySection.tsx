"use client";

import * as React from "react";
import Image from "next/image";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Dialog from "@mui/material/Dialog";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const images = [
  "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=60",
  "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1200&q=60",
  "https://images.unsplash.com/photo-1581090700227-1e8fe6f50d3b?auto=format&fit=crop&w=1200&q=60",
  "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=60",
];

const specs = [
  { label: "Factory Area", value: "15,000 sq ft" },
  { label: "Production Machines", value: "45+" },
  { label: "Shifts", value: "2 (16 hours/day)" },
  { label: "Locations", value: "Pune, Maharashtra" },
];

export function FactorySection() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <Box sx={{ py: 10, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <Stack spacing={1.2} sx={{ mb: 3 }}>
          <Typography variant="h3">Factory & Infrastructure</Typography>
        </Stack>

        <Grid container spacing={2.2}>
          {images.map((src, index) => (
            <Grid key={src} item xs={12} md={6}>
              <Box sx={{ cursor: "zoom-in" }} onClick={() => setOpenIndex(index)}>
                <Image
                  src={src}
                  alt={`Factory floor ${index + 1}`}
                  width={1000}
                  height={640}
                  style={{ width: "100%", height: 260, objectFit: "cover" }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={2} sx={{ mt: 1 }}>
          {specs.map((spec) => (
            <Grid key={spec.label} item xs={6} md={3}>
              <Typography sx={{ fontWeight: 700 }}>{spec.value}</Typography>
              <Typography variant="body2" color="text.secondary">
                {spec.label}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Dialog open={openIndex !== null} onClose={() => setOpenIndex(null)} maxWidth="lg">
        {openIndex !== null ? (
          <Image
            src={images[openIndex]}
            alt={`Factory floor zoom ${openIndex + 1}`}
            width={1600}
            height={1000}
            style={{ width: "100%", height: "auto", objectFit: "contain" }}
          />
        ) : null}
      </Dialog>
    </Box>
  );
}

