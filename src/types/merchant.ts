import type { FulfillmentMode } from "./fulfillment";

export type MerchantType =
  | "asian-grocery"
  | "convenience-store"
  | "travel-essentials"
  | "luggage-storage"
  | "costume-rental"
  | "photo-studio"
  | "beauty-service"
  | "family-rental"
  | "mobility-rental"
  | "laundry"
  | "souvenir-store"
  | "delivery-partner"
  | "other";

export type Merchant = {
  id: string;
  name: string;
  type: MerchantType;
  destinationId: string;
  district: string;
  fulfillmentModes: FulfillmentMode[];
  partnershipStatus: "demo" | "research" | "contact-planned" | "contacted" | "pilot-discussion" | "partner";
  imageRightsStatus: "not-requested" | "requested" | "approved" | "rejected";
  legalReviewRequired: boolean;
  demo: boolean;
};
