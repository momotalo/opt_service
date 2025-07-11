export interface AccountVariant {
    id: string;
    name: string;
    price: number;
    priceDefault?: number;
    stock: number;
    duration?: string;
    isAvailable: boolean;
    isPopular?: boolean;
}

export interface AccountProduct {
    id: number;
    name: string;
    imgSrc: string;
    price?: number; // สำหรับ products ที่ไม่มี variants
    priceDefault?: number;
    save?: number;
    platform: string;
    minQuantity: number;
    maxQuantity: number;
    description: string;
    features: string[];
    variants?: AccountVariant[];
}

export const mockAccountProducts: AccountProduct[] = [
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
            },
            {
                id: 'fb-12',
                name: 'Facebook (แอค 1 ปี)',
                price: 219,
                priceDefault: 250,
                stock: 4,
                duration: '1 ปี',
                isAvailable: true
            },
            {
                id: 'fb-1f',
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
    // Products without variants (for listing page)
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
    }
];

// Helper function สำหรับ account listing page
export const getAccountListingProducts = () => {
    return mockAccountProducts.filter(product => !product.variants);
};

// Helper function สำหรับ account detail page
export const getAccountDetailProducts = () => {
    return mockAccountProducts.filter(product => product.variants);
};