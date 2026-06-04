import type { RewardCatalogItem } from "@/types/rewards";
import { l } from "./helpers";

export const rewardCatalog: RewardCatalogItem[] = [
  {
    id: "reward-priority",
    title: l("限定体验优先报名占位", "限定體驗優先報名佔位", "Priorité événement démo", "Priority access demo"),
    description: l("仅为未来权益草案，正式上线前需法律和合作审核。", "僅為未來權益草案。", "Brouillon soumis à revue.", "Draft benefit subject to review."),
    pointsRequired: 300,
    category: "priority-access",
    demo: true,
    partnerContractRequired: false,
    legalReviewRequired: true,
  },
  {
    id: "reward-community",
    title: l("社区活动优先名额占位", "社區活動優先名額佔位", "Place prioritaire activité", "Community activity priority"),
    description: l("当前不可真实兑换，只展示积分机制。", "目前不可真實兌換。", "Non échangeable en réel.", "Not redeemable for real benefits."),
    pointsRequired: 120,
    category: "community-benefit",
    demo: true,
    partnerContractRequired: false,
    legalReviewRequired: true,
  },
  {
    id: "reward-partner",
    title: l("合作商户欢迎礼占位", "合作商戶歡迎禮佔位", "Avantage partenaire à confirmer", "Partner benefit placeholder"),
    description: l("必须有真实合作和法律审核后才能启用。", "必須有真實合作和法律審核後才能啟用。", "Contrat requis.", "Requires partner contract."),
    pointsRequired: 500,
    category: "partner-benefit-placeholder",
    demo: true,
    partnerContractRequired: true,
    legalReviewRequired: true,
  },
];
