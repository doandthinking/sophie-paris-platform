import type { Metadata } from "next";
import { PageHeader } from "@/components/v3/PageHeader";
import { StatusBadge } from "@/components/v3/Badges";
import { communityReports } from "@/data/communityReports";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function AdminCommunityReportsPage() {
  return (
    <>
      <PageHeader title="Admin · 社区举报" description="管理员可隐藏内容、暂停资料、拉黑用户占位、添加备注、标记高风险和升级人工处理。" />
      <section className="bg-mist py-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4">
            {communityReports.map((report) => (
              <article key={report.id} className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                <div className="flex flex-wrap gap-2">
                  <StatusBadge label={report.reason} tone="danger" />
                  <StatusBadge label={report.status} tone="warning" />
                </div>
                <h2 className="mt-3 font-semibold text-navy">{report.id} · {report.targetType}</h2>
                <p className="mt-2 text-sm leading-6 text-zinc-600">{report.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
