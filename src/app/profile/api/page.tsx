import React from 'react'
import Image from 'next/image'
import AppLayout from '@components/layouts/AppLayout'
import HeroBackground from '@components/layouts/HeroBackground'
import ProfileSidebar from '@components/layouts/ProfileSidebar'

import { FaCopy, FaInfoCircle, FaKey, FaMoneyBillWave } from "react-icons/fa";

const APIPage = () => {
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
                        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#000] mb-2 sm:mb-4">API</h1>
                        <p className="text-sm sm:text-base text-[#000]">หน้าหลัก / <span className='text-[#737373]'>API</span></p>
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
                    <div className="bg-white rounded-lg lg:rounded-none overflow-hidden min-h-[600px]">
                        {/* Header Content */}
                        <div className="flex items-center justify-center py-8 px-6 bg-[#285788]">
                            <div className="text-center">
                                <div className="flex items-center justify-center text-white mb-4">
                                    <FaKey className="inline-block mr-2" />
                                    <span className="text-2xl">ข้อมูล API</span>
                                </div>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="flex flex-col items-center px-6 sm:px-12 pb-8 bg-[#285788] rounded-b-2xl">

                            {/* Bot Info Section */}
                            <div className="w-full flex flex-col items-center py-8">
                                {/* Bot Icon */}
                                <div className="flex items-center justify-center mb-6">
                                    <Image src="/images/bot-icon.png" alt="Bot Icon" width={80} height={80} />
                                </div>

                                {/* Bot Stats */}
                                <div className="flex flex-col items-center w-full space-y-4 mb-8">
                                    <div className="flex items-center text-white">
                                        <FaKey className="inline-block mr-2" />
                                        <span className="text-sm">ID : 1564288</span>
                                    </div>
                                    <div className="flex items-center text-white">
                                        <FaMoneyBillWave className="inline-block mr-2" />
                                        <span className="text-sm">ยอดเงินของฉัน : 0 บาท</span>
                                    </div>
                                </div>

                                {/* API Key Section */}
                                <div className="w-[80%] mb-6">
                                    <div className="flex items-center">
                                        <span className="px-4 py-4 text-white text-sm bg-[#0E345B] rounded-l-lg">GEN APIKEY :</span>
                                        <div className="flex-1 flex">
                                            <input
                                                type="text"
                                                value="http://google.com"
                                                readOnly
                                                className="flex-1 px-3 py-4 text-sm text-gray-800 bg-white border-0 focus:outline-none"
                                            />
                                            <button className="px-4 py-4 bg-gray-300 rounded-r-lg hover:bg-gray-400 transition-colors">
                                                <FaCopy className="w-4 h-4 text-gray-700" />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-white text-base text-center mb-8">
                                    **** อย่าให้บุคคลอื่นรู้ API KEY ของท่านเด็ดขาด ****
                                </p>

                                {/* Generate Button */}
                                <div className="flex justify-center w-full mb-8">
                                    <button className="w-[70%] px-6 py-4 bg-[#fff]/50 text-[#000] text-lg font-medium rounded-lg hover:bg-[#fff] transition-colors">
                                        ไฟล์ TS **ตัวอย่าง**
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Check Balance Table */}

                        <div className="mt-8 bg-[#0E345B] rounded-lg">
                            {/* Table Header */}
                            <div className="text-center py-3 bg-[#0E345B] rounded-t-lg">
                                <h3 className="text-white text-lg font-medium">เช็คยอดเงินคงเหลือ</h3>
                            </div>

                            {/* Table Content */}
                            <div className="overflow-hidden">
                                <table className="w-full">
                                    <tbody>
                                        <tr className="border-b border-white/20">
                                            <td className="px-4 py-4 text-white text-sm font-medium bg-[#285788] border-r border-white/20">Parameters</td>
                                            <td className="px-4 py-4 text-white text-sm bg-[#3b6b92]">รายละเอียด</td>
                                        </tr>
                                        <tr className="border-b border-white/20">
                                            <td className="px-4 py-4 text-white text-sm font-medium bg-[#285788] border-r border-white/20">HTTP Method</td>
                                            <td className="px-4 py-4 text-white text-sm bg-[#3b6b92]">POST</td>
                                        </tr>
                                        <tr className="border-b border-white/20">
                                            <td className="px-4 py-4 text-white text-sm font-medium bg-[#285788] border-r border-white/20">API URL</td>
                                            <td className="px-4 py-4 text-white text-sm bg-[#3b6b92]"></td>
                                        </tr>
                                        <tr className="border-b border-white/20">
                                            <td className="px-4 py-4 text-white text-sm font-medium bg-[#285788] border-r border-white/20">action</td>
                                            <td className="px-4 py-4 text-white text-sm bg-[#3b6b92]"></td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-6 text-white text-sm font-medium bg-[#285788] border-r border-white/20 align-top">ตัวอย่าง</td>
                                            <td className="px-4 py-6 text-white text-sm bg-[#3b6b92]">
                                                <div className="flex justify-center">
                                                    <div className="bg-gray-300 rounded-lg px-8 py-6 text-center">
                                                        <span className="text-black text-lg font-bold">IMG CODING</span>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* Footer */}
                            <div className="flex justify-between items-center px-4 py-3 bg-[#0E345B] rounded-b-lg border-t border-white/20">
                                <span className="text-white text-sm">© 2025 R-OTP</span>
                                <button className="bg-white/20 text-white px-4 py-2 rounded-lg text-sm hover:bg-white/30 transition-colors">
                                    <FaInfoCircle className="inline-block mr-2" />
                                    ขอความช่วยเหลือ
                                </button>
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

export default APIPage