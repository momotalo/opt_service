import React from "react";

export interface SubMenuItem {
  id: string;
  label: string;
  href: string;
  icon?: React.ReactNode;
  iconColor?: string;
}

export interface MenuItem {
  id: string;
  label: string;
  href?: string;
  icon: React.ReactNode;
  iconColor?: string;
  bgColor?: string;
  expandable?: boolean;
  subItems?: SubMenuItem[];
}

export interface User {
  name: string;
  credit: number;
  avatar?: string;
}

export interface SidebarProps {
  className?: string;
  currentPath?: string;
  user?: User;
  onLogout?: () => void;
  onCloseSidebar?: () => void;
}
