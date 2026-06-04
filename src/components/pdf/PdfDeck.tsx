import type { ReactNode } from "react";

type PdfPageProps = {
  pageNumber: number;
  totalPages: number;
  eyebrow?: string;
  title: string;
  footerLabel: string;
  children: ReactNode;
  cover?: boolean;
};

export function PdfPage({
  pageNumber,
  totalPages,
  eyebrow,
  title,
  footerLabel,
  children,
  cover,
}: PdfPageProps) {
  return (
    <section className={`pitch-page ${cover ? "pitch-watermark" : ""}`}>
      <div className="pitch-page-inner">
        <div className="mb-7 flex items-center justify-between gap-6 border-b border-zinc-200 pb-4">
          <div>
            {eyebrow ? (
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-jade">
                {eyebrow}
              </p>
            ) : null}
            <h1 className="mt-2 text-[29px] font-semibold leading-tight tracking-normal text-ink">
              {title}
            </h1>
          </div>
          <div className="shrink-0 rounded-lg border border-zinc-200 bg-paper px-4 py-3 text-right">
            <p className="text-[11px] font-medium text-zinc-500">Sophie Platform</p>
            <p className="mt-1 text-[13px] font-semibold text-forest">Paris Local MVP</p>
          </div>
        </div>
        <div className="flex flex-1 flex-col">{children}</div>
        <footer className="mt-7 flex items-center justify-between border-t border-zinc-200 pt-4 text-[11px] text-zinc-500">
          <span>{footerLabel}</span>
          <span>
            {String(pageNumber).padStart(2, "0")} / {totalPages}
          </span>
        </footer>
      </div>
    </section>
  );
}

export function PdfShell({ children }: { children: ReactNode }) {
  return (
    <div className="pitch-shell">
      <div className="pitch-document">{children}</div>
    </div>
  );
}

export function PdfCard({
  title,
  children,
  tone = "default",
}: {
  title: string;
  children: ReactNode;
  tone?: "default" | "green" | "amber" | "rose" | "blue";
}) {
  const toneClass = {
    default: "border-zinc-200 bg-white",
    green: "border-emerald-900/10 bg-emerald-50",
    amber: "border-amber-200 bg-amber-50",
    rose: "border-rose-200 bg-rose-50",
    blue: "border-blue-200 bg-blue-50",
  }[tone];

  return (
    <div className={`rounded-lg border p-4 ${toneClass}`}>
      <h3 className="text-[16px] font-semibold leading-6 text-ink">{title}</h3>
      <div className="mt-2 text-[12.5px] leading-6 text-zinc-600">{children}</div>
    </div>
  );
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 text-[13px] leading-6 text-zinc-600">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5">
          <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-jade" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function NumberedList({ items }: { items: string[] }) {
  return (
    <div className="grid gap-3">
      {items.map((item, index) => (
        <div key={item} className="flex gap-3 rounded-lg border border-zinc-200 bg-white p-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-forest text-[12px] font-semibold text-white">
            {index + 1}
          </span>
          <p className="pt-1 text-[13px] leading-6 text-zinc-600">{item}</p>
        </div>
      ))}
    </div>
  );
}

export function Callout({
  children,
  tone = "green",
}: {
  children: ReactNode;
  tone?: "green" | "amber" | "rose" | "blue";
}) {
  const toneClass = {
    green: "border-emerald-900/10 bg-emerald-50 text-forest",
    amber: "border-amber-200 bg-amber-50 text-amber-900",
    rose: "border-rose-200 bg-rose-50 text-rose-950",
    blue: "border-blue-200 bg-blue-50 text-blue-950",
  }[tone];

  return <div className={`rounded-lg border p-4 text-[13px] leading-6 ${toneClass}`}>{children}</div>;
}

export function QuoteBox({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-lg border-l-4 border-jade bg-paper p-4">
      <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-jade">{label}</p>
      <div className="mt-2 text-[14px] leading-7 text-ink">{children}</div>
    </div>
  );
}

export function MiniBrowserPreview({
  title,
  path,
  lines,
}: {
  title: string;
  path: string;
  lines: string[];
}) {
  return (
    <div className="rounded-lg border border-zinc-200 bg-white p-3 shadow-sm">
      <div className="rounded-md bg-paper p-3">
        <div className="mb-3 flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
        </div>
        <div className="h-3 w-24 rounded-full bg-forest/20" />
        <div className="mt-3 h-5 w-4/5 rounded-full bg-forest/70" />
        <div className="mt-2 h-2.5 w-full rounded-full bg-zinc-200" />
        <div className="mt-2 h-2.5 w-2/3 rounded-full bg-zinc-200" />
        <div className="mt-4 grid grid-cols-3 gap-2">
          <span className="h-10 rounded-md bg-white" />
          <span className="h-10 rounded-md bg-white" />
          <span className="h-10 rounded-md bg-white" />
        </div>
      </div>
      <h3 className="mt-3 text-[15px] font-semibold text-ink">{title}</h3>
      <p className="mt-1 text-[11px] font-medium text-jade">{path}</p>
      <ul className="mt-2 space-y-1.5 text-[11.5px] leading-5 text-zinc-600">
        {lines.map((line) => (
          <li key={line}>· {line}</li>
        ))}
      </ul>
    </div>
  );
}
