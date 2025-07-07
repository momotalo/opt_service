import React from 'react'
import Image from 'next/image'
import AppLayout from '@components/layouts/AppLayout'
import HeroBackground from '@components/layouts/HeroBackground'
import ProfileSidebar from '@components/layouts/ProfileSidebar'

import { FaCoins, FaMoneyBillWave } from "react-icons/fa";
import { LuHandCoins } from "react-icons/lu";
import PageHeader from '@components/profile/PageHeader'

const JoinUsPage = () => {
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
                    title="ร่วมกับเรา"
                    breadcrumb="ร่วมกับเรา"
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
                        <div className="flex flex-col px-6 sm:px-12 bg-[#285788] pb-8">
                            {/* Header */}
                            <div className="flex flex-col items-center justify-center w-full px-4 py-6">
                                <div className='text-white mb-4'>
                                    <h2 className="text-2xl font-bold">เปิดรับตัวแทนจำหน่าย</h2>
                                </div>
                                <div className="flex items-center gap-2 text-white mb-4">
                                    <span className="text-base">สะสมยอด</span>
                                    <FaMoneyBillWave className="w-4 h-4" />
                                    <span className="text-base">ซื้อสินค้าทั้งหมดภายในเว็บ</span>
                                </div>
                                <p className="text-white text-base mb-4">
                                    ครบ 1,000 บาท ภายใน 1 เดือน ได้รับส่วนลดมากมาย ...
                                </p>

                                <div className="flex items-center justify-between w-full text-white text-base mb-4">
                                    <span>• ซื้อ Account ลดลง 10%</span>
                                    <span>• เติมเกมส์ ลดลง 2%</span>
                                    <span>• เข็นขุดเกมส์ ลดลง 10%</span>
                                </div>
                            </div>

                            {/* Progress Bar */}
                            <div className="w-full mb-8">
                                <div className="bg-gray-400 rounded-full h-4 mb-4">
                                    <div className="bg-green-500 h-4 rounded-full" style={{ width: '35%' }}></div>
                                </div>
                                <div className="flex items-center justify-center gap-2 text-white">
                                    <FaMoneyBillWave className="w-4 h-4" />
                                    <span className="text-sm">ยอดสะสม 200 บาท / 1,000.00 บาท</span>
                                </div>
                            </div>

                            {/* Social Media Grid */}
                            <div className="w-full">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                                    {/* Facebook */}
                                    <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
                                        <div className="flex justify-center mb-3">
                                            <Image
                                                src="/images/socials/facebook.png"
                                                alt="Facebook"
                                                width={48}
                                                height={48}
                                                className="w-12 h-12"
                                            />
                                        </div>
                                        <span className="text-gray-600 text-sm font-medium">Facebook</span>
                                    </div>

                                    {/* TikTok */}
                                    <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
                                        <div className="flex justify-center mb-3">
                                            <Image
                                                src="/images/socials/tiktok.png"
                                                alt="TikTok"
                                                width={48}
                                                height={48}
                                                className="w-12 h-12"
                                            />
                                        </div>
                                        <span className="text-gray-600 text-sm font-medium">Tiktok</span>
                                    </div>

                                    {/* Instagram */}
                                    <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
                                        <div className="flex justify-center mb-3">
                                            <Image
                                                src="/images/socials/instagram.svg"
                                                alt="Instagram"
                                                width={48}
                                                height={48}
                                                className="w-12 h-12"
                                            />
                                        </div>
                                        <span className="text-gray-600 text-sm font-medium">Instagram</span>
                                    </div>

                                    {/* Twitter */}
                                    <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
                                        <div className="flex justify-center mb-3">
                                            <Image
                                                src="/images/socials/twitter.svg"
                                                alt="Twitter"
                                                width={48}
                                                height={48}
                                                className="w-12 h-12"
                                            />
                                        </div>
                                        <span className="text-gray-600 text-sm font-medium">Twitter</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {/* YouTube */}
                                    <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
                                        <div className="flex justify-center mb-3">
                                            <Image
                                                src="/images/socials/youtube.svg"
                                                alt="YouTube"
                                                width={48}
                                                height={48}
                                                className="w-18 h-12"
                                            />
                                        </div>
                                        <span className="text-gray-600 text-sm font-medium">Youtube</span>
                                    </div>

                                    {/* Spotify */}
                                    <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
                                        <div className="flex justify-center mb-3">
                                            <Image
                                                src="/images/socials/spotify.png"
                                                alt="Spotify"
                                                width={48}
                                                height={48}
                                                className="w-12 h-12"
                                            />
                                        </div>
                                        <span className="text-gray-600 text-sm font-medium">Spotify</span>
                                    </div>

                                    {/* Telegram */}
                                    <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
                                        <div className="flex justify-center mb-3">
                                            <Image
                                                src="/images/socials/telegram.svg"
                                                alt="Telegram"
                                                width={48}
                                                height={48}
                                                className="w-12 h-12"
                                            />
                                        </div>
                                        <span className="text-gray-600 text-sm font-medium">Telegram</span>
                                    </div>

                                    {/* Shopee */}
                                    <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
                                        <div className="flex justify-center mb-3">
                                            <Image
                                                src="/images/socials/shopee.svg"
                                                alt="Shopee"
                                                width={48}
                                                height={48}
                                                className="w-12 h-12"
                                            />
                                        </div>
                                        <span className="text-gray-600 text-sm font-medium">Shopee</span>
                                    </div>
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

export default JoinUsPage