export type RecommendationTrigger =
  | "hotel"
  | "seine-cruise"
  | "family-experience"
  | "stolen-phone"
  | "museum"
  | "proposal"
  | "departure";

export type RecommendationTargetType = "service" | "travel-mart-item" | "travel-kit" | "moment-service" | "official-resource";

export type RecommendationRule = {
  id: string;
  trigger: RecommendationTrigger;
  title: string;
  reason: string;
  targets: Array<{
    type: RecommendationTargetType;
    id: string;
  }>;
  demo: boolean;
};
