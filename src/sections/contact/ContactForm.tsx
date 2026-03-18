"use client";

import * as React from "react";

import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const inquiryTypes = [
  "Product Inquiry",
  "Custom Manufacturing",
  "Quality/Certification",
  "Axis Connect",
  "General",
] as const;

const sourceTypes = ["Google", "LinkedIn", "Referral", "Industry Event", "Other"] as const;

const schema = z.object({
  name: z.string().min(2),
  company: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  inquiryType: z.enum(inquiryTypes),
  subject: z.string().min(3),
  message: z.string().min(10).max(1000),
  source: z.string().optional(),
  attachmentName: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const [status, setStatus] = React.useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorText, setErrorText] = React.useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { inquiryType: "General" },
  });

  const onSubmit = async (values: FormValues, event?: React.BaseSyntheticEvent) => {
    setStatus("sending");
    setErrorText(null);

    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      if (value !== undefined) formData.append(key, value);
    });

    const fileInput = event?.target?.elements?.attachment as HTMLInputElement | undefined;
    const file = fileInput?.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setStatus("error");
        setErrorText("Attachment must be under 5MB.");
        return;
      }
      formData.append("attachment", file);
      formData.set("attachmentName", file.name);
    }

    const res = await fetch("/api/contact", {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      const json = await res.json().catch(() => null);
      setStatus("error");
      setErrorText(json?.error ?? "Unable to send message. Please retry.");
      return;
    }

    setStatus("sent");
    reset({ inquiryType: "General" });
  };

  return (
    <Stack component="form" spacing={1.5} onSubmit={handleSubmit(onSubmit)} noValidate>
      {status === "sent" ? (
        <Alert severity="success">Thanks! We&apos;ll respond within 24 business hours.</Alert>
      ) : null}
      {status === "error" ? (
        <Alert severity="error">{errorText ?? "Something went wrong. Please retry."}</Alert>
      ) : null}

      <TextField label="Full Name*" {...register("name")} error={!!errors.name} helperText={errors.name?.message} />
      <TextField label="Company Name*" {...register("company")} error={!!errors.company} helperText={errors.company?.message} />
      <TextField label="Email*" type="email" {...register("email")} error={!!errors.email} helperText={errors.email?.message} />
      <TextField label="Phone" {...register("phone")} error={!!errors.phone} helperText={errors.phone?.message} />
      <TextField select label="Inquiry Type" {...register("inquiryType")} error={!!errors.inquiryType} helperText={errors.inquiryType?.message}>
        {inquiryTypes.map((type) => (
          <MenuItem key={type} value={type}>
            {type}
          </MenuItem>
        ))}
      </TextField>
      <TextField label="Subject" {...register("subject")} error={!!errors.subject} helperText={errors.subject?.message} />
      <TextField label="Message*" multiline minRows={4} {...register("message")} error={!!errors.message} helperText={errors.message?.message} />
      <TextField select label="How did you hear about us?" {...register("source")} error={!!errors.source} helperText={errors.source?.message}>
        <MenuItem value="">Select</MenuItem>
        {sourceTypes.map((source) => (
          <MenuItem key={source} value={source}>
            {source}
          </MenuItem>
        ))}
      </TextField>

      <input type="file" name="attachment" accept=".pdf,.dwg,.dxf,.step,.stp,.zip,.jpg,.png" />

      <Button type="submit" loading={status === "sending"} variant="contained" color="secondary">
        Send Message
      </Button>
    </Stack>
  );
}

