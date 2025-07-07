import React, { FC } from 'react'
import Image from 'next/image';
import Link from 'next/link';

interface CashCardProps {
    cardType: 'ROBLOX' | 'STEAM' | 'RIOT' | 'GAREBA';
    logoSrc: string;
    backgroundColor: string;
    headerColor: string;
}

const CashCard: FC<CashCardProps> = ({
    cardType,
    logoSrc,
    backgroundColor,
    headerColor
}) => {
    return (
        <div className="relative group cursor-pointer">
            {/* Card container */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Header colored bar */}
                <div
                    className="h-4 rounded-t-lg"
                    style={{ backgroundColor: headerColor }}
                >
                </div>

                {/* Main card area */}
                <div
                    className="relative h-[200px] flex flex-col items-center justify-center"
                    style={{ backgroundColor: backgroundColor }}
                >
                    {/* Card Type Label */}
                    <div className="absolute top-0 left-0 bg-white px-4 py-1 rounded-br-lg shadow-sm">
                        <span className="text-black text-base font-bold">{cardType} CARD</span>
                    </div>

                    {/* Decorative geometric shapes */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-20 transform rotate-45 translate-x-16 -translate-y-16"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-15 transform rotate-45 -translate-x-12 translate-y-12"></div>
                    </div>

                    {/* Logo circle */}
                    <div className="relative z-10 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <div className="w-16 h-16 relative">
                            <Image
                                src={logoSrc}
                                alt={`${cardType} logo`}
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom button */}
                <div className="flex justify-end bg-gray-600 text-white p-2 text-sm hover:bg-gray-700 transition-colors">
                    <Link href="" className='px-4 py-2 rounded-full text-[#fff] font-semibold bg-[#000]/40'>
                        สั่งซื้อ
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CashCard