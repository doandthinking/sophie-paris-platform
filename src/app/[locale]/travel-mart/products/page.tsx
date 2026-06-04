import { PageHeader } from "@/components/v3/PageHeader";
import { MartItemCard } from "@/components/travel-mart/MartItemCard";
import { getLocaleOrDefault } from "@/i18n/request";
import { travelMartItems } from "@/data/travelMartItems";

type PageProps = { params: Promise<{ locale: string }> };

export default async function TravelMartProductsPage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  const locale = getLocaleOrDefault(localeParam);

  return (
    <>
      <PageHeader title="旅行用品和服务 DEMO 列表" description="没有真实库存、没有真实价格、没有真实配送时间。所有需求需人工确认和合作方确认。" />
      <section className="bg-mist py-10">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {travelMartItems.map((item) => <MartItemCard key={item.id} item={item} locale={locale} />)}
        </div>
      </section>
    </>
  );
}
