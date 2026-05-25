import Link from "next/link";
import type { Metadata } from "next";
import PageContainer from "@/components/page-container";
import ProjectImage from "@/components/project-image";
import SectionHeading from "@/components/section-heading";
import { galleryItems, siteDescription } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Gallery | Aurelian Surfaces",
  description: `${siteDescription} Browse our portfolio of premium sealcoating and surface protection projects.`,
};

export default function Gallery() {
  return (
    <>
      <section className="section-band w-full surface-texture">
        <PageContainer className="py-20 lg:py-28">
          <SectionHeading
            eyebrow="Our Work"
            title="Project Gallery"
            description="Premium workmanship for residential estates and commercial properties across Ottawa. Lasting protection you can trust."
          />
        </PageContainer>
      </section>

      <section className="pb-20 lg:pb-28">
        <PageContainer>
          <SectionHeading
            eyebrow="Featured Work"
            title="Recent Projects"
            description="After photos from residential and commercial surface protection projects."
            align="center"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {galleryItems.map((item) => (
              <article
                key={item.title}
                className={`card-gold-accent group relative overflow-hidden rounded-2xl bg-surface transition hover:shadow-[0_0_40px_rgba(212,175,55,0.12)] ${
                  "wide" in item && item.wide ? "sm:col-span-2" : ""
                }`}
              >
                <div className="relative">
                  <ProjectImage
                    src={item.image}
                    alt={item.description}
                    aspectClass={
                      "wide" in item && item.wide ? "aspect-[21/9]" : "aspect-[4/3]"
                    }
                    priority={"wide" in item && item.wide}
                    wide={"wide" in item && item.wide}
                    unoptimized
                  />
                  <span className="absolute top-4 left-4 z-10 rounded-full border border-gold/50 bg-black/70 px-3 py-1 text-[10px] tracking-[0.2em] text-gold uppercase backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>
                <div className="p-5 sm:p-6">
                  <h2 className="font-display text-xl text-white">
                    <span className="text-gold">{item.title.split(" ")[0]}</span>{" "}
                    {item.title.split(" ").slice(1).join(" ")}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-white/80">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 rounded-2xl border-2 border-gold/40 bg-surface p-8 text-center section-gold sm:p-12">
            <p className="font-display text-2xl text-white sm:text-3xl">
              Ready to see your surfaces{" "}
              <span className="text-gold">protected</span>?
            </p>
            <p className="mx-auto mt-3 max-w-lg text-sm text-white/85">
              Contact us for a free estimate on your next project.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-full bg-gold px-8 py-3 text-sm font-medium text-black transition hover:bg-gold-light"
            >
              Request a Quote
            </Link>
          </div>
        </PageContainer>
      </section>
    </>
  );
}
