"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import CashCardSelection from './CashcardSelectionSection';
import {
    ProductInfoSidebar,
    PaymentMethodSection,
    QuantitySelector,
    PurchaseButton,
    OrderConfirmationModal
} from '@components/shared';
import { mockCashCardProducts, CashCardVariant } from 'data/cashCardData';
import { useOrderConfirmation, createCashCardOrderData } from '@hooks/useOrderConfirmation';

interface CashCardProductDetailProps {
    productId: string;
}

const CashCardProductDetail: React.FC<CashCardProductDetailProps> = ({ productId }) => {
    const router = useRouter();
    const [quantity, setQuantity] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedVariant, setSelectedVariant] = useState<CashCardVariant | null>(null);

    const {
        isModalOpen,
        orderData,
        openOrderConfirmation,
        closeOrderConfirmation,
        confirmOrder
    } = useOrderConfirmation();

    const product = mockCashCardProducts.find(p => p.id === parseInt(productId));

    if (!product) {
        return (
            <div className="container mx-auto px-4 py-8">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">ไม่พบสินค้า</h1>
                    <button
                        onClick={() => router.back()}
                        className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700"
                    >
                        กลับ
                    </button>
                </div>
            </div>
        );
    }

    const handleVariantSelect = (variant: CashCardVariant) => {
        setSelectedVariant(variant);
    };

    const totalPrice = selectedVariant ? selectedVariant.price * quantity : 0;

    const handlePurchase = async () => {
        if (!selectedVariant) {
            alert('กรุณาเลือกบัตรก่อน');
            return;
        }

        // สร้างข้อมูลสำหรับหน้ายืนยัน
        const orderData = createCashCardOrderData(
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
                <div className="bg-white rounded-3xl shadow-lg overflow-hidden border-4 border-amber-400">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] h-full">
                        {/* Left Side - Product Info */}
                        <ProductInfoSidebar
                            title={`บัตรเติมเงิน ${product.name}`}
                            imgSrc={product.imgSrc}
                            platform={product.platform}
                            description={product.description}
                            features={product.features}
                            theme="amber"
                        />

                        {/* Right Side - Purchase Form */}
                        <div className="bg-gray-100 p-6">
                            <div className="mb-6">
                                <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-amber-500">
                                    เลือกบัตร
                                </h2>

                                <CashCardSelection
                                    productName={product.name}
                                    productImage={product.imgSrc}
                                    variants={product.variants}
                                    onVariantSelect={handleVariantSelect}
                                    selectedVariantId={selectedVariant?.id}
                                />
                            </div>

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
                                        สินค้าคงเหลือ : <span className="font-medium">{selectedVariant.stock} ใบ</span>
                                    </p>
                                </div>
                            )}

                            <PaymentMethodSection theme="amber" className="mb-6" />

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

export default CashCardProductDetail;