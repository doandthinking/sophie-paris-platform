import { AlertTriangle } from "lucide-react";
import { EmergencyResourceCard } from "@/components/emergency/EmergencyResourceCard";
import { PageHeader } from "@/components/v3/PageHeader";
import { ButtonLink } from "@/components/v3/LocalizedLink";
import { EmergencyAssistanceRequestForm } from "@/components/forms/EmergencyAssistanceRequestForm";
import { getLocaleOrDefault } from "@/i18n/request";
import { officialResources } from "@/data/officialResources";
import { helpTopics } from "@/data/helpTopics";

type PageProps = { params: Promise<{ locale: string }> };

export default async function EmergencyCenterPage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  const locale = getLocaleOrDefault(localeParam);

  return (
    <>
      <PageHeader
        eyebrow="安心巴黎 · Paris Safe Companion"
        title="遇到困难？先别慌。"
        description="这是官方资源导航和中文流程说明，不是警方、急救中心、领事馆或律师服务。有人身危险时请优先拨打官方紧急号码。"
      />
      <section className="bg-rose-50 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 rounded-2xl border border-rose-200 bg-white p-5 text-rose-950 shadow-sm">
            <AlertTriangle aria-hidden className="mt-1 h-6 w-6 shrink-0 text-wine" />
            <p className="text-sm leading-7">
              如有人身危险、暴力、正在发生的盗窃、严重伤害或其他紧急情况，请立即联系官方紧急服务：112、17、15 或 18。
            </p>
          </div>
        </div>
      </section>
      <section className="bg-mist py-10">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {officialResources.filter((resource) => resource.category === "emergency-number" || resource.phone).map((resource) => (
            <EmergencyResourceCard key={resource.id} resource={resource} locale={locale} />
          ))}
        </div>
      </section>
      <section className="bg-white py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-navy">常见情况流程</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(helpTopics).map(([slug, topic]) => (
              <ButtonLink key={slug} locale={locale} href={`/help/${slug}`} variant="secondary" className="justify-start">
                {topic.title}
              </ButtonLink>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-mist py-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-5 text-2xl font-semibold text-navy">请求中文沟通协助</h2>
          <EmergencyAssistanceRequestForm />
        </div>
      </section>
    </>
  );
}
