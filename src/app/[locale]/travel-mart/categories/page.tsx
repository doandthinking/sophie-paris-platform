import { PageHeader } from "@/components/v3/PageHeader";
import { ButtonLink } from "@/components/v3/LocalizedLink";
import { DemoBadge } from "@/components/v3/Badges";
import { getLocaleOrDefault } from "@/i18n/request";
import { travelMartCategories } from "@/data/travelMartCategories";
import { travelMartItems } from "@/data/travelMartItems";
import { tx } from "@/types/service";

type PageProps = { params: Promise<{ locale: string }> };

export default async function TravelMartCategoriesPage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  const locale = getLocaleOrDefault(localeParam);

  return (
    <>
      <PageHeader title="旅行超市分类" description="按游客真实场景组织，而不是按传统电商货架组织。" />
      <section className="bg-mist py-10">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {travelMartCategories.map((category) => {
            const count = travelMartItems.filter((item) => item.category === category.id).length;
            return (
              <article id={category.slug} key={category.id} className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                <DemoBadge />
                <h2 className="mt-3 text-xl font-semibold text-navy">{tx(category.title, locale)}</h2>
                <p className="mt-2 text-sm leading-6 text-zinc-600">{tx(category.summary, locale)}</p>
                <p className="mt-3 text-xs text-zinc-500">{count} 个 DEMO 条目</p>
                <div className="mt-4">
                  <ButtonLink locale={locale} href="/travel-mart/products" variant="secondary">查看商品</ButtonLink>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
