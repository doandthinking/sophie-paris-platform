import type { Metadata } from "next";
import { PageHeader } from "@/components/v3/PageHeader";
import { DemoBadge, StatusBadge } from "@/components/v3/Badges";
import { services } from "@/data/services";
import { partners } from "@/data/partners";
import { officialResources } from "@/data/officialResources";
import { reviews } from "@/data/reviews";
import { rewardCatalog } from "@/data/rewardCatalog";
import { merchants } from "@/data/merchants";
import { fulfillmentMethods } from "@/data/fulfillmentMethods";
import { recommendationRules } from "@/data/recommendationRules";
import { travelMartItems } from "@/data/travelMartItems";

type PageProps = { params: Promise<{ section: string }> };

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default async function AdminSectionPage({ params }: PageProps) {
  const { section } = await params;
  const rows =
    section === "partners" ? partners :
    section === "resources" ? officialResources :
    section === "reviews" ? reviews :
    section === "rewards" ? rewardCatalog :
    section === "merchants" || section === "merchant-applications" ? merchants :
    section === "fulfillment" ? fulfillmentMethods :
    section === "recommendations" ? recommendationRules :
    section === "trip-board" ? travelMartItems.slice(0, 8) :
    services;

  return (
    <>
      <PageHeader title={`Admin · ${section}`} description="演示数据表。真实后台上线前需要认证、权限、日志和人工审核流程。" />
      <section className="bg-mist py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-x-auto rounded-2xl border border-zinc-200 bg-white shadow-sm">
            <table className="min-w-full text-left text-sm">
              <thead className="border-b border-zinc-200 text-zinc-500">
                <tr><th className="px-4 py-3">ID</th><th className="px-4 py-3">Name</th><th className="px-4 py-3">Status</th><th className="px-4 py-3">Notes</th></tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                {rows.map((row) => (
                  <tr key={"id" in row ? String(row.id) : JSON.stringify(row).slice(0, 12)}>
                    <td className="px-4 py-3 font-medium text-navy">{"id" in row ? String(row.id) : "row"}</td>
                    <td className="px-4 py-3">{"partnerName" in row ? row.partnerName : "title" in row ? (typeof row.title === "string" ? row.title : row.title["zh-CN"]) : "Admin item"}</td>
                    <td className="px-4 py-3"><DemoBadge /></td>
                    <td className="px-4 py-3"><StatusBadge label={"status" in row ? String(row.status) : "demo"} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
