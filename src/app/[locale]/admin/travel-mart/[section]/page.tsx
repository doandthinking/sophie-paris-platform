import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PageHeader } from "@/components/v3/PageHeader";
import { DemoBadge, StatusBadge } from "@/components/v3/Badges";
import { locales } from "@/i18n/routing";
import { travelMartItems } from "@/data/travelMartItems";
import { travelKits } from "@/data/travelKits";
import { rentalItems } from "@/data/rentalItems";

type PageProps = { params: Promise<{ section: string }> };

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

const sections = ["items", "kits", "rentals"] as const;

export function generateStaticParams() {
  return locales.flatMap((locale) => sections.map((section) => ({ locale, section })));
}

function titleOf(row: unknown) {
  if (row && typeof row === "object" && "title" in row) {
    const title = (row as { title: string | { "zh-CN": string } }).title;
    return typeof title === "string" ? title : title["zh-CN"];
  }
  return "Admin item";
}

function requiresLegalReview(row: unknown) {
  return Boolean(row && typeof row === "object" && "legalReviewRequired" in row && (row as { legalReviewRequired: boolean }).legalReviewRequired);
}

export default async function AdminTravelMartSectionPage({ params }: PageProps) {
  const { section } = await params;
  if (!sections.includes(section as (typeof sections)[number])) notFound();
  const rows = section === "items" ? travelMartItems : section === "kits" ? travelKits : rentalItems;

  return (
    <>
      <PageHeader title={`Admin · travel-mart/${section}`} description="DEMO 数据表。真实后台上线前需要登录、权限、审计日志、商户协议和法律审核。" />
      <section className="bg-mist py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-x-auto rounded-2xl border border-zinc-200 bg-white shadow-sm">
            <table className="min-w-full text-left text-sm">
              <thead className="border-b border-zinc-200 text-zinc-500">
                <tr><th className="px-4 py-3">ID</th><th className="px-4 py-3">Name</th><th className="px-4 py-3">Legal</th><th className="px-4 py-3">Status</th></tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                {rows.map((row) => (
                  <tr key={row.id}>
                    <td className="px-4 py-3 font-medium text-navy">{row.id}</td>
                    <td className="px-4 py-3">{titleOf(row)}</td>
                    <td className="px-4 py-3"><StatusBadge label={requiresLegalReview(row) ? "legal review" : "policy placeholder"} tone="warning" /></td>
                    <td className="px-4 py-3"><DemoBadge /></td>
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
