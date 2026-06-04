export type TravelBuddyPost = {
  id: string;
  alias: string;
  ageRange: "18-25" | "26-35" | "36-45" | "46-60" | "60+";
  languages: string[];
  travelStartDate: string;
  travelEndDate: string;
  preferredAreas: string[];
  interests: string[];
  travelerType: "solo" | "couple" | "family-looking-for-public-event" | "friends";
  preferredActivityTypes: string[];
  introduction: string;
  publicMeetingOnly: boolean;
  exactLocationPublic: false;
  contactDetailsPublic: false;
  moderationStatus: "pending" | "approved" | "rejected";
  reportCount: number;
  blocked: boolean;
  demo: boolean;
};

export type CommunityEvent = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  meetingArea: string;
  audience: string;
  dateLabel: string;
  tags: string[];
  demo: boolean;
  publicMeetingOnly: boolean;
};

export type CommunityReport = {
  id: string;
  targetType: "profile" | "buddy-post" | "event" | "review" | "message-placeholder";
  targetId: string;
  reason:
    | "harassment"
    | "hate-speech"
    | "sexual-content"
    | "scam"
    | "unsafe-meeting"
    | "privacy-disclosure"
    | "commercial-solicitation"
    | "minor-safety"
    | "other";
  description: string;
  createdAt: string;
  status: "new" | "reviewing" | "action-taken" | "dismissed";
  adminNotes?: string;
};
