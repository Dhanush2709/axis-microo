import Image from "next/image";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { testingEquipment } from "@/content/data/certifications";

export function TestingCapabilities() {
  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="lg">
        <Stack spacing={1.2} sx={{ mb: 3 }}>
          <Typography variant="h3">Testing Capabilities</Typography>
          <Typography color="text.secondary">
            Equipment and metrology infrastructure supporting precision manufacturing quality.
          </Typography>
        </Stack>

        <Grid container spacing={2.5}>
          {testingEquipment.map((equipment) => (
            <Grid key={equipment.name} item xs={12} md={6} lg={4}>
              <Card sx={{ borderRadius: 0, height: "100%" }}>
                <Image
                  src={equipment.image}
                  alt={equipment.name}
                  width={680}
                  height={340}
                  style={{ width: "100%", height: 210, objectFit: "cover" }}
                />
                <CardContent>
                  <Typography sx={{ fontWeight: 700 }}>{equipment.name}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                    {equipment.rangeOrAccuracy}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Count: {equipment.count}
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

