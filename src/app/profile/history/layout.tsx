'use client';

import React, { ReactNode } from 'react';
import AppLayout from '@components/AppLayout';
import ProfileSidebar from '@components/ProfileSidebar';
import HeroBackground from '@components/HeroBackground';
import { useRequireAuth } from '@hooks/useAuth';

interface HistoryLayoutProps {
    children: ReactNode;
}

export default function HistoryLayout({ children }: HistoryLayoutProps) {
    // ตรวจสอบว่าผู้ใช้ล็อกอินแล้วหรือยัง ถ้าไม่ได้ล็อกอินจะ redirect ไป login
    const { isLoggedIn, isLoading } = useRequireAuth();

    // แสดง loading screen ระหว่างตรวจสอบสถานะการล็อกอิน
    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="text-center">
                    <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-600">กำลังโหลด...</p>
                </div>
            </div>
        );
    }

    // ถ้ายังไม่ได้ล็อกอิน ให้รอ redirect
    if (!isLoggedIn) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="text-center">
                    <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-600">กำลังเปลี่ยนเส้นทาง...</p>
                </div>
            </div>
        );
    }

    return (
        <AppLayout showFooter={true} className="bg-[#F1F7FE]">
            <div className="min-h-screen">
                {/* Hero Background */}
                <HeroBackground
                    backgroundUrl="/images/bg-home.jpg"
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
                        <div className="flex-1 py-3 sm:py-4 px-4 sm:px-8 text-center border-b rounded-t-2xl bg-[#FFF]/90 backdrop-blur-sm">
                            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#000] mb-2 sm:mb-4">ประวัติการใช้งาน</h1>
                            <p className="text-sm sm:text-base text-[#000]">หน้าหลัก / <span className='text-[#737373]'>ประวัติการใช้งาน</span></p>
                        </div>
                    </div>

                    {/* Content - 2 Columns Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] xl:grid-cols-[260px_1fr] min-h-[600px]">
                        {/* Left Sidebar - show on desktop, hide on mobile/tablet */}
                        <div className="hidden lg:block">
                            <div className="h-full min-h-[600px]">
                                <ProfileSidebar className='h-full lg:w-[220px] xl:w-[260px]' />
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="bg-white rounded-lg lg:rounded-none overflow-hidden shadow-sm min-h-[600px]">
                            {children}
                        </div>
                    </div>

                    {/* Mobile Sidebar */}
                    <div className="lg:hidden mt-6">
                        <ProfileSidebar className="w-full" />
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}