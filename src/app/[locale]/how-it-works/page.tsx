import { PageHeader } from "@/components/v3/PageHeader";

const steps = ["浏览服务和体验", "查看合规与资质说明", "提交预约意向", "平台人工确认需求", "匹配合适服务者或合作方", "确认价格、时间和地点", "完成服务并收集反馈"];

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader title="如何使用" description="当前为 MVP 流程演示，不做真实支付、出票、登录或即时聊天。" />
      <section className="bg-mist py-10">
        <div className="mx-auto grid max-w-5xl gap-3 px-4 sm:px-6 lg:px-8">
          {steps.map((step, index) => (
            <div key={step} className="flex gap-4 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy text-sm font-semibold text-white">{index + 1}</span>
              <p className="pt-1 text-sm font-medium text-zinc-700">{step}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
