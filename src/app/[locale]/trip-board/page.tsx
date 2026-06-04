import { PageHeader } from "@/components/v3/PageHeader";
import { ButtonLink } from "@/components/v3/LocalizedLink";
import { DemoBadge, StatusBadge } from "@/components/v3/Badges";
import { TripBoardDemo } from "@/components/trip/TripBoardDemo";
import { getLocaleOrDefault } from "@/i18n/request";
import { tripChecklistTemplates } from "@/data/tripChecklistTemplates";

type PageProps = { params: Promise<{ locale: string }> };

export default async function TripBoardPage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  const locale = getLocaleOrDefault(localeParam);

  return (
    <>
      <PageHeader
        eyebrow="My Paris Board"
        title="我的巴黎行程"
        description="收藏服务、餐厅、酒店、旅行用品、场景包、紧急资源和活动。当前使用 localStorage DEMO。"
        actions={<ButtonLink locale={locale} href="/trip-board/checklist">查看清单</ButtonLink>}
      />
      <section className="bg-mist py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex flex-wrap gap-2">
            <DemoBadge />
            <StatusBadge label="分享链接占位" tone="warning" />
            <StatusBadge label="导出 PDF 占位" tone="warning" />
          </div>
          <TripBoardDemo templates={tripChecklistTemplates} />
        </div>
      </section>
    </>
  );
}
