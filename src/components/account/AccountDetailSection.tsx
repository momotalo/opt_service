"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { QuantitySelector, PurchaseButton, AccountSelectionSection } from '@components/account';
import { mockAccountProducts, AccountVariant } from '@data/accountData';
import { useOrderConfirmation, createAccountOrderData } from '@hooks/useOrderConfirmation';
import OrderConfirmationModal from '@components/shared/OrderConfirmationModal';

interface AccountDetailSectionProps {
    productId: string;
}

const AccountDetailSection: React.FC<AccountDetailSectionProps> = ({ productId }) => {
    const router = useRouter();
    const [quantity, setQuantity] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedVariant, setSelectedVariant] = useState<AccountVariant | null>(null);

    const {
        isModalOpen,
        orderData,
        openOrderConfirmation,
        closeOrderConfirmation,
        confirmOrder
    } = useOrderConfirmation();

    // ค้นหาสินค้าจาก id - ใช้ data ที่แยกออกมาแล้ว
    const product = mockAccountProducts.find(p => p.id === parseInt(productId));

    if (!product) {
        return (
            <div className="container mx-auto px-4 py-8">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">ไม่พบสินค้า</h1>
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

    const handleVariantSelect = (variant: AccountVariant) => {
        setSelectedVariant(variant);
    };

    const totalPrice = selectedVariant ? selectedVariant.price * quantity : 0;

    const handlePurchase = async () => {
        if (!selectedVariant) {
            alert('กรุณาเลือกสินค้าก่อน');
            return;
        }

        // สร้างข้อมูลสำหรับหน้ายืนยัน
        const orderData = createAccountOrderData(
            product.name,
            product.imgSrc,
            selectedVariant,
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
                        {/* Left Side - Product Info */}
                        <div className="bg-white p-6">
                            <div className="text-center mb-6">
                                <h1 className="text-2xl font-bold text-pink-500 mb-4">
                                    {product.name}
                                </h1>

                                {/* Product Icon */}
                                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 p-1">
                                    <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                                        <div className="relative w-16 h-16">
                                            <Image
                                                src={product.imgSrc}
                                                alt={product.name}
                                                fill
                                                className="object-cover rounded-lg"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Product Features */}
                            <div className="space-y-3">
                                {product.features.map((feature, index) => (
                                    <div key={index} className="flex items-center">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                        <span className="text-gray-700 text-sm">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Duplicate Product Info */}
                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <div className="flex items-center mb-3">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                    <span className="text-gray-700 text-sm">รายละเอียดสินค้า</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                    <span className="text-gray-700 text-sm">คุณภาพสินค้าดี</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Purchase Form */}
                        <div className="bg-gray-100 p-6">
                            <div className="mb-6">
                                <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-500">
                                    เลือกสินค้า
                                </h2>

                                {/* Product Selection Component */}
                                <AccountSelectionSection
                                    productName={product.name}
                                    productImage={product.imgSrc}
                                    variants={product.variants ?? []}
                                    onVariantSelect={handleVariantSelect}
                                    selectedVariantId={selectedVariant?.id}
                                />
                            </div>

                            {/* Quantity Selector - Only show if variant selected */}
                            {selectedVariant && (
                                <div className="mb-6">
                                    <h3 className="text-lg font-bold text-gray-800 mb-4">จำนวน</h3>
                                    <QuantitySelector
                                        quantity={quantity}
                                        onQuantityChange={setQuantity}
                                        min={product.minQuantity}
                                        max={Math.min(product.maxQuantity, selectedVariant.stock)}
                                    />
                                    <p className="text-sm text-gray-600 mt-2">
                                        สินค้าคงเหลือ : <span className="font-medium">{selectedVariant.stock} ชิ้น</span>
                                    </p>
                                </div>
                            )}

                            {/* Purchase Section */}
                            <div className="mb-6">
                                <h3 className="text-lg font-bold text-gray-800 mb-4">วิธีการชำระเงิน</h3>
                                <div className="bg-blue-900 text-white p-4 rounded-lg flex items-center">
                                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                                        <span className="text-blue-900 font-bold text-sm">$</span>
                                    </div>
                                    <div>
                                        <p className="font-medium">เครดิตคงเหลือ</p>
                                        <p className="text-sm opacity-90">คงเหลือ 0 เครดิต</p>
                                    </div>
                                </div>
                            </div>

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
                                    disabled={!selectedVariant || quantity < product.minQuantity}
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

export default AccountDetailSection;