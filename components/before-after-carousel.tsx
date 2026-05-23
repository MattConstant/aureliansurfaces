"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { beforeAfterSlides } from "@/lib/before-after-slides";

export default function BeforeAfterCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = beforeAfterSlides.length;
  const active = beforeAfterSlides[activeIndex];

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex((index + total) % total);
    },
    [total],
  );

  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goNext, goPrev]);

  return (
    <div className="overflow-hidden rounded-2xl border-2 border-gold/50 bg-black gold-glow lg:rounded-3xl">
      <div className="relative aspect-[3/2] w-full sm:aspect-[16/10] lg:aspect-[8/5] lg:min-h-[28rem] xl:min-h-[34rem]">
        {beforeAfterSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === activeIndex ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={`${slide.title} before and after sealcoating`}
              fill
              unoptimized
              priority={index === 0}
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 1200px, 1400px"
            />
          </div>
        ))}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

        <span className="absolute top-5 left-5 rounded-full border-2 border-white/50 bg-black/70 px-5 py-2 text-[11px] font-semibold tracking-[0.25em] text-white uppercase backdrop-blur-sm sm:top-6 sm:left-6">
          {active.labelBefore}
        </span>
        <span className="absolute top-5 right-5 rounded-full border-2 border-gold bg-black/70 px-5 py-2 text-[11px] font-semibold tracking-[0.25em] text-gold uppercase backdrop-blur-sm sm:top-6 sm:right-6">
          {active.labelAfter}
        </span>

        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous project"
          className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border-2 border-gold/60 bg-black/70 text-gold backdrop-blur-sm transition hover:border-gold hover:bg-gold hover:text-black sm:left-6 sm:h-14 sm:w-14"
        >
          <span aria-hidden className="text-xl leading-none">
            ‹
          </span>
        </button>
        <button
          type="button"
          onClick={goNext}
          aria-label="Next project"
          className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border-2 border-gold/60 bg-black/70 text-gold backdrop-blur-sm transition hover:border-gold hover:bg-gold hover:text-black sm:right-6 sm:h-14 sm:w-14"
        >
          <span aria-hidden className="text-xl leading-none">
            ›
          </span>
        </button>

        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {beforeAfterSlides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`View ${slide.title}`}
              aria-current={index === activeIndex ? "true" : undefined}
              className={`h-2 rounded-full transition-all ${
                index === activeIndex
                  ? "w-8 bg-gold"
                  : "w-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="border-t-2 border-gold/30 bg-surface p-6 sm:p-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="min-w-0 flex-1">
            <p className="text-xs tracking-[0.3em] text-gold uppercase">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(total).padStart(2, "0")}
            </p>
            <h2 className="font-display mt-2 text-2xl text-white sm:text-3xl lg:text-4xl">
              {active.title}
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/85">
              {active.description}
            </p>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-1 lg:max-w-md lg:justify-end">
            {beforeAfterSlides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => goTo(index)}
                className={`relative h-20 w-28 shrink-0 overflow-hidden rounded-lg border-2 transition sm:h-24 sm:w-36 lg:h-28 lg:w-44 ${
                  index === activeIndex
                    ? "border-gold shadow-[0_0_20px_rgba(212,175,55,0.35)]"
                    : "border-white/20 opacity-70 hover:border-gold/50 hover:opacity-100"
                }`}
              >
                <Image
                  src={slide.src}
                  alt=""
                  fill
                  unoptimized
                  className="object-cover"
                  sizes="128px"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
