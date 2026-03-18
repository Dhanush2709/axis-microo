import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { CertificationsGrid } from "@/sections/quality/CertificationsGrid";
import { QCProcess } from "@/sections/quality/QCProcess";
import { TestingCapabilities } from "@/sections/quality/TestingCapabilities";

export function QualityPage() {
  return (
    <>
      <Box
        sx={{
          py: 10,
          color: "#FFFFFF",
          backgroundImage:
            "linear-gradient(180deg, rgba(8,13,31,0.76), rgba(8,13,31,0.86)), url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1700&q=60')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={1.4}>
            <Typography variant="overline" sx={{ color: "secondary.main" }}>
              QUALITY & CERTIFICATIONS
            </Typography>
            <Typography sx={{ fontFamily: "var(--font-barlow-condensed)", fontSize: { xs: "2.2rem", md: "3.4rem" }, fontWeight: 700 }}>
              Quality is Not an Afterthought — It&apos;s Our Standard
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.84)", maxWidth: 780 }}>
              Every component is validated through controlled checks, certification-backed systems, and
              customer-specific inspection workflows.
            </Typography>
          </Stack>
        </Container>
      </Box>
      <CertificationsGrid />
      <QCProcess />
      <TestingCapabilities />
    </>
  );
}

