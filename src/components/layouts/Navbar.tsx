'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useAuth } from '@hooks/useAuth';
import { User } from 'types/user';

const navItems = [
    { label: 'แอคเคาท์', href: '/account' },
    { label: 'OTP', href: '/otp' },
    { label: 'ผู้ติดตาม', href: '/followers' },
    { label: 'เติมเกม', href: '/topup' },
    { label: 'บัตรเงินสด', href: '/cash-card' },
];

interface NavbarProps {
    isLoggedIn?: boolean;
    user?: User;
    onToggleSidebar?: () => void;
}

export default function Navbar({ onToggleSidebar }: NavbarProps) {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();
    const { user, isLoggedIn, toggleSidebar } = useAuth(); // ใช้ useAuth ที่มีอยู่แล้ว

    const handleHamburgerClick = () => {
        if (onToggleSidebar) {
            onToggleSidebar();
        } else {
            // ใช้ toggleSidebar จาก useAuth
            toggleSidebar();
        }
        setMenuOpen(false);
    };

    return (
        <nav className="relative flex items-center justify-between h-[60px] pl-8 text-[#fff] bg-[#0E345B] shadow-md z-50">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
                <Image
                    src="/images/logo.svg"
                    alt="R-OTP24HR Logo"
                    width={40}
                    height={40}
                    className="p-1 rounded-xl bg-[#fff]"
                />
                <div className="leading-tight">
                    <div className="text-sm font-semibold">R-OTP24HR.COM</div>
                    <div className="text-sm text-gray-300">บริการขาย OTP เริ่มต้น</div>
                </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 text-sm font-medium">
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`pb-1 border-b-2 transition duration-150 ${pathname === item.href
                            ? 'border-white text-white'
                            : 'border-transparent text-gray-300 hover:text-white hover:border-white'
                            }`}
                    >
                        {item.label}
                    </Link>
                ))}
            </div>

            {/* Right Section - Auth or Profile */}
            {!isLoggedIn ? (
                // Before Login - Show Login/Register Buttons
                <div className="hidden md:flex relative justify-center items-center trapezoid-gradient gap-3 w-[320px] h-[60px] pl-6">
                    <Link
                        href="/login"
                        className="bg-white text-[#003366] px-4 py-1.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
                    >
                        เข้าสู่ระบบ
                    </Link>
                    <Link
                        href="/register"
                        className="bg-[#0E345B] text-[#E0E0E0] px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-[#0066ee] transition-colors"
                    >
                        สมัครสมาชิก
                    </Link>
                </div>
            ) : (
                // After Login - Show Profile and Hamburger Menu
                <div className="hidden md:flex items-center gap-4 pr-6">
                    {/* Profile Section */}
                    <Link
                        href="/profile"
                        className="flex items-center gap-3 hover:bg-blue-700/50 p-2 transition-colors group"
                    >
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
                            {user?.avatar ? (
                                <Image
                                    src={user.avatar}
                                    alt="Profile"
                                    width={50}
                                    height={50}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-full bg-gray-400 flex items-center justify-center text-gray-600 font-semibold text-sm">
                                    {user?.name.charAt(0)}
                                </div>
                            )}
                        </div>
                        <div className="text-right">
                            <div className="text-sm font-semibold text-white group-hover:text-blue-100 transition-colors">
                                {user?.name}
                            </div>
                            <div className="text-xs text-blue-200 group-hover:text-blue-100 transition-colors">
                                ฿{user?.credit.toFixed(2)} เครดิต
                            </div>
                        </div>
                    </Link>

                    {/* Hamburger Menu */}
                    <button
                        onClick={handleHamburgerClick}
                        className="p-2 hover:bg-blue-700/50 rounded-lg transition-colors"
                        aria-label="Toggle Sidebar"
                    >
                        <FaBars size={20} />
                    </button>
                </div>
            )}

            {/* Mobile Hamburger Icon */}
            <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden p-2 z-50"
                aria-label="Toggle Menu"
            >
                {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>

            {/* Mobile Menu (Dropdown) */}
            {menuOpen && (
                <div className="absolute top-[60px] left-0 w-full bg-[#0E345B] flex flex-col gap-4 px-6 py-4 md:hidden z-40">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`text-sm font-medium transition-colors ${pathname === item.href
                                ? 'text-white'
                                : 'text-gray-300 hover:text-white'
                                }`}
                            onClick={() => setMenuOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}

                    {!isLoggedIn ? (
                        // Mobile Login & Register Buttons
                        <div className="flex flex-col gap-2 mt-4">
                            <Link
                                href="/login"
                                className="bg-white text-[#003366] px-4 py-2 rounded-full text-sm font-semibold text-center hover:opacity-90 transition-opacity"
                                onClick={() => setMenuOpen(false)}
                            >
                                เข้าสู่ระบบ
                            </Link>
                            <Link
                                href="/register"
                                className="bg-[#0E345B] border border-white text-white px-4 py-2 rounded-full text-sm font-semibold text-center hover:bg-[#0066ee] transition-colors"
                                onClick={() => setMenuOpen(false)}
                            >
                                สมัครสมาชิก
                            </Link>
                        </div>
                    ) : (
                        // Mobile Profile Section
                        <div className="mt-4 pt-4 border-t border-blue-700/50">
                            <Link
                                href="/profile"
                                className="flex items-center gap-3 hover:bg-blue-700/50 p-2 rounded-lg transition-colors"
                                onClick={() => setMenuOpen(false)}
                            >
                                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
                                    {user?.avatar ? (
                                        <Image
                                            src={user.avatar}
                                            alt="Profile"
                                            width={50}
                                            height={50}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gray-400 flex items-center justify-center text-gray-600 font-semibold text-sm">
                                            {user?.name.charAt(0)}
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-white">{user?.name}</div>
                                    <div className="text-xs text-blue-200">฿{user?.credit.toFixed(2)} เครดิต</div>
                                </div>
                            </Link>

                            <button
                                onClick={() => {
                                    handleHamburgerClick();
                                    setMenuOpen(false);
                                }}
                                className="w-full mt-2 bg-blue-600/50 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors text-center text-sm"
                            >
                                เมนูหลัก
                            </button>
                        </div>
                    )}
                </div>
            )}
        </nav>
    );
}