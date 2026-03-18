import Image from "next/image";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { companyInfo } from "@/content/data/company";

export function CompanyStory() {
  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={5}>
            <Image
              src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1200&q=60"
              alt="Axis Micro founder and factory"
              width={900}
              height={1000}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </Grid>
          <Grid item xs={12} md={7}>
            <Stack spacing={1.4}>
              <Typography variant="overline" sx={{ color: "secondary.main" }}>
                Our Story
              </Typography>
              <Typography variant="h2">Our Story</Typography>
              <Typography color="text.secondary">
                Founded in {companyInfo.foundedYear} by {companyInfo.founderName}, Axis Micro has
                grown through disciplined engineering and long-term partnerships.
              </Typography>
              <Typography color="text.secondary">{companyInfo.founderBio}</Typography>

              {companyInfo.storyParagraphs.map((paragraph) => (
                <Typography key={paragraph} color="text.secondary">
                  {paragraph}
                </Typography>
              ))}

              <Grid container spacing={2} sx={{ pt: 1 }}>
                <Grid item xs={6} md={3}>
                  <Typography sx={{ fontWeight: 700 }}>{companyInfo.teamSize}+</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Team Members
                  </Typography>
                </Grid>
                <Grid item xs={6} md={3}>
                  <Typography sx={{ fontWeight: 700 }}>{companyInfo.factoryAreaSqFt.toLocaleString()} sq ft</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Factory Area
                  </Typography>
                </Grid>
                <Grid item xs={6} md={3}>
                  <Typography sx={{ fontWeight: 700 }}>1000+</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Product Count
                  </Typography>
                </Grid>
                <Grid item xs={6} md={3}>
                  <Typography sx={{ fontWeight: 700 }}>{companyInfo.cityHQ}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Headquarters
                  </Typography>
                </Grid>
              </Grid>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

