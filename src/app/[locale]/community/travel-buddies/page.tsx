import { PageHeader } from "@/components/v3/PageHeader";
import { ButtonLink } from "@/components/v3/LocalizedLink";
import { DemoBadge, StatusBadge } from "@/components/v3/Badges";
import { getLocaleOrDefault } from "@/i18n/request";
import { travelBuddyPosts } from "@/data/travelBuddyPosts";

type PageProps = { params: Promise<{ locale: string }> };

export default async function TravelBuddiesPage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  const locale = getLocaleOrDefault(localeParam);

  return (
    <>
      <PageHeader title="旅行同行需求板" description="仅限 18 岁以上；不公开微信、电话、邮箱、酒店、精确地址、实时位置或儿童资料。" actions={<ButtonLink locale={locale} href="/community/travel-buddies/new">发布 DEMO 需求</ButtonLink>} />
      <section className="bg-mist py-10">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {travelBuddyPosts.map((post) => (
            <article key={post.id} className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
              <DemoBadge />
              <h2 className="mt-3 text-xl font-semibold text-navy">{post.alias}</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-600">{post.introduction}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <StatusBadge label={post.ageRange} />
                <StatusBadge label={post.languages.join(" / ")} />
                <StatusBadge label={post.preferredAreas.join(", ")} />
                <StatusBadge label={post.moderationStatus} tone="warning" />
              </div>
              <button className="mt-5 inline-flex min-h-11 items-center justify-center rounded-lg border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-500" disabled>
                连接请求：演示功能
              </button>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
