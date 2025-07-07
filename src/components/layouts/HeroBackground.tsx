import React, { FC } from 'react';

interface HeroBackgroundProps {
    backgroundUrl: string;
    title?: string;
    path?: string;
    className?: string;
    children?: React.ReactNode;
}

const HeroBackground: FC<HeroBackgroundProps> = ({
    backgroundUrl,
    title,
    path,
    className = "",
    children,
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
                <div className="flex flex-col items-center justify-center h-[calc(100vh-60px)] px-4 text-center">
                    <h1 className='p-4 text-6xl text-[#1D3A5F] font-bold rounded-3xl bg-[#fff]'>{title}</h1>
                    <p className="px-6 py-1 text-lg text-[#fff] bg-[#0E345B] rounded-b-4xl">
                        หน้าหลัก / <span className='text-[#737373]'>{path}</span></p>
                </div>
            </div>
        </div>

    );
};

export default HeroBackground;