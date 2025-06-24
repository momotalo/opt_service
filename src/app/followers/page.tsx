import React from 'react'
import HeroBackground from '@components/HeroBackground'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'

const socialApps = [
    { id: 'facebook', name: 'Facebook' },
    { id: 'instagram', name: 'Instagram' },
    { id: 'tiktok', name: 'TikTok' },
    { id: 'twitter', name: 'Twitter' },
    { id: 'youtube', name: 'Youtube' },
    { id: 'shopee', name: 'Shopee' },
    { id: 'telegram', name: 'Telegram' },
    { id: 'threads', name: 'Threads' },
    { id: 'spotify', name: 'Spotify' },
    { id: 'other', name: 'ทั้งหมด' },
];

const FollowersPage = () => {
    return (
        <div className='bg-[#F1F7FE]'>
            <Navbar />

            {/* Hero Background */}
            <HeroBackground backgroundUrl="/images/follow.jpg" className="mb-4">
                <div className="flex flex-col items-center justify-center h-[calc(100vh-60px)] px-4 text-center">
                    <h1 className='p-4 text-6xl text-[#1D3A5F] font-bold rounded-3xl bg-[#fff]'>บริการเพิ่มผู้ติดตามโซเชียล</h1>
                    <p className="px-6 py-1 text-lg text-[#fff] bg-[#0E345B] rounded-b-4xl">
                        หน้าหลัก / <span className='text-[#737373]'>เพิ่มผู้ติดตามโซเชียล</span></p>
                </div>
            </HeroBackground>

            {/* Container Section */}
            <div className="container w-[80%] mx-auto my-8 p-4">

                {/* Auto Scrolling */}
                <div className="flex justify-center items-center w-full h-[130px] border-2 rounded-2xl bg-[#fff]">
                    <h1 className="font-mono text-[35px] font-bold ">Auto Scrolling</h1>
                </div>

                {/* List App Section */}
                <div className="my-4 sm:my-6">
                    <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">ประเภท</h1>
                    <hr className="w-[100%] h-[3px] mb-4 bg-gradient-to-r from-[#0E345B] via-[#1E6EC1] to-[#FFFFFF] border-0 rounded-full" />
                </div>

                {/* Apps Grid - 5 columns layout like in the image */}
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-8">
                    {socialApps.map((app) => (
                        <div
                            key={app.id}
                            className="cursor-pointer transition-all duration-200 hover:scale-105"
                        >
                            <div className="bg-white rounded-2xl px-4 py-3 shadow-lg shadow-[#0F6AC9] border-2 border-[#0F6AC9] hover:border-blue-500 hover:shadow-lg transition-all duration-200">
                                <div className="text-center">
                                    <span className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200">
                                        {app.name}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Order Form Section */}
                <div className="w-full mt-8 ">
                    <div className="bg-[#3278BF]/75 rounded-2xl p-6 shadow-xl">
                        <form className="space-y-4">
                            {/* เลือกหมวดหมู่ */}
                            <div>
                                <label className="block text-2xl text-white font-medium mb-2">
                                    เลือกหมวดหมู่
                                </label>
                                <input
                                    type="text"
                                    placeholder="หมวดหมู่ ( ขั้นต่ำ 50 หมวดหมู่)"
                                    className="w-full px-4 py-3 rounded-xl bg-white/20 backdrop-blur-sm text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
                                />
                            </div>

                            {/* เลือกรายการสินค้า */}
                            <div>
                                <label className="block text-2xl text-white font-medium mb-2">
                                    เลือกรายการสินค้า
                                </label>
                                <input
                                    type="text"
                                    placeholder="รายการสินค้า (ราคา 1,000 จำนวน)"
                                    className="w-full px-4 py-3 rounded-xl bg-white/20 backdrop-blur-sm text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
                                />
                            </div>

                            {/* รายละเอียดสินค้า */}
                            <div>
                                <label className="block text-xl text-white font-medium mb-2">
                                    รายละเอียดสินค้า
                                </label>
                                <textarea
                                    rows={4}
                                    placeholder=""
                                    className="w-full px-4 py-3 rounded-xl bg-white/20 backdrop-blur-sm text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
                                />
                            </div>

                            {/* Link */}
                            <div>
                                <label className="block text-xl text-white font-medium mb-2">
                                    Link
                                </label>
                                <input
                                    type="url"
                                    placeholder="ของพอออกกันกัน"
                                    className="w-full px-4 py-3 rounded-xl bg-white/20 backdrop-blur-sm text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
                                />
                            </div>

                            {/* จำนวน */}
                            <div>
                                <label className="block text-xl text-white font-medium mb-2">
                                    จำนวน
                                </label>
                                <input
                                    type="number"
                                    placeholder="จำนวน"
                                    className="w-full px-4 py-3 rounded-xl bg-white/20 backdrop-blur-sm text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
                                />
                            </div>

                            {/* วิธีการชำระเงิน */}
                            <div>
                                <label className="block text-xl text-white font-medium mb-2">
                                    วิธีการชำระเงิน
                                </label>
                                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-12 h-12 bg-white/30 rounded-lg flex items-center justify-center">
                                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-white font-medium">เครียตเครดิต</div>
                                            <div className="text-white/80 text-sm">คงเหลือ ฿ 0.00 เครดิต</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Footer with total and submit button */}
                            <div className="flex items-center justify-end gap-4 pt-4 border-t border-[#ffffff]">
                                <div className="text-white">
                                    <div className="text-sm opacity-80">ยอดที่ต้องชำระ:</div>
                                    <div className="text-xl font-bold">฿ 0.00</div>
                                </div>
                                <button
                                    type="submit"
                                    className="bg-gradient-to-b from-[#2C5886] to-[#73AFED] hover:bg-slate-700 text-white px-6 py-3 rounded-xl font-medium transition-colors duration-200 shadow-lg"
                                >
                                    สั่งซื้อ
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <Footer />

        </div>
    )
}

export default FollowersPage