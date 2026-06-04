import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  BadgeCheck,
  Building2,
  CalendarCheck,
  Camera,
  Car,
  CheckCircle2,
  ClipboardCheck,
  Compass,
  FileCheck2,
  HandHeart,
  Landmark,
  Languages,
  LifeBuoy,
  MapPinned,
  MessageCircle,
  Route,
  ShieldCheck,
  Store,
  UsersRound,
  WalletCards,
} from "lucide-react";
import { serviceCategories, services } from "@/lib/mock-data";

const generatedDate = new Intl.DateTimeFormat("zh-CN", {
  year: "numeric",
  month: "long",
  day: "numeric",
}).format(new Date());

const projectName = "巴黎中文本地行";
const oneLiner =
  "面向中国游客的巴黎本地服务平台，提供持证博物馆中文讲解、本地生活陪同、专业旅行协助和紧急中文帮助。";

type PitchPageProps = {
  pageNumber: number;
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
  cover?: boolean;
};

type IconCardProps = {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
  tone?: "default" | "rose" | "amber";
};

function PitchPage({ pageNumber, eyebrow, title, children, cover }: PitchPageProps) {
  return (
    <section className={`pitch-page ${cover ? "pitch-watermark" : ""}`}>
      <div className="pitch-page-inner">
        <div className="mb-8 flex items-center justify-between gap-6 border-b border-zinc-200 pb-4">
          <div>
            {eyebrow ? (
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-jade">
                {eyebrow}
              </p>
            ) : null}
            <h1 className="mt-2 text-[30px] font-semibold leading-tight tracking-normal text-ink">
              {title}
            </h1>
          </div>
          <div className="shrink-0 rounded-lg border border-zinc-200 bg-paper px-4 py-3 text-right">
            <p className="text-[11px] font-medium text-zinc-500">MVP Pitch</p>
            <p className="mt-1 text-[14px] font-semibold text-forest">{projectName}</p>
          </div>
        </div>
        <div className="flex flex-1 flex-col">{children}</div>
        <footer className="mt-8 flex items-center justify-between border-t border-zinc-200 pt-4 text-[11px] text-zinc-500">
          <span>{projectName} · 项目说明文件</span>
          <span>{String(pageNumber).padStart(2, "0")} / 20</span>
        </footer>
      </div>
    </section>
  );
}

function IconCard({ icon: Icon, title, children, tone = "default" }: IconCardProps) {
  const toneClass = {
    default: "border-emerald-900/10 bg-white text-jade",
    rose: "border-rose-200 bg-rose-50 text-wine",
    amber: "border-amber-200 bg-amber-50 text-amber-700",
  }[tone];

  return (
    <div className={`rounded-lg border p-4 ${toneClass}`}>
      <div className="flex items-start gap-3">
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/80 ring-1 ring-black/5">
          <Icon aria-hidden className="h-5 w-5" />
        </span>
        <div>
          <h3 className="text-[16px] font-semibold leading-6 text-ink">{title}</h3>
          <div className="mt-2 text-[12.5px] leading-6 text-zinc-600">{children}</div>
        </div>
      </div>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5 text-[13px] leading-6 text-zinc-600">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5">
          <CheckCircle2 aria-hidden className="mt-1 h-4 w-4 shrink-0 text-jade" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function NumberedFlow({ items }: { items: string[] }) {
  return (
    <div className="grid gap-3">
      {items.map((item, index) => (
        <div key={item} className="flex gap-4 rounded-lg border border-zinc-200 bg-white p-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-forest text-[13px] font-semibold text-white">
            {index + 1}
          </span>
          <p className="pt-1 text-[13px] leading-6 text-zinc-600">{item}</p>
        </div>
      ))}
    </div>
  );
}

function MiniPreview({ title, path, points }: { title: string; path: string; points: string[] }) {
  return (
    <div className="rounded-lg border border-zinc-200 bg-white p-3 shadow-sm">
      <div className="rounded-md bg-paper p-3">
        <div className="mb-3 flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
        </div>
        <div className="h-3 w-24 rounded-full bg-forest/20" />
        <div className="mt-3 h-5 w-4/5 rounded-full bg-forest/70" />
        <div className="mt-2 h-2.5 w-full rounded-full bg-zinc-200" />
        <div className="mt-2 h-2.5 w-2/3 rounded-full bg-zinc-200" />
        <div className="mt-4 grid grid-cols-3 gap-2">
          <span className="h-10 rounded-md bg-white" />
          <span className="h-10 rounded-md bg-white" />
          <span className="h-10 rounded-md bg-white" />
        </div>
      </div>
      <h3 className="mt-3 text-[15px] font-semibold text-ink">{title}</h3>
      <p className="mt-1 text-[11px] font-medium text-jade">{path}</p>
      <ul className="mt-2 space-y-1.5 text-[11.5px] leading-5 text-zinc-600">
        {points.map((point) => (
          <li key={point}>· {point}</li>
        ))}
      </ul>
    </div>
  );
}

function DividerNote({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-emerald-900/10 bg-emerald-50 p-4 text-[13px] leading-6 text-forest">
      {children}
    </div>
  );
}

export default function PitchPageRoute() {
  return (
    <div className="pitch-shell">
      <div className="pitch-document">
        <PitchPage pageNumber={1} title={projectName} cover>
          <div className="flex flex-1 flex-col justify-center">
            <p className="w-fit rounded-full bg-forest px-4 py-2 text-[13px] font-semibold text-white">
              当前阶段：MVP 原型 / 早期验证阶段
            </p>
            <h2 className="mt-8 max-w-[620px] text-[42px] font-semibold leading-tight tracking-normal text-ink">
              面向中国游客的巴黎本地服务平台
            </h2>
            <p className="mt-6 max-w-[620px] text-[18px] leading-8 text-zinc-700">
              {oneLiner}
            </p>
            <div className="mt-10 grid grid-cols-2 gap-4">
              <IconCard icon={Landmark} title="持证文化讲解">
                博物馆和历史古迹收费讲解仅匹配法国 guide-conférencier 持证人员。
              </IconCard>
              <IconCard icon={HandHeart} title="本地生活协助">
                聚焦餐厅、购物、退税、交通、亲子和日常沟通等高频场景。
              </IconCard>
              <IconCard icon={ShieldCheck} title="合规分类">
                将普通陪同、专业讲解、车辆接送和紧急帮助明确拆分。
              </IconCard>
              <IconCard icon={LifeBuoy} title="紧急中文帮助">
                从线上文字或语音协助开始，逐步扩展线下陪同能力。
              </IconCard>
            </div>
            <div className="mt-10 flex items-center justify-between rounded-lg border border-zinc-200 bg-white/80 p-5">
              <div>
                <p className="text-[12px] font-semibold text-zinc-500">项目说明文件</p>
                <p className="mt-1 text-[15px] font-semibold text-ink">
                  供朋友、潜在合作伙伴、服务者与早期投资人阅读
                </p>
              </div>
              <p className="text-[13px] font-semibold text-jade">{generatedDate}</p>
            </div>
          </div>
        </PitchPage>

        <PitchPage pageNumber={2} eyebrow="01 · Background" title="项目背景">
          <div className="grid gap-5">
            <p className="text-[15px] leading-7 text-zinc-700">
              巴黎对中国游客有极强吸引力，但旅行体验并不总是顺滑。游客面对的是不同语言、不同服务习惯、不同城市秩序，以及大量需要即时判断的小问题。
            </p>
            <div className="grid grid-cols-2 gap-4">
              <IconCard icon={Languages} title="语言沟通困难">
                餐厅点餐、商场沟通、药房说明、警局报案、酒店协调等场景都需要清楚表达，临时翻译工具常常不够。
              </IconCard>
              <IconCard icon={Store} title="本地规则不熟悉">
                法国餐厅节奏、购物退税、公共交通、药房流程、营业时间和预约文化，对第一次来巴黎的游客并不直观。
              </IconCard>
              <IconCard icon={Landmark} title="文化内容看不懂">
                卢浮宫、奥赛、凡尔赛等场馆信息密度高。没有中文讲解，游客很容易变成只拍照、不理解、不记得。
              </IconCard>
              <IconCard icon={MessageCircle} title="私下找人不稳定">
                小红书、微信群临时找地陪虽然方便，但信息不透明、资质难核验、价格和服务边界容易不清楚。
              </IconCard>
            </div>
            <DividerNote>
              大型旅游平台可以提供标准化产品，但未必覆盖游客在巴黎临时、本地化、中文化、生活化的细碎需求。项目机会在于把这些“看似小但很影响体验”的需求，做成可信、可预约、可审核的服务网络。
            </DividerNote>
          </div>
        </PitchPage>

        <PitchPage pageNumber={3} eyebrow="02 · Pain Points" title="用户痛点">
          <div className="grid grid-cols-2 gap-4">
            <IconCard icon={Landmark} title="1. 看不懂博物馆">
              游客知道卢浮宫和奥赛重要，但不知道看什么、怎么看、哪些作品适合自己的兴趣和体力。
            </IconCard>
            <IconCard icon={Store} title="2. 不会点法餐">
              菜单、酒水、熟度、过敏、餐桌礼仪和服务员沟通都会制造压力，尤其是家庭和长辈出行。
            </IconCard>
            <IconCard icon={WalletCards} title="3. 不熟悉退税流程">
              退税单、护照信息、机场扫码、海关抽查、信用卡退税等步骤让游客容易焦虑。
            </IconCard>
            <IconCard icon={AlertTriangle} title="4. 不敢独自处理突发情况" tone="rose">
              手机被偷、护照丢失、报警、医院药房沟通等场景需要即时中文支持和冷静指引。
            </IconCard>
            <IconCard icon={UsersRound} title="5. 带孩子旅行压力大">
              亲子路线、卫生间、推车、节奏、儿童兴趣点和安全感，都需要更细的本地经验。
            </IconCard>
            <IconCard icon={MessageCircle} title="6. 临时找中文帮助不方便">
              真正需要人帮忙时，游客不一定知道去哪找、找谁、多少钱、是否靠谱。
            </IconCard>
            <IconCard icon={ShieldCheck} title="7. 私下找地陪缺乏审核和保障" tone="amber">
              资质、身份、价格、服务边界和售后难以验证，游客和服务者双方都缺少稳定规则。
            </IconCard>
          </div>
        </PitchPage>

        <PitchPage pageNumber={4} eyebrow="03 · Solution" title="解决方案">
          <div className="grid gap-5">
            <p className="text-[15px] leading-7 text-zinc-700">
              巴黎中文本地行用“服务分类 + 资质标识 + 预约表单 + 人工确认 + 后台管理雏形”的方式，把分散的中文本地帮助整理成可理解、可预约、可审核的产品。
            </p>
            <div className="grid grid-cols-2 gap-4">
              <IconCard icon={BadgeCheck} title="持证 guide-conférencier 讲解">
                博物馆、历史古迹和文化场馆的收费讲解，单独放入持证服务区，避免与普通陪同混淆。
              </IconCard>
              <IconCard icon={HandHeart} title="生活场景陪同">
                餐厅、购物、退税、公共交通、亲子活动和日常沟通，提供中文陪同与生活协助。
              </IconCard>
              <IconCard icon={Camera} title="专业旅行协助">
                摄影、正式翻译、商务接待、合法 VTC/taxi 协调等服务，按资质和专业能力分类。
              </IconCard>
              <IconCard icon={LifeBuoy} title="紧急中文帮助">
                先从线上语音或文字响应开始，再根据情况匹配线下陪同或引导官方渠道。
              </IconCard>
            </div>
            <DividerNote>
              平台价值不是“让任何人都能做导游”，而是把不同服务的边界讲清楚：谁能做博物馆讲解，谁能做生活协助，谁能做车辆接送，游客在预约前就能看见基本规则。
            </DividerNote>
          </div>
        </PitchPage>

        <PitchPage pageNumber={5} eyebrow="04 · Positioning" title="产品定位">
          <div className="grid gap-5">
            <div className="grid grid-cols-2 gap-4">
              <IconCard icon={Building2} title="不是传统旅行社" tone="amber">
                第一版不销售机票、酒店或组合旅行套餐，不把自己包装成全链路旅行社。
              </IconCard>
              <IconCard icon={ClipboardCheck} title="单项服务预约">
                重点是单项本地服务预约、人工确认和服务者撮合，先解决具体、可验证的小场景。
              </IconCard>
              <IconCard icon={MapPinned} title="先做巴黎">
                不一开始覆盖全法国，先在巴黎验证供给审核、服务履约、游客转化和反馈闭环。
              </IconCard>
              <IconCard icon={Languages} title="先服务中文游客">
                不一开始做多语言大平台，而是抓住中国游客对中文沟通、信任和安全感的真实需求。
              </IconCard>
            </div>
            <div className="rounded-lg border border-zinc-200 bg-white p-5">
              <h3 className="text-[18px] font-semibold text-ink">核心关键词</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {["可信", "中文", "本地", "合规", "灵活", "可预约"].map((keyword) => (
                  <span
                    key={keyword}
                    className="rounded-full bg-emerald-50 px-4 py-2 text-[13px] font-semibold text-jade"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
            <DividerNote>
              MVP 的合理目标不是证明“能做很大”，而是证明：游客愿意提交需求，服务者愿意入驻，平台能明确分类并完成少量真实订单测试。
            </DividerNote>
          </div>
        </PitchPage>

        <PitchPage pageNumber={6} eyebrow="05 · Service Map" title="服务分类总览">
          <div className="grid gap-4">
            {serviceCategories.map((category) => {
              const categoryServices = services.filter((service) => service.category === category.id);
              const iconMap: Record<string, LucideIcon> = {
                museum: Landmark,
                local: HandHeart,
                professional: Camera,
                emergency: LifeBuoy,
              };
              const Icon = iconMap[category.id];

              return (
                <div key={category.id} className="rounded-lg border border-zinc-200 bg-white p-4">
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-jade">
                      <Icon aria-hidden className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="text-[17px] font-semibold text-ink">{category.title}</h3>
                        <span className="rounded-full bg-paper px-3 py-1 text-[11px] font-semibold text-zinc-500">
                          {categoryServices.length} 个 MVP 示例服务
                        </span>
                      </div>
                      <p className="mt-2 text-[12.5px] leading-6 text-zinc-600">{category.description}</p>
                      <p className="mt-2 text-[12.5px] leading-6 text-zinc-700">
                        典型场景：{categoryServices.map((service) => service.title).join("、")}。
                      </p>
                      <p className="mt-2 text-[12.5px] leading-6 text-zinc-600">
                        平台降低不确定性的方式：提前说明服务范围、价格区间、服务者类型、资质要求和注意事项，再由人工确认具体安排。
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </PitchPage>

        <PitchPage pageNumber={7} eyebrow="06 · Museum" title="博物馆专区详细介绍">
          <div className="grid gap-5">
            <div className="grid grid-cols-2 gap-4">
              <IconCard icon={Landmark} title="重点服务">
                卢浮宫中文讲解、奥赛博物馆中文讲解、橘园美术馆中文讲解、凡尔赛宫中文讲解。
              </IconCard>
              <IconCard icon={UsersRound} title="细分路线">
                亲子博物馆路线、艺术小白路线、第一次来巴黎精华路线、轻体力路线。
              </IconCard>
            </div>
            <div className="rounded-lg border border-zinc-200 bg-white p-5">
              <h3 className="text-[18px] font-semibold text-ink">为什么单独做博物馆专区</h3>
              <BulletList
                items={[
                  "巴黎文化场馆信息密度高，游客有明确的中文讲解需求。",
                  "博物馆讲解具有专业门槛，不能和普通城市陪同混在一起。",
                  "持证讲解适合高客单价、小团、亲子和高质量文化体验。",
                  "平台可以用资质标识帮助游客理解“谁能合法提供收费讲解”。",
                ]}
              />
            </div>
            <div className="rounded-lg border border-rose-200 bg-rose-50 p-5">
              <h3 className="text-[18px] font-semibold text-wine">合规说明</h3>
              <BulletList
                items={[
                  "博物馆、历史古迹、Musée de France、monuments historiques 的收费讲解，仅由持有法国 carte professionnelle de guide-conférencier 的人员提供。",
                  "普通本地陪同不能发布博物馆或历史古迹收费讲解服务。",
                  "平台会在服务者资料中标记是否持有 guide-conférencier 专业卡，并在服务详情页展示资质要求。",
                ]}
              />
            </div>
          </div>
        </PitchPage>

        <PitchPage pageNumber={8} eyebrow="07 · Local Companion" title="本地生活陪同详细介绍">
          <div className="grid grid-cols-2 gap-4">
            <IconCard icon={Store} title="陪吃法餐">
              协助预约、解释菜单、沟通忌口和过敏、说明用餐节奏、帮助游客更自然地与服务员沟通。
            </IconCard>
            <IconCard icon={WalletCards} title="购物与退税协助">
              沟通尺码、颜色、库存、支付流程，解释退税单、机场扫码和常见注意事项。
            </IconCard>
            <IconCard icon={Route} title="公共交通陪同">
              机场到酒店、地铁、公交、RER、购票和换乘基础协助，帮助游客第一天快速熟悉巴黎。
            </IconCard>
            <IconCard icon={UsersRound} title="亲子活动陪同">
              适合带孩子家庭，协助节奏安排、沟通、路线选择和临时情况处理。
            </IconCard>
            <IconCard icon={LifeBuoy} title="日常沟通协助">
              药房、超市、酒店、餐厅、丢物沟通等轻量场景，提供中文陪同或翻译陪同。
            </IconCard>
            <IconCard icon={Camera} title="拍照路线陪同">
              协助选择拍照路线、沟通时间和地点，可以与摄影师服务区形成组合推荐，但不打包成旅行套餐。
            </IconCard>
          </div>
          <div className="mt-5 rounded-lg border border-amber-200 bg-amber-50 p-4 text-[13px] leading-6 text-amber-800">
            重要边界：本地陪同不是专业导游讲解，不提供博物馆或历史古迹收费讲解。文案中应使用“本地陪同 / 生活协助 / 翻译陪同”，避免误导游客。
          </div>
        </PitchPage>

        <PitchPage pageNumber={9} eyebrow="08 · Professional Services" title="专业服务区详细介绍">
          <div className="grid gap-5">
            <div className="grid grid-cols-2 gap-4">
              <IconCard icon={BadgeCheck} title="持证 guide-conférencier">
                负责博物馆、历史古迹、文化场馆的收费中文讲解，是平台中需要明确资质标识的高信任供给。
              </IconCard>
              <IconCard icon={Camera} title="摄影师">
                提供旅拍、亲子拍摄、情侣拍摄、商务形象照等服务，可与本地陪同分开报价。
              </IconCard>
              <IconCard icon={Languages} title="翻译">
                提供正式或半正式沟通协助，适合商务接待、医院沟通、学校访问、行政事项等更严肃场景。
              </IconCard>
              <IconCard icon={Car} title="合法 VTC / taxi / transport professionnel" tone="rose">
                机场、酒店、景点之间的收费接送只能由合法职业载客服务者提供，并需要资质与保险审核。
              </IconCard>
              <IconCard icon={Building2} title="商务接待协助">
                面向企业或高端客户，可提供路线协调、语言沟通、会议前后安排和本地执行协助。
              </IconCard>
            </div>
            <DividerNote>
              平台必须明确：普通人不能在平台上以普通身份私下开车收费接送游客。车辆相关服务只允许合法 VTC、taxi 或 transport professionnel 参与。
            </DividerNote>
          </div>
        </PitchPage>

        <PitchPage pageNumber={10} eyebrow="09 · Emergency Help" title="紧急中文帮助区详细介绍">
          <div className="grid gap-5">
            <p className="text-[15px] leading-7 text-zinc-700">
              紧急中文帮助不是替代官方机构，而是在游客最慌的时候提供中文沟通、流程提醒和下一步判断。MVP 阶段可以先从线上语音或文字协助开始，降低响应成本，再逐步扩展线下陪同。
            </p>
            <div className="grid grid-cols-2 gap-4">
              <IconCard icon={FileCheck2} title="护照丢失">
                帮助游客梳理信息、联系酒店、提醒报警和使领馆相关流程。
              </IconCard>
              <IconCard icon={AlertTriangle} title="手机被偷">
                协助报案沟通、找运营商、联系支付平台、处理临时联络问题。
              </IconCard>
              <IconCard icon={Languages} title="报警 / 报案翻译">
                提供中文沟通支持，帮助游客表达事件经过、时间地点和物品损失。
              </IconCard>
              <IconCard icon={LifeBuoy} title="医院 / 药房沟通">
                协助说明症状、购买基础药品、理解预约或急诊流程；医疗判断以专业机构为准。
              </IconCard>
              <IconCard icon={Building2} title="酒店与机场沟通">
                处理误机、延误、入住问题、行李问题和临时变更沟通。
              </IconCard>
              <IconCard icon={WalletCards} title="银行卡 / 支付问题">
                协助梳理银行、支付平台、商家沟通路径，但不替代游客做财务决定。
              </IconCard>
            </div>
          </div>
        </PitchPage>

        <PitchPage pageNumber={11} eyebrow="10 · MVP" title="当前网站 MVP 已完成内容">
          <div className="grid grid-cols-2 gap-4">
            <MiniPreview
              title="首页"
              path="/"
              points={["中文定位介绍", "服务分类入口", "立即预约与成为服务者按钮"]}
            />
            <MiniPreview
              title="服务分类页"
              path="/services"
              points={["四大服务区", "服务卡片", "合规提示与资质边界"]}
            />
            <MiniPreview
              title="服务详情页"
              path="/services/louvre-certified-mandarin-guide 等"
              points={["时长、价格、地点", "服务者类型", "资质要求与注意事项"]}
            />
            <MiniPreview
              title="游客预约页"
              path="/book"
              points={["姓名、微信、邮箱、电话", "来法日期、人数、预算", "带孩子和备注需求"]}
            />
            <MiniPreview
              title="服务者入驻页"
              path="/providers/apply"
              points={["可服务类型", "guide-conférencier 专业卡字段", "VTC/taxi 资质字段"]}
            />
            <MiniPreview
              title="后台管理雏形"
              path="/admin"
              points={["查看预约请求", "查看服务者申请", "查看服务列表与资质标记"]}
            />
          </div>
          <p className="mt-5 text-[12.5px] leading-6 text-zinc-600">
            当前后台仅用于 MVP 演示和运营流程思考，不包含真实登录、权限、支付或数据库。正式商业化前需要补充安全、隐私、权限和数据存储设计。
          </p>
        </PitchPage>

        <PitchPage pageNumber={12} eyebrow="11 · User Journey" title="用户使用流程">
          <NumberedFlow
            items={[
              "中国游客打开网站，快速理解这是面向巴黎旅行的中文本地服务平台。",
              "浏览服务分类，区分博物馆专区、本地陪同、专业服务和紧急中文帮助。",
              "进入服务详情页，查看服务时长、价格区间、地点、服务者类型和资质要求。",
              "填写预约需求，包括微信、来法国日期、人数、预算、是否带孩子和备注需求。",
              "平台人工确认需求，判断是否涉及持证讲解、车辆接送或紧急协助。",
              "匹配合适服务者，初步确认档期、语言能力、资质和报价。",
              "游客通过微信确认价格、时间、地点、集合方式和注意事项。",
              "完成服务后收集反馈，记录服务质量、需求变化和可复购场景。",
            ]}
          />
        </PitchPage>

        <PitchPage pageNumber={13} eyebrow="12 · Provider Journey" title="服务者入驻流程">
          <NumberedFlow
            items={[
              "服务者填写入驻申请，提交姓名、微信、邮箱和所在城市。",
              "选择可提供的服务类型，例如博物馆讲解、法餐陪同、退税协助、紧急帮助或 VTC/taxi 接送。",
              "填写语言能力、服务经验、可服务时间和个人简介。",
              "如果申请博物馆或历史古迹收费讲解，需要提交 guide-conférencier 专业卡信息并通过核验。",
              "如果申请车辆接送相关服务，需要提交 VTC、taxi 或 transport professionnel 资质与保险信息。",
              "平台人工审核身份、资质、服务边界和沟通能力。",
              "审核通过后进入可匹配服务者池，后续根据订单场景、城市、语言和资质进行派单或展示。",
            ]}
          />
          <DividerNote>
            服务者审核的重点不是让供给越多越好，而是先建立可信的小规模服务网络，保证游客第一批真实体验足够稳定。
          </DividerNote>
        </PitchPage>

        <PitchPage pageNumber={14} eyebrow="13 · Compliance" title="合规边界说明">
          <div className="grid gap-5">
            <div className="rounded-lg border border-rose-200 bg-rose-50 p-5">
              <h3 className="text-[18px] font-semibold text-wine">必须明确的边界</h3>
              <BulletList
                items={[
                  "博物馆及历史古迹收费讲解，仅由持有法国 guide-conférencier 专业卡的人员提供。",
                  "普通本地陪同不等同于专业导游讲解，不能以导游讲解名义发布博物馆或历史古迹收费服务。",
                  "涉及车辆接送的服务，仅由合法 VTC、taxi 或 transport professionnel 提供。",
                  "第一版不销售机票、酒店或组合旅行套餐。",
                  "平台现阶段定位为预约与撮合工具，不作为完整旅行套餐销售平台。",
                ]}
              />
            </div>
            <div className="rounded-lg border border-zinc-200 bg-white p-5">
              <h3 className="text-[18px] font-semibold text-ink">正式商业化前需要补齐</h3>
              <BulletList
                items={[
                  "法律文件：CGV、CGU、隐私政策、Cookie 政策和免责声明。",
                  "服务者协议：服务范围、取消规则、收款结算、责任边界、资质保证。",
                  "保险与风险控制：职业责任保险、线下服务安全规则、紧急处理 SOP。",
                  "数据与支付：用户数据保护、后台权限、支付合规、发票与税务流程。",
                ]}
              />
            </div>
            <p className="text-[12.5px] leading-6 text-zinc-600">
              合规表达要清楚但不吓人：游客需要知道平台认真区分服务类型，服务者也需要知道哪些事情可以做、哪些事情必须具备资质后才能做。
            </p>
          </div>
        </PitchPage>

        <PitchPage pageNumber={15} eyebrow="14 · Business Model" title="商业模式初步设想">
          <div className="grid grid-cols-2 gap-4">
            <IconCard icon={WalletCards} title="平台佣金">
              未来可能按每单抽取一定比例，适用于讲解、陪同、摄影、翻译、紧急帮助等服务。
            </IconCard>
            <IconCard icon={ClipboardCheck} title="预约 / 平台服务费">
              游客可支付少量预约或平台服务费，用于需求确认、服务者匹配和客服协调。
            </IconCard>
            <IconCard icon={Landmark} title="自营高质量文化路线">
              基于持证讲解资源，打磨少量高质量卢浮宫、奥赛、凡尔赛等中文文化路线。
            </IconCard>
            <IconCard icon={UsersRound} title="高端私人定制服务">
              面向家庭、银发客、商务客和高净值游客，提供更高客单价的本地执行协助。
            </IconCard>
            <IconCard icon={LifeBuoy} title="紧急帮助按时长收费">
              紧急中文协助可按线上响应、线下陪同、夜间时段和复杂程度报价。
            </IconCard>
            <IconCard icon={Building2} title="后期扩展方向">
              未来可能发展会员、企业接待、B2B 合作、酒店或留学机构转介，但不在 MVP 阶段虚构收入。
            </IconCard>
          </div>
          <DividerNote>
            当前阶段不编造已发生收入、用户规模或融资情况。商业模式需要通过真实订单测试、服务者访谈和获客实验逐步验证。
          </DividerNote>
        </PitchPage>

        <PitchPage pageNumber={16} eyebrow="15 · Competition" title="竞品与差异化">
          <div className="grid gap-5">
            <div className="grid grid-cols-2 gap-4">
              <IconCard icon={Compass} title="大型旅游平台">
                Trip.com、Klook、GetYourGuide 等覆盖门票、一日游和标准化产品，但本地生活协助和临时中文帮助不一定足够细。
              </IconCard>
              <IconCard icon={UsersRound} title="本地体验平台">
                Airbnb Experiences、Withlocals、ToursByLocals 等强调当地体验，但不一定围绕中国游客和中文合规表达设计。
              </IconCard>
              <IconCard icon={MessageCircle} title="小红书 / 微信群私下地陪">
                获客方便、信任来自社交内容，但服务者资质、价格、售后和边界不稳定。
              </IconCard>
              <IconCard icon={Building2} title="华人旅行社 / 私人导游">
                有成熟供给和经验，但可能偏定制游或传统旅行社形态，不一定适合轻量单项服务预约。
              </IconCard>
            </div>
            <div className="rounded-lg border border-zinc-200 bg-white p-5">
              <h3 className="text-[18px] font-semibold text-ink">我们的差异化</h3>
              <BulletList
                items={[
                  "更聚焦中国游客，不从第一天做泛全球游客平台。",
                  "更聚焦巴黎本地生活场景，把餐厅、购物、退税、交通、亲子和紧急帮助产品化。",
                  "更强调持证博物馆中文讲解，清楚区分 guide-conférencier 与普通陪同。",
                  "更强调合规分类，让游客和服务者在预约前理解服务边界。",
                  "适合从小规模人工撮合开始验证，而不是一开始投入重平台和大供给池。",
                ]}
              />
            </div>
          </div>
        </PitchPage>

        <PitchPage pageNumber={17} eyebrow="16 · Next 30 Days" title="下一步计划">
          <NumberedFlow
            items={[
              "部署到 Vercel，生成公开测试链接，方便朋友、服务者和潜在合作伙伴访问。",
              "发给 10-20 个朋友收集反馈，重点观察他们是否一眼看懂定位和服务边界。",
              "找 5 个潜在服务者访谈，包括持证讲解、本地陪同、摄影、翻译或合法 VTC/taxi。",
              "测试 3 个真实服务订单，优先选择风险低、流程清楚、反馈价值高的场景。",
              "优化网站文案和预约流程，减少游客理解成本，提高表单提交意愿。",
              "准备服务者协议、基础法律页面和保险咨询，尤其是资质审核与责任边界。",
              "做小红书和微信内容测试，验证获客内容、用户问题和转介绍可能性。",
            ]}
          />
        </PitchPage>

        <PitchPage pageNumber={18} eyebrow="17 · Feedback" title="希望朋友反馈的问题">
          <div className="grid grid-cols-2 gap-4">
            {[
              "你是否一眼看懂这个网站是做什么的？",
              "如果你来巴黎旅游，你会不会使用？",
              "你最感兴趣的是哪类服务？",
              "哪些地方让你觉得不够可信？",
              "你觉得服务分类是否清楚？",
              "你觉得普通陪同和持证讲解的区别是否清楚？",
              "你觉得价格应该如何设置？",
              "你愿意把这个网站推荐给来法国旅游的朋友吗？",
              "你觉得这个项目有没有商业价值？",
            ].map((question, index) => (
              <div key={question} className="rounded-lg border border-zinc-200 bg-white p-4">
                <p className="text-[12px] font-semibold text-jade">
                  Question {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 text-[15px] font-semibold leading-6 text-ink">{question}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-lg bg-forest p-6 text-white">
            <h3 className="text-[22px] font-semibold">当前最需要验证的事</h3>
            <p className="mt-3 text-[14px] leading-7 text-white/85">
              中国游客是否愿意为“可信的中文本地协助”提交需求；巴黎服务者是否愿意接受分类、资质和服务边界审核；平台是否能用轻量人工撮合跑通第一批真实服务。
            </p>
          </div>
        </PitchPage>

        <PitchPage pageNumber={19} eyebrow="18 · V5 Upgrade" title="巴黎游客生活操作系统">
          <div className="grid gap-5">
            <p className="text-[15px] leading-7 text-zinc-700">
              V5 将网站从“本地服务预约平台”升级为“巴黎游客生活操作系统”：游客从住、吃、玩、买、拍、租、行李、退税到紧急帮助，都可以从一个中文入口理解和提交需求。
            </p>
            <div className="grid grid-cols-2 gap-4">
              <IconCard icon={Store} title="巴黎旅行超市">
                转换插头、充电线、雨具、亲子用品、长辈友好用品、行李和离境用品均为 DEMO 需求入口，不展示虚假库存。
              </IconCard>
              <IconCard icon={Compass} title="场景解决方案包">
                巴黎落地安心包、手机被偷恢复包、亲子安心包、中国胃包、旅拍纪念包和离境轻松包。
              </IconCard>
              <IconCard icon={Camera} title="旅拍和服装租赁">
                巴黎旅拍、复古服装、妆发、求婚、周年、家庭照和商务形象照，全部先走人工确认。
              </IconCard>
              <IconCard icon={Route} title="我的巴黎行程">
                收藏、清单、备注、日期、完成标记、分享链接和导出 PDF 占位，当前使用 localStorage DEMO。
              </IconCard>
            </div>
          </div>
        </PitchPage>

        <PitchPage pageNumber={20} eyebrow="19 · Commerce Boundary" title="商户门户、交叉推荐和边界">
          <div className="grid gap-5">
            <div className="grid grid-cols-2 gap-4">
              <IconCard icon={Building2} title="商户合作门户">
                面向亚洲超市、旅行用品、行李寄存、服装租赁、摄影、妆发、亲子用品、轮椅租赁和合法配送合作方。
              </IconCard>
              <IconCard icon={WalletCards} title="交叉推荐">
                静态规则展示“你可能还需要”：游船推荐雨衣和旅拍，亲子体验推荐婴儿车和儿童雨衣，不声称实时个性化 AI。
              </IconCard>
            </div>
            <DividerNote>
              V5 仍然不伪造真实库存、真实价格、真实配送、真实商户、真实交易或真实积分兑换。涉及实体商品、食品、租赁押金、酒店前台交付、配送、图片授权和商户合同，均需法律审核和合作方确认后启用。
            </DividerNote>
            <BulletList
              items={[
                "直接在线销售实体商品前准备 CGV、价格展示、配送期限、退款规则和撤回权说明。",
                "食品类上线前确认标签、过敏原、储存和受监管产品边界。",
                "租赁类上线前确认押金、清洁、损坏、迟还和归还规则。",
                "酒店前台交付必须以酒店规定为准，用户不得填写房间号。",
              ]}
            />
          </div>
        </PitchPage>
      </div>
    </div>
  );
}
