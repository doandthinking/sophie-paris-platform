import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  BadgeCheck,
  Clock,
  Languages,
  MapPin,
  ShieldCheck,
  UserRoundCheck,
  Wallet,
} from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ComplianceNotice } from "@/components/ui/ComplianceNotice";
import { getCategory, getService, services } from "@/lib/mock-data";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  return {
    title: service ? `${service.title} | 巴黎中文行` : "服务详情 | 巴黎中文行",
    description: service?.summary,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const category = getCategory(service.category);

  const details = [
    { icon: Clock, label: "服务时长", value: service.duration },
    { icon: Wallet, label: "价格区间", value: service.priceRange },
    { icon: MapPin, label: "服务地点", value: service.location },
    { icon: UserRoundCheck, label: "服务者类型", value: service.providerType },
    {
      icon: BadgeCheck,
      label: "是否需要资质",
      value: service.qualificationRequired ? "需要" : "不需要 guide-conférencier 专业卡",
    },
    { icon: Languages, label: "资质说明", value: service.qualificationLabel },
  ];

  return (
    <>
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-14">
          <div>
            {category ? (
              <p className="mb-4 w-fit rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-jade">
                {category.title}
              </p>
            ) : null}
            <h1 className="text-4xl font-semibold tracking-normal text-ink sm:text-5xl">
              {service.title}
            </h1>
            <p className="mt-5 text-lg leading-8 text-zinc-600">{service.description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={`/book?service=${service.slug}`}>预约这个服务</ButtonLink>
              <ButtonLink href="/services" variant="secondary">
                返回服务列表
              </ButtonLink>
            </div>
          </div>
          <img
            src={service.heroImage}
            alt={service.title}
            className="h-full min-h-80 w-full rounded-lg object-cover shadow-soft"
          />
        </div>
      </section>

      <section className="bg-paper py-14">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_360px] lg:px-8">
          <div className="space-y-8">
            <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-ink">服务详情</h2>
              <dl className="mt-6 grid gap-4 md:grid-cols-2">
                {details.map((detail) => (
                  <div key={detail.label} className="rounded-lg bg-paper p-4">
                    <div className="flex items-center gap-2 text-sm font-semibold text-ink">
                      <detail.icon aria-hidden className="h-4 w-4 text-jade" />
                      <dt>{detail.label}</dt>
                    </div>
                    <dd className="mt-2 text-sm leading-6 text-zinc-600">{detail.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-ink">服务包含</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {service.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-center gap-3 rounded-lg bg-paper px-4 py-3 text-sm text-zinc-700"
                  >
                    <ShieldCheck aria-hidden className="h-4 w-4 text-jade" />
                    {highlight}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-ink">注意事项</h2>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-zinc-600">
                {service.notes.map((note) => (
                  <li key={note} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-jade" />
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="space-y-5">
            <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
              <h2 className="font-semibold text-ink">标签</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-jade"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <ComplianceNotice
              title="该服务资质判断"
              items={[
                service.qualificationLabel,
                service.qualificationRequired
                  ? "平台需要在服务者入驻和后台审核中保留资质字段。"
                  : "该服务属于生活协助或翻译陪同，不应宣传为专业导游讲解。",
              ]}
            />
          </aside>
        </div>
      </section>
    </>
  );
}
