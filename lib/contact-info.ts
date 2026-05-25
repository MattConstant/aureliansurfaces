import { site } from "./site-content";

export const contactCards = [
  {
    label: "Phone",
    value: site.phone,
    href: `tel:${site.phone.replace(/[^\d]/g, "")}`,
  },
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    label: "Service Area",
    value: site.location,
  },
] as const;
