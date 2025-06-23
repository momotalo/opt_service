import React from 'react';

interface HeroBackgroundProps {
    backgroundUrl: string;
    children?: React.ReactNode;
    className?: string;
    overlayOpacity?: 'none' | 'light' | 'medium' | 'dark';
}

const HeroBackground: React.FC<HeroBackgroundProps> = ({
    backgroundUrl,
    children,
    className = "",
}) => {


    return (
        <div
            className={`relative h-[calc(100vh-60px)] overflow-hidden ${className}`}
        >
            {/* Background image with opacity */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
                style={{ backgroundImage: `url(${backgroundUrl})` }}
            />

            {/* Dark overlay (optional) */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/75 to-transparent" />

            {/* Content */}
            <div className="relative z-10 h-[calc(100vh-60px)]">
                {children}
            </div>
        </div>

    );
};

export default HeroBackground;