import React, { FC } from 'react'
import Image from 'next/image';
import Link from 'next/link';

interface CashCardProps {
    id: number;
    cardType: string;
    logoSrc: string;
    backgroundColor?: string;
    headerColor?: string;
}

const CashCard: FC<CashCardProps> = ({
    id,
    cardType,
    logoSrc,
    backgroundColor,
    headerColor,
}) => {
    return (
        <div className="relative group cursor-pointer">
            {/* Main outer border frame */}
            <div className="relative border-2 border-amber-300 rounded-2xl p-1 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">

                {/* Inner card container */}
                <div className="rounded-xl overflow-hidden">
                    {/* Card title */}
                    <div className="px-4 py-3">
                        <h3 className="text-[#000] text-sm font-bold tracking-wide uppercase">
                            {cardType} card
                        </h3>
                    </div>

                    {/* Card image area */}
                    <div className="relative h-[300px] overflow-hidden rounded-t-xl">
                        <div className="absolute inset-0 bg-[#fff] shadow-2xl">
                            {/* Main logo/image */}
                            <div className="w-full h-full relative">
                                <Image
                                    src={logoSrc}
                                    alt={`${cardType} card`}
                                    fill
                                    className="object-cover p-2"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Bottom button */}
                    <div className="px-4 pb-4">
                        <Link
                            href={`/cash-card/${id}`}
                            className='w-full block text-center px-4 py-2.5 rounded-lg text-white font-semibold bg-amber-600 hover:bg-amber-700 transition-all duration-300 shadow-md hover:shadow-lg border border-amber-500'
                        >
                            สั่งซื้อ
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CashCard