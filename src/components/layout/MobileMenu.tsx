"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { siteConfig } from "@/content/config/site";

const topLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Quality", href: "/quality" },
  { label: "Axis Connect", href: "/axis-connect" },
  { label: "Contact", href: "/contact" },
] as const;

const productLinks = [
  { label: "Precision Gears", href: "/products/precision-gears" },
  { label: "Hydraulic Cylinders", href: "/products/hydraulic-cylinders" },
  { label: "Pneumatic Valves", href: "/products/pneumatic-valves" },
  { label: "Automotive Brackets", href: "/products/automotive-brackets" },
];

const industryLinks = [
  { label: "Automotive", href: "/industries/automotive" },
  { label: "Hydraulic Systems", href: "/industries/hydraulic" },
  { label: "Pneumatic Systems", href: "/industries/pneumatic" },
];

function MobileLogo() {
  return (
    <Stack direction="row" spacing={1.25} alignItems="center">
      <Box component="svg" viewBox="0 0 64 64" sx={{ width: 28, height: 28, color: "primary.main" }}>
        <path
          fill="currentColor"
          d="M32 6l5 6 8-1 1 8 6 5-6 5-1 8-8-1-5 6-5-6-8 1-1-8-6-5 6-5 1-8 8 1 5-6zm0 15a11 11 0 100 22 11 11 0 000-22z"
        />
      </Box>
      <Typography sx={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 700, letterSpacing: "0.05em" }}>
        AXIS MICRO
      </Typography>
    </Stack>
  );
}

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = usePathname();

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{ sx: { width: "100%", maxWidth: "100%" } }}
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ p: 2.5 }}>
        <MobileLogo />
        <IconButton aria-label="Close menu" onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Stack>

      <Box sx={{ px: 2 }}>
        <List disablePadding>
          {topLinks.map((item) => (
            <ListItemButton key={item.href} component={Link} href={item.href} onClick={onClose}>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontWeight: pathname === item.href ? 700 : 500,
                }}
              />
            </ListItemButton>
          ))}
        </List>

        <Accordion disableGutters elevation={0} sx={{ "&:before": { display: "none" } }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight={600}>Products</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ pt: 0 }}>
            <Stack spacing={1}>
              {productLinks.map((item) => (
                <Typography key={item.href} component={Link} href={item.href} onClick={onClose} sx={{ textDecoration: "none", color: "text.primary" }}>
                  {item.label}
                </Typography>
              ))}
            </Stack>
          </AccordionDetails>
        </Accordion>

        <Accordion disableGutters elevation={0} sx={{ "&:before": { display: "none" } }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight={600}>Industries</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ pt: 0 }}>
            <Stack spacing={1}>
              {industryLinks.map((item) => (
                <Typography key={item.href} component={Link} href={item.href} onClick={onClose} sx={{ textDecoration: "none", color: "text.primary" }}>
                  {item.label}
                </Typography>
              ))}
            </Stack>
          </AccordionDetails>
        </Accordion>
      </Box>

      <Box sx={{ mt: "auto", p: 2.5 }}>
        <Divider sx={{ mb: 2 }} />
        <Button component={Link} href="/contact" variant="contained" color="secondary" fullWidth sx={{ mb: 1.25 }} onClick={onClose}>
          Get a Quote
        </Button>
        <Typography
          component={Link}
          href={siteConfig.axisConnectUrl}
          target="_blank"
          rel="noreferrer"
          sx={{ textDecoration: "none", color: "primary.main", fontWeight: 600 }}
          onClick={onClose}
        >
          Login to Axis Connect
        </Typography>
      </Box>
    </Drawer>
  );
}

