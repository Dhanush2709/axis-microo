import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export function ContactHero() {
  return (
    <Box sx={{ minHeight: "50vh", display: "grid", alignItems: "center", bgcolor: "primary.dark", color: "#FFFFFF" }}>
      <Container maxWidth="lg">
        <Stack spacing={1.3}>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
          <Typography sx={{ fontFamily: "var(--font-barlow-condensed)", fontSize: { xs: "2.2rem", md: "3.4rem" }, fontWeight: 700 }}>
            Let&apos;s Build Something Together
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.82)", maxWidth: 760 }}>
            Share your project requirements with Axis Micro. Our team responds within 24 business
            hours with guidance, feasibility, and next steps.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
