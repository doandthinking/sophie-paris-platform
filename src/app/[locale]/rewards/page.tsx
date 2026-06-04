import { PageHeader } from "@/components/v3/PageHeader";
import { DemoBadge, StatusBadge } from "@/components/v3/Badges";
import { rewardRules, demoPointsTransactions } from "@/data/rewardRules";
import { rewardCatalog } from "@/data/rewardCatalog";
import { calculateApprovedPoints } from "@/lib/rewards";

export default function RewardsPage() {
  return (
    <>
      <PageHeader title="巴黎友好积分" description="当前积分系统仅为演示：不具有现金价值、不可提现、不可转账、不可兑换真实船票或未签约合作项目。" />
      <section className="bg-mist py-10">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <DemoBadge />
            <p className="mt-4 text-4xl font-semibold text-navy">{calculateApprovedPoints(demoPointsTransactions)}</p>
            <p className="mt-2 text-sm text-zinc-600">演示积分余额，不代表真实账户。</p>
            <div className="mt-6 grid gap-2">
              {rewardRules.map((rule) => <p key={rule} className="rounded-lg bg-mist p-3 text-sm leading-6 text-zinc-700">{rule}</p>)}
            </div>
          </div>
          <div className="grid gap-4">
            {rewardCatalog.map((item) => (
              <article key={item.id} className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                <div className="flex flex-wrap gap-2"><DemoBadge /><StatusBadge label={`${item.pointsRequired} points`} /></div>
                <h2 className="mt-3 text-xl font-semibold text-navy">{item.title["zh-CN"]}</h2>
                <p className="mt-2 text-sm leading-6 text-zinc-600">{item.description["zh-CN"]}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
