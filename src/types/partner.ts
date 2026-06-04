import type { PartnershipStatus, SellerOfRecord } from "./compliance";

export type PartnerLead = {
  id: string;
  partnerName: string;
  partnerType:
    | "cruise-operator"
    | "museum"
    | "monument"
    | "tourism-network"
    | "guide-network"
    | "transport-network"
    | "other";
  priority: "P0" | "P1" | "P2" | "P3";
  contactDepartment?: string;
  contactName?: string;
  publicContactEmail?: string;
  publicContactPhone?: string;
  officialWebsiteDomain?: string;
  contactSourceType:
    | "official-contact-page"
    | "official-professional-page"
    | "official-group-page"
    | "manual-research-required";
  lastVerifiedAt: string;
  manualVerificationRequiredBeforeSending: boolean;
  status: PartnershipStatus;
  proposedPilot: string;
  nextAction: string;
  nextActionDate?: string;
  sellerOfRecord: SellerOfRecord;
  ticketingMode?: string;
  imageRightsStatus: "not-requested" | "requested" | "approved" | "rejected";
  contractStatus: "none" | "draft" | "under-review" | "signed";
  notes?: string;
};
