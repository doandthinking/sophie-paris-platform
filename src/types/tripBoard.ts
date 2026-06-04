export type TripBoardItemType =
  | "service"
  | "restaurant"
  | "hotel"
  | "travel-mart-item"
  | "travel-kit"
  | "emergency-resource"
  | "event";

export type TripBoardEntry = {
  id: string;
  itemType: TripBoardItemType;
  itemId: string;
  title: string;
  note?: string;
  date?: string;
  completed: boolean;
};

export type TripBoard = {
  id: string;
  travelerLabel: string;
  entries: TripBoardEntry[];
  demo: boolean;
};

export type TripChecklistTemplate = {
  id: string;
  title: string;
  scenario:
    | "before-departure"
    | "arrival-day"
    | "museum-day"
    | "cruise-day"
    | "family-day"
    | "rainy-day"
    | "before-departure-from-paris"
    | "lost-phone"
    | "lost-passport";
  items: string[];
};
