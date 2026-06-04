import { ProviderForm } from "@/components/forms/ProviderForm";
import { SectionHeader } from "@/components/ui/SectionHeader";

export default function ProviderApplyPage() {
  return (
    <section className="bg-paper py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="服务者入驻"
          title="加入巴黎中文服务者网络"
          description="我们先做严格筛选的小供给池。持证讲解、生活陪同、紧急协助、合法 VTC/taxi 需要用不同规则审核。"
        />
        <div className="mt-8">
          <ProviderForm />
        </div>
      </div>
    </section>
  );
}
