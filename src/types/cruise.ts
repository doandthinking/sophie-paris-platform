import type { PartnershipStatus, SellerOfRecord } from "./compliance";
import type { LocalizedText } from "./service";

export type Cruise = {
  id: string;
  slug: string;
  title: LocalizedText;
  summary: LocalizedText;
  departurePier: LocalizedText;
  arrivalAdvice: LocalizedText;
  duration: LocalizedText;
  recommendedTime: "day" | "sunset" | "night" | "flexible";
  ticketIncluded: boolean;
  preBoardingChineseAssistance: boolean;
  liveChineseCommentary: boolean;
  liveCommentaryRequiresPartnerApproval: boolean;
  requiresCertifiedGuide: boolean;
  childTicketNotice: LocalizedText;
  accessibilityNotice: LocalizedText;
  weatherNotice: LocalizedText;
  refundNotice: LocalizedText;
  ticketingMode:
    | "request-only"
    | "partner-redirect-placeholder"
    | "partner-redirect"
    | "manual-voucher"
    | "api-integration"
    | "legal-review-required";
  sellerOfRecord: SellerOfRecord;
  partnershipStatus: PartnershipStatus;
  demo: boolean;
};
