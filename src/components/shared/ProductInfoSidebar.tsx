"use client";
import React from 'react';
import Image from 'next/image';

interface ProductInfoSidebarProps {
    title: string;
    imgSrc: string;
    platform: string;
    description: string;
    features: string[];
    theme?: 'amber' | 'pink' | 'blue';
    className?: string;
}

const ProductInfoSidebar: React.FC<ProductInfoSidebarProps> = ({
    title,
    imgSrc,
    platform,
    description,
    features,
    theme = 'amber',
    className = ""
}) => {
    const themeConfig = {
        amber: {
            titleColor: 'text-amber-600',
            gradientFrom: 'from-amber-500',
            gradientVia: 'via-orange-500',
            gradientTo: 'to-red-500',
            dotColor: 'bg-amber-500'
        },
        pink: {
            titleColor: 'text-pink-500',
            gradientFrom: 'from-pink-500',
            gradientVia: 'via-red-500',
            gradientTo: 'to-yellow-500',
            dotColor: 'bg-blue-500'
        },
        blue: {
            titleColor: 'text-blue-600',
            gradientFrom: 'from-blue-500',
            gradientVia: 'via-purple-500',
            gradientTo: 'to-pink-500',
            dotColor: 'bg-blue-500'
        }
    };

    const config = themeConfig[theme];

    return (
        <div className={`bg-white p-6 ${className}`}>
            <div className="text-center mb-6">
                <h1 className={`text-2xl font-bold ${config.titleColor} mb-4`}>
                    {title}
                </h1>

                <div className={`w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br ${config.gradientFrom} ${config.gradientVia} ${config.gradientTo} p-1`}>
                    <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                        <div className="relative w-16 h-16">
                            <Image
                                src={imgSrc}
                                alt={title}
                                fill
                                className="object-cover rounded-lg"
                            />
                        </div>
                    </div>
                </div>

                <p className="text-gray-600 text-sm">{platform}</p>
            </div>

            <div className="space-y-3">
                {features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                        <div className={`w-2 h-2 ${config.dotColor} rounded-full mr-3`}></div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-gray-600 text-sm">{description}</p>
            </div>
        </div>
    );
};

export default ProductInfoSidebar;