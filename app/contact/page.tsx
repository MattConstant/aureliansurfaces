import Image from "next/image";
import type { Metadata } from "next";
import SectionHeading from "@/components/section-heading";
import { services, site } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Contact | Aurelian Surfaces",
  description:
    "Contact Aurelian Surfaces for premium sealcoating quotes in Ottawa. Free on-site estimates.",
};

const contactItems = [
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
  {
    label: "Website",
    value: site.website,
    href: `https://${site.website}`,
  },
  {
    label: "Service Area",
    value: site.location,
  },
];

export default function Contact() {
  return (
    <>
      {/* Centered brand header */}
      <section className="surface-texture border-b-2 border-gold/25">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-6 py-16 text-center lg:py-24">
          <Image
            src="/logo.png"
            alt="Aurelian Surfaces"
            width={100}
            height={100}
            className="gold-glow mb-6"
          />
          <p className="text-xs tracking-[0.35em] text-gold uppercase">
            {site.name} Inc.
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
          <p className="max-w-lg text-sm leading-7 text-white/90">
            {site.owner}, Owner, serving residential and commercial clients
            across {site.location}. Free on-site estimates, premium results.
          </p>
        </div>
      </section>

      {/* Split form + contact */}
      <section className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <SectionHeading
              eyebrow="Get In Touch"
              title="Request a Quote"
              description="Tell us about your project and we'll get back to you with a free estimate."
            />
            <form className="mt-10 flex flex-col gap-5">
              {[
                { name: "name", label: "Name", type: "text", placeholder: "Your name" },
                { name: "email", label: "Email", type: "email", placeholder: "you@example.com" },
                { name: "phone", label: "Phone", type: "tel", placeholder: site.phone },
              ].map((field) => (
                <label
                  key={field.name}
                  className="flex flex-col gap-2 text-xs font-medium tracking-[0.15em] text-gold uppercase"
                >
                  {field.label}
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    className="rounded-xl border-2 border-gold/30 bg-surface px-4 py-3 text-base font-normal tracking-normal text-white normal-case outline-none transition placeholder:text-white/40 focus:border-gold focus:ring-1 focus:ring-gold/50"
                  />
                </label>
              ))}
              <label className="flex flex-col gap-2 text-xs font-medium tracking-[0.15em] text-gold uppercase">
                Message
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Describe your surface: driveway, parking lot, patio..."
                  className="rounded-xl border-2 border-gold/30 bg-surface px-4 py-3 text-base font-normal tracking-normal text-white normal-case outline-none transition placeholder:text-white/40 focus:border-gold focus:ring-1 focus:ring-gold/50"
                />
              </label>
              <button
                type="submit"
                className="mt-2 w-fit rounded-full bg-gold px-8 py-3 text-sm font-medium text-black transition hover:bg-gold-light"
              >
                Send Message
              </button>
            </form>
          </div>

          <aside className="flex flex-col gap-6">
            {contactItems.map((item) => (
              <div
                key={item.label}
                className="card-gold-accent rounded-2xl bg-surface p-6 transition hover:shadow-[0_0_30px_rgba(212,175,55,0.1)]"
              >
                <p className="text-xs tracking-[0.25em] text-gold uppercase">
                  {item.label}
                </p>
                {item.href ? (
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
              <ul className="mt-4 flex flex-col gap-2">
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
      </section>
    </>
  );
}
