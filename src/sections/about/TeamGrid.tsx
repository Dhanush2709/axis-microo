import Link from "next/link";
import Image from "next/image";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { team } from "@/content/data/team";

export function TeamGrid() {
  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="lg">
        <Stack spacing={1.2} sx={{ mb: 3 }}>
          <Typography variant="h3">Meet the Team</Typography>
        </Stack>
        <Grid container spacing={2.5}>
          {team.map((member) => (
            <Grid key={member.name} item xs={12} md={4}>
              <Card sx={{ borderRadius: 0, height: "100%" }}>
                <CardContent>
                  <Stack spacing={1.2} alignItems="flex-start">
                    <Avatar sx={{ width: 72, height: 72 }}>
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={72}
                        height={72}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </Avatar>
                    <Typography sx={{ fontWeight: 700 }}>{member.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {member.role}
                    </Typography>
                    <Typography color="text.secondary">{member.bio}</Typography>
                    <IconButton component={Link} href={member.linkedin} target="_blank" rel="noreferrer">
                      <LinkedInIcon />
                    </IconButton>
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

