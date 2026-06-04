import { CruiseCard } from "@/components/cruise/CruiseCard";
import { PageHeader } from "@/components/v3/PageHeader";
import { getLocaleOrDefault } from "@/i18n/request";
import { cruises } from "@/data/cruises";

type PageProps = { params: Promise<{ locale: string }> };

export default async function CruisesPage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  const locale = getLocaleOrDefault(localeParam);

  return (
    <>
      <PageHeader
        eyebrow="Seine Cruises"
        title="塞纳河游船专区"
        description="第一阶段只收集预约意向，不在平台内部收取船票费用，不出票，不生成二维码，不伪造库存、折扣或官方合作。"
      />
      <section className="bg-mist py-10">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {cruises.map((cruise) => <CruiseCard key={cruise.id} cruise={cruise} locale={locale} />)}
        </div>
      </section>
    </>
  );
}
