import React from 'react';
import { IconType } from 'react-icons';

interface ServiceCardProps {
    icon: IconType;
    title: string;
    onClick?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
    icon: Icon,
    title,
    onClick
}) => {
    return (
        <div
            className="card flex flex-col items-center py-12 rounded-2xl bg-gradient-to-b from-[#2C5886] to-[#73AFED] cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105"
            onClick={onClick}
        >
            <div className="img flex justify-center items-center w-18 h-18 rounded-full bg-[#fff]">
                <Icon className="w-12 h-12 text-[#2C5886]" />
            </div>
            <h1 className="text-[#fff] text-2xl font-bold mt-4">{title}</h1>
        </div>
    );
};

export default ServiceCard;