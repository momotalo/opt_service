export interface User {
  id?: string;
  name: string;
  email?: string;
  credit: number;
  avatar?: string;
  role?: "member" | "agent" | "admin";
  isLoggedIn?: boolean;
}

export interface UserContextType {
  user: User | null;
  isLoading: boolean;
  login: (userData: User) => void;
  logout: () => void;
  updateUser: (userData: Partial<User>) => void;
  updateCredit: (amount: number) => void;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}
