'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';

const navItems = [
    { label: 'แดชบอร์ด', href: '/' },
    { label: 'OTP', href: '/otp' },
    { label: 'ผู้ติดตาม', href: '/followers' },
    { label: 'เติมเงิน', href: '/topup' },
    { label: 'บัตรเงินสด', href: '/card' },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
        <nav className="bg-[#0E345B] text-white pl-4 h-[60px] flex items-center justify-between shadow-md relative z-50">
            {/* Logo */}
            <div className="flex items-center gap-3">
                <Image
                    src="/images/logo.svg"
                    alt="R-OTP24HR Logo"
                    width={40}
                    height={40}
                    className="p-1 rounded-xl bg-white"
                />
                <div className="leading-tight">
                    <div className="text-sm font-semibold">R-OTP24HR.COM</div>
                    <div className="text-xs text-gray-300">บริการขาย OTP เริ่มต้น</div>
                </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-6 text-sm font-medium">
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

            {/* Login & Register Buttons */}
            <div className="hidden md:flex trapezoid-gradient items-center gap-3 px-6 pl-8 h-[60px] relative">
                <Link
                    href="/login"
                    className="bg-white text-[#003366] px-4 py-1.5 rounded-full text-sm font-semibold hover:opacity-90"
                >
                    เข้าสู่ระบบ
                </Link>
                <Link
                    href="/register"
                    className="bg-[#0E345B] text-[#E0E0E0] px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-[#0066ee]"
                >
                    สมัครสมาชิก
                </Link>
            </div>

            {/* Hamburger Icon (Mobile) */}
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
                            className={`text-sm font-medium ${pathname === item.href
                                ? 'text-white'
                                : 'text-gray-300 hover:text-white'
                                }`}
                            onClick={() => setMenuOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}

                    {/* Login & Register Buttons */}
                    <div className="flex flex-col gap-2 mt-4">
                        <Link
                            href="/login"
                            className="bg-white text-[#003366] px-4 py-2 rounded-full text-sm font-semibold text-center hover:opacity-90"
                            onClick={() => setMenuOpen(false)}
                        >
                            เข้าสู่ระบบ
                        </Link>
                        <Link
                            href="/register"
                            className="bg-[#0E345B] border border-white text-white px-4 py-2 rounded-full text-sm font-semibold text-center hover:bg-[#0066ee]"
                            onClick={() => setMenuOpen(false)}
                        >
                            สมัครสมาชิก
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
