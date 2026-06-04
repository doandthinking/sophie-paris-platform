import type { Locale } from "@/i18n/routing";
import type { Messages } from "@/i18n/request";
import { brand } from "@/config/brand";
import { LocalizedLink } from "@/components/v3/LocalizedLink";

export function V3Footer({ locale, messages }: { locale: Locale; messages: Messages }) {
  return (
    <footer className="border-t border-zinc-200 bg-white pb-20 md:pb-0">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.6fr_1fr_1fr] lg:px-8">
        <div>
          <p className="font-semibold text-navy">{locale.startsWith("zh") ? brand.nameZhCN : brand.name}</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-600">{messages.brand.tagline}</p>
          <p className="mt-3 text-xs leading-5 text-zinc-500">
            MVP DEMO: no real payment, ticketing, authentication, messaging, reward redemption or official partnership is enabled.
          </p>
        </div>
        <div className="grid gap-2 text-sm text-zinc-600">
          <p className="font-semibold text-navy">Explore</p>
          <LocalizedLink locale={locale} href="/services">Services</LocalizedLink>
          <LocalizedLink locale={locale} href="/cruises">Seine cruises</LocalizedLink>
          <LocalizedLink locale={locale} href="/community">Paris Together</LocalizedLink>
          <LocalizedLink locale={locale} href="/admin">Admin DEMO</LocalizedLink>
        </div>
        <div className="grid gap-2 text-sm text-zinc-600">
          <p className="font-semibold text-navy">Legal</p>
          <LocalizedLink locale={locale} href="/legal/privacy">Privacy TODO</LocalizedLink>
          <LocalizedLink locale={locale} href="/legal/cgu">CGU TODO</LocalizedLink>
          <LocalizedLink locale={locale} href="/legal/community-rules">Community rules</LocalizedLink>
          <LocalizedLink locale={locale} href="/legal/rewards-rules">Rewards rules</LocalizedLink>
        </div>
      </div>
    </footer>
  );
}
