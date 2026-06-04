import { featureFlags } from "@/config/featureFlags";
import { cn } from "@/lib/utils";

export function DemoBadge({ label = "DEMO" }: { label?: string }) {
  if (!featureFlags.showDemoLabels) {
    return null;
  }

  return (
    <span className="inline-flex w-fit items-center rounded-full bg-champagne/20 px-3 py-1 text-xs font-semibold text-navy ring-1 ring-champagne/40">
      {label}
    </span>
  );
}

export function StatusBadge({
  label,
  tone = "default",
}: {
  label: string;
  tone?: "default" | "warning" | "danger" | "success";
}) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold ring-1",
        tone === "default" && "bg-mist text-navy ring-navy/10",
        tone === "warning" && "bg-amber-50 text-amber-800 ring-amber-200",
        tone === "danger" && "bg-rose-50 text-wine ring-rose-200",
        tone === "success" && "bg-emerald-50 text-jade ring-emerald-200",
      )}
    >
      {label}
    </span>
  );
}
