import React from 'react'
import Image from 'next/image'
import AppLayout from '@components/layouts/AppLayout'
import HeroBackground from '@components/layouts/HeroBackground'
import ProfileSidebar from '@components/layouts/ProfileSidebar'

import { FaCoins, FaLink, FaKey, FaClock, FaInfoCircle, FaChartBar } from "react-icons/fa";
import { LuHandCoins } from "react-icons/lu";

const WebHookLikePage = () => {
    return (
        <AppLayout>
            <HeroBackground
                backgroundUrl="/images/bg-home.jpg"
                className="h-[250px] sm:h-[300px] lg:h-[400px]"
            >
            </HeroBackground>

            {/* Container Section */}
            <div className="w-[95%] sm:w-[90%] lg:w-[88%] xl:w-[85%] 2xl:w-[80%] max-w-[1400px] mx-auto -mt-16 sm:-mt-20 lg:-mt-26 mb-8 relative z-30 px-2 sm:px-4">

                {/* Header */}
                <div className="flex flex-col lg:flex-row mb-0">
                    {/* Left Spacer - hidden on mobile/tablet */}
                    <div className="hidden lg:block lg:w-[220px] xl:w-[260px]"></div>

                    {/* Header Content */}
                    <div className="flex-1 py-3 sm:py-4 px-4 sm:px-8 text-center rounded-t-2xl bg-[#FFF]/90 backdrop-blur-sm">
                        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#000] mb-2 sm:mb-4">Webhook LINE</h1>
                        <p className="text-sm sm:text-base text-[#000]">หน้าหลัก / <span className='text-[#737373]'>Webhook LINE</span></p>
                    </div>
                </div>

                {/* Content - 2 Columns Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] xl:grid-cols-[260px_1fr] min-h-[600px]">
                    {/* Left Sidebar - show on desktop, hide on mobile/tablet */}
                    <div className="hidden lg:block">
                        <div className="h-full min-h-[600px]">
                            <ProfileSidebar />
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="bg-white rounded-lg lg:rounded-none overflow-hidden shadow-sm min-h-[600px]">
                        {/* Header Content */}
                        <div className="flex items-center justify-around py-8 px-6 bg-[#0E345B]">
                            {/* All Income */}
                            <div className="">
                                <div className="flex items-center text-white">
                                    <FaCoins className="inline-block mr-1" />
                                    <span className="text-sm">ทั้งหมด</span>
                                </div>
                                <p className="text-2xl font-bold text-white">0.00 บาท</p>
                            </div>

                            {/* Income */}
                            <div className="">
                                <div className="flex items-center text-white">
                                    <LuHandCoins className="inline-block mr-1" />
                                    <span className="text-sm">รายได้</span>
                                </div>
                                <p className="text-2xl font-bold text-white">0.00 บาท</p>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="flex flex-col items-center px-6 sm:px-12 pb-8 bg-[#285788] rounded-b-2xl">
                            {/* Header */}
                            <div className="w-full flex flex-col items-center justify-center py-6 border-b border-white">
                                <div className='flex items-center gap-2 text-white mb-4'>
                                    <FaLink className="w-6 h-6" />
                                    <span className="text-xl">ตัวแทนผ่าน Webhook LINE</span>
                                    <span className="text-xs bg-blue-600 px-2 py-1 rounded">LITE</span>
                                </div>
                                <p className="text-base text-white text-center mb-4">ระบบขายผ่าน @LINE รับขายผ่านการทักแชทพร้อมเงินติดในปี</p>
                            </div>

                            {/* Bot Info Section */}
                            <div className="w-full flex flex-col items-center py-8">
                                {/* Bot Icon */}
                                <div className="flex items-center justify-center mb-4">
                                    <Image src="/images/bot-icon.png" alt="Bot Icon" width={120} height={120} />
                                </div>

                                {/* Bot Name */}
                                <h3 className="text-white text-xl font-bold mb-6">CAT</h3>

                                {/* Bot Stats */}
                                <div className="flex flex-col items-center w-full space-y-3 mb-6">
                                    <div className="flex items-center text-white">
                                        <span className="text-sm"><FaKey className="inline-block mr-2" /> รหัสยูเซอร์ : </span>
                                        <span className="text-sm font-bold ml-1">126421852</span>
                                    </div>
                                    <div className="flex items-center text-white">
                                        <span className="text-sm"><FaInfoCircle className="inline-block mr-2" /> รายได้ของกลุ่ม : </span>
                                        <span className="text-sm font-bold ml-1">0 บาท</span>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-white text-sm text-center mb-6">
                                    ( กรุณาขออสามเกมส์เปิดสวยกันทีได้จะใช้จุดยินสู่ ADMIN เพื่อเปิดได้… )
                                </p>

                                {/* Action Buttons */}
                                <div className="w-full grid grid-cols-2 gap-4">
                                    <button className="px-4 py-3 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors">
                                        <FaLink className="inline-block mr-2" />
                                        ประวัติลิงค์
                                    </button>
                                    <button className="px-4 py-3 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors">
                                        <FaInfoCircle className="inline-block mr-2" />
                                        คอมเมนต์
                                    </button>
                                    <button className="px-4 py-3 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors">
                                        <FaClock className="inline-block mr-2" />
                                        ประวัติรายวันคำ
                                    </button>
                                    <button className="px-4 py-3 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors">
                                        <FaChartBar className="inline-block mr-2" />
                                        ประวัติสมอรจิลเบิ้น
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Sidebar */}
                <div className="lg:hidden mt-6">
                    <ProfileSidebar className="w-full" />
                </div>
            </div>
        </AppLayout>
    )
}

export default WebHookLikePage