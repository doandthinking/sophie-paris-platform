import { DemoBadge, StatusBadge } from "@/components/v3/Badges";
import { ButtonLink } from "@/components/v3/LocalizedLink";
import type { Locale } from "@/i18n/routing";
import type { TravelMartItem } from "@/types/travelMart";
import { tx } from "@/types/service";

export function MartItemCard({ item, locale }: { item: TravelMartItem; locale: Locale }) {
  return (
    <article className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
      <div className="flex flex-wrap gap-2">
        <DemoBadge />
        <StatusBadge label={item.stockStatus === "partner-confirmation" ? "库存待合作方确认" : item.stockStatus} tone="warning" />
      </div>
      <h2 className="mt-4 text-xl font-semibold text-navy">{tx(item.title, locale)}</h2>
      <p className="mt-2 text-sm leading-6 text-zinc-600">{tx(item.summary, locale)}</p>
      <div className="mt-4 grid gap-2 text-xs text-zinc-500">
        <span>价格：{tx(item.priceLabel, locale)}</span>
        <span>履约：{item.fulfillmentMode}</span>
        <span>类型：{item.itemType}</span>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {item.travelerTags.slice(0, 3).map((tag) => (
          <StatusBadge key={tag} label={tag} />
        ))}
      </div>
      <div className="mt-5">
        <ButtonLink locale={locale} href={`/travel-mart/products/${item.slug}`} variant="secondary">
          查看详情
        </ButtonLink>
      </div>
    </article>
  );
}
