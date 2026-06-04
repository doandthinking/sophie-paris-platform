import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";

const navItems = [
  { href: "/services", label: "服务分类" },
  { href: "/book", label: "游客预约" },
  { href: "/providers/apply", label: "服务者入驻" },
  { href: "/admin", label: "Admin" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/50 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-forest text-white">
            <MessageCircle aria-hidden className="h-5 w-5" />
          </span>
          <span className="leading-tight">
            <span className="block text-base font-semibold text-ink">巴黎中文行</span>
            <span className="block text-xs text-zinc-500">Paris Local Care</span>
          </span>
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-600 transition hover:bg-paper hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <ButtonLink href="/book" showArrow={false} className="hidden sm:inline-flex">
          立即预约
        </ButtonLink>
      </nav>
      <div className="flex gap-2 overflow-x-auto border-t border-zinc-100 px-4 py-2 md:hidden">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="shrink-0 rounded-full bg-paper px-3 py-1.5 text-xs font-medium text-zinc-700"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
