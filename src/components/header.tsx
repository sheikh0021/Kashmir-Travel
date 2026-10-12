"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLanguage } from "@/components/language";
import { whatsappHref } from "@/lib/site";

const links = [
  { href: "/", key: "home" },
  { href: "/strangers", key: "draw" },
  { href: "/gallery", key: "gallery" },
  { href: "/faq", key: "faq" },
  { href: "/contact", key: "contact" },
] as const;

export function Header() {
  const pathname = usePathname();
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-sand/80 bg-[#fffaf4]/85 shadow-[0_10px_30px_-24px_rgba(154,83,20,0.7)] backdrop-blur-md">
      <div className="h-1 bg-gradient-to-r from-[#e08a2a] via-[#f3d08f] to-[#2f7c8a]" aria-hidden="true" />
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-4 px-5">
        <Link href="/" className="group flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-full bg-gradient-to-br from-[#f6d7a2] to-[#c47a2a] shadow-sm">
            <span className="size-2 rotate-45 bg-navy" aria-hidden="true" />
          </span>
          <span>
            <span className="font-display block text-2xl leading-none tracking-wide text-navy">
              {t.brand}
            </span>
            <span className="mt-1 block text-[0.65rem] label-track text-mist">
              Jabalpur · Kashmir
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wide ${active ? "text-gold" : "text-mist hover:text-navy"}`}
                aria-current={active ? "page" : undefined}
              >
                {t.nav[link.key]}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <div
            className="flex rounded-full border border-sand bg-white p-0.5 text-xs font-medium"
            role="group"
            aria-label={t.langLabel}
          >
            <button
              type="button"
              className={`rounded-full px-2.5 py-1 ${lang === "en" ? "bg-navy text-cream" : "text-mist"}`}
              aria-pressed={lang === "en"}
              onClick={() => setLang("en")}
            >
              EN
            </button>
            <button
              type="button"
              className={`rounded-full px-2.5 py-1 ${lang === "hi" ? "bg-navy text-cream" : "text-mist"}`}
              aria-pressed={lang === "hi"}
              onClick={() => setLang("hi")}
            >
              हिं
            </button>
          </div>
          <a
            className="btn-primary hidden px-4 py-2 sm:inline-flex"
            href={whatsappHref(t.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.whatsapp}
          </a>
          <button
            type="button"
            className="grid size-10 place-items-center rounded-full border border-sand md:hidden"
            aria-expanded={open}
            aria-label={open ? t.closeMenu : t.openMenu}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? t.closeMenu : t.openMenu}</span>
            <span className="flex w-4 flex-col gap-1" aria-hidden="true">
              <span className="h-px bg-navy" />
              <span className="h-px bg-navy" />
              <span className="h-px bg-navy" />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-sand px-5 py-4 md:hidden" aria-label="Mobile">
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block border-b border-sand/70 py-3 text-lg text-navy"
                >
                  {t.nav[link.key]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
