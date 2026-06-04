import { PageHeader } from "@/components/v3/PageHeader";
import { V3ServiceCard } from "@/components/service/V3ServiceCard";
import { getLocaleOrDefault } from "@/i18n/request";
import { signatureExperiences } from "@/data/signatureExperiences";

type PageProps = { params: Promise<{ locale: string }> };

export default async function SignaturePage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  const locale = getLocaleOrDefault(localeParam);

  return (
    <>
      <PageHeader
        eyebrow="Paris Signature"
        title="巴黎限定灵感"
        description="全部为 DEMO 或合作洽谈中示例，不展示虚假独家、虚假官方合作或虚假折扣。"
      />
      <section className="bg-mist py-10">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {signatureExperiences.map((item) => (
            <V3ServiceCard key={item.id} service={item} locale={locale} basePath="/signature" />
          ))}
        </div>
      </section>
    </>
  );
}
