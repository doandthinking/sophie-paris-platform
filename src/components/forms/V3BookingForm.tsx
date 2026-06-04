"use client";

import { FormEvent, useState } from "react";
import type { Service } from "@/types/service";
import type { Locale } from "@/i18n/routing";
import { tx } from "@/types/service";

function inputClass() {
  return "mt-2 w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm text-navy outline-none focus:border-champagne focus:ring-4 focus:ring-champagne/15";
}

export function V3BookingForm({ services, locale }: { services: Service[]; locale: Locale }) {
  const [bookingId, setBookingId] = useState<string | null>(null);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const id = `DEMO-BOOKING-${Date.now()}`;
    const existing = JSON.parse(localStorage.getItem("pll-bookings") ?? "[]");
    localStorage.setItem("pll-bookings", JSON.stringify([{ id, createdAt: new Date().toISOString(), ...data }, ...existing]));
    setBookingId(id);
    form.reset();
  }

  return (
    <form onSubmit={submit} className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm sm:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="text-sm font-semibold text-navy">姓名<input required name="name" className={inputClass()} /></label>
        <label className="text-sm font-semibold text-navy">微信号<input required name="wechat" className={inputClass()} /></label>
        <label className="text-sm font-semibold text-navy">邮箱<input name="email" type="email" className={inputClass()} /></label>
        <label className="text-sm font-semibold text-navy">手机号<input name="phone" className={inputClass()} /></label>
        <label className="text-sm font-semibold text-navy">偏好语言<input name="preferredLanguage" defaultValue={locale} className={inputClass()} /></label>
        <label className="text-sm font-semibold text-navy">到达法国日期<input name="arrivalDate" type="date" className={inputClass()} /></label>
        <label className="text-sm font-semibold text-navy">离开法国日期<input name="departureDate" type="date" className={inputClass()} /></label>
        <label className="text-sm font-semibold text-navy">服务日期<input name="serviceDate" type="date" className={inputClass()} /></label>
        <label className="text-sm font-semibold text-navy">希望服务时间<input name="preferredTime" className={inputClass()} placeholder="上午 / 下午 / 晚上" /></label>
        <label className="text-sm font-semibold text-navy">服务城市<select name="city" defaultValue="Paris" className={inputClass()}><option>Paris</option></select></label>
        <label className="text-sm font-semibold text-navy md:col-span-2">想预约的服务<select name="service" className={inputClass()}>{services.map((service) => <option key={service.id} value={service.slug}>{tx(service.title, locale)}</option>)}</select></label>
        <label className="text-sm font-semibold text-navy">人数<input name="partySize" type="number" min="1" defaultValue="2" className={inputClass()} /></label>
        <label className="text-sm font-semibold text-navy">儿童人数<input name="childrenCount" type="number" min="0" defaultValue="0" className={inputClass()} /></label>
        <label className="text-sm font-semibold text-navy">儿童年龄段<input name="childrenAges" className={inputClass()} placeholder="例如：6-9 岁" /></label>
        <label className="text-sm font-semibold text-navy">预算区间<input name="budget" className={inputClass()} placeholder="例如：€200-€300" /></label>
        <label className="text-sm font-semibold text-navy">紧急程度<select name="urgency" className={inputClass()}><option>普通</option><option>48 小时内</option><option>今天</option><option>紧急</option></select></label>
        <div className="grid gap-3 rounded-lg bg-mist p-4 text-sm text-zinc-700 md:col-span-2">
          {["是否带孩子", "是否需要亲子友好", "是否有行动不便需求", "是否接受替代方案", "是否希望微信联系"].map((label) => (
            <label key={label} className="flex items-center gap-3"><input name={label} type="checkbox" className="h-4 w-4 rounded border-zinc-300 text-navy" />{label}</label>
          ))}
        </div>
        <label className="text-sm font-semibold text-navy md:col-span-2">备注<textarea name="notes" className={`${inputClass()} min-h-32`} /></label>
        <label className="flex items-start gap-3 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900 md:col-span-2">
          <input required name="privacy" type="checkbox" className="mt-1 h-4 w-4" />
          请勿在备注中填写护照号码、银行卡、完整医疗记录、酒店房间号或其他不必要的敏感信息。
        </label>
      </div>
      <button className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-navy px-5 py-3 text-sm font-semibold text-white sm:w-auto">
        提交预约请求
      </button>
      {bookingId ? <p className="mt-4 rounded-lg bg-emerald-50 p-4 text-sm font-semibold text-jade">已保存到 localStorage：{bookingId}</p> : null}
    </form>
  );
}
