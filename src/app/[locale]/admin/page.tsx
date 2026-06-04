import type { Metadata } from "next";
import { PageHeader } from "@/components/v3/PageHeader";
import { ButtonLink } from "@/components/v3/LocalizedLink";
import { getLocaleOrDefault } from "@/i18n/request";
import { services } from "@/data/services";
import { partners } from "@/data/partners";
import { officialResources } from "@/data/officialResources";
import { reviews } from "@/data/reviews";
import { communityReports } from "@/data/communityReports";
import { rewardCatalog } from "@/data/rewardCatalog";
import { travelMartItems } from "@/data/travelMartItems";
import { travelKits } from "@/data/travelKits";
import { rentalItems } from "@/data/rentalItems";
import { merchants } from "@/data/merchants";
import { fulfillmentMethods } from "@/data/fulfillmentMethods";
import { recommendationRules } from "@/data/recommendationRules";

type PageProps = { params: Promise<{ locale: string }> };

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default async function AdminPage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  const locale = getLocaleOrDefault(localeParam);
  const stats = [
    ["新预约", "localStorage"],
    ["服务者申请", "localStorage"],
    ["待审核资质", "DEMO"],
    ["合作方线索", partners.length],
    ["官方资源", officialResources.length],
    ["待审核评价", reviews.filter((review) => review.moderationStatus === "pending").length],
    ["待处理举报", communityReports.length],
    ["积分权益", rewardCatalog.length],
    ["服务列表", services.length],
    ["旅行超市商品", travelMartItems.length],
    ["场景包", travelKits.length],
    ["租赁条目", rentalItems.length],
    ["商户线索", merchants.length],
    ["履约方式", fulfillmentMethods.length],
    ["推荐规则", recommendationRules.length],
  ];
  const sections = ["bookings", "providers", "services", "partners", "qualifications", "reviews", "rewards", "community", "resources", "merchants", "merchant-applications", "fulfillment", "trip-board", "recommendations"];

  return (
    <>
      <PageHeader title="Admin 演示后台" description="noindex。后台只模拟运营视图，真实上线前需要登录、权限、审计日志和数据安全设计。" />
      <section className="bg-mist py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                <p className="text-sm text-zinc-500">{label}</p>
                <p className="mt-3 text-2xl font-semibold text-navy">{value}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {sections.map((section) => <ButtonLink key={section} locale={locale} href={`/admin/${section}`} variant="secondary">{section}</ButtonLink>)}
            <ButtonLink locale={locale} href="/admin/travel-mart" variant="secondary">旅行超市</ButtonLink>
            <ButtonLink locale={locale} href="/admin/travel-mart/items" variant="secondary">Travel Mart items</ButtonLink>
            <ButtonLink locale={locale} href="/admin/travel-mart/kits" variant="secondary">Travel kits</ButtonLink>
            <ButtonLink locale={locale} href="/admin/travel-mart/rentals" variant="secondary">Rentals</ButtonLink>
            <ButtonLink locale={locale} href="/admin/community/reports" variant="danger">community reports</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
