import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import PageContainer from "@/components/page-container";
import SectionHeading from "@/components/section-heading";
import ServiceCard from "@/components/service-card";
import { images } from "@/lib/images";
import { featuredServices, highlights, site, siteDescription } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Home | Aurelian Surfaces",
  description: siteDescription,
};

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen w-full overflow-hidden border-b-2 border-gold/25">
        <div className="absolute inset-0">
          <Image
            src={images.homeBackground}
            alt=""
            fill
            priority
            unoptimized
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/25 to-black/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent" />
        </div>

        <PageContainer className="relative z-10 flex min-h-screen flex-col justify-center gap-12 py-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
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
              {site.legalName} delivers premium asphalt, concrete, and interlock
              protection for luxury homes, commercial properties, and industrial
              sites across {site.location}. Detail-oriented preparation, eco-friendly
              products, and results built for harsh Canadian climates.
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
        </PageContainer>
      </section>

      <section className="section-gold w-full">
        <PageContainer className="py-16">
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
        </PageContainer>
      </section>

      <section className="py-20 lg:py-28">
        <PageContainer>
        <SectionHeading
          eyebrow="What We Do"
          title="Surface Protection & Asphalt Services"
          description="From residential driveways to commercial parking lots, we seal, repair, and maintain asphalt, concrete, and interlock with commercial-grade equipment and premium finishes."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-white/75">
          Crack filling, pothole repair, line painting, polymeric sand, and full
          commercial maintenance also available.{" "}
          <Link href="/contact" className="font-medium text-gold hover:text-gold-light">
            Contact us
          </Link>{" "}
          for a complete service list and free estimate.
        </p>
        </PageContainer>
      </section>

      <section className="section-band w-full bg-surface surface-texture">
        <PageContainer className="grid gap-12 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
          <SectionHeading
            eyebrow="Why Aurelian"
            title="Built to Withstand the Elements"
            description="Luxury branding meets commercial-grade equipment and detail-oriented preparation. Our eco-friendly products are engineered for Ottawa's freeze-thaw cycles, road salt, UV exposure, and heavy traffic."
            className="max-w-none"
          />
          <div className="flex flex-col gap-6 lg:pl-8">
            <div className="card-gold-accent rounded-2xl p-8">
              <p className="font-display text-2xl text-white">
                Commercial &{" "}
                <span className="text-gold">Residential</span> Experts
              </p>
              <p className="mt-4 text-sm leading-6 text-white/85">
                Homeowners, luxury estates, condo managers, retail plazas, and
                industrial properties trust us for premium long-term surface
                protection and curb appeal that lasts.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex w-fit items-center gap-2 rounded-full border-2 border-gold bg-gold px-8 py-3 text-sm font-semibold text-black transition hover:bg-gold-light hover:border-gold-light"
            >
              Request Your Quote
              <span aria-hidden>→</span>
            </Link>
          </div>
        </PageContainer>
      </section>

      <section className="relative overflow-hidden py-24">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[500px] w-[500px] rounded-full border-2 border-gold/20" />
          <div className="absolute h-[700px] w-px rotate-45 bg-gradient-to-b from-transparent via-gold/10 to-transparent" />
          <div className="absolute h-[700px] w-px -rotate-45 bg-gradient-to-b from-transparent via-gold/10 to-transparent" />
        </div>
        <PageContainer className="relative flex flex-col items-center text-center">
          <div className="max-w-3xl">
          <Image
            src="/logo.png"
            alt="Aurelian Surfaces"
            width={120}
            height={120}
            className="gold-glow mb-8"
          />
          <p className="text-lg leading-8 text-white">
            When your property deserves more than a quick coat, trust{" "}
            {site.legalName} for surfaces that look exceptional and perform even
            better.{" "}
            <span className="font-semibold text-gold">{site.motto}</span>
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:flex-nowrap sm:gap-3">
            {site.badges.map((badge) => (
              <span
                key={badge}
                className="whitespace-nowrap rounded-full border-2 border-gold bg-gold/15 px-4 py-2 text-[10px] font-semibold tracking-[0.12em] text-white uppercase sm:text-xs"
              >
                {badge}
              </span>
            ))}
          </div>
          </div>
        </PageContainer>
      </section>
    </>
  );
}
