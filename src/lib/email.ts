import "server-only";

import { Resend } from "resend";

import { siteConfig } from "@/content/config/site";

function requireEnv(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env var: ${name}`);
  return v;
}

export function getResend() {
  return new Resend(requireEnv("RESEND_API_KEY"));
}

export function getContactToEmail() {
  return process.env.CONTACT_EMAIL || siteConfig.email;
}

