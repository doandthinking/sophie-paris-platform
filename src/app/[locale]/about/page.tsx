import { PageHeader } from "@/components/v3/PageHeader";

export default function AboutPage() {
  return (
    <>
      <PageHeader title="关于 Paris Local Link" description="第一阶段只做巴黎，帮助国际游客尤其是中文游客用熟悉的语言，更安心、更深入地体验巴黎。" />
      <section className="bg-mist py-10">
        <div className="mx-auto max-w-4xl px-4 text-sm leading-7 text-zinc-700 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            平台不是大型 OTA，不出售机票和酒店，不销售复杂旅行套餐。MVP 重点是预约意向、人工确认、服务者撮合、官方资源导航、积分和社区结构演示。
          </div>
        </div>
      </section>
    </>
  );
}
