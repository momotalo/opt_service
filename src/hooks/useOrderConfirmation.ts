import { useState } from 'react';

interface OrderItem {
    name: string;
    details: string;
    price: number;
    discount: number;
    quantity: number;
}

interface OrderData {
    category: 'account' | 'cashcard' | 'game';
    productName: string;
    productImage?: string;
    gameUserId?: string;
    items: OrderItem[];
    totalAmount: number;
    userCredit: number;
}

interface UseOrderConfirmationReturn {
    isModalOpen: boolean;
    orderData: OrderData | null;
    openOrderConfirmation: (data: OrderData) => void;
    closeOrderConfirmation: () => void;
    confirmOrder: () => Promise<void>;
}

export const useOrderConfirmation = (): UseOrderConfirmationReturn => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [orderData, setOrderData] = useState<OrderData | null>(null);

    const openOrderConfirmation = (data: OrderData) => {
        setOrderData(data);
        setIsModalOpen(true);
    };

    const closeOrderConfirmation = () => {
        setIsModalOpen(false);
        setOrderData(null);
    };

    const confirmOrder = async () => {
        if (!orderData) return;

        try {
            // จำลองการประมวลผลการสั่งซื้อ
            await new Promise(resolve => setTimeout(resolve, 2000));

            console.log('Order confirmed:', orderData);

            // แสดงข้อความสำเร็จ
            alert('สั่งซื้อสำเร็จ! ขอบคุณที่ใช้บริการ');

            // ปิด modal
            closeOrderConfirmation();

            // สามารถเปลี่ยนหน้าไปยังหน้าสำเร็จหรือกลับหน้าหลัก
            // router.push('/order-success');

        } catch (error) {
            console.error('Order confirmation failed:', error);
            alert('เกิดข้อผิดพลาดในการสั่งซื้อ กรุณาลองใหม่อีกครั้ง');
        }
    };

    return {
        isModalOpen,
        orderData,
        openOrderConfirmation,
        closeOrderConfirmation,
        confirmOrder
    };
};

// Helper functions สำหรับสร้าง OrderData
export const createAccountOrderData = (
    productName: string,
    productImage: string,
    selectedVariant: any,
    quantity: number
): OrderData => {
    const itemPrice = selectedVariant.price * quantity;
    const discount = selectedVariant.priceDefault
        ? (selectedVariant.priceDefault - selectedVariant.price) * quantity
        : 0;

    return {
        category: 'account',
        productName,
        productImage,
        items: [{
            name: selectedVariant.name,
            details: selectedVariant.duration || 'แอคเคาท์สำหรับใช้งาน',
            price: itemPrice + discount,
            discount,
            quantity
        }],
        totalAmount: itemPrice,
        userCredit: 0 // ควรดึงจากระบบจริง
    };
};

export const createCashCardOrderData = (
    productName: string,
    productImage: string,
    selectedVariant: any,
    quantity: number
): OrderData => {
    const itemPrice = selectedVariant.price * quantity;
    const discount = selectedVariant.priceDefault
        ? (selectedVariant.priceDefault - selectedVariant.price) * quantity
        : 0;

    return {
        category: 'cashcard',
        productName: `บัตรเติมเงิน ${productName}`,
        productImage,
        items: [{
            name: selectedVariant.name,
            details: `มูลค่า ${selectedVariant.value} ${productName === 'NINTENDO' ? 'เยน' : 'บาท'}`,
            price: itemPrice + discount,
            discount,
            quantity
        }],
        totalAmount: itemPrice,
        userCredit: 0
    };
};

export const createGameOrderData = (
    gameName: string,
    gameImage: string,
    gameUserId: string,
    selectedPackage: any,
    quantity: number
): OrderData => {
    const itemPrice = selectedPackage.price * quantity;
    const discount = selectedPackage.priceDefault
        ? (selectedPackage.priceDefault - selectedPackage.price) * quantity
        : 0;

    return {
        category: 'game',
        productName: gameName,
        productImage: gameImage,
        gameUserId,
        items: [{
            name: selectedPackage.amount,
            details: selectedPackage.bonus ? `รวม Bonus: ${selectedPackage.bonus}` : `เติมเข้าบัญชี ${gameUserId}`,
            price: itemPrice + discount,
            discount,
            quantity
        }],
        totalAmount: itemPrice,
        userCredit: 0
    };
};