import { notFound } from "next/navigation";
import { Ship } from "lucide-react";
import { PageHeader } from "@/components/v3/PageHeader";
import { ButtonLink } from "@/components/v3/LocalizedLink";
import { DemoBadge, StatusBadge } from "@/components/v3/Badges";
import { getLocaleOrDefault } from "@/i18n/request";
import { getCruise } from "@/data/cruises";
import { tx } from "@/types/service";

type PageProps = { params: Promise<{ locale: string; slug: string }> };

export default async function CruiseDetailPage({ params }: PageProps) {
  const { locale: localeParam, slug } = await params;
  const locale = getLocaleOrDefault(localeParam);
  const cruise = getCruise(slug);

  if (!cruise) {
    notFound();
  }

  return (
    <>
      <PageHeader
        eyebrow="Cruise request"
        title={tx(cruise.title, locale)}
        description={tx(cruise.summary, locale)}
        actions={<ButtonLink locale={locale} href={`/book?service=${cruise.slug}`}>提交预约意向</ButtonLink>}
      />
      <section className="bg-mist py-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-champagne">
                <Ship aria-hidden className="h-6 w-6" />
              </span>
              <div>
                <div className="flex flex-wrap gap-2">
                  <DemoBadge />
                  <StatusBadge label={cruise.ticketingMode} tone="warning" />
                  <StatusBadge label="seller: partner" />
                </div>
                <p className="mt-4 text-sm leading-7 text-zinc-600">
                  当前为预约意向页面。实际船票、时段、价格、退款条件、航行规则和登船要求，以游船运营方最终确认的信息为准。
                </p>
              </div>
            </div>
            <dl className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                ["码头", tx(cruise.departurePier, locale)],
                ["到达建议", tx(cruise.arrivalAdvice, locale)],
                ["时长", tx(cruise.duration, locale)],
                ["推荐时段", cruise.recommendedTime],
                ["儿童票", tx(cruise.childTicketNotice, locale)],
                ["无障碍", tx(cruise.accessibilityNotice, locale)],
                ["天气", tx(cruise.weatherNotice, locale)],
                ["退款", tx(cruise.refundNotice, locale)],
              ].map(([label, value]) => (
                <div key={label} className="rounded-xl bg-mist p-4">
                  <dt className="text-xs font-semibold text-zinc-500">{label}</dt>
                  <dd className="mt-2 text-sm font-semibold text-navy">{value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <ButtonLink locale={locale} href="/book">请求工作人员联系</ButtonLink>
              <button className="inline-flex min-h-11 items-center justify-center rounded-lg border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-500" disabled>
                合作方官方链接即将上线
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
