import {
  BadgeCheck,
  ClipboardList,
  FileText,
  ShieldCheck,
  Users,
} from "lucide-react";
import {
  mockBookingRequests,
  mockProviderApplications,
  serviceCategories,
  services,
} from "@/lib/mock-data";
import { SectionHeader } from "@/components/ui/SectionHeader";

function statusClass(status: string) {
  if (status === "已匹配" || status === "可面试") {
    return "bg-emerald-50 text-jade";
  }

  if (status === "补充材料" || status === "已联系") {
    return "bg-amber-50 text-amber-700";
  }

  return "bg-zinc-100 text-zinc-700";
}

export default function AdminPage() {
  const stats = [
    {
      label: "预约请求",
      value: mockBookingRequests.length,
      icon: ClipboardList,
    },
    {
      label: "服务者申请",
      value: mockProviderApplications.length,
      icon: Users,
    },
    {
      label: "示例服务",
      value: services.length,
      icon: FileText,
    },
    {
      label: "需资质服务",
      value: services.filter((service) => service.qualificationRequired).length,
      icon: BadgeCheck,
    },
  ];

  return (
    <section className="bg-paper py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Admin 模拟后台"
          title="查看预约、服务者申请和服务列表"
          description="第一版不做登录和真实数据库，这里用 mock data 模拟运营后台视图。"
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-medium text-zinc-500">{stat.label}</p>
                <stat.icon aria-hidden className="h-5 w-5 text-jade" />
              </div>
              <p className="mt-4 text-3xl font-semibold text-ink">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-8">
          <section className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <ClipboardList aria-hidden className="h-5 w-5 text-jade" />
              <h2 className="text-xl font-semibold text-ink">预约请求</h2>
            </div>
            <div className="mt-5 overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead className="border-b border-zinc-200 text-zinc-500">
                  <tr>
                    <th className="whitespace-nowrap px-3 py-3 font-medium">编号</th>
                    <th className="whitespace-nowrap px-3 py-3 font-medium">游客</th>
                    <th className="whitespace-nowrap px-3 py-3 font-medium">微信</th>
                    <th className="whitespace-nowrap px-3 py-3 font-medium">服务</th>
                    <th className="whitespace-nowrap px-3 py-3 font-medium">日期</th>
                    <th className="whitespace-nowrap px-3 py-3 font-medium">人数</th>
                    <th className="whitespace-nowrap px-3 py-3 font-medium">预算</th>
                    <th className="whitespace-nowrap px-3 py-3 font-medium">状态</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  {mockBookingRequests.map((request) => (
                    <tr key={request.id}>
                      <td className="whitespace-nowrap px-3 py-4 font-medium text-ink">{request.id}</td>
                      <td className="whitespace-nowrap px-3 py-4">{request.name}</td>
                      <td className="whitespace-nowrap px-3 py-4">{request.wechat}</td>
                      <td className="min-w-64 px-3 py-4">{request.service}</td>
                      <td className="whitespace-nowrap px-3 py-4">{request.date}</td>
                      <td className="whitespace-nowrap px-3 py-4">{request.people}</td>
                      <td className="whitespace-nowrap px-3 py-4">{request.budget}</td>
                      <td className="whitespace-nowrap px-3 py-4">
                        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusClass(request.status)}`}>
                          {request.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <Users aria-hidden className="h-5 w-5 text-jade" />
              <h2 className="text-xl font-semibold text-ink">服务者申请</h2>
            </div>
            <div className="mt-5 overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead className="border-b border-zinc-200 text-zinc-500">
                  <tr>
                    <th className="whitespace-nowrap px-3 py-3 font-medium">编号</th>
                    <th className="whitespace-nowrap px-3 py-3 font-medium">姓名</th>
                    <th className="whitespace-nowrap px-3 py-3 font-medium">城市</th>
                    <th className="whitespace-nowrap px-3 py-3 font-medium">服务类型</th>
                    <th className="whitespace-nowrap px-3 py-3 font-medium">导游卡</th>
                    <th className="whitespace-nowrap px-3 py-3 font-medium">交通资质</th>
                    <th className="whitespace-nowrap px-3 py-3 font-medium">语言</th>
                    <th className="whitespace-nowrap px-3 py-3 font-medium">状态</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  {mockProviderApplications.map((provider) => (
                    <tr key={provider.id}>
                      <td className="whitespace-nowrap px-3 py-4 font-medium text-ink">{provider.id}</td>
                      <td className="whitespace-nowrap px-3 py-4">{provider.name}</td>
                      <td className="whitespace-nowrap px-3 py-4">{provider.city}</td>
                      <td className="min-w-64 px-3 py-4">{provider.serviceTypes.join("、")}</td>
                      <td className="whitespace-nowrap px-3 py-4">{provider.hasGuideCard ? "是" : "否"}</td>
                      <td className="whitespace-nowrap px-3 py-4">{provider.hasTransportLicense ? "是" : "否"}</td>
                      <td className="whitespace-nowrap px-3 py-4">{provider.languages.join("、")}</td>
                      <td className="whitespace-nowrap px-3 py-4">
                        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusClass(provider.status)}`}>
                          {provider.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <ShieldCheck aria-hidden className="h-5 w-5 text-jade" />
              <h2 className="text-xl font-semibold text-ink">服务列表</h2>
            </div>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {services.map((service) => {
                const category = serviceCategories.find((item) => item.id === service.category);

                return (
                  <article key={service.slug} className="rounded-lg border border-zinc-200 bg-paper p-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-jade">
                        {category?.title}
                      </span>
                      {service.qualificationRequired ? (
                        <span className="rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-wine">
                          需资质
                        </span>
                      ) : null}
                    </div>
                    <h3 className="mt-3 font-semibold text-ink">{service.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-600">{service.summary}</p>
                  </article>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
