import React, { FC } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface GameCardProps {
    id?: string;
    title: string;
    image: string;
    discount: string;
    onClick?: () => void;
}

const GameCard: FC<GameCardProps> = ({ id, title, image, discount, onClick }) => {
    const router = useRouter();

    const handleClick = () => {
        if (onClick) {
            onClick();
        } else if (id) {
            // Navigate to game product page
            router.push(`/topup/${id}`);
        }
    };

    return (
        <div className="relative group cursor-pointer" onClick={handleClick}>
            {/* Hanger hole - positioned absolutely above the card */}
            <div className="absolute flex flex-col items-center top-2 left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-4 h-2 bg-white rounded-t-full"></div>
                <div className="w-16 h-3 bg-white rounded-full"></div>
            </div>

            {/* Main card with game image */}
            <div className="relative rounded-lg overflow-hidden hover:opacity-90 transition-opacity">
                <div className="relative h-[288px] bg-black">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                    />

                    {/* Content overlay with opacity background */}
                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 bg-opacity-10 text-white p-3">
                        <div className="flex justify-between items-center mb-1">
                            <span className="text-xs text-gray-300">GARENA SHELLS</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-xs text-gray-400">ลด: {discount || '0.00'}%</span>
                            <span className="text-sm font-semibold text-white">สั่งซื้อ</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameCard