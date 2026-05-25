import Image from "next/image";
import Link from "next/link";
import PageContainer from "@/components/page-container";
import SocialLinks from "@/components/social-links";
import { images } from "@/lib/images";
import { site } from "@/lib/site-content";

const taglineWords = site.tagline.split(" • ");

export default function Footer() {
  return (
    <footer className="relative mt-auto w-full border-t-2 border-gold/30 bg-black section-gold">
      <PageContainer className="relative py-16">
        <div className="flex flex-col items-center text-center">
          <Image
            src={images.logo}
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
          <div className="my-6 flex w-full max-w-md items-center gap-4">
            <span className="h-px flex-1 bg-gold" />
            <span className="text-xs font-semibold tracking-[0.2em] text-white uppercase">
              {site.motto}
            </span>
            <span className="h-px flex-1 bg-gold" />
          </div>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {[
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
            { label: "Service Area", value: site.location },
          ].map((item) => (
            <div key={item.label} className="text-center lg:text-left">
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

        <div className="mt-8 flex flex-col items-center gap-3">
          <p className="text-xs font-semibold tracking-[0.25em] text-gold uppercase">
            Follow Us
          </p>
          <SocialLinks />
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-gold/20 pt-8 text-xs text-white/70 sm:flex-row">
          <p className="text-center text-white/90 sm:text-left">
            © 2026 <span className="text-gold">{site.legalName}</span>. All
            Rights Reserved.
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
      </PageContainer>
    </footer>
  );
}
