type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";
  const widthClass = className ? "" : "max-w-2xl";

  return (
    <div className={`${widthClass} ${alignClass} ${className}`.trim()}>
      {eyebrow && (
        <p className="mb-3 text-xs font-medium tracking-[0.35em] text-gold uppercase">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl tracking-wide text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <div
        className={`mt-4 h-0.5 w-16 bg-gold ${align === "center" ? "mx-auto" : ""}`}
      />
      {description && (
        <p className="mt-5 text-base leading-7 text-white/85 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
