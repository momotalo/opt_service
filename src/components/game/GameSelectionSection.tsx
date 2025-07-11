"use client";
import React, { useState } from 'react';
import Image from 'next/image';

interface GamePackage {
    id: string;
    amount: string;
    price: number;
    priceDefault?: number;
    vpAmount: number;
    bonus?: string;
    isPopular?: boolean;
    stock: number; // เพิ่มจำนวนคงเหลือ
    isAvailable?: boolean; // เพิ่มสถานะว่าพร้อมจำหน่ายหรือไม่
}

interface GamePackageSelectionProps {
    gameName: string;
    gameImage?: string; // เพิ่ม prop สำหรับ game logo
    packages: GamePackage[];
    onPackageSelect: (pkg: GamePackage) => void;
    selectedPackageId?: string;
    className?: string;
}

const GamePackageSelection: React.FC<GamePackageSelectionProps> = ({
    gameName,
    gameImage,
    packages,
    onPackageSelect,
    selectedPackageId,
    className = ""
}) => {
    const [selectedPackage, setSelectedPackage] = useState<GamePackage | null>(
        selectedPackageId ? packages.find(p => p.id === selectedPackageId) || null : null
    );

    const handlePackageClick = (pkg: GamePackage) => {
        // ตรวจสอบว่าสินค้ามีในสต็อกและพร้อมจำหน่าย
        const canSelect = (pkg.isAvailable !== false) && pkg.stock > 0;

        if (canSelect) {
            setSelectedPackage(pkg);
            onPackageSelect(pkg);
        }
    };

    const getCurrencyName = (gameName: string) => {
        switch (gameName) {
            case 'VALORANT': return 'VP';
            case 'Garena Free Fire': return 'Diamond';
            case 'ROV: Arena of Valor': return 'Voucher';
            case 'EA SPORTS FC MOBILE': return 'FC Points';
            default: return 'Points';
        }
    };

    return (
        <div className={`${className}`}>
            {/* Packages Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {packages.map((pkg) => {
                    const isOutOfStock = pkg.stock <= 0;
                    const isLowStock = pkg.stock > 0 && pkg.stock <= 50;
                    const isSelected = selectedPackage?.id === pkg.id;
                    const canSelect = (pkg.isAvailable !== false) && pkg.stock > 0;

                    return (
                        <div
                            key={pkg.id}
                            onClick={() => handlePackageClick(pkg)}
                            className={`
                                relative p-4 rounded-lg border-2 cursor-pointer transition-all duration-200
                                ${isSelected
                                    ? 'border-yellow-400 bg-yellow-50 scale-105 shadow-lg'
                                    : canSelect
                                        ? 'border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50'
                                        : 'border-gray-200 bg-gray-50 opacity-50 cursor-not-allowed'
                                }
                            `}
                        >
                            {/* Popular Badge */}
                            {pkg.isPopular && canSelect && (
                                <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                                    ยอดนิยม
                                </div>
                            )}

                            {/* Out of Stock Badge */}
                            {isOutOfStock && (
                                <div className="absolute -top-2 -right-2 bg-gray-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                                    หมด
                                </div>
                            )}

                            <div className="text-center">
                                {/* Game Logo instead of Currency Badge */}
                                <div className="flex justify-center mb-3">
                                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 p-1">
                                        <div className="w-full h-full bg-white rounded-lg flex items-center justify-center">
                                            {gameImage ? (
                                                <div className="relative w-8 h-8">
                                                    <Image
                                                        src={gameImage}
                                                        alt={gameName}
                                                        fill
                                                        className="object-contain rounded"
                                                    />
                                                </div>
                                            ) : (
                                                <div className={`text-white text-xs px-2 py-1 rounded-full ${canSelect ? 'bg-red-500' : 'bg-gray-400'
                                                    }`}>
                                                    {getCurrencyName(gameName)}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Amount */}
                                <div className={`font-bold text-lg mb-1 ${canSelect ? 'text-gray-900' : 'text-gray-500'
                                    }`}>
                                    {pkg.amount}
                                </div>

                                {/* Price */}
                                <div className="space-y-1">
                                    <div className={`text-lg font-bold ${canSelect ? 'text-blue-600' : 'text-gray-400'
                                        }`}>
                                        ฿{pkg.price.toLocaleString()}
                                    </div>
                                    {pkg.priceDefault && pkg.priceDefault > pkg.price && (
                                        <div className="text-sm text-gray-500 line-through">
                                            ฿{pkg.priceDefault.toLocaleString()}
                                        </div>
                                    )}
                                </div>

                                {/* Bonus */}
                                {pkg.bonus && canSelect && (
                                    <div className="text-xs text-green-600 font-medium mt-1">
                                        {pkg.bonus}
                                    </div>
                                )}

                                {/* Discount Badge */}
                                {pkg.priceDefault && pkg.priceDefault > pkg.price && canSelect && (
                                    <div className="text-xs text-orange-600 font-medium mt-1">
                                        ประหยัด ฿{(pkg.priceDefault - pkg.price).toLocaleString()}
                                    </div>
                                )}

                                {/* Stock Status */}
                                <div className="mt-2">
                                    <div className={`text-xs px-2 py-1 rounded-full inline-block ${isOutOfStock
                                        ? 'bg-red-100 text-red-700'
                                        : isLowStock
                                            ? 'bg-yellow-100 text-yellow-700'
                                            : 'bg-green-100 text-green-700'
                                        }`}>
                                        {isOutOfStock
                                            ? 'สินค้าหมด'
                                            : `${pkg.stock} คงเหลือ`
                                        }
                                    </div>
                                </div>
                            </div>

                            {/* Selection Indicator */}
                            {isSelected && (
                                <div className="absolute -top-2 -left-2 bg-yellow-400 text-gray-900 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
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

export default GamePackageSelection;