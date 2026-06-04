import { ButtonLink } from "@/components/ui/ButtonLink";

export default function NotFound() {
  return (
    <section className="bg-paper py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <p className="text-sm font-semibold text-jade">404</p>
        <h1 className="mt-4 text-4xl font-semibold text-ink">没有找到这个页面</h1>
        <p className="mt-4 text-zinc-600">可能是服务链接不存在，或页面还在 MVP 阶段。</p>
        <div className="mt-8">
          <ButtonLink href="/services">返回服务列表</ButtonLink>
        </div>
      </div>
    </section>
  );
}
