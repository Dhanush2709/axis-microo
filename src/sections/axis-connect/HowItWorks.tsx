"use client";

import * as React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";

const tabData = {
  manufacturers: [
    "Post your job requirement (service, quantity, deadline)",
    "Receive quotes from verified vendors",
    "Compare pricing and timelines side by side",
    "Track your order to delivery",
  ],
  vendors: [
    "Register and list your services + pricing",
    "Get matched with relevant job requirements",
    "Submit competitive quotes",
    "Manage jobs and grow your business",
  ],
  admins: [
    "Review platform activity and conversion funnel",
    "Approve and manage vendor profiles",
    "Monitor quote quality and fulfillment trends",
    "Resolve escalations and improve trust workflows",
  ],
} as const;

export function HowItWorks() {
  const [tab, setTab] = React.useState<keyof typeof tabData>("manufacturers");

  return (
    <Box sx={{ py: 10, bgcolor: "primary.dark", color: "#FFFFFF" }}>
      <Container maxWidth="lg">
        <Stack spacing={2}>
          <Typography variant="h2" sx={{ color: "#FFFFFF" }}>
            How Axis Connect Works
          </Typography>
          <Tabs
            value={tab}
            onChange={(_, value) => setTab(value)}
            sx={{
              "& .MuiTab-root": { color: "rgba(255,255,255,0.72)" },
              "& .Mui-selected": { color: "#FFFFFF" },
              "& .MuiTabs-indicator": { bgcolor: "secondary.main" },
            }}
          >
            <Tab value="manufacturers" label="For Manufacturers" />
            <Tab value="vendors" label="For Vendors" />
            <Tab value="admins" label="For Admins" />
          </Tabs>

          <Stack spacing={1.2}>
            {tabData[tab].map((step, index) => (
              <Paper key={step} sx={{ p: 1.5, borderRadius: 0, bgcolor: "rgba(255,255,255,0.06)" }}>
                <Stack direction="row" spacing={1.2}>
                  <Typography sx={{ color: "secondary.main", fontFamily: "var(--font-barlow-condensed)", fontSize: "1.5rem", fontWeight: 700 }}>
                    {index + 1}
                  </Typography>
                  <Typography sx={{ color: "#FFFFFF" }}>{step}</Typography>
                </Stack>
              </Paper>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

