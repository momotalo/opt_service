'use client';

import React, { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import AppLayout from '@components/layouts/AppLayout';
import ProfileSidebar from '@components/layouts/ProfileSidebar';
import HeroBackground from '@components/layouts/HeroBackground';
import { useRequireAuth } from '@hooks/useAuth';
import { getPageConfig } from '@config/pageConfig';

interface HistoryLayoutProps {
    children: ReactNode;
}

export default function HistoryLayout({ children }: HistoryLayoutProps) {
    const pathname = usePathname();
    const { isLoggedIn, isLoading } = useRequireAuth();

    // ดึงข้อมูลหน้าปัจจุบัน
    const currentPageConfig = getPageConfig(pathname);

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
                <HeroBackground
                    backgroundUrl="/images/background/bg-home.jpg"
                    className="h-[250px] sm:h-[300px] lg:h-[400px]"
                >
                </HeroBackground>

                <div className="w-[95%] sm:w-[90%] lg:w-[88%] xl:w-[85%] 2xl:w-[80%] max-w-[1400px] mx-auto -mt-16 sm:-mt-20 lg:-mt-24 mb-8 relative z-30 px-2 sm:px-4">
                    <div className="flex flex-col lg:flex-row mb-0">
                        <div className="hidden lg:block lg:w-[220px] xl:w-[260px]"></div>

                        {/* Header Content */}
                        <div className="flex-1 py-3 sm:py-4 px-4 sm:px-8 text-center rounded-t-2xl bg-[#FFF]/60 backdrop-blur-sm">
                            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#000] mb-2 sm:mb-4">{currentPageConfig.title}</h1>
                            <p className="text-sm sm:text-base text-[#000]">หน้าหลัก / <span className='text-[#737373]'>{currentPageConfig.breadcrumb}</span></p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] xl:grid-cols-[260px_1fr] min-h-[600px]">
                        <div className="hidden lg:block">
                            <div className="h-full min-h-[600px]">
                                <ProfileSidebar className='h-full lg:w-[220px] xl:w-[260px]' />
                            </div>
                        </div>

                        <div className="bg-gradient-to-b from-[#66A1F8] to-[#3C5F92] rounded-lg lg:rounded-none overflow-hidden shadow-sm min-h-[600px]">
                            {children}
                        </div>
                    </div>

                    <div className="lg:hidden mt-6">
                        <ProfileSidebar className="w-full" />
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}