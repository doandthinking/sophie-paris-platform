"use client";

import { FormEvent, useState } from "react";

function inputClass() {
  return "mt-2 w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm text-navy outline-none focus:border-champagne focus:ring-4 focus:ring-champagne/15";
}

export function ProviderApplicationForm() {
  const [applicationId, setApplicationId] = useState<string | null>(null);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const id = `DEMO-PROVIDER-${Date.now()}`;
    const payload = {
      id,
      createdAt: new Date().toISOString(),
      ...Object.fromEntries(data.entries()),
      serviceTypes: data.getAll("serviceTypes"),
    };
    const existing = JSON.parse(localStorage.getItem("pll-provider-applications") ?? "[]");
    localStorage.setItem("pll-provider-applications", JSON.stringify([payload, ...existing]));
    setApplicationId(id);
    form.reset();
  }

  return (
    <form onSubmit={submit} className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm sm:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="text-sm font-semibold text-navy">姓名<input required name="name" className={inputClass()} /></label>
        <label className="text-sm font-semibold text-navy">微信号<input required name="wechat" className={inputClass()} /></label>
        <label className="text-sm font-semibold text-navy">邮箱<input name="email" type="email" className={inputClass()} /></label>
        <label className="text-sm font-semibold text-navy">手机号<input name="phone" className={inputClass()} /></label>
        <label className="text-sm font-semibold text-navy">所在城市<input name="city" defaultValue="Paris" className={inputClass()} /></label>
        <label className="text-sm font-semibold text-navy">服务者类型<select name="providerType" className={inputClass()}><option>certified-guide</option><option>local-assistant</option><option>licensed-driver</option><option>professional-service</option></select></label>
        <fieldset className="rounded-lg bg-mist p-4 md:col-span-2">
          <legend className="text-sm font-semibold text-navy">可提供服务类型</legend>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {["持证文化讲解", "本地生活协助", "合法 VTC/taxi", "专业翻译", "亲子活动", "紧急中文协助", "社区公开活动主持"].map((item) => (
              <label key={item} className="flex items-center gap-3 text-sm text-zinc-700"><input name="serviceTypes" value={item} type="checkbox" />{item}</label>
            ))}
          </div>
        </fieldset>
        <label className="text-sm font-semibold text-navy">是否持有 guide-conférencier 专业卡<select name="hasGuideCard" className={inputClass()}><option>否</option><option>是，愿意后续提交证明</option></select></label>
        <label className="text-sm font-semibold text-navy">专业卡编号占位<input name="guideCardPlaceholder" className={inputClass()} placeholder="MVP 不公开完整编号" /></label>
        <label className="text-sm font-semibold text-navy">是否持有 VTC 或 taxi 资质<select name="hasTransportLicense" className={inputClass()}><option>否</option><option>是，愿意后续提交证明</option></select></label>
        <label className="text-sm font-semibold text-navy">资质说明<input name="qualificationNotes" className={inputClass()} /></label>
        <label className="text-sm font-semibold text-navy">语言能力<input name="languages" className={inputClass()} placeholder="中文 / 法语 / 英语" /></label>
        <label className="text-sm font-semibold text-navy">可服务区域<input name="areas" className={inputClass()} /></label>
        <label className="text-sm font-semibold text-navy">可服务时间<input name="availability" className={inputClass()} /></label>
        <label className="text-sm font-semibold text-navy">服务价格区间<input name="priceRange" className={inputClass()} /></label>
        <div className="grid gap-3 rounded-lg bg-mist p-4 text-sm text-zinc-700 md:col-span-2">
          <label><input name="familyFriendly" type="checkbox" className="mr-2" />接受亲子游客</label>
          <label><input name="lastMinute" type="checkbox" className="mr-2" />接受临时需求</label>
          <label><input name="proofConsent" required type="checkbox" className="mr-2" />我愿意后续提交必要资质证明供平台人工审核</label>
        </div>
        <label className="text-sm font-semibold text-navy md:col-span-2">自我介绍<textarea name="bio" className={`${inputClass()} min-h-32`} /></label>
        <label className="flex items-start gap-3 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900 md:col-span-2">
          <input required name="privacy" type="checkbox" className="mt-1 h-4 w-4" />
          MVP 不上传身份证件，不公开专业卡号码和证件图片；公开资料仅显示审核徽章。
        </label>
      </div>
      <button className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-navy px-5 py-3 text-sm font-semibold text-white sm:w-auto">
        提交入驻申请
      </button>
      {applicationId ? <p className="mt-4 rounded-lg bg-emerald-50 p-4 text-sm font-semibold text-jade">已保存到 localStorage：{applicationId}</p> : null}
    </form>
  );
}
