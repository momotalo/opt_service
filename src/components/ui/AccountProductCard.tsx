import Image from 'next/image';
import React from 'react';

interface AccountProductCardProps {
    name: string;
    imgSrc: string;
    price: number;
    priceDefault: number;
    save: number;
    platform?: string;
    duration?: string;
    warranty?: string;
    onClick?: () => void;
}

const AccountProductCard: React.FC<AccountProductCardProps> = ({
    name,
    imgSrc,
    price,
    priceDefault,
    save,
    platform,
    onClick
}) => {
    return (
        <div
            className="bg-[#fff] rounded-xl shadow-md hover:shadow-2xl cursor-pointer overflow-hidden border border-[#000]/20"
            onClick={onClick}
        >
            <div className='bg-[#fff] rounded-xl border-2 border-[#000]/20 transform scale-110%'>
                {/* Header with platform name */}
                <div className="px-4 py-3">
                    <h3 className="text-sm font-bold text-blue-600 uppercase tracking-wide text-center">
                        {name}
                    </h3>
                </div>

                {/* Main Content */}
                <div className="p-4">
                    {/* Icon */}
                    <div className="flex justify-center mb-4">
                        <div className="w-30 h-30 flex items-center justify-center">
                            <div className="relative w-30 h-30">
                                <Image
                                    src={imgSrc}
                                    alt={name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Platform Info */}
                    <div className="text-center mb-4">
                        <p className="text-sm text-gray-600">{platform}</p>
                    </div>
                </div>
            </div>

            {/* Price Section - Always Visible */}
            <div className="bg-[#fff] px-8 py-4">
                <div className="relative py-4 space-y-2">
                    {/* เส้นขอบบฯ */}
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400" />

                    {/* เส้นขอบล่าง */}
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400" />

                    {/* เนื้อหา */}
                    <div className="text-center">
                        <span className="text-sm text-gray-600">ราคา : </span>
                        <span className="text-lg font-bold text-blue-600">{price} บาท</span>
                    </div>

                    <div className="text-center">
                        <span className="text-sm text-gray-600">ราคาปกติ : </span>
                        <span className="text-sm text-gray-500 line-through">{priceDefault} บาท</span>
                    </div>

                    <div className="text-center">
                        <span className="text-sm font-medium text-orange-600">
                            ประหยัด {save}.00 บาท
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountProductCard;