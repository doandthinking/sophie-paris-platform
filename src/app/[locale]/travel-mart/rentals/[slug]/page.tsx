import { notFound } from "next/navigation";
import { PageHeader } from "@/components/v3/PageHeader";
import { ButtonLink } from "@/components/v3/LocalizedLink";
import { DemoBadge, StatusBadge } from "@/components/v3/Badges";
import { getLocaleOrDefault } from "@/i18n/request";
import { locales } from "@/i18n/routing";
import { rentalItems } from "@/data/rentalItems";
import { tx } from "@/types/service";

type PageProps = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return locales.flatMap((locale) => rentalItems.map((item) => ({ locale, slug: item.slug })));
}

export default async function RentalDetailPage({ params }: PageProps) {
  const { locale: localeParam, slug } = await params;
  const locale = getLocaleOrDefault(localeParam);
  const item = rentalItems.find((entry) => entry.slug === slug);
  if (!item) notFound();

  return (
    <>
      <PageHeader title={tx(item.title, locale)} description={tx(item.summary, locale)} actions={<ButtonLink locale={locale} href="/travel-mart/delivery-request">提交租赁需求</ButtonLink>} />
      <section className="bg-mist py-10">
        <div className="mx-auto grid max-w-5xl gap-5 px-4 sm:px-6 lg:px-8">
          <article className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="flex flex-wrap gap-2"><DemoBadge /><StatusBadge label="不收押金" tone="warning" /><StatusBadge label="库存待确认" tone="warning" /></div>
            <dl className="mt-6 grid gap-4 text-sm text-zinc-600 md:grid-cols-2">
              <div><dt className="font-semibold text-navy">租期选项</dt><dd>{item.rentalPeriodOptions.join(" / ")}</dd></div>
              <div><dt className="font-semibold text-navy">取还方式</dt><dd>{item.pickupMode}</dd></div>
              <div><dt className="font-semibold text-navy">清洁政策</dt><dd>{tx(item.cleaningPolicy, locale)}</dd></div>
              <div><dt className="font-semibold text-navy">损坏/迟还政策</dt><dd>{tx(item.damagePolicy, locale)} {tx(item.lateReturnPolicy, locale)}</dd></div>
            </dl>
          </article>
        </div>
      </section>
    </>
  );
}
