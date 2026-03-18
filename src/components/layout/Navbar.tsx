"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import * as React from "react";

import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import PrecisionManufacturingOutlinedIcon from "@mui/icons-material/PrecisionManufacturingOutlined";
import AirOutlinedIcon from "@mui/icons-material/AirOutlined";
import OpacityOutlinedIcon from "@mui/icons-material/OpacityOutlined";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { siteConfig } from "@/content/config/site";
import { useNavbarTransparency } from "@/hooks/useNavbarTransparency";

import { MobileMenu } from "./MobileMenu";

type MegaMenu = "products" | "industries" | null;

const centerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "Services", href: "/services" },
  { label: "Quality", href: "/quality" },
  { label: "Axis Connect", href: "/axis-connect" },
  { label: "Contact", href: "/contact" },
] as const;

const productMegaColumns = [
  {
    heading: "Precision Components",
    links: [
      { label: "Precision Gears", icon: <PrecisionManufacturingOutlinedIcon fontSize="small" /> },
      { label: "Automotive Brackets", icon: <DirectionsCarFilledOutlinedIcon fontSize="small" /> },
      { label: "Custom Shafts", icon: <PrecisionManufacturingOutlinedIcon fontSize="small" /> },
    ],
  },
  {
    heading: "Hydraulic Parts",
    links: [
      { label: "Hydraulic Cylinders", icon: <OpacityOutlinedIcon fontSize="small" /> },
      { label: "Piston Rods", icon: <OpacityOutlinedIcon fontSize="small" /> },
      { label: "Valve Sleeves", icon: <OpacityOutlinedIcon fontSize="small" /> },
    ],
  },
  {
    heading: "Pneumatic Parts",
    links: [
      { label: "Pneumatic Valves", icon: <AirOutlinedIcon fontSize="small" /> },
      { label: "Flow Control Blocks", icon: <AirOutlinedIcon fontSize="small" /> },
      { label: "Actuator Components", icon: <AirOutlinedIcon fontSize="small" /> },
    ],
  },
] as const;

const industryMegaCards = [
  {
    icon: <DirectionsCarFilledOutlinedIcon color="secondary" />,
    title: "Automotive",
    description: "Durable, high-repeatability parts for OEM and tier supplier lines.",
    href: "/industries/automotive",
  },
  {
    icon: <OpacityOutlinedIcon color="secondary" />,
    title: "Hydraulic Systems",
    description: "Precision components for high-pressure control and actuation.",
    href: "/industries/hydraulic",
  },
  {
    icon: <AirOutlinedIcon color="secondary" />,
    title: "Pneumatic Systems",
    description: "Machined parts for fast, stable pneumatic control circuits.",
    href: "/industries/pneumatic",
  },
] as const;

function AxisMicroLogo({ solid }: { solid: boolean }) {
  const fill = solid ? "#1A237E" : "#FFFFFF";

  return (
    <Stack direction="row" alignItems="center" spacing={1.25}>
      <Box component="svg" viewBox="0 0 64 64" sx={{ width: 28, height: 28, color: fill }}>
        <path
          fill="currentColor"
          d="M32 6l5 6 8-1 1 8 6 5-6 5-1 8-8-1-5 6-5-6-8 1-1-8-6-5 6-5 1-8 8 1 5-6zm0 15a11 11 0 100 22 11 11 0 000-22z"
        />
      </Box>
      <Typography
        sx={{
          fontFamily: "var(--font-barlow-condensed)",
          letterSpacing: "0.04em",
          fontSize: "1.1rem",
          fontWeight: 700,
          color: fill,
          textTransform: "uppercase",
        }}
      >
        Axis Micro
      </Typography>
    </Stack>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const { isTransparent } = useNavbarTransparency();
  const { resolvedTheme, setTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [menuType, setMenuType] = React.useState<MegaMenu>(null);
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const closeTimeout = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const isSolid = !isTransparent;

  const cancelClose = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
  };

  const queueClose = () => {
    cancelClose();
    closeTimeout.current = setTimeout(() => setMenuType(null), 120);
  };

  const onTriggerEnter = (type: MegaMenu, target: HTMLElement) => {
    cancelClose();
    setMenuType(type);
    setAnchorEl(target);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={isSolid ? 4 : 0}
        sx={{
          height: { xs: 64, md: 72 },
          justifyContent: "center",
          backgroundColor: isSolid ? "rgba(255,255,255,0.98)" : "transparent",
          color: isSolid ? "primary.main" : "#FFFFFF",
          borderBottom: isSolid ? 1 : 0,
          borderColor: "divider",
          transition: "background-color 300ms ease, color 300ms ease, box-shadow 300ms ease",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 72 }, gap: 2 }}>
            <Box component={Link} href="/" sx={{ textDecoration: "none", mr: { xs: 1, md: 2 } }}>
              <AxisMicroLogo solid={isSolid} />
            </Box>

            <Stack
              direction="row"
              spacing={1.5}
              sx={{ display: { xs: "none", lg: "flex" }, flex: 1, justifyContent: "center" }}
            >
              {centerLinks.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
                const isMega = item.label === "Products" || item.label === "Industries";

                return (
                  <Box
                    key={item.href}
                    onMouseEnter={(event) =>
                      isMega
                        ? onTriggerEnter(
                            item.label === "Products" ? "products" : "industries",
                            event.currentTarget,
                          )
                        : cancelClose()
                    }
                    onMouseLeave={isMega ? queueClose : undefined}
                    sx={{
                      borderBottom: isActive ? "3px solid #FF6F00" : "3px solid transparent",
                    }}
                  >
                    <Typography
                      component={Link}
                      href={item.href}
                      sx={{
                        px: 0.5,
                        py: 2.8,
                        display: "inline-flex",
                        textDecoration: "none",
                        fontFamily: "var(--font-dm-sans)",
                        fontSize: "14px",
                        fontWeight: 500,
                        color: "inherit",
                      }}
                    >
                      {item.label}
                    </Typography>
                  </Box>
                );
              })}
            </Stack>

            <Stack direction="row" spacing={1} alignItems="center" sx={{ ml: "auto" }}>
              <Stack direction="row" spacing={1} sx={{ display: { xs: "none", md: "flex" } }}>
                <Button component={Link} href="/contact" size="small" variant="contained" color="secondary">
                  Get a Quote
                </Button>
                <Button
                  component={Link}
                  href={siteConfig.axisConnectUrl}
                  target="_blank"
                  rel="noreferrer"
                  size="small"
                  variant="outlined"
                  color={isSolid ? "primary" : "inherit"}
                  sx={{
                    borderColor: isSolid ? "primary.main" : "#FFFFFF",
                    color: isSolid ? "primary.main" : "#FFFFFF",
                    "&:hover": {
                      borderColor: isSolid ? "primary.main" : "#FFFFFF",
                      backgroundColor: isSolid ? "rgba(26,35,126,0.04)" : "rgba(255,255,255,0.12)",
                    },
                  }}
                >
                  Login to Axis Connect
                </Button>
              </Stack>

              <IconButton
                aria-label="Toggle dark mode"
                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                sx={{ color: "inherit" }}
              >
                {resolvedTheme === "dark" ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
              </IconButton>

              <IconButton
                aria-label="Open menu"
                onClick={() => setMobileOpen(true)}
                sx={{ color: "inherit", display: { xs: "inline-flex", lg: "none" } }}
              >
                <MenuIcon />
              </IconButton>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      <Popper
        open={!!menuType}
        anchorEl={anchorEl}
        placement="bottom-start"
        onMouseEnter={cancelClose}
        onMouseLeave={queueClose}
        sx={{ zIndex: 1300 }}
      >
        <Paper elevation={8} sx={{ mt: 1, p: 3, minWidth: 780, borderRadius: 1 }}>
          {menuType === "products" ? (
            <Box>
              <Grid container spacing={3}>
                {productMegaColumns.map((column) => (
                  <Grid key={column.heading} item xs={4}>
                    <Typography variant="overline" color="secondary.main">
                      {column.heading}
                    </Typography>
                    <Stack spacing={1} sx={{ mt: 1 }}>
                      {column.links.map((item) => (
                        <Typography
                          key={item.label}
                          component={Link}
                          href="/products"
                          sx={{
                            textDecoration: "none",
                            color: "text.primary",
                            fontSize: 14,
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 0.75,
                          }}
                        >
                          {item.icon}
                          {item.label}
                        </Typography>
                      ))}
                    </Stack>
                  </Grid>
                ))}
              </Grid>
              <Box sx={{ mt: 2.5, pt: 2, borderTop: "1px solid", borderColor: "divider" }}>
                <Typography
                  component={Link}
                  href="/products"
                  sx={{ textDecoration: "none", color: "primary.main", fontWeight: 600 }}
                >
                  View All Products →
                </Typography>
              </Box>
            </Box>
          ) : null}

          {menuType === "industries" ? (
            <Grid container spacing={2}>
              {industryMegaCards.map((card) => (
                <Grid key={card.title} item xs={4}>
                  <Paper variant="outlined" sx={{ p: 2, height: "100%" }}>
                    <Box sx={{ mb: 1 }}>{card.icon}</Box>
                    <Typography variant="h6" sx={{ mb: 1 }}>
                      {card.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
                      {card.description}
                    </Typography>
                    <Typography
                      component={Link}
                      href={card.href}
                      sx={{ textDecoration: "none", color: "primary.main", fontWeight: 600 }}
                    >
                      Learn More →
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          ) : null}
        </Paper>
      </Popper>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}

