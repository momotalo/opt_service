"use client";
import React, { useState } from 'react';
import Image from 'next/image';

interface CashCardVariant {
    id: string;
    name: string;
    price: number;
    priceDefault?: number;
    stock: number;
    value: number;
    isAvailable: boolean;
    isPopular?: boolean;
}

interface CashCardSelectionProps {
    productName: string;
    productImage: string;
    variants: CashCardVariant[];
    onVariantSelect: (variant: CashCardVariant) => void;
    selectedVariantId?: string;
    className?: string;
}

const CashCardSelection: React.FC<CashCardSelectionProps> = ({
    productName,
    productImage,
    variants,
    onVariantSelect,
    selectedVariantId,
    className = ""
}) => {
    const [selectedVariant, setSelectedVariant] = useState<CashCardVariant | null>(
        selectedVariantId ? variants.find(v => v.id === selectedVariantId) || null : null
    );

    const handleVariantClick = (variant: CashCardVariant) => {
        if (variant.isAvailable && variant.stock > 0) {
            setSelectedVariant(variant);
            onVariantSelect(variant);
        }
    };

    return (
        <div className={className}>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {variants.map((variant) => {
                    const isOutOfStock = variant.stock <= 0;
                    const isLowStock = variant.stock > 0 && variant.stock <= 10;
                    const isSelected = selectedVariant?.id === variant.id;
                    const canSelect = variant.isAvailable && variant.stock > 0;

                    return (
                        <div
                            key={variant.id}
                            onClick={() => handleVariantClick(variant)}
                            className={`
                                relative p-4 rounded-lg border-2 cursor-pointer transition-all duration-200
                                ${isSelected
                                    ? 'border-amber-400 bg-amber-50 scale-105 shadow-lg'
                                    : canSelect
                                        ? 'border-gray-200 bg-white hover:border-amber-300 hover:bg-amber-50'
                                        : 'border-gray-200 bg-gray-50 opacity-50 cursor-not-allowed'
                                }
                            `}
                        >
                            {variant.isPopular && canSelect && (
                                <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                                    ยอดนิยม
                                </div>
                            )}

                            {isOutOfStock && (
                                <div className="absolute -top-2 -right-2 bg-gray-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                                    หมด
                                </div>
                            )}

                            <div className="text-center">
                                <div className="flex justify-center mb-3">
                                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 p-1">
                                        <div className="w-full h-full bg-white rounded-lg flex items-center justify-center">
                                            <div className="relative w-8 h-8">
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

                                <div className="font-bold text-sm mb-1">{variant.name}</div>

                                <div className="text-xs text-gray-600 mb-2">
                                    มูลค่า: {variant.value} {productName === 'NINTENDO' ? 'เยน' : 'บาท'}
                                </div>

                                <div className="space-y-1">
                                    <div className="text-lg font-bold text-amber-600">
                                        ฿{variant.price.toLocaleString()}
                                    </div>
                                    {variant.priceDefault && variant.priceDefault > variant.price && (
                                        <div className="text-sm text-gray-500 line-through">
                                            ฿{variant.priceDefault.toLocaleString()}
                                        </div>
                                    )}
                                </div>

                                {variant.priceDefault && variant.priceDefault > variant.price && (
                                    <div className="text-xs text-orange-600 font-medium mt-1">
                                        ประหยัด ฿{(variant.priceDefault - variant.price).toLocaleString()}
                                    </div>
                                )}

                                <div className="mt-2">
                                    <div className={`text-xs px-2 py-1 rounded-full inline-block ${isOutOfStock
                                        ? 'bg-red-100 text-red-700'
                                        : isLowStock
                                            ? 'bg-yellow-100 text-yellow-700'
                                            : 'bg-green-100 text-green-700'
                                        }`}>
                                        {isOutOfStock ? 'สินค้าหมด' : `${variant.stock} คงเหลือ`}
                                    </div>
                                </div>
                            </div>

                            {isSelected && (
                                <div className="absolute -top-2 -left-2 bg-amber-400 text-gray-900 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                                    ✓
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CashCardSelection;