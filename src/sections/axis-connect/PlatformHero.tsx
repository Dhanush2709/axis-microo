import Link from "next/link";

import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { siteConfig } from "@/content/config/site";

const painPoints = [
  "Delayed deliveries from vendors",
  "Inconsistent pricing and surprise costs",
  "Zero transparency on turnaround time",
];

export function PlatformHero() {
  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Stack spacing={1.3}>
              <Chip label="Axis Connect Platform" color="secondary" sx={{ width: "fit-content" }} />
              <Typography sx={{ fontFamily: "var(--font-barlow-condensed)", fontSize: { xs: "2.3rem", md: "3.3rem" }, lineHeight: 0.95, fontWeight: 700 }}>
                The Smarter Way to Source Surface Treatment
              </Typography>

              <Stack spacing={0.8}>
                {painPoints.map((line) => (
                  <Stack key={line} direction="row" spacing={0.8} alignItems="center">
                    <CancelRoundedIcon color="error" fontSize="small" />
                    <Typography sx={{ textDecoration: "line-through", color: "text.secondary" }}>
                      {line}
                    </Typography>
                  </Stack>
                ))}
              </Stack>

              <Typography sx={{ fontWeight: 600 }}>
                One platform. Verified vendors. Transparent pricing. On-time delivery.
              </Typography>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
                <Button
                  component={Link}
                  href={`${siteConfig.axisConnectUrl}/register?role=customer`}
                  target="_blank"
                  rel="noreferrer"
                  variant="contained"
                  color="secondary"
                >
                  Register as a Buyer
                </Button>
                <Button
                  component={Link}
                  href={`${siteConfig.axisConnectUrl}/register?role=vendor`}
                  target="_blank"
                  rel="noreferrer"
                  variant="outlined"
                >
                  List Your Services
                </Button>
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ borderRadius: 0, border: "1px solid", borderColor: "divider", boxShadow: 8 }}>
              <CardContent>
                <Typography sx={{ fontWeight: 700, mb: 1 }}>Post Surface Treatment Job</Typography>
                <Stack spacing={1}>
                  <TextField label="Service Type" size="small" value="Zinc Plating" />
                  <TextField label="Quantity" size="small" value="3000 parts" />
                  <TextField label="Required Delivery" size="small" value="Within 10 days" />
                  <Button variant="contained" color="secondary" disabled>
                    Request Quotes
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

