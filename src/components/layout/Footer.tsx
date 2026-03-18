import Link from "next/link";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { siteConfig } from "@/content/config/site";

function FooterLogo() {
  return (
    <Stack direction="row" alignItems="center" spacing={1.25}>
      <Box component="svg" viewBox="0 0 64 64" sx={{ width: 30, height: 30, color: "#FFFFFF" }}>
        <path
          fill="currentColor"
          d="M32 6l5 6 8-1 1 8 6 5-6 5-1 8-8-1-5 6-5-6-8 1-1-8-6-5 6-5 1-8 8 1 5-6zm0 15a11 11 0 100 22 11 11 0 000-22z"
        />
      </Box>
      <Typography sx={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 700, letterSpacing: "0.06em" }}>
        AXIS MICRO
      </Typography>
    </Stack>
  );
}

const productLinks = [
  { label: "Precision Gears", href: "/products/precision-gears" },
  { label: "Hydraulic Cylinders", href: "/products/hydraulic-cylinders" },
  { label: "Pneumatic Valves", href: "/products/pneumatic-valves" },
  { label: "Automotive Brackets", href: "/products/automotive-brackets" },
  { label: "Custom Components", href: "/products" },
] as const;

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Industries", href: "/industries" },
  { label: "Services", href: "/services" },
  { label: "Quality & Certifications", href: "/quality" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
] as const;

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 8,
        pt: 7,
        color: "#FFFFFF",
        bgcolor: "primary.dark",
        borderTop: "3px solid",
        borderTopColor: "secondary.main",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Stack spacing={1.25}>
              <FooterLogo />
              <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.82)" }}>
                Precision Engineered. Built to Last.
              </Typography>
              <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.75)" }}>
                ISO 9001:2015 Certified
              </Typography>
              <Stack direction="row" spacing={0.5}>
                <IconButton component={Link} href={siteConfig.social.linkedin} target="_blank" rel="noreferrer" sx={{ color: "#FFFFFF" }}>
                  <LinkedInIcon fontSize="small" />
                </IconButton>
                <IconButton component={Link} href={siteConfig.social.youtube} target="_blank" rel="noreferrer" sx={{ color: "#FFFFFF" }}>
                  <YouTubeIcon fontSize="small" />
                </IconButton>
                <IconButton component={Link} href={siteConfig.social.twitter} target="_blank" rel="noreferrer" sx={{ color: "#FFFFFF" }}>
                  <XIcon fontSize="small" />
                </IconButton>
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="overline" sx={{ color: "secondary.main" }}>
              Products
            </Typography>
            <Stack spacing={1.25} sx={{ mt: 1.25 }}>
              {productLinks.map((item) => (
                <Typography key={item.href} component={Link} href={item.href} sx={{ textDecoration: "none", color: "rgba(255,255,255,0.88)" }}>
                  {item.label}
                </Typography>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="overline" sx={{ color: "secondary.main" }}>
              Company
            </Typography>
            <Stack spacing={1.25} sx={{ mt: 1.25 }}>
              {companyLinks.map((item) => (
                <Typography key={item.href} component={Link} href={item.href} sx={{ textDecoration: "none", color: "rgba(255,255,255,0.88)" }}>
                  {item.label}
                </Typography>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="overline" sx={{ color: "secondary.main" }}>
              Get in Touch
            </Typography>
            <Stack spacing={1.2} sx={{ mt: 1.25 }}>
              <Stack direction="row" spacing={1} alignItems="flex-start">
                <LocationOnOutlinedIcon sx={{ mt: "2px", color: "rgba(255,255,255,0.8)" }} fontSize="small" />
                <Typography sx={{ color: "rgba(255,255,255,0.88)" }}>
                  {siteConfig.address.line1}, {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.pin}
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <PhoneOutlinedIcon sx={{ color: "rgba(255,255,255,0.8)" }} fontSize="small" />
                <Typography sx={{ color: "rgba(255,255,255,0.88)" }}>{siteConfig.phone}</Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <EmailOutlinedIcon sx={{ color: "rgba(255,255,255,0.8)" }} fontSize="small" />
                <Typography sx={{ color: "rgba(255,255,255,0.88)" }}>{siteConfig.email}</Typography>
              </Stack>

              <Divider sx={{ borderColor: "rgba(255,255,255,0.18)", my: 0.5 }} />

              <Typography variant="overline" sx={{ color: "secondary.main" }}>
                Axis Connect Platform
              </Typography>
              <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.82)" }}>
                Find verified plating vendors
              </Typography>
              <Button
                component={Link}
                href={siteConfig.axisConnectUrl}
                target="_blank"
                rel="noreferrer"
                variant="outlined"
                size="small"
                sx={{
                  width: "fit-content",
                  color: "#FFFFFF",
                  borderColor: "rgba(255,255,255,0.7)",
                  "&:hover": { borderColor: "#FFFFFF", bgcolor: "rgba(255,255,255,0.08)" },
                }}
              >
                Visit Platform →
              </Button>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.18)", mt: 4, mb: 2 }} />

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={1}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", md: "center" }}
          sx={{ pb: 2.5 }}
        >
          <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.78)" }}>
            © 2024 Axis Micro. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={2}>
            <Typography component={Link} href="#" variant="caption" sx={{ color: "rgba(255,255,255,0.78)", textDecoration: "none" }}>
              Privacy Policy
            </Typography>
            <Typography component={Link} href="#" variant="caption" sx={{ color: "rgba(255,255,255,0.78)", textDecoration: "none" }}>
              Terms
            </Typography>
            <Typography component={Link} href="/sitemap.xml" variant="caption" sx={{ color: "rgba(255,255,255,0.78)", textDecoration: "none" }}>
              Sitemap
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

