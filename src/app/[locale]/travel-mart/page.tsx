import { PageHeader } from "@/components/v3/PageHeader";
import { ButtonLink } from "@/components/v3/LocalizedLink";
import { DemoBadge, StatusBadge } from "@/components/v3/Badges";
import { TravelKitCard } from "@/components/travel-mart/TravelKitCard";
import { MartItemCard } from "@/components/travel-mart/MartItemCard";
import { getLocaleOrDefault } from "@/i18n/request";
import type { Locale } from "@/i18n/routing";
import { travelMartCategories } from "@/data/travelMartCategories";
import { travelKits } from "@/data/travelKits";
import { travelMartItems } from "@/data/travelMartItems";
import { tx } from "@/types/service";

type PageProps = { params: Promise<{ locale: string }> };

export default async function TravelMartPage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  const locale = getLocaleOrDefault(localeParam);
  const featuredKits = travelKits.slice(0, 8);
  const featuredItems = travelMartItems.slice(0, 6);

  return (
    <>
      <PageHeader
        eyebrow="Paris Travel Mart"
        title="巴黎旅行超市"
        description="缺什么，快速找到。MVP 不囤库存、不建仓、不接支付、不生成真实订单；所有商品、租赁和配送均为 DEMO 或人工确认。"
        actions={<ButtonLink locale={locale} href="/travel-mart/delivery-request">提交需求</ButtonLink>}
      />
      <section className="bg-mist py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {travelMartCategories.filter((category) => category.featured).slice(0, 8).map((category) => (
              <ButtonLink key={category.id} locale={locale} href={`/travel-mart/categories#${category.slug}`} variant="secondary" className="justify-start">
                <span>
                  <span className="block font-semibold">{tx(category.title, locale)}</span>
                  <span className="mt-1 block text-xs text-zinc-500">{tx(category.scenarioLabel, locale)}</span>
                </span>
              </ButtonLink>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <DemoBadge />
              <h2 className="mt-3 text-3xl font-semibold text-navy">场景解决方案包</h2>
              <p className="mt-2 text-sm text-zinc-600">首页只展示 6 至 8 个场景包，不堆大量单品。</p>
            </div>
            <ButtonLink locale={locale} href="/travel-mart/kits" variant="secondary">全部场景包</ButtonLink>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {featuredKits.map((kit) => <TravelKitCard key={kit.id} kit={kit} locale={locale} />)}
          </div>
        </div>
      </section>
      <section className="bg-mist py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <StatusBadge label="库存待合作方确认" tone="warning" />
              <h2 className="mt-3 text-3xl font-semibold text-navy">旅行用品 DEMO 预览</h2>
            </div>
            <div className="flex gap-3">
              <ButtonLink locale={locale} href="/travel-mart/products" variant="secondary">商品列表</ButtonLink>
              <ButtonLink locale={locale} href="/travel-mart/rentals" variant="secondary">租赁</ButtonLink>
            </div>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featuredItems.map((item) => <MartItemCard key={item.id} item={item} locale={locale as Locale} />)}
          </div>
        </div>
      </section>
    </>
  );
}
