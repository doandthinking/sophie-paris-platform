import type { CommunityEvent } from "@/types/community";

export const communityEvents: CommunityEvent[] = [
  {
    id: "event-seine-sunset",
    slug: "seine-sunset-travelers",
    title: "塞纳河黄昏游船同行",
    summary: "公开场所集合，黄昏游船主题。当前为 DEMO 活动，不开放真实报名。",
    meetingArea: "Tour Eiffel",
    audience: "18 岁以上游客",
    dateLabel: "测试版日期待定",
    tags: ["黄昏", "公开场所", "DEMO"],
    demo: true,
    publicMeetingOnly: true,
  },
  {
    id: "event-montmartre-photo",
    slug: "montmartre-photo-walk",
    title: "蒙马特摄影散步",
    summary: "白天公开路线，适合喜欢拍照和街区探索的成年游客。",
    meetingArea: "Montmartre",
    audience: "18 岁以上游客",
    dateLabel: "测试版日期待定",
    tags: ["摄影散步", "公开场所", "DEMO"],
    demo: true,
    publicMeetingOnly: true,
  },
  {
    id: "event-family-cafe",
    slug: "family-cafe-afternoon",
    title: "巴黎亲子家庭下午茶交流",
    summary: "面向家庭的公开活动占位，不创建儿童档案，不公开儿童信息。",
    meetingArea: "Saint-Germain-des-Prés",
    audience: "家庭，儿童需监护人陪同",
    dateLabel: "测试版日期待定",
    tags: ["亲子", "公开场所", "DEMO"],
    demo: true,
    publicMeetingOnly: true,
  },
  {
    id: "event-language-walk",
    slug: "fr-cn-language-walk",
    title: "中法语言交流散步",
    summary: "文化和语言交流，不是约会或私人陪伴交易平台。",
    meetingArea: "Le Marais",
    audience: "18 岁以上游客",
    dateLabel: "测试版日期待定",
    tags: ["语言交流", "公开场所", "DEMO"],
    demo: true,
    publicMeetingOnly: true,
  },
];

export function getCommunityEvent(slug: string) {
  return communityEvents.find((event) => event.slug === slug);
}
