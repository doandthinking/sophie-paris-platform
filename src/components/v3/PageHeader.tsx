import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  description,
  actions,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: ReactNode;
}) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {eyebrow ? <p className="text-sm font-semibold text-champagne">{eyebrow}</p> : null}
        <div className="mt-3 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-semibold tracking-normal text-navy sm:text-5xl">
              {title}
            </h1>
            {description ? (
              <p className="mt-4 text-base leading-7 text-zinc-600">{description}</p>
            ) : null}
          </div>
          {actions ? <div className="shrink-0">{actions}</div> : null}
        </div>
      </div>
    </section>
  );
}
