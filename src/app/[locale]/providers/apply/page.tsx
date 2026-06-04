import { PageHeader } from "@/components/v3/PageHeader";
import { ProviderApplicationForm } from "@/components/forms/ProviderApplicationForm";

export default function ProviderApplyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Providers"
        title="成为服务者或合作方"
        description="我们优先寻找中文持证 guide-conférencier、本地陪同、合法 VTC/taxi、专业翻译、文化机构和游船运营方。"
      />
      <section className="bg-mist py-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <ProviderApplicationForm />
        </div>
      </section>
    </>
  );
}
