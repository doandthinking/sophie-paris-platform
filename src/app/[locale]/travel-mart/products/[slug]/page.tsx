import { notFound } from "next/navigation";
import { PageHeader } from "@/components/v3/PageHeader";
import { ButtonLink } from "@/components/v3/LocalizedLink";
import { DemoBadge, StatusBadge } from "@/components/v3/Badges";
import { RecommendationBlock } from "@/components/travel-mart/RecommendationBlock";
import { getLocaleOrDefault } from "@/i18n/request";
import { locales } from "@/i18n/routing";
import { travelMartItems } from "@/data/travelMartItems";
import { getRecommendationsForContext } from "@/lib/recommendations";
import { tx } from "@/types/service";

type PageProps = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return locales.flatMap((locale) => travelMartItems.map((item) => ({ locale, slug: item.slug })));
}

export default async function TravelMartProductDetailPage({ params }: PageProps) {
  const { locale: localeParam, slug } = await params;
  const locale = getLocaleOrDefault(localeParam);
  const item = travelMartItems.find((entry) => entry.slug === slug);

  if (!item) notFound();

  return (
    <>
      <PageHeader
        eyebrow="Travel Mart Item"
        title={tx(item.title, locale)}
        description={tx(item.summary, locale)}
        actions={<ButtonLink locale={locale} href="/travel-mart/delivery-request">提交需求</ButtonLink>}
      />
      <section className="bg-mist py-10">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="flex flex-wrap gap-2">
              <DemoBadge />
              <StatusBadge label="价格以合作方确认为准" tone="warning" />
              <StatusBadge label="库存待合作方确认" tone="warning" />
            </div>
            <dl className="mt-6 grid gap-3 text-sm text-zinc-600">
              <div><dt className="font-semibold text-navy">类型</dt><dd>{item.itemType}</dd></div>
              <div><dt className="font-semibold text-navy">分类</dt><dd>{item.category}</dd></div>
              <div><dt className="font-semibold text-navy">履约方式</dt><dd>{item.fulfillmentMode}</dd></div>
              <div><dt className="font-semibold text-navy">库存</dt><dd>{item.stockStatus}</dd></div>
            </dl>
          </div>
          <div className="grid gap-5">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-navy">MVP 边界</h2>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-600">
                <li>· 不生成真实购物车付款。</li>
                <li>· 不生成真实订单或配送时间。</li>
                <li>· 不公开游客酒店房间号。</li>
                <li>· 商品、图片、库存和价格均需商户合作确认。</li>
              </ul>
            </div>
            <RecommendationBlock rules={getRecommendationsForContext(item.slug)} />
          </div>
        </div>
      </section>
    </>
  );
}
