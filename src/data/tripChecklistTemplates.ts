import type { TripChecklistTemplate } from "@/types/tripBoard";

export const tripChecklistTemplates: TripChecklistTemplate[] = [
  { id: "tpl-before", title: "出发前", scenario: "before-departure", items: ["确认护照和签证", "准备银行卡和少量欧元现金", "保存紧急联系人", "下载交通和地图工具"] },
  { id: "tpl-arrival", title: "抵达巴黎当天", scenario: "arrival-day", items: ["确认机场到酒店方式", "不要公开酒店房间号", "检查手机联网", "保存 112 / 17 / 15"] },
  { id: "tpl-museum", title: "博物馆日", scenario: "museum-day", items: ["确认门票或预约", "确认是否需要持证讲解", "准备轻便包", "确认附近餐厅或寄存点"] },
  { id: "tpl-cruise", title: "游船日", scenario: "cruise-day", items: ["确认登船地点", "提前到达", "雨天带雨衣或伞", "确认儿童和长辈需求"] },
  { id: "tpl-family", title: "亲子日", scenario: "family-day", items: ["准备儿童零食", "确认厕所和休息点", "检查儿童雨衣或婴儿车", "控制路线长度"] },
  { id: "tpl-rainy", title: "雨天", scenario: "rainy-day", items: ["准备雨伞或雨衣", "选择室内路线", "保护手机和鞋子", "延后户外旅拍"] },
  { id: "tpl-departure", title: "离境前", scenario: "before-departure-from-paris", items: ["确认退税", "确认行李重量", "确认机场接送", "保留足够交通时间"] },
  { id: "tpl-phone", title: "手机遗失", scenario: "lost-phone", items: ["先保证人身安全", "联系同行和家人", "报警或报失", "处理银行卡和账号安全"] },
  { id: "tpl-passport", title: "护照遗失", scenario: "lost-passport", items: ["确认是否遗失或被盗", "报警或报失", "联系中国使领馆官方渠道", "避免公开敏感证件信息"] },
];
