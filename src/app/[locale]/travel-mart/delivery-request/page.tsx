import { PageHeader } from "@/components/v3/PageHeader";
import { DemoBadge } from "@/components/v3/Badges";

export default function DeliveryRequestPage() {
  return (
    <>
      <PageHeader title="旅行超市需求提交" description="用于商品、租赁、酒店前台交付、商户自取和人工管家需求占位。当前不生成真实订单，不接真实支付。" />
      <section className="bg-mist py-10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <form className="grid gap-4 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <DemoBadge />
            {["姓名", "微信", "邮箱", "所在城市/酒店区域", "需要的商品或租赁", "希望日期"].map((label) => (
              <label key={label} className="grid gap-2 text-sm font-medium text-navy">{label}<input className="rounded-lg border border-zinc-300 px-3 py-2" /></label>
            ))}
            <label className="grid gap-2 text-sm font-medium text-navy">备注需求<textarea rows={4} className="rounded-lg border border-zinc-300 px-3 py-2" /></label>
            <p className="rounded-xl bg-amber-50 p-4 text-sm leading-6 text-amber-900">请勿填写酒店房间号。是否接受配送以及交付地点，以酒店规定为准。</p>
            <button type="button" className="rounded-lg bg-navy px-5 py-3 text-sm font-semibold text-white">DEMO 保存占位</button>
          </form>
        </div>
      </section>
    </>
  );
}
