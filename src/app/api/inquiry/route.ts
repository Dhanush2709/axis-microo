import { NextResponse } from "next/server";
import { z } from "zod";

import { getContactToEmail, getResend } from "@/lib/email";
import { siteConfig } from "@/content/config/site";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(2),
  phone: z.string().min(7),
  quantity: z.coerce.number().min(1),
  notes: z.string().min(10),
  productSlug: z.string().min(1),
  productTitle: z.string().min(1),
});

export async function POST(req: Request) {
  const json = await req.json().catch(() => null);
  const parsed = schema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Invalid payload", issues: parsed.error.issues },
      { status: 400 },
    );
  }

  const resend = getResend();
  const to = getContactToEmail();
  const { name, email, company, phone, quantity, notes, productSlug, productTitle } = parsed.data;

  await resend.emails.send({
    from: `${siteConfig.name} Website <onboarding@resend.dev>`,
    to,
    replyTo: email,
    subject: `Product inquiry: ${productTitle}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company}`,
      `Phone: ${phone}`,
      `Product: ${productTitle} (${productSlug})`,
      `Quantity: ${quantity}`,
      "",
      notes,
    ].join("\n"),
  });

  return NextResponse.json({ ok: true });
}

