'use client';
import React, { useState } from 'react';
import AppLayout from "@components/layouts/AppLayout";
import HeroBackground from "@components/layouts/HeroBackground";
import ProfileSidebar from "@components/layouts/ProfileSidebar";
import Link from 'next/link';

const ChangePasswordPage = () => {

    const [passwordData, setPasswordData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
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
                        <p className="text-sm sm:text-base text-[#000]">หน้าหลัก / <span className='text-[#737373]'>เปลี่ยนรหัสผ่าน</span></p>
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
                            <Link href="/profile" className="flex-1 md:flex-none px-3 md:px-4 lg:px-3 xl:px-6 py-2 md:py-3 lg:py-2 xl:py-3 font-medium text-sm md:text-base lg:text-sm xl:text-lg text-[#fff] text-center">
                                ข้อมูลส่วนตัว
                            </Link>
                            <Link href="/profile/change-password" className="flex-1 md:flex-none px-3 md:px-4 lg:px-3 xl:px-6 py-2 md:py-3 lg:py-2 xl:py-3 font-medium text-sm md:text-base lg:text-sm xl:text-lg text-[#fff] bg-gradient-to-l from-[#0E345B] to-[#3D78C5] rounded-2xl text-center">
                                ตั้งค่ารหัสผ่าน
                            </Link>
                        </div>

                        {/* Tab Content */}
                        <div className="space-y-4 lg:space-y-4 xl:space-y-6">
                            {/* Password Change Section */}
                            <div className="space-y-4 lg:space-y-4 xl:space-y-6">
                                <div>
                                    <label className="block text-white font-medium mb-2 lg:mb-2 xl:mb-3 text-sm lg:text-sm xl:text-base">รหัสผ่านเดิม *</label>
                                    <input
                                        type="password"
                                        value={passwordData.currentPassword}
                                        onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                                        className="w-full px-3 lg:px-3 xl:px-4 py-2 lg:py-2 xl:py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-white/40 text-sm lg:text-sm xl:text-base"
                                        placeholder="กรอกรหัสผ่านเดิม"
                                    />
                                    <p className="text-white/70 text-xs lg:text-xs xl:text-sm mt-1 lg:mt-1 xl:mt-2">
                                        หากคุณไม่เปลี่ยนรหัสผ่านเดิมใด้ก็ตาม จียรหัสผ่านในช่องปัจจุบันเท่านั้น
                                        และข้ามขั้นตอนผ่านในไดรับการอัปเดตไม่รหัสผ่าน
                                    </p>
                                </div>

                                <div>
                                    <label className="block text-white font-medium mb-2 lg:mb-2 xl:mb-3 text-sm lg:text-sm xl:text-base">รหัสผ่านใหม่ *</label>
                                    <input
                                        type="password"
                                        value={passwordData.newPassword}
                                        onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                                        className="w-full px-3 lg:px-3 xl:px-4 py-2 lg:py-2 xl:py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-white/40 text-sm lg:text-sm xl:text-base"
                                        placeholder="กรอกรหัสผ่านใหม่"
                                    />
                                    <p className="text-white/70 text-xs lg:text-xs xl:text-sm mt-1 lg:mt-1 xl:mt-2">
                                        กลอุยครหัสผ่านที่ต้องการเปลี่ยนในข่องดพ
                                    </p>
                                </div>

                                <div>
                                    <label className="block text-white font-medium mb-2 lg:mb-2 xl:mb-3 text-sm lg:text-sm xl:text-base">ยืนยันรหัสผ่านใหม่ *</label>
                                    <input
                                        type="password"
                                        value={passwordData.confirmPassword}
                                        onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                                        className="w-full px-3 lg:px-3 xl:px-4 py-2 lg:py-2 xl:py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-white/40 text-sm lg:text-sm xl:text-base"
                                        placeholder="กรอกรหัสผ่านใหม่อีกครั้ง"
                                    />
                                </div>

                                {/* Save Button */}
                                <div className="pt-4 lg:pt-4 xl:pt-6">
                                    <button className="w-full md:w-auto bg-[#6b8db3] hover:bg-[#5a7ba2] text-white px-6 lg:px-6 xl:px-8 py-2 lg:py-2 xl:py-3 rounded-2xl font-medium transition-colors text-sm lg:text-sm xl:text-base">
                                        บันทึกการเปลี่ยนแปลง
                                    </button>
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

                {/* Mobile Sidebar - show on mobile/tablet only */}
                <div className="lg:hidden mt-6">
                    <ProfileSidebar className="w-full" />
                </div>
            </div>
        </AppLayout>
    );
};

export default ChangePasswordPage;