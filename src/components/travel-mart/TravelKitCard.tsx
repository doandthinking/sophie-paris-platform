import { DemoBadge, StatusBadge } from "@/components/v3/Badges";
import { ButtonLink } from "@/components/v3/LocalizedLink";
import type { Locale } from "@/i18n/routing";
import type { TravelKit } from "@/types/travelKit";
import { tx } from "@/types/service";

export function TravelKitCard({ kit, locale }: { kit: TravelKit; locale: Locale }) {
  return (
    <article className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
      <div className="flex flex-wrap gap-2">
        <DemoBadge />
        <StatusBadge label="人工确认" tone="warning" />
        <StatusBadge label={kit.fulfillmentMode} />
      </div>
      <h2 className="mt-4 text-xl font-semibold text-navy">{tx(kit.title, locale)}</h2>
      <p className="mt-2 text-sm leading-6 text-zinc-600">{tx(kit.summary, locale)}</p>
      <div className="mt-4 text-xs leading-5 text-zinc-500">
        商品 {kit.includedItemIds.length} 个 · 服务 {kit.recommendedServiceIds.length} 个 · 官方资源 {kit.officialResourceIds.length} 个
      </div>
      <div className="mt-5">
        <ButtonLink locale={locale} href={`/travel-mart/kits/${kit.slug}`} variant="secondary">
          查看场景包
        </ButtonLink>
      </div>
    </article>
  );
}
