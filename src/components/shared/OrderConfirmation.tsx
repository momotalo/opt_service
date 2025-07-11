"use client";
import React from 'react';
import Image from 'next/image';
import { AppLayout, HeroBackground } from '@components/layouts';

interface OrderItem {
    name: string;
    details: string;
    price: number;
    discount: number;
    quantity: number;
}

interface OrderConfirmationProps {
    orderData: {
        category: 'account' | 'cashcard' | 'game';
        productName: string;
        productImage?: string;
        gameUserId?: string; // สำหรับเกม
        items: OrderItem[];
        totalAmount: number;
        userCredit: number;
    };
    onConfirm: () => void;
    onCancel: () => void;
}

const OrderConfirmation: React.FC<OrderConfirmationProps> = ({
    orderData,
    onConfirm,
    onCancel
}) => {
    const getCategoryTitle = (category: string) => {
        switch (category) {
            case 'account': return 'บริการขายแอคเคาท์สตรีมมิ่งราคาถูก';
            case 'cashcard': return 'บริการขายบัตรเติมเงินสดราคาถูก';
            case 'game': return 'บริการเติมเกมออนไลน์ราคาถูก';
            default: return 'บริการเติมเกมออนไลน์ราคาถูก';
        }
    };

    const getCategoryPath = (category: string) => {
        switch (category) {
            case 'account': return 'แอคเคาท์สตรีมมิ่ง';
            case 'cashcard': return 'บัตรเติมเงินสด';
            case 'game': return 'เติมเกม';
            default: return 'เติมเกม';
        }
    };

    const getBackgroundImage = (category: string) => {
        switch (category) {
            case 'account': return '/images/background/bg-follow.jpg';
            case 'cashcard': return '/images/background/bg-game.jpg';
            case 'game': return '/images/background/bg-game.jpg';
            default: return '/images/background/bg-follow.jpg';
        }
    };

    return (
        <AppLayout className='bg-[#F1F7FE]'>
            {/* Hero Background */}
            <HeroBackground
                backgroundUrl={getBackgroundImage(orderData.category)}
                title={getCategoryTitle(orderData.category)}
                path={`ยืนยันการสั่งซื้อ ${getCategoryPath(orderData.category)}`}
                className="mb-4"
            />

            {/* Main Content */}
            <div className="container mx-auto px-4 py-8">
                {/* Order Confirmation Card */}
                <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-blue-400">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] h-full">
                        {/* Left Side - Order Details */}
                        <div className="bg-white p-8 border-r border-gray-200">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                ข้อมูลในการใช้บริการ
                            </h2>

                            {/* Game User ID for games */}
                            {orderData.gameUserId && (
                                <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                                    <div className="flex items-center mb-2">
                                        <div className="w-1 h-1 bg-blue-500 rounded-full mr-2"></div>
                                        <span className="text-sm text-gray-600">ID เกม: {orderData.gameUserId}</span>
                                    </div>
                                </div>
                            )}

                            {/* Order Items List */}
                            <div className="space-y-4">
                                {orderData.items.map((item, index) => (
                                    <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0">
                                        <div className="flex items-start space-x-2 mb-2">
                                            <div className="w-1 h-1 bg-blue-500 rounded-full mt-2"></div>
                                            <div className="flex-1">
                                                <div className="text-sm text-gray-800 font-medium">{item.name}</div>
                                                <div className="text-xs text-gray-600">{item.details}</div>
                                                <div className="text-xs text-gray-500 mt-1">จำนวน: {item.quantity}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Additional Service Info */}
                            <div className="mt-8 space-y-3 text-sm text-gray-600">
                                <div className="flex items-start space-x-2">
                                    <div className="w-1 h-1 bg-blue-500 rounded-full mt-2"></div>
                                    <span>ใช้บริการเติมครั้งแรกสำหรับบัญชีของคุณด้วยระบบออโต้ บัญชีจะจำเป็นต้องออนไลน์ภายใน 3 นาทีหลังการสั่งซื้อ</span>
                                </div>
                                <div className="flex items-start space-x-2">
                                    <div className="w-1 h-1 bg-blue-500 rounded-full mt-2"></div>
                                    <span>การใช้บริการเติมเกมออนไลน์ กรุณาตรวจสอบข้อมูลให้ถูกต้องก่อนทำการสั่งซื้อ</span>
                                </div>
                                <div className="flex items-start space-x-2">
                                    <div className="w-1 h-1 bg-blue-500 rounded-full mt-2"></div>
                                    <span>หลังจากชำระเงินแล้ว ระบบจะดำเนินการเติมเข้าบัญชีภายใน 5-10 นาที</span>
                                </div>
                            </div>

                            {/* Checkbox */}
                            <div className="mt-6 flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                                    defaultChecked
                                />
                                <label htmlFor="terms" className="text-sm text-gray-600">
                                    ยืนยัน ยอมรับเงื่อนไขข้อกำหนด
                                </label>
                            </div>
                        </div>

                        {/* Right Side - Order Summary */}
                        <div className="bg-gray-50 p-8">
                            <h3 className="text-xl font-bold text-gray-800 mb-6">รายละเอียดสินค้า</h3>

                            {/* Product Info */}
                            <div className="bg-white rounded-lg p-4 mb-6">
                                <div className="flex items-center space-x-3 mb-4">
                                    {orderData.productImage && (
                                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 p-1">
                                            <div className="w-full h-full bg-white rounded-lg flex items-center justify-center">
                                                <div className="relative w-8 h-8">
                                                    <Image
                                                        src={orderData.productImage}
                                                        alt={orderData.productName}
                                                        fill
                                                        className="object-contain"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    <div>
                                        <div className="font-bold text-gray-800">{orderData.productName}</div>
                                        <div className="text-sm text-gray-600">
                                            {orderData.items[0]?.name || orderData.items[0]?.details}
                                        </div>
                                    </div>
                                </div>

                                {/* Price Breakdown */}
                                <div className="space-y-2 text-sm">
                                    {orderData.items.map((item, index) => (
                                        <div key={index}>
                                            <div className="flex justify-between">
                                                <span>ราคา</span>
                                                <span>{item.price.toFixed(2)}</span>
                                            </div>
                                            {item.discount > 0 && (
                                                <div className="flex justify-between text-red-500">
                                                    <span>ส่วนลด</span>
                                                    <span>-{item.discount.toFixed(2)}</span>
                                                </div>
                                            )}
                                        </div>
                                    ))}

                                    <div className="flex justify-between font-bold text-lg pt-2 border-t border-gray-200">
                                        <span>ยอดรวม</span>
                                        <span>{orderData.totalAmount.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-blue-600 font-medium">
                                        <span>ยอดที่ต้องชำระ</span>
                                        <span>{orderData.totalAmount.toFixed(2)} บาท</span>
                                    </div>
                                </div>
                            </div>

                            {/* Payment Method */}
                            <div className="bg-blue-600 text-white p-4 rounded-lg mb-6">
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                                        <span className="text-blue-600 font-bold text-sm">₿</span>
                                    </div>
                                    <div>
                                        <div className="font-medium">การชำระผ่าน</div>
                                        <div className="text-sm opacity-90">เครดิตในระบบ ({orderData.userCredit.toFixed(2)} เครดิต)</div>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="space-y-3">
                                <button
                                    onClick={onConfirm}
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                                >
                                    ยืนยันการสั่งซื้อ
                                </button>
                                <div className="flex space-x-3">
                                    <button
                                        onClick={onCancel}
                                        className="flex-1 bg-gray-400 hover:bg-gray-500 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                                    >
                                        ย้อนกลับ
                                    </button>
                                    <button
                                        onClick={onCancel}
                                        className="flex-1 bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                                    >
                                        ยกเลิก
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Warning */}
                <div className="max-w-4xl mx-auto mt-8">
                    <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                        <div className="flex items-center justify-center space-x-2 mb-2">
                            <div className="w-8 h-8 text-red-500">
                                ⚠️
                            </div>
                        </div>
                        <p className="text-gray-600">
                            <span className="text-red-500 font-medium">กรุณาตรวจสอบข้อมูลให้ถูกต้องก่อนทำการยืนยันการสั่งซื้อ</span>
                        </p>
                        <p className="text-sm text-gray-500 mt-2">
                            เมื่อกดยืนยันแล้วจะไม่สามารถแก้ไขข้อมูลได้
                        </p>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
};

export default OrderConfirmation;