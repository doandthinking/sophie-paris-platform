import type {
  BookingRequest,
  ProviderApplication,
  Service,
  ServiceCategory,
} from "./types";

export const serviceCategories: ServiceCategory[] = [
  {
    id: "museum",
    title: "博物馆专区",
    shortTitle: "博物馆",
    description:
      "卢浮宫、奥赛、凡尔赛等文化场馆的中文讲解，仅匹配持法国 guide-conférencier 专业卡的服务者。",
    icon: "landmark",
    href: "/services#museum",
  },
  {
    id: "local",
    title: "本地陪同",
    shortTitle: "陪同",
    description:
      "陪吃法餐、购物退税、公共交通、亲子活动等生活协助，不以专业导游讲解名义提供。",
    icon: "hand-heart",
    href: "/services#local",
  },
  {
    id: "professional",
    title: "专业服务",
    shortTitle: "专业",
    description:
      "合法 VTC/taxi 协调、正式翻译陪同、商务接待协助等需要额外资质或专业经验的服务。",
    icon: "briefcase",
    href: "/services#professional",
  },
  {
    id: "emergency",
    title: "紧急帮助",
    shortTitle: "紧急",
    description:
      "护照丢失、手机被偷、报警翻译、医院药房沟通等中文应急协助，优先快速响应。",
    icon: "shield",
    href: "/services#emergency",
  },
];

export const services: Service[] = [
  {
    slug: "louvre-certified-mandarin-guide",
    category: "museum",
    title: "卢浮宫持证中文精华讲解",
    summary: "2-3 小时中文路线，聚焦卢浮宫经典馆藏与历史脉络。",
    description:
      "适合第一次来巴黎、想高效看懂卢浮宫的游客。平台仅匹配持有法国 carte professionnelle de guide-conférencier 的中文讲解员，路线可围绕三大镇馆之宝、法国绘画、古希腊与埃及馆藏做轻度定制。",
    duration: "2-3 小时",
    priceRange: "€180-€360 / 团",
    location: "卢浮宫 Musée du Louvre",
    providerType: "持证中文 guide-conférencier",
    qualificationRequired: true,
    qualificationLabel: "必须持有法国 guide-conférencier 专业卡",
    tags: ["持证讲解", "中文", "亲子友好", "可小团"],
    highlights: ["中文讲解", "可亲子路线", "可协助确认集合点", "不销售组合旅行套餐"],
    notes: [
      "门票需按博物馆规则单独确认，MVP 阶段不做机票、酒店或旅行套餐销售。",
      "博物馆、Musée de France 与 monuments historiques 的收费讲解只由持证人员提供。",
      "实际可约时间取决于讲解员档期与博物馆开放安排。",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1566139887456-325a6d5ac60f?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "orsay-certified-mandarin-guide",
    category: "museum",
    title: "奥赛博物馆印象派中文讲解",
    summary: "看懂莫奈、雷诺阿、梵高与奥赛建筑故事。",
    description:
      "适合喜欢印象派和近代艺术的游客。服务者需持法国 guide-conférencier 专业卡，可按成人、亲子或艺术入门需求调整节奏。",
    duration: "2 小时",
    priceRange: "€160-€320 / 团",
    location: "奥赛博物馆 Musée d'Orsay",
    providerType: "持证中文 guide-conférencier",
    qualificationRequired: true,
    qualificationLabel: "必须持有法国 guide-conférencier 专业卡",
    tags: ["印象派", "持证讲解", "中文", "艺术入门"],
    highlights: ["印象派重点作品", "小团体验", "适合初次看展", "可按兴趣调整"],
    notes: [
      "博物馆内商业讲解只匹配持证讲解员。",
      "门票、闭馆日和临展政策需在预约前确认。",
      "如需深度艺术史路线，可在备注中说明。",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1583265627959-fb7042f5133b?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "french-dining-companion",
    category: "local",
    title: "法餐陪同与点餐协助",
    summary: "从预约、菜单解释到餐桌礼仪，让第一顿法餐更轻松。",
    description:
      "适合第一次在巴黎吃正式法餐、担心语言和礼仪的游客。本服务属于本地生活陪同和翻译协助，不提供博物馆或古迹专业导游讲解。",
    duration: "2-3 小时",
    priceRange: "€60-€150 / 次，不含餐费",
    location: "巴黎市区餐厅，可按预算筛选",
    providerType: "本地中文陪同 / 生活协助者",
    qualificationRequired: false,
    qualificationLabel: "无需 guide-conférencier 专业卡，但需通过身份与服务审核",
    tags: ["法餐", "点餐", "生活协助", "中文陪同"],
    highlights: ["协助预约", "解释菜单", "沟通忌口", "用餐流程提醒"],
    notes: [
      "服务不包含餐费，不承诺餐厅一定有座位。",
      "陪同者不是专业导游，不在博物馆或历史古迹内进行收费讲解。",
      "如涉及高端餐厅订位，可能需要提前较长时间确认。",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "shopping-tax-refund-helper",
    category: "local",
    title: "购物与退税流程陪同",
    summary: "陪同逛商场、沟通尺码库存，协助理解退税步骤。",
    description:
      "适合计划在巴黎购物但不熟悉法语、退税单和机场流程的游客。陪同者可帮助沟通与说明流程，但不代替游客做财务或法律决定。",
    duration: "3-4 小时",
    priceRange: "€90-€220 / 次",
    location: "老佛爷、春天百货、Le Bon Marché、香街周边",
    providerType: "本地中文陪同 / 购物协助者",
    qualificationRequired: false,
    qualificationLabel: "无需 guide-conférencier 专业卡，但需通过身份与服务审核",
    tags: ["购物", "退税", "翻译陪同", "商场路线"],
    highlights: ["沟通尺码库存", "解释退税单", "规划商场路线", "提醒防盗与保管"],
    notes: [
      "不代购、不保管游客证件、现金或贵重物品。",
      "退税结果由商家、海关和退税机构规则决定。",
      "如涉及车辆移动，只能安排合法 VTC/taxi/transport professionnel。",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "paris-metro-first-day",
    category: "local",
    title: "巴黎公共交通上手陪同",
    summary: "机场到市区后，快速熟悉地铁、公交、买票和安全注意事项。",
    description:
      "适合第一次到巴黎、带老人或孩子、不想第一天就被交通系统消耗的游客。本服务提供生活协助和路线说明，不属于车辆接送。",
    duration: "1.5-2 小时",
    priceRange: "€45-€120 / 次",
    location: "巴黎市区地铁站、酒店周边、主要换乘点",
    providerType: "本地中文陪同 / 城市生活协助者",
    qualificationRequired: false,
    qualificationLabel: "无需 guide-conférencier 专业卡，但需通过身份与服务审核",
    tags: ["交通", "新手游客", "亲子", "安全提醒"],
    highlights: ["购票说明", "换乘演示", "常见诈骗提醒", "酒店周边熟悉"],
    notes: [
      "不提供有偿载客服务。",
      "如游客需要汽车接送，平台只匹配合法 VTC/taxi/transport professionnel。",
      "公共交通运营情况以当日 RATP/SNCF 信息为准。",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1508050919630-b135583b29ab?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "licensed-vtc-coordination",
    category: "professional",
    title: "合法 VTC / taxi 接送协调",
    summary: "为机场、酒店、景点之间的移动协调合法职业司机。",
    description:
      "适合带老人孩子、行李较多或需要固定价格接送的游客。平台只对接合法 VTC、taxi 或 transport professionnel，不允许普通陪同者有偿开车载客。",
    duration: "按路线确认",
    priceRange: "按路线报价",
    location: "CDG、ORY、巴黎市区、迪士尼、凡尔赛等",
    providerType: "合法 VTC / taxi / transport professionnel",
    qualificationRequired: true,
    qualificationLabel: "必须具备 VTC/taxi/职业载客资质与相应保险",
    tags: ["接送", "VTC", "taxi", "家庭出行"],
    highlights: ["路线报价", "司机资质审核", "行李与儿童座椅备注", "中文客服协调"],
    notes: [
      "MVP 阶段仅做预约撮合，不在页面内完成支付。",
      "车辆服务只能由合法 VTC/taxi/transport professionnel 提供。",
      "儿童座椅、超大行李、夜间服务需提前备注。",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "emergency-chinese-help",
    category: "emergency",
    title: "巴黎紧急中文协助",
    summary: "护照丢失、手机被偷、报警、医院药房沟通的中文协助。",
    description:
      "适合旅途中突发情况需要中文沟通支持的游客。平台协助匹配可响应的中文服务者，必要时引导游客联系官方机构、使领馆、警局、医院或保险方。",
    duration: "按情况确认",
    priceRange: "€50 起，紧急情况按响应时段报价",
    location: "巴黎市区，可线上或线下协助",
    providerType: "中文应急协助者 / 翻译陪同者",
    qualificationRequired: false,
    qualificationLabel: "一般协助无需 guide-conférencier 专业卡；医疗、法律等事项需转介专业机构",
    tags: ["紧急", "翻译", "报警", "医院药房"],
    highlights: ["快速确认情况", "中文沟通", "官方渠道提醒", "可线上先响应"],
    notes: [
      "平台不替代警察、医院、律师、保险公司或使领馆。",
      "涉及法律、医疗判断时，应以官方机构和专业人士意见为准。",
      "如需线下陪同，会根据时间、地点和服务者可用性确认。",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?auto=format&fit=crop&w=1400&q=80",
  },
];

export const mockBookingRequests: BookingRequest[] = [
  {
    id: "REQ-1001",
    name: "林女士",
    wechat: "lin_paris_trip",
    city: "巴黎",
    service: "卢浮宫持证中文精华讲解",
    date: "2026-06-18",
    people: 3,
    budget: "€250-€350",
    status: "待联系",
  },
  {
    id: "REQ-1002",
    name: "周先生",
    wechat: "zhou-family",
    city: "巴黎",
    service: "法餐陪同与点餐协助",
    date: "2026-07-02",
    people: 4,
    budget: "€120 左右",
    status: "已联系",
  },
  {
    id: "REQ-1003",
    name: "陈同学",
    wechat: "chen_help",
    city: "巴黎",
    service: "巴黎紧急中文协助",
    date: "2026-06-01",
    people: 1,
    budget: "尽快报价",
    status: "已匹配",
  },
];

export const mockProviderApplications: ProviderApplication[] = [
  {
    id: "PRO-2001",
    name: "Mia L.",
    city: "巴黎",
    serviceTypes: ["博物馆讲解", "亲子路线"],
    hasGuideCard: true,
    hasTransportLicense: false,
    languages: ["中文", "法语", "英语"],
    status: "可面试",
  },
  {
    id: "PRO-2002",
    name: "Alex W.",
    city: "巴黎",
    serviceTypes: ["法餐陪同", "购物退税", "公共交通协助"],
    hasGuideCard: false,
    hasTransportLicense: false,
    languages: ["中文", "法语"],
    status: "待审核",
  },
  {
    id: "PRO-2003",
    name: "Paris Ride Pro",
    city: "巴黎",
    serviceTypes: ["VTC 接送", "机场接送"],
    hasGuideCard: false,
    hasTransportLicense: true,
    languages: ["中文", "法语", "英语"],
    status: "补充材料",
  },
];

export function getCategory(categoryId: string) {
  return serviceCategories.find((category) => category.id === categoryId);
}

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
