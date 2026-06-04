import type { LocalizedText } from "./service";

export type FulfillmentMode =
  | "content-only"
  | "concierge-request"
  | "merchant-pickup"
  | "hotel-front-desk-delivery-placeholder"
  | "partner-redirect-placeholder"
  | "affiliate-redirect-placeholder"
  | "digital-delivery-future"
  | "direct-commerce-future-legal-review";

export type FulfillmentMethod = {
  id: string;
  mode:
    | "merchant-pickup"
    | "hotel-front-desk-delivery-placeholder"
    | "district-delivery-placeholder"
    | "digital-redirect"
    | "official-partner-redirect"
    | "manual-concierge";
  label: LocalizedText;
  description: LocalizedText;
  requiresMerchantAgreement: boolean;
  requiresLegalReview: boolean;
  requiresHotelPolicyConfirmation: boolean;
  demo: boolean;
};
