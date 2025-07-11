"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { GameSelectionSection } from '@components/game';
import { PaymentMethodSection, QuantitySelector, PurchaseButton, OrderConfirmationModal } from '@components/shared';
import { useOrderConfirmation, createGameOrderData } from '@hooks/useOrderConfirmation';
import { mockGameProducts, GamePackage } from '@data/gameData';

interface GameProductDetailProps {
    gameId: string;
}

const GameProductDetail: React.FC<GameProductDetailProps> = ({ gameId }) => {
    const router = useRouter();
    const [gameUserId, setGameUserId] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedPackage, setSelectedPackage] = useState<GamePackage | null>(null);

    const {
        isModalOpen,
        orderData,
        openOrderConfirmation,
        closeOrderConfirmation,
        confirmOrder
    } = useOrderConfirmation();

    // ค้นหาเกมจาก id - ใช้ data ที่แยกออกมาแล้ว
    const game = mockGameProducts.find(g => g.id === gameId);

    if (!game) {
        return (
            <div className="container mx-auto px-4 py-8">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">ไม่พบเกม</h1>
                    <button
                        onClick={() => router.back()}
                        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
                    >
                        กลับ
                    </button>
                </div>
            </div>
        );
    }

    const handlePackageSelect = (pkg: GamePackage) => {
        setSelectedPackage(pkg);
        // รีเซ็ต quantity ถ้าแพ็คเกจใหม่มี stock น้อยกว่า quantity ปัจจุบัน
        if (quantity > pkg.stock) {
            setQuantity(Math.min(1, pkg.stock));
        }
    };

    const totalPrice = selectedPackage ? selectedPackage.price * quantity : 0;
    const maxQuantity = selectedPackage ? Math.min(100, selectedPackage.stock) : 100;

    const handlePurchase = async () => {
        if (!selectedPackage || !gameUserId.trim()) {
            alert('กรุณากรอก ID เกมและเลือกแพ็คเกจ');
            return;
        }

        if (selectedPackage.stock < quantity) {
            alert('จำนวนที่เลือกมากกว่าสินค้าคงเหลือ');
            return;
        }

        // สร้างข้อมูลสำหรับหน้ายืนยัน
        const orderData = createGameOrderData(
            game.name,
            game.imgSrc,
            gameUserId,
            selectedPackage,
            quantity
        );

        // เปิดหน้ายืนยันการสั่งซื้อ
        openOrderConfirmation(orderData);
    };

    const handleConfirmOrder = async () => {
        setIsLoading(true);
        try {
            await confirmOrder();
        } catch (error) {
            console.error('Purchase failed:', error);
            alert('เกิดข้อผิดพลาดในการสั่งซื้อ');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className="w-[80%] mx-auto my-8">
                <div className="bg-white rounded-3xl shadow-lg overflow-hidden border-4 border-blue-400">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] h-full">
                        {/* Left Side - Game Info */}
                        <div className="bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] text-white p-6">
                            <div className="text-center mb-6">
                                <h1 className="text-2xl font-bold mb-4">
                                    {game.name}
                                </h1>

                                {/* Game Icon */}
                                <div className="w-32 h-32 mx-auto mb-4">
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={game.imgSrc}
                                            alt={game.name}
                                            fill
                                            className="object-contain rounded-lg shadow-lg"
                                        />
                                    </div>
                                </div>

                                <p className="text-blue-100 mb-6">
                                    {game.description}
                                </p>
                            </div>

                            {/* Game Features */}
                            <div className="space-y-3">
                                <h3 className="font-semibold mb-3">หมายเหตุ:</h3>
                                {game.features.map((feature, index) => (
                                    <div key={index} className="flex items-center">
                                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                                        <span className="text-blue-100 text-sm">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            {/* How to find ID */}
                            <div className="mt-8 pt-6 border-t border-white/20">
                                <h3 className="font-semibold mb-3">วิธีหา ID:</h3>
                                {game.howToFindId.map((step, index) => (
                                    <div key={index} className="flex items-center mb-2">
                                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                                        <span className="text-blue-100 text-sm">{step}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Side - Purchase Form */}
                        <div className="bg-gray-100 p-6">
                            {/* Game ID Input */}
                            <div className="mb-6">
                                <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-500">
                                    {game.idLabel}
                                </h2>
                                <input
                                    type="text"
                                    placeholder={game.idPlaceholder}
                                    value={gameUserId}
                                    onChange={(e) => setGameUserId(e.target.value)}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                                <p className="text-xs text-gray-600 mt-1">
                                    {game.idExample}
                                </p>
                            </div>

                            {/* Package Selection */}
                            <div className="mb-6">
                                <h3 className="text-lg font-bold text-gray-800 mb-4">เลือกแพ็คเกจ</h3>
                                <GameSelectionSection
                                    gameName={game.name}
                                    gameImage={game.imgSrc}
                                    packages={game.packages}
                                    onPackageSelect={handlePackageSelect}
                                    selectedPackageId={selectedPackage?.id}
                                />
                            </div>

                            {/* Quantity Selector - Only show if package selected */}
                            {selectedPackage && selectedPackage.stock > 0 && (
                                <div className="mb-6">
                                    <h3 className="text-lg font-bold text-gray-800 mb-4">จำนวน</h3>
                                    <QuantitySelector
                                        quantity={quantity}
                                        onQuantityChange={setQuantity}
                                        min={1}
                                        max={maxQuantity}
                                    />
                                    <p className="text-sm text-gray-600 mt-2">
                                        สินค้าคงเหลือ: <span className="font-medium">{selectedPackage.stock} ชิ้น</span>
                                    </p>
                                </div>
                            )}

                            {/* Payment Method */}
                            <PaymentMethodSection theme="blue" className="mb-6" />

                            {/* Total and Purchase Button */}
                            <div className="flex items-center justify-between">
                                <div className="text-right">
                                    <p className="text-sm text-gray-600">ยอดที่ต้องจ่าย:</p>
                                    <p className="text-2xl font-bold text-gray-800">
                                        {totalPrice.toFixed(2)} บาท
                                    </p>
                                </div>

                                <PurchaseButton
                                    onPurchase={handlePurchase}
                                    isLoading={isLoading}
                                    disabled={!selectedPackage || !gameUserId.trim() || (selectedPackage && selectedPackage.stock <= 0)}
                                    text={
                                        !gameUserId.trim() || !selectedPackage
                                            ? 'กรุณาเลือกแพ็คเกจ'
                                            : selectedPackage.stock <= 0
                                                ? 'สินค้าหมด'
                                                : 'สั่งซื้อเลย'
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Order Confirmation Modal */}
            <OrderConfirmationModal
                isOpen={isModalOpen}
                orderData={orderData!}
                onConfirm={handleConfirmOrder}
                onCancel={closeOrderConfirmation}
            />
        </>
    );
};

export default GameProductDetail;