import { PageHeader } from "@/components/v3/PageHeader";
import { DemoBadge, StatusBadge } from "@/components/v3/Badges";
import { merchants } from "@/data/merchants";

export default function PickupPointsPage() {
  return (
    <>
      <PageHeader title="自取点和交付方式占位" description="MVP 不公开真实自取点，不承诺营业时间。商户信息需合作协议和图片授权后展示。" />
      <section className="bg-mist py-10">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {merchants.map((merchant) => (
            <article key={merchant.id} className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
              <div className="flex flex-wrap gap-2"><DemoBadge /><StatusBadge label={merchant.partnershipStatus} tone="warning" /></div>
              <h2 className="mt-4 text-xl font-semibold text-navy">{merchant.name}</h2>
              <p className="mt-2 text-sm text-zinc-600">{merchant.district}</p>
              <p className="mt-3 text-xs text-zinc-500">图片授权：{merchant.imageRightsStatus} · 法律审核：{merchant.legalReviewRequired ? "需要" : "不需要"}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
