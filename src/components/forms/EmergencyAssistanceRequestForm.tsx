"use client";

import { FormEvent, useState } from "react";

function inputClass() {
  return "mt-2 w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm text-navy outline-none focus:border-wine focus:ring-4 focus:ring-rose-100";
}

export function EmergencyAssistanceRequestForm() {
  const [requestId, setRequestId] = useState<string | null>(null);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const id = `DEMO-EMERGENCY-${Date.now()}`;
    const data = Object.fromEntries(new FormData(form).entries());
    const existing = JSON.parse(localStorage.getItem("pll-emergency-requests") ?? "[]");
    localStorage.setItem("pll-emergency-requests", JSON.stringify([{ id, createdAt: new Date().toISOString(), ...data }, ...existing]));
    setRequestId(id);
    form.reset();
  }

  return (
    <form onSubmit={submit} className="rounded-xl border border-rose-200 bg-white p-5 shadow-sm sm:p-8">
      <div className="rounded-lg bg-rose-50 p-4 text-sm leading-6 text-rose-950">
        此表单不是官方紧急服务，也不能保证即时回复。如有人身危险，请立即拨打 112、17、15 或 18。
      </div>
      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <label className="text-sm font-semibold text-navy">称呼<input required name="name" className={inputClass()} /></label>
        <label className="text-sm font-semibold text-navy">联系方式<input required name="contact" className={inputClass()} /></label>
        <label className="text-sm font-semibold text-navy">偏好语言<input name="language" defaultValue="中文" className={inputClass()} /></label>
        <label className="text-sm font-semibold text-navy">事件类别<select name="category" className={inputClass()}>{["手机被盗", "护照遗失", "财物丢失", "报警沟通", "医院药房沟通", "公共交通问题", "其他"].map((item) => <option key={item}>{item}</option>)}</select></label>
        <label className="text-sm font-semibold text-navy">是否已处于安全地点<select name="safePlace" className={inputClass()}><option>是</option><option>否</option><option>不确定</option></select></label>
        <label className="text-sm font-semibold text-navy">方便联系时间<input name="contactTime" className={inputClass()} /></label>
        <label className="text-sm font-semibold text-navy md:col-span-2">简短说明<textarea name="description" className={`${inputClass()} min-h-28`} /></label>
        <label className="flex items-start gap-3 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900 md:col-span-2">
          <input required name="privacy" type="checkbox" className="mt-1 h-4 w-4" />
          我不会提交护照扫描件、银行卡、密码、医疗记录、精确酒店房间或实时位置。
        </label>
      </div>
      <button className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-wine px-5 py-3 text-sm font-semibold text-white sm:w-auto">
        提交紧急协助请求
      </button>
      {requestId ? <p className="mt-4 rounded-lg bg-emerald-50 p-4 text-sm font-semibold text-jade">已保存到 localStorage：{requestId}</p> : null}
    </form>
  );
}
