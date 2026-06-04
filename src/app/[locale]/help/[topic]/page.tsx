import { notFound } from "next/navigation";
import { PageHeader } from "@/components/v3/PageHeader";
import { ButtonLink } from "@/components/v3/LocalizedLink";
import { CopyPhraseButton } from "@/components/emergency/CopyPhraseButton";
import { EmergencyAssistanceRequestForm } from "@/components/forms/EmergencyAssistanceRequestForm";
import { getLocaleOrDefault } from "@/i18n/request";
import { helpTopics } from "@/data/helpTopics";

type PageProps = { params: Promise<{ locale: string; topic: string }> };

export function generateStaticParams() {
  return Object.keys(helpTopics).flatMap((topic) => [
    { locale: "zh-CN", topic },
    { locale: "zh-TW", topic },
    { locale: "fr", topic },
    { locale: "en", topic },
  ]);
}

export default async function HelpTopicPage({ params }: PageProps) {
  const { locale: localeParam, topic } = await params;
  const locale = getLocaleOrDefault(localeParam);
  const data = helpTopics[topic as keyof typeof helpTopics];

  if (!data) {
    notFound();
  }

  return (
    <>
      <PageHeader
        eyebrow="安心巴黎流程"
        title={data.title}
        description="以下为中文流程说明和语言模板，不替代官方渠道。紧急情况请直接联系 112、17、15 或 18。"
        actions={<ButtonLink locale={locale} href="/help/emergency" variant="danger">返回紧急中心</ButtonLink>}
      />
      <section className="bg-mist py-10">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[1fr_380px] lg:px-8">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-navy">建议步骤</h2>
            <ol className="mt-6 grid gap-3">
              {data.steps.map((step, index) => (
                <li key={step} className="flex gap-4 rounded-xl bg-mist p-4 text-sm leading-6 text-zinc-700">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-navy text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <div className="mt-6 flex flex-wrap gap-3">
              <CopyPhraseButton label="复制法语说明" phrase={data.phraseFr} />
              <CopyPhraseButton label="复制英语说明" phrase={data.phraseEn} />
              <ButtonLink locale={locale} href="/help/emergency" variant="secondary">查看官方资源</ButtonLink>
            </div>
          </div>
          <aside>
            <EmergencyAssistanceRequestForm />
          </aside>
        </div>
      </section>
    </>
  );
}
