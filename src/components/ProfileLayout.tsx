'use client';

import React, { FC, ReactNode } from 'react';
import AppLayout from "@components/AppLayout";
import HeroBackground from "@components/HeroBackground";
import ProfileSidebar from "@components/ProfileSidebar";

interface ProfileLayoutProps {
    children: ReactNode;
    title?: string;
    breadcrumb?: string;
}

const ProfileLayout: FC<ProfileLayoutProps> = ({ children, title, breadcrumb }) => {

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
                backgroundUrl="/images/bg-home.jpg"
                className="mb-4"
            >
                {/* Header */}
                <div className="flex flex-col items-center justify-center min-h-[200px] px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                        {title}
                    </h1>
                    <div className="text-white text-lg">
                        <span>หน้าหลัก</span> / <span className="text-blue-200">{breadcrumb}</span>
                    </div>
                </div>
            </HeroBackground>

            {/* Container Section */}
            <div className="w-[90%] max-w-7xl mx-auto my-8 p-4">
                <div className="flex gap-6">

                    {/* Left Sidebar */}
                    <ProfileSidebar />

                    {/* Main Content */}
                    <div className="flex-1">
                        {children}
                    </div>

                    {/* Right Sidebar - Products */}
                    <div className="w-80">
                        <div className="bg-[#2c5886] rounded-2xl p-6">
                            <h3 className="text-white text-xl font-bold mb-4">กล่องจดหมาย</h3>

                            <div className="space-y-3">
                                {products.map((product, index) => (
                                    <div key={index} className="bg-[#4a7ba7] rounded-xl p-4 flex items-center gap-3">
                                        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                                            <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                                                </svg>
                                            </div>
                                        </div>

                                        <div className="flex-1">
                                            <h4 className="text-white font-medium text-sm">{product.name}</h4>
                                            <p className="text-white/70 text-xs">{product.description}</p>
                                            <p className="text-white/60 text-xs">{product.subDescription}</p>
                                        </div>

                                        <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                                            {product.status}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default ProfileLayout