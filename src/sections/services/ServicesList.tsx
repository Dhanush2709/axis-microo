import Image from "next/image";
import Link from "next/link";

import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { services } from "@/content/data/services";

export function ServicesList() {
  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="lg">
        <Stack spacing={3.5}>
          {services.map((service, index) => {
            const reverse = index % 2 === 1;
            return (
              <Grid
                key={service.slug}
                container
                spacing={2.5}
                direction={reverse ? "row-reverse" : "row"}
                sx={{
                  p: 2,
                  border: "1px solid",
                  borderColor: service.axisConnectPowered ? "secondary.main" : "divider",
                  bgcolor: service.axisConnectPowered ? "rgba(255,111,0,0.04)" : "transparent",
                }}
              >
                <Grid item xs={12} md={5}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={900}
                    height={540}
                    style={{ width: "100%", height: "100%", objectFit: "cover", minHeight: 260 }}
                  />
                </Grid>
                <Grid item xs={12} md={7}>
                  <Stack spacing={1.2}>
                    <Typography sx={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 700, fontSize: "2rem" }}>
                      {service.title}
                    </Typography>
                    <Typography color="text.secondary">{service.description}</Typography>
                    {service.tolerances ? (
                      <Typography>
                        <strong>Tolerances:</strong> {service.tolerances}
                      </Typography>
                    ) : null}
                    {service.materials?.length ? (
                      <Typography>
                        <strong>Materials:</strong> {service.materials.join(", ")}
                      </Typography>
                    ) : null}
                    <Stack direction="row" spacing={0.8} flexWrap="wrap">
                      {service.capabilities.map((capability) => (
                        <Chip key={capability} label={capability} size="small" />
                      ))}
                    </Stack>
                    {service.axisConnectPowered ? (
                      <Stack direction="row" spacing={1} alignItems="center" pt={1}>
                        <Chip label="Powered by Axis Connect" size="small" color="secondary" />
                        <Typography
                          component={Link}
                          href="/axis-connect"
                          sx={{ textDecoration: "none", color: "secondary.dark", fontWeight: 600 }}
                        >
                          Learn more →
                        </Typography>
                      </Stack>
                    ) : null}
                  </Stack>
                </Grid>
              </Grid>
            );
          })}
        </Stack>
      </Container>
    </Box>
  );
}

