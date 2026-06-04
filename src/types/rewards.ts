import type { LocalizedText } from "./service";

export type PointsTransaction = {
  id: string;
  accountId: string;
  type:
    | "booking-completed"
    | "review-published"
    | "review-photo-approved"
    | "referral-completed"
    | "community-event-attended"
    | "product-partner-redirect"
    | "travel-kit-request"
    | "rental-request"
    | "moment-service-request"
    | "merchant-pickup-demo"
    | "manual-adjustment"
    | "refund-reversal"
    | "redemption";
  points: number;
  status: "pending" | "approved" | "rejected" | "reversed";
  createdAt: string;
  referenceId?: string;
  reason: LocalizedText;
};

export type RewardCatalogItem = {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  pointsRequired: number;
  category:
    | "platform-discount"
    | "priority-access"
    | "partner-benefit-placeholder"
    | "community-benefit";
  demo: boolean;
  partnerContractRequired: boolean;
  legalReviewRequired: boolean;
};
