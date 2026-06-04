import { PageHeader } from "@/components/v3/PageHeader";
import { DemoBadge } from "@/components/v3/Badges";

type PageProps = { params: Promise<{ section: string }> };

const titles: Record<string, string> = {
  trips: "我的预约",
  points: "我的积分",
  reviews: "我的评价",
  favorites: "我的收藏",
  connections: "我的连接请求",
};

export default async function AccountSectionPage({ params }: PageProps) {
  const { section } = await params;
  const title = titles[section] ?? "账户演示";

  return (
    <>
      <PageHeader title={title} description="此页面为 DEMO 账户结构。未来接入真实账号前，需要认证、隐私、权限和数据保存策略。" />
      <section className="bg-mist py-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <DemoBadge />
            <p className="mt-4 text-sm leading-7 text-zinc-600">
              这里展示演示用户的 {title}。真实功能未启用，不宣称有真实订单、真实积分余额、真实评价或真实连接。
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
