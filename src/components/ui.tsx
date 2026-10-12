"use client";

import type { ReactNode } from "react";
import { PHONE_TEL, whatsappHref } from "@/lib/site";
import { useLanguage } from "@/components/language";

export function Diamond() {
  return (
    <span
      className="inline-block size-1.5 rotate-45 bg-gold"
      aria-hidden="true"
    />
  );
}

export function SampleBadge() {
  const { t } = useLanguage();
  return (
    <span className="inline-flex items-center rounded-full border border-gold/40 bg-gold/10 px-2 py-0.5 text-[0.68rem] font-semibold label-track text-gold">
      {t.sample}
    </span>
  );
}

export function BookButtons({
  className = "",
  onDark = false,
}: {
  className?: string;
  onDark?: boolean;
}) {
  const { t } = useLanguage();
  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${className}`}>
      <a
        className={onDark ? "btn-gold" : "btn-primary"}
        href={whatsappHref(t.whatsappMessage)}
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsAppIcon />
        {t.whatsapp}
      </a>
      <a className={onDark ? "btn-line-light" : "btn-line"} href={PHONE_TEL}>
        {t.call}
        <span className={onDark ? "text-cream/70" : "text-mist"}>+91 77718 42703</span>
      </a>
    </div>
  );
}

export function SectionIntro({
  kicker,
  title,
  lead,
}: {
  kicker?: string;
  title: string;
  lead?: string;
}) {
  return (
    <div className="max-w-2xl">
      {kicker ? (
        <p className="mb-3 flex items-center gap-3 text-xs font-medium label-track text-gold">
          <Diamond />
          {kicker}
        </p>
      ) : null}
      <h2 className="font-display text-4xl leading-tight text-navy sm:text-5xl">
        {title}
      </h2>
      {lead ? <p className="mt-4 text-lg leading-relaxed text-mist">{lead}</p> : null}
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true" fill="currentColor">
      <path d="M20.5 3.5A11 11 0 0 0 2.1 16.7L1 23l6.5-1.1A11 11 0 0 0 20.5 3.5Zm-8.5 17a9.1 9.1 0 0 1-4.6-1.3l-.3-.2-3.9.6.6-3.8-.2-.3A9.1 9.1 0 1 1 12 20.5Zm5-6.8c-.3-.1-1.6-.8-1.8-.9s-.4-.1-.6.1-.7.9-.8 1-.3.2-.6.1a7.4 7.4 0 0 1-2.2-1.4 8 8 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.5.2-.3a.5.5 0 0 0 0-.5c0-.1-.6-1.4-.8-1.9s-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4 4 4 0 0 0 3.1.3 2.5 2.5 0 0 0 1.6-1.1 2 2 0 0 0 .1-1.2c-.1-.1-.3-.2-.6-.3Z" />
    </svg>
  );
}

export function IconFrame({ children }: { children: ReactNode }) {
  return (
    <span className="grid size-11 place-items-center rounded-2xl border border-sand bg-paper text-navy">
      {children}
    </span>
  );
}
