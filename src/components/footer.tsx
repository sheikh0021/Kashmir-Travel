"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language";
import { PHONE_DISPLAY, PHONE_TEL, whatsappHref } from "@/lib/site";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="panel-dusk text-cream">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-3xl">{t.brand}</p>
          <p className="mt-2 max-w-xs text-sm leading-6 text-cream/75">{t.footerLine}</p>
        </div>
        <div className="text-sm leading-6">
          <p>{t.officeLines.join(" ")}</p>
          <a className="mt-1 inline-block font-medium text-gold-bright" href={PHONE_TEL}>
            {PHONE_DISPLAY}
          </a>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-cream/75">
          <Link href="/strangers" className="hover:text-gold-bright">
            {t.nav.draw}
          </Link>
          <Link href="/gallery" className="hover:text-gold-bright">
            {t.nav.gallery}
          </Link>
          <Link href="/faq" className="hover:text-gold-bright">
            {t.nav.faq}
          </Link>
          <Link href="/contact" className="hover:text-gold-bright">
            {t.nav.contact}
          </Link>
        </div>
      </div>
    </footer>
  );
}

export function MobileBookBar() {
  const { t } = useLanguage();
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-sand bg-white/95 p-3 backdrop-blur md:hidden">
      <a className="btn-line" href="tel:+917771842703">
        {t.call}
      </a>
      <a
        className="btn-primary"
        href={whatsappHref(t.whatsappMessage)}
        target="_blank"
        rel="noopener noreferrer"
      >
        {t.whatsapp}
      </a>
    </div>
  );
}
