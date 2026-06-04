import { PageHeader } from "@/components/v3/PageHeader";
import { ButtonLink } from "@/components/v3/LocalizedLink";
import { getLocaleOrDefault } from "@/i18n/request";

type PageProps = { params: Promise<{ locale: string }> };

export default async function AccountPage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  const locale = getLocaleOrDefault(localeParam);
  const sections = [
    ["trips", "我的预约"],
    ["points", "我的积分"],
    ["reviews", "我的评价"],
    ["favorites", "我的收藏"],
    ["connections", "我的连接请求"],
  ];

  return (
    <>
      <PageHeader title="游客账户演示" description="MVP 使用演示用户和 localStorage，不是真实安全账号系统，不存储敏感信息。" />
      <section className="bg-mist py-10">
        <div className="mx-auto grid max-w-5xl gap-4 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          {sections.map(([slug, label]) => (
            <ButtonLink key={slug} locale={locale} href={`/account/${slug}`} variant="secondary" className="justify-start">
              {label}
            </ButtonLink>
          ))}
        </div>
      </section>
    </>
  );
}
