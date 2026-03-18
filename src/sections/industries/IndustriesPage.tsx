import Link from "next/link";

import DirectionsCarFilledRoundedIcon from "@mui/icons-material/DirectionsCarFilledRounded";
import AirRoundedIcon from "@mui/icons-material/AirRounded";
import OpacityRoundedIcon from "@mui/icons-material/OpacityRounded";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const cards = [
  {
    slug: "automotive",
    title: "Automotive",
    description: "Solutions for drivetrain, engine, and structural component manufacturing.",
    icon: <DirectionsCarFilledRoundedIcon sx={{ fontSize: 34, color: "secondary.main" }} />,
  },
  {
    slug: "hydraulic",
    title: "Hydraulic Systems",
    description: "Precision parts for high-pressure hydraulic assemblies and controls.",
    icon: <OpacityRoundedIcon sx={{ fontSize: 34, color: "secondary.main" }} />,
  },
  {
    slug: "pneumatic",
    title: "Pneumatic Systems",
    description: "Reliable pneumatic components for automation and control applications.",
    icon: <AirRoundedIcon sx={{ fontSize: 34, color: "secondary.main" }} />,
  },
];

export function IndustriesPage() {
  return (
    <Box sx={{ py: 12 }}>
      <Container maxWidth="lg">
        <Stack spacing={1.5} sx={{ mb: 4 }}>
          <Typography variant="overline" sx={{ color: "secondary.main" }}>
            Industries
          </Typography>
          <Typography variant="h2">Industry Manufacturing Solutions</Typography>
          <Typography color="text.secondary">
            Dedicated precision engineering support for automotive, hydraulic, and pneumatic sectors.
          </Typography>
        </Stack>

        <Grid container spacing={2.5}>
          {cards.map((card) => (
            <Grid key={card.slug} item xs={12} md={4}>
              <Card sx={{ borderRadius: 0, height: "100%" }}>
                <CardActionArea component={Link} href={`/industries/${card.slug}`} sx={{ height: "100%" }}>
                  <CardContent sx={{ p: 3 }}>
                    <Stack spacing={1.2}>
                      {card.icon}
                      <Typography sx={{ fontFamily: "var(--font-barlow-condensed)", fontSize: "1.8rem", fontWeight: 700 }}>
                        {card.title}
                      </Typography>
                      <Typography color="text.secondary">{card.description}</Typography>
                      <Typography sx={{ color: "secondary.main", fontWeight: 700 }}>
                        Learn More →
                      </Typography>
                    </Stack>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

