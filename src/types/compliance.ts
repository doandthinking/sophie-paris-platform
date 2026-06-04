export type ServiceCategory =
  | "signature"
  | "certified-cultural-tour"
  | "seine-cruise"
  | "local-assistance"
  | "professional-service"
  | "emergency-assistance"
  | "community-event";

export type ProviderType =
  | "certified-guide"
  | "local-assistant"
  | "licensed-driver"
  | "partner-operator"
  | "professional-service"
  | "platform-host";

export type FulfillmentType =
  | "marketplace-request"
  | "curated-experience"
  | "partner-redirect"
  | "partner-ticket-placeholder"
  | "manual-confirmation"
  | "platform-community-event";

export type SellerOfRecord =
  | "partner"
  | "platform"
  | "not-applicable"
  | "legal-review-required";

export type QualificationRequirement =
  | "guide-conferencier-card"
  | "vtc-or-taxi-license"
  | "partner-contract"
  | "professional-review"
  | "none";

export type PartnershipStatus =
  | "demo"
  | "research"
  | "contact-planned"
  | "contacted"
  | "meeting-requested"
  | "meeting-scheduled"
  | "pilot-discussion"
  | "pilot-approved"
  | "partner"
  | "exclusive-contract"
  | "paused"
  | "rejected";

export type ExclusiveStatus =
  | "none"
  | "demo"
  | "negotiation"
  | "limited-pilot"
  | "partner-only"
  | "exclusive-contract";
