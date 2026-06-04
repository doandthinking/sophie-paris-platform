import {
  BulletList,
  Callout,
  PdfCard,
  PdfPage,
  PdfShell,
  QuoteBox,
} from "@/components/pdf/PdfDeck";
import SophiePlanPage from "../sophie-plan/page";
import PartnerPlaybookPage from "../partner-playbook/page";

export const metadata = {
  title: "sophie的平台计划第一次修订",
  robots: { index: false, follow: false },
};

export default function SophieCombinedPage() {
  return (
    <>
      <PdfShell>
        <PdfPage
          pageNumber={1}
          totalPages={4}
          title="sophie的平台计划第一次修订"
          footerLabel="sophie的平台计划第一次修订 · 开篇重点"
          cover
        >
          <div className="flex flex-1 flex-col justify-center">
            <p className="w-fit rounded-full bg-forest px-4 py-2 text-[13px] font-semibold text-white">
              网站特性总览 · 差异化 · 合伙人机构沟通手册
            </p>
            <h2 className="mt-8 max-w-[720px] text-[40px] font-semibold leading-tight tracking-normal text-ink">
              一个专为中国游客设计的巴黎本地服务平台
            </h2>
            <p className="mt-6 max-w-[700px] text-[18px] leading-8 text-zinc-700">
              Sophie 不是普通攻略网站，也不是传统旅行社。它把持证文化讲解、本地生活陪同、专业旅行协助、紧急中文帮助、社区同行和合作方试点放进一个清楚、可信、可预约的中文服务入口。
            </p>
            <div className="mt-10 grid grid-cols-2 gap-4">
              <PdfCard title="游客看得懂">中文为主，兼顾繁中、法语和英语信息，减少语言和本地规则造成的焦虑。</PdfCard>
              <PdfCard title="服务边界清楚">博物馆讲解、普通陪同、车辆服务和紧急帮助被明确拆分，避免模糊宣传。</PdfCard>
              <PdfCard title="早期可执行">用预约表单、人工确认、mock 数据和后台雏形验证真实需求，不一开始做复杂系统。</PdfCard>
              <PdfCard title="适合机构合作">可以为游船、文化机构、摄影、VTC 等合作方提供低风险中文游客试点。</PdfCard>
            </div>
            <Callout>
              这份 PDF 的阅读顺序：先看网站有什么、为什么和其他平台不同；再看平台计划、合规边界和商业逻辑；最后看合伙人如何与机构见面、介绍、回应质疑和推动试点。
            </Callout>
          </div>
        </PdfPage>

        <PdfPage
          pageNumber={2}
          totalPages={4}
          eyebrow="Feature Map"
          title="网站核心特性一览"
          footerLabel="sophie的平台计划第一次修订 · 开篇重点"
        >
          <div className="grid grid-cols-2 gap-4">
            <PdfCard title="1. 持证博物馆中文讲解" tone="green">
              卢浮宫、奥赛、橘园、凡尔赛等收费讲解，只匹配持有法国 guide-conférencier 专业卡的人员。
            </PdfCard>
            <PdfCard title="2. 本地生活陪同" tone="blue">
              陪吃法餐、购物、退税协助、公共交通协助、亲子活动、药房超市沟通和拍照路线陪同。
            </PdfCard>
            <PdfCard title="3. 专业旅行协助" tone="amber">
              摄影、翻译、商务接待、合法 VTC / taxi / transport professionnel 等专业服务入口。
            </PdfCard>
            <PdfCard title="4. 紧急中文帮助" tone="rose">
              护照丢失、手机被偷、报警翻译、医院药房、酒店沟通、机场误机和临时语言协助。
            </PdfCard>
            <PdfCard title="5. 塞纳河游船与精选体验">
              以 request-only 和合作方规则为基础，先做中文说明、预约意向、行前提醒和反馈整理。
            </PdfCard>
            <PdfCard title="6. 社区同行与安全规则">
              找旅伴、社区活动、安全提示和举报机制均为 demo 起步，重点是建立可信的同行边界。
            </PdfCard>
            <PdfCard title="7. 积分与评价结构">
              积分、评价和权益目前是演示机制，不虚构真实订单，不把 demo 评价当真实口碑。
            </PdfCard>
            <PdfCard title="8. Admin 与合作方页面">
              模拟后台用于查看预约、申请、服务、合作线索和审核队列；合作方页用于机构沟通。
            </PdfCard>
          </div>
        </PdfPage>

        <PdfPage
          pageNumber={3}
          totalPages={4}
          eyebrow="Differentiation"
          title="和其他旅游平台的不同"
          footerLabel="sophie的平台计划第一次修订 · 开篇重点"
        >
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <PdfCard title="不同于大型旅游平台">
                大平台擅长票务、标准化活动和酒店机票等成熟产品。Sophie 聚焦游客在巴黎当地临时、中文化、生活化、需要人协助的场景。
              </PdfCard>
              <PdfCard title="不同于传统旅行社">
                第一版不销售机票、酒店或组合旅行套餐，而是做单项本地服务预约、人工确认和服务者撮合。
              </PdfCard>
              <PdfCard title="不同于小红书/微信群私下地陪">
                私下找人灵活但不透明。Sophie 强调资质标识、服务边界、预约记录、审核流程和投诉处理。
              </PdfCard>
              <PdfCard title="不同于单纯攻略或翻译工具">
                攻略和翻译软件只能给信息，不能替游客在现场沟通、陪同、判断流程和处理突发情况。
              </PdfCard>
            </div>
            <QuoteBox label="最重要的差异">
              Sophie 的核心不是“又一个旅游产品平台”，而是一个面向中国游客的巴黎本地信任网络：当游客不知道该找谁、该怎么说、该不该相信某个服务时，平台提供清楚的分类、资质边界和人工确认。
            </QuoteBox>
          </div>
        </PdfPage>

        <PdfPage
          pageNumber={4}
          totalPages={4}
          eyebrow="Why Partners Care"
          title="为什么合伙人和机构会关心这个网站"
          footerLabel="sophie的平台计划第一次修订 · 开篇重点"
        >
          <div className="grid gap-5">
            <div className="grid grid-cols-2 gap-4">
              <PdfCard title="对游客">
                降低语言压力、减少踩坑、找到可信本地帮助，让巴黎体验从“不确定”变成“可沟通、可预约、可确认”。
              </PdfCard>
              <PdfCard title="对服务者">
                清楚展示自己能提供什么、不能提供什么，避免普通陪同被误解成持证讲解，减少纠纷。
              </PdfCard>
              <PdfCard title="对游船和文化机构">
                提供中文游客入口、行前说明、常见问题整理、预约意向和试点数据，同时尊重机构票务和品牌规则。
              </PdfCard>
              <PdfCard title="对合伙人">
                有一套可以对外介绍的清晰话术：先讲游客痛点，再讲平台特性，最后提出低风险试点。
              </PdfCard>
            </div>
            <Callout tone="amber">
              与机构见面时，不要先说“我们想做一个很大的平台”。更有效的表达是：我们发现中文游客在巴黎有一组具体问题，我们已经做出 MVP，可以用低风险方式帮助贵机构测试中文游客服务。
            </Callout>
            <BulletList
              items={[
                "先讲具体场景：登船地点、中文说明、亲子需求、退改规则、博物馆看不懂、突发情况不会处理。",
                "再讲平台能力：中文页面、预约表单、人工确认、资质边界、反馈收集和 noindex 后台雏形。",
                "最后讲试点：6 到 8 周，小范围、低成本、不无授权售票、不冒充官方合作。",
              ]}
            />
          </div>
        </PdfPage>
      </PdfShell>
      <SophiePlanPage />
      <PartnerPlaybookPage />
    </>
  );
}
