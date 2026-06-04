import type { CommunityReport } from "@/types/community";

export const communityReports: CommunityReport[] = [
  {
    id: "report-001",
    targetType: "buddy-post",
    targetId: "buddy-002",
    reason: "privacy-disclosure",
    description: "演示举报：疑似包含过细住宿信息，需管理员检查。",
    createdAt: "2026-06-02",
    status: "new",
    adminNotes: "DEMO queue item.",
  },
];
