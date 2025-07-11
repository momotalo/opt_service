"use client";
import React from 'react';
import { createPortal } from 'react-dom';
import OrderConfirmation from './OrderConfirmation';

interface OrderItem {
    name: string;
    details: string;
    price: number;
    discount: number;
    quantity: number;
}

interface OrderConfirmationModalProps {
    isOpen: boolean;
    orderData: {
        category: 'account' | 'cashcard' | 'game';
        productName: string;
        productImage?: string;
        gameUserId?: string;
        items: OrderItem[];
        totalAmount: number;
        userCredit: number;
    };
    onConfirm: () => void;
    onCancel: () => void;
}

const OrderConfirmationModal: React.FC<OrderConfirmationModalProps> = ({
    isOpen,
    orderData,
    onConfirm,
    onCancel
}) => {
    if (!isOpen) return null;

    const modalContent = (
        <div className="fixed inset-0 z-50 overflow-auto">
            <div className="min-h-screen">
                <OrderConfirmation
                    orderData={orderData}
                    onConfirm={onConfirm}
                    onCancel={onCancel}
                />
            </div>
        </div>
    );

    // Use portal to render outside of parent component
    return typeof window !== 'undefined'
        ? createPortal(modalContent, document.body)
        : null;
};

export default OrderConfirmationModal;