import Link from "next/link";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { siteConfig } from "@/content/config/site";

export function AxisConnectCTA() {
  return (
    <Box
      sx={{
        py: 10,
        background: "linear-gradient(135deg, #FF6F00 0%, #E65100 100%)",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <Typography variant="overline" sx={{ color: "rgba(255,255,255,0.8)" }}>
              INTRODUCING AXIS CONNECT
            </Typography>
            <Typography
              sx={{
                color: "#FFFFFF",
                fontFamily: "var(--font-barlow-condensed)",
                fontSize: { xs: "2rem", md: "3rem" },
                lineHeight: 1.05,
                fontWeight: 700,
                mb: 1.5,
              }}
            >
              Transparent Vendor Marketplace for Surface Treatment
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.9)", mb: 2.2 }}>
              Find verified plating vendors with upfront pricing, real turnaround times, and zero
              middlemen.
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1} mb={2.5}>
              <Chip label="Transparent Pricing" sx={{ bgcolor: "#FFFFFF", color: "secondary.dark" }} />
              <Chip label="Verified Vendors" sx={{ bgcolor: "#FFFFFF", color: "secondary.dark" }} />
              <Chip label="On-Time Delivery" sx={{ bgcolor: "#FFFFFF", color: "secondary.dark" }} />
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
              <Button
                component={Link}
                href={`${siteConfig.axisConnectUrl}/register`}
                target="_blank"
                rel="noreferrer"
                variant="contained"
                sx={{ bgcolor: "#FFFFFF", color: "secondary.dark", "&:hover": { bgcolor: "rgba(255,255,255,0.9)" } }}
              >
                Get Started Free
              </Button>
              <Typography
                component={Link}
                href="/axis-connect"
                sx={{ color: "#FFFFFF", textDecoration: "none", alignSelf: "center", fontWeight: 600 }}
              >
                Learn How It Works →
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                bgcolor: "rgba(255,255,255,0.2)",
                border: "1px solid rgba(255,255,255,0.4)",
                boxShadow: "0 18px 44px rgba(0,0,0,0.25)",
                p: 2,
                backdropFilter: "blur(3px)",
              }}
            >
              <Box
                sx={{
                  bgcolor: "#FFFFFF",
                  minHeight: 240,
                  p: 2,
                  color: "primary.main",
                  display: "grid",
                  placeItems: "center",
                  textAlign: "center",
                }}
              >
                <Typography sx={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 700, fontSize: "1.9rem" }}>
                  AXIS CONNECT
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Marketplace preview mockup
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

