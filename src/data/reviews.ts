import type { Review } from "@/types/review";

export const reviews: Review[] = [
  {
    id: "review-demo-001",
    source: "demo",
    serviceId: "svc-louvre-certified",
    authorDisplayName: "DEMO 游客 A",
    travelerType: "family",
    locale: "zh-CN",
    title: "真实评价展示占位",
    content: "真实游客评价将在完成首批服务并获得授权后展示。此卡片不计入评分统计。",
    verifiedBooking: false,
    consentToPublish: false,
    incentiveDisclosure: "DEMO 示例，不代表真实评价。",
    moderationStatus: "approved",
    createdAt: "2026-06-02",
  },
  {
    id: "review-demo-002",
    source: "demo",
    serviceId: "svc-french-dining",
    authorDisplayName: "DEMO Traveler B",
    travelerType: "solo",
    locale: "en",
    title: "Demo review structure",
    content: "This illustrates the review component only. Real reviews require consent and moderation.",
    verifiedBooking: false,
    consentToPublish: false,
    incentiveDisclosure: "DEMO only.",
    moderationStatus: "pending",
    createdAt: "2026-06-02",
  },
];
