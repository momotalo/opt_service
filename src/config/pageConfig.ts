// History Layout
export interface PageConfig {
  title: string;
  subtitle?: string;
  breadcrumb: string;
}

export const historyPageConfig: Record<string, PageConfig> = {
  "/profile/history/account": {
    title: "ประวัติแอคเคาท์",
    subtitle: "จัดการและดูประวัติการใช้งานแอคเคาท์",
    breadcrumb: "แอคเคาท์",
  },
  "/profile/history/credit": {
    title: "ประวัติเติมเครดิต",
    subtitle: "ดูประวัติการเติมเครดิตทั้งหมด",
    breadcrumb: "เติมเครดิต",
  },
  "/profile/history/game": {
    title: "ประวัติเติมเกมส์",
    subtitle: "ดูประวัติการเติมเกมส์และไอเทม",
    breadcrumb: "เติมเกมส์",
  },
  "/profile/history/otp": {
    title: "ประวัติ OTP",
    subtitle: "ดูประวัติการขอและใช้งาน OTP",
    breadcrumb: "OTP",
  },
  "/profile/history/social": {
    title: "ประวัติเติมโซเชียล",
    subtitle: "ดูประวัติการเติมโซเชียลมีเดีย",
    breadcrumb: "เติมโซเชียล",
  },
};

// ฟังก์ชันสำหรับดึงข้อมูลหน้า
export function getPageConfig(pathname: string): PageConfig {
  return historyPageConfig[pathname] || historyPageConfig["/profile/history"];
}

// ฟังก์ชันสำหรับสร้าง breadcrumb แบบ array
export function getBreadcrumbArray(pathname: string): string[] {
  const config = getPageConfig(pathname);
  return config.breadcrumb.split(" / ");
}
