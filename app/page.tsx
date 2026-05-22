import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import SectionHeading from "@/components/section-heading";
import ServiceCard from "@/components/service-card";
import { images } from "@/lib/images";
import { imageQuality, imageSizes } from "@/lib/image-config";
import { highlights, services, site } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Home | Aurelian Surfaces",
  description:
    "Premium asphalt, concrete, and interlock sealing in Ottawa. Protect • Enhance • Last.",
};

export default function Home() {
  return (
    <>
      {/* Hero — Dribbble split layout */}
      <section className="surface-texture border-b-2 border-gold/25">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-end lg:py-28">
          <div>
            <p className="text-xs tracking-[0.35em] text-gold uppercase">
              Premium Surface Protection
            </p>
            <h1 className="font-display mt-4 text-5xl leading-[1.1] tracking-wide text-white sm:text-6xl lg:text-7xl">
              Protect.
              <br />
              <span className="text-gradient-gold">Enhance.</span>
              <br />
              Last.
            </h1>
          </div>
          <div className="flex flex-col gap-8 lg:pb-4">
            <p className="max-w-md text-base leading-7 text-white/90 sm:text-lg">
              {site.name} delivers professional sealcoating and surface
              protection for concrete, asphalt, and interlock across Ottawa and
              surrounding areas. Built for Canadian weather. Finished to a
              premium standard.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-gold px-8 py-3 text-sm font-medium tracking-wide text-black transition hover:bg-gold-light"
              >
                Get a Free Estimate
              </Link>
              <Link
                href="/gallery"
                className="rounded-full border-2 border-white px-8 py-3 text-sm font-medium tracking-wide text-white transition hover:border-gold hover:bg-gold/10 hover:text-gold"
              >
                View Gallery
              </Link>
            </div>
          </div>
        </div>

        {/* Full-width showcase */}
        <div className="relative mx-auto max-w-6xl px-6 pb-20">
          <div className="relative aspect-[3/1] w-full overflow-hidden rounded-2xl border-2 border-gold/40 bg-black gold-glow">
            <Image
              src={images.hero}
              alt="Aurelian Surfaces — concrete sealing, interlock sealing, and oil stain treatment"
              fill
              priority
              quality={imageQuality.hero}
              unoptimized
              className="object-contain object-center"
              sizes={imageSizes.hero}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Highlights — gold checkmarks */}
      <section className="section-gold">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <ul className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-12">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-sm font-medium tracking-wide text-white sm:text-base"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-gold bg-gold text-xs font-bold text-black">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Services grid */}
      <section className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
        <SectionHeading
          eyebrow="What We Do"
          title="Premium Sealing Services"
          description="From residential driveways to commercial parking lots — every surface protected with precision and care."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      {/* Split CTA — Dribbble two-column */}
      <section className="border-y-2 border-gold/25 bg-surface surface-texture">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
          <SectionHeading
            eyebrow="Why Aurelian"
            title="Built to Withstand the Elements"
            description="Our sealants are engineered for Ottawa's freeze-thaw cycles, road salt, UV exposure, and heavy traffic — so your investment lasts season after season."
          />
          <div className="flex flex-col gap-6 lg:pl-8">
            <div className="card-gold-accent overflow-hidden rounded-2xl">
              <div className="relative aspect-[16/10]">
                <Image
                  src={images.cleanTwo}
                  alt="Freshly sealed driveway with premium wet-look finish"
                  fill
                  quality={imageQuality.default}
                  className="object-cover"
                  sizes={imageSizes.half}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              </div>
              <div className="p-8">
                <p className="font-display text-2xl text-white">
                  Commercial &{" "}
                  <span className="text-gold">Residential</span> Experts
                </p>
                <p className="mt-4 text-sm leading-6 text-white/85">
                  Parking lots, plazas, industrial sites, condos, and luxury
                  estates — all maintained to the same uncompromising standard.
                </p>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-flex w-fit items-center gap-2 rounded-full border-2 border-gold bg-gold px-8 py-3 text-sm font-semibold text-black transition hover:bg-gold-light hover:border-gold-light"
            >
              Request Your Quote
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Brand focal — logo + motto */}
      <section className="relative overflow-hidden py-24">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[500px] w-[500px] rounded-full border-2 border-gold/20" />
          <div className="absolute h-[700px] w-px rotate-45 bg-gradient-to-b from-transparent via-gold/10 to-transparent" />
          <div className="absolute h-[700px] w-px -rotate-45 bg-gradient-to-b from-transparent via-gold/10 to-transparent" />
        </div>
        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
          <Image
            src="/logo.png"
            alt="Aurelian Surfaces"
            width={120}
            height={120}
            className="gold-glow mb-8"
          />
          <p className="text-lg leading-8 text-white">
            When your property deserves more than a quick coat — when you want
            surfaces that look exceptional and perform even better —{" "}
            <span className="font-semibold text-gold">{site.motto}</span>.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {site.badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border-2 border-gold bg-gold/15 px-5 py-2 text-xs font-semibold tracking-[0.15em] text-white uppercase"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
