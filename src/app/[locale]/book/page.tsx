import { PageHeader } from "@/components/v3/PageHeader";
import { V3BookingForm } from "@/components/forms/V3BookingForm";
import { getLocaleOrDefault } from "@/i18n/request";
import { services } from "@/data/services";
import { signatureExperiences } from "@/data/signatureExperiences";

type PageProps = { params: Promise<{ locale: string }> };

export default async function BookPage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  const locale = getLocaleOrDefault(localeParam);

  return (
    <>
      <PageHeader
        eyebrow="Booking request"
        title="预约个性化服务"
        description="MVP 表单会保存到本地 localStorage，不发送第三方、不调用真实支付、不发送真实邮件。"
      />
      <section className="bg-mist py-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <V3BookingForm services={[...services, ...signatureExperiences]} locale={locale} />
        </div>
      </section>
    </>
  );
}
