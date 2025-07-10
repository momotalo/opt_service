"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { QuantitySelector, PurchaseButton, ProductSelection } from '@components/account'

interface ProductDetailProps {
    productId: string;
}

interface ProductVariant {
    id: string;
    name: string;
    price: number;
    priceDefault?: number;
    stock: number;
    duration?: string;
    isAvailable: boolean;
}

// Mock data - ในความเป็นจริงควรดึงจาก API
const mockProducts = [
    {
        id: 1,
        name: 'FACEBOOK',
        imgSrc: '/images/socials/facebook.svg',
        platform: 'แอนดรอยด์ | แอพเก่า',
        minQuantity: 1,
        maxQuantity: 1000,
        description: 'Facebook แอคเก่า สำหรับการใช้งานทั่วไป',
        features: [
            'รายละเอียดสินค้า',
            'คุณภาพสินค้าดี',
            'บริการหลังการขาย'
        ],
        variants: [
            {
                id: 'fb-1m',
                name: 'Facebook แอคใหม่',
                price: 22,
                priceDefault: 25,
                stock: 245,
                duration: '1 เดือน',
                isAvailable: true
            },
            {
                id: 'fb-1y',
                name: 'Facebook (แอค 1 ปี)',
                price: 219,
                priceDefault: 250,
                stock: 4,
                duration: '1 ปี',
                isAvailable: true
            }
        ]
    },
    {
        id: 2,
        name: 'TIKTOK',
        imgSrc: '/images/socials/tiktok.svg',
        platform: 'แอนดรอยด์ | แอพเก่า',
        minQuantity: 1,
        maxQuantity: 1000,
        description: 'TikTok แอคเก่า สำหรับการใช้งานทั่วไป',
        features: [
            'รายละเอียดสินค้า',
            'คุณภาพสินค้าดี',
            'บริการหลังการขาย'
        ],
        variants: [
            {
                id: 'tt-1m',
                name: 'TikTok แอคใหม่',
                price: 25,
                priceDefault: 30,
                stock: 150,
                duration: '1 เดือน',
                isAvailable: true
            },
            {
                id: 'tt-1y',
                name: 'TikTok (แอค 1 ปี)',
                price: 299,
                priceDefault: 350,
                stock: 5,
                duration: '1 ปี',
                isAvailable: true
            }
        ]
    },
    {
        id: 3,
        name: 'INSTAGRAM',
        imgSrc: '/images/socials/instagram.svg',
        platform: 'แอนดรอยด์ | แอพเก่า',
        minQuantity: 1,
        maxQuantity: 1000,
        description: 'Instagram แอคเก่า สำหรับการใช้งานทั่วไป',
        features: [
            'รายละเอียดสินค้า',
            'คุณภาพสินค้าดี',
            'บริการหลังการขาย'
        ],
        variants: [
            {
                id: 'ig-1m',
                name: 'Instagram แอคใหม่',
                price: 25,
                priceDefault: 30,
                stock: 89,
                duration: '1 เดือน',
                isAvailable: true
            },
            {
                id: 'ig-1y',
                name: 'Instagram (แอค 1 ปี)',
                price: 250,
                priceDefault: 300,
                stock: 12,
                duration: '1 ปี',
                isAvailable: true
            }
        ]
    },
    {
        id: 4,
        name: 'TWITTER',
        imgSrc: '/images/socials/twitter.svg',
        platform: 'แอนดรอยด์ | แอพเก่า',
        minQuantity: 1,
        maxQuantity: 1000,
        description: 'Twitter แอคเก่า สำหรับการใช้งานทั่วไป',
        features: [
            'รายละเอียดสินค้า',
            'คุณภาพสินค้าดี',
            'บริการหลังการขาย'
        ],
        variants: [
            {
                id: 'tw-1m',
                name: 'Twitter แอคใหม่',
                price: 20,
                priceDefault: 25,
                stock: 76,
                duration: '1 เดือน',
                isAvailable: true
            },
            {
                id: 'tw-1y',
                name: 'Twitter (แอค 1 ปี)',
                price: 199,
                priceDefault: 250,
                stock: 8,
                duration: '1 ปี',
                isAvailable: true
            }
        ]
    },
    {
        id: 5,
        name: 'FACEBOOK',
        imgSrc: '/images/socials/facebook.svg',
        price: 25,
        priceDefault: 30,
        save: 5,
        platform: 'แอนดรอยด์ | แอพเก่า',
        minQuantity: 1,
        maxQuantity: 1000,
        description: 'Facebook แอคเก่า สำหรับการใช้งานทั่วไป',
        features: [
            'รายละเอียดสินค้า',
            'คุณภาพสินค้าดี',
            'บริการหลังการขาย'
        ]
    },
    {
        id: 6,
        name: 'TIKTOK',
        imgSrc: '/images/socials/tiktok.svg',
        price: 25,
        priceDefault: 30,
        save: 5,
        platform: 'แอนดรอยด์ | แอพเก่า',
        minQuantity: 1,
        maxQuantity: 1000,
        description: 'TikTok แอคเก่า สำหรับการใช้งานทั่วไป',
        features: [
            'รายละเอียดสินค้า',
            'คุณภาพสินค้าดี',
            'บริการหลังการขาย'
        ]
    },
    {
        id: 7,
        name: 'INSTAGRAM',
        imgSrc: '/images/socials/instagram.svg',
        price: 25,
        priceDefault: 30,
        save: 5,
        platform: 'แอนดรอยด์ | แอพเก่า',
        minQuantity: 1,
        maxQuantity: 1000,
        description: 'Instagram แอคเก่า สำหรับการใช้งานทั่วไป',
        features: [
            'รายละเอียดสินค้า',
            'คุณภาพสินค้าดี',
            'บริการหลังการขาย'
        ]
    },
    {
        id: 8,
        name: 'TWITTER',
        imgSrc: '/images/socials/twitter.svg',
        price: 25,
        priceDefault: 30,
        save: 5,
        platform: 'แอนดรอยด์ | แอพเก่า',
        minQuantity: 1,
        maxQuantity: 1000,
        description: 'Twitter แอคเก่า สำหรับการใช้งานทั่วไป',
        features: [
            'รายละเอียดสินค้า',
            'คุณภาพสินค้าดี',
            'บริการหลังการขาย'
        ]
    },
];

const ProductDetail: React.FC<ProductDetailProps> = ({ productId }) => {
    const router = useRouter();
    const [quantity, setQuantity] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);

    // ค้นหาสินค้าจาก id
    const product = mockProducts.find(p => p.id === parseInt(productId));

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

    const handleVariantSelect = (variant: ProductVariant) => {
        setSelectedVariant(variant);
    };

    const totalPrice = selectedVariant ? selectedVariant.price * quantity : 0;

    const handlePurchase = async () => {
        if (!selectedVariant) {
            alert('กรุณาเลือกสินค้าก่อน');
            return;
        }

        setIsLoading(true);
        try {
            // จำลองการซื้อสินค้า
            await new Promise(resolve => setTimeout(resolve, 1500));

            // ส่งข้อมูลไปยังหน้าชำระเงินหรือประมวลผลการสั่งซื้อ
            console.log('Purchase:', {
                product: product.name,
                variant: selectedVariant.name,
                quantity,
                totalPrice
            });

            // เปลี่ยนหน้าไปยังหน้าชำระเงินหรือแสดงผลสำเร็จ
            alert('สั่งซื้อสำเร็จ!');
        } catch (error) {
            console.error('Purchase failed:', error);
            alert('เกิดข้อผิดพลาดในการสั่งซื้อ');
        } finally {
            setIsLoading(false);
        }
    };


    return (
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
                            <ProductSelection
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
    );
};

export default ProductDetail;