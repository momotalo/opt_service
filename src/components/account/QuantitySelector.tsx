"use client";
import React from 'react';

interface QuantitySelectorProps {
    quantity: number;
    onQuantityChange: (quantity: number) => void;
    min?: number;
    max?: number;
    className?: string;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
    quantity,
    onQuantityChange,
    min = 1,
    max = 999,
    className = ""
}) => {
    const handleDecrease = () => {
        if (quantity > min) {
            onQuantityChange(quantity - 1);
        }
    };

    const handleIncrease = () => {
        if (quantity < max) {
            onQuantityChange(quantity + 1);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value) || min;
        if (value >= min && value <= max) {
            onQuantityChange(value);
        }
    };

    return (
        <div className={`flex items-center ${className}`}>
            {/* Decrease Button */}
            <button
                onClick={handleDecrease}
                disabled={quantity <= min}
                className={`w-10 h-10 rounded-l-lg border border-gray-300 flex items-center justify-center font-bold transition-colors ${quantity <= min
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-blue-900 text-white hover:bg-blue-800'
                    }`}
            >
                -
            </button>

            {/* Quantity Input */}
            <input
                type="number"
                value={quantity}
                onChange={handleInputChange}
                min={min}
                max={max}
                className="w-20 h-10 border-t border-b border-gray-300 text-center font-medium focus:outline-none focus:border-blue-500"
            />

            {/* Increase Button */}
            <button
                onClick={handleIncrease}
                disabled={quantity >= max}
                className={`w-10 h-10 rounded-r-lg border border-gray-300 flex items-center justify-center font-bold transition-colors ${quantity >= max
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-blue-900 text-white hover:bg-blue-800'
                    }`}
            >
                +
            </button>
        </div>
    );
};

export default QuantitySelector;