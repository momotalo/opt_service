export interface CashCardVariant {
    id: string;
    name: string;
    price: number;
    priceDefault?: number;
    stock: number;
    value: number;
    isAvailable: boolean;
    isPopular?: boolean;
}

export interface CashCardProduct {
    id: number;
    name: string;
    imgSrc: string;
    platform: string;
    minQuantity: number;
    maxQuantity: number;
    description: string;
    features: string[];
    variants: CashCardVariant[];
}

export const mockCashCardProducts: CashCardProduct[] = [
    {
        id: 1,
        name: 'CASH',
        imgSrc: '/images/cash-card/cash.svg',
        platform: 'บัตรเติมเงินสด',
        minQuantity: 1,
        maxQuantity: 100,
        description: 'บัตรเติมเงินสดสำหรับใช้งานทั่วไป',
        features: [
            'บัตรเติมเงินแท้ 100%',
            'รับประกันความถูกต้อง',
            'ส่งโค้ดทันทีหลังชำระเงิน',
            'บริการหลังการขาย 24 ชั่วโมง'
        ],
        variants: [
            {
                id: 'cash-50',
                name: 'บัตรเติมเงิน 50 บาท',
                price: 45,
                priceDefault: 50,
                stock: 150,
                value: 50,
                isAvailable: true,
                isPopular: true
            },
            {
                id: 'cash-100',
                name: 'บัตรเติมเงิน 100 บาท',
                price: 92,
                priceDefault: 100,
                stock: 200,
                value: 100,
                isAvailable: true
            },
            {
                id: 'cash-300',
                name: 'บัตรเติมเงิน 300 บาท',
                price: 285,
                priceDefault: 300,
                stock: 75,
                value: 300,
                isAvailable: true
            },
            {
                id: 'cash-500',
                name: 'บัตรเติมเงิน 500 บาท',
                price: 475,
                priceDefault: 500,
                stock: 50,
                value: 500,
                isAvailable: true
            }
        ]
    },
    {
        id: 2,
        name: 'STEAM',
        imgSrc: '/images/cash-card/steam.svg',
        platform: 'Steam Wallet',
        minQuantity: 1,
        maxQuantity: 50,
        description: 'บัตรเติมเงิน Steam สำหรับซื้อเกมและไอเทม',
        features: [
            'รหัส Steam Wallet แท้',
            'ใช้ได้ทันทีหลังรับโค้ด',
            'รองรับการซื้อเกมทุกประเภท',
            'บริการสนับสนุน 24/7'
        ],
        variants: [
            {
                id: 'steam-50',
                name: 'Steam Wallet 50 บาท',
                price: 48,
                priceDefault: 50,
                stock: 100,
                value: 50,
                isAvailable: true,
                isPopular: true
            },
            {
                id: 'steam-100',
                name: 'Steam Wallet 100 บาท',
                price: 95,
                priceDefault: 100,
                stock: 120,
                value: 100,
                isAvailable: true
            },
            {
                id: 'steam-300',
                name: 'Steam Wallet 300 บาท',
                price: 290,
                priceDefault: 300,
                stock: 80,
                value: 300,
                isAvailable: true
            },
            {
                id: 'steam-500',
                name: 'Steam Wallet 500 บาท',
                price: 485,
                priceDefault: 500,
                stock: 45,
                value: 500,
                isAvailable: true
            }
        ]
    },
    {
        id: 3,
        name: 'RIOT',
        imgSrc: '/images/cash-card/riot.svg',
        platform: 'Riot Points',
        minQuantity: 1,
        maxQuantity: 50,
        description: 'Riot Points สำหรับ League of Legends และ Valorant',
        features: [
            'Riot Points แท้จากผู้จำหน่ายอย่างเป็นทางการ',
            'ใช้ได้กับ LoL, Valorant, TFT',
            'เติมเข้าบัญชีทันที',
            'รับประกันการใช้งาน'
        ],
        variants: [
            {
                id: 'riot-100',
                name: 'Riot Points 100 RP',
                price: 38,
                priceDefault: 40,
                stock: 200,
                value: 100,
                isAvailable: true,
                isPopular: true
            },
            {
                id: 'riot-300',
                name: 'Riot Points 300 RP',
                price: 95,
                priceDefault: 100,
                stock: 150,
                value: 300,
                isAvailable: true
            },
            {
                id: 'riot-650',
                name: 'Riot Points 650 RP',
                price: 190,
                priceDefault: 200,
                stock: 100,
                value: 650,
                isAvailable: true
            },
            {
                id: 'riot-1380',
                name: 'Riot Points 1380 RP',
                price: 380,
                priceDefault: 400,
                stock: 75,
                value: 1380,
                isAvailable: true
            }
        ]
    },
    {
        id: 4,
        name: 'NINTENDO',
        imgSrc: '/images/cash-card/nintendo.svg',
        platform: 'Nintendo eShop',
        minQuantity: 1,
        maxQuantity: 30,
        description: 'บัตรเติมเงิน Nintendo eShop สำหรับซื้อเกม Switch',
        features: [
            'รหัส Nintendo eShop แท้',
            'ใช้ได้กับ Nintendo Switch',
            'เติมเงินเข้า eShop ทันที',
            'รองรับการซื้อเกมและ DLC'
        ],
        variants: [
            {
                id: 'nintendo-500',
                name: 'Nintendo eShop 500 เยน',
                price: 145,
                priceDefault: 150,
                stock: 80,
                value: 500,
                isAvailable: true,
                isPopular: true
            },
            {
                id: 'nintendo-1000',
                name: 'Nintendo eShop 1000 เยน',
                price: 285,
                priceDefault: 300,
                stock: 60,
                value: 1000,
                isAvailable: true
            },
            {
                id: 'nintendo-3000',
                name: 'Nintendo eShop 3000 เยน',
                price: 850,
                priceDefault: 900,
                stock: 40,
                value: 3000,
                isAvailable: true
            },
            {
                id: 'nintendo-5000',
                name: 'Nintendo eShop 5000 เยน',
                price: 1420,
                priceDefault: 1500,
                stock: 25,
                value: 5000,
                isAvailable: true
            }
        ]
    }
];