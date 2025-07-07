/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { FaMobileAlt, FaGamepad, FaCreditCard } from "react-icons/fa";
import ServiceCard from './ServiceCard';

interface ServiceItem {
    id: string;
    icon: any;
    title: string;
    action: () => void;
}

const ServiceGrid: React.FC = () => {
    const services: ServiceItem[] = [
        {
            id: 'otp',
            icon: FaMobileAlt,
            title: 'OTP',
            action: () => console.log('OTP clicked')
        },
        {
            id: 'game-topup',
            icon: FaGamepad,
            title: 'เติมเกม',
            action: () => console.log('เติมเกม clicked')
        },
        {
            id: 'cash-card',
            icon: FaCreditCard,
            title: 'บัตรเงินสด',
            action: () => console.log('บัตรเงินสด clicked')
        },
        {
            id: 'follow',
            icon: FaMobileAlt,
            title: 'เพิ่มยอดฟอล',
            action: () => console.log('OTP clicked')
        },
        {
            id: 'streaming',
            icon: FaGamepad,
            title: 'สตรีมมิ้ง',
            action: () => console.log('เติมเกม clicked')
        },
    ];

    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 sm:grid-cols-2 mb-30">
            {services.map((service) => (
                <ServiceCard
                    key={service.id}
                    icon={service.icon}
                    title={service.title}
                    onClick={service.action}
                />
            ))}
        </div>
    );
};

export default ServiceGrid;