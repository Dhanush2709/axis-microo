import { NextResponse } from "next/server";
import { z } from "zod";

import { getContactToEmail, getResend } from "@/lib/email";
import { siteConfig } from "@/content/config/site";

const inquiryTypes = [
  "Product Inquiry",
  "Custom Manufacturing",
  "Quality/Certification",
  "Axis Connect",
  "General",
] as const;

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

function contactEmailTemplate(input: z.infer<typeof schema>) {
  return `
    <h2>New Contact Inquiry</h2>
    <p><strong>Name:</strong> ${input.name}</p>
    <p><strong>Company:</strong> ${input.company}</p>
    <p><strong>Email:</strong> ${input.email}</p>
    <p><strong>Phone:</strong> ${input.phone ?? "N/A"}</p>
    <p><strong>Inquiry Type:</strong> ${input.inquiryType}</p>
    <p><strong>Subject:</strong> ${input.subject}</p>
    <p><strong>Heard Via:</strong> ${input.source ?? "N/A"}</p>
    <p><strong>Attachment:</strong> ${input.attachmentName ?? "N/A"}</p>
    <hr />
    <p>${input.message.replaceAll("\n", "<br />")}</p>
  `;
}

function autoReplyTemplate(name: string) {
  return `
    <p>Hi ${name},</p>
    <p>Thanks for contacting Axis Micro. We have received your inquiry and will respond within 24 business hours.</p>
    <p>Regards,<br />Axis Micro Team</p>
  `;
}

export async function POST(req: Request) {
  const formData = await req.formData();
  const attachment = formData.get("attachment");
  if (attachment instanceof File && attachment.size > 5 * 1024 * 1024) {
    return NextResponse.json({ ok: false, error: "Attachment exceeds 5MB limit." }, { status: 400 });
  }

  const parsed = schema.safeParse({
    name: String(formData.get("name") ?? ""),
    company: String(formData.get("company") ?? ""),
    email: String(formData.get("email") ?? ""),
    phone: formData.get("phone") ? String(formData.get("phone")) : undefined,
    inquiryType: String(formData.get("inquiryType") ?? "General"),
    subject: String(formData.get("subject") ?? ""),
    message: String(formData.get("message") ?? ""),
    source: formData.get("source") ? String(formData.get("source")) : undefined,
    attachmentName: attachment instanceof File ? attachment.name : undefined,
  });

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Invalid payload", issues: parsed.error.issues },
      { status: 400 },
    );
  }

  const resend = getResend();
  const to = getContactToEmail();
  const data = parsed.data;

  await resend.emails.send({
    from: `${siteConfig.name} Website <onboarding@resend.dev>`,
    to,
    replyTo: data.email,
    subject: `[Axis Micro] ${data.inquiryType} from ${data.company}`,
    html: contactEmailTemplate(data),
  });

  await resend.emails.send({
    from: `${siteConfig.name} <onboarding@resend.dev>`,
    to: data.email,
    subject: "We received your inquiry",
    html: autoReplyTemplate(data.name),
  });

  return NextResponse.json({ ok: true });
}

