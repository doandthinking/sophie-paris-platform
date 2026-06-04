import {
  BadgeCheck,
  BriefcaseBusiness,
  HandHeart,
  Landmark,
  ShieldAlert,
} from "lucide-react";
import type { ServiceCategory } from "@/lib/types";
import { cn } from "@/lib/utils";

type IconBadgeProps = {
  icon: ServiceCategory["icon"] | "badge-check";
  className?: string;
};

const iconMap = {
  landmark: Landmark,
  "hand-heart": HandHeart,
  briefcase: BriefcaseBusiness,
  shield: ShieldAlert,
  "badge-check": BadgeCheck,
};

export function IconBadge({ icon, className }: IconBadgeProps) {
  const Icon = iconMap[icon];

  return (
    <span
      className={cn(
        "inline-flex h-11 w-11 items-center justify-center rounded-lg bg-jade/10 text-jade",
        className,
      )}
    >
      <Icon aria-hidden className="h-5 w-5" />
    </span>
  );
}
