"use client";
import React from 'react';

interface PaymentMethodSectionProps {
    theme?: 'amber' | 'blue';
    className?: string;
}

const PaymentMethodSection: React.FC<PaymentMethodSectionProps> = ({
    theme = 'blue',
    className = ""
}) => {
    const themeConfig = {
        amber: {
            bg: 'bg-amber-600',
            icon: '₿',
            iconBg: 'bg-white',
            iconText: 'text-amber-600'
        },
        blue: {
            bg: 'bg-blue-900',
            icon: '$',
            iconBg: 'bg-white',
            iconText: 'text-blue-900'
        }
    };

    const config = themeConfig[theme];

    return (
        <div className={className}>
            <h3 className="text-lg font-bold text-gray-800 mb-4">วิธีการชำระเงิน</h3>
            <div className={`${config.bg} text-white p-4 rounded-lg flex items-center`}>
                <div className={`w-8 h-8 ${config.iconBg} rounded-full flex items-center justify-center mr-3`}>
                    <span className={`${config.iconText} font-bold text-sm`}>
                        {config.icon}
                    </span>
                </div>
                <div>
                    <p className="font-medium">เครดิตคงเหลือ</p>
                    <p className="text-sm opacity-90">คงเหลือ 0 เครดิต</p>
                </div>
            </div>
        </div>
    );
};

export default PaymentMethodSection;