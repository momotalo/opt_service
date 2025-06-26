"use client";
import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// import {
//     FiUser,
//     FiSettings,
//     FiFileText,
//     FiShoppingCart,
//     FiShare2,
//     FiUserPlus,
//     FiLogOut
// } from 'react-icons/fi';
// import {
//     HiOutlineGlobeAlt,
//     HiOutlineCode
// } from 'react-icons/hi';

interface ProfileMenuItem {
    id: string;
    label: string;
    href: string;
    // icon: React.ReactNode;
    isActive?: boolean;
}

interface ProfileSidebarProps {
    className?: string;
    user?: {
        name: string;
        email: string;
        credits: number;
        avatar?: string;
    };
}
const ProfileSidebar: FC<ProfileSidebarProps> = (
    {
        className = '',
        user = {
            name: 'CAT',
            email: 'min260845@gmail.com',
            credits: 0.00,
            avatar: '/api/placeholder/40/40'
        }
    }
) => {
    const pathname = usePathname();

    const menuItems: ProfileMenuItem[] = [
        {
            id: 'profile',
            label: 'ข้อมูลผู้ใช้',
            href: '/profile',
            // icon: <FiUser className="w-4 h-4" />
        },
        {
            id: 'settings',
            label: 'ตั้งค่าส่วนตัว',
            href: '/profile/settings',
            // icon: <FiSettings className="w-4 h-4" />
        },
        {
            id: 'history',
            label: 'ประวัติการสั่งซื้อ',
            href: '/profile/history',
            // icon: <FiFileText className="w-4 h-4" />
        },
        {
            id: 'orders',
            label: 'สินค้าเข้าเพื่อน',
            href: '/profile/orders',
            // icon: <FiShoppingCart className="w-4 h-4" />
        },
        {
            id: 'webhook',
            label: 'Webhook LIKE',
            href: '/profile/webhook',
            // icon: <HiOutlineGlobeAlt className="w-4 h-4" />
        },
        {
            id: 'api',
            label: 'เชื่อมฟรี API',
            href: '/profile/api',
            // icon: <HiOutlineCode className="w-4 h-4" />
        },
        {
            id: 'affiliate',
            label: 'ร่วมกันรวย',
            href: '/profile/affiliate',
            // icon: <FiUserPlus className="w-4 h-4" />
        },
        {
            id: 'logout',
            label: 'ออกจากระบบ',
            href: '/',
            // icon: <FiLogOut className="w-4 h-4" />
        }
    ];

    const isActiveMenu = (href: string): boolean => {
        return pathname === href;
    };

    return (
        <div className={`w-[260px] h-[600px] py-4 text-white bg-[#1e3a5f] rounded-l-2xl ${className}`}>
            {/* Header Section */}
            <div className="px-4 py-3">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-300 flex-shrink-0">
                        <Image
                            src={user.avatar || '/api/placeholder/40/40'}
                            alt={user.name}
                            width={40}
                            height={40}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-sm text-white truncate">
                            {user.name}
                        </h3>
                        <p className="text-xs text-blue-200 truncate">
                            ฿{user.credits.toFixed(2)} เครดิต
                        </p>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-1 mt-3">
                    <Link
                        href="/profile"
                        className="flex-1 bg-[#fff]/10 text-white py-1.5 px-2 rounded-full text-xs text-center transition-colors"
                    >
                        สมาชิกทั่วไป
                    </Link>
                    <Link
                        href="/topup"
                        className="flex-1 bg-[#fff]/30 text-white py-1.5 px-2 rounded-full text-xs text-center transition-colors"
                    >
                        เติมเครดิต
                    </Link>
                </div>
            </div>

            {/* Menu Items */}
            <nav className="px-4 py-2">
                <ul className="space-y-0">
                    {menuItems.map((item) => {
                        const isActive = isActiveMenu(item.href);

                        return (
                            <li key={item.id}>
                                <Link
                                    href={item.href}
                                    className={`
                                        w-full flex items-center space-x-3 px-4 py-4 text-base rounded-2xl transition-colors duration-200
                                        ${isActive
                                            ? 'bg-blue-600/40 text-[#fff] border-r-2 border-blue-400'
                                            : 'text-[#fff]/60 hover:bg-[#fff]/30 hover:text-[#fff]'
                                        }
                                    `}
                                >
                                    {/* <span className={`${isActive ? 'text-blue-200' : 'text-blue-300'}`}>
                                        {item.icon}
                                    </span> */}
                                    <span className="flex-1 truncate">
                                        {item.label}
                                    </span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
                {/* <Link
                    href="/logout"
                    className="w-full flex items-center space-x-3 px-3 py-2 bg-red-600/80 hover:bg-red-600 rounded transition-colors duration-200 text-sm"
                >
                    <FiLogOut className="w-4 h-4" />
                    <span>ออกจากระบบ</span>
                </Link> */}
            </nav>

        </div>
    )
}

export default ProfileSidebar