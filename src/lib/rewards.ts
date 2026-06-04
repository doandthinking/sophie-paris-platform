import type { PointsTransaction } from "@/types/rewards";

export function calculateApprovedPoints(transactions: PointsTransaction[]) {
  return transactions.reduce((total, transaction) => {
    if (transaction.status !== "approved" && transaction.status !== "pending") {
      return total;
    }

    return total + transaction.points;
  }, 0);
}
