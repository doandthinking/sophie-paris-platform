"use client";

import { FormEvent, useState } from "react";

const serviceTypes = [
  "亚洲超市",
  "便利店",
  "旅行用品门店",
  "行李寄存",
  "服装租赁",
  "摄影工作室",
  "妆发",
  "亲子用品租赁",
  "轮椅租赁",
  "洗衣店",
  "纪念品商店",
  "合法配送合作方",
];

export function MerchantApplicationForm() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    const existing = JSON.parse(localStorage.getItem("pll-merchant-applications") ?? "[]");
    localStorage.setItem(
      "pll-merchant-applications",
      JSON.stringify([{ ...payload, createdAt: new Date().toISOString(), demo: true }, ...existing]),
    );
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
      <div className="rounded-xl bg-amber-50 p-4 text-sm leading-6 text-amber-900">
        DEMO 表单：不会创建真实商户账号、不会生成真实订单。请勿填写敏感信息或酒店房间号。
      </div>
      {[
        ["merchantName", "商户名称"],
        ["contactName", "联系人"],
        ["email", "邮箱"],
        ["phone", "电话"],
        ["wechat", "微信"],
        ["district", "区域"],
        ["website", "官方网站"],
      ].map(([name, label]) => (
        <label key={name} className="grid gap-2 text-sm font-medium text-navy">
          {label}
          <input name={name} className="rounded-lg border border-zinc-300 px-3 py-2 text-sm" />
        </label>
      ))}
      <label className="grid gap-2 text-sm font-medium text-navy">
        类型
        <select name="type" className="rounded-lg border border-zinc-300 px-3 py-2 text-sm">
          {serviceTypes.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-sm font-medium text-navy">
        商品或服务
        <textarea name="offer" rows={4} className="rounded-lg border border-zinc-300 px-3 py-2 text-sm" />
      </label>
      <div className="grid gap-2 text-sm text-zinc-700 sm:grid-cols-2">
        {[
          ["pickup", "支持自取"],
          ["hotelDelivery", "支持酒店前台配送"],
          ["districtDelivery", "支持指定区域配送"],
          ["welcomeKit", "愿意提供中文游客欢迎包"],
          ["officialImages", "可提供官方图片"],
          ["pilot", "希望试点"],
        ].map(([name, label]) => (
          <label key={name} className="flex items-center gap-2 rounded-lg bg-mist p-3">
            <input name={name} type="checkbox" value="yes" />
            {label}
          </label>
        ))}
      </div>
      <label className="grid gap-2 text-sm font-medium text-navy">
        备注
        <textarea name="notes" rows={4} className="rounded-lg border border-zinc-300 px-3 py-2 text-sm" />
      </label>
      <button className="rounded-lg bg-navy px-5 py-3 text-sm font-semibold text-white" type="submit">
        提交 DEMO 申请
      </button>
      {submitted ? <p className="text-sm font-semibold text-jade">已保存到本地 localStorage 演示队列。</p> : null}
    </form>
  );
}
