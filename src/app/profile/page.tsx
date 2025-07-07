'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import AppLayout from "@components/layouts/AppLayout";
import HeroBackground from "@components/layouts/HeroBackground";
import ProfileSidebar from "@components/layouts/ProfileSidebar";
import { useAuth } from '@hooks/useAuth';
import Link from 'next/link';

const ProfilePage = () => {
    const { user } = useAuth();

    // State สำหรับจัดการข้อมูลในฟอร์ม
    const [profileData, setProfileData] = useState({
        username: user?.name || 'CAT',
        email: user?.email || 'min260845@gmail.com',
        credits: user?.credit || 0.00
    });

    // รายการสินค้าในกล่องขวา (mock data)
    const products = Array(5).fill({
        name: 'เติมสินค้า',
        description: 'เติมสินค้า Youter 30 วัน',
        subDescription: 'สินค้าราคาบ 5 สแหนง',
        status: 'Stock'
    });

    return (
        <AppLayout className='bg-[#F1F7FE]'>
            <HeroBackground
                backgroundUrl="/images/background/bg-home.jpg"
                className="h-[250px] sm:h-[300px] lg:h-[400px]"
            >
            </HeroBackground>

            {/* Container Section */}
            <div className="w-[95%] sm:w-[90%] lg:w-[88%] xl:w-[85%] 2xl:w-[80%] max-w-[1400px] mx-auto -mt-16 sm:-mt-20 lg:-mt-24 mb-8 relative z-30 px-2 sm:px-4">

                {/* Header */}
                <div className="flex flex-col lg:flex-row mb-0">
                    {/* Left Spacer - hidden on mobile/tablet */}
                    <div className="hidden lg:block lg:w-[220px] xl:w-[260px]"></div>

                    {/* Header Content */}
                    <div className="flex-1 py-3 sm:py-4 px-4 sm:px-8 text-center rounded-t-2xl bg-[#FFF]/90 backdrop-blur-sm">
                        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#000] mb-2 sm:mb-4">ข้อมูลผู้ใช้งาน</h1>
                        <p className="text-sm sm:text-base text-[#000]">หน้าหลัก / <span className='text-[#737373]'>ข้อมูลผู้ใช้งาน</span></p>
                    </div>

                    {/* Right Spacer - hidden on mobile/tablet */}
                    <div className="hidden lg:block lg:w-[220px] xl:w-[280px]"></div>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_220px] xl:grid-cols-[260px_1fr_280px] min-h-[600px]">
                    {/* Left Sidebar - show on desktop, hide on mobile/tablet */}
                    <div className="hidden lg:block">
                        <div className="h-full min-h-[600px]">
                            <ProfileSidebar className='h-full lg:w-[220px] xl:w-[260px]' />
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="px-4 sm:px-6 lg:px-3 xl:px-6 2xl:px-8 py-4 lg:py-3 xl:py-4 bg-[#0E345B]/80 overflow-hidden rounded-lg lg:rounded-none min-h-[600px]">
                        {/* Tab Navigation */}
                        <div className="flex w-full md:w-fit p-1 bg-[#0E345B] rounded-2xl mb-4 lg:mb-5 xl:mb-6">
                            <Link href="/profile" className="flex-1 md:flex-none px-3 md:px-4 lg:px-3 xl:px-6 py-2 md:py-3 lg:py-2 xl:py-3 font-medium text-sm md:text-base lg:text-sm xl:text-lg text-[#fff] bg-gradient-to-l from-[#3D78C5] to-[#0E345B] rounded-2xl text-center">
                                ข้อมูลส่วนตัว
                            </Link>
                            <Link href="/profile/change-password" className="flex-1 md:flex-none px-3 md:px-4 lg:px-3 xl:px-6 py-2 md:py-3 lg:py-2 xl:py-3 font-medium text-sm md:text-base lg:text-sm xl:text-lg text-[#fff] text-center">
                                ตั้งค่ารหัสผ่าน
                            </Link>
                        </div>

                        {/* Tab Content */}
                        <div className="space-y-4 lg:space-y-4 xl:space-y-6">
                            {/* Profile Image Section */}
                            <div className="flex flex-col md:flex-row items-center gap-3 lg:gap-3 xl:gap-6 mb-4 lg:mb-4 xl:mb-6">
                                <div className="w-24 h-24 md:w-28 md:h-28 lg:w-20 lg:h-20 xl:w-32 xl:h-32 rounded-2xl bg-gray-400 flex items-center justify-center overflow-hidden">
                                    <Image
                                        src={user?.avatar || '/api/placeholder/128/128'}
                                        alt="Profile"
                                        width={128}
                                        height={128}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <button className="w-full md:w-auto bg-[#6b8db3] hover:bg-[#5a7ba2] text-white px-4 lg:px-4 xl:px-8 py-2 lg:py-2 xl:py-4 rounded-2xl font-medium transition-colors text-sm lg:text-sm xl:text-base">
                                    อัปโหลดรูปโปรไฟล์
                                </button>
                            </div>

                            {/* Form Fields */}
                            <div className="grid grid-cols-1 gap-3">
                                <div>
                                    <label className="block text-white font-medium mb-2 lg:mb-2 xl:mb-3 text-sm lg:text-sm xl:text-base">ชื่อผู้ใช้</label>
                                    <input
                                        type="text"
                                        value={profileData.username}
                                        onChange={(e) => setProfileData({ ...profileData, username: e.target.value })}
                                        className="w-full px-3 lg:px-3 xl:px-4 py-2 lg:py-2 xl:py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-white/40 text-sm lg:text-sm xl:text-base"
                                        placeholder="CAT"
                                    />
                                </div>

                                <div>
                                    <label className="block text-white font-medium mb-2 lg:mb-2 xl:mb-3 text-sm lg:text-sm xl:text-base">ระดับ</label>
                                    <input
                                        type="text"
                                        value="สมาชิกทั่วไป"
                                        disabled
                                        className="w-full px-3 lg:px-3 xl:px-4 py-2 lg:py-2 xl:py-4 bg-white/5 border border-white/20 rounded-xl text-white/70 text-sm lg:text-sm xl:text-base"
                                    />
                                </div>

                                <div>
                                    <label className="block text-white font-medium mb-2 lg:mb-2 xl:mb-3 text-sm lg:text-sm xl:text-base">คงเหลือ</label>
                                    <input
                                        type="text"
                                        value={`${profileData.credits.toFixed(2)} เครดิต`}
                                        disabled
                                        className="w-full px-3 lg:px-3 xl:px-4 py-2 lg:py-2 xl:py-4 bg-white/5 border border-white/20 rounded-xl text-white/70 text-sm lg:text-sm xl:text-base"
                                    />
                                </div>

                                <div>
                                    <label className="block text-white font-medium mb-2 lg:mb-2 xl:mb-3 text-sm lg:text-sm xl:text-base">อีเมล</label>
                                    <input
                                        type="email"
                                        value={profileData.email}
                                        onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                                        className="w-full px-3 lg:px-3 xl:px-4 py-2 lg:py-2 xl:py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-white/40 text-sm lg:text-sm xl:text-base"
                                        placeholder="min260845@gmail.com"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Sidebar */}
                    <div className="hidden lg:block">
                        <div className="bg-[#1e3a5f] rounded-r-2xl p-3 lg:p-2 xl:p-5 2xl:p-6 h-full min-h-[600px]">
                            <h3 className="text-white text-base lg:text-sm xl:text-xl font-bold mb-4 lg:mb-3 xl:mb-4">กล่องจดหมาย</h3>

                            <div className="space-y-2 lg:space-y-1 xl:space-y-2">
                                {products.map((product, index) => (
                                    <div key={index} className="bg-[#4a7ba7] rounded-xl p-2 lg:p-1.5 xl:p-4 flex items-center gap-2 lg:gap-1.5 xl:gap-2">
                                        <div className="w-8 h-8 lg:w-6 lg:h-6 xl:w-12 xl:h-12 bg-white rounded-lg flex items-center justify-center">
                                            <div className="w-5 h-5 lg:w-4 lg:h-4 xl:w-8 xl:h-8 bg-blue-500 rounded flex items-center justify-center">
                                                <svg className="w-3 h-3 lg:w-2 lg:h-2 xl:w-5 xl:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                                                </svg>
                                            </div>
                                        </div>

                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-white font-medium text-xs lg:text-xs xl:text-sm truncate">{product.name}</h4>
                                            <p className="text-white/70 text-xs lg:text-xs truncate">{product.description}</p>
                                            <p className="text-white/60 text-xs lg:text-xs truncate">{product.subDescription}</p>
                                        </div>

                                        <span className="bg-green-500 text-white text-xs lg:text-xs px-1.5 lg:px-1 xl:px-2 py-1 rounded-full whitespace-nowrap">
                                            {product.status}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Sidebar */}
                <div className="lg:hidden mt-6">
                    <ProfileSidebar className="w-full" />
                </div>

                {/* Total Orders Section */}
                <div className="mt-8 space-y-4">
                    <div className="title">
                        <h1 className='w-fit px-4 py-2 text-[#fff] bg-[#2C5886] rounded-2xl text-base lg:text-lg'>ยอดซื้อทั้งหมด</h1>
                    </div>
                    {/* Grid Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                        {/* แอคเคาท์ Card */}
                        <div className="card h-[180px] md:h-[200px] lg:h-[220px] xl:h-[230px] bg-[#0E345B] rounded-2xl overflow-hidden">
                            {/* Header */}
                            <div className="header px-4 py-3 text-center bg-[#FFFFFF]/30">
                                <h1 className='text-[#fff] font-medium text-sm md:text-base'>แอคเคาท์</h1>
                            </div>
                            <div className="flex items-center justify-center h-full pb-8">
                                <h2 className='text-[#fff] text-lg md:text-xl lg:text-2xl font-semibold'>0.00 บาท</h2>
                            </div>
                        </div>

                        {/* เติมเกม & บัตรเงินสด Card */}
                        <div className="card h-[180px] md:h-[200px] lg:h-[220px] xl:h-[230px] bg-[#0E345B] rounded-2xl overflow-hidden">
                            {/* Header */}
                            <div className="header px-4 py-3 text-center bg-[#FFFFFF]/30">
                                <h1 className='text-[#fff] font-medium text-sm md:text-base'>เติมเกม & บัตรเงินสด</h1>
                            </div>
                            <div className="flex items-center justify-center h-full pb-8">
                                <h2 className='text-[#fff] text-lg md:text-xl lg:text-2xl font-semibold'>0.00 บาท</h2>
                            </div>
                        </div>

                        {/* ยอดผู้ติดตาม Card */}
                        <div className="card h-[180px] md:h-[200px] lg:h-[220px] xl:h-[230px] bg-[#0E345B] rounded-2xl overflow-hidden">
                            {/* Header */}
                            <div className="header px-4 py-3 text-center bg-[#FFFFFF]/30">
                                <h1 className='text-[#fff] font-medium text-sm md:text-base'>ยอดผู้ติดตาม</h1>
                            </div>
                            <div className="flex items-center justify-center h-full pb-8">
                                <h2 className='text-[#fff] text-lg md:text-xl lg:text-2xl font-semibold'>0.00 บาท</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </AppLayout >
    );
};

export default ProfilePage;