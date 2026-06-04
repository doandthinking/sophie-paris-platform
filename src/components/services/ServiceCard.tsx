import Link from "next/link";
import { BadgeCheck, Clock, MapPin, Wallet } from "lucide-react";
import type { Service } from "@/lib/types";
import { getCategory } from "@/lib/mock-data";
import { ButtonLink } from "@/components/ui/ButtonLink";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  const category = getCategory(service.category);

  return (
    <article className="overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft">
      <Link href={`/services/${service.slug}`} aria-label={`查看${service.title}`}>
        <img
          src={service.heroImage}
          alt={service.title}
          className="h-48 w-full object-cover"
        />
      </Link>
      <div className="p-5">
        <div className="flex flex-wrap items-center gap-2">
          {category ? (
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-jade">
              {category.title}
            </span>
          ) : null}
          {service.qualificationRequired ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-wine">
              <BadgeCheck aria-hidden className="h-3.5 w-3.5" />
              需资质
            </span>
          ) : null}
        </div>
        <h3 className="mt-4 text-xl font-semibold text-ink">{service.title}</h3>
        <p className="mt-3 min-h-12 text-sm leading-6 text-zinc-600">
          {service.summary}
        </p>
        <dl className="mt-5 grid gap-3 text-sm text-zinc-600">
          <div className="flex items-center gap-2">
            <Clock aria-hidden className="h-4 w-4 text-jade" />
            <dt className="sr-only">服务时长</dt>
            <dd>{service.duration}</dd>
          </div>
          <div className="flex items-center gap-2">
            <Wallet aria-hidden className="h-4 w-4 text-jade" />
            <dt className="sr-only">价格区间</dt>
            <dd>{service.priceRange}</dd>
          </div>
          <div className="flex items-center gap-2">
            <MapPin aria-hidden className="h-4 w-4 text-jade" />
            <dt className="sr-only">服务地点</dt>
            <dd>{service.location}</dd>
          </div>
        </dl>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={`/book?service=${service.slug}`} className="w-full sm:w-auto">
            预约
          </ButtonLink>
          <ButtonLink
            href={`/services/${service.slug}`}
            variant="secondary"
            className="w-full sm:w-auto"
          >
            查看详情
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
