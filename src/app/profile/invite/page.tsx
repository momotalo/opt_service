import React from 'react'
import Image from 'next/image'
import AppLayout from '@components/layouts/AppLayout'
import HeroBackground from '@components/layouts/HeroBackground'
import ProfileSidebar from '@components/layouts/ProfileSidebar'

import { FaCoins, FaLink, FaCopy, FaKey, FaClock, FaInfoCircle, FaChartBar, FaMoneyBillWave } from "react-icons/fa";
import { LuHandCoins } from "react-icons/lu";
import PageHeader from '@components/profile/PageHeader'

const InviteFriendPage = () => {
    return (
        <AppLayout>
            <HeroBackground
                backgroundUrl="/images/background/bg-home.jpg"
                className="h-[250px] sm:h-[300px] lg:h-[400px]"
            >
            </HeroBackground>

            {/* Container Section */}
            <div className="w-[95%] sm:w-[90%] lg:w-[88%] xl:w-[85%] 2xl:w-[80%] max-w-[1400px] mx-auto -mt-16 sm:-mt-20 lg:-mt-26 mb-8 relative z-30 px-2 sm:px-4">

                {/* Header */}
                <PageHeader
                    title="ลิ้งค์เชิญเพื่อน"
                    breadcrumb="ลิ้งค์เชิญเพื่อน"
                    className="bg-[#FFF]/60"
                />

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
                                <p className="text-2xl font-bold text-white">฿0.00</p>
                            </div>

                            {/* Income */}
                            <div className="">
                                <div className="flex items-center text-white">
                                    <LuHandCoins className="inline-block mr-1" />
                                    <span className="text-sm">รายได้</span>
                                </div>
                                <p className="text-2xl font-bold text-white">฿0.00</p>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="flex flex-col items-center px-6 sm:px-12 pb-8 bg-[#285788] rounded-b-2xl">
                            {/* Header */}
                            <div className="w-full flex flex-col items-center justify-center py-6 border-b border-white">
                                <div className='flex items-center gap-2 text-white mb-4'>
                                    <FaLink className="w-6 h-6" />
                                    <span className="text-xl">ตัวแทนผ่านขายผ่าน Link</span>
                                </div>
                                <p className="text-base text-white text-center mb-4">ระบบขายผ่าน Link เชิญ ได้รับค่าคอมมิชั่น 10%</p>
                                <p className="text-base text-white text-center mb-4">( สมาชิกที่กดซื้อต้องไม่ใช่ระดับตัวแทน )</p>
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
                                        <span className="text-sm"><FaLink className="inline-block mr-2" /> จำนวนคลิกดูลิ้ง : </span>
                                        <span className="text-sm font-bold ml-1">1 ครั้ง</span>
                                    </div>
                                    <div className="flex items-center text-white">
                                        <span className="text-sm"><FaMoneyBillWave className="inline-block mr-2" /> รายได้ของอุปกรณ์ : </span>
                                        <span className="text-sm font-bold ml-1">0 บาท</span>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-white text-sm text-center mb-6">
                                    คัดลอก ลิ้งค์เชิญ ส่งให้เพื่อนหรือช่องทางโปรโมทของท่าน
                                </p>

                                {/* Link Input */}
                                <div className="w-full mb-6">
                                    <div className="flex items-center">
                                        <span className="px-4 py-2 text-white text-sm bg-[#0E345B] rounded-l-lg">ลิ้งค์เลย</span>
                                        <div className="flex-1 flex">
                                            <input
                                                type="text"
                                                value="http://google.com"
                                                readOnly
                                                className="flex-1 px-3 py-2 text-sm text-gray-800 bg-white border-0 focus:outline-none"
                                            />
                                            <button className="px-3 py-2 bg-gray-300 rounded-r-lg hover:bg-gray-400 transition-colors">
                                                <FaCopy className="w-4 h-4 text-gray-700" />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Info Text */}
                                <p className="text-white text-sm text-center mb-6">
                                    หากมีลูกค้าซื้อสินค้าจาก ลิ้งค์เชิญ รับคอมมิชั่น 10% ทันที
                                    <br />
                                    ( โดยที่บุคคลนั้นไม่มียศในเว็บเป็นตัวแทนจำหน่าย )
                                    <br />
                                    เช็คประวัติสมาชิกของท่านได้หรือประวัติการซื้อได้ที่ด้านล่าง
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

export default InviteFriendPage