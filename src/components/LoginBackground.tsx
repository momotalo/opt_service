import React from 'react';
import Image from 'next/image';

interface LoginBackgroundProps {
    children?: React.ReactNode;
}

const LoginBackground: React.FC<LoginBackgroundProps> = ({ children }) => {
    return (
        <div className="w-screen h-screen relative overflow-hidden">

            {/* Full background image */}
            <div className="absolute inset-0">
                <Image
                    src="/images/login.jpg"
                    alt="Background Image"
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="100vw"
                />
            </div>

            {/* Diagonal overlay to create the split effect */}
            <div
                className="absolute inset-0 bg-gray-100"
                style={{
                    clipPath: 'polygon(65% 0, 100% 0, 100% 100%, 55% 100%)'
                }}
            >
                {/* Subtle shadow at the diagonal edge */}
                <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-black/20 to-transparent"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full h-full flex items-center justify-center">
                {children}
            </div>
        </div>
    );
};

export default LoginBackground;