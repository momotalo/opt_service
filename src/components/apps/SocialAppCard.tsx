import React from 'react';
import Image from 'next/image';
import { SocialApp } from 'types/index';

interface SocialAppCardProps {
    app: SocialApp;
    onClick?: (app: SocialApp) => void;
    className?: string;
    iconSize?: number;
    cardSize?: 'sm' | 'md' | 'lg';
}

const SocialAppCard: React.FC<SocialAppCardProps> = ({
    app,
    onClick,
    className = "",
    iconSize = 115,
    cardSize = 'md'
}) => {
    const handleClick = () => {
        if (onClick) {
            onClick(app);
        }
    };

    const getSizeClasses = () => {
        switch (cardSize) {
            case 'sm':
                return {
                    iconContainer: 'w-[80px] h-[80px]',
                    textSize: 'text-lg'
                };
            case 'lg':
                return {
                    iconContainer: 'w-[140px] h-[140px]',
                    textSize: 'text-2xl'
                };
            default:
                return {
                    iconContainer: 'w-[115px] h-[115px]',
                    textSize: 'text-xl'
                };
        }
    };

    const sizeClasses = getSizeClasses();

    return (
        <div
            onClick={handleClick}
            className={`flex flex-col items-center group cursor-pointer transition-transform duration-300 ease-in-out
            hover:transform hover:scale-105 ${className}`}
        >
            {/* App card */}
            <div className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#cccccc] hover:border-[#29527D] w-full aspect-square flex flex-col items-center justify-between">
                {/* Icon container */}
                <div className={`${sizeClasses.iconContainer} rounded-full flex items-center justify-center group-hover:animate-pulse`}>
                    <Image
                        src={app.iconUrl}
                        alt={app.name}
                        width={iconSize}
                        height={iconSize}
                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                        onError={(e) => {
                            // Fallback for broken images
                            const target = e.target as HTMLImageElement;
                            target.src = '/images/placeholder.png';
                        }}
                    />
                </div>

                {/* App name */}
                <div className="mt-3 text-center">
                    <span className={`${sizeClasses.textSize} font-medium text-gray-600 group-hover:text-[#29527D] transition-colors duration-300`}>
                        {app.name}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default SocialAppCard;