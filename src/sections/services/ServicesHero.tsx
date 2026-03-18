import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export function ServicesHero() {
  return (
    <Box
      sx={{
        py: 10,
        color: "#FFFFFF",
        backgroundImage:
          "linear-gradient(180deg, rgba(8,13,31,0.76), rgba(8,13,31,0.86)), url('https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1700&q=60')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={1.4}>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services" }]} />
          <Typography sx={{ fontFamily: "var(--font-barlow-condensed)", fontSize: { xs: "2.2rem", md: "3.3rem" }, fontWeight: 700 }}>
            Manufacturing Services
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.84)", maxWidth: 760 }}>
            End-to-end precision manufacturing capabilities from machining to inspection, finishing,
            and custom engineering support.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}

