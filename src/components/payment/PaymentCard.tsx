import React from 'react';
import Image from 'next/image';
import { PaymentMethod } from 'types/index'

interface PaymentCardProps {
    payment: PaymentMethod;
    onClick?: (payment: PaymentMethod) => void;
    className?: string;
}

const PaymentCard: React.FC<PaymentCardProps> = ({
    payment,
    onClick,
    className = ""
}) => {
    const handleClick = () => {
        if (onClick) {
            onClick(payment);
        }
    };

    return (
        <div
            onClick={handleClick}
            className={`bg-[#fff] rounded-2xl py-1 shadow-lg border-gray-500 hover:shadow-xl transition-shadow 
                duration-300 cursor-pointer group ${className}`}
        >
            <div className="w-full h-26 rounded-lg flex items-center justify-center overflow-hidden">
                <Image
                    src={payment.logoUrl}
                    alt={payment.name}
                    width={payment.width || 100}
                    height={payment.height || 50}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/images/bot-icon.png';
                    }}
                />
            </div>
        </div>
    );
};

export default PaymentCard;