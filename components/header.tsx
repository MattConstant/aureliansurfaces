"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import PageContainer from "@/components/page-container";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-gold/30 bg-black/95 backdrop-blur-md">
      <PageContainer className="flex items-center justify-between gap-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Aurelian Surfaces logo"
            width={44}
            height={44}
            priority
            className="gold-glow"
          />
          <div className="hidden leading-tight sm:block">
            <span className="font-display text-lg tracking-wide text-white">
              Aurelian
            </span>
            <span className="block text-[10px] font-medium tracking-[0.25em] text-gold uppercase">
              Surfaces Inc.
            </span>
          </div>
        </Link>

        <nav className="flex items-center gap-1 sm:gap-2">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-3 py-2 text-xs font-medium tracking-[0.12em] uppercase transition sm:px-4 sm:text-sm ${
                  isActive
                    ? "bg-gold text-black"
                    : "text-white hover:text-gold"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="ml-2 hidden rounded-full border-2 border-gold bg-gold px-5 py-2 text-xs font-semibold tracking-[0.12em] text-black uppercase transition hover:bg-gold-light hover:border-gold-light sm:inline-block sm:text-sm"
          >
            Get a Quote
          </Link>
        </nav>
      </PageContainer>
    </header>
  );
}
