export type ReviewSource =
  | "demo"
  | "verified-platform-booking"
  | "historical-client-authorized"
  | "partner-authorized-import";

export type Review = {
  id: string;
  source: ReviewSource;
  bookingId?: string;
  serviceId?: string;
  authorDisplayName: string;
  authorAvatarPlaceholder?: string;
  travelerType: "solo" | "couple" | "family" | "friends" | "business" | "other";
  locale: "zh-CN" | "zh-TW" | "fr" | "en";
  rating?: number;
  title: string;
  content: string;
  photos?: string[];
  verifiedBooking: boolean;
  consentToPublish: boolean;
  incentiveDisclosure?: string;
  moderationStatus: "pending" | "approved" | "rejected" | "needs-redaction";
  createdAt: string;
  updatedAt?: string;
  rejectionReason?: string;
};
