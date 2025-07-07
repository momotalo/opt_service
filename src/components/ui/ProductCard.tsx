import Image from 'next/image';
import React from 'react';

interface ProductCardProps {
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

const ProductCard: React.FC<ProductCardProps> = ({
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
            className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer overflow-hidden relative"
            onClick={onClick}
        >
            {/* Header with platform name */}
            <div className="text-[#000] px-4 py-3">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-center">{name}</h3>
            </div>

            {/* Main Content - Always Visible */}
            <div className="p-6">
                {/* Icon */}
                <div className="flex justify-center mb-4">
                    <div className="w-20 h-20 bg-blue-50 rounded-lg border-2 border-blue-200 flex items-center justify-center">
                        <Image
                            src={imgSrc}
                            alt={name}
                            width={50}
                            height={50}
                            className="w-16 h-16 object-contain"
                        />
                    </div>
                </div>

                {/* Platform Info - Always Visible */}
                <div className="text-center space-y-1">
                    <p className="text-sm text-gray-600">{platform}</p>
                </div>
            </div>

            {/* Hover Content - Slide up from bottom */}
            <div className="absolute bottom-0 left-0 right-0 bg-[#F7F7F7]/80 rounded-2xl shadow-xl/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out border-t border-gray-100">
                <div className="p-4 space-y-3">
                    {/* Price Section */}
                    <div className="text-center space-y-2">
                        <div className="text-lg font-bold text-blue-600">
                            ราคา {price} บาท
                        </div>
                        <div className="text-sm text-gray-500 line-through">
                            ราคาปกติ {priceDefault} บาท
                        </div>
                        <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium inline-block">
                            ประหยัด {save} บาท
                        </div>
                    </div>
                </div>
            </div>

            {/* Overlay gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        </div>
    );
};

export default ProductCard;