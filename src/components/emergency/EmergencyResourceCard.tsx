import { Phone, ShieldAlert } from "lucide-react";
import type { Locale } from "@/i18n/routing";
import type { OfficialResource } from "@/types/officialResource";
import { tx } from "@/types/service";
import { StatusBadge } from "@/components/v3/Badges";

export function EmergencyResourceCard({
  resource,
  locale,
}: {
  resource: OfficialResource;
  locale: Locale;
}) {
  return (
    <article className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
      <div className="flex items-start gap-3">
        <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-rose-50 text-wine">
          <ShieldAlert aria-hidden className="h-5 w-5" />
        </span>
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-lg font-semibold text-navy">{tx(resource.title, locale)}</h3>
            {!resource.active ? <StatusBadge label="待核验" tone="warning" /> : null}
          </div>
          <p className="mt-2 text-sm leading-6 text-zinc-600">{tx(resource.description, locale)}</p>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-500">
        <span>Source: {resource.sourceOrganization}</span>
        <span>Domain: {resource.sourceDomain}</span>
        <span>Verified: {resource.verifiedAt}</span>
      </div>
      {resource.phone ? (
        <a
          href={`tel:${resource.phone}`}
          className="mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-wine px-4 py-3 text-sm font-semibold text-white"
        >
          <Phone aria-hidden className="h-4 w-4" />
          {resource.phone}
        </a>
      ) : null}
    </article>
  );
}
