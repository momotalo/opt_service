"use client"
import React, { useState } from 'react'
import { AppLayout, HeroBackground } from '@components/layouts'
import { AutoScroll, Button, SearchInput, AccountProductCard } from '@components/ui'
import { useRouter } from 'next/navigation'

const ListSortItem = [
    { id: 'all', name: 'ทั้งหมด' },
    { id: 'account', name: 'แอคเคาท์' },
    { id: 'streming', name: 'สตรีมมิ้ง' },
    { id: 'game', name: 'เกมส์' },
    { id: 'vpn', name: 'VPN' },
    { id: 'software', name: 'Software' },
];

const mockProducts = [
    {
        id: 1,
        name: 'FACEBOOK',
        imgSrc: '/images/socials/facebook.svg',
        price: 15,
        priceDefault: 20,
        save: 5,
        platform: 'แอนดรอยด์ | แอพเก่า',
    },
    {
        id: 2,
        name: 'TIKTOK',
        imgSrc: '/images/socials/tiktok.svg',
        price: 15,
        priceDefault: 20,
        save: 5,
        platform: 'แอนดรอยด์ | แอพเก่า',
    },
    {
        id: 3,
        name: 'INSTAGRAM',
        imgSrc: '/images/socials/instagram.svg',
        price: 15,
        priceDefault: 20,
        save: 5,
        platform: 'แอนดรอยด์ | แอพเก่า',
    },
    {
        id: 4,
        name: 'TWITTER',
        imgSrc: '/images/socials/twitter.svg',
        price: 15,
        priceDefault: 20,
        save: 5,
        platform: 'แอนดรอยด์ | แอพเก่า',
    },
    {
        id: 5,
        name: 'FACEBOOK',
        imgSrc: '/images/socials/facebook.svg',
        price: 15,
        priceDefault: 20,
        save: 5,
        platform: 'แอนดรอยด์ | แอพเก่า',
    },
    {
        id: 6,
        name: 'TIKTOK',
        imgSrc: '/images/socials/tiktok.svg',
        price: 15,
        priceDefault: 20,
        save: 5,
        platform: 'แอนดรอยด์ | แอพเก่า',
    },
    {
        id: 7,
        name: 'INSTAGRAM',
        imgSrc: '/images/socials/instagram.svg',
        price: 15,
        priceDefault: 20,
        save: 5,
        platform: 'แอนดรอยด์ | แอพเก่า',
    },
    {
        id: 8,
        name: 'TWITTER',
        imgSrc: '/images/socials/twitter.svg',
        price: 15,
        priceDefault: 20,
        save: 5,
        platform: 'แอนดรอยด์ | แอพเก่า',
    },
];

const AccountPage = () => {

    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    // Filter products based on search term
    const filteredProducts = mockProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    type Product = typeof mockProducts[number];

    const handleProductClick = (product: Product) => {
        router.push(`/account/${product.id}`);
    };

    const handleCategoryClick = (categoryId: string) => {
        setSelectedCategory(categoryId);
        // You can add filtering logic based on category here
    };

    return (
        <AppLayout className='bg-[#F1F7FE]'>
            {/* Background */}
            <HeroBackground
                backgroundUrl="/images/background/bg-follow.jpg"
                title='บริการขายแอคเคาท์สตรีมมิ่งราคาถูก'
                path='แอคเคาท์สตรีมมิ่ง'
                className="mb-4">
            </HeroBackground>

            <div className="w-[80%] mx-auto my-8">
                {/* Auto Scrolling */}
                <AutoScroll />

                {/* Button Sorting */}
                <div className='grid grid-cols-6 gap-4 w-full mt-4'>
                    {ListSortItem.map((items) => (
                        <div
                            key={items.id}
                            className={`flex justify-center items-center px-2 py-2 rounded-2xl shadow-lg cursor-pointer transition-all duration-200 ${selectedCategory === items.id
                                ? 'bg-blue-500 text-white'
                                : 'bg-[#fff] hover:bg-gray-50'
                                }`}
                            onClick={() => handleCategoryClick(items.id)}
                        >
                            <Button
                                text={items.name}
                                radius='sm'
                                variant='light'
                                className={`text-xl font-medium ${selectedCategory === items.id ? 'text-white' : 'text-gray-700'
                                    }`}
                            />
                        </div>
                    ))}
                </div>

                {/* Search Section */}
                <div className="w-full mt-6">
                    <h1 className='text-[#2C5886] text-2xl font-bold text-shadow-md mb-4'>
                        ค้นหาแอพพลิเคชัน
                    </h1>
                    <SearchInput
                        placeholder="ค้นหาแอพพลิเคชัน..."
                        value={searchTerm}
                        onChange={setSearchTerm}
                        className="mb-6"
                    />
                </div>

                {/* Product Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mt-8">
                    {filteredProducts.map((product) => (
                        <AccountProductCard
                            key={product.id}
                            name={product.name}
                            imgSrc={product.imgSrc}
                            price={product.price}
                            priceDefault={product.priceDefault}
                            save={product.save}
                            platform={product.platform}
                            onClick={() => handleProductClick(product)}
                        />
                    ))}
                </div>

                {/* Show no results message */}
                {filteredProducts.length === 0 && searchTerm && (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">ไม่พบแอพพลิเคชันที่ค้นหา</p>
                    </div>
                )}

            </div>
        </AppLayout>
    )
}

export default AccountPage