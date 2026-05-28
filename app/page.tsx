import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import PageContainer from "@/components/page-container";
import SectionHeading from "@/components/section-heading";
import ServiceCard from "@/components/service-card";
import TrustBadges from "@/components/trust-badges";
import { images } from "@/lib/images";
import {
  homeFeaturedServices,
  homeIntro,
  homeIntroSubline,
  servicesSection,
  site,
  siteDescription,
  whyAurelian,
} from "@/lib/site-content";

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
              {homeIntro}
            </p>
            <p className="max-w-md text-sm leading-7 text-white/80 sm:text-base">
              {homeIntroSubline}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-gold px-8 py-3 text-sm font-medium tracking-wide text-black transition hover:bg-gold-light"
              >
                Request a Quote
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

      <section className="border-b-2 border-gold/25 bg-surface surface-texture">
        <PageContainer className="py-16 lg:py-20">
          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-2xl border-2 border-gold/40 gold-glow">
            <Image
              src={images.mansion}
              alt="Luxury estate driveway sealed by Aurelian Surfaces"
              fill
              unoptimized
              className="object-cover object-center"
              sizes="(max-width: 1280px) 100vw, 1152px"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>
          <div className="mt-10">
            <TrustBadges />
          </div>
        </PageContainer>
      </section>

      <section className="py-20 lg:py-28">
        <PageContainer>
          <SectionHeading
            eyebrow={servicesSection.eyebrow}
            title={servicesSection.title}
            description={servicesSection.description}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {homeFeaturedServices.map((service) => (
              <ServiceCard key={service.titleGold + service.titleRest} {...service} />
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-white/75">
            {servicesSection.footnote}{" "}
            <Link
              href="/contact"
              className="font-medium text-gold hover:text-gold-light"
            >
              Contact us
            </Link>
            .
          </p>
        </PageContainer>
      </section>

      <section className="section-band w-full bg-surface surface-texture">
        <PageContainer className="grid gap-12 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
          <SectionHeading
            eyebrow={whyAurelian.eyebrow}
            title={whyAurelian.title}
            description={whyAurelian.description}
            className="max-w-none"
          />
          <div className="flex flex-col gap-6 lg:pl-8">
            <div className="card-gold-accent rounded-2xl p-8">
              <p className="font-display text-2xl text-white">
                <span className="text-gold">{whyAurelian.cardTitleGold}</span>
                {whyAurelian.cardTitleRest
                  ? ` ${whyAurelian.cardTitleRest}`
                  : ""}
              </p>
              <p className="mt-4 text-sm leading-6 text-white/85">
                {whyAurelian.cardBody}
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex w-fit items-center gap-2 rounded-full border-2 border-gold bg-gold px-8 py-3 text-sm font-semibold text-black transition hover:bg-gold-light hover:border-gold-light"
            >
              Request a Quote
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
              src={images.logoLarge}
              alt="Aurelian Surfaces"
              width={120}
              height={120}
              className="gold-glow mx-auto mb-8"
            />
            <p className="text-lg leading-8 text-white">
              When your property deserves more than a quick coat, trust{" "}
              {site.legalName} for surfaces that look exceptional and perform
              even better.{" "}
              <span className="font-semibold text-gold">{site.closingMotto}</span>
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
