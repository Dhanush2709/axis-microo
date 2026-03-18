"use client";

import * as React from "react";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import type { ProductFrontmatter } from "@/types/product.types";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().min(2, "Please enter your company name"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  quantity: z.coerce.number().min(1),
  notes: z.string().min(10, "Please add a short message (min 10 characters)"),
  productSlug: z.string().min(1),
  productTitle: z.string().min(1),
});

export type InquiryFormValues = z.infer<typeof schema>;

export function InquiryForm({ product }: { product: ProductFrontmatter }) {
  const [status, setStatus] = React.useState<"idle" | "sending" | "sent" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<InquiryFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      productSlug: product.slug,
      productTitle: product.title,
      quantity: product.minOrderQty,
      notes: `I'm interested in ${product.title}. Please share pricing/MOQ/lead time.`,
    },
  });

  const onSubmit = async (values: InquiryFormValues) => {
    setStatus("sending");
    const res = await fetch("/api/inquiry", {
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
    <Stack spacing={2}>
      <Typography variant="h5">Request a Quote for This Product</Typography>
      <Typography color="text.secondary">
        Tell us about your requirement and we’ll get back with feasibility and next steps.
      </Typography>

      <Stack component="form" spacing={2} onSubmit={handleSubmit(onSubmit)} noValidate>
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
          label="Company"
          {...register("company")}
          error={!!errors.company}
          helperText={errors.company?.message}
        />
        <TextField
          label="Phone"
          {...register("phone")}
          error={!!errors.phone}
          helperText={errors.phone?.message}
        />
        <TextField
          label="Quantity"
          type="number"
          {...register("quantity", { valueAsNumber: true })}
          error={!!errors.quantity}
          helperText={errors.quantity?.message}
        />
        <TextField
          label="Additional Notes"
          multiline
          minRows={4}
          {...register("notes")}
          error={!!errors.notes}
          helperText={errors.notes?.message}
        />

        <input type="hidden" {...register("productSlug")} value={product.slug} />
        <input type="hidden" {...register("productTitle")} value={product.title} />

        <Button type="submit" variant="contained" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send inquiry"}
        </Button>

        {status === "sent" ? (
          <Typography color="success.main">Thanks—your inquiry has been sent.</Typography>
        ) : null}
        {status === "error" ? (
          <Typography color="error.main">Something went wrong. Please try again.</Typography>
        ) : null}
      </Stack>
    </Stack>
  );
}

