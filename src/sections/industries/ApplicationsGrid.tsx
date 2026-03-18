import Image from "next/image";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export type IndustryApplication = {
  title: string;
  description: string;
  image: string;
};

export function ApplicationsGrid({
  industryTitle,
  applications,
}: {
  industryTitle: string;
  applications: readonly IndustryApplication[];
}) {
  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="lg">
        <Stack spacing={1.2} sx={{ mb: 3.5 }}>
          <Typography variant="overline" sx={{ color: "secondary.main" }}>
            Applications
          </Typography>
          <Typography variant="h3">Our Applications in {industryTitle}</Typography>
        </Stack>

        <Grid container spacing={2.5}>
          {applications.map((app) => (
            <Grid key={app.title} item xs={12} md={6} lg={4}>
              <Card sx={{ borderRadius: 0, height: "100%" }}>
                <Image src={app.image} alt={app.title} width={560} height={280} style={{ width: "100%", height: 220, objectFit: "cover" }} />
                <CardContent>
                  <Typography sx={{ fontFamily: "var(--font-barlow-condensed)", fontSize: "1.35rem", fontWeight: 700 }}>
                    {app.title}
                  </Typography>
                  <Typography color="text.secondary" sx={{ mt: 0.5 }}>
                    {app.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

