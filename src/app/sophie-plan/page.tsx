import {
  BulletList,
  Callout,
  MiniBrowserPreview,
  NumberedList,
  PdfCard,
  PdfPage,
  PdfShell,
  QuoteBox,
} from "@/components/pdf/PdfDeck";

const totalPages = 14;
const footerLabel = "sophie平台计划第一次修订";
const generatedDate = new Intl.DateTimeFormat("zh-CN", {
  year: "numeric",
  month: "long",
  day: "numeric",
}).format(new Date());

export const metadata = {
  title: "sophie平台计划第一次修订",
  robots: { index: false, follow: false },
};

export default function SophiePlanPage() {
  return (
    <PdfShell>
      <PdfPage pageNumber={1} totalPages={totalPages} title="sophie平台计划第一次修订" footerLabel={footerLabel} cover>
        <div className="flex flex-1 flex-col justify-center">
          <p className="w-fit rounded-full bg-forest px-4 py-2 text-[13px] font-semibold text-white">
            当前阶段：MVP 原型 / 早期验证阶段
          </p>
          <h2 className="mt-8 max-w-[680px] text-[40px] font-semibold leading-tight tracking-normal text-ink">
            面向中国游客的巴黎本地服务平台
          </h2>
          <p className="mt-6 max-w-[680px] text-[18px] leading-8 text-zinc-700">
            Sophie 平台以巴黎为第一站，帮助中国游客预约持证博物馆中文讲解、本地生活陪同、专业旅行协助和紧急中文帮助。
          </p>
          <div className="mt-10 grid grid-cols-2 gap-4">
            <PdfCard title="中文可信服务">面向来巴黎旅游、留学探亲、商务短停的中文用户，降低语言和本地规则带来的不确定性。</PdfCard>
            <PdfCard title="合规服务分类">博物馆及历史古迹收费讲解只匹配持有法国 guide-conférencier 专业卡的人员。</PdfCard>
            <PdfCard title="人工撮合起步">第一版不做复杂交易系统，先用预约表单、后台演示和人工确认验证真实需求。</PdfCard>
            <PdfCard title="巴黎单城验证">先聚焦巴黎，不急于铺开全法国，把服务质量、合作边界和用户信任做稳。</PdfCard>
          </div>
          <div className="mt-10 rounded-lg border border-zinc-200 bg-white/85 p-5">
            <p className="text-[12px] font-semibold text-zinc-500">文件用途</p>
            <p className="mt-1 text-[15px] font-semibold text-ink">
              供朋友、潜在服务者、合作伙伴和早期投资人理解项目逻辑、网站 MVP 与下一步计划。
            </p>
            <p className="mt-3 text-[13px] font-semibold text-jade">{generatedDate}</p>
          </div>
        </div>
      </PdfPage>

      <PdfPage pageNumber={2} totalPages={totalPages} eyebrow="01 · Vision" title="项目一句话与核心定位" footerLabel={footerLabel}>
        <div className="grid gap-5">
          <QuoteBox label="一句话介绍">
            Sophie 是一个面向中国游客的巴黎本地服务平台，让游客用熟悉的语言预约可信、合规、灵活的本地协助。
          </QuoteBox>
          <div className="grid grid-cols-2 gap-4">
            <PdfCard title="不是传统旅行社">
              第一版不销售机票、酒店或组合旅行套餐，不把自己包装成全包式旅游产品。
            </PdfCard>
            <PdfCard title="不是私下地陪群">
              平台强调服务边界、资质标识、人工审核、预约记录和基本售后沟通。
            </PdfCard>
            <PdfCard title="不是普通攻略网站">
              攻略只能提供信息，Sophie 关注的是游客需要人协助、翻译、陪同或紧急沟通的瞬间。
            </PdfCard>
            <PdfCard title="不是一开始做大平台">
              先在巴黎小规模验证需求、服务者供给、定价、合规和合作方接受度。
            </PdfCard>
          </div>
          <Callout>
            核心关键词：可信、中文、本地、合规、灵活、可预约。项目早期的重点不是做最大，而是把最容易让游客焦虑的巴黎场景做得清楚、安心、可执行。
          </Callout>
        </div>
      </PdfPage>

      <PdfPage pageNumber={3} totalPages={totalPages} eyebrow="02 · Users" title="目标用户与典型场景" footerLabel={footerLabel}>
        <div className="grid grid-cols-2 gap-4">
          <PdfCard title="第一次来巴黎的自由行游客">
            想自由安排路线，但在点餐、交通、退税、博物馆和突发情况上缺少安全感。
          </PdfCard>
          <PdfCard title="带父母或孩子的家庭游客">
            更看重沟通顺畅、节奏合理、安全感和突发问题处理能力。
          </PdfCard>
          <PdfCard title="独自旅行或短暂停留游客">
            希望有人陪吃饭、陪逛街、拍照或在陌生城市提供低压力陪同。
          </PdfCard>
          <PdfCard title="文化体验型游客">
            不满足于拍照打卡，希望通过中文持证讲解真正理解卢浮宫、奥赛、凡尔赛等内容。
          </PdfCard>
          <PdfCard title="临时遇到困难的人">
            手机被偷、护照丢失、医院药房沟通、警局报案、酒店争议等，需要即时中文帮助。
          </PdfCard>
          <PdfCard title="商务或高端私人接待">
            需要更可靠的中文陪同、摄影、合法车辆、餐厅沟通和行程协助。
          </PdfCard>
        </div>
        <div className="mt-5">
          <Callout tone="blue">
            用户不是只需要“旅游产品”，而是需要在巴黎某个具体时刻，有一个懂中文、懂本地流程、边界清楚的人帮他把事情办顺。
          </Callout>
        </div>
      </PdfPage>

      <PdfPage pageNumber={4} totalPages={totalPages} eyebrow="03 · Pain Points" title="中国游客在巴黎的痛点" footerLabel={footerLabel}>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <PdfCard title="语言沟通困难">餐厅、药房、警局、酒店、商店、交通窗口都可能需要清楚表达，而翻译软件不一定能处理语气和流程。</PdfCard>
            <PdfCard title="博物馆看不懂">卢浮宫、奥赛、凡尔赛信息密度高，没有中文讲解容易变成只拍照、不理解、不记得。</PdfCard>
            <PdfCard title="退税和购物流程复杂">尺码、库存、支付、退税单、机场扫码、海关抽查等步骤让游客焦虑。</PdfCard>
            <PdfCard title="突发情况不敢独自处理">手机被偷、护照丢失、身体不适、报警报案等情况需要冷静指引和语言协助。</PdfCard>
            <PdfCard title="带孩子旅行压力大">亲子路线、厕所、推车、节奏、安全和孩子兴趣点都需要更细的本地经验。</PdfCard>
            <PdfCard title="私下找人缺乏保障">微信群、小红书临时找人容易出现身份不明、资质不清、价格边界不透明和售后困难。</PdfCard>
          </div>
          <Callout tone="amber">
            大平台擅长标准化售卖，但游客真实焦虑往往发生在小场景：不会点餐、不会沟通、需要人陪、临时出事。这就是 Sophie 的切入点。
          </Callout>
        </div>
      </PdfPage>

      <PdfPage pageNumber={5} totalPages={totalPages} eyebrow="04 · Solution" title="平台解决方案" footerLabel={footerLabel}>
        <div className="grid gap-5">
          <div className="grid grid-cols-2 gap-4">
            <PdfCard title="持证博物馆中文讲解" tone="green">
              卢浮宫、奥赛、橘园、凡尔赛等收费讲解，仅由持有法国 carte professionnelle de guide-conférencier 的人员提供。
            </PdfCard>
            <PdfCard title="本地生活陪同" tone="blue">
              陪吃法餐、购物沟通、退税协助、公共交通协助、亲子活动陪同、药房超市沟通和拍照路线陪同。
            </PdfCard>
            <PdfCard title="专业旅行协助" tone="amber">
              摄影师、翻译、商务接待、合法 VTC / taxi / transport professionnel 等专业服务。
            </PdfCard>
            <PdfCard title="紧急中文帮助" tone="rose">
              护照丢失、手机被偷、报警、医院药房、酒店沟通、机场误机和临时语言协助。
            </PdfCard>
          </div>
          <QuoteBox label="平台做什么">
            平台通过分类、资质标识、预约表单、人工确认和后台管理雏形，提高游客、服务者和合作方之间的信息透明度。
          </QuoteBox>
        </div>
      </PdfPage>

      <PdfPage pageNumber={6} totalPages={totalPages} eyebrow="05 · Service System" title="四大服务区" footerLabel={footerLabel}>
        <div className="grid grid-cols-2 gap-4">
          <PdfCard title="1. 博物馆专区">
            适合想真正理解艺术、历史和建筑的游客。典型场景包括卢浮宫经典线、奥赛印象派线、亲子博物馆线和艺术小白路线。
          </PdfCard>
          <PdfCard title="2. 本地生活陪同">
            适合想降低陌生城市压力的游客。典型场景包括陪吃法餐、购物、退税、地铁/RER 协助、药房沟通和亲子陪同。
          </PdfCard>
          <PdfCard title="3. 专业服务">
            适合高质量体验、商务接待或专业需求。典型服务包括摄影、翻译、合法车辆、商务会面协助和高端私人接待。
          </PdfCard>
          <PdfCard title="4. 紧急中文帮助">
            适合已经遇到问题的人。先从线上语音/文字协助开始，之后再逐步扩展到线下陪同和合作资源网络。
          </PdfCard>
        </div>
        <div className="mt-5">
          <Callout>
            平台降低不确定性的方式：把服务写清楚，把资质标出来，把不可做的事情说清楚，把预约需求留下来，再由人工确认和匹配。
          </Callout>
        </div>
      </PdfPage>

      <PdfPage pageNumber={7} totalPages={totalPages} eyebrow="06 · Compliance" title="合规边界" footerLabel={footerLabel}>
        <div className="grid gap-4">
          <Callout tone="rose">
            这页是项目能不能长期做的关键。早期不能为了增长模糊边界，更不能把普通陪同包装成持证讲解或合法交通服务。
          </Callout>
          <BulletList
            items={[
              "博物馆、历史古迹、Musée de France、monuments historiques 的收费讲解，仅由持有法国 guide-conférencier 专业卡的人员提供。",
              "普通本地陪同不能写成专业导游讲解，只能叫本地陪同、生活协助、翻译陪同或日常沟通协助。",
              "涉及车辆接送的收费服务，只能由合法 VTC / taxi / transport professionnel 提供。",
              "第一版平台只是预约和撮合工具，不销售机票、酒店或组合旅行套餐。",
              "正式商业化前需要继续完善 CGU、CGV、隐私政策、服务者协议、保险、退款和投诉处理机制。",
            ]}
          />
          <PdfCard title="合规不是阻力，而是信任资产" tone="green">
            对游客来说，清楚的边界代表安全感；对机构来说，合规表达代表平台成熟；对服务者来说，规则清楚可以减少误解和纠纷。
          </PdfCard>
        </div>
      </PdfPage>

      <PdfPage pageNumber={8} totalPages={totalPages} eyebrow="07 · MVP" title="当前网站 MVP 已完成内容" footerLabel={footerLabel}>
        <div className="grid grid-cols-2 gap-4">
          <MiniBrowserPreview title="首页" path="/zh-CN" lines={["中文定位", "服务分类入口", "预约与服务者按钮"]} />
          <MiniBrowserPreview title="服务列表" path="/zh-CN/services" lines={["四类服务", "资质标签", "价格/地点/时长"]} />
          <MiniBrowserPreview title="预约表单" path="/zh-CN/book" lines={["游客需求收集", "儿童/预算/备注", "localStorage 演示"]} />
          <MiniBrowserPreview title="服务者入驻" path="/zh-CN/providers/apply" lines={["服务类型", "guide 卡", "VTC/taxi 资质"]} />
          <MiniBrowserPreview title="紧急帮助" path="/zh-CN/help/emergency" lines={["官方资源占位", "中文话术复制", "紧急需求表单"]} />
          <MiniBrowserPreview title="Admin 演示后台" path="/zh-CN/admin" lines={["预约/申请/服务", "审核队列概念", "noindex"]} />
        </div>
      </PdfPage>

      <PdfPage pageNumber={9} totalPages={totalPages} eyebrow="08 · Traveler Flow" title="游客使用流程" footerLabel={footerLabel}>
        <NumberedList
          items={[
            "游客打开中文网站，先判断平台是否可信、是否适合自己的巴黎旅行需求。",
            "浏览服务分类，选择博物馆讲解、本地陪同、专业服务、紧急帮助或塞纳河游船相关体验。",
            "进入服务详情页，查看服务简介、时长、价格区间、地点、服务者类型、资质要求和注意事项。",
            "填写预约表单，留下姓名、微信、邮箱、手机号、来法国日期、人数、预算和具体需求。",
            "平台人工确认需求，判断是否合规、是否需要持证人员、是否涉及车辆或紧急协助。",
            "匹配合适服务者或合作方，确认时间、地点、价格、付款方式和取消规则。",
            "完成服务后收集反馈，为后续真实评价、服务者评级和产品优化提供依据。",
          ]}
        />
      </PdfPage>

      <PdfPage pageNumber={10} totalPages={totalPages} eyebrow="09 · Provider Flow" title="服务者入驻与审核流程" footerLabel={footerLabel}>
        <div className="grid gap-4">
          <NumberedList
            items={[
              "服务者填写申请，提供姓名、微信、邮箱、所在城市、可提供服务类型、语言能力和个人简介。",
              "如果申请博物馆或历史古迹收费讲解，必须声明并后续提交 guide-conférencier 专业卡。",
              "如果申请车辆接送或交通服务，必须具备合法 VTC / taxi / transport professionnel 资质。",
              "平台人工审核服务描述，避免普通陪同被误写成专业讲解，避免普通人开车收费接送游客。",
              "审核通过后进入服务者名单，早期通过人工匹配接单，而不是直接开放抢单。",
              "服务完成后收集游客反馈，并根据投诉、迟到、沟通质量和合规情况调整展示资格。",
            ]}
          />
          <Callout tone="blue">
            早期服务者数量不需要多，宁可先找到 5 到 10 个可靠的人，做出几单高质量样板。
          </Callout>
        </div>
      </PdfPage>

      <PdfPage pageNumber={11} totalPages={totalPages} eyebrow="10 · Operations" title="运营与质量控制" footerLabel={footerLabel}>
        <div className="grid grid-cols-2 gap-4">
          <PdfCard title="人工确认优先">
            早期不急着自动化。每单人工确认需求、时间、地点、服务者能力和合规边界。
          </PdfCard>
          <PdfCard title="服务者资料审核">
            基础身份、语言能力、城市、服务类型、专业资质和可服务时间需要逐步建立档案。
          </PdfCard>
          <PdfCard title="服务模板标准化">
            每类服务建立固定说明，包括能做什么、不能做什么、价格区间、取消规则和风险提示。
          </PdfCard>
          <PdfCard title="投诉与安全机制">
            设置举报、退款沟通、紧急升级和服务者暂停机制，保护游客也保护认真服务的人。
          </PdfCard>
          <PdfCard title="评价审核">
            真实评价必须来自真实服务，获得发布同意，不能用虚假好评包装项目。
          </PdfCard>
          <PdfCard title="官方资源核验">
            紧急电话、领事资源、交通失物、药房医院等资源上线前必须人工核验。
          </PdfCard>
        </div>
      </PdfPage>

      <PdfPage pageNumber={12} totalPages={totalPages} eyebrow="11 · Business Model" title="商业模式初步设想" footerLabel={footerLabel}>
        <div className="grid gap-4">
          <BulletList
            items={[
              "平台佣金：每单从服务者收入或成交金额中抽取一定比例，比例未来根据服务类型测试。",
              "预约/平台服务费：游客支付少量服务费，用于人工确认、客服和匹配成本。",
              "自营高质量文化路线：围绕卢浮宫、奥赛、凡尔赛、蒙马特等做合规文化体验。",
              "高端私人定制服务：面向家庭、商务、摄影、餐厅和购物需求，提供更细的人工方案。",
              "紧急帮助按时长收费：先从线上语音/文字协助开始，再评估线下陪同。",
              "未来扩展会员、企业接待、B2B 合作和合作方联合页面。",
            ]}
          />
          <Callout tone="amber">
            当前不能编造收入、用户量或订单数据。第一阶段的商业重点是验证真实需求、服务交付质量、用户愿意付费的价格区间和合作方接受度。
          </Callout>
        </div>
      </PdfPage>

      <PdfPage pageNumber={13} totalPages={totalPages} eyebrow="12 · Market & Competition" title="竞品类型与差异化" footerLabel={footerLabel}>
        <div className="grid grid-cols-2 gap-4">
          <PdfCard title="大型旅游平台">
            Trip.com、Klook、GetYourGuide 等更擅长标准化产品、票务和成熟活动，但不一定覆盖临时中文生活协助。
          </PdfCard>
          <PdfCard title="本地体验平台">
            Airbnb Experiences、Withlocals、ToursByLocals 等强调个人体验，但中文游客的语言和合规边界仍可更聚焦。
          </PdfCard>
          <PdfCard title="小红书/微信群地陪">
            获客和沟通灵活，但审核、资质、服务标准、投诉和售后都不稳定。
          </PdfCard>
          <PdfCard title="华人旅行社/私人导游">
            有成熟供给，但很多服务仍偏传统路线，未必覆盖临时生活协助和紧急帮助。
          </PdfCard>
        </div>
        <div className="mt-5">
          <Callout>
            Sophie 的差异化是：更聚焦中国游客、更聚焦巴黎本地生活场景、更强调持证博物馆讲解、更重视合规分类和紧急中文帮助，也更适合从小规模人工撮合开始验证。
          </Callout>
        </div>
      </PdfPage>

      <PdfPage pageNumber={14} totalPages={totalPages} eyebrow="13 · Next Steps" title="30 天行动计划与反馈问题" footerLabel={footerLabel}>
        <div className="grid grid-cols-2 gap-5">
          <div>
            <h2 className="mb-3 text-[18px] font-semibold text-ink">30 天计划</h2>
            <BulletList
              items={[
                "部署到 Vercel，生成公开测试链接。",
                "发给 10 到 20 个朋友收集反馈。",
                "访谈 5 个潜在服务者。",
                "测试 3 个真实人工撮合订单。",
                "优化网站文案、预约流程和合规提示。",
                "准备服务者协议、基础法律页面和保险咨询。",
                "做小红书/微信内容测试。",
              ]}
            />
          </div>
          <div>
            <h2 className="mb-3 text-[18px] font-semibold text-ink">希望朋友反馈</h2>
            <BulletList
              items={[
                "是否一眼看懂网站做什么？",
                "来巴黎旅游是否会使用？",
                "最感兴趣哪类服务？",
                "哪里让人觉得不够可信？",
                "普通陪同和持证讲解区别是否清楚？",
                "价格应该如何设置？",
                "是否愿意推荐给来法国旅游的朋友？",
              ]}
            />
          </div>
        </div>
        <div className="mt-6">
          <QuoteBox label="本次修订结论">
            先做巴黎、先做中文、先做人工确认、先把合规和服务边界讲清楚。这个项目的第一阶段目标不是证明它已经很大，而是证明它真实、有需求、可交付、可合作。
          </QuoteBox>
        </div>
      </PdfPage>
    </PdfShell>
  );
}
