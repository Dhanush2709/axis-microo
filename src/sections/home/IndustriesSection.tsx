"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import DirectionsCarFilledRoundedIcon from "@mui/icons-material/DirectionsCarFilledRounded";
import AirRoundedIcon from "@mui/icons-material/AirRounded";
import OpacityRoundedIcon from "@mui/icons-material/OpacityRounded";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { industries } from "@/content/data/industries";

const bgBySlug: Record<string, string> = {
  automotive:
    "linear-gradient(180deg, rgba(8,13,31,0.18), rgba(8,13,31,0.74)), url('https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=900&q=60')",
  hydraulic:
    "linear-gradient(180deg, rgba(8,13,31,0.18), rgba(8,13,31,0.74)), url('https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=900&q=60')",
  pneumatic:
    "linear-gradient(180deg, rgba(8,13,31,0.18), rgba(8,13,31,0.74)), url('https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=900&q=60')",
};

const iconBySlug = {
  automotive: <DirectionsCarFilledRoundedIcon sx={{ color: "#FFFFFF", fontSize: 34 }} />,
  hydraulic: <OpacityRoundedIcon sx={{ color: "#FFFFFF", fontSize: 34 }} />,
  pneumatic: <AirRoundedIcon sx={{ color: "#FFFFFF", fontSize: 34 }} />,
} as const;

export function IndustriesSection() {
  return (
    <Box sx={{ py: 15, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <SectionHeader
          eyebrow="INDUSTRIES WE SERVE"
          title="Built for the Industries That Drive the World"
          subtitle="Axis Micro supports mission-critical manufacturing programs with process discipline, quality systems, and repeatable precision."
        />

        <Grid container spacing={2.5}>
          {industries.map((industry) => (
            <Grid key={industry.slug} item xs={12} md={4}>
              <Card
                component={motion.div}
                whileHover={{ scale: 1.02 }}
                sx={{
                  position: "relative",
                  height: 480,
                  borderRadius: 0,
                  border: "2px solid rgba(26,35,126,0.12)",
                  color: "#FFFFFF",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  p: 2.5,
                  overflow: "hidden",
                  backgroundImage: bgBySlug[industry.slug],
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  "&:hover .applications": {
                    opacity: 1,
                    y: 0,
                  },
                  "&:hover::before": {
                    opacity: 0.35,
                  },
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    bgcolor: "rgba(8,13,31,0.55)",
                    transition: "opacity 0.3s ease",
                    opacity: 0.52,
                  },
                }}
              >
                <Stack spacing={1.2} sx={{ position: "relative", zIndex: 1 }}>
                  {iconBySlug[industry.slug]}
                  <Typography sx={{ fontFamily: "var(--font-barlow-condensed)", fontSize: "1.75rem", fontWeight: 700 }}>
                    {industry.title}
                  </Typography>
                  <Typography sx={{ color: "rgba(255,255,255,0.8)", minHeight: 50 }}>
                    {industry.description}
                  </Typography>
                  <Typography component={Link} href={`/industries/${industry.slug}`} sx={{ color: "secondary.main", textDecoration: "none", fontWeight: 600 }}>
                    Learn More →
                  </Typography>
                </Stack>

                <Stack
                  component={motion.div}
                  className="applications"
                  initial={{ opacity: 0, y: 16 }}
                  sx={{ position: "relative", zIndex: 1, mt: 1.5, p: 1.5, bgcolor: "rgba(8,13,31,0.62)", border: "1px solid rgba(255,255,255,0.18)" }}
                >
                  <Typography variant="overline" sx={{ color: "secondary.main" }}>
                    Key Applications
                  </Typography>
                  <Stack spacing={0.7} sx={{ mb: 1.2 }}>
                    {industry.applications.slice(0, 4).map((app) => (
                      <Stack key={app} direction="row" spacing={0.8} alignItems="center">
                        <CheckCircleRoundedIcon sx={{ color: "secondary.main", fontSize: 16 }} />
                        <Typography sx={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.9)" }}>{app}</Typography>
                      </Stack>
                    ))}
                  </Stack>
                  <Button
                    component={Link}
                    href={`/industries/${industry.slug}`}
                    variant="contained"
                    color="secondary"
                    size="small"
                  >
                    View Products for {industry.title}
                  </Button>
                </Stack>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

