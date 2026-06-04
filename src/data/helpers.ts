import type { LocalizedText } from "@/types/service";

export function l(zhCN: string, zhTW?: string, fr?: string, en?: string): LocalizedText {
  return {
    "zh-CN": zhCN,
    "zh-TW": zhTW ?? zhCN,
    fr: fr ?? zhCN,
    en: en ?? zhCN,
  };
}

export const placeholderImage = "/images/paris-local-placeholder.svg";
