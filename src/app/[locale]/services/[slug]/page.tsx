import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/v3/PageHeader";
import { ButtonLink } from "@/components/v3/LocalizedLink";
import { DemoBadge, StatusBadge } from "@/components/v3/Badges";
import { getLocaleOrDefault } from "@/i18n/request";
import { getService } from "@/data/services";
import { tx } from "@/types/service";

type PageProps = { params: Promise<{ locale: string; slug: string }> };

export default async function ServiceDetailPage({ params }: PageProps) {
  const { locale: localeParam, slug } = await params;
  const locale = getLocaleOrDefault(localeParam);
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <PageHeader
        eyebrow="Service detail"
        title={tx(service.title, locale)}
        description={tx(service.description, locale)}
        actions={<ButtonLink locale={locale} href={`/book?service=${service.slug}`}>提交预约意向</ButtonLink>}
      />
      <section className="bg-mist py-10">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <Image src={service.imagePlaceholder} alt={tx(service.title, locale)} width={1200} height={760} className="h-full min-h-80 rounded-2xl object-cover shadow-sm" />
          <div className="grid gap-5">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <div className="flex flex-wrap gap-2">
                {service.demo ? <DemoBadge /> : null}
                <StatusBadge label={service.providerType} />
                <StatusBadge label={service.qualificationRequirement} tone={service.qualificationRequirement === "none" ? "default" : "success"} />
              </div>
              <dl className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  ["时长", tx(service.duration, locale)],
                  ["地点", tx(service.location, locale)],
                  ["适合游客", tx(service.audience, locale)],
                  ["价格", tx(service.priceLabel, locale)],
                  ["履约模式", service.fulfillmentType],
                  ["售票主体", service.sellerOfRecord],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-xl bg-mist p-4">
                    <dt className="text-xs font-semibold uppercase tracking-wide text-zinc-500">{label}</dt>
                    <dd className="mt-2 text-sm font-semibold text-navy">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6">
              <h2 className="text-xl font-semibold text-wine">合规与注意事项</h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-rose-950">
                {service.notices.map((notice) => (
                  <li key={tx(notice, locale)} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-wine" />
                    {tx(notice, locale)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
