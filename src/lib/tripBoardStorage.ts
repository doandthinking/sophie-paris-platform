import type { TripBoardEntry } from "@/types/tripBoard";

export const tripBoardStorageKey = "pll-trip-board-demo";

export function readTripBoard(): TripBoardEntry[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    return JSON.parse(window.localStorage.getItem(tripBoardStorageKey) ?? "[]") as TripBoardEntry[];
  } catch {
    return [];
  }
}

export function writeTripBoard(entries: TripBoardEntry[]) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(tripBoardStorageKey, JSON.stringify(entries));
}

export function addTripBoardEntry(entry: TripBoardEntry) {
  const entries = readTripBoard();
  writeTripBoard([entry, ...entries.filter((item) => item.id !== entry.id)]);
}
