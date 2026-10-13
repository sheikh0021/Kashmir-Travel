"use client";

import Image from "next/image";
import { useLanguage } from "@/components/language";
import { BookButtons, SectionIntro } from "@/components/ui";
import { MAPS_URL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

export function ContactView() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-5 sm:py-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
      <div>
        <SectionIntro title={t.contactTitle} lead={t.contactLead} />
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <article className="card rounded-3xl border border-sand p-6">
            <p className="text-xs label-track text-gold">{t.officeLabel}</p>
            <p className="mt-3 text-lg leading-7 text-navy">
              {t.officeLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
            <a
              className="mt-4 inline-block text-sm font-medium text-navy underline decoration-gold underline-offset-4"
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.map}
            </a>
          </article>
          <article className="card rounded-3xl border border-sand p-6">
            <p className="text-xs label-track text-gold">{t.callLabel}</p>
            <a className="font-display mt-3 block text-3xl whitespace-nowrap text-navy sm:text-4xl" href={PHONE_TEL}>
              {PHONE_DISPLAY}
            </a>
            <p className="mt-3 text-sm leading-6 text-mist">{t.itineraryCta}</p>
          </article>
        </div>
        <BookButtons className="mt-8" />
      </div>
      <figure className="mx-auto w-full max-w-sm">
        <div className="overflow-hidden rounded-[2rem] border border-sand bg-navy shadow-xl">
          <Image
            src="/gallery/poster.jpg"
            alt={t.posterAlt}
            width={768}
            height={1024}
            className="h-auto w-full"
          />
        </div>
        <figcaption className="mt-3 text-center text-sm text-mist">{t.posterLabel}</figcaption>
      </figure>
    </div>
  );
}
