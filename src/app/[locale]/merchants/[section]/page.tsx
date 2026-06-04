import { notFound } from "next/navigation";
import { PageHeader } from "@/components/v3/PageHeader";
import { ButtonLink } from "@/components/v3/LocalizedLink";
import { DemoBadge, StatusBadge } from "@/components/v3/Badges";
import { MerchantApplicationForm } from "@/components/forms/MerchantApplicationForm";
import { getLocaleOrDefault } from "@/i18n/request";
import { locales } from "@/i18n/routing";
import { merchants } from "@/data/merchants";
import { travelMartItems } from "@/data/travelMartItems";
import { fulfillmentMethods } from "@/data/fulfillmentMethods";

type PageProps = { params: Promise<{ locale: string; section: string }> };

const sections = {
  apply: "商户申请",
  "login-demo": "商户登录演示",
  dashboard: "商户 Dashboard",
  catalog: "商品和服务目录",
  "orders-placeholder": "订单占位",
  fulfillment: "履约方式",
} as const;

export function generateStaticParams() {
  return locales.flatMap((locale) => Object.keys(sections).map((section) => ({ locale, section })));
}

export default async function MerchantSectionPage({ params }: PageProps) {
  const { locale: localeParam, section } = await params;
  const locale = getLocaleOrDefault(localeParam);
  const title = sections[section as keyof typeof sections];
  if (!title) notFound();

  if (section === "apply") {
    return (
      <>
        <PageHeader title={title} description="商户申请进入 localStorage DEMO 队列。真实上线前需要合同、图片授权、价格、履约、消费者投诉和法律审核。" />
        <section className="bg-mist py-10"><div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"><MerchantApplicationForm /></div></section>
      </>
    );
  }

  return (
    <>
      <PageHeader title={title} description="商户门户 DEMO：不创建真实登录、不生成真实订单、不展示真实库存。" actions={<ButtonLink locale={locale} href="/merchants/apply">申请合作</ButtonLink>} />
      <section className="bg-mist py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex flex-wrap gap-2"><DemoBadge /><StatusBadge label="法律审核后启用" tone="warning" /></div>
          {section === "catalog" ? (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {travelMartItems.slice(0, 12).map((item) => (
                <div key={item.id} className="rounded-xl bg-white p-4 shadow-sm">
                  <p className="font-semibold text-navy">{item.title[locale]}</p>
                  <p className="mt-1 text-xs text-zinc-500">{item.stockStatus} · {item.priceMode}</p>
                </div>
              ))}
            </div>
          ) : section === "fulfillment" ? (
            <div className="grid gap-4 md:grid-cols-2">
              {fulfillmentMethods.map((method) => (
                <div key={method.id} className="rounded-xl bg-white p-4 shadow-sm">
                  <p className="font-semibold text-navy">{method.label[locale]}</p>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">{method.description[locale]}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {merchants.map((merchant) => (
                <div key={merchant.id} className="rounded-xl bg-white p-4 shadow-sm">
                  <p className="font-semibold text-navy">{merchant.name}</p>
                  <p className="mt-1 text-xs text-zinc-500">{merchant.type} · {merchant.partnershipStatus}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
