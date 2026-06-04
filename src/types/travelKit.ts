import type { LocalizedText } from "./service";

export type TravelKit = {
  id: string;
  slug: string;
  title: LocalizedText;
  summary: LocalizedText;
  scenario:
    | "arrival"
    | "stolen-phone"
    | "family"
    | "rainy-day"
    | "chinese-comfort-food"
    | "senior-friendly"
    | "photo-memory"
    | "departure";
  includedItemIds: string[];
  recommendedServiceIds: string[];
  officialResourceIds: string[];
  fulfillmentMode:
    | "content-only"
    | "concierge-request"
    | "mixed-partner-fulfillment"
    | "direct-commerce-future";
  legalReviewRequired: boolean;
  demo: boolean;
};
