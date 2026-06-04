import { Ship, Ticket, Waves } from "lucide-react";
import type { Locale } from "@/i18n/routing";
import type { Cruise } from "@/types/cruise";
import { tx } from "@/types/service";
import { ButtonLink } from "@/components/v3/LocalizedLink";
import { DemoBadge, StatusBadge } from "@/components/v3/Badges";

export function CruiseCard({ cruise, locale }: { cruise: Cruise; locale: Locale }) {
  return (
    <article className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
      <div className="flex flex-wrap gap-2">
        <DemoBadge />
        <StatusBadge label="预约意向" />
        <StatusBadge label="Partner seller" tone="warning" />
      </div>
      <div className="mt-4 flex items-start gap-3">
        <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy text-champagne">
          <Ship aria-hidden className="h-5 w-5" />
        </span>
        <div>
          <h3 className="text-xl font-semibold text-navy">{tx(cruise.title, locale)}</h3>
          <p className="mt-2 text-sm leading-6 text-zinc-600">{tx(cruise.summary, locale)}</p>
        </div>
      </div>
      <div className="mt-5 grid gap-2 text-sm text-zinc-600">
        <p className="flex items-center gap-2">
          <Waves aria-hidden className="h-4 w-4 text-champagne" />
          {tx(cruise.duration, locale)}
        </p>
        <p className="flex items-center gap-2">
          <Ticket aria-hidden className="h-4 w-4 text-champagne" />
          不内部出票，不生成二维码
        </p>
      </div>
      <div className="mt-6">
        <ButtonLink locale={locale} href={`/cruises/${cruise.slug}`} className="w-full">
          查看游船意向页
        </ButtonLink>
      </div>
    </article>
  );
}
