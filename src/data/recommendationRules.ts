import type { RecommendationRule } from "@/types/recommendation";

export const recommendationRules: RecommendationRule[] = [
  {
    id: "rec-hotel-arrival",
    trigger: "hotel",
    title: "查看酒店后，你可能还需要",
    reason: "刚到巴黎时，机场接送、落地安心包和联网需求通常一起出现。",
    targets: [
      { type: "service", id: "svc-vtc" },
      { type: "travel-kit", id: "kit-arrival" },
      { type: "travel-mart-item", id: "mart-esim-official-redirect-placeholder" },
    ],
    demo: true,
  },
  {
    id: "rec-cruise-rain-photo",
    trigger: "seine-cruise",
    title: "查看塞纳河游船后，你可能还需要",
    reason: "游船常伴随天气、餐厅和拍照纪念需求。",
    targets: [
      { type: "travel-mart-item", id: "mart-light-raincoat" },
      { type: "travel-kit", id: "kit-photo-memory" },
      { type: "moment-service", id: "moment-seine-photo" },
    ],
    demo: true,
  },
  {
    id: "rec-family-kit",
    trigger: "family-experience",
    title: "查看亲子体验后，你可能还需要",
    reason: "儿童餐厅、婴儿车和儿童雨衣能降低亲子出行压力。",
    targets: [
      { type: "travel-mart-item", id: "mart-family-restaurant-recommendations" },
      { type: "travel-mart-item", id: "mart-stroller-rental-request" },
      { type: "travel-mart-item", id: "mart-kids-raincoat" },
    ],
    demo: true,
  },
  {
    id: "rec-stolen-phone",
    trigger: "stolen-phone",
    title: "手机被偷后，你可能还需要",
    reason: "先处理报警、联网、充电和后续防盗。",
    targets: [
      { type: "travel-kit", id: "kit-stolen-phone" },
      { type: "official-resource", id: "num-17" },
      { type: "travel-mart-item", id: "mart-anti-theft-small-bag" },
    ],
    demo: true,
  },
  {
    id: "rec-museum",
    trigger: "museum",
    title: "查看博物馆后，你可能还需要",
    reason: "博物馆日通常需要持证讲解、附近餐厅和轻装寄存。",
    targets: [
      { type: "service", id: "svc-louvre-certified" },
      { type: "travel-mart-item", id: "mart-luggage-storage-redirect" },
      { type: "travel-mart-item", id: "mart-senior-friendly-restaurant" },
    ],
    demo: true,
  },
  {
    id: "rec-proposal",
    trigger: "proposal",
    title: "查看求婚策划后，你可能还需要",
    reason: "求婚通常关联晚礼服、摄影、妆发和纪念日晚餐。",
    targets: [
      { type: "moment-service", id: "moment-proposal" },
      { type: "moment-service", id: "moment-makeup-hair" },
      { type: "travel-mart-item", id: "mart-folding-umbrella" },
    ],
    demo: true,
  },
  {
    id: "rec-departure",
    trigger: "departure",
    title: "查看离境路线后，你可能还需要",
    reason: "离境前常见需求包括寄存、退税、机场接送和行李称重。",
    targets: [
      { type: "travel-kit", id: "kit-departure" },
      { type: "travel-mart-item", id: "mart-tax-refund-chinese-guide" },
      { type: "travel-mart-item", id: "mart-luggage-scale" },
    ],
    demo: true,
  },
];
