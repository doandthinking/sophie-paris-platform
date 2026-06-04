"use client";

import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/routing";
import { locales } from "@/i18n/routing";
import { stripLocale } from "@/i18n/navigation";

const labels: Record<Locale, string> = {
  "zh-CN": "简",
  "zh-TW": "繁",
  fr: "FR",
  en: "EN",
};

export function LanguageSwitcher({ currentLocale }: { currentLocale: Locale }) {
  const pathname = usePathname();
  const unlocalized = stripLocale(pathname);

  return (
    <div className="flex items-center gap-1 rounded-full bg-mist p-1" aria-label="Language switcher">
      {locales.map((locale) => (
        <a
          key={locale}
          href={`/${locale}${unlocalized === "/" ? "" : unlocalized}`}
          className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
            locale === currentLocale ? "bg-navy text-white" : "text-zinc-600 hover:bg-white"
          }`}
        >
          {labels[locale]}
        </a>
      ))}
    </div>
  );
}
