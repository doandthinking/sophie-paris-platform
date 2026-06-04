import type { MomentService } from "@/types/momentService";
import { l } from "./helpers";

function moment(id: string, slug: string, title: string, category: MomentService["category"], location: string): MomentService {
  return {
    id,
    slug,
    title: l(title),
    summary: l("DEMO 服务。提交预约需求后人工确认，不收取真实费用，不承诺档期。"),
    category,
    location: l(location),
    fulfillmentMode: "request-only",
    priceLabel: l("价格以合作方确认为准"),
    merchantAgreementRequired: true,
    legalReviewRequired: true,
    demo: true,
  };
}

export const momentServices: MomentService[] = [
  moment("moment-paris-photo", "paris-photo-shoot", "巴黎旅拍", "photo-shoot", "巴黎经典路线"),
  moment("moment-seine-photo", "seine-photo-shoot", "塞纳河旅拍", "photo-shoot", "塞纳河沿岸"),
  moment("moment-montmartre-photo", "montmartre-photo-shoot", "蒙马特旅拍", "photo-shoot", "蒙马特"),
  moment("moment-eiffel-photo", "eiffel-tower-photo-shoot", "埃菲尔铁塔旅拍", "photo-shoot", "Trocadéro / Champ de Mars"),
  moment("moment-versailles", "versailles-theme-photo", "凡尔赛主题旅拍", "photo-shoot", "凡尔赛周边，需规则确认"),
  moment("moment-belle-epoque", "belle-epoque-costume", "Belle Époque 风格", "costume-rental", "合作服装工作室待确认"),
  moment("moment-palace-costume", "palace-costume", "宫廷主题", "costume-rental", "合作服装工作室待确认"),
  moment("moment-evening-dress", "evening-dress", "晚礼服", "costume-rental", "合作服装工作室待确认"),
  moment("moment-kids-costume", "kids-theme-costume", "儿童主题服装", "costume-rental", "合作服装工作室待确认"),
  moment("moment-family-match", "family-matching-outfits", "亲子搭配", "costume-rental", "合作服装工作室待确认"),
  moment("moment-makeup-hair", "makeup-and-hair", "妆发", "makeup-and-hair", "合作妆发工作室待确认"),
  moment("moment-proposal", "proposal-planning", "求婚策划", "proposal", "塞纳河 / 铁塔 / 花园路线"),
  moment("moment-anniversary", "anniversary-memory", "周年纪念", "anniversary", "巴黎纪念日路线"),
  moment("moment-birthday", "birthday-memory", "生日", "anniversary", "巴黎生日体验"),
  moment("moment-family-photo", "family-photo", "家庭亲子照", "family-photo", "亲子友好路线"),
  moment("moment-business-photo", "business-photo", "商务形象照", "business-photo", "商务场景或城市背景"),
];
