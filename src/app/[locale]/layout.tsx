import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { V3Footer } from "@/components/layout/V3Footer";
import { MobileBottomNavigation, V3Header } from "@/components/layout/V3Header";
import { getMessages } from "@/i18n/request";
import { isLocale, locales, type Locale } from "@/i18n/routing";

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = isLocale(locale) ? locale : "zh-CN";
  const messages = getMessages(safeLocale);

  return {
    title: {
      default: messages.brand.name,
      template: `%s | ${messages.brand.name}`,
    },
    description: messages.brand.tagline,
    alternates: {
      canonical: `/${safeLocale}`,
      languages: Object.fromEntries(locales.map((item) => [item, `/${item}`])),
    },
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const messages = getMessages(locale);

  return (
    <>
      <V3Header locale={locale as Locale} messages={messages} />
      <main>{children}</main>
      <V3Footer locale={locale as Locale} messages={messages} />
      <MobileBottomNavigation locale={locale as Locale} messages={messages} />
    </>
  );
}
