"use client";
import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@hooks/useAuth';

interface ProfileMenuItem {
    id: string;
    label: string;
    href: string;
    isActive?: boolean;
}

interface ProfileSidebarProps {
    className?: string;
}

const ProfileSidebar: FC<ProfileSidebarProps> = ({ className = '' }) => {
    const pathname = usePathname();
    const { user, logout } = useAuth();

    // ใช้ข้อมูลจาก useAuth หรือข้อมูล default
    const profileData = {
        name: user?.name || 'CAT',
        email: user?.email || 'min260845@gmail.com',
        credits: user?.credit || 0.00,
        avatar: user?.avatar || '/api/placeholder/40/40'
    };

    const menuItems: ProfileMenuItem[] = [
        {
            id: 'profile',
            label: 'ข้อมูลผู้ใช้',
            href: '/profile',
        },
        {
            id: 'history',
            label: 'ประวัติการหมด',
            href: '/profile/history/credit',
        },
        {
            id: 'invite',
            label: 'ลิงค์เชิญเพื่อน',
            href: '/profile/invite',
        },
        {
            id: 'webhook',
            label: 'Webhook LIKE',
            href: '/profile/webhook',
        },
        {
            id: 'api',
            label: 'เชื่อมฟรี API',
            href: '/profile/api',
        },
        {
            id: 'affiliate',
            label: 'ร่วมกันรวย',
            href: '/profile/affiliate',
        }
    ];

    const isActiveMenu = (href: string): boolean => {
        return pathname === href;
    };

    const handleLogout = () => {
        logout();
    };

    return (
        <div className={`w-[260px] bg-[#1e3a5f] rounded-l-2xl overflow-hidden ${className}`}>
            {/* Header Section */}
            <div className="px-6 py-6 bg-[#1e3a5f]">
                <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-300 flex-shrink-0">
                        <Image
                            src={profileData.avatar}
                            alt={profileData.name}
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-base text-white truncate">
                            {profileData.name}
                        </h3>
                        <p className="text-sm text-blue-200 truncate">
                            ฿{profileData.credits.toFixed(2)} เครดิต
                        </p>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                    <Link
                        href="/profile"
                        className="flex-1 bg-white/10 hover:bg-white/20 text-white py-2 px-3 rounded-full text-xs text-center transition-colors"
                    >
                        สมาชิกทั่วไป
                    </Link>
                    <Link
                        href="/topup"
                        className="flex-1 bg-white/20 hover:bg-white/30 text-white py-2 px-3 rounded-full text-xs text-center transition-colors"
                    >
                        เติมเครดิต
                    </Link>
                </div>
            </div>

            {/* Menu Items */}
            <nav className="px-4 py-2">
                <ul className="space-y-1">
                    {menuItems.map((item) => {
                        const isActive = isActiveMenu(item.href);

                        return (
                            <li key={item.id}>
                                <Link
                                    href={item.href}
                                    className={`
                                        w-full flex items-center px-4 py-3 text-sm rounded-xl transition-all duration-200
                                        ${isActive
                                            ? 'bg-blue-600/30 text-white font-medium border-r-2 border-blue-400'
                                            : 'text-white/70 hover:bg-white/10 hover:text-white'
                                        }
                                    `}
                                >
                                    <span className="flex-1 truncate">
                                        {item.label}
                                    </span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                {/* Logout Button */}
                <div className="mt-4 pt-4 border-t border-white/10">
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center px-4 py-3 text-sm text-red-300 hover:text-red-200 hover:bg-red-600/10 rounded-xl transition-all duration-200"
                    >
                        <span className="flex-1 text-left">ออกจากระบบ</span>
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default ProfileSidebar;