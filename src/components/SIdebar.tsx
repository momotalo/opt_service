import React, { FC, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
    HiOutlineViewGrid,
    HiOutlineInformationCircle,
    HiOutlineDocumentText,
    HiOutlineBell,
    HiOutlineCog,
    HiOutlineLogout
} from 'react-icons/hi';
import { HiChevronUp, HiChevronDown } from 'react-icons/hi2';

interface SubMenuItem {
    id: string;
    label: string;
    href: string;
    icon?: React.ReactNode;
    iconColor?: string;
}

interface MenuItem {
    id: string;
    label: string;
    href?: string;
    icon: React.ReactNode;
    iconColor?: string;
    bgColor?: string;
    expandable?: boolean;
    subItems?: SubMenuItem[];
}

interface User {
    name: string;
    credit: number;
    avatar?: string;
}

interface SidebarProps {
    className?: string;
    currentPath?: string;
    user?: User;
    onLogout?: () => void;
    onCloseSidebar?: () => void;
}

const Sidebar: FC<SidebarProps> = ({
    className = '',
    user = { name: 'CAT', credit: 0 },
    onLogout,
    onCloseSidebar
}) => {
    const pathname = usePathname();
    const router = useRouter();
    const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);
    const [isLoggingOut, setIsLoggingOut] = useState(false);

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
            // จำลองการ logout (เช่น เรียก API)
            await new Promise(resolve => setTimeout(resolve, 500));

            // ลบข้อมูลจาก localStorage
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('user');

            // เรียกใช้ callback ถ้ามี
            if (onLogout) {
                onLogout();
            }

            // ปิด sidebar
            if (onCloseSidebar) {
                onCloseSidebar();
            }

            // redirect ไปหน้าแรก
            router.push('/');

        } catch (error) {
            console.error('Logout error:', error);
        } finally {
            setIsLoggingOut(false);
        }
    };

    const menuItems: MenuItem[] = [
        {
            id: "services",
            label: 'บริการทั้งหมด',
            icon: <HiOutlineViewGrid></HiOutlineViewGrid>,
            iconColor: "text-blue-400",
            expandable: true,
            subItems: [
                {
                    id: "service-1",
                    label: "บริการ A",
                    href: "/services/service-a",
                    iconColor: "text-emerald-500"
                },
                {
                    id: "service-2",
                    label: "บริการ B",
                    href: "/services/service-b",
                    iconColor: "text-purple-500"
                },
                {
                    id: "service-3",
                    label: "บริการ C",
                    href: "/services/service-c",
                    iconColor: "text-orange-500"
                }
            ]
        },
        {
            id: "topup",
            label: 'เติมเครดิต',
            href: '/topup',
            icon: <HiOutlineInformationCircle />,
            iconColor: "text-green-400"
        },
        {
            id: "history",
            label: 'ประวัติทั้งหมด',
            href: '/history',
            icon: <HiOutlineDocumentText />,
            iconColor: "text-yellow-400"
        },
        {
            id: "join-us",
            label: 'ร่วมกับเรา',
            href: '/join-us',
            icon: <HiOutlineBell />,
            iconColor: "text-pink-400"
        },
        {
            id: "tools",
            label: 'เครื่องมือ',
            href: '/tools',
            icon: <HiOutlineCog />,
            iconColor: "text-gray-400"
        },
    ];

    return (
        <div className={`flex flex-col w-64 min-h-screen bg-[#0E345B] text-white rounded-l-3xl ${className}`}>
            {/* Profile Section */}
            <div className="p-6">
                <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
                        {user.avatar ? (
                            <Image
                                src={user.avatar}
                                alt="Profile"
                                width={48}
                                height={48}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="w-full h-full bg-gray-400 flex items-center justify-center text-gray-600 font-semibold">
                                {user.name.charAt(0)}
                            </div>
                        )}
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg">{user.name}</h3>
                        <p className="text-blue-200 text-sm">฿{user.credit.toFixed(2)} เครดิต</p>
                    </div>
                </div>

                {/* Profile Action Buttons */}
                <div className="flex space-x-2 mt-4">
                    <Link
                        href="/profile"
                        className="flex-1 bg-[#294162] hover:bg-[#335071] text-white py-2 px-3 rounded-full text-sm transition-colors text-center"
                        onClick={onCloseSidebar}
                    >
                        สมาชิกทั่วไป
                    </Link>
                    <Link
                        href="/topup"
                        className="flex-1 bg-[#294162] hover:bg-[#335071] text-white py-2 px-3 rounded-full text-sm transition-colors text-center"
                        onClick={onCloseSidebar}
                    >
                        เติมเครดิต
                    </Link>
                </div>
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
                                        onClick={onCloseSidebar}
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
                                        {item.subItems.map((subItem) => {
                                            const isSubActive = isActiveSubMenu(subItem.href);

                                            return (
                                                <li key={subItem.id}>
                                                    <Link
                                                        href={subItem.href}
                                                        className={`block w-full text-left py-2 px-3 rounded-md transition-all duration-200 text-sm ${isSubActive
                                                            ? 'bg-blue-500/40 text-white font-medium border-l-2 border-blue-300'
                                                            : 'text-blue-200 hover:bg-blue-700/30 hover:text-white'
                                                            }`}
                                                        onClick={onCloseSidebar}
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
                    className={`block w-full py-3 px-4 rounded-lg transition-all duration-200 text-center font-medium flex items-center justify-center gap-2 ${isLoggingOut
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