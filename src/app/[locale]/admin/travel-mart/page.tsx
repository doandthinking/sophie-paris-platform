import type { Metadata } from "next";
import { PageHeader } from "@/components/v3/PageHeader";
import { ButtonLink } from "@/components/v3/LocalizedLink";
import { DemoBadge, StatusBadge } from "@/components/v3/Badges";
import { getLocaleOrDefault } from "@/i18n/request";
import { travelMartItems } from "@/data/travelMartItems";
import { travelKits } from "@/data/travelKits";
import { rentalItems } from "@/data/rentalItems";
import { merchants } from "@/data/merchants";
import { fulfillmentMethods } from "@/data/fulfillmentMethods";
import { recommendationRules } from "@/data/recommendationRules";

type PageProps = { params: Promise<{ locale: string }> };

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default async function AdminTravelMartPage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  const locale = getLocaleOrDefault(localeParam);
  const stats = [
    ["商品", travelMartItems.length],
    ["场景包", travelKits.length],
    ["租赁", rentalItems.length],
    ["商户", merchants.length],
    ["履约方式", fulfillmentMethods.length],
    ["推荐规则", recommendationRules.length],
  ];

  return (
    <>
      <PageHeader title="Admin · 旅行超市" description="商品、分类、商户、履约方式、库存状态、法律审核、图片授权和推荐场景的 DEMO 后台。" />
      <section className="bg-mist py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                <DemoBadge />
                <p className="mt-3 text-sm text-zinc-500">{label}</p>
                <p className="mt-2 text-3xl font-semibold text-navy">{value}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <ButtonLink locale={locale} href="/admin/travel-mart/items" variant="secondary">商品</ButtonLink>
            <ButtonLink locale={locale} href="/admin/travel-mart/kits" variant="secondary">场景包</ButtonLink>
            <ButtonLink locale={locale} href="/admin/travel-mart/rentals" variant="secondary">租赁</ButtonLink>
            <ButtonLink locale={locale} href="/admin/merchants" variant="secondary">商户</ButtonLink>
            <ButtonLink locale={locale} href="/admin/fulfillment" variant="secondary">履约方式</ButtonLink>
            <ButtonLink locale={locale} href="/admin/recommendations" variant="secondary">交叉推荐</ButtonLink>
          </div>
          <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
            <StatusBadge label="法律审核后启用" tone="warning" />
            <p className="mt-3 text-sm leading-6 text-zinc-600">后台不代表真实库存、真实商户合同、真实配送或真实订单。所有条目均为 DEMO 或合作洽谈中。</p>
          </div>
        </div>
      </section>
    </>
  );
}
