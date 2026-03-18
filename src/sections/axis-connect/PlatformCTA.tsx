import Link from "next/link";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { siteConfig } from "@/content/config/site";

export function PlatformCTA() {
  return (
    <Box sx={{ py: 8, background: "linear-gradient(135deg, #FF6F00 0%, #E65100 100%)" }}>
      <Container maxWidth="lg">
        <Stack spacing={1.4} alignItems="center" textAlign="center" color="#FFFFFF">
          <Typography sx={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 700, fontSize: { xs: "2rem", md: "3rem" } }}>
            Ready to Eliminate Vendor Delays?
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
            <Button
              component={Link}
              href={`${siteConfig.axisConnectUrl}/register?role=customer`}
              target="_blank"
              rel="noreferrer"
              variant="contained"
              sx={{ bgcolor: "#FFFFFF", color: "secondary.dark", "&:hover": { bgcolor: "rgba(255,255,255,0.9)" } }}
            >
              Join as a Manufacturer
            </Button>
            <Button
              component={Link}
              href={`${siteConfig.axisConnectUrl}/register?role=vendor`}
              target="_blank"
              rel="noreferrer"
              variant="outlined"
              sx={{ color: "#FFFFFF", borderColor: "#FFFFFF", "&:hover": { borderColor: "#FFFFFF", bgcolor: "rgba(255,255,255,0.08)" } }}
            >
              List Your Services
            </Button>
          </Stack>
          <Typography sx={{ color: "rgba(255,255,255,0.9)" }}>
            Trusted by 200+ manufacturers across India
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}

