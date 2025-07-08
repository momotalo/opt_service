import React from "react";
import {
  HiOutlineViewGrid,
  HiOutlineInformationCircle,
  HiOutlineDocumentText,
  HiOutlineBell,
  HiOutlineCog,
} from "react-icons/hi";
import { MenuItem } from "../types/sidebar";

export const menuItems: MenuItem[] = [
  {
    id: "services",
    label: "บริการทั้งหมด",
    icon: React.createElement(HiOutlineViewGrid),
    iconColor: "text-blue-400",
    expandable: true,
    subItems: [
      {
        id: "service-1",
        label: "บริการ A",
        href: "/services/service-a",
        iconColor: "text-emerald-500",
      },
      {
        id: "service-2",
        label: "บริการ B",
        href: "/services/service-b",
        iconColor: "text-purple-500",
      },
      {
        id: "service-3",
        label: "บริการ C",
        href: "/services/service-c",
        iconColor: "text-orange-500",
      },
    ],
  },
  {
    id: "topup",
    label: "เติมเครดิต",
    href: "/topup",
    icon: React.createElement(HiOutlineInformationCircle),
    iconColor: "text-green-400",
  },
  {
    id: "history",
    label: "ประวัติทั้งหมด",
    href: "/history",
    icon: React.createElement(HiOutlineDocumentText),
    iconColor: "text-yellow-400",
  },
  {
    id: "join-us",
    label: "ร่วมกับเรา",
    href: "/join-us",
    icon: React.createElement(HiOutlineBell),
    iconColor: "text-pink-400",
  },
  {
    id: "tools",
    label: "เครื่องมือ",
    href: "/tools",
    icon: React.createElement(HiOutlineCog),
    iconColor: "text-gray-400",
  },
];
