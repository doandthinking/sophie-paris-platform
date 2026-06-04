import { PageHeader } from "@/components/v3/PageHeader";
import { ButtonLink } from "@/components/v3/LocalizedLink";
import { DemoBadge, StatusBadge } from "@/components/v3/Badges";
import { getLocaleOrDefault } from "@/i18n/request";
import { communityEvents } from "@/data/communityEvents";

type PageProps = { params: Promise<{ locale: string }> };

export default async function CommunityEventsPage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  const locale = getLocaleOrDefault(localeParam);

  return (
    <>
      <PageHeader title="同行巴黎公开活动" description="活动优先于私聊，白天、公开场所、小团、成年参与者、安全提醒。" />
      <section className="bg-mist py-10">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {communityEvents.map((event) => (
            <article key={event.id} className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
              <DemoBadge />
              <h2 className="mt-3 text-xl font-semibold text-navy">{event.title}</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-600">{event.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {event.tags.map((tag) => <StatusBadge key={tag} label={tag} />)}
              </div>
              <div className="mt-5">
                <ButtonLink locale={locale} href={`/community/events/${event.slug}`}>查看活动</ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
