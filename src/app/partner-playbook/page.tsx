import {
  BulletList,
  Callout,
  NumberedList,
  PdfCard,
  PdfPage,
  PdfShell,
  QuoteBox,
} from "@/components/pdf/PdfDeck";

const totalPages = 18;
const footerLabel = "Sophie 合伙人机构推广话术手册";
const generatedDate = new Intl.DateTimeFormat("zh-CN", {
  year: "numeric",
  month: "long",
  day: "numeric",
}).format(new Date());

export const metadata = {
  title: "Sophie 合伙人机构推广话术手册",
  robots: { index: false, follow: false },
};

function ScriptBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-zinc-200 bg-white p-4">
      <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-jade">{title}</p>
      <div className="mt-2 text-[13.5px] leading-7 text-ink">{children}</div>
    </div>
  );
}

export default function PartnerPlaybookPage() {
  return (
    <PdfShell>
      <PdfPage pageNumber={1} totalPages={totalPages} title="Sophie 合伙人机构推广话术手册" footerLabel={footerLabel} cover>
        <div className="flex flex-1 flex-col justify-center">
          <p className="w-fit rounded-full bg-forest px-4 py-2 text-[13px] font-semibold text-white">
            面向塞纳河游船公司、文化机构、博物馆、摄影/VTC/餐饮合作方
          </p>
          <h2 className="mt-8 max-w-[700px] text-[40px] font-semibold leading-tight tracking-normal text-ink">
            用清楚、可信、低风险的方式，把 Sophie 介绍给巴黎机构
          </h2>
          <p className="mt-6 max-w-[700px] text-[18px] leading-8 text-zinc-700">
            这份手册给合伙人使用：它不是空泛励志，而是把历史人物的长期主义、成功商业案例的验证方法和真实机构推广话术结合起来。
          </p>
          <div className="mt-10 grid grid-cols-2 gap-4">
            <PdfCard title="先建立信任">不夸大、不冒充、不承诺未签约合作，只讲 MVP、用户需求和低风险试点。</PdfCard>
            <PdfCard title="先解决对方问题">机构关心客源、转化、品牌、安全、流程和法律边界，不只关心我们的梦想。</PdfCard>
            <PdfCard title="先做小试点">用 6 到 8 周页面、预约意向和中文行前说明验证，不要求对方一开始大投入。</PdfCard>
            <PdfCard title="先形成证据">每次沟通都留下数据、反馈、问题清单和下一步，而不是只靠热情推进。</PdfCard>
          </div>
          <p className="mt-8 text-[13px] font-semibold text-jade">{generatedDate}</p>
        </div>
      </PdfPage>

      <PdfPage pageNumber={2} totalPages={totalPages} eyebrow="01 · How to Use" title="这份手册怎么用" footerLabel={footerLabel}>
        <div className="grid gap-5">
          <QuoteBox label="合伙人的角色">
            合伙人不是去求别人给机会，而是去发现对方的业务目标，并提出一个低成本、低风险、能带来新客源和更好游客体验的试点方案。
          </QuoteBox>
          <div className="grid grid-cols-2 gap-4">
            <PdfCard title="会前准备">看对方官网、服务时间、价格、游客语言、团体合作入口、联系方式和品牌调性。</PdfCard>
            <PdfCard title="会中表达">先讲游客问题，再讲平台如何补位，最后讲试点方案和对方无需承担的事情。</PdfCard>
            <PdfCard title="会后跟进">24 小时内发感谢邮件、one-pager、试点方案、待确认问题和下一次沟通时间。</PdfCard>
            <PdfCard title="纪律">不编造用户量、订单、融资、官方关系或市场规模数字。不承诺平台现在还做不到的事情。</PdfCard>
          </div>
          <Callout tone="amber">
            每一次机构沟通都要像一次产品实验：不是为了当场说服所有人，而是为了获得更清楚的信息、更小的下一步和更可信的合作证据。
          </Callout>
        </div>
      </PdfPage>

      <PdfPage pageNumber={3} totalPages={totalPages} eyebrow="02 · Core Value" title="对塞纳河游船公司的价值主张" footerLabel={footerLabel}>
        <div className="grid grid-cols-2 gap-4">
          <PdfCard title="触达中文游客">
            帮助游船公司更清楚地触达中国游客，尤其是第一次来巴黎、需要中文解释和行前提醒的游客。
          </PdfCard>
          <PdfCard title="降低沟通成本">
            平台可以把常见问题、路线、登船地点、注意事项、取消规则和语言说明提前讲清楚。
          </PdfCard>
          <PdfCard title="不抢票务主导权">
            早期可以采用 request-only 或官方跳转模式，票务、价格、规则和最终确认仍由合作方掌握。
          </PdfCard>
          <PdfCard title="增加体验感">
            对中文游客而言，游船不只是交通或观光，而是理解巴黎城市结构、桥梁、塞纳河历史和夜景节奏的体验。
          </PdfCard>
          <PdfCard title="测试低风险">
            先做专题页、中文行前说明、预约意向收集和反馈整理，不需要对方一开始改系统。
          </PdfCard>
          <PdfCard title="产生可用数据">
            统计中文游客关注的问题、出行时间、人数、价格敏感度和常见疑虑，为后续合作提供依据。
          </PdfCard>
        </div>
      </PdfPage>

      <PdfPage pageNumber={4} totalPages={totalPages} eyebrow="03 · Opening Script" title="5 分钟开场话术" footerLabel={footerLabel}>
        <div className="grid gap-4">
          <ScriptBlock title="中文版本">
            你好，我们正在做 Sophie，一个面向中国游客的巴黎本地服务 MVP。我们不是传统旅行社，也不会在没有协议的情况下直接转售票务。我们关注的是：很多中国游客来巴黎时，想体验塞纳河游船，但他们对登船地点、时间选择、语言说明、退改规则和适合家庭的选择不够清楚。我们希望先做一个低风险试点，用中文页面和人工预约意向，帮助游客更好理解你们的服务，并把最终确认和票务规则留在贵机构控制范围内。
          </ScriptBlock>
          <ScriptBlock title="法文简短版本">
            Bonjour, nous développons Sophie, une plateforme MVP dédiée aux visiteurs sinophones à Paris. Nous ne souhaitons pas revendre des billets sans accord. Notre proposition est un pilote léger : une page en chinois, une meilleure préparation des visiteurs, une collecte de demandes et une orientation claire vers les règles officielles du partenaire.
          </ScriptBlock>
          <Callout>
            开场的关键不是把我们讲得很大，而是让对方听到三个信号：我们理解中文游客、我们尊重机构规则、我们愿意从低风险试点开始。
          </Callout>
        </div>
      </PdfPage>

      <PdfPage pageNumber={5} totalPages={totalPages} eyebrow="04 · Meeting Flow" title="30 分钟会议结构" footerLabel={footerLabel}>
        <NumberedList
          items={[
            "第 1 到 3 分钟：感谢对方时间，说明我们处于 MVP 早期验证阶段。",
            "第 4 到 8 分钟：讲中国游客在巴黎游船场景中的具体问题，例如语言、登船地点、时间选择、亲子需求和规则理解。",
            "第 9 到 13 分钟：展示平台定位，强调不是旅行社套餐，不无授权售票，不模糊票务责任。",
            "第 14 到 18 分钟：讲低风险试点：中文专题页、预约意向表、官方规则说明、人工确认和反馈报告。",
            "第 19 到 23 分钟：询问对方现在最关心的目标，是中文客源、团体票、品牌曝光、客服成本还是淡季需求。",
            "第 24 到 28 分钟：确认下一步，争取获得正确联系人、可引用规则、图片授权流程或下一次会议。",
            "第 29 到 30 分钟：总结承诺，只发一页试点方案，不要求对方立即签复杂合作。",
          ]}
        />
      </PdfPage>

      <PdfPage pageNumber={6} totalPages={totalPages} eyebrow="05 · Questions" title="机构最可能问的问题与回答" footerLabel={footerLabel}>
        <div className="grid gap-4">
          <PdfCard title="你们现在有多少用户？" tone="amber">
            回答：我们现在是 MVP 早期验证阶段，不会夸大用户量。我们先测试中文页面、预约意向和真实反馈，希望用小规模数据证明需求，再讨论更正式合作。
          </PdfCard>
          <PdfCard title="你们会卖我们的票吗？" tone="rose">
            回答：不会在没有协议的情况下直接转售。早期可以采用官方跳转、request-only 或人工确认模式，票务、价格、规则和最终确认由贵方掌握。
          </PdfCard>
          <PdfCard title="你们怎么保护我们的品牌？">
            回答：没有授权不使用 logo、不宣称官方合作、不改写规则。页面文案可以提交给贵方确认，图片和商标使用遵守贵方流程。
          </PdfCard>
          <PdfCard title="这对我们有什么实际价值？">
            回答：中文游客需要更清楚的行前说明和信任入口。我们可以减少误解、提高游客准备度，并整理中文游客需求数据给贵方。
          </PdfCard>
        </div>
      </PdfPage>

      <PdfPage pageNumber={7} totalPages={totalPages} eyebrow="06 · History Lesson" title="历史启发：张骞与郑和" footerLabel={footerLabel}>
        <div className="grid gap-4">
          <PdfCard title="张骞：跨文化合作需要长期耐心" tone="blue">
            张骞出使西域的意义不只是一次旅程，而是打开长期交流的通道。给机构推广时也一样，第一次见面不一定成交，但可以换来信息、信任和下一次沟通。
          </PdfCard>
          <PdfCard title="郑和：让对方感到被尊重和被看见" tone="green">
            大规模对外交往离不开礼仪、组织和资源展示。合伙人面对游船公司、博物馆或文化机构时，要尊重对方品牌、规则、流程和专业性。
          </PdfCard>
          <QuoteBox label="转化成行动">
            不要用“我们要你帮忙”开场，而要用“我们观察到一类游客需求，并希望用尊重贵方规则的方式一起测试”开场。
          </QuoteBox>
        </div>
      </PdfPage>

      <PdfPage pageNumber={8} totalPages={totalPages} eyebrow="07 · History Lesson" title="历史启发：居里夫人与南丁格尔" footerLabel={footerLabel}>
        <div className="grid gap-4">
          <PdfCard title="居里夫人：可信来自严谨，而不只是热情" tone="green">
            居里夫人在艰苦条件下坚持实验、证据和专业标准。机构合作也一样，早期项目越小，越要把边界、数据、文案和承诺讲严谨。
          </PdfCard>
          <PdfCard title="南丁格尔：用数据改变机构判断" tone="blue">
            南丁格尔用数据和可视化推动医疗系统改善。Sophie 面对机构时，不只讲故事，还要积累中文游客问题、预约意向、反馈和转化线索。
          </PdfCard>
          <Callout>
            合伙人遇到质疑时，最好的回答不是情绪化辩解，而是拿出更清楚的记录：用户问了什么、为什么犹豫、哪些说明能减少客服成本、哪些服务最有需求。
          </Callout>
        </div>
      </PdfPage>

      <PdfPage pageNumber={9} totalPages={totalPages} eyebrow="08 · Business Case" title="商业案例：Airbnb 与 Disney" footerLabel={footerLabel}>
        <div className="grid gap-4">
          <PdfCard title="Airbnb：先解决信任，再扩大交易" tone="amber">
            Airbnb 早期面对的是陌生人住进陌生人家的信任问题。它逐步通过资料、图片、评价、支付和规则建立信任。Sophie 也要先解决游客和服务者之间的信任。
          </PdfCard>
          <PdfCard title="Disney：卖的不是设施，而是完整体验" tone="blue">
            Disney 的成功不只是游乐设施，而是故事、秩序、服务、动线和情绪体验。塞纳河游船也不只是船票，对中国游客来说是“理解巴黎的一小时”。
          </PdfCard>
          <QuoteBox label="对游船公司的表达">
            我们希望帮助中文游客把游船从“买一张票”变成“知道选哪一班、为什么值得看、怎么到达、带孩子注意什么、如何减少现场焦虑”的完整体验。
          </QuoteBox>
        </div>
      </PdfPage>

      <PdfPage pageNumber={10} totalPages={totalPages} eyebrow="09 · Business Case" title="商业案例：Starbucks 与 Michelin Guide" footerLabel={footerLabel}>
        <div className="grid gap-4">
          <PdfCard title="Starbucks：把普通消费变成可重复的场景" tone="green">
            Starbucks 的启发在于，用户购买的不只是咖啡，也是一种熟悉、稳定、可预期的体验。Sophie 要把巴黎本地协助变成游客可理解、可预约、可评价的服务场景。
          </PdfCard>
          <PdfCard title="Michelin Guide：用内容促进旅行生态" tone="amber">
            Michelin Guide 的历史启发是：优质内容可以帮助旅行者做决定，也能带动更大的出行生态。Sophie 的中文内容和行前说明，可以成为机构触达中文游客的入口。
          </PdfCard>
          <Callout tone="blue">
            商业合作的重点不是“我们有一个网站”，而是“我们能帮助机构把中文游客看不懂、不敢买、买完不会用的问题变得更清楚”。
          </Callout>
        </div>
      </PdfPage>

      <PdfPage pageNumber={11} totalPages={totalPages} eyebrow="10 · Difficulty" title="遇到困难时怎么做" footerLabel={footerLabel}>
        <div className="grid grid-cols-2 gap-4">
          <PdfCard title="对方不回复">
            不连续追问“看到了吗”。改为补充一页更清楚的试点方案，换正确部门，寻找 professional / tourisme / groupes 入口。
          </PdfCard>
          <PdfCard title="对方质疑规模">
            承认早期阶段，不夸大。强调目标是先用 6 到 8 周验证中文游客需求，提供反馈报告。
          </PdfCard>
          <PdfCard title="对方担心合规">
            立即说明不无授权售票、不冒充官方、不使用未授权 logo、不改变对方规则。
          </PdfCard>
          <PdfCard title="对方担心麻烦">
            提出低工作量版本：我们做页面、文案、初筛和反馈，对方只确认规则、图片授权和正确跳转。
          </PdfCard>
          <PdfCard title="合伙人自己紧张">
            回到事实：游客痛点、合规边界、低风险试点、下一步。不要用宏大叙事压倒对方。
          </PdfCard>
          <PdfCard title="被拒绝">
            记录拒绝原因，改进话术，争取获得“未来谁更适合联系”或“什么条件成熟后再聊”。
          </PdfCard>
        </div>
      </PdfPage>

      <PdfPage pageNumber={12} totalPages={totalPages} eyebrow="11 · Pilot Design" title="低风险试点方案" footerLabel={footerLabel}>
        <NumberedList
          items={[
            "周期：6 到 8 周，不要求长期合同。",
            "页面：为机构建立中文专题页，清楚说明服务内容、登船地点、时间、适合人群、注意事项和官方规则。",
            "模式：不直接售票，可以先采用 request-only、官方跳转或人工确认。",
            "语言：中文为主，可保留法文/英文规则来源，避免误导。",
            "数据：每周整理预约意向、常见问题、用户画像、放弃原因和反馈。",
            "品牌：未授权不使用 logo，不宣称官方合作，图片和商标按机构流程确认。",
            "复盘：试点结束后提供简短报告，讨论是否进入正式合作。",
          ]}
        />
      </PdfPage>

      <PdfPage pageNumber={13} totalPages={totalPages} eyebrow="12 · Cruise Script" title="给塞纳河游船公司的具体话术" footerLabel={footerLabel}>
        <div className="grid gap-4">
          <ScriptBlock title="价值表达">
            我们观察到中国游客对塞纳河游船很感兴趣，但他们常常在选择班次、理解登船地点、判断白天/黄昏/夜景差异、带孩子是否方便、是否需要提前到达等问题上不确定。Sophie 希望用中文页面和人工确认，把这些问题提前解释清楚，让游客更有信心，也减少现场误解。
          </ScriptBlock>
          <ScriptBlock title="低风险承诺">
            试点阶段我们不会在未获得授权的情况下转售票务，也不会宣称官方合作。我们可以先做一个中文说明页，明确链接到贵方官方规则或由贵方最终确认。我们负责中文游客沟通和需求整理，贵方保持票务、价格和服务规则控制权。
          </ScriptBlock>
          <ScriptBlock title="结尾请求">
            我们想请问，贵方是否有负责 tourism professionals、group sales 或 partnership 的联系人？如果可以，我们愿意先发一页试点方案，请贵方判断是否值得安排一次短会。
          </ScriptBlock>
        </div>
      </PdfPage>

      <PdfPage pageNumber={14} totalPages={totalPages} eyebrow="13 · Culture Script" title="给博物馆和文化机构的话术" footerLabel={footerLabel}>
        <div className="grid gap-4">
          <ScriptBlock title="开场">
            我们服务的是来巴黎的中文游客。他们对文化内容很感兴趣，但常常因为语言和知识背景不足，无法真正理解展品、建筑和历史语境。Sophie 希望帮助游客找到合规、清楚、适合中文阅读的文化体验入口。
          </ScriptBlock>
          <ScriptBlock title="合规说明">
            对博物馆、历史古迹、Musée de France 和 monuments historiques 的收费讲解，我们只匹配持有法国 guide-conférencier 专业卡的人员。普通本地陪同不会被包装成专业讲解。
          </ScriptBlock>
          <ScriptBlock title="合作方式">
            早期可以先做中文行前说明、持证讲解需求收集、亲子路线需求调研和反馈整理。任何官方合作、图片、logo 或机构名称使用，都可以先由贵方确认。
          </ScriptBlock>
        </div>
      </PdfPage>

      <PdfPage pageNumber={15} totalPages={totalPages} eyebrow="14 · Service Partners" title="给摄影、VTC、餐厅等合作方的话术" footerLabel={footerLabel}>
        <div className="grid grid-cols-2 gap-4">
          <PdfCard title="摄影师">
            我们有中文游客需要巴黎拍照路线、家庭照、情侣照和轻量旅拍。平台可以帮助你提前理解需求、时间、地点、风格和交付边界。
          </PdfCard>
          <PdfCard title="合法 VTC / taxi">
            我们只合作合法车辆服务者。游客需要机场、酒店、亲子、商务和夜间安全场景的清楚沟通。
          </PdfCard>
          <PdfCard title="餐厅或美食体验">
            中文游客常常不知道如何点餐、选择酒水、说明过敏和理解礼仪。合作可以从中文说明、预订沟通和体验内容开始。
          </PdfCard>
          <PdfCard title="翻译或商务接待">
            商务游客需要更正式的语言协助、会面沟通和本地流程支持。平台会强调专业边界和保密意识。
          </PdfCard>
        </div>
        <div className="mt-5">
          <Callout tone="rose">
            车辆相关服务必须由合法 VTC / taxi / transport professionnel 提供。不能让普通人以普通身份私下开车收费接送游客。
          </Callout>
        </div>
      </PdfPage>

      <PdfPage pageNumber={16} totalPages={totalPages} eyebrow="15 · Follow Up" title="会后跟进邮件与微信文案" footerLabel={footerLabel}>
        <div className="grid gap-4">
          <ScriptBlock title="法文邮件简版">
            Bonjour, merci pour votre temps. Suite à notre échange, je vous envoie une proposition de pilote léger pour mieux accompagner les visiteurs sinophones à Paris : page dédiée en chinois, collecte de demandes, clarification des règles officielles et rapport de feedback après 6 à 8 semaines. Nous ne revendons pas de billets sans accord et nous ne revendiquons aucun partenariat officiel sans validation écrite.
          </ScriptBlock>
          <ScriptBlock title="中文微信跟进">
            今天非常感谢您抽时间沟通。我会整理一页试点方案发给您，重点包括：中文游客需求、我们可以承担的工作、贵方保留控制权的部分、试点周期和需要贵方确认的信息。我们先从小范围验证开始，不会做任何未授权宣传。
          </ScriptBlock>
          <BulletList
            items={[
              "附件只放一页方案，不要一开始发十几页材料。",
              "邮件标题写清楚：Chinese visitor pilot proposal / Proposition pilote visiteurs sinophones。",
              "24 小时内跟进，7 天无回复再发一次更短版本。",
              "每次跟进都提出明确下一步：确认联系人、确认规则、安排 20 分钟会议。",
            ]}
          />
        </div>
      </PdfPage>

      <PdfPage pageNumber={17} totalPages={totalPages} eyebrow="16 · Team Discipline" title="合伙人分工与沟通纪律" footerLabel={footerLabel}>
        <div className="grid grid-cols-2 gap-4">
          <PdfCard title="BD 负责人">
            负责找联系人、发邮件、约会、记录会议和推动下一步。
          </PdfCard>
          <PdfCard title="产品负责人">
            负责把合作需求转化为页面、表单、数据字段和用户流程。
          </PdfCard>
          <PdfCard title="合规负责人">
            负责检查是否涉及票务、车辆、博物馆讲解、图片和商标授权。
          </PdfCard>
          <PdfCard title="内容负责人">
            负责中文说明、法文邮件、行前提示、FAQ 和复盘报告。
          </PdfCard>
        </div>
        <div className="mt-5">
          <Callout tone="amber">
            沟通纪律：所有合作线索进入表格；所有承诺写下来；所有未确认事项标 TODO；任何官方合作、票务、logo、图片和数据展示都必须先确认。
          </Callout>
        </div>
      </PdfPage>

      <PdfPage pageNumber={18} totalPages={totalPages} eyebrow="17 · Final Checklist" title="合伙人行动清单" footerLabel={footerLabel}>
        <div className="grid gap-5">
          <div className="grid grid-cols-2 gap-5">
            <div>
              <h2 className="mb-3 text-[18px] font-semibold text-ink">会前</h2>
              <BulletList
                items={[
                  "确认对方官网、联系人、合作入口和品牌规则。",
                  "准备 5 分钟开场、1 页试点方案和 3 个问题。",
                  "明确不能说的话：已有合作、大量用户、可直接卖票、官方授权。",
                ]}
              />
            </div>
            <div>
              <h2 className="mb-3 text-[18px] font-semibold text-ink">会后</h2>
              <BulletList
                items={[
                  "当天整理会议纪要。",
                  "24 小时内发送感谢邮件和试点方案。",
                  "把对方顾虑转化为产品或合规 TODO。",
                  "7 天内推动下一次具体沟通。",
                ]}
              />
            </div>
          </div>
          <QuoteBox label="最后提醒">
            机构推广不是靠一场漂亮演讲，而是靠长期可信。像历史上的远行者一样有耐心，像科学家一样尊重证据，像优秀商业案例一样先验证小场景，再慢慢扩大合作。
          </QuoteBox>
        </div>
      </PdfPage>
    </PdfShell>
  );
}
