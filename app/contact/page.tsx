import Image from "next/image";
import type { Metadata } from "next";
import PageContainer from "@/components/page-container";
import ContactForm from "@/app/contact/contact-form";
import SectionHeading from "@/components/section-heading";
import { contactCards } from "@/lib/contact-info";
import { getWeb3FormsAccessKey } from "@/lib/env";
import { services, site, siteDescription } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Contact | Aurelian Surfaces",
  description: siteDescription,
};

export default async function Contact() {
  const accessKey = getWeb3FormsAccessKey();

  return (
    <>
      <section className="section-band w-full surface-texture">
        <PageContainer className="flex flex-col items-center py-16 text-center lg:py-24">
          <Image
            src="/logo.png"
            alt="Aurelian Surfaces"
            width={100}
            height={100}
            className="gold-glow mb-6"
          />
          <p className="text-xs tracking-[0.35em] text-gold uppercase">
            {site.legalName}
          </p>
          <h1 className="font-display mt-4 text-4xl tracking-wide text-white sm:text-5xl">
            {site.tagline}
          </h1>
          <div className="my-6 flex w-full max-w-sm items-center gap-4">
            <span className="h-px flex-1 bg-gold" />
            <span className="text-sm font-semibold tracking-[0.2em] text-white uppercase">
              {site.motto}
            </span>
            <span className="h-px flex-1 bg-gold" />
          </div>
          <p className="max-w-2xl text-sm leading-7 text-white/90">
            {site.owner}, {site.ownerTitle} · {site.operationsManager},{" "}
            {site.operationsTitle}. Serving residential and commercial clients
            across {site.location}. Free on-site estimates and premium
            long-lasting results.
          </p>
        </PageContainer>
      </section>

      <section className="py-16 lg:py-24">
        <PageContainer>
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <SectionHeading
                eyebrow="Get In Touch"
                title="Request a Free Estimate"
                description="Tell us about your driveway, parking lot, patio, or commercial property. We respond with a detailed quote tailored to your project."
              />
              <ContactForm accessKey={accessKey} />
            </div>

            <aside className="flex flex-col gap-6">
              {contactCards.map((item) => (
                <div
                  key={item.label}
                  className="card-gold-accent rounded-2xl bg-surface p-6 transition hover:shadow-[0_0_30px_rgba(212,175,55,0.1)]"
                >
                  <p className="text-xs tracking-[0.25em] text-gold uppercase">
                    {item.label}
                  </p>
                  {"href" in item && item.href ? (
                    <a
                      href={item.href}
                      className="mt-2 block text-base text-white/90 transition hover:text-gold"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-2 text-base text-white/90">{item.value}</p>
                  )}
                </div>
              ))}

              <div className="rounded-2xl border-2 border-gold bg-black/80 p-6 surface-texture">
                <p className="text-xs tracking-[0.25em] text-gold uppercase">
                  Services
                </p>
                <ul className="mt-4 flex max-h-80 flex-col gap-1.5 overflow-y-auto pr-1">
                  {services.map((s) => (
                    <li
                      key={s.title}
                      className="text-sm font-medium text-white before:mr-2 before:text-gold before:content-['•']"
                    >
                      {s.title}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </PageContainer>
      </section>
    </>
  );
}
