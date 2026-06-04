import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ServiceCategory } from "@/lib/types";
import { IconBadge } from "@/components/ui/IconBadge";

type CategoryCardProps = {
  category: ServiceCategory;
};

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={category.href}
      className="group rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-jade/30 hover:shadow-soft"
    >
      <div className="flex items-start justify-between gap-4">
        <IconBadge icon={category.icon} />
        <ArrowRight
          aria-hidden
          className="h-5 w-5 text-zinc-300 transition group-hover:translate-x-1 group-hover:text-jade"
        />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-ink">{category.title}</h3>
      <p className="mt-3 text-sm leading-6 text-zinc-600">{category.description}</p>
    </Link>
  );
}
