"use client";
import React, { useState } from 'react';
import Image from 'next/image';

interface ProductVariant {
    id: string;
    name: string;
    price: number;
    priceDefault?: number;
    stock: number;
    duration?: string;
    isAvailable: boolean;
}

interface ProductSelectionProps {
    productName: string;
    productImage: string;
    variants: ProductVariant[];
    onVariantSelect: (variant: ProductVariant) => void;
    selectedVariantId?: string;
    className?: string;
}

const ProductSelection: React.FC<ProductSelectionProps> = ({
    productName,
    productImage,
    variants,
    onVariantSelect,
    selectedVariantId,
    className = ""
}) => {
    const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(
        selectedVariantId ? variants.find(v => v.id === selectedVariantId) || null : null
    );

    const handleVariantClick = (variant: ProductVariant) => {
        if (variant.isAvailable) {
            setSelectedVariant(variant);
            onVariantSelect(variant);
        }
    };

    return (
        <div className={`bg-white rounded-lg p-4 mb-6 ${className}`}>
            <div className="flex items-center mb-3">
                <h3 className="font-bold text-gray-800">{productName}</h3>
            </div>

            <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 p-1">
                    <div className="w-full h-full bg-white rounded-lg flex items-center justify-center">
                        <div className="relative w-12 h-12">
                            <Image
                                src={productImage}
                                alt={productName}
                                fill
                                className="object-cover rounded"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Variants List */}
            <div className="space-y-2">
                {variants.map((variant) => (
                    <div
                        key={variant.id}
                        onClick={() => handleVariantClick(variant)}
                        className={`
                            border-2 rounded-lg p-3 cursor-pointer transition-all duration-200
                            ${selectedVariant?.id === variant.id
                                ? 'border-orange-500 bg-orange-50'
                                : 'border-gray-200 hover:border-gray-300'
                            }
                            ${!variant.isAvailable
                                ? 'opacity-50 cursor-not-allowed bg-gray-50'
                                : 'hover:bg-gray-50'
                            }
                        `}
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                    <h4 className="font-medium text-gray-800 text-sm">
                                        {variant.name}
                                    </h4>
                                    {variant.duration && (
                                        <span className="text-xs text-gray-500">
                                            ({variant.duration})
                                        </span>
                                    )}
                                </div>

                                <div className="flex items-center gap-2">
                                    <span className="font-bold text-blue-600">
                                        ฿{variant.price}
                                    </span>
                                    {variant.priceDefault && variant.priceDefault > variant.price && (
                                        <span className="text-sm text-gray-500 line-through">
                                            ฿{variant.priceDefault}
                                        </span>
                                    )}
                                </div>
                            </div>

                            <div className="text-right">
                                <div className={`text-xs px-2 py-1 rounded-full ${variant.isAvailable
                                    ? variant.stock > 10
                                        ? 'bg-green-100 text-green-700'
                                        : 'bg-yellow-100 text-yellow-700'
                                    : 'bg-red-100 text-red-700'
                                    }`}>
                                    {variant.isAvailable
                                        ? variant.stock > 0
                                            ? `${variant.stock} คงเหลือ`
                                            : 'หมด'
                                        : 'ไม่พร้อมจำหน่าย'
                                    }
                                </div>
                            </div>
                        </div>

                        {/* Selection Indicator */}
                        {selectedVariant?.id === variant.id && (
                            <div className="mt-2 pt-2 border-t border-orange-200">
                                <div className="flex items-center gap-2 text-orange-600">
                                    <div className="w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                    </div>
                                    <span className="text-sm font-medium">เลือกแล้ว</span>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Selected Variant Summary */}
            {selectedVariant && (
                <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="text-center">
                        <p className="text-sm text-gray-600 mb-1">สินค้าที่เลือก</p>
                        <p className="font-bold text-blue-600">
                            {selectedVariant.name} - ฿{selectedVariant.price}
                        </p>
                        {selectedVariant.duration && (
                            <p className="text-xs text-gray-500">
                                ระยะเวลา: {selectedVariant.duration}
                            </p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductSelection;