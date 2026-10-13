"use client";

import { useState } from "react";
import { useLanguage } from "@/components/language";
import { BookButtons, SampleBadge, SectionIntro } from "@/components/ui";

export function FaqView() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(0);

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-5 sm:py-14">
      <SectionIntro title={t.faqTitle} lead={t.faqLead} />
      <ul className="mt-10 divide-y divide-sand border-y border-sand">
        {t.faqs.map((item, index) => {
          const expanded = open === index;
          return (
            <li key={item.q}>
              <button
                type="button"
                className="flex w-full items-start justify-between gap-4 py-5 text-left"
                aria-expanded={expanded}
                onClick={() => setOpen(expanded ? -1 : index)}
              >
                <span className="flex flex-wrap items-center gap-3">
                  <span className="font-medium text-navy">{item.q}</span>
                  {item.sample ? <SampleBadge /> : null}
                </span>
                <span className="mt-1 text-gold" aria-hidden="true">
                  {expanded ? "–" : "+"}
                </span>
              </button>
              {expanded ? (
                <p className="pb-5 pr-8 leading-7 text-mist">{item.a}</p>
              ) : null}
            </li>
          );
        })}
      </ul>
      <BookButtons className="mt-10" />
    </div>
  );
}
