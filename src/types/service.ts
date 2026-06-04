import type {
  ExclusiveStatus,
  FulfillmentType,
  PartnershipStatus,
  ProviderType,
  QualificationRequirement,
  SellerOfRecord,
  ServiceCategory,
} from "./compliance";

export type LocalizedText = {
  "zh-CN": string;
  "zh-TW": string;
  fr: string;
  en: string;
};

export type PricingMode =
  | "starting-from"
  | "range"
  | "quote-required"
  | "partner-confirmation"
  | "demo-only";

export type Service = {
  id: string;
  slug: string;
  category: ServiceCategory;
  title: LocalizedText;
  summary: LocalizedText;
  description: LocalizedText;
  duration: LocalizedText;
  location: LocalizedText;
  audience: LocalizedText;
  pricingMode: PricingMode;
  priceLabel: LocalizedText;
  providerType: ProviderType;
  fulfillmentType: FulfillmentType;
  qualificationRequirement: QualificationRequirement;
  partnershipStatus: PartnershipStatus;
  exclusiveStatus: ExclusiveStatus;
  sellerOfRecord: SellerOfRecord;
  familyFriendly: boolean;
  featured: boolean;
  demo: boolean;
  legalReviewRequired: boolean;
  imagePlaceholder: string;
  notices: LocalizedText[];
};

export function tx(text: LocalizedText, locale: keyof LocalizedText) {
  return text[locale] ?? text["zh-CN"];
}
