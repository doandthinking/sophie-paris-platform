import { notFound } from "next/navigation";
import { PageHeader } from "@/components/v3/PageHeader";
import { ButtonLink } from "@/components/v3/LocalizedLink";
import { DemoBadge, StatusBadge } from "@/components/v3/Badges";
import { getLocaleOrDefault } from "@/i18n/request";
import { getSignatureExperience } from "@/data/signatureExperiences";
import { tx } from "@/types/service";

type PageProps = { params: Promise<{ locale: string; slug: string }> };

export default async function SignatureDetailPage({ params }: PageProps) {
  const { locale: localeParam, slug } = await params;
  const locale = getLocaleOrDefault(localeParam);
  const item = getSignatureExperience(slug);

  if (!item) {
    notFound();
  }

  return (
    <>
      <PageHeader
        eyebrow="Signature detail"
        title={tx(item.title, locale)}
        description={tx(item.description, locale)}
        actions={<ButtonLink locale={locale} href={`/book?service=${item.slug}`}>提交预约意向</ButtonLink>}
      />
      <section className="bg-mist py-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="flex flex-wrap gap-2">
              <DemoBadge />
              <StatusBadge label={item.partnershipStatus} tone="warning" />
              <StatusBadge label={item.qualificationRequirement} />
            </div>
            <dl className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                ["时长", tx(item.duration, locale)],
                ["地点", tx(item.location, locale)],
                ["适合游客", tx(item.audience, locale)],
                ["价格", tx(item.priceLabel, locale)],
                ["服务者类型", item.providerType],
                ["独家状态", item.exclusiveStatus],
              ].map(([label, value]) => (
                <div key={label} className="rounded-xl bg-mist p-4">
                  <dt className="text-xs font-semibold text-zinc-500">{label}</dt>
                  <dd className="mt-2 text-sm font-semibold text-navy">{value}</dd>
                </div>
              ))}
            </dl>
            <ul className="mt-6 space-y-3 text-sm leading-6 text-zinc-600">
              {item.notices.map((notice) => <li key={tx(notice, locale)}>· {tx(notice, locale)}</li>)}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
