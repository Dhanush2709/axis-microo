"use client";

import * as React from "react";
import Image from "next/image";

import HealthAndSafetyRoundedIcon from "@mui/icons-material/HealthAndSafetyRounded";
import PaymentsRoundedIcon from "@mui/icons-material/PaymentsRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import WorkHistoryRoundedIcon from "@mui/icons-material/WorkHistoryRounded";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { careerPositions } from "@/content/data/careers";

const culturePoints = [
  "Ownership mindset across functions",
  "Continuous skill development and mentorship",
  "Quality-first execution discipline",
  "Collaborative and respectful workplace",
];

const benefits = [
  { label: "Health Insurance", icon: <HealthAndSafetyRoundedIcon color="secondary" /> },
  { label: "Provident Fund", icon: <PaymentsRoundedIcon color="secondary" /> },
  { label: "Learning Support", icon: <SchoolRoundedIcon color="secondary" /> },
  { label: "Structured Career Growth", icon: <WorkHistoryRoundedIcon color="secondary" /> },
];

export function CareersPage() {
  const [openFor, setOpenFor] = React.useState<string | null>(null);
  const [status, setStatus] = React.useState<"idle" | "sending" | "sent" | "error">("idle");

  const submitApplication = async (formData: FormData) => {
    setStatus("sending");
    const res = await fetch("/api/careers", { method: "POST", body: formData });
    setStatus(res.ok ? "sent" : "error");
    if (res.ok) {
      window.setTimeout(() => {
        setOpenFor(null);
        setStatus("idle");
      }, 1200);
    }
  };

  return (
    <>
      <Box
        sx={{
          py: 10,
          color: "#FFFFFF",
          backgroundImage:
            "linear-gradient(180deg, rgba(8,13,31,0.76), rgba(8,13,31,0.86)), url('https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1700&q=60')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container maxWidth="lg">
          <Typography sx={{ fontFamily: "var(--font-barlow-condensed)", fontSize: { xs: "2.2rem", md: "3.4rem" }, fontWeight: 700 }}>
            Build a Career in Precision Manufacturing
          </Typography>
        </Container>
      </Box>

      <Box sx={{ py: 10 }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Image
                src="https://images.unsplash.com/photo-1590650516494-0c8d3ca2f154?auto=format&fit=crop&w=1200&q=60"
                alt="Team culture"
                width={900}
                height={600}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack spacing={1.2}>
                <Typography variant="h3">Culture at Axis Micro</Typography>
                {culturePoints.map((point) => (
                  <Typography key={point} color="text.secondary">
                    • {point}
                  </Typography>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: 10, bgcolor: "background.default" }}>
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ mb: 2.5 }}>
            Open Positions
          </Typography>
          <Grid container spacing={2.5}>
            {careerPositions.map((job) => (
              <Grid key={job.title} item xs={12} md={6}>
                <Card sx={{ borderRadius: 0, height: "100%" }}>
                  <CardContent>
                    <Stack spacing={1}>
                      <Typography sx={{ fontWeight: 700 }}>{job.title}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {job.department} · {job.location} · {job.type}
                      </Typography>
                      <Typography color="text.secondary">{job.description}</Typography>
                      <Button variant="contained" color="secondary" sx={{ width: "fit-content" }} onClick={() => setOpenFor(job.title)}>
                        Apply
                      </Button>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: 10 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ mb: 2.5 }}>
            Benefits
          </Typography>
          <Grid container spacing={2.5}>
            {benefits.map((benefit) => (
              <Grid key={benefit.label} item xs={12} md={3}>
                <Card sx={{ borderRadius: 0 }}>
                  <CardContent>
                    <Stack spacing={1.2} alignItems="center">
                      {benefit.icon}
                      <Typography textAlign="center">{benefit.label}</Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Dialog open={!!openFor} onClose={() => setOpenFor(null)} fullWidth maxWidth="sm">
        <DialogTitle>Apply — {openFor}</DialogTitle>
        <DialogContent>
          <Box
            component="form"
            onSubmit={async (event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              await submitApplication(formData);
            }}
            sx={{ display: "grid", gap: 1.5, pt: 1 }}
          >
            <input type="hidden" name="position" value={openFor ?? ""} />
            <TextField label="Name" name="name" required />
            <TextField label="Email" name="email" type="email" required />
            <Button variant="outlined" component="label">
              Upload Resume
              <input hidden type="file" name="resume" />
            </Button>
            <TextField label="Message" name="message" multiline minRows={4} required />
            <Button type="submit" variant="contained" color="secondary" disabled={status === "sending"}>
              {status === "sending" ? "Submitting..." : "Submit Application"}
            </Button>
            {status === "sent" ? <Typography color="success.main">Application submitted.</Typography> : null}
            {status === "error" ? <Typography color="error.main">Submission failed.</Typography> : null}
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}

