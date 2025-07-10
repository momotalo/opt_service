import React from 'react';
import PaymentCard from './PaymentCard';
import { PaymentMethod } from 'types/index'


interface PaymentGridProps {
    payments: PaymentMethod[];
    onPaymentClick?: (payment: PaymentMethod) => void;
    columns?: number;
    gap?: number;
    className?: string;
}

const PaymentGrid: React.FC<PaymentGridProps> = ({
    payments,
    onPaymentClick,
    className = ""
}) => {

    const handlePaymentClick = (payment: PaymentMethod) => {
        if (onPaymentClick) {
            onPaymentClick(payment);
        } else {
            console.log(`Selected payment method: ${payment.name}`);
        }
    };

    return (
        <div className={`bg-white rounded-3xl p-8 shadow-2xl ${className}`}>
            <div className="grid grid-cols-3 gap-6">
                {payments.map((payment) => (
                    <PaymentCard
                        key={payment.id}
                        payment={payment}
                        onClick={handlePaymentClick}
                    />
                ))}
            </div>
        </div>
    );
};

export default PaymentGrid;