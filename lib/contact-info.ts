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
    label: "Address",
    value: `${site.address.street}, ${site.address.city}, ${site.address.province} ${site.address.postalCode}`,
  },
  {
    label: "Service Area",
    value: site.location,
  },
  {
    label: "Instagram",
    value: site.social.instagram.handle,
    href: site.social.instagram.href,
  },
  {
    label: "Facebook",
    value: site.social.facebook.handle,
    href: site.social.facebook.href,
  },
] as const;
