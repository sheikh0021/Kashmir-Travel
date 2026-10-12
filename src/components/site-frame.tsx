import { cookies } from "next/headers";
import type { ReactNode } from "react";
import { Footer, MobileBookBar } from "@/components/footer";
import { Header } from "@/components/header";
import { LanguageProvider } from "@/components/language";
import type { Lang } from "@/lib/copy";

export async function SiteFrame({ children }: { children: ReactNode }) {
  const saved = (await cookies()).get("al-safar-lang")?.value;
  const lang: Lang = saved === "hi" ? "hi" : "en";

  return (
    <LanguageProvider initialLang={lang}>
      <Header />
      <main className="pb-24 md:pb-0">{children}</main>
      <Footer />
      <MobileBookBar />
    </LanguageProvider>
  );
}
