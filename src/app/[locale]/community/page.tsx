import { PageHeader } from "@/components/v3/PageHeader";
import { ButtonLink } from "@/components/v3/LocalizedLink";
import { DemoBadge, StatusBadge } from "@/components/v3/Badges";
import { getLocaleOrDefault } from "@/i18n/request";
import { communityEvents } from "@/data/communityEvents";
import { travelBuddyPosts } from "@/data/travelBuddyPosts";

type PageProps = { params: Promise<{ locale: string }> };

export default async function CommunityPage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  const locale = getLocaleOrDefault(localeParam);

  return (
    <>
      <PageHeader
        eyebrow="同行巴黎 · Paris Together"
        title="成年游客兴趣活动和安全同行演示"
        description="不是约会软件、陪玩平台或私人陪伴交易平台。MVP 不开放真实即时聊天、不公开联系方式、不公开精确地址或实时位置。"
      />
      <section className="bg-mist py-10">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-navy">平台公开活动优先</h2>
              <ButtonLink locale={locale} href="/community/events" variant="secondary">全部活动</ButtonLink>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {communityEvents.map((event) => (
                <article key={event.id} className="rounded-xl bg-mist p-4">
                  <DemoBadge />
                  <h3 className="mt-2 font-semibold text-navy">{event.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">{event.summary}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <StatusBadge label={event.meetingArea} />
                    <StatusBadge label="18+" tone="success" />
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-navy">旅行同行需求板</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-600">仅展示昵称、年龄范围、语言、旅行日期、模糊区域和兴趣标签。联系方式不公开。</p>
            <div className="mt-6 grid gap-4">
              {travelBuddyPosts.map((post) => (
                <article key={post.id} className="rounded-xl bg-mist p-4">
                  <DemoBadge />
                  <h3 className="mt-2 font-semibold text-navy">{post.alias}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">{post.introduction}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <StatusBadge label={post.ageRange} />
                    <StatusBadge label={post.preferredAreas.join(", ")} />
                    <StatusBadge label={post.moderationStatus} tone="warning" />
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-6 flex gap-3">
              <ButtonLink locale={locale} href="/community/travel-buddies" variant="secondary">查看需求</ButtonLink>
              <ButtonLink locale={locale} href="/community/safety" variant="danger">安全规则</ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
