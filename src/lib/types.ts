export type ServiceCategoryId = "museum" | "local" | "professional" | "emergency";

export type ServiceCategory = {
  id: ServiceCategoryId;
  title: string;
  shortTitle: string;
  description: string;
  icon: "landmark" | "hand-heart" | "briefcase" | "shield";
  href: string;
};

export type Service = {
  slug: string;
  category: ServiceCategoryId;
  title: string;
  summary: string;
  description: string;
  duration: string;
  priceRange: string;
  location: string;
  providerType: string;
  qualificationRequired: boolean;
  qualificationLabel: string;
  tags: string[];
  highlights: string[];
  notes: string[];
  heroImage: string;
};

export type BookingRequest = {
  id: string;
  name: string;
  wechat: string;
  city: string;
  service: string;
  date: string;
  people: number;
  budget: string;
  status: "待联系" | "已联系" | "已匹配";
};

export type ProviderApplication = {
  id: string;
  name: string;
  city: string;
  serviceTypes: string[];
  hasGuideCard: boolean;
  hasTransportLicense: boolean;
  languages: string[];
  status: "待审核" | "补充材料" | "可面试";
};
