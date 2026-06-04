import { AlertTriangle, Globe2, Home, ShieldCheck } from "lucide-react";
import type { Locale } from "@/i18n/routing";
import type { Messages } from "@/i18n/request";
import { brand } from "@/config/brand";
import { ButtonLink, LocalizedLink } from "@/components/v3/LocalizedLink";
import { LanguageSwitcher } from "@/components/v3/LanguageSwitcher";

const nav = [
  { href: "/", key: "home" },
  { href: "/signature", key: "signature" },
  { href: "/services", key: "certified" },
  { href: "/travel-mart", label: "旅行超市" },
  { href: "/moments", label: "旅拍" },
  { href: "/cruises", key: "cruises" },
  { href: "/help/emergency", key: "safe" },
  { href: "/community", key: "community" },
  { href: "/trip-board", label: "我的行程" },
  { href: "/rewards", key: "rewards" },
  { href: "/merchants", label: "商户" },
  { href: "/providers/apply", key: "providers" },
] as const;

export function V3Header({ locale, messages }: { locale: Locale; messages: Messages }) {
  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-white/92 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <LocalizedLink locale={locale} href="/" className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-navy text-champagne">
            <ShieldCheck aria-hidden className="h-5 w-5" />
          </span>
          <span>
            <span className="block text-sm font-semibold text-navy">
              {locale.startsWith("zh") ? brand.nameZhCN : brand.name}
            </span>
            <span className="block text-xs text-zinc-500">Paris Local Link</span>
          </span>
        </LocalizedLink>
        <div className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <LocalizedLink
              key={item.href}
              locale={locale}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-600 hover:bg-mist hover:text-navy"
            >
              {"label" in item ? item.label : messages.nav[item.key]}
            </LocalizedLink>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 md:flex">
            <Globe2 aria-hidden className="h-4 w-4 text-zinc-500" />
            <LanguageSwitcher currentLocale={locale} />
          </div>
          <ButtonLink locale={locale} href="/help/emergency" variant="danger" className="hidden sm:inline-flex">
            <AlertTriangle aria-hidden className="mr-2 h-4 w-4" />
            {messages.home.emergency}
          </ButtonLink>
        </div>
      </nav>
      <div className="flex gap-2 overflow-x-auto border-t border-zinc-100 px-4 py-2 lg:hidden">
        {nav.slice(0, 7).map((item) => (
          <LocalizedLink
            key={item.href}
            locale={locale}
            href={item.href}
            className="shrink-0 rounded-full bg-mist px-3 py-1.5 text-xs font-medium text-zinc-700"
          >
            {"label" in item ? item.label : messages.nav[item.key]}
          </LocalizedLink>
        ))}
      </div>
      <div className="border-t border-rose-100 bg-rose-50 px-4 py-2 sm:hidden">
        <ButtonLink locale={locale} href="/help/emergency" variant="danger" className="w-full">
          {messages.home.emergency}
        </ButtonLink>
      </div>
    </header>
  );
}

export function MobileBottomNavigation({ locale, messages }: { locale: Locale; messages: Messages }) {
  const items = [
    { href: "/", label: messages.nav.home, icon: Home },
    { href: "/services", label: "探索", icon: Globe2 },
    { href: "/book", label: messages.nav.book, icon: ShieldCheck },
    { href: "/help/emergency", label: messages.nav.safe, icon: AlertTriangle },
    { href: "/account", label: messages.nav.account, icon: ShieldCheck },
  ];

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-5 border-t border-zinc-200 bg-white/95 px-2 py-2 backdrop-blur md:hidden">
      {items.map((item) => (
        <LocalizedLink key={item.href} locale={locale} href={item.href} className="flex flex-col items-center gap-1 rounded-lg px-1 py-1 text-[11px] font-medium text-zinc-600">
          <item.icon aria-hidden className="h-4 w-4" />
          <span>{item.label}</span>
        </LocalizedLink>
      ))}
    </nav>
  );
}
