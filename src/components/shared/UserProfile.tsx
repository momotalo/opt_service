'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// ใช้ interface User จาก useAuth ที่มีอยู่แล้ว
interface User {
    name: string;
    credit: number;
    avatar?: string;
    email?: string;
    phone?: string;
}

interface UserProfileProps {
    user: User;
    variant?: 'sidebar' | 'profile-sidebar' | 'navbar';
    showButtons?: boolean;
    onProfileClick?: () => void;
    className?: string;
}

const UserProfile: React.FC<UserProfileProps> = ({
    user,
    variant = 'sidebar',
    showButtons = true,
    onProfileClick,
    className = ''
}) => {
    // ปรับขนาดตาม variant
    const getAvatarSize = () => {
        switch (variant) {
            case 'navbar':
                return { className: 'w-10 h-10' };
            case 'profile-sidebar':
                return { className: 'w-12 h-12' };
            case 'sidebar':
            default:
                return { className: 'w-12 h-12' };
        }
    };

    const avatarSize = getAvatarSize();

    // แสดงผล Avatar
    const renderAvatar = () => (
        <div className={`${avatarSize.className} bg-gray-300 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0`}>
            {user.avatar ? (
                <Image
                    src={user.avatar}
                    alt={user.name}
                    width={50}
                    height={50}
                    className="w-full h-full object-cover"
                />
            ) : (
                <div className="w-full h-full bg-gray-400 flex items-center justify-center text-gray-600 font-semibold text-sm">
                    {user.name.charAt(0).toUpperCase()}
                </div>
            )}
        </div>
    );

    // แสดงข้อมูล User
    const renderUserInfo = () => {
        const textSizes = {
            navbar: { name: 'text-sm', credit: 'text-xs' },
            'profile-sidebar': { name: 'text-base', credit: 'text-sm' },
            sidebar: { name: 'text-lg', credit: 'text-sm' }
        };

        const sizes = textSizes[variant];

        return (
            <div className={variant === 'navbar' ? 'text-right' : 'flex-1 min-w-0'}>
                <h3 className={`font-bold text-white truncate ${sizes.name}`}>
                    {user.name}
                </h3>
                <p className={`text-blue-200 truncate ${sizes.credit}`}>
                    ฿{user.credit.toFixed(2)} เครดิต
                </p>
                {user.email && variant === 'profile-sidebar' && (
                    <p className="text-xs text-blue-300 truncate mt-1">
                        {user.email}
                    </p>
                )}
            </div>
        );
    };

    // แสดงปุ่มต่างๆ
    const renderActionButtons = () => {
        if (!showButtons) return null;

        const buttonClass = "flex-1 bg-white/10 hover:bg-white/20 text-white py-2 px-3 rounded-full text-xs text-center transition-colors";

        return (
            <div className="flex space-x-2 mt-4">
                <Link href="/profile" className={buttonClass} onClick={onProfileClick}>
                    สมาชิกทั่วไป
                </Link>
                <Link href="/topup" className={buttonClass} onClick={onProfileClick}>
                    เติมเครดิต
                </Link>
            </div>
        );
    };

    // สำหรับ navbar แบบพิเศษ
    if (variant === 'navbar') {
        return (
            <Link
                href="/profile"
                className={`flex items-center gap-3 hover:bg-blue-700/50 p-2 rounded-lg transition-colors group ${className}`}
                onClick={onProfileClick}
            >
                {renderAvatar()}
                <div className="text-right">
                    <div className="text-sm font-semibold text-white group-hover:text-blue-100 transition-colors">
                        {user.name}
                    </div>
                    <div className="text-xs text-blue-200 group-hover:text-blue-100 transition-colors">
                        ฿{user.credit.toFixed(2)} เครดิต
                    </div>
                </div>
            </Link>
        );
    }

    // สำหรับ sidebar และ profile-sidebar
    return (
        <div className={`${className}`}>
            <div className="flex items-center space-x-3 mb-4">
                {renderAvatar()}
                {renderUserInfo()}
            </div>
            {renderActionButtons()}
        </div>
    );
};

export default UserProfile;