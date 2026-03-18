import Link from "next/link";
import Image from "next/image";

import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { certifications } from "@/content/data/certifications";

export function CertificationsGrid() {
  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="lg">
        <Grid container spacing={2.5}>
          {certifications.map((cert) => (
            <Grid key={cert.code} item xs={12} md={4}>
              <Card sx={{ borderRadius: 0, height: "100%" }}>
                <CardContent>
                  <Stack spacing={1.2}>
                    <Image
                      src={cert.logo}
                      alt={cert.code}
                      width={140}
                      height={60}
                      style={{ width: "auto", height: 52, objectFit: "contain" }}
                    />
                    <Typography sx={{ fontFamily: "var(--font-barlow-condensed)", fontSize: "1.6rem", fontWeight: 700 }}>
                      {cert.code}
                    </Typography>
                    <Typography sx={{ fontWeight: 700 }}>{cert.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      <strong>Issuing body:</strong> {cert.issuingBody}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <strong>Scope:</strong> {cert.scope}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <strong>Valid since:</strong> {cert.validSince}
                    </Typography>
                    <Button
                      component={Link}
                      href={cert.certFile}
                      variant="outlined"
                      startIcon={<DescriptionOutlinedIcon />}
                      sx={{ width: "fit-content", mt: 1 }}
                    >
                      Download Certificate
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

