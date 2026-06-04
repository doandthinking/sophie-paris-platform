import type { LocalizedText } from "./service";

export type MomentServiceCategory =
  | "photo-shoot"
  | "costume-rental"
  | "makeup-and-hair"
  | "proposal"
  | "anniversary"
  | "family-photo"
  | "business-photo";

export type MomentService = {
  id: string;
  slug: string;
  title: LocalizedText;
  summary: LocalizedText;
  category: MomentServiceCategory;
  location: LocalizedText;
  fulfillmentMode: "request-only" | "partner-confirmation" | "future-direct-booking";
  priceLabel: LocalizedText;
  merchantAgreementRequired: boolean;
  legalReviewRequired: boolean;
  demo: boolean;
};
