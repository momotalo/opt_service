'use client';

import { ReactNode, useEffect } from 'react';
import { useAuth } from '@hooks/useAuth';
import { useRouter } from 'next/navigation';
import AppLayout from './AppLayout';

interface ProtectedLayoutProps {
    children: ReactNode;
    showFooter?: boolean;
    className?: string;
    redirectTo?: string; // หน้าที่จะ redirect ไปถ้าไม่ได้ login (default: '/login')
}

export default function ProtectedLayout({
    children,
    showFooter = true,
    className = '',
    redirectTo = '/login'
}: ProtectedLayoutProps) {
    const { isLoggedIn, isLoading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        // ถ้าโหลดเสร็จแล้วและไม่ได้ login ให้ redirect
        if (!isLoading && !isLoggedIn) {
            router.push(redirectTo);
        }
    }, [isLoggedIn, isLoading, router, redirectTo]);

    // แสดง loading ขณะตรวจสอบสถานะ
    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#3D78C5] to-[#1D3A5F]">
                <div className="text-center text-white">
                    <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-lg font-medium">กำลังตรวจสอบการเข้าสู่ระบบ...</p>
                </div>
            </div>
        );
    }

    // ถ้าไม่ได้ login ให้แสดงหน้า redirect message
    if (!isLoggedIn) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#3D78C5] to-[#1D3A5F]">
                <div className="text-center text-white max-w-md mx-auto px-6">
                    <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
                        <h2 className="text-2xl font-bold mb-4">กรุณาเข้าสู่ระบบ</h2>
                        <p className="text-lg mb-6 text-blue-100">
                            คุณต้องเข้าสู่ระบบก่อนเพื่อเข้าถึงหน้านี้
                        </p>
                        <div className="space-y-3">
                            <button
                                onClick={() => router.push('/login')}
                                className="w-full bg-white text-[#1D3A5F] py-3 px-6 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                            >
                                เข้าสู่ระบบ
                            </button>
                            <button
                                onClick={() => router.push('/')}
                                className="w-full bg-transparent border-2 border-white text-white py-3 px-6 rounded-lg font-semibold hover:bg-white hover:text-[#1D3A5F] transition-colors"
                            >
                                กลับหน้าหลัก
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // ถ้า login แล้วให้แสดงเนื้อหาตามปกติ
    return (
        <AppLayout showFooter={showFooter} className={className}>
            {children}
        </AppLayout>
    );
}