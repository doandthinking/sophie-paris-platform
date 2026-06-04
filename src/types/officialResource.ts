import type { LocalizedText } from "./service";

export type OfficialResource = {
  id: string;
  category:
    | "emergency-number"
    | "police"
    | "lost-property"
    | "transport"
    | "medical"
    | "consular"
    | "victim-support"
    | "bank-card"
    | "other";
  title: LocalizedText;
  description: LocalizedText;
  sourceOrganization: string;
  sourceDomain: string;
  url: string;
  phone?: string;
  verifiedAt: string;
  verificationIntervalDays: number;
  manualVerificationRequiredBeforeLaunch: boolean;
  active: boolean;
};
