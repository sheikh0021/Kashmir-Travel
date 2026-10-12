"use client";

import {
  createContext,
  useContext,
  useLayoutEffect,
  useState,
  type ReactNode,
} from "react";
import { copy, type Copy, type Lang } from "@/lib/copy";

type LanguageValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Copy;
};

const LanguageContext = createContext<LanguageValue | null>(null);

function applyLang(lang: Lang) {
  document.documentElement.lang = lang;
  document.documentElement.classList.toggle("lang-hi", lang === "hi");
  document.cookie = `al-safar-lang=${lang}; Path=/; Max-Age=31536000; SameSite=Lax`;
}

export function LanguageProvider({
  initialLang,
  children,
}: {
  initialLang: Lang;
  children: ReactNode;
}) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  useLayoutEffect(() => {
    applyLang(lang);
  }, [lang]);

  function setLang(next: Lang) {
    setLangState(next);
    applyLang(next);
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: copy[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const value = useContext(LanguageContext);
  if (!value) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return value;
}
