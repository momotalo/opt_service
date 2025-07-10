"use client";
import React from 'react';

interface PurchaseButtonProps {
    onPurchase: () => void;
    isLoading?: boolean;
    disabled?: boolean;
    text?: string;
    className?: string;
}

const PurchaseButton: React.FC<PurchaseButtonProps> = ({
    onPurchase,
    isLoading = false,
    disabled = false,
    text = "สั่งซื้อ",
    className = ""
}) => {
    return (
        <button
            onClick={onPurchase}
            disabled={disabled || isLoading}
            className={`
                px-6 py-3 rounded-lg font-medium text-white transition-all duration-200
                ${disabled || isLoading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue-500 hover:bg-blue-600 hover:shadow-lg'
                }
                ${className}
            `}
        >
            {isLoading ? (
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    กำลังดำเนินการ...
                </div>
            ) : (
                text
            )}
        </button>
    );
};

export default PurchaseButton;