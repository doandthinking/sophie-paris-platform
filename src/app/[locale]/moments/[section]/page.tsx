import { notFound } from "next/navigation";
import { PageHeader } from "@/components/v3/PageHeader";
import { DemoBadge, StatusBadge } from "@/components/v3/Badges";
import { ButtonLink } from "@/components/v3/LocalizedLink";
import { getLocaleOrDefault } from "@/i18n/request";
import { locales } from "@/i18n/routing";
import { momentServices } from "@/data/momentServices";
import { rentalItems } from "@/data/rentalItems";
import { tx } from "@/types/service";
import type { MomentServiceCategory } from "@/types/momentService";

type PageProps = { params: Promise<{ locale: string; section: string }> };

const sectionMap: Record<string, { title: string; description: string; categories: MomentServiceCategory[] }> = {
  "photo-shoots": { title: "巴黎旅拍", description: "塞纳河、蒙马特、埃菲尔铁塔、凡尔赛主题旅拍预约需求。", categories: ["photo-shoot"] },
  "costume-rentals": { title: "复古巴黎服装", description: "Belle Époque、宫廷主题、晚礼服、儿童主题和亲子搭配。", categories: ["costume-rental"] },
  "makeup-and-hair": { title: "妆发", description: "旅拍、求婚、周年和商务形象照妆发需求。", categories: ["makeup-and-hair"] },
  proposals: { title: "求婚策划", description: "求婚路线、摄影、妆发、服装和晚餐需求占位。", categories: ["proposal"] },
  anniversaries: { title: "周年纪念和生日", description: "周年、生日、纪念日晚餐和城市照片路线。", categories: ["anniversary"] },
  "family-photo": { title: "家庭亲子照", description: "亲子服装、儿童友好路线和家庭旅拍需求。", categories: ["family-photo"] },
  "business-photo": { title: "商务形象照", description: "商务头像、城市背景、会议前后形象照。", categories: ["business-photo"] },
  request: { title: "Moments 预约需求", description: "提交旅拍、服装、妆发、求婚或纪念日需求。", categories: [] },
};

export function generateStaticParams() {
  return locales.flatMap((locale) => Object.keys(sectionMap).map((section) => ({ locale, section })));
}

export default async function MomentSectionPage({ params }: PageProps) {
  const { locale: localeParam, section } = await params;
  const locale = getLocaleOrDefault(localeParam);
  const config = sectionMap[section];
  if (!config) notFound();
  const services = momentServices.filter((service) => config.categories.includes(service.category));

  if (section === "request") {
    return (
      <>
        <PageHeader title={config.title} description="DEMO 表单，不收款、不锁档期、不承诺服装尺码或库存。" />
        <section className="bg-mist py-10">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <form className="grid gap-4 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <DemoBadge />
              {["姓名", "微信", "邮箱", "日期", "人数", "想预约的服务", "预算"].map((label) => (
                <label key={label} className="grid gap-2 text-sm font-medium text-navy">{label}<input className="rounded-lg border border-zinc-300 px-3 py-2" /></label>
              ))}
              <label className="grid gap-2 text-sm font-medium text-navy">备注需求<textarea rows={4} className="rounded-lg border border-zinc-300 px-3 py-2" /></label>
              <button type="button" className="rounded-lg bg-navy px-5 py-3 text-sm font-semibold text-white">DEMO 保存占位</button>
            </form>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHeader title={config.title} description={config.description} actions={<ButtonLink locale={locale} href="/moments/request">提交需求</ButtonLink>} />
      <section className="bg-mist py-10">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {services.map((service) => (
            <article key={service.id} className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
              <div className="flex flex-wrap gap-2"><DemoBadge /><StatusBadge label="人工确认" tone="warning" /><StatusBadge label="价格以合作方确认为准" tone="warning" /></div>
              <h2 className="mt-4 text-xl font-semibold text-navy">{tx(service.title, locale)}</h2>
              <p className="mt-2 text-sm leading-6 text-zinc-600">{tx(service.summary, locale)}</p>
              <p className="mt-3 text-xs text-zinc-500">{tx(service.location, locale)}</p>
            </article>
          ))}
          {section === "costume-rentals" ? rentalItems.filter((item) => item.rentalCategory === "costume").map((item) => (
            <article key={item.id} className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
              <div className="flex flex-wrap gap-2"><DemoBadge /><StatusBadge label="不收押金" tone="warning" /></div>
              <h2 className="mt-4 text-xl font-semibold text-navy">{tx(item.title, locale)}</h2>
              <p className="mt-2 text-sm leading-6 text-zinc-600">{tx(item.summary, locale)}</p>
            </article>
          )) : null}
        </div>
      </section>
    </>
  );
}
