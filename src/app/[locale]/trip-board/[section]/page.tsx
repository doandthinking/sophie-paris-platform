import { notFound } from "next/navigation";
import { PageHeader } from "@/components/v3/PageHeader";
import { DemoBadge, StatusBadge } from "@/components/v3/Badges";
import { TripBoardDemo } from "@/components/trip/TripBoardDemo";
import { locales } from "@/i18n/routing";
import { tripChecklistTemplates } from "@/data/tripChecklistTemplates";

type PageProps = { params: Promise<{ section: string }> };

const sections = {
  checklist: {
    title: "我的巴黎清单",
    description: "出发前、抵达当天、博物馆日、游船日、亲子日、雨天、离境、手机遗失和护照遗失模板。",
  },
  favorites: {
    title: "我的收藏",
    description: "收藏服务、餐厅、酒店、旅行用品、场景包、紧急资源和活动的占位视图。",
  },
  shared: {
    title: "分享链接占位",
    description: "未来可生成分享链接。当前不公开游客敏感信息，不展示酒店房间号。",
  },
} as const;

export function generateStaticParams() {
  return locales.flatMap((locale) => Object.keys(sections).map((section) => ({ locale, section })));
}

export default async function TripBoardSectionPage({ params }: PageProps) {
  const { section } = await params;
  const config = sections[section as keyof typeof sections];
  if (!config) notFound();

  return (
    <>
      <PageHeader title={config.title} description={config.description} />
      <section className="bg-mist py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex flex-wrap gap-2">
            <DemoBadge />
            <StatusBadge label="localStorage" />
            <StatusBadge label="DEMO" tone="warning" />
          </div>
          {section === "checklist" ? (
            <TripBoardDemo templates={tripChecklistTemplates} />
          ) : (
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-navy">功能占位</h2>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                收藏、备注、日期、完成状态、分享链接和导出 PDF 将在数据库和账号系统上线后扩展。
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
