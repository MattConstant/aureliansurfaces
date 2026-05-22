import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import ProjectImage from "@/components/project-image";
import SectionHeading from "@/components/section-heading";
import { images } from "@/lib/images";
import { imageQuality, imageSizes } from "@/lib/image-config";
import { galleryItems } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Gallery | Aurelian Surfaces",
  description:
    "Browse premium sealcoating and surface protection projects by Aurelian Surfaces in Ottawa.",
};

export default function Gallery() {
  return (
    <>
      {/* Page hero */}
      <section className="surface-texture border-b-2 border-gold/25">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
          <SectionHeading
            eyebrow="Our Work"
            title="Project Gallery"
            description="High-contrast finishes, wet-look asphalt, restored interlock, and protected concrete. The results speak for themselves."
          />
        </div>
      </section>

      {/* Featured before/after */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="overflow-hidden rounded-2xl border-2 border-gold/50 gold-glow">
          <div className="grid md:grid-cols-2">
            <div className="relative aspect-[4/3]">
              <Image
                src={images.before}
                alt="Driveway before sealcoating with alligator cracks and weathered asphalt"
                fill
                unoptimized
                className="object-cover object-center"
                sizes={imageSizes.galleryHalf}
              />
              <div className="absolute inset-0 bg-black/20" />
              <span className="absolute top-4 left-4 rounded-full border-2 border-white/40 bg-black/70 px-4 py-1.5 text-xs font-semibold tracking-[0.25em] text-white uppercase backdrop-blur-sm">
                Before
              </span>
            </div>
            <div className="relative aspect-[4/3]">
              <Image
                src={images.cleanTwo}
                alt="Driveway after sealcoating, deep protected finish"
                fill
                quality={imageQuality.default}
                className="object-cover"
                sizes={imageSizes.galleryHalf}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <span className="absolute top-4 left-4 rounded-full border-2 border-gold bg-black/70 px-4 py-1.5 text-xs font-semibold tracking-[0.25em] text-gold uppercase backdrop-blur-sm">
                After
              </span>
            </div>
          </div>
          <div className="border-t-2 border-gold/30 bg-surface p-6 sm:p-8">
            <h2 className="font-display text-2xl text-white">
              <span className="text-gold">Surface</span> Transformation
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/85">
              Faded, weathered pavement restored to a deep, protected finish.
              The difference professional sealcoating makes.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="mx-auto max-w-6xl px-6 pb-20 lg:pb-28">
        <div className="grid gap-6 sm:grid-cols-2">
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
                  unoptimized={item.image === images.before}
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
            <span className="text-gold">transformed</span>?
          </p>
          <p className="mx-auto mt-3 max-w-lg text-sm text-white/85">
            Contact us for a free estimate on your next project.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-gold px-8 py-3 text-sm font-medium text-black transition hover:bg-gold-light"
          >
            Get a Free Estimate
          </Link>
        </div>
      </section>
    </>
  );
}
