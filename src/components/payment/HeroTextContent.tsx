import React from 'react';
import Link from 'next/link';

interface HeroTextContentProps {
    content: {
        title: string;
        subtitle: string;
        description: string;
        buttonText: string;
        buttonHref: string;
    };
    className?: string;
}

const HeroTextContent: React.FC<HeroTextContentProps> = ({
    content,
    className = ""
}) => {
    return (
        <div className={`text-white space-y-6 ${className}`}>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                {content.title}
            </h1>

            <hr className="w-[100%] h-[4px] mb-4 bg-gradient-to-r from-[#0E345B] via-[#1E6EC1] to-white border-0 rounded-full" />

            <div className="pl-4 border-l-2 border-[#fff]">
                <p className="text-lg lg:text-xl text-blue-100 leading-relaxed">
                    {content.subtitle}
                </p>

                <div className="text-sm lg:text-base text-blue-200 leading-relaxed space-y-2">
                    <p>{content.description}</p>
                </div>
            </div>

            <div className="flex justify-end">
                <Link
                    href={content.buttonHref}
                    className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full hover:bg-[#fff] hover:text-blue-800 transition-all duration-300 font-medium"
                >
                    {content.buttonText}
                </Link>
            </div>
        </div>
    );
};

export default HeroTextContent;