import Link from "next/link";
import type { ReactNode } from "react";
import type { Locale } from "@/i18n/routing";
import { localizePath } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export function LocalizedLink({
  locale,
  href,
  children,
  className,
}: {
  locale: Locale;
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link href={localizePath(locale, href)} className={cn(className)}>
      {children}
    </Link>
  );
}

export function ButtonLink({
  locale,
  href,
  children,
  variant = "primary",
  className,
}: {
  locale: Locale;
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "danger" | "ghost";
  className?: string;
}) {
  return (
    <LocalizedLink
      locale={locale}
      href={href}
      className={cn(
        "inline-flex min-h-11 items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        variant === "primary" && "bg-navy text-white shadow-soft hover:bg-midnight",
        variant === "secondary" && "border border-navy/15 bg-white text-navy hover:bg-mist",
        variant === "danger" && "bg-wine text-white hover:bg-rose-950",
        variant === "ghost" && "text-navy hover:bg-white/70",
        className,
      )}
    >
      {children}
    </LocalizedLink>
  );
}
