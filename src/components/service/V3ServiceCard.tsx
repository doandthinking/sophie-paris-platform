import Image from "next/image";
import { Clock, MapPin, ShieldCheck } from "lucide-react";
import type { Locale } from "@/i18n/routing";
import type { Service } from "@/types/service";
import { tx } from "@/types/service";
import { ButtonLink } from "@/components/v3/LocalizedLink";
import { DemoBadge, StatusBadge } from "@/components/v3/Badges";
import { categoryLabels } from "@/data/services";

export function V3ServiceCard({
  service,
  locale,
  basePath = "/services",
}: {
  service: Service;
  locale: Locale;
  basePath?: string;
}) {
  return (
    <article className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm">
      <Image
        src={service.imagePlaceholder}
        alt={tx(service.title, locale)}
        width={900}
        height={520}
        className="h-44 w-full object-cover"
      />
      <div className="p-5">
        <div className="flex flex-wrap gap-2">
          {service.demo ? <DemoBadge /> : null}
          <StatusBadge label={tx(categoryLabels[service.category], locale)} />
          {service.qualificationRequirement === "guide-conferencier-card" ? (
            <StatusBadge label="guide-conférencier" tone="success" />
          ) : null}
        </div>
        <h3 className="mt-4 text-xl font-semibold text-navy">{tx(service.title, locale)}</h3>
        <p className="mt-3 text-sm leading-6 text-zinc-600">{tx(service.summary, locale)}</p>
        <div className="mt-5 grid gap-2 text-sm text-zinc-600">
          <p className="flex items-center gap-2">
            <Clock aria-hidden className="h-4 w-4 text-champagne" />
            {tx(service.duration, locale)}
          </p>
          <p className="flex items-center gap-2">
            <MapPin aria-hidden className="h-4 w-4 text-champagne" />
            {tx(service.location, locale)}
          </p>
          <p className="flex items-center gap-2">
            <ShieldCheck aria-hidden className="h-4 w-4 text-champagne" />
            {tx(service.priceLabel, locale)}
          </p>
        </div>
        <div className="mt-6 flex flex-col gap-2 sm:flex-row">
          <ButtonLink locale={locale} href={`${basePath}/${service.slug}`} variant="secondary" className="w-full">
            查看详情
          </ButtonLink>
          <ButtonLink locale={locale} href={`/book?service=${service.slug}`} className="w-full">
            预约
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
