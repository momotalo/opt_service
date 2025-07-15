"use client";
import React, { FC, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiOutlineLogout } from 'react-icons/hi';
import { HiChevronUp, HiChevronDown } from 'react-icons/hi2';
import UserProfile from '@components/shared/UserProfile';
import { useAuth } from '@hooks/useAuth';

// Import types and menu data
import { MenuItem, SubMenuItem, User } from 'types/sidebar';
import { menuItems } from 'data/sidebarMenu';

interface SidebarProps {
    className?: string;
    user?: User;
    onLogout?: () => void;
    onCloseSidebar?: () => void;
}

const Sidebar: FC<SidebarProps> = ({
    className = '',
    onCloseSidebar
}) => {
    const pathname = usePathname();
    const { user, logout, isLoggedIn, closeSidebar } = useAuth();
    const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);
    const [isLoggingOut, setIsLoggingOut] = useState(false);

    // ถ้าไม่ได้ login หรือไม่มี user
    if (!isLoggedIn || !user) {
        return (
            <div className={`flex flex-col w-64 min-h-screen bg-[#0E345B] text-white rounded-l-3xl ${className}`}>
                <div className="p-6 text-center">
                    <p className="mb-4">กรุณาเข้าสู่ระบบ</p>
                    <Link
                        href="/login"
                        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg inline-block transition-colors"
                        onClick={onCloseSidebar}
                    >
                        เข้าสู่ระบบ
                    </Link>
                </div>
            </div>
        );
    }

    // ฟังก์ชันสำหรับ toggle dropdown menu
    const toggleDropdown = (menuId: string) => {
        setOpenDropdowns(prev =>
            prev.includes(menuId)
                ? prev.filter(id => id !== menuId)
                : [...prev, menuId]
        );
    };

    // ฟังก์ชันสำหรับตรวจสอบว่า dropdown เปิดอยู่หรือไม่
    const isDropdownOpen = (menuId: string): boolean => {
        return openDropdowns.includes(menuId);
    };

    // ฟังก์ชันสำหรับตรวจสอบว่าเมนูเป็น active หรือไม่
    const isActiveMenu = (href?: string, subItems?: SubMenuItem[]): boolean => {
        if (href && pathname === href) {
            return true;
        }
        if (subItems) {
            return subItems.some(subItem => pathname === subItem.href);
        }
        return false;
    };

    // ฟังก์ชันสำหรับตรวจสอบว่า submenu เป็น active หรือไม่
    const isActiveSubMenu = (href: string): boolean => {
        return pathname === href;
    };

    // ฟังก์ชันสำหรับตรวจสอบว่าเมนูมี submenu หรือไม่
    const hasSubItems = (item: MenuItem): boolean => {
        return Boolean(item.subItems && item.subItems.length > 0);
    };

    // ฟังก์ชันสำหรับออกจากระบบ
    const handleLogout = async () => {
        setIsLoggingOut(true);

        try {
            // จำลองการ logout
            await new Promise(resolve => setTimeout(resolve, 500));

            // เรียกใช้ logout จาก useAuth
            logout();

            // ปิด sidebar
            if (onCloseSidebar) {
                onCloseSidebar();
            } else {
                closeSidebar();
            }

        } catch (error) {
            console.error('Logout error:', error);
        } finally {
            setIsLoggingOut(false);
        }
    };

    const handleCloseSidebar = () => {
        if (onCloseSidebar) {
            onCloseSidebar();
        } else {
            closeSidebar();
        }
    };

    return (
        <div className={`flex flex-col w-64 min-h-screen bg-[#0E345B] text-white rounded-l-3xl ${className}`}>
            {/* Profile Section with UserProfile Component */}
            <div className="p-6">
                <UserProfile
                    user={user}
                    variant="sidebar"
                    showButtons={true}
                    onProfileClick={handleCloseSidebar}
                />
            </div>

            {/* Menu Items */}
            <nav className="flex-1 px-6 py-4">
                <ul className="space-y-1">
                    {menuItems.map((item) => {
                        const isActive = isActiveMenu(item.href, item.subItems);
                        const isExpanded = isDropdownOpen(item.id);
                        const hasDropdown = hasSubItems(item);

                        return (
                            <li key={item.id}>
                                {hasDropdown ? (
                                    <button
                                        onClick={() => toggleDropdown(item.id)}
                                        className={`w-full flex items-center justify-between py-3 px-3 rounded-lg text-left transition-all duration-200 group ${isActive
                                            ? 'bg-blue-600/30 text-white border-l-4 border-blue-400'
                                            : 'hover:bg-blue-700/50 text-blue-100'
                                            }`}
                                    >
                                        <div className="flex items-center space-x-3">
                                            <span className={`w-5 h-5 ${isActive ? 'text-blue-300' : item.iconColor}`}>
                                                {item.icon}
                                            </span>
                                            <span className={isActive ? 'text-white font-medium' : 'text-blue-100'}>
                                                {item.label}
                                            </span>
                                        </div>
                                        <div className={isActive ? 'text-blue-300' : 'text-blue-200'}>
                                            {isExpanded ? (
                                                <HiChevronUp className="w-4 h-4" />
                                            ) : (
                                                <HiChevronDown className="w-4 h-4" />
                                            )}
                                        </div>
                                    </button>
                                ) : (
                                    <Link
                                        href={item.href || '#'}
                                        className={`w-full flex items-center py-3 px-3 rounded-lg text-left transition-all duration-200 group ${isActive
                                            ? 'bg-blue-600/30 text-white border-l-4 border-blue-400'
                                            : 'hover:bg-blue-700/50 text-blue-100'
                                            }`}
                                        onClick={handleCloseSidebar}
                                    >
                                        <div className="flex items-center space-x-3">
                                            <span className={`w-5 h-5 ${isActive ? 'text-blue-300' : item.iconColor}`}>
                                                {item.icon}
                                            </span>
                                            <span className={isActive ? 'text-white font-medium' : 'text-blue-100'}>
                                                {item.label}
                                            </span>
                                        </div>
                                    </Link>
                                )}

                                {/* Submenu for expandable items */}
                                {hasDropdown && item.subItems && isExpanded && (
                                    <ul className="mt-2 ml-4 space-y-1 border-l-2 border-blue-600/30 pl-4">
                                        {item.subItems.map((subItem: SubMenuItem) => {
                                            const isSubActive = isActiveSubMenu(subItem.href);

                                            return (
                                                <li key={subItem.id}>
                                                    <Link
                                                        href={subItem.href}
                                                        className={`block w-full text-left py-2 px-3 rounded-md transition-all duration-200 text-sm ${isSubActive
                                                            ? 'bg-blue-500/40 text-white font-medium border-l-2 border-blue-300'
                                                            : 'text-blue-200 hover:bg-blue-700/30 hover:text-white'
                                                            }`}
                                                        onClick={handleCloseSidebar}
                                                    >
                                                        <div className="flex items-center space-x-2">
                                                            {subItem.icon && (
                                                                <span className={subItem.iconColor || 'text-blue-300'}>
                                                                    {subItem.icon}
                                                                </span>
                                                            )}
                                                            <span>{subItem.label}</span>
                                                        </div>
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </nav>

            {/* Logout Button */}
            <div className="p-6 border-t border-blue-700/50">
                <button
                    onClick={handleLogout}
                    disabled={isLoggingOut}
                    className={`w-full py-3 px-4 rounded-lg transition-all duration-200 text-center font-medium flex items-center justify-center gap-2 ${isLoggingOut
                        ? 'bg-gray-500 text-gray-300 cursor-not-allowed'
                        : 'bg-red-600/80 hover:bg-red-600 text-white hover:shadow-lg transform hover:-translate-y-0.5'
                        }`}
                >
                    {isLoggingOut ? (
                        <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            กำลังออกจากระบบ...
                        </>
                    ) : (
                        <>
                            <HiOutlineLogout className="w-5 h-5" />
                            ออกจากระบบ
                        </>
                    )}
                </button>
            </div>
        </div>
    );
};

export default Sidebar;