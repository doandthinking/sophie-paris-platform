"use client";

import { FormEvent, useState } from "react";
import { PageHeader } from "@/components/v3/PageHeader";

function inputClass() {
  return "mt-2 w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm text-navy outline-none focus:border-champagne focus:ring-4 focus:ring-champagne/15";
}

export default function NewTravelBuddyPage() {
  const [saved, setSaved] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    const existing = JSON.parse(localStorage.getItem("pll-travel-buddy-posts") ?? "[]");
    localStorage.setItem("pll-travel-buddy-posts", JSON.stringify([{ id: `DEMO-BUDDY-${Date.now()}`, ...payload }, ...existing]));
    setSaved(true);
    form.reset();
  }

  return (
    <>
      <PageHeader title="发布同行需求 DEMO" description="MVP 仅保存到本地 localStorage，不公开真实联系方式，不开放真实匹配。" />
      <section className="bg-mist py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <form onSubmit={submit} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="text-sm font-semibold text-navy">昵称<input required name="alias" className={inputClass()} /></label>
              <label className="text-sm font-semibold text-navy">年龄范围<select name="ageRange" className={inputClass()}><option>18-25</option><option>26-35</option><option>36-45</option><option>46-60</option><option>60+</option></select></label>
              <label className="text-sm font-semibold text-navy">语言<input name="languages" className={inputClass()} /></label>
              <label className="text-sm font-semibold text-navy">模糊区域<input name="preferredAreas" className={inputClass()} placeholder="Montmartre / Le Marais" /></label>
              <label className="text-sm font-semibold text-navy md:col-span-2">兴趣标签<input name="interests" className={inputClass()} /></label>
              <label className="text-sm font-semibold text-navy md:col-span-2">介绍<textarea name="introduction" className={`${inputClass()} min-h-28`} /></label>
              <label className="flex items-start gap-3 rounded-lg bg-amber-50 p-4 text-sm text-amber-900 md:col-span-2">
                <input required type="checkbox" className="mt-1" />
                我确认不填写酒店、精确地址、实时位置、儿童信息或私人联系方式。
              </label>
            </div>
            <button className="mt-6 min-h-11 rounded-lg bg-navy px-5 py-3 text-sm font-semibold text-white">保存 DEMO</button>
            {saved ? <p className="mt-4 text-sm font-semibold text-jade">已保存到 localStorage。</p> : null}
          </form>
        </div>
      </section>
    </>
  );
}
