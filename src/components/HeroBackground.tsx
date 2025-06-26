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
            className={`relative h-[80vh] overflow-hidden ${className}`} // h-[calc(100vh-60px)]
        >
            {/* Background image with opacity */}
            <div
                className="absolute inset-0 bg-cover bg-[center_30%] bg-no-repeat"
                style={{ backgroundImage: `url(${backgroundUrl})` }}
            />

            {/* Dark overlay (optional) */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent" />

            {/* Content */}
            <div className="relative z-10 h-[80vh]">
                {children}
            </div>
        </div>

    );
};

export default HeroBackground;