import { AlertTriangle, FileCheck2 } from "lucide-react";

type ComplianceNoticeProps = {
  tone?: "default" | "warning";
  title?: string;
  items: string[];
};

export function ComplianceNotice({
  tone = "default",
  title = "合规边界",
  items,
}: ComplianceNoticeProps) {
  const Icon = tone === "warning" ? AlertTriangle : FileCheck2;

  return (
    <div className="rounded-lg border border-emerald-900/10 bg-white p-5 shadow-sm">
      <div className="flex items-start gap-3">
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-jade">
          <Icon aria-hidden className="h-5 w-5" />
        </span>
        <div>
          <h3 className="font-semibold text-ink">{title}</h3>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-600">
            {items.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-jade" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
