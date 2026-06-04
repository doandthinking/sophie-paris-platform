import { defaultLocale, isLocale, type Locale } from "./routing";
import zhCN from "../../messages/zh-CN.json";
import zhTW from "../../messages/zh-TW.json";
import fr from "../../messages/fr.json";
import en from "../../messages/en.json";

const dictionaries = {
  "zh-CN": zhCN,
  "zh-TW": zhTW,
  fr,
  en,
} as const;

export type Messages = typeof zhCN;

export function getMessages(locale: string): Messages {
  return dictionaries[isLocale(locale) ? locale : defaultLocale] as Messages;
}

export function getLocaleOrDefault(locale: string): Locale {
  return isLocale(locale) ? locale : defaultLocale;
}

export function t(messages: Messages, key: string): string {
  return key.split(".").reduce<unknown>((value, part) => {
    if (value && typeof value === "object" && part in value) {
      return (value as Record<string, unknown>)[part];
    }

    return key;
  }, messages) as string;
}
