import { PageHeader } from "@/components/v3/PageHeader";
import { ButtonLink } from "@/components/v3/LocalizedLink";
import { DemoBadge, StatusBadge } from "@/components/v3/Badges";
import { getLocaleOrDefault } from "@/i18n/request";
import { merchants } from "@/data/merchants";

type PageProps = { params: Promise<{ locale: string }> };

export default async function MerchantsPage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  const locale = getLocaleOrDefault(localeParam);

  return (
    <>
      <PageHeader
        eyebrow="Merchant Portal"
        title="商户合作门户"
        description="亚洲超市、便利店、旅行用品、行李寄存、服装租赁、摄影、妆发、亲子用品、轮椅租赁、洗衣店、纪念品和合法配送合作方。"
        actions={<ButtonLink locale={locale} href="/merchants/apply">商户申请</ButtonLink>}
      />
      <section className="bg-mist py-10">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {merchants.map((merchant) => (
            <article key={merchant.id} className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
              <div className="flex flex-wrap gap-2"><DemoBadge /><StatusBadge label={merchant.partnershipStatus} tone="warning" /></div>
              <h2 className="mt-4 text-xl font-semibold text-navy">{merchant.name}</h2>
              <p className="mt-2 text-sm text-zinc-600">{merchant.type} · {merchant.district}</p>
              <p className="mt-3 text-xs text-zinc-500">图片授权：{merchant.imageRightsStatus} · 法律审核：{merchant.legalReviewRequired ? "需要" : "不需要"}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
