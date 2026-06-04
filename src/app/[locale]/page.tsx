import Image from "next/image";
import {
  AlertTriangle,
  BadgeCheck,
  CalendarCheck,
  Camera,
  Globe2,
  HandHeart,
  Landmark,
  MessageCircle,
  PackageCheck,
  ShieldCheck,
  ShoppingBag,
  Ship,
  Star,
  UsersRound,
  WalletCards,
} from "lucide-react";
import { ButtonLink } from "@/components/v3/LocalizedLink";
import { DemoBadge, StatusBadge } from "@/components/v3/Badges";
import { V3ServiceCard } from "@/components/service/V3ServiceCard";
import { getMessages } from "@/i18n/request";
import { getLocaleOrDefault, t } from "@/i18n/request";
import type { Locale } from "@/i18n/routing";
import { services } from "@/data/services";
import { signatureExperiences } from "@/data/signatureExperiences";
import { cruises } from "@/data/cruises";
import { communityEvents } from "@/data/communityEvents";
import { reviews } from "@/data/reviews";
import { travelKits } from "@/data/travelKits";
import { tx } from "@/types/service";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function LocalizedHome({ params }: PageProps) {
  const { locale: localeParam } = await params;
  const locale = getLocaleOrDefault(localeParam);
  const messages = getMessages(locale);
  const trust = messages.home.trust as string[];

  return (
    <>
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="absolute inset-0 opacity-32">
          <Image
            src="/images/paris-local-placeholder.svg"
            alt="Paris Local Link placeholder visual. TODO replace with licensed image."
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="relative mx-auto grid min-h-[78svh] max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div>
            <div className="flex flex-wrap gap-2">
              <DemoBadge label={messages.common.testVersion} />
              <StatusBadge label="Paris only" tone="success" />
              <StatusBadge label={messages.common.noRealPayment} tone="warning" />
            </div>
            <h1 className="mt-6 text-4xl font-semibold tracking-normal sm:text-6xl">
              {messages.home.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">
              {messages.home.subtitle}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink locale={locale} href="/signature" className="bg-white text-navy hover:bg-mist">
                {messages.home.explore}
              </ButtonLink>
              <ButtonLink locale={locale} href="/book" variant="secondary" className="border-white/30 bg-white/10 text-white hover:bg-white/20">
                {messages.home.book}
              </ButtonLink>
              <ButtonLink locale={locale} href="/cruises" variant="secondary" className="border-white/30 bg-white/10 text-white hover:bg-white/20">
                {messages.home.cruise}
              </ButtonLink>
              <ButtonLink locale={locale} href="/travel-mart" variant="secondary" className="border-white/30 bg-white/10 text-white hover:bg-white/20">
                巴黎旅行超市
              </ButtonLink>
              <ButtonLink locale={locale} href="/help/emergency" variant="danger">
                {messages.home.emergency}
              </ButtonLink>
            </div>
          </div>
          <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur">
            <p className="text-sm font-semibold text-champagne">Trust checklist</p>
            <div className="mt-5 grid gap-3">
              {trust.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 text-sm">
                  <ShieldCheck aria-hidden className="h-4 w-4 text-champagne" />
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-5 text-xs leading-5 text-white/65">Image copyright TODO: local placeholder only. Replace with licensed visuals before launch.</p>
          </div>
        </div>
      </section>

      <section className="bg-mist py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <div className="flex items-center gap-2 text-sm font-semibold text-champagne">
                <ShoppingBag aria-hidden className="h-4 w-4" />
                Paris Travel Mart
              </div>
              <h2 className="mt-2 text-3xl font-semibold text-navy">巴黎旅行超市</h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-600">
                缺什么，快速找到。MVP 只展示场景包和需求入口，不囤库存、不建仓、不接支付、不生成真实订单。
              </p>
            </div>
            <ButtonLink locale={locale} href="/travel-mart" variant="secondary">进入旅行超市</ButtonLink>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {travelKits.slice(0, 8).map((kit) => (
              <div key={kit.id} className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                <PackageCheck aria-hidden className="h-6 w-6 text-champagne" />
                <h3 className="mt-3 font-semibold text-navy">{tx(kit.title, locale)}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">{tx(kit.summary, locale)}</p>
                <p className="mt-3 text-xs text-zinc-500">DEMO · 人工确认 · 库存待合作方确认</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold text-champagne">Paris Signature</p>
              <h2 className="mt-2 text-3xl font-semibold text-navy">{messages.home.signatureTitle}</h2>
            </div>
            <ButtonLink locale={locale} href="/signature" variant="secondary">All</ButtonLink>
          </div>
          <div className="mt-8 flex gap-5 overflow-x-auto pb-3">
            {signatureExperiences.map((item) => (
              <div key={item.id} className="w-[310px] shrink-0">
                <V3ServiceCard service={item} locale={locale} basePath="/signature" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist py-14">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="rounded-2xl bg-navy p-6 text-white">
            <AlertTriangle aria-hidden className="h-9 w-9 text-champagne" />
            <h2 className="mt-5 text-3xl font-semibold">{messages.home.safeTitle}</h2>
            <p className="mt-4 text-sm leading-7 text-white/78">
              安心巴黎是官方资源导航和中文流程说明，不替代警方、医疗、消防、领事机构或律师。
            </p>
            <div className="mt-6">
              <ButtonLink locale={locale} href="/help/emergency" variant="danger">
                打开安心巴黎
              </ButtonLink>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["手机被偷", "stolen-phone", MessageCircle],
              ["护照遗失", "lost-passport", BadgeCheck],
              ["财物丢失", "lost-property", WalletCards],
              ["需要报警", "police-report", AlertTriangle],
              ["医院或药房沟通", "medical", HandHeart],
              ["地铁和公交问题", "transport", Ship],
            ].map(([label, slug, Icon]) => (
              <ButtonLink key={slug as string} locale={locale} href={`/help/${slug}`} variant="secondary" className="justify-start">
                <Icon aria-hidden className="mr-2 h-4 w-4 text-champagne" />
                {label as string}
              </ButtonLink>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm md:col-span-1">
              <WalletCards aria-hidden className="h-8 w-8 text-champagne" />
              <h2 className="mt-4 text-2xl font-semibold text-navy">{messages.home.pointsTitle}</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                当前为演示机制：积分不是现金、不可提现、不可转让、不可兑换真实船票。
              </p>
              <div className="mt-5">
                <ButtonLink locale={locale} href="/rewards" variant="secondary">查看积分规则</ButtonLink>
              </div>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm md:col-span-2">
              <UsersRound aria-hidden className="h-8 w-8 text-champagne" />
              <h2 className="mt-4 text-2xl font-semibold text-navy">{messages.home.togetherTitle}</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {communityEvents.slice(0, 4).map((event) => (
                  <div key={event.id} className="rounded-xl bg-mist p-4">
                    <DemoBadge />
                    <h3 className="mt-2 font-semibold text-navy">{event.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-600">{event.summary}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex gap-3">
                <ButtonLink locale={locale} href="/community" variant="secondary">探索同行活动</ButtonLink>
                <ButtonLink locale={locale} href="/community/safety" variant="secondary">查看安全规则</ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-mist py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold text-champagne">Services</p>
              <h2 className="mt-2 text-3xl font-semibold text-navy">精选服务与预约入口</h2>
            </div>
            <ButtonLink locale={locale} href="/services" variant="secondary">Services</ButtonLink>
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {services.filter((item) => item.featured).slice(0, 3).map((service) => (
              <V3ServiceCard key={service.id} service={service} locale={locale} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
          <div className="rounded-2xl border border-zinc-200 p-6 shadow-sm">
            <Ship aria-hidden className="h-8 w-8 text-champagne" />
            <h2 className="mt-4 text-2xl font-semibold text-navy">塞纳河游船专区</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              第一阶段只展示预约意向，不内部收票款、不生成票、不生成二维码、不伪造官方合作。
            </p>
            <div className="mt-5 grid gap-2">
              {cruises.slice(0, 3).map((cruise) => (
                <ButtonLink key={cruise.id} locale={locale} href={`/cruises/${cruise.slug}`} variant="secondary" className="justify-start">
                  {tx(cruise.title, locale)}
                </ButtonLink>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-6 shadow-sm">
            <Star aria-hidden className="h-8 w-8 text-champagne" />
            <h2 className="mt-4 text-2xl font-semibold text-navy">{messages.home.reviewsTitle}</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-600">{messages.home.reviewsDemo}</p>
            <div className="mt-5 grid gap-3">
              {reviews.slice(0, 2).map((review) => (
                <div key={review.id} className="rounded-xl bg-mist p-4">
                  <DemoBadge />
                  <p className="mt-2 font-semibold text-navy">{review.title}</p>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">{review.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy py-14 text-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {[
            [Landmark, "中文持证 guide-conférencier"],
            [HandHeart, "中文本地陪同"],
            [Ship, "游船运营方"],
            [Camera, "专业翻译与摄影"],
            [CalendarCheck, "亲子活动服务者"],
            [Globe2, "文化机构与体验合作方"],
          ].map(([Icon, text]) => (
            <div key={text as string} className="rounded-xl border border-white/15 bg-white/10 p-5">
              <Icon aria-hidden className="h-6 w-6 text-champagne" />
              <p className="mt-3 font-semibold">{text as string}</p>
            </div>
          ))}
          <div className="lg:col-span-3">
            <ButtonLink locale={locale} href="/providers/apply" className="bg-white text-navy hover:bg-mist">
              服务者和合作方入驻
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
