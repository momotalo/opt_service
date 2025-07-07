import React from 'react'
import Image from 'next/image'

const WhyChooseUs = () => {
    return (
        <div className="w-full h-[520px] mb-30">
            {/* Container for left and right sections */}
            <div className="h-full flex gap-8 relative">

                {/* Left section - Blue background with text content */}
                <div className="w-2/6 h-full flex items-center p-4 bg-[#2C5886] rounded-r-4xl">
                </div>

                {/* Right section - Image background */}
                <div className="w-4/6 relative flex justify-center items-center bg-[#1D3A5F] rounded-l-4xl min-h-[400px]">
                    <div className="w-[70%] ml-20">
                        <h1 className="text-white text-4xl font-bold mb-6 leading-tight">
                            ทำไมต้องใช้บริการกับ RinTech<span className="text-[#C81013]">X</span>
                        </h1>

                        <hr className="w-[100%] h-[4px] mb-8 bg-gradient-to-l from-[#0E345B] via-[#1E6EC1] to-white border-0 rounded-full" />

                        <div className="border-l-2 border-[#fff] pl-4">
                            <div className="mb-4">
                                <div className="inline-flex items-center py-2 rounded-lg mb-4">
                                    <span className="text-3xl text-white font-semibold">จำหน่ายเเอคเคาท์พรีเพียมราคาถูก</span>
                                </div>
                            </div>

                            <div className="text-white text-base leading-relaxed">
                                <p className="mb-4">
                                    ซื้อแอคเคาท์พรีเมียม หรือ เติมเกม มีโปรโมชั่นดีๆเพียบ ง่ายนิดเดียว
                                    ใช้เวลาไม่นาน เติมเกมราคาถูก แอคเคาท์ราคาส่ง คุ้มค่าที่สุด มีให้เลือกมากมาย
                                    เรารวบรวม แอคเคาท์พรีเมียม และ เกมชื่อดังมากมาย ให้คุณในที่เดียว
                                    สะดวกสบายในการชำระเงิน ผ่านช่องทางต่างๆ
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Center white div overlapping both sides */}
                <div className="absolute top-1/2 left-[calc(20%+5rem)] transform -translate-x-1/2 -translate-y-1/2 z-20 rotate-3 hover:rotate-0 transition-transform duration-300">
                    <div className="bg-white rounded-2xl p-6 shadow-2xl w-[500px] h-[300px]">

                        {/* Image container */}
                        <div className="relative w-full h-full rounded-xl overflow-hidden">
                            <Image
                                src="/images/netflix3.jpg"
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

export default WhyChooseUs