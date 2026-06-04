import { PageHeader } from "@/components/v3/PageHeader";
import { TravelKitCard } from "@/components/travel-mart/TravelKitCard";
import { getLocaleOrDefault } from "@/i18n/request";
import { travelKits } from "@/data/travelKits";

type PageProps = { params: Promise<{ locale: string }> };

export default async function TravelKitsPage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  const locale = getLocaleOrDefault(localeParam);

  return (
    <>
      <PageHeader title="场景解决方案包" description="把游客在巴黎的真实场景打包成商品、服务、官方资源和人工确认流程。" />
      <section className="bg-mist py-10">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {travelKits.map((kit) => <TravelKitCard key={kit.id} kit={kit} locale={locale} />)}
        </div>
      </section>
    </>
  );
}
