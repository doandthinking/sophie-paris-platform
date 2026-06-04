"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2 } from "lucide-react";

type SubmittedProvider = {
  name: string;
  city: string;
  serviceTypes: string;
  hasGuideCard: string;
  hasTransportLicense: string;
  languages: string;
};

function inputClass() {
  return "mt-2 w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm text-ink outline-none transition placeholder:text-zinc-400 focus:border-jade focus:ring-4 focus:ring-jade/10";
}

export function ProviderForm() {
  const [submitted, setSubmitted] = useState<SubmittedProvider | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setSubmitted({
      name: String(formData.get("name") ?? ""),
      city: String(formData.get("city") ?? "巴黎"),
      serviceTypes: formData.getAll("serviceTypes").map(String).join("、"),
      hasGuideCard: formData.get("hasGuideCard") ? "是" : "否",
      hasTransportLicense: formData.get("hasTransportLicense") ? "是" : "否",
      languages: String(formData.get("languages") ?? ""),
    });
    form.reset();
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
            <input className={inputClass()} name="name" required placeholder="中文或英文名" />
          </label>
          <label className="text-sm font-medium text-ink">
            微信号
            <input className={inputClass()} name="wechat" required placeholder="用于审核联系" />
          </label>
          <label className="text-sm font-medium text-ink">
            邮箱
            <input className={inputClass()} name="email" type="email" placeholder="name@example.com" />
          </label>
          <label className="text-sm font-medium text-ink">
            所在城市
            <select className={inputClass()} name="city" defaultValue="巴黎">
              <option value="巴黎">巴黎</option>
            </select>
          </label>

          <fieldset className="rounded-lg border border-zinc-200 bg-paper p-4 md:col-span-2">
            <legend className="px-1 text-sm font-semibold text-ink">可提供服务类型</legend>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {[
                "持证博物馆中文讲解",
                "法餐陪同",
                "购物与退税协助",
                "公共交通协助",
                "亲子活动陪同",
                "紧急中文帮助",
                "VTC/taxi 接送",
                "正式翻译陪同",
              ].map((item) => (
                <label key={item} className="flex items-center gap-3 text-sm text-zinc-700">
                  <input
                    name="serviceTypes"
                    value={item}
                    type="checkbox"
                    className="h-4 w-4 rounded border-zinc-300 text-jade focus:ring-jade"
                  />
                  {item}
                </label>
              ))}
            </div>
          </fieldset>

          <label className="flex items-start gap-3 rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-ink md:col-span-2">
            <input
              name="hasGuideCard"
              type="checkbox"
              className="mt-0.5 h-4 w-4 rounded border-zinc-300 text-jade focus:ring-jade"
            />
            <span>
              我持有法国 carte professionnelle de guide-conférencier 专业卡
              <span className="mt-1 block text-xs font-normal leading-5 text-zinc-500">
                只有勾选并通过证件审核后，才能提供博物馆、Musée de France 和 monuments historiques 收费讲解。
              </span>
            </span>
          </label>

          <label className="flex items-start gap-3 rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-ink md:col-span-2">
            <input
              name="hasTransportLicense"
              type="checkbox"
              className="mt-0.5 h-4 w-4 rounded border-zinc-300 text-jade focus:ring-jade"
            />
            <span>
              我持有 VTC/taxi/transport professionnel 相关资质
              <span className="mt-1 block text-xs font-normal leading-5 text-zinc-500">
                只有通过资质与保险审核后，才能提供有偿车辆接送相关服务。
              </span>
            </span>
          </label>

          <label className="text-sm font-medium text-ink md:col-span-2">
            语言能力
            <input
              className={inputClass()}
              name="languages"
              required
              placeholder="例如：中文、法语、英语"
            />
          </label>
          <label className="text-sm font-medium text-ink md:col-span-2">
            简介
            <textarea
              className={`${inputClass()} min-h-36 resize-y`}
              name="bio"
              placeholder="介绍你的巴黎生活经验、可服务时间、擅长人群、过往相关经历等"
            />
          </label>
        </div>
        <button
          type="submit"
          className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-forest px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest sm:w-auto"
        >
          提交入驻申请
        </button>
      </form>

      <aside className="space-y-5">
        <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-ink">审核重点</h2>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-600">
            <li>身份、联系方式和在巴黎服务可用性。</li>
            <li>博物馆讲解必须核验 guide-conférencier 专业卡。</li>
            <li>车辆接送必须核验 VTC/taxi/职业载客资质与保险。</li>
          </ul>
        </div>
        <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-ink">服务表达规范</h2>
          <p className="mt-3 text-sm leading-6 text-zinc-600">
            未持证服务者可以提供本地陪同、生活协助、翻译陪同，但不能在博物馆或历史古迹内以收费讲解员身份服务。
          </p>
        </div>
        {submitted ? (
          <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-5">
            <div className="flex items-start gap-3">
              <CheckCircle2 aria-hidden className="mt-0.5 h-5 w-5 text-jade" />
              <div>
                <h3 className="font-semibold text-ink">已模拟提交</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-700">
                  {submitted.name} 的申请已进入模拟审核。服务类型：{submitted.serviceTypes || "未选择"}。
                </p>
              </div>
            </div>
          </div>
        ) : null}
      </aside>
    </div>
  );
}
