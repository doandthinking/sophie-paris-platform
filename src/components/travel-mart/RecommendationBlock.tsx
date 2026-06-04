import { StatusBadge } from "@/components/v3/Badges";
import type { RecommendationRule } from "@/types/recommendation";

export function RecommendationBlock({ rules }: { rules: RecommendationRule[] }) {
  if (rules.length === 0) {
    return null;
  }

  return (
    <section className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-semibold text-champagne">你可能还需要</p>
      <h2 className="mt-2 text-2xl font-semibold text-navy">根据当前场景推荐</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {rules.map((rule) => (
          <div key={rule.id} className="rounded-xl bg-mist p-4">
            <div className="flex flex-wrap gap-2">
              <StatusBadge label="静态规则" />
              <StatusBadge label="DEMO" tone="warning" />
            </div>
            <h3 className="mt-3 font-semibold text-navy">{rule.title}</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-600">{rule.reason}</p>
            <p className="mt-3 text-xs text-zinc-500">不使用实时个性化 AI，不收集敏感信息。</p>
          </div>
        ))}
      </div>
    </section>
  );
}
