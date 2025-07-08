// ***** Home page ***** //
// --- App items --- //
export interface AppItem {
  id: string;
  name: string;
  iconUrl: string;
  status?: string;
  isAvailable?: boolean;
}

export interface SocialApp {
  id: string;
  name: string;
  iconUrl: string;
}

export interface PaymentMethod {
  id: string;
  name: string;
  logoUrl: string;
  width?: number;
  height?: number;
}
