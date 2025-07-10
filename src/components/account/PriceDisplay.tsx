"use client";
import React from 'react';

interface PriceDisplayProps {
    price: number;
    originalPrice?: number;
    currency?: string;
    className?: string;
}

const PriceDisplay: React.FC<PriceDisplayProps> = ({
    price,
    originalPrice,
    currency = "บาท",
    className = ""
}) => {
    const hasDiscount = originalPrice && originalPrice > price;
    const discountAmount = hasDiscount ? originalPrice - price : 0;

    return (
        <div className={`text-center ${className}`}>
            {/* Current Price */}
            <div className="text-2xl font-bold text-gray-800 mb-1">
                {price} {currency}
            </div>

            {/* Original Price and Discount */}
            {hasDiscount && (
                <div className="flex items-center justify-center gap-4 text-sm">
                    <span className="text-red-500 font-medium">
                        {discountAmount} {currency}ส่วนลด
                    </span>
                    <span className="text-gray-500 line-through">
                        {originalPrice} {currency}
                    </span>
                </div>
            )}
        </div>
    );
};

export default PriceDisplay;