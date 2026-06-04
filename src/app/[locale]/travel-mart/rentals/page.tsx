import { PageHeader } from "@/components/v3/PageHeader";
import { ButtonLink } from "@/components/v3/LocalizedLink";
import { DemoBadge, StatusBadge } from "@/components/v3/Badges";
import { getLocaleOrDefault } from "@/i18n/request";
import { rentalItems } from "@/data/rentalItems";
import { tx } from "@/types/service";

type PageProps = { params: Promise<{ locale: string }> };

export default async function RentalsPage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  const locale = getLocaleOrDefault(localeParam);

  return (
    <>
      <PageHeader title="租赁 DEMO" description="旅拍服装、婴儿车、轮椅、充电宝和雨伞租赁请求。MVP 不收押金、不收租金、不承诺尺码或库存。" />
      <section className="bg-mist py-10">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {rentalItems.map((item) => (
            <article key={item.id} className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
              <div className="flex flex-wrap gap-2"><DemoBadge /><StatusBadge label="人工确认" tone="warning" /></div>
              <h2 className="mt-4 text-xl font-semibold text-navy">{tx(item.title, locale)}</h2>
              <p className="mt-2 text-sm leading-6 text-zinc-600">{tx(item.summary, locale)}</p>
              <p className="mt-3 text-xs text-zinc-500">押金规则：法律审核后启用 · 当前不收押金</p>
              <div className="mt-5"><ButtonLink locale={locale} href={`/travel-mart/rentals/${item.slug}`} variant="secondary">查看租赁</ButtonLink></div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
