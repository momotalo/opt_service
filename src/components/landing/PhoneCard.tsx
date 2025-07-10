import React from 'react';

interface PhoneCardProps {
    phoneNumber: string;
    icon?: string;
    isOnline?: boolean;
    onClick?: () => void;
    className?: string;
}

const PhoneCard: React.FC<PhoneCardProps> = ({
    phoneNumber,
    icon = "🐝",
    isOnline = true,
    onClick,
    className = ""
}) => {
    const handleClick = () => {
        if (onClick) {
            onClick();
        } else {
            navigator.clipboard.writeText(phoneNumber);
        }
    };

    return (
        <div
            onClick={handleClick}
            className={`bg-white rounded-xl p-4 flex items-center gap-4 cursor-pointer transition-all duration-300 ease-in-out 
                hover:transform hover:-translate-y-1 border border-gray-100 group
                ${className}`}
        >
            {/* Icon */}
            <div className="text-2xl flex-shrink-0 group-hover:animate-bounce">
                {icon}
            </div>

            {/* Phone Number */}
            <span className="text-lg font-semibold text-gray-900 tracking-wide select-none flex-1">
                {phoneNumber}
            </span>

            {/* Status Indicator */}
            <div className="ml-auto">
                <div
                    className={`w-2 h-2 rounded-full ${isOnline ? 'bg-green-500 animate-pulse' : 'bg-gray-400'
                        }`}
                />
            </div>
        </div>
    );
};

export default PhoneCard;