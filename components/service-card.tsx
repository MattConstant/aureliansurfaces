type ServiceCardProps = {
  title: string;
  description: string;
  features: readonly string[];
};

export default function ServiceCard({
  title,
  description,
  features,
}: ServiceCardProps) {
  return (
    <article className="card-gold-accent group flex flex-col rounded-2xl bg-surface p-6 transition hover:shadow-[0_0_50px_rgba(212,175,55,0.15)]">
      <h3 className="font-display text-xl tracking-wide text-white">
        <span className="text-gold">{title.split(" ")[0]}</span>{" "}
        {title.split(" ").slice(1).join(" ")}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-white/80">
        {description}
      </p>
      <ul className="mt-6 flex flex-wrap gap-2">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-1.5 rounded-full border border-gold/40 bg-black/60 px-3 py-1 text-xs text-white"
          >
            <span className="font-bold text-gold">✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </article>
  );
}
