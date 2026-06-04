import { defaultLocale, locales, type Locale } from "./routing";

export function localizePath(locale: Locale, path = "") {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${cleanPath === "/" ? "" : cleanPath}`;
}

export function stripLocale(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length > 0 && locales.includes(segments[0] as Locale)) {
    return `/${segments.slice(1).join("/")}`;
  }

  return pathname || "/";
}

export function withFallbackLocale(locale?: string) {
  return locales.includes(locale as Locale) ? (locale as Locale) : defaultLocale;
}
