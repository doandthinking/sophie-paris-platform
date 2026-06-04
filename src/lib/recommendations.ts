import { recommendationRules } from "@/data/recommendationRules";
import type { RecommendationTrigger } from "@/types/recommendation";

export function getRecommendations(trigger: RecommendationTrigger) {
  return recommendationRules.filter((rule) => rule.trigger === trigger);
}

export function getRecommendationsForContext(context: string) {
  const normalized = context.toLowerCase();

  if (normalized.includes("cruise") || normalized.includes("seine") || normalized.includes("游船")) {
    return getRecommendations("seine-cruise");
  }

  if (normalized.includes("family") || normalized.includes("亲子")) {
    return getRecommendations("family-experience");
  }

  if (normalized.includes("phone") || normalized.includes("手机")) {
    return getRecommendations("stolen-phone");
  }

  if (normalized.includes("museum") || normalized.includes("louvre") || normalized.includes("博物馆")) {
    return getRecommendations("museum");
  }

  if (normalized.includes("proposal") || normalized.includes("求婚")) {
    return getRecommendations("proposal");
  }

  if (normalized.includes("departure") || normalized.includes("离境")) {
    return getRecommendations("departure");
  }

  return getRecommendations("hotel");
}
