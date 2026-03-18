import { NextResponse } from "next/server";
import { z } from "zod";

import { getContactToEmail, getResend } from "@/lib/email";
import { siteConfig } from "@/content/config/site";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  position: z.string().min(2),
  message: z.string().min(10),
  resumeFileName: z.string().optional(),
});

export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get("resume");

  const payload = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    position: String(formData.get("position") ?? ""),
    message: String(formData.get("message") ?? ""),
    resumeFileName: file instanceof File ? file.name : undefined,
  };

  const parsed = schema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Invalid payload", issues: parsed.error.issues },
      { status: 400 },
    );
  }

  const resend = getResend();
  await resend.emails.send({
    from: `${siteConfig.name} Careers <onboarding@resend.dev>`,
    to: getContactToEmail(),
    replyTo: parsed.data.email,
    subject: `Career application: ${parsed.data.position}`,
    text: [
      `Name: ${parsed.data.name}`,
      `Email: ${parsed.data.email}`,
      `Position: ${parsed.data.position}`,
      `Resume: ${parsed.data.resumeFileName ?? "Not attached"}`,
      "",
      parsed.data.message,
    ].join("\n"),
  });

  return NextResponse.json({ ok: true });
}

