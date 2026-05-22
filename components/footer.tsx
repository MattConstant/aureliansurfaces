import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site-content";

const taglineWords = site.tagline.split(" • ");

export default function Footer() {
  return (
    <footer className="relative mt-auto border-t-2 border-gold/30 bg-black section-gold">
      <div className="relative mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col items-center text-center">
          <Image
            src="/logo.png"
            alt="Aurelian Surfaces"
            width={80}
            height={80}
            className="gold-glow mb-6"
          />
          <p className="font-display text-3xl tracking-[0.15em] sm:text-4xl">
            {taglineWords.map((word, i) => (
              <span key={word}>
                <span className={i % 2 === 0 ? "text-white" : "text-gold"}>
                  {word}
                </span>
                {i < taglineWords.length - 1 && (
                  <span className="text-gold"> • </span>
                )}
              </span>
            ))}
          </p>
          <div className="my-6 flex w-full max-w-xs items-center gap-4">
            <span className="h-px flex-1 bg-gold" />
            <span className="text-xs font-semibold tracking-[0.3em] text-white uppercase">
              {site.motto}
            </span>
            <span className="h-px flex-1 bg-gold" />
          </div>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {[
            { label: "Phone", value: site.phone, href: `tel:${site.phone.replace(/[^\d]/g, "")}` },
            { label: "Email", value: site.email, href: `mailto:${site.email}` },
            { label: "Location", value: site.location },
          ].map((item) => (
            <div key={item.label} className="text-center sm:text-left sm:last:text-right">
              <p className="text-xs font-semibold tracking-[0.25em] text-gold uppercase">
                {item.label}
              </p>
              {item.href ? (
                <a
                  href={item.href}
                  className="mt-2 block text-sm font-medium text-white transition hover:text-gold"
                >
                  {item.value}
                </a>
              ) : (
                <p className="mt-2 text-sm font-medium text-white">{item.value}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-gold/20 pt-8 text-xs text-white/70 sm:flex-row">
          <p className="text-white/90">
            © {new Date().getFullYear()}{" "}
            <span className="text-gold">{site.name}</span> Inc. · {site.owner},
            Owner
          </p>
          <nav className="flex gap-6">
            {[
              { href: "/", label: "Home" },
              { href: "/gallery", label: "Gallery" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-medium text-white transition hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
