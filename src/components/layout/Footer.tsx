import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
        <div>
          <p className="text-lg font-semibold text-ink">巴黎中文行</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-600">
            面向中国游客的巴黎本地服务预约与撮合平台 MVP。第一版只做巴黎，只使用本地 mock data，不销售机票、酒店或组合旅行套餐。
          </p>
        </div>
        <div>
          <p className="font-semibold text-ink">页面</p>
          <div className="mt-3 grid gap-2 text-sm text-zinc-600">
            <Link href="/services">服务分类</Link>
            <Link href="/book">游客预约</Link>
            <Link href="/providers/apply">服务者入驻</Link>
          </div>
        </div>
        <div>
          <p className="font-semibold text-ink">合规原则</p>
          <p className="mt-3 text-sm leading-6 text-zinc-600">
            博物馆与历史古迹收费讲解仅由持证 guide-conférencier 提供；车辆接送仅匹配合法 VTC/taxi/职业载客服务者。
          </p>
        </div>
      </div>
    </footer>
  );
}
