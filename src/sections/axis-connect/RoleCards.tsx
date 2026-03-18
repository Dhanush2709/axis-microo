import Link from "next/link";

import AdminPanelSettingsRoundedIcon from "@mui/icons-material/AdminPanelSettingsRounded";
import EngineeringRoundedIcon from "@mui/icons-material/EngineeringRounded";
import FactoryRoundedIcon from "@mui/icons-material/FactoryRounded";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { siteConfig } from "@/content/config/site";

const cards = [
  {
    role: "Manufacturer",
    icon: <FactoryRoundedIcon sx={{ fontSize: 36, color: "secondary.main" }} />,
    bestFor: "OEMs and component manufacturers posting treatment jobs",
    features: ["Post requirements", "Compare quotes", "Track fulfillment", "Review vendor ratings"],
    cta: `${siteConfig.axisConnectUrl}/register?role=customer`,
  },
  {
    role: "Vendor",
    icon: <EngineeringRoundedIcon sx={{ fontSize: 36, color: "secondary.main" }} />,
    bestFor: "Plating and surface treatment providers scaling lead flow",
    features: ["List services", "Set transparent pricing", "Submit quotes", "Manage orders"],
    cta: `${siteConfig.axisConnectUrl}/register?role=vendor`,
  },
  {
    role: "Admin",
    icon: <AdminPanelSettingsRoundedIcon sx={{ fontSize: 36, color: "secondary.main" }} />,
    bestFor: "Axis Micro platform operations and trust management",
    features: ["Approve vendors", "Moderate activity", "View analytics", "Resolve escalations"],
    cta: "/contact",
  },
];

export function RoleCards() {
  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="lg">
        <Grid container spacing={2.5}>
          {cards.map((card) => (
            <Grid key={card.role} item xs={12} md={4}>
              <Card sx={{ borderRadius: 0, height: "100%" }}>
                <CardContent>
                  <Stack spacing={1.2}>
                    {card.icon}
                    <Typography sx={{ fontFamily: "var(--font-barlow-condensed)", fontSize: "1.8rem", fontWeight: 700 }}>
                      {card.role}
                    </Typography>
                    <Typography color="text.secondary">
                      <strong>Best for:</strong> {card.bestFor}
                    </Typography>
                    <Stack spacing={0.5}>
                      {card.features.map((f) => (
                        <Typography key={f} variant="body2" color="text.secondary">
                          • {f}
                        </Typography>
                      ))}
                    </Stack>
                    <Button
                      component={Link}
                      href={card.cta}
                      target={card.cta.startsWith("http") ? "_blank" : undefined}
                      rel={card.cta.startsWith("http") ? "noreferrer" : undefined}
                      variant="contained"
                      color="secondary"
                      sx={{ width: "fit-content", mt: 1 }}
                    >
                      Get Started
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

