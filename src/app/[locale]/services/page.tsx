import { PageHeader } from "@/components/v3/PageHeader";
import { V3ServiceCard } from "@/components/service/V3ServiceCard";
import { getLocaleOrDefault } from "@/i18n/request";
import { services } from "@/data/services";
import { signatureExperiences } from "@/data/signatureExperiences";

type PageProps = { params: Promise<{ locale: string }> };

export default async function ServicesPage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  const locale = getLocaleOrDefault(localeParam);
  const all = [...services, ...signatureExperiences];

  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="巴黎本地服务总览"
        description="按合规边界区分持证文化讲解、本地生活协助、专业服务、紧急中文协助和游客兴趣活动。所有未真实上线功能均标记 DEMO。"
      />
      <section className="bg-mist py-10">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {all.map((service) => (
            <V3ServiceCard
              key={service.id}
              service={service}
              locale={locale}
              basePath={service.category === "signature" ? "/signature" : "/services"}
            />
          ))}
        </div>
      </section>
    </>
  );
}
