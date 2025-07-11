export interface GamePackage {
    id: string;
    amount: string;
    price: number;
    priceDefault?: number;
    vpAmount: number;
    bonus?: string;
    isPopular?: boolean;
    stock: number;
    isAvailable?: boolean;
}

export interface GameProduct {
    id: string;
    name: string;
    imgSrc: string;
    description: string;
    idPlaceholder: string;
    idExample: string;
    idLabel: string;
    features: string[];
    howToFindId: string[];
    packages: GamePackage[];
}

export const mockGameProducts: GameProduct[] = [
    {
        id: 'valorant',
        name: 'VALORANT',
        imgSrc: '/images/games/valorant.svg',
        description: 'เติม VALORANT Points (VP) เพื่อซื้อสกิน, ตัวละคร, และไอเทมในเกม',
        idPlaceholder: 'ระบุ Riot ID ของคุณ เช่น PlayerName#TAG',
        idExample: '* ตัวอย่าง: YourName#1234',
        idLabel: 'กรอก ID เกม (Riot ID)',
        features: [
            'VP จะเข้าภายใน 5-10 นาที',
            'ตรวจสอบ Riot ID ให้ถูกต้อง',
            'สามารถติดต่อสอบถามได้ตลอด 24 ชั่วโมง'
        ],
        howToFindId: [
            'เปิดเกม VALORANT',
            'ดูที่มุมขวาบนของหน้าจอ',
            'Riot ID จะแสดงในรูปแบบ "ชื่อ#แท็ก"'
        ],
        packages: [
            {
                id: 'vp-475',
                amount: '475 VP',
                price: 125,
                priceDefault: 150,
                vpAmount: 475,
                stock: 150,
                isAvailable: true
            },
            {
                id: 'vp-1000',
                amount: '1,000 VP',
                price: 250,
                priceDefault: 300,
                vpAmount: 1000,
                stock: 200,
                isPopular: true,
                isAvailable: true
            },
            {
                id: 'vp-1950',
                amount: '1,950 VP',
                price: 500,
                priceDefault: 600,
                vpAmount: 1950,
                stock: 85,
                isAvailable: true
            },
            {
                id: 'vp-3250',
                amount: '3,250 VP',
                price: 825,
                priceDefault: 1000,
                vpAmount: 3250,
                stock: 45,
                isAvailable: true
            },
            {
                id: 'vp-5350',
                amount: '5,350 VP',
                price: 1350,
                priceDefault: 1650,
                vpAmount: 5350,
                stock: 25,
                isAvailable: true
            },
            {
                id: 'vp-11000',
                amount: '11,000 VP',
                price: 2750,
                priceDefault: 3300,
                vpAmount: 11000,
                stock: 0, // หมดสต็อก
                bonus: 'โบนัส 1,000 VP',
                isAvailable: false
            }
        ]
    },
    {
        id: 'garena',
        name: 'Garena Free Fire',
        imgSrc: '/images/games/garena.svg',
        description: 'เติม Diamonds เพื่อซื้อสกิน, ตัวละคร, และไอเทมในเกม Free Fire',
        idPlaceholder: 'ระบุ Player ID ของคุณ',
        idExample: '* ตัวอย่าง: 123456789',
        idLabel: 'กรอก Player ID',
        features: [
            'Diamonds จะเข้าภายใน 5-10 นาที',
            'ตรวจสอบ Player ID ให้ถูกต้อง',
            'สามารถติดต่อสอบถามได้ตลอด 24 ชั่วโมง'
        ],
        howToFindId: [
            'เปิดเกม Free Fire',
            'ดูที่หน้าโปรไฟล์',
            'Player ID จะแสดงด้านบน'
        ],
        packages: [
            {
                id: 'diamond-100',
                amount: '100 Diamonds',
                price: 32,
                priceDefault: 40,
                vpAmount: 100,
                stock: 300,
                isAvailable: true
            },
            {
                id: 'diamond-310',
                amount: '310 Diamonds',
                price: 99,
                priceDefault: 120,
                vpAmount: 310,
                stock: 250,
                isPopular: true,
                isAvailable: true
            },
            {
                id: 'diamond-520',
                amount: '520 Diamonds',
                price: 159,
                priceDefault: 200,
                vpAmount: 520,
                stock: 180,
                isAvailable: true
            },
            {
                id: 'diamond-1080',
                amount: '1,080 Diamonds',
                price: 319,
                priceDefault: 400,
                vpAmount: 1080,
                stock: 120,
                isAvailable: true
            },
            {
                id: 'diamond-2200',
                amount: '2,200 Diamonds',
                price: 639,
                priceDefault: 800,
                vpAmount: 2200,
                stock: 75,
                isAvailable: true
            },
            {
                id: 'diamond-5600',
                amount: '5,600 Diamonds',
                price: 1599,
                priceDefault: 2000,
                vpAmount: 5600,
                stock: 30,
                bonus: 'โบนัส 560 Diamonds',
                isAvailable: true
            }
        ]
    },
    {
        id: 'rov',
        name: 'ROV: Arena of Valor',
        imgSrc: '/images/games/rov.svg',
        description: 'เติม Vouchers เพื่อซื้อสกิน, ฮีโร่, และไอเทมในเกม ROV',
        idPlaceholder: 'ระบุ Player ID ของคุณ',
        idExample: '* ตัวอย่าง: 123456789',
        idLabel: 'กรอก Player ID',
        features: [
            'Vouchers จะเข้าภายใน 5-10 นาที',
            'ตรวจสอบ Player ID ให้ถูกต้อง',
            'สามารถติดต่อสอบถามได้ตลอด 24 ชั่วโมง'
        ],
        howToFindId: [
            'เปิดเกม ROV',
            'ดูที่หน้าโปรไฟล์',
            'Player ID จะแสดงด้านบน'
        ],
        packages: [
            {
                id: 'voucher-90',
                amount: '90 Vouchers',
                price: 29,
                priceDefault: 35,
                vpAmount: 90,
                stock: 220,
                isAvailable: true
            },
            {
                id: 'voucher-180',
                amount: '180 Vouchers',
                price: 59,
                priceDefault: 70,
                vpAmount: 180,
                stock: 180,
                isPopular: true,
                isAvailable: true
            },
            {
                id: 'voucher-360',
                amount: '360 Vouchers',
                price: 109,
                priceDefault: 140,
                vpAmount: 360,
                stock: 95,
                isAvailable: true
            },
            {
                id: 'voucher-720',
                amount: '720 Vouchers',
                price: 219,
                priceDefault: 280,
                vpAmount: 720,
                stock: 65,
                isAvailable: true
            },
            {
                id: 'voucher-1800',
                amount: '1,800 Vouchers',
                price: 549,
                priceDefault: 700,
                vpAmount: 1800,
                stock: 40,
                isAvailable: true
            },
            {
                id: 'voucher-3600',
                amount: '3,600 Vouchers',
                price: 1099,
                priceDefault: 1400,
                vpAmount: 3600,
                stock: 15,
                bonus: 'โบนัส 360 Vouchers',
                isAvailable: true
            }
        ]
    },
    {
        id: 'fc-mobile',
        name: 'EA SPORTS FC MOBILE',
        imgSrc: '/images/games/fc-mobile.svg',
        description: 'เติม FC Points เพื่อซื้อแพ็ค, นักเตะ, และไอเทมในเกม',
        idPlaceholder: 'ระบุ Player ID ของคุณ',
        idExample: '* ตัวอย่าง: 123456789',
        idLabel: 'กรอก Player ID',
        features: [
            'FC Points จะเข้าภายใน 5-10 นาที',
            'ตรวจสอบ Player ID ให้ถูกต้อง',
            'สามารถติดต่อสอบถามได้ตลอด 24 ชั่วโมง'
        ],
        howToFindId: [
            'เปิดเกม FC Mobile',
            'ดูที่หน้าโปรไฟล์',
            'Player ID จะแสดงด้านบน'
        ],
        packages: [
            {
                id: 'fc-500',
                amount: '500 FC Points',
                price: 39,
                priceDefault: 50,
                vpAmount: 500,
                stock: 160,
                isAvailable: true
            },
            {
                id: 'fc-1200',
                amount: '1,200 FC Points',
                price: 99,
                priceDefault: 120,
                vpAmount: 1200,
                stock: 140,
                isPopular: true,
                isAvailable: true
            },
            {
                id: 'fc-2500',
                amount: '2,500 FC Points',
                price: 199,
                priceDefault: 250,
                vpAmount: 2500,
                stock: 85,
                isAvailable: true
            },
            {
                id: 'fc-4200',
                amount: '4,200 FC Points',
                price: 329,
                priceDefault: 420,
                vpAmount: 4200,
                stock: 55,
                isAvailable: true
            },
            {
                id: 'fc-8750',
                amount: '8,750 FC Points',
                price: 659,
                priceDefault: 875,
                vpAmount: 8750,
                stock: 0, // หมดสต็อก
                isAvailable: false
            },
            {
                id: 'fc-12000',
                amount: '12,000 FC Points',
                price: 999,
                priceDefault: 1200,
                vpAmount: 12000,
                stock: 20,
                bonus: 'โบนัส 1,200 FC Points',
                isAvailable: true
            }
        ]
    }
];

// Helper functions
export const getGameById = (gameId: string) => {
    return mockGameProducts.find(game => game.id === gameId);
};

export const getAvailableGames = () => {
    return mockGameProducts.filter(game =>
        game.packages.some(pkg => pkg.isAvailable && pkg.stock > 0)
    );
};

export const getPopularPackages = () => {
    const popularPackages: Array<GamePackage & { gameName: string; gameId: string }> = [];

    mockGameProducts.forEach(game => {
        game.packages.forEach(pkg => {
            if (pkg.isPopular && pkg.isAvailable && pkg.stock > 0) {
                popularPackages.push({
                    ...pkg,
                    gameName: game.name,
                    gameId: game.id
                });
            }
        });
    });

    return popularPackages;
};

// Currency helper function
export const getCurrencyName = (gameName: string): string => {
    switch (gameName) {
        case 'VALORANT': return 'VP';
        case 'Garena Free Fire': return 'Diamond';
        case 'ROV: Arena of Valor': return 'Voucher';
        case 'EA SPORTS FC MOBILE': return 'FC Points';
        default: return 'Points';
    }
};