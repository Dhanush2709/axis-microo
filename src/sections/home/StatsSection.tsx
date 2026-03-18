"use client";

import * as React from "react";

import { animate, motion } from "framer-motion";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { companyStats } from "@/content/data/company";
import { useInView } from "@/hooks/useInView";

export function StatsSection() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <Container maxWidth={false} sx={{ py: 10, bgcolor: "primary.dark" }}>
      <Container maxWidth="lg" ref={ref}>
        <Grid container spacing={2.5}>
          {companyStats.map((stat, index) => (
            <Grid key={stat.label} item xs={6} md={4} lg={2}>
              <StatItem stat={stat} start={isInView} delay={index * 0.06} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Container>
  );
}

function StatItem({
  stat,
  start,
  delay,
}: {
  stat: (typeof companyStats)[number];
  start: boolean;
  delay: number;
}) {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    if (!start) return;
    const controls = animate(0, stat.value, {
      duration: 1,
      delay,
      ease: "easeOut",
      onUpdate: (v) => {
        const next = stat.decimal ? Number(v.toFixed(stat.decimal)) : Math.round(v);
        setValue(next);
      },
    });
    return () => controls.stop();
  }, [delay, start, stat.decimal, stat.value]);

  return (
    <Paper
      component={motion.div}
      initial={{ opacity: 0, y: 16 }}
      animate={start ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ duration: 0.45, delay }}
      sx={{
        bgcolor: "transparent",
        border: "1px solid rgba(255,255,255,0.16)",
        p: 2.25,
        textAlign: "center",
        borderRadius: 0,
      }}
    >
      <Stack spacing={1} alignItems="center">
        <Typography
          sx={{
            color: "#FFFFFF",
            fontFamily: "var(--font-barlow-condensed)",
            fontWeight: 700,
            fontSize: { xs: "2.2rem", md: "3rem" },
            lineHeight: 1,
          }}
        >
          {value}
          <Typography component="span" sx={{ color: "secondary.main", fontFamily: "inherit", ml: 0.25 }}>
            {stat.suffix}
          </Typography>
        </Typography>
        <Stack sx={{ width: 32, height: 2, bgcolor: "secondary.main" }} />
        <Typography
          sx={{
            color: "rgba(255,255,255,0.7)",
            fontSize: "0.78rem",
            textTransform: "uppercase",
            letterSpacing: "0.06em",
          }}
        >
          {stat.label}
        </Typography>
      </Stack>
    </Paper>
  );
}

