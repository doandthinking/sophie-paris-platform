import type { LocalizedText } from "./service";

export type RentalItem = {
  id: string;
  slug: string;
  title: LocalizedText;
  summary: LocalizedText;
  rentalCategory: "costume" | "stroller" | "wheelchair" | "power-bank" | "umbrella" | "other";
  sizes?: string[];
  rentalPeriodOptions: string[];
  depositRequired: boolean;
  cleaningPolicy: LocalizedText;
  damagePolicy: LocalizedText;
  lateReturnPolicy: LocalizedText;
  pickupMode: "merchant-pickup" | "hotel-delivery-placeholder" | "manual-confirmation";
  merchantId?: string;
  demo: boolean;
};
