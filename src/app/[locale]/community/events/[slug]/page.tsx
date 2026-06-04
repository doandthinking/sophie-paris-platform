import { notFound } from "next/navigation";
import { PageHeader } from "@/components/v3/PageHeader";
import { ButtonLink } from "@/components/v3/LocalizedLink";
import { DemoBadge, StatusBadge } from "@/components/v3/Badges";
import { getLocaleOrDefault } from "@/i18n/request";
import { getCommunityEvent } from "@/data/communityEvents";

type PageProps = { params: Promise<{ locale: string; slug: string }> };

export default async function CommunityEventDetailPage({ params }: PageProps) {
  const { locale: localeParam, slug } = await params;
  const locale = getLocaleOrDefault(localeParam);
  const event = getCommunityEvent(slug);

  if (!event) {
    notFound();
  }

  return (
    <>
      <PageHeader title={event.title} description={event.summary} actions={<ButtonLink locale={locale} href="/community/safety" variant="danger">先看安全规则</ButtonLink>} />
      <section className="bg-mist py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="flex flex-wrap gap-2">
              <DemoBadge />
              <StatusBadge label={event.meetingArea} />
              <StatusBadge label={event.audience} tone="success" />
            </div>
            <p className="mt-5 text-sm leading-7 text-zinc-600">
              这是平台公开活动演示。MVP 不开放真实报名、不公开联系方式、不提供陌生人即时聊天。未来正式上线前需要账号验证、审核、举报、拉黑、数据保存期限和法律审核。
            </p>
            <p className="mt-4 rounded-xl bg-amber-50 p-4 text-sm leading-6 text-amber-900">
              集合地点只显示模糊区域，不显示精确酒店、实时 GPS 或私人住所。
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
