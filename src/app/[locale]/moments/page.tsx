import { PageHeader } from "@/components/v3/PageHeader";
import { ButtonLink } from "@/components/v3/LocalizedLink";
import { DemoBadge, StatusBadge } from "@/components/v3/Badges";
import { getLocaleOrDefault } from "@/i18n/request";
import { momentServices } from "@/data/momentServices";
import { rentalItems } from "@/data/rentalItems";
import { tx } from "@/types/service";

type PageProps = { params: Promise<{ locale: string }> };

const sections = [
  ["photo-shoots", "巴黎旅拍"],
  ["costume-rentals", "服装租赁"],
  ["makeup-and-hair", "妆发"],
  ["proposals", "求婚策划"],
  ["anniversaries", "周年纪念"],
  ["family-photo", "家庭亲子照"],
  ["business-photo", "商务形象照"],
] as const;

export default async function MomentsPage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  const locale = getLocaleOrDefault(localeParam);

  return (
    <>
      <PageHeader
        eyebrow="Paris Moments"
        title="旅拍、服装和纪念日服务"
        description="巴黎旅拍、复古服装、妆发、求婚、周年、生日、家庭照和商务形象照。MVP 仅展示和提交预约需求。"
        actions={<ButtonLink locale={locale} href="/moments/request">提交 Moments 需求</ButtonLink>}
      />
      <section className="bg-mist py-10">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {sections.map(([slug, label]) => (
            <ButtonLink key={slug} locale={locale} href={`/moments/${slug}`} variant="secondary" className="justify-start">{label}</ButtonLink>
          ))}
        </div>
      </section>
      <section className="bg-white py-12">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {momentServices.slice(0, 9).map((service) => (
            <article key={service.id} className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
              <div className="flex flex-wrap gap-2"><DemoBadge /><StatusBadge label="人工确认" tone="warning" /></div>
              <h2 className="mt-4 text-xl font-semibold text-navy">{tx(service.title, locale)}</h2>
              <p className="mt-2 text-sm leading-6 text-zinc-600">{tx(service.summary, locale)}</p>
              <p className="mt-3 text-xs text-zinc-500">{tx(service.location, locale)}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-mist py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-navy">租赁占位</h2>
          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {rentalItems.filter((item) => item.rentalCategory === "costume").slice(0, 3).map((item) => (
              <div key={item.id} className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                <DemoBadge />
                <h3 className="mt-3 font-semibold text-navy">{tx(item.title, locale)}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">{tx(item.summary, locale)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
