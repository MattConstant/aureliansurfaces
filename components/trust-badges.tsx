import Image from "next/image";
import type { ReactNode } from "react";
import { heroTrustBadges } from "@/lib/site-content";

function WorkmanshipIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className="shrink-0 text-gold"
      fill="currentColor"
      style={{ width: 24, height: 24, display: "block", flex: "0 0 24px" }}
    >
      <path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.3L12 14.8 7.2 17l.9-5.3-3.9-3.8 5.4-.8L12 2z" />
    </svg>
  );
}

function BadgeIconImage({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={32}
      height={32}
      unoptimized
      className="h-8 w-8 shrink-0 object-contain mix-blend-screen"
    />
  );
}

const iconByLabel: Partial<Record<(typeof heroTrustBadges)[number], () => ReactNode>> = {
  "Fully Insured": () => (
    <BadgeIconImage src="/Gold Shield.png" alt="Gold shield icon for fully insured" />
  ),
  "Engineered for Canadian Weather": () => (
    <BadgeIconImage src="/Gold Maple Leaf.png" alt="Gold maple leaf icon for Canadian weather" />
  ),
  "Eco-Friendly Commercial-Grade Products": () => (
    <BadgeIconImage src="/leaf.png" alt="Leaf icon for eco-friendly products" />
  ),
};

export default function TrustBadges() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {heroTrustBadges.map((label) => {
        const Icon = iconByLabel[label] ?? WorkmanshipIcon;
        return (
          <li
            key={label}
            className="card-gold-accent flex items-center gap-3 rounded-xl bg-surface px-4 py-4"
          >
            <Icon />
            <span className="text-sm font-medium leading-snug text-white">
              {label}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
