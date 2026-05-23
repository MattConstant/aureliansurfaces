/**
 * Web3Forms access keys are public (sent with each form post).
 * Submissions are delivered to the email linked to the key in the Web3Forms dashboard
 * (info@aureliansurfaces.ca). Prefer WEB3FORMS_ACCESS_KEY in .env.local / Vercel.
 */
const WEB3FORMS_FALLBACK_KEY = "1a29e400-9df6-4275-a82e-ed5fd2cf504e";

export function getWeb3FormsAccessKey(): string {
  return process.env.WEB3FORMS_ACCESS_KEY?.trim() || WEB3FORMS_FALLBACK_KEY;
}

export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) return fromEnv;

  const vercelUrl = process.env.VERCEL_URL?.trim();
  if (vercelUrl) return `https://${vercelUrl}`;

  return "http://localhost:3000";
}
