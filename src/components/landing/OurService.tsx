import React from 'react'
import Image from 'next/image'

const OurService = () => {
    return (
        <div className="w-full h-[520px] mb-15">
            {/* Container for left and right sections */}
            <div className="h-full flex gap-8 relative">

                {/* Left section - Blue background with text content */}
                <div className="w-1/2 h-full flex items-center p-4 bg-[#1D3A5F] rounded-r-4xl">
                    <div className="w-[80%]">
                        <h1 className="text-white text-4xl font-bold mb-4 leading-tight">
                            บริการของเรา
                        </h1>
                        <hr className="w-[100%] h-[4px] mb-4 bg-gradient-to-r from-[#0E345B] via-[#1E6EC1] to-white border-0 rounded-full" />

                        <div className="text-white text-base leading-relaxed space-y-1">
                            <p>เว็บขายแอคเคาท์ Netflix รายอาทิตย์ รายเดือน ,
                                Youtube Premium รายเดือน รายปี , Disney รายปี ,
                                WeTV VIP , IQIY Gold , Viu , Ch3 Plus , MonoMAX ,
                                HBO , Prime video , แอคเคาท์เปล่า , Gmail , Outlook ,
                                Facebook , Twitter , instagram , Discord
                                และส่วนลดอื่นๆ อีกมากมายทุกวันตลอดทั้งเดือน
                                แอคเคาท์พรีเมียมราคาถูกต้องที่นี่เท่านั้น เปิดให้บริการตลอด 24 ชั่วโมง</p>
                        </div>
                    </div>
                </div>

                {/* Right section - Image background */}
                <div className="w-1/2 relative flex justify-end items-center bg-[#2C5886] rounded-l-4xl">
                    {/* Movie grid background */}
                    <div className="relative w-[50%] h-[50%] rounded-l-3xl bg-white overflow-hidden">
                        <Image
                            src="/images/bg-home.jpg"
                            alt=""
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Center white div overlapping both sides */}
                <div className="absolute top-1/2 left-[calc(50%+5rem)] transform -translate-x-1/2 -translate-y-1/2 z-20 rotate-3 hover:rotate-0 transition-transform duration-300">
                    <div className="bg-white rounded-2xl p-6 shadow-2xl w-[400px] h-[300px]">

                        {/* Image container */}
                        <div className="relative w-full h-full rounded-xl overflow-hidden">
                            <Image
                                src="/images/netflix1.jpg"
                                alt="Netflix Interface"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default OurService