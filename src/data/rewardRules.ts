import type { PointsTransaction } from "@/types/rewards";
import { l } from "./helpers";

export const rewardRules = [
  "完成符合条件的服务：演示为每支付 1 欧元获得 1 分。",
  "提交已核验订单评价：演示为 50 分。",
  "提交真实评价并上传经过审核的体验照片：演示额外 20 分。",
  "成功邀请好友且好友完成首个符合条件的订单：双方演示各 100 分。",
  "参加平台公开兴趣活动并完成签到：演示为 20 分。",
  "商品合作跳转、旅行用品包需求、租赁需求、旅拍服务、商户自取和活动报名可作为未来积分场景，但必须根据合作协议确认。",
  "联盟链接是否奖励积分，需根据合作协议确认。",
  "不奖励五星评价，不奖励正面评价，只允许奖励合规提交的真实评价动作。",
  "紧急帮助不设置积分门槛，不因积分不足而拒绝紧急信息指引。",
  "退款、取消和欺诈订单不得获得积分，已获得积分应冲销。",
  "积分不是现金，不可提现、不可转账，当前不可兑换真实票务、真实商品或真实租赁。",
];

export const demoPointsTransactions: PointsTransaction[] = [
  {
    id: "pts-001",
    accountId: "demo-account",
    type: "booking-completed",
    points: 120,
    status: "pending",
    createdAt: "2026-06-02",
    referenceId: "DEMO-BOOKING-001",
    reason: l("演示：完成符合条件的本地服务", "演示：完成符合條件的本地服務", "Démo : service terminé", "Demo: eligible service completed"),
  },
  {
    id: "pts-002",
    accountId: "demo-account",
    type: "review-published",
    points: 50,
    status: "pending",
    createdAt: "2026-06-02",
    referenceId: "DEMO-REVIEW-001",
    reason: l("演示：提交已核验订单评价", "演示：提交已核驗訂單評價", "Démo : avis publié", "Demo: review submitted"),
  },
  {
    id: "pts-003",
    accountId: "demo-account",
    type: "travel-kit-request",
    points: 10,
    status: "pending",
    createdAt: "2026-06-04",
    referenceId: "DEMO-KIT-REQUEST",
    reason: l("演示：提交旅行用品包需求，未来是否奖励需协议确认"),
  },
  {
    id: "pts-004",
    accountId: "demo-account",
    type: "moment-service-request",
    points: 10,
    status: "pending",
    createdAt: "2026-06-04",
    referenceId: "DEMO-MOMENT-REQUEST",
    reason: l("演示：提交旅拍服务需求，当前不可兑换真实服务"),
  },
];
