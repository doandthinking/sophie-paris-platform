import type { TravelMartCategory, TravelMartItem, MartItemType } from "@/types/travelMart";
import type { FulfillmentMode } from "@/types/fulfillment";
import { l, placeholderImage } from "./helpers";

type Seed = {
  slug: string;
  title: string;
  summary: string;
  category: TravelMartCategory;
  itemType?: MartItemType;
  fulfillmentMode?: FulfillmentMode;
  tags?: string[];
  merchantId?: string;
};

function item(seed: Seed): TravelMartItem {
  return {
    id: `mart-${seed.slug}`,
    slug: seed.slug,
    title: l(seed.title),
    summary: l(seed.summary),
    category: seed.category,
    itemType: seed.itemType ?? "physical-product",
    fulfillmentMode: seed.fulfillmentMode ?? "concierge-request",
    priceMode: "partner-confirmation",
    priceLabel: l("价格以合作方确认为准"),
    merchantId: seed.merchantId,
    imagePlaceholder: placeholderImage,
    travelerTags: seed.tags ?? ["DEMO", "人工确认"],
    legalReviewRequired: true,
    merchantAgreementRequired: true,
    stockStatus: "partner-confirmation",
    active: true,
    demo: true,
  };
}

export const travelMartItems: TravelMartItem[] = [
  item({
    slug: "eu-plug-adapter",
    title: "EU 标准转换插头",
    summary: "刚到巴黎常见需求。MVP 仅收集需求，不承诺库存。",
    category: "arrival-essentials",
    tags: ["刚到巴黎", "设备和充电"],
    merchantId: "merchant-demo-travel-essentials",
  }),
  item({
    slug: "usb-c-cable",
    title: "USB-C 充电线",
    summary: "手机、相机或充电宝应急线材需求。",
    category: "devices-and-charging",
    tags: ["手机应急", "设备和充电"],
    merchantId: "merchant-demo-travel-essentials",
  }),
  item({
    slug: "lightning-cable",
    title: "Lightning 充电线",
    summary: "旧款 iPhone 用户的线材补给占位。",
    category: "devices-and-charging",
    tags: ["手机应急", "设备和充电"],
    merchantId: "merchant-demo-travel-essentials",
  }),
  item({
    slug: "power-bank-purchase-request",
    title: "充电宝购买请求",
    summary: "人工确认需求，不展示真实库存或价格。",
    category: "devices-and-charging",
    itemType: "concierge-request",
    tags: ["手机应急", "人工确认"],
    merchantId: "merchant-demo-travel-essentials",
  }),
  item({
    slug: "power-bank-rental-request",
    title: "充电宝租赁请求",
    summary: "租赁占位，不收押金，不承诺归还点。",
    category: "devices-and-charging",
    itemType: "rental",
    tags: ["租赁", "手机应急"],
    merchantId: "merchant-demo-travel-essentials",
  }),
  item({
    slug: "sim-eject-pin",
    title: "SIM 卡取卡针",
    summary: "更换 SIM 或处理手机应急时的基础小物。",
    category: "connectivity",
    tags: ["联网", "手机应急"],
    merchantId: "merchant-demo-travel-essentials",
  }),
  item({
    slug: "esim-official-redirect-placeholder",
    title: "eSIM 官方合作跳转占位",
    summary: "未来合作跳转占位，不伪造联盟链接或积分奖励。",
    category: "connectivity",
    itemType: "affiliate-redirect",
    fulfillmentMode: "affiliate-redirect-placeholder",
    tags: ["联网", "合作洽谈中"],
  }),
  item({
    slug: "phone-lanyard",
    title: "手机挂绳",
    summary: "用于降低手机掉落或被抢风险的旅行用品需求。",
    category: "security",
    tags: ["防盗", "手机应急"],
    merchantId: "merchant-demo-travel-essentials",
  }),
  item({
    slug: "anti-theft-small-bag",
    title: "防盗小包",
    summary: "逛博物馆、地铁和热门景点时的防盗用品需求。",
    category: "security",
    tags: ["防盗", "巴黎安全"],
    merchantId: "merchant-demo-travel-essentials",
  }),
  item({
    slug: "luggage-lock",
    title: "行李锁",
    summary: "酒店、寄存和离境场景的基础行李用品。",
    category: "luggage",
    tags: ["离境", "行李"],
    merchantId: "merchant-demo-travel-essentials",
  }),
  item({
    slug: "paris-transport-chinese-guide",
    title: "巴黎交通中文指南",
    summary: "地铁、RER、公交和机场交通中文流程说明。",
    category: "arrival-essentials",
    itemType: "digital-product",
    fulfillmentMode: "content-only",
    tags: ["刚到巴黎", "交通"],
  }),
  item({
    slug: "emergency-number-card",
    title: "紧急号码卡片",
    summary: "112、17、15、18、114 等紧急号码中文提示卡。",
    category: "arrival-essentials",
    itemType: "digital-product",
    fulfillmentMode: "content-only",
    tags: ["安心巴黎", "紧急帮助"],
  }),

  item({ slug: "instant-noodle-comfort-kit", title: "泡面安心包", summary: "中国胃应急补给包占位，不销售酒精或受监管产品。", category: "food-and-comfort", tags: ["中国胃"], merchantId: "merchant-demo-asian-grocery" }),
  item({ slug: "asian-snack-kit", title: "亚洲零食包", summary: "亚洲零食需求收集，具体品牌和过敏原待合作方确认。", category: "food-and-comfort", tags: ["吃喝补给"], merchantId: "merchant-demo-asian-grocery" }),
  item({ slug: "bottled-water", title: "瓶装水", summary: "瓶装水需求占位，不承诺配送时间。", category: "food-and-comfort", tags: ["吃喝补给"], merchantId: "merchant-demo-asian-grocery" }),
  item({ slug: "hot-drink-supply", title: "热饮补给", summary: "热饮或冲泡饮品需求，食品标签和过敏原需审核。", category: "food-and-comfort", tags: ["中国胃", "冬天"], merchantId: "merchant-demo-asian-grocery" }),
  item({ slug: "kids-snacks", title: "儿童零食", summary: "儿童零食需求占位，过敏原、年龄适用和标签需合作方确认。", category: "family", tags: ["亲子"], merchantId: "merchant-demo-asian-grocery" }),
  item({ slug: "tissues-and-wipes", title: "纸巾和湿纸巾", summary: "亲子、雨天和长途出行常用基础用品。", category: "food-and-comfort", tags: ["亲子", "吃喝补给"], merchantId: "merchant-demo-travel-essentials" }),
  item({ slug: "basic-toiletries", title: "基础洗漱用品", summary: "牙刷、牙膏、洗漱补给需求占位。", category: "food-and-comfort", tags: ["刚到巴黎"], merchantId: "merchant-demo-travel-essentials" }),
  item({ slug: "disposable-slippers", title: "一次性拖鞋", summary: "酒店或长途旅行舒适用品需求占位。", category: "food-and-comfort", tags: ["长辈友好"], merchantId: "merchant-demo-travel-essentials" }),
  item({ slug: "disposable-tableware", title: "一次性餐具", summary: "亲子或酒店简单用餐用品需求占位。", category: "food-and-comfort", tags: ["亲子", "中国胃"], merchantId: "merchant-demo-travel-essentials" }),

  item({ slug: "folding-umbrella", title: "折叠伞", summary: "巴黎雨天应急用品，库存待合作方确认。", category: "weather", tags: ["雨天应对"], merchantId: "merchant-demo-travel-essentials" }),
  item({ slug: "light-raincoat", title: "轻便雨衣", summary: "游船、排队和户外活动雨天占位。", category: "weather", tags: ["雨天应对", "塞纳河游船"], merchantId: "merchant-demo-travel-essentials" }),
  item({ slug: "kids-raincoat", title: "儿童雨衣", summary: "亲子雨天出行用品，尺码和库存待确认。", category: "family", tags: ["亲子", "雨天应对"], merchantId: "merchant-demo-family-rental" }),
  item({ slug: "shoe-covers", title: "鞋套", summary: "雨天和摄影场景用品占位。", category: "weather", tags: ["雨天应对"], merchantId: "merchant-demo-travel-essentials" }),
  item({ slug: "small-towel", title: "小毛巾", summary: "雨天、亲子和长辈场景常用小物。", category: "weather", tags: ["雨天应对"], merchantId: "merchant-demo-travel-essentials" }),
  item({ slug: "heat-patches", title: "暖宝宝", summary: "冬天应急保暖用品，适用说明和安全提示需审核。", category: "weather", tags: ["冬天", "长辈友好"], merchantId: "merchant-demo-travel-essentials" }),
  item({ slug: "gloves", title: "手套", summary: "冬季游船和户外路线保暖用品需求。", category: "weather", tags: ["冬天"], merchantId: "merchant-demo-travel-essentials" }),
  item({ slug: "scarf", title: "围巾", summary: "冬季保暖用品需求，颜色和库存待确认。", category: "weather", tags: ["冬天"], merchantId: "merchant-demo-travel-essentials" }),

  item({ slug: "stroller-rental-request", title: "婴儿车租赁请求", summary: "仅收集租赁需求，不收押金，不承诺库存。", category: "family", itemType: "rental", tags: ["亲子", "租赁"], merchantId: "merchant-demo-family-rental" }),
  item({ slug: "child-seat-transfer-request", title: "儿童安全座椅接送需求", summary: "涉及车辆时仅匹配合法 VTC/taxi/transport professionnel。", category: "family", itemType: "service", tags: ["亲子", "合法车辆"], merchantId: "merchant-demo-family-rental" }),
  item({ slug: "kids-tableware", title: "儿童餐具", summary: "儿童餐具需求占位，库存待合作方确认。", category: "family", tags: ["亲子"], merchantId: "merchant-demo-travel-essentials" }),
  item({ slug: "family-restaurant-recommendations", title: "亲子餐厅推荐", summary: "内容和合作位占位，不生成真实餐厅预订。", category: "family", itemType: "service", fulfillmentMode: "content-only", tags: ["亲子", "餐厅"] }),
  item({ slug: "family-route", title: "亲子路线", summary: "亲子节奏路线推荐，可加入我的巴黎行程。", category: "family", itemType: "service", fulfillmentMode: "content-only", tags: ["亲子", "路线"] }),

  item({ slug: "wheelchair-rental-request", title: "轮椅租赁请求", summary: "轮椅租赁需求占位，不收押金，不承诺库存。", category: "senior-friendly", itemType: "rental", tags: ["长辈友好", "租赁"], merchantId: "merchant-demo-mobility" }),
  item({ slug: "walking-cane-request", title: "手杖购买请求", summary: "长辈友好用品需求，库存待合作方确认。", category: "senior-friendly", tags: ["长辈友好"], merchantId: "merchant-demo-mobility" }),
  item({ slug: "slow-pace-route", title: "慢节奏路线", summary: "适合长辈、亲子或体力有限游客的内容占位。", category: "senior-friendly", itemType: "service", fulfillmentMode: "content-only", tags: ["长辈友好", "路线"] }),
  item({ slug: "senior-friendly-restaurant", title: "长辈友好餐厅", summary: "安静、座位舒适、沟通友好的餐厅推荐占位。", category: "senior-friendly", itemType: "service", fulfillmentMode: "content-only", tags: ["长辈友好", "餐厅"] }),
  item({ slug: "accessible-route", title: "无障碍路线", summary: "无障碍路线内容占位，正式上线前需核验实际通行性。", category: "senior-friendly", itemType: "service", fulfillmentMode: "content-only", tags: ["长辈友好", "无障碍"] }),
  item({ slug: "legal-vehicle-request", title: "合法车辆需求", summary: "仅由合法 VTC/taxi/transport professionnel 提供。", category: "senior-friendly", itemType: "service", tags: ["合法车辆", "长辈友好"] }),
  item({ slug: "pharmacy-language-assist", title: "药房语言协助", summary: "药房沟通语言协助，不销售药品，不替代医生。", category: "senior-friendly", itemType: "service", tags: ["药房", "语言协助"] }),

  item({ slug: "luggage-storage-redirect", title: "行李寄存合作跳转", summary: "合作跳转占位，不伪造合作，不生成真实订单。", category: "departure", itemType: "affiliate-redirect", fulfillmentMode: "partner-redirect-placeholder", tags: ["离境", "行李"], merchantId: "merchant-demo-luggage" }),
  item({ slug: "luggage-delivery-request", title: "行李配送请求", summary: "未来合法配送占位，不承诺配送时间。", category: "departure", itemType: "concierge-request", fulfillmentMode: "hotel-front-desk-delivery-placeholder", tags: ["离境", "配送待确认"], merchantId: "merchant-demo-luggage" }),
  item({ slug: "luggage-scale", title: "行李秤", summary: "离境前称重需求，库存待合作方确认。", category: "departure", tags: ["离境", "行李"], merchantId: "merchant-demo-travel-essentials" }),
  item({ slug: "packing-supplies", title: "打包用品", summary: "胶带、保护袋等离境打包需求占位。", category: "departure", tags: ["离境"], merchantId: "merchant-demo-travel-essentials" }),
  item({ slug: "tax-refund-chinese-guide", title: "退税中文指南", summary: "退税流程中文说明，不替代商家、海关或税务机构规则。", category: "departure", itemType: "digital-product", fulfillmentMode: "content-only", tags: ["离境", "退税"] }),
  item({ slug: "airport-transfer-request", title: "机场接送需求", summary: "仅由合法 VTC/taxi/transport professionnel 提供。", category: "departure", itemType: "service", tags: ["离境", "合法车辆"] }),
  item({ slug: "last-half-day-route", title: "最后半日路线", summary: "适合离境前半天的轻量路线内容占位。", category: "departure", itemType: "service", fulfillmentMode: "content-only", tags: ["离境", "路线"] }),
  item({ slug: "souvenir-delivery-request", title: "纪念品配送请求", summary: "未来合作占位，不承诺配送，不生成真实订单。", category: "souvenirs", itemType: "concierge-request", fulfillmentMode: "hotel-front-desk-delivery-placeholder", tags: ["纪念品", "配送待确认"] }),
];
