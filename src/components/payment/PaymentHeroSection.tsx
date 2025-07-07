import React from 'react';
import HeroTextContent from './HeroTextContent';
import PaymentGrid from './PaymentGrid';
import { PaymentMethod } from 'types/index'

interface PaymentHeroSectionProps {
    heroContent: {
        title: string;
        subtitle: string;
        description: string;
        buttonText: string;
        buttonHref: string;
    };
    paymentMethods: PaymentMethod[];
    onPaymentClick?: (payment: PaymentMethod) => void;
    className?: string;
    height?: string;
}

const PaymentHeroSection: React.FC<PaymentHeroSectionProps> = ({
    heroContent,
    paymentMethods,
    onPaymentClick,
    className = "",
    height = "h-[520px]"
}) => {
    return (
        <div className={`${height} bg-[#1D3A5F] flex items-center justify-center p-6 mb-20 ${className}`}>
            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

                {/* Left Section - Text Content */}
                <HeroTextContent content={heroContent} />

                {/* Right Section - Payment Methods */}
                <PaymentGrid
                    payments={paymentMethods}
                    onPaymentClick={onPaymentClick}
                    columns={3}
                    gap={6}
                />

            </div>
        </div>
    );
};

export default PaymentHeroSection;