import { heroTrustBadges } from "@/lib/site-content";

function WorkmanshipIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-6 w-6 text-gold" fill="currentColor">
      <path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.3L12 14.8 7.2 17l.9-5.3-3.9-3.8 5.4-.8L12 2z" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-6 w-6 text-gold" fill="currentColor">
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 16.91V18h2v-.09c2.34-.45 4-2.52 4-4.91h-2c0 1.1-.9 2-2 2s-2-.9-2-2H7c0 2.39 1.66 4.46 4 4.91z" />
    </svg>
  );
}

function WeatherIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-6 w-6 text-gold" fill="currentColor">
      <path d="M19.35 10.04A7.49 7.49 0 0012 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 000 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
    </svg>
  );
}

function EcoIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-6 w-6 text-gold" fill="currentColor">
      <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A6.47 6.47 0 009 20c6 0 11-5 11-12h-3z" />
    </svg>
  );
}

const icons = [WorkmanshipIcon, ShieldIcon, WeatherIcon, EcoIcon];

export default function TrustBadges() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {heroTrustBadges.map((label, index) => {
        const Icon = icons[index] ?? WorkmanshipIcon;
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
