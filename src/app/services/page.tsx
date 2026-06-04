import { ServiceCard } from "@/components/services/ServiceCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ComplianceNotice } from "@/components/ui/ComplianceNotice";
import { serviceCategories, services } from "@/lib/mock-data";

export default function ServicesPage() {
  return (
    <>
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="服务分类"
            title="巴黎服务先按合规边界分清楚"
            description="同样是“有人陪你玩巴黎”，博物馆讲解、本地生活协助、车辆接送和紧急帮助的资质要求完全不同。"
          />
          <div className="mt-8">
            <ComplianceNotice
              items={[
                "博物馆与历史古迹的收费讲解只展示持证服务。",
                "本地陪同不使用“专业导游讲解”表达。",
                "车辆接送服务只匹配合法 VTC、taxi 或 transport professionnel。",
              ]}
            />
          </div>
        </div>
      </section>

      {serviceCategories.map((category, index) => {
        const categoryServices = services.filter(
          (service) => service.category === category.id,
        );

        return (
          <section
            key={category.id}
            id={category.id}
            className={index % 2 === 0 ? "bg-paper py-16" : "bg-white py-16"}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
                <SectionHeader title={category.title} description={category.description} />
                <span className="w-fit rounded-full bg-white px-4 py-2 text-sm font-semibold text-jade ring-1 ring-zinc-200">
                  {categoryServices.length} 个示例服务
                </span>
              </div>
              <div className="mt-8 grid gap-6 lg:grid-cols-3">
                {categoryServices.map((service) => (
                  <ServiceCard key={service.slug} service={service} />
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
