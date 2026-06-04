import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "alert";
  className?: string;
  showArrow?: boolean;
};

const variants = {
  primary:
    "bg-forest text-white shadow-soft hover:bg-ink focus-visible:outline-forest",
  secondary:
    "border border-forest/20 bg-white text-forest hover:border-forest/40 hover:bg-paper focus-visible:outline-forest",
  ghost: "text-forest hover:bg-white/70 focus-visible:outline-forest",
  alert: "bg-wine text-white shadow-soft hover:bg-rose-950 focus-visible:outline-wine",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  showArrow = true,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        variants[variant],
        className,
      )}
    >
      <span>{children}</span>
      {showArrow ? <ArrowRight aria-hidden className="h-4 w-4" /> : null}
    </Link>
  );
}
