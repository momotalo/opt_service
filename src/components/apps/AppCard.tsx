import React from 'react';
import Image from 'next/image';
import { AppItem } from 'types/index';

interface AppCardProps {
    app: AppItem;
    onClick?: (app: AppItem) => void;
    statusText?: string;
    className?: string;
}

const AppCard: React.FC<AppCardProps> = ({
    app,
    onClick,
    statusText = "รับ OTP",
    className = ""
}) => {
    const handleClick = () => {
        if (onClick) {
            onClick(app);
        }
    };

    return (
        <div
            onClick={handleClick}
            className={`relative group cursor-pointer rounded-lg bg-gradient-to-b from-[#2C5886] to-[#737373]
            transition-all duration-300 ease-in-out hover:transform hover:scale-105 hover:shadow-xl
            ${className}`}
        >
            {/* Main app card */}
            <div className="p-4 h-[190px] flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-200 border-gray-600">
                {/* App Icon */}
                <div className="flex items-center justify-center border w-[135px] h-[135px] p-2 rounded-lg bg-[#fff] group-hover:bg-gray-50 transition-colors duration-200">
                    <Image
                        src={app.iconUrl}
                        alt={app.name}
                        width={120}
                        height={120}
                        className="w-full h-auto object-contain"
                        priority={false}
                        onError={(e) => {
                            // Fallback for broken images
                            const target = e.target as HTMLImageElement;
                            target.src = '/images/placeholder.png';
                        }}
                    />
                </div>
            </div>

            {/* App name label */}
            <div className="flex justify-between items-center h-[40px] bg-[#29527D] rounded-b-lg px-2 py-2 group-hover:bg-[#1e4a6b] transition-colors duration-200">
                <span className="text-base font-medium text-[#FFF] truncate mr-2">
                    {app.name}
                </span>
                <span className="text-xs text-[#000] bg-[#FFF] px-2 py-1 rounded-full whitespace-nowrap group-hover:bg-gray-100 transition-colors duration-200">
                    {statusText}
                </span>
            </div>
        </div>
    );
};

export default AppCard;