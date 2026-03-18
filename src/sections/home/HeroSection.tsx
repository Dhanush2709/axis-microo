"use client";

import Link from "next/link";
import * as React from "react";

import { motion } from "framer-motion";

import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import PrecisionManufacturingRoundedIcon from "@mui/icons-material/PrecisionManufacturingRounded";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { useScrollPosition } from "@/hooks/useScrollPosition";

const item = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};
export function HeroSection() {
  const scrollY = useScrollPosition();
  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  const [playVideo, setPlayVideo] = React.useState(false);
  const stats = React.useMemo(
    () => [
      { value: "500+", label: "Products" },
      { value: "20+", label: "Years" },
      { value: "1000+", label: "Clients" },
    ],
    [],
  );

  React.useEffect(() => {
    const id = window.setTimeout(() => setPlayVideo(true), 2000);
    return () => window.clearTimeout(id);
  }, []);

  React.useEffect(() => {
    if (!playVideo) return;
    const video = videoRef.current;
    if (!video) return;
    void video.play().catch(() => {});
  }, [playVideo]);

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100svh",
        overflow: "hidden",
        color: "#FFFFFF",
      }}
    >
      <Box
        component="video"
        ref={videoRef}
        autoPlay={false}
        loop
        muted
        playsInline
        preload="none"
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      >
        <source src="/videos/hero-loop.mp4" type="video/mp4" />
      </Box>

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(8,13,31,0.85) 0%, rgba(26,35,126,0.75) 100%)",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          opacity: 0.03,
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          "&:before": {
            content: '""',
            position: "absolute",
            top: "-20%",
            right: "-10%",
            width: "70%",
            height: "140%",
            border: "1px solid rgba(255,255,255,0.12)",
            transform: "rotate(24deg)",
          },
          "&:after": {
            content: '""',
            position: "absolute",
            left: 0,
            bottom: 0,
            width: 180,
            height: 8,
            backgroundColor: "secondary.main",
          },
        }}
      />

      <Container
        maxWidth="lg"
        sx={{ position: "relative", minHeight: "100svh", display: "flex", alignItems: "center" }}
      >
        <Stack
          component={motion.div}
          initial="initial"
          animate="animate"
          style={{ transform: `translateY(${Math.min(scrollY * 0.08, 24)}px)` }}
          variants={{ animate: { transition: { staggerChildren: 0.12 } } }}
          spacing={2.25}
          sx={{ maxWidth: 860, py: { xs: 10, md: 12 } }}
        >
          <Box component={motion.div} variants={item}>
            <Chip
              icon={<PrecisionManufacturingRoundedIcon />}
              label="ISO 9001:2015 Certified"
              sx={{
                backgroundColor: "rgba(255,111,0,0.2)",
                border: "1px solid rgba(255,111,0,0.7)",
                color: "#FFFFFF",
                "& .MuiChip-icon": { color: "#FF6F00" },
              }}
            />
          </Box>

          <Typography
            component={motion.h1}
            variants={item}
            sx={{
              fontFamily: "var(--font-barlow-condensed)",
              fontWeight: 700,
              fontSize: { xs: "2.4rem", md: "4.5rem" },
              lineHeight: 0.95,
            }}
          >
            PRECISION ENGINEERED
          </Typography>
          <Typography
            component={motion.span}
            variants={item}
            sx={{
              fontFamily: "var(--font-barlow-condensed)",
              fontWeight: 700,
              fontSize: { xs: "2.4rem", md: "4.5rem" },
              lineHeight: 0.95,
              color: "secondary.main",
              display: "block",
            }}
          >
            BUILT TO LAST
          </Typography>

          <Typography component={motion.p} variants={item} sx={{ maxWidth: 560, color: "rgba(255,255,255,0.8)" }}>
            Manufacturing precision components and machinery for automotive, hydraulic, and
            pneumatic industries since 2005.
          </Typography>

          <Stack component={motion.div} variants={item} direction={{ xs: "column", sm: "row" }} spacing={1.5}>
            <Button component={Link} href="/products" variant="contained" size="large">
              Explore Products
            </Button>
            <Button component={Link} href="/contact" variant="contained" color="secondary" size="large">
              Get a Quote
            </Button>
          </Stack>

          <Stack
            component={motion.div}
            variants={item}
            direction={{ xs: "column", sm: "row" }}
            divider={<Divider flexItem orientation="vertical" sx={{ borderColor: "rgba(255,255,255,0.25)" }} />}
            spacing={2}
            sx={{ pt: 1 }}
          >
            {stats.map((s) => (
              <Stack key={s.label} spacing={0.2} sx={{ pr: { sm: 2 } }}>
                <Typography sx={{ color: "secondary.main", fontFamily: "var(--font-barlow-condensed)", fontSize: "1.6rem", fontWeight: 700 }}>
                  {s.value}
                </Typography>
                <Typography sx={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem" }}>{s.label}</Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Container>

      <Box sx={{ position: "absolute", bottom: 12, left: "50%", transform: "translateX(-50%)" }}>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <KeyboardArrowDownRoundedIcon sx={{ color: "rgba(255,255,255,0.9)", fontSize: 34 }} />
        </motion.div>
      </Box>
    </Box>
  );
}

