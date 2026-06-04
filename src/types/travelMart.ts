import type { FulfillmentMode } from "./fulfillment";
import type { LocalizedText } from "./service";

export type TravelMartCategory =
  | "arrival-essentials"
  | "food-and-comfort"
  | "devices-and-charging"
  | "weather"
  | "family"
  | "senior-friendly"
  | "security"
  | "departure"
  | "souvenirs"
  | "photo-and-occasion"
  | "luggage"
  | "connectivity";

export type MartItemType =
  | "physical-product"
  | "digital-product"
  | "rental"
  | "service"
  | "affiliate-redirect"
  | "concierge-request"
  | "official-resource";

export type TravelMartItem = {
  id: string;
  slug: string;
  title: LocalizedText;
  summary: LocalizedText;
  category: TravelMartCategory;
  itemType: MartItemType;
  fulfillmentMode: FulfillmentMode;
  priceMode: "demo-only" | "partner-confirmation" | "starting-from" | "fixed-future";
  priceLabel: LocalizedText;
  merchantId?: string;
  imagePlaceholder: string;
  travelerTags: string[];
  legalReviewRequired: boolean;
  merchantAgreementRequired: boolean;
  stockStatus: "not-applicable" | "unknown" | "partner-confirmation" | "future-live-stock";
  active: boolean;
  demo: boolean;
};

export type TravelMartCategoryMeta = {
  id: TravelMartCategory;
  slug: string;
  title: LocalizedText;
  summary: LocalizedText;
  scenarioLabel: LocalizedText;
  featured: boolean;
};
