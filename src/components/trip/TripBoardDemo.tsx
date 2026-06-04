"use client";

import { useEffect, useState } from "react";
import type { TripBoardEntry, TripChecklistTemplate } from "@/types/tripBoard";
import { readTripBoard, writeTripBoard } from "@/lib/tripBoardStorage";

export function TripBoardDemo({ templates }: { templates: TripChecklistTemplate[] }) {
  const [entries, setEntries] = useState<TripBoardEntry[]>([]);

  useEffect(() => {
    setEntries(readTripBoard());
  }, []);

  function addTemplate(template: TripChecklistTemplate) {
    const additions = template.items.map((item, index) => ({
      id: `${template.id}-${index}`,
      itemType: "event" as const,
      itemId: template.id,
      title: item,
      note: template.title,
      completed: false,
    }));
    const next = [...additions, ...entries.filter((entry) => entry.itemId !== template.id)];
    setEntries(next);
    writeTripBoard(next);
  }

  function toggle(id: string) {
    const next = entries.map((entry) => entry.id === id ? { ...entry, completed: !entry.completed } : entry);
    setEntries(next);
    writeTripBoard(next);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="grid gap-3">
        {templates.map((template) => (
          <button
            key={template.id}
            type="button"
            onClick={() => addTemplate(template)}
            className="rounded-xl border border-zinc-200 bg-white p-4 text-left shadow-sm hover:bg-mist"
          >
            <p className="font-semibold text-navy">{template.title}</p>
            <p className="mt-1 text-sm text-zinc-500">{template.items.length} 项 · DEMO localStorage</p>
          </button>
        ))}
      </div>
      <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
        <h2 className="text-xl font-semibold text-navy">我的巴黎行程清单</h2>
        <p className="mt-2 text-sm leading-6 text-zinc-600">支持添加备注、日期、完成标记、分享链接占位和导出 PDF 占位。当前仅本地保存。</p>
        <div className="mt-5 grid gap-2">
          {entries.length === 0 ? (
            <p className="rounded-xl bg-mist p-4 text-sm text-zinc-500">选择左侧模板开始。</p>
          ) : entries.map((entry) => (
            <label key={entry.id} className="flex items-start gap-3 rounded-xl bg-mist p-3 text-sm text-zinc-700">
              <input type="checkbox" checked={entry.completed} onChange={() => toggle(entry.id)} className="mt-1" />
              <span className={entry.completed ? "line-through" : ""}>{entry.title}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
