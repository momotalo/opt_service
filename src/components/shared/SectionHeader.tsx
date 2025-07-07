import React from 'react';
import Link from 'next/link';

interface SectionHeaderProps {
    title: string;
    description: string;
    buttonText?: string;
    buttonHref?: string;
    className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
    title,
    description,
    buttonText = "ดูสินค้าเพิ่มเติม",
    buttonHref = "#",
    className = "mb-2"
}) => {
    return (
        <div className={className}>
            <h1 className="text-3xl font-bold mb-2">{title}</h1>
            <p className="text-[#a8a8a8] mb-4">{description}</p>
            <div className="btn flex justify-between items-center">
                <hr className="w-[50%] h-[4px] bg-gradient-to-r from-[#0E345B] via-[#1E6EC1] to-white border-0 rounded-full" />
                <Link
                    href={buttonHref}
                    className="border-4 border-[#29527D] text-[#0E345B] hover:bg-[#73AFED] hover:text-[#fff] font-bold py-2 px-4 rounded-xl text-lg transition-all duration-300 ease-in-out hover:shadow-lg"
                >
                    {buttonText}
                </Link>
            </div>
        </div>
    );
};

export default SectionHeader;