"use client";

import { FormEvent, useMemo, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import type { Service } from "@/lib/types";

type BookingFormProps = {
  services: Service[];
  initialServiceSlug?: string;
};

type SubmittedBooking = {
  name: string;
  wechat: string;
  email: string;
  phone: string;
  arrivalDate: string;
  city: string;
  service: string;
  people: string;
  hasChildren: string;
  budget: string;
  notes: string;
};

function inputClass() {
  return "mt-2 w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm text-ink outline-none transition placeholder:text-zinc-400 focus:border-jade focus:ring-4 focus:ring-jade/10";
}

export function BookingForm({ services, initialServiceSlug = "" }: BookingFormProps) {
  const [selectedService, setSelectedService] = useState(initialServiceSlug);
  const [submitted, setSubmitted] = useState<SubmittedBooking | null>(null);

  const selectedServiceTitle = useMemo(() => {
    return services.find((service) => service.slug === selectedService)?.title ?? "";
  }, [selectedService, services]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setSubmitted({
      name: String(formData.get("name") ?? ""),
      wechat: String(formData.get("wechat") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      arrivalDate: String(formData.get("arrivalDate") ?? ""),
      city: String(formData.get("city") ?? "巴黎"),
      service: selectedServiceTitle || String(formData.get("service") ?? ""),
      people: String(formData.get("people") ?? ""),
      hasChildren: formData.get("hasChildren") ? "是" : "否",
      budget: String(formData.get("budget") ?? ""),
      notes: String(formData.get("notes") ?? ""),
    });
    form.reset();
    setSelectedService(initialServiceSlug);
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
      <form
        onSubmit={handleSubmit}
        className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm sm:p-8"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <label className="text-sm font-medium text-ink">
            姓名
            <input className={inputClass()} name="name" required placeholder="例如：林女士" />
          </label>
          <label className="text-sm font-medium text-ink">
            微信号
            <input
              className={inputClass()}
              name="wechat"
              required
              placeholder="方便客服联系"
            />
          </label>
          <label className="text-sm font-medium text-ink">
            邮箱
            <input
              className={inputClass()}
              name="email"
              type="email"
              placeholder="name@example.com"
            />
          </label>
          <label className="text-sm font-medium text-ink">
            手机号
            <input className={inputClass()} name="phone" placeholder="+86 / +33 均可" />
          </label>
          <label className="text-sm font-medium text-ink">
            来法国日期
            <input className={inputClass()} name="arrivalDate" type="date" required />
          </label>
          <label className="text-sm font-medium text-ink">
            服务城市
            <select className={inputClass()} name="city" defaultValue="巴黎">
              <option value="巴黎">巴黎</option>
            </select>
          </label>
          <label className="text-sm font-medium text-ink md:col-span-2">
            想预约的服务
            <select
              className={inputClass()}
              name="service"
              required
              value={selectedService}
              onChange={(event) => setSelectedService(event.target.value)}
            >
              <option value="">请选择服务</option>
              {services.map((service) => (
                <option key={service.slug} value={service.slug}>
                  {service.title}
                </option>
              ))}
            </select>
          </label>
          <label className="text-sm font-medium text-ink">
            人数
            <input
              className={inputClass()}
              name="people"
              type="number"
              min="1"
              defaultValue="2"
              required
            />
          </label>
          <label className="text-sm font-medium text-ink">
            预算
            <input className={inputClass()} name="budget" placeholder="例如：€200 左右" />
          </label>
          <label className="flex items-center gap-3 rounded-lg border border-zinc-200 bg-paper px-4 py-3 text-sm font-medium text-ink md:col-span-2">
            <input
              name="hasChildren"
              type="checkbox"
              className="h-4 w-4 rounded border-zinc-300 text-jade focus:ring-jade"
            />
            是否带孩子
          </label>
          <label className="text-sm font-medium text-ink md:col-span-2">
            备注需求
            <textarea
              className={`${inputClass()} min-h-32 resize-y`}
              name="notes"
              placeholder="例如：带老人、想避开人多路线、需要亲子友好讲解、担心退税流程等"
            />
          </label>
        </div>
        <button
          type="submit"
          className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-forest px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest sm:w-auto"
        >
          提交预约请求
        </button>
      </form>

      <aside className="space-y-5">
        <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-ink">预约后会发生什么</h2>
          <ol className="mt-4 space-y-3 text-sm leading-6 text-zinc-600">
            <li>1. 客服根据服务类型确认是否需要专业资质。</li>
            <li>2. 初步匹配可服务的人选和时间。</li>
            <li>3. 通过微信确认报价、集合点和注意事项。</li>
          </ol>
        </div>
        <div className="rounded-lg border border-rose-100 bg-rose-50 p-5 text-sm leading-6 text-rose-950">
          博物馆和历史古迹的收费讲解只匹配持证 guide-conférencier；普通本地陪同不会以专业导游讲解名义服务。
        </div>
        {submitted ? (
          <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-5">
            <div className="flex items-start gap-3">
              <CheckCircle2 aria-hidden className="mt-0.5 h-5 w-5 text-jade" />
              <div>
                <h3 className="font-semibold text-ink">已模拟提交</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-700">
                  {submitted.name}，你预约的是「{submitted.service}」，人数 {submitted.people}。
                  这是 MVP 页面，暂未接入数据库。
                </p>
              </div>
            </div>
          </div>
        ) : null}
      </aside>
    </div>
  );
}
