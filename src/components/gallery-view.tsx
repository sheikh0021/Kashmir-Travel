"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useLanguage } from "@/components/language";
import { SectionIntro } from "@/components/ui";
import { galleryImages, type GalleryId } from "@/lib/site";

export function GalleryView() {
  const { t } = useLanguage();
  const [active, setActive] = useState<GalleryId | null>(null);
  const current = galleryImages.find((image) => image.id === active);

  useEffect(() => {
    if (!active) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-14">
      <SectionIntro title={t.galleryTitle} lead={t.galleryLead} />
      <p className="mt-6 max-w-3xl rounded-2xl border border-gold/30 bg-gold/10 px-4 py-3 text-sm leading-6 text-navy">
        {t.galleryNote}
      </p>
      <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {galleryImages.map((image, index) => (
          <li key={image.id} className={index === 0 ? "sm:col-span-2" : ""}>
            <button
              type="button"
              className="group block w-full text-left"
              onClick={() => setActive(image.id)}
            >
              <span
                className={`relative block overflow-hidden rounded-3xl ${index === 0 ? "aspect-[16/9]" : "aspect-[4/3]"}`}
              >
                <Image
                  src={image.src}
                  alt={t.captions[image.id]}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes={index === 0 ? "(min-width: 1024px) 70vw, 100vw" : "(min-width: 1024px) 30vw, 50vw"}
                />
              </span>
              <span className="mt-2 flex items-baseline justify-between gap-3">
                <span className="text-sm text-navy">{t.captions[image.id]}</span>
                <span className="text-xs text-mist">{image.credit}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-xs text-mist">{t.photoCredit}</p>

      {current ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={t.captions[current.id]}
        >
          <button
            type="button"
            className="absolute inset-0 cursor-zoom-out"
            aria-label={t.closePhoto}
            onClick={() => setActive(null)}
          />
          <figure className="relative z-10 w-full max-w-5xl">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-navy">
              <Image
                src={current.src}
                alt={t.captions[current.id]}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
            <figcaption className="mt-3 flex items-center justify-between text-sm text-cream">
              <span>{t.captions[current.id]}</span>
              <button
                type="button"
                className="rounded-full border border-white/30 px-3 py-1"
                onClick={() => setActive(null)}
              >
                {t.closePhoto}
              </button>
            </figcaption>
          </figure>
        </div>
      ) : null}
    </div>
  );
}
