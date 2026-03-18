"use client";

import { motion } from "framer-motion";

import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { SectionHeader } from "@/components/ui/SectionHeader";

const steps = [
  { title: "Design & Engineering", description: "CAD, tolerance analysis" },
  { title: "Material Selection", description: "Certified raw materials" },
  { title: "Precision Machining", description: "CNC, VMC, turning" },
  { title: "Quality Check", description: "CMM, surface testing" },
  { title: "Surface Treatment", description: "Plating, coating (via Axis Connect)" },
  { title: "Delivery", description: "Packaging, logistics" },
];

export function ManufacturingProcess() {
  return (
    <Box
      sx={{
        py: 15,
        backgroundImage:
          "linear-gradient(to right, rgba(26,35,126,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(26,35,126,0.05) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    >
      <Container maxWidth="lg">
        <SectionHeader
          eyebrow="Our Manufacturing Process"
          title="Controlled Workflow from Concept to Delivery"
        />

        <Box sx={{ position: "relative", "&:before": { content: '""', position: "absolute", left: 0, right: 0, top: { md: 22 }, borderTop: { md: "2px solid #FF6F00" }, display: { xs: "none", md: "block" } } }}>
          <Grid container spacing={2.5}>
            {steps.map((step, index) => {
              const highlighted = index === 4;
              return (
                <Grid key={step.title} item xs={12} md={4} lg={2}>
                  <Stack
                    component={motion.div}
                    initial={{ opacity: 0, x: -18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    spacing={1.3}
                    sx={{
                      height: "100%",
                      border: highlighted ? "2px solid" : "1px solid",
                      borderColor: highlighted ? "secondary.main" : "divider",
                      bgcolor: "background.paper",
                      p: 2,
                    }}
                  >
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: "50%",
                        bgcolor: "primary.main",
                        color: "#FFFFFF",
                        display: "grid",
                        placeItems: "center",
                        fontFamily: "var(--font-barlow-condensed)",
                        fontWeight: 700,
                        fontSize: "1.4rem",
                      }}
                    >
                      {index + 1}
                    </Box>
                    <Typography sx={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 700, fontSize: "1.3rem" }}>
                      {step.title}
                    </Typography>
                    <Typography color="text.secondary">{step.description}</Typography>
                    {highlighted ? (
                      <Chip
                        label="Powered by Axis Connect"
                        size="small"
                        sx={{ width: "fit-content", bgcolor: "rgba(255,111,0,0.12)", color: "secondary.dark" }}
                      />
                    ) : null}
                  </Stack>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

