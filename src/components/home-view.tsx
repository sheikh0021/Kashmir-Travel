"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/language";
import { BookButtons, Diamond, SectionIntro } from "@/components/ui";
import { galleryImages } from "@/lib/site";

const previewIds = ["pahalgam", "houseboats", "shikara", "nishat"] as const;

export function HomeView() {
  const { t } = useLanguage();
  const preview = previewIds.map(
    (id) => galleryImages.find((image) => image.id === id)!,
  );

  return (
    <>
      <section className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 pt-12 pb-8 lg:grid-cols-12 lg:gap-14 lg:pt-16">
        <div className="dawn-glow pointer-events-none absolute -top-8 left-0 h-64 w-72 rounded-full blur-2xl" aria-hidden="true" />
        <div className="relative lg:col-span-5">
          <p className="flex items-center gap-3 text-xs font-medium label-track text-gold">
            <Diamond />
            {t.kicker}
            <Diamond />
          </p>
          <p className="mt-6 text-sm label-track text-navy">{t.pack}</p>
          <h1 className="font-display mt-3 text-6xl leading-[0.92] text-navy sm:text-7xl">
            {t.title}
            <span className="title-accent block text-gold">{t.titleLine2}</span>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-mist">{t.subtitle}</p>
          <BookButtons className="mt-8" />
          <p className="mt-5 text-sm text-mist">{t.itineraryCta}</p>
        </div>

        <div className="lg:col-span-7">
          <div className="relative">
            <div className="photo-frame relative aspect-[4/3] overflow-hidden rounded-[2rem] ring-4 ring-white/80">
              <Image
                src="/gallery/pahalgam.jpg"
                alt={t.captions.pahalgam}
                fill
                priority
                loading="eager"
                className="object-cover"
                sizes="(min-width: 1024px) 58vw, 100vw"
              />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#16343c]/35 to-transparent" />
              <div className="absolute top-4 right-4 hidden w-32 overflow-hidden rounded-2xl shadow-lg ring-4 ring-white/90 sm:block">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/gallery/shikara.jpg"
                    alt={t.captions.shikara}
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </div>
              </div>
            </div>
            <div className="card relative z-10 -mt-16 ml-4 max-w-xs rounded-3xl border border-sand border-l-4 border-l-gold p-6 sm:ml-8">
              <p className="text-xs label-track text-gold">{t.priceKicker}</p>
              <p className="font-display mt-2 text-5xl text-navy">{t.price}</p>
              <p className="mt-1 text-sm text-mist">{t.priceNote}</p>
              <div className="mt-4 border-t border-sand pt-4">
                <p className="font-display text-2xl text-navy">{t.days}</p>
                <p className="text-sm text-mist">{t.daysDetail}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <SectionIntro title={t.includedTitle} lead={t.includedLead} />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.inclusions.map((item, index) => (
            <li
              key={item.title}
              className="card overflow-hidden rounded-3xl border border-sand"
            >
              <span
                className={`block h-2 ${["bg-[#d97706]", "bg-[#e0a020]", "bg-[#1a8a98]", "bg-[#1f6a48]"][index % 4]}`}
                aria-hidden="true"
              />
              <div className="p-6">
                <p className="font-display text-3xl text-navy">{item.title}</p>
                <p className="mt-3 text-sm leading-6 text-mist">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16">
        <div className="card overflow-hidden rounded-[2rem] border border-sand">
          <div className="grid lg:grid-cols-2">
            <div className="panel-dusk px-8 py-12 text-cream sm:px-12">
              <p className="text-xs label-track text-gold-bright">
                {t.kicker}
              </p>
              <p className="font-display mt-4 text-6xl">{t.days}</p>
              <p className="mt-2 text-lg text-cream/80">{t.daysDetail}</p>
              <p className="font-display mt-8 text-5xl text-gold-bright">{t.price}</p>
              <p className="mt-2 text-sm text-cream/70">{t.priceNote}</p>
            </div>
            <div className="px-8 py-12 sm:px-12">
              <h2 className="font-display text-4xl text-navy">{t.stepsTitle}</h2>
              <ol className="mt-8 space-y-6">
                {t.steps.map((step) => (
                  <li key={step.n} className="grid grid-cols-[auto_1fr] gap-4">
                    <span className="font-display text-2xl text-gold">{step.n}</span>
                    <span>
                      <span className="block font-medium text-navy">{step.title}</span>
                      <span className="mt-1 block text-sm leading-6 text-mist">
                        {step.text}
                      </span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionIntro title={t.galleryTitle} lead={t.galleryLead} />
          <Link href="/gallery" className="btn-line">
            {t.seeGallery}
          </Link>
        </div>
        <p className="mt-6 max-w-3xl text-sm leading-6 text-mist">{t.galleryNote}</p>
        <ul className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {preview.map((image, index) => (
            <li
              key={image.id}
              className={index === 0 ? "col-span-2 row-span-2" : ""}
            >
              <Link href="/gallery" className="group block">
                <span
                  className={`relative block overflow-hidden rounded-3xl ${index === 0 ? "aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-80" : "aspect-[4/3]"}`}
                >
                  <Image
                    src={image.src}
                    alt={t.captions[image.id]}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes={index === 0 ? "(min-width: 1024px) 50vw, 100vw" : "25vw"}
                  />
                </span>
                <span className="mt-2 block text-sm text-navy">{t.captions[image.id]}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-4">
        <div className="card grid items-center gap-8 rounded-[2rem] border border-sand px-8 py-10 lg:grid-cols-[1.4fr_auto]">
          <div>
            <p className="label-track text-xs text-gold">{t.family.kicker}</p>
            <h2 className="font-display mt-3 text-4xl text-navy sm:text-5xl">{t.family.homeTitle}</h2>
            <p className="mt-3 max-w-xl text-mist">{t.family.homeLead}</p>
          </div>
          <Link href="/strangers" className="btn-primary">
            {t.family.homeLink}
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="panel-dusk rounded-[2rem] px-8 py-14 text-center text-cream sm:px-16">
          <p className="text-xs label-track text-gold-bright">{t.pack}</p>
          <h2 className="font-display mt-4 text-5xl sm:text-6xl">{t.bandTitle}</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-cream/75">{t.bandText}</p>
          <BookButtons className="mt-8 justify-center" onDark />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionIntro title={t.faqTitle} />
          <Link href="/faq" className="btn-line">
            {t.seeFaq}
          </Link>
        </div>
        <ul className="mt-8 divide-y divide-sand border-y border-sand">
          {t.faqs.slice(0, 4).map((item) => (
            <li key={item.q} className="grid gap-2 py-5 sm:grid-cols-[1fr_1.4fr] sm:gap-10">
              <p className="font-medium text-navy">{item.q}</p>
              <p className="text-mist">{item.a}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
