import type { Cruise } from "@/types/cruise";
import { l } from "./helpers";

function cruise(id: string, slug: string, title: string, summary: string, recommendedTime: Cruise["recommendedTime"]): Cruise {
  return {
    id,
    slug,
    title: l(title, title, title, title),
    summary: l(summary, summary, summary, summary),
    departurePier: l("待运营方最终确认", "待營運方最終確認", "À confirmer par l'opérateur", "To be confirmed by operator"),
    arrivalAdvice: l("建议至少提前 20-30 分钟到达码头。", "建議至少提前 20-30 分鐘到達碼頭。", "Arriver 20 à 30 minutes en avance.", "Arrive 20-30 minutes early."),
    duration: l("约 1 小时", "約 1 小時", "Environ 1 heure", "About 1 hour"),
    recommendedTime,
    ticketIncluded: false,
    preBoardingChineseAssistance: true,
    liveChineseCommentary: false,
    liveCommentaryRequiresPartnerApproval: true,
    requiresCertifiedGuide: false,
    childTicketNotice: l("儿童票规则以运营方最终确认为准。", "兒童票規則以營運方最終確認為準。", "Tarif enfant selon l'opérateur.", "Child ticket rules confirmed by operator."),
    accessibilityNotice: l("无障碍信息需向运营方确认。", "無障礙資訊需向營運方確認。", "Accessibilité à confirmer.", "Accessibility to confirm."),
    weatherNotice: l("天气、水位、运营变化以运营方通知为准。", "天氣、水位、營運變化以營運方通知為準。", "Météo et navigation selon opérateur.", "Weather and sailing rules confirmed by operator."),
    refundNotice: l("退款、迟到和停航规则以运营方最终确认为准。", "退款、遲到和停航規則以營運方最終確認為準。", "Remboursement selon opérateur.", "Refund rules confirmed by operator."),
    ticketingMode: "request-only",
    sellerOfRecord: "partner",
    partnershipStatus: "demo",
    demo: true,
  };
}

export const cruises = [
  cruise("cruise-classic", "classic-one-hour-seine-cruise", "塞纳河经典一小时游船", "经典观光游船预约意向，不在平台内部出票。", "day"),
  cruise("cruise-sunset", "sunset-seine-cruise-briefing", "塞纳河黄昏游船与中文行前介绍", "黄昏时段意向收集，中文行前提示需运营方确认。", "sunset"),
  cruise("cruise-small-group", "small-group-chinese-culture-seine", "塞纳河小团中文文化体验", "小团主题灵感，船上实时中文讲解需合作方批准。", "flexible"),
  cruise("cruise-family", "family-seine-discovery", "塞纳河亲子发现之旅", "亲子友好说明与登船前中文提醒。", "day"),
  cruise("cruise-night", "night-seine-architecture", "塞纳河夜景与巴黎建筑主题体验", "夜景和建筑主题预约意向。", "night"),
  cruise("cruise-private", "private-small-group-consultation", "塞纳河私人小团合作咨询", "私人小团合作和运营规则待确认。", "flexible"),
  cruise("cruise-official-ticket-help", "official-ticketing-assistance-placeholder", "塞纳河游船官方票务预约协助", "合作方官方链接即将上线，当前仅保留咨询入口。", "flexible"),
] satisfies Cruise[];

export function getCruise(slug: string) {
  return cruises.find((item) => item.slug === slug);
}
