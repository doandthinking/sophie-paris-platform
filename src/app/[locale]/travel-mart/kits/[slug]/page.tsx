import { notFound } from "next/navigation";
import { PageHeader } from "@/components/v3/PageHeader";
import { ButtonLink } from "@/components/v3/LocalizedLink";
import { DemoBadge, StatusBadge } from "@/components/v3/Badges";
import { RecommendationBlock } from "@/components/travel-mart/RecommendationBlock";
import { getLocaleOrDefault } from "@/i18n/request";
import { locales } from "@/i18n/routing";
import { travelKits } from "@/data/travelKits";
import { travelMartItems } from "@/data/travelMartItems";
import { services } from "@/data/services";
import { officialResources } from "@/data/officialResources";
import { getRecommendationsForContext } from "@/lib/recommendations";
import { tx } from "@/types/service";

type PageProps = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return locales.flatMap((locale) => travelKits.map((kit) => ({ locale, slug: kit.slug })));
}

export default async function TravelKitDetailPage({ params }: PageProps) {
  const { locale: localeParam, slug } = await params;
  const locale = getLocaleOrDefault(localeParam);
  const kit = travelKits.find((entry) => entry.slug === slug);
  if (!kit) notFound();

  const items = travelMartItems.filter((item) => kit.includedItemIds.includes(item.id));
  const relatedServices = services.filter((service) => kit.recommendedServiceIds.includes(service.id));
  const resources = officialResources.filter((resource) => kit.officialResourceIds.includes(resource.id));

  return (
    <>
      <PageHeader
        eyebrow="Travel Kit"
        title={tx(kit.title, locale)}
        description={tx(kit.summary, locale)}
        actions={<ButtonLink locale={locale} href="/travel-mart/delivery-request">提交需求</ButtonLink>}
      />
      <section className="bg-mist py-10">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="flex flex-wrap gap-2"><DemoBadge /><StatusBadge label="人工确认" tone="warning" /></div>
            <h2 className="mt-5 text-2xl font-semibold text-navy">包含商品</h2>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-600">{items.map((item) => <li key={item.id}>· {tx(item.title, locale)}</li>)}</ul>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-navy">相关服务和官方资源</h2>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-600">
              {relatedServices.map((service) => <li key={service.id}>· {tx(service.title, locale)}</li>)}
              {resources.map((resource) => <li key={resource.id}>· {tx(resource.title, locale)}</li>)}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink locale={locale} href="/trip-board" variant="secondary">加入我的巴黎行程</ButtonLink>
              <ButtonLink locale={locale} href="/travel-mart/delivery-request">提交需求</ButtonLink>
            </div>
          </div>
          <div className="lg:col-span-2">
            <RecommendationBlock rules={getRecommendationsForContext(kit.slug)} />
          </div>
        </div>
      </section>
    </>
  );
}
