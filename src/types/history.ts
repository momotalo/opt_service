export interface CreditHistory {
  id: number;
  referenceId: string;
  channel: string;
  type: string;
  status: string;
  otp: string;
  datetime: string;
  time: string;
}

export interface HistoryMenuItems {
  id: string;
  label: string;
  href: string;
}
