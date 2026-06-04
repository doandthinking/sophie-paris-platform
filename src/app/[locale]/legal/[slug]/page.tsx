import type { Metadata } from "next";
import { PageHeader } from "@/components/v3/PageHeader";
import { DemoBadge } from "@/components/v3/Badges";

type PageProps = { params: Promise<{ slug: string }> };

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

const legalTitles: Record<string, string> = {
  "mentions-legales": "Mentions légales 占位",
  privacy: "隐私政策占位",
  cgu: "CGU 使用条款占位",
  "cgv-placeholder": "CGV 占位",
  "reviews-policy": "评价规则",
  "community-rules": "社区规则",
  "rewards-rules": "积分规则",
};

export default async function LegalPage({ params }: PageProps) {
  const { slug } = await params;
  const title = legalTitles[slug] ?? "法律页面占位";

  return (
    <>
      <PageHeader title={title} description="当前只创建结构，不伪造企业主体、SIREN、SIRET、地址、TVA、保险或旅游经营登记。" />
      <section className="bg-mist py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-sm leading-7 text-zinc-700 shadow-sm">
            <DemoBadge label="TODO 法律审核" />
            <p className="mt-4">上线前补充：真实经营主体、联系方式、数据控制者、保存期限、CGU、CGV、评价规则、积分规则、社区规则、Cookie 和图片授权。</p>
            <p className="mt-4">隐私原则：不收集护照扫描件、银行卡、完整病历、实时位置或不必要儿童信息；紧急协助表单只收集最小必要信息。</p>
            <p className="mt-4">暂不添加 Meta Pixel、未经配置的 Google Analytics 或营销追踪器；预留 consent banner，默认关闭非必要追踪。</p>
          </div>
        </div>
      </section>
    </>
  );
}
