"use client";

import * as React from "react";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  subject: z.string().min(3, "Please enter a subject"),
  message: z.string().min(10, "Please add a short message (min 10 characters)"),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const [status, setStatus] = React.useState<"idle" | "sending" | "sent" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (values: FormValues) => {
    setStatus("sending");
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(values),
    });
    if (!res.ok) {
      setStatus("error");
      return;
    }
    setStatus("sent");
    reset();
  };

  return (
    <Stack spacing={2} component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <TextField
        label="Name"
        {...register("name")}
        error={!!errors.name}
        helperText={errors.name?.message}
      />
      <TextField
        label="Email"
        type="email"
        {...register("email")}
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <TextField
        label="Phone (optional)"
        {...register("phone")}
        error={!!errors.phone}
        helperText={errors.phone?.message}
      />
      <TextField
        label="Subject"
        {...register("subject")}
        error={!!errors.subject}
        helperText={errors.subject?.message}
      />
      <TextField
        label="Message"
        multiline
        minRows={5}
        {...register("message")}
        error={!!errors.message}
        helperText={errors.message?.message}
      />

      <Button type="submit" variant="contained" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send message"}
      </Button>

      {status === "sent" ? <Typography color="success.main">Thanks—message sent.</Typography> : null}
      {status === "error" ? (
        <Typography color="error.main">Something went wrong. Please try again.</Typography>
      ) : null}
    </Stack>
  );
}

