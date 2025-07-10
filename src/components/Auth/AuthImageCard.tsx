import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface AuthImageCardProps {
    title: string;
    description: string;
    imagePosition?: 'left' | 'right';
    imageSrc: string;
    imageAlt?: string;
    className?: string;
}

const AuthImageCard: FC<AuthImageCardProps> = ({
    title,
    description,
    imagePosition = 'left',
    imageSrc,
    imageAlt = 'Background',
    className = "",
}) => {
    const roundedClass = imagePosition === 'left' ? 'rounded-l-3xl' : 'rounded-r-3xl';

    return (
        <div className={`relative overflow-hidden ${roundedClass} h-full bg-[#0E345B] ${className}`}>
            {/* Character Avatar */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -mt-8">
                <div className="w-[270px] h-[270px] bg-white rounded-[70px] flex items-center justify-center shadow-2xl">
                    <div className="relative w-60 h-60 rounded-2xl overflow-hidden">
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            fill
                            className="object-cover"
                            sizes="96px"
                        />
                    </div>
                </div>
            </div>

            {/* Content Card */}
            <div className="absolute flex flex-col justify-end items-end bottom-10 left-6 right-6">
                <div className="flex flex-col justify-end items-end text-white">
                    <h2 className="text-lg font-bold mb-4">{title}</h2>
                    <p className="w-[80%] text-end text-sm leading-6 text-gray-200">
                        {description}
                    </p>
                </div>
                <div className="border border-[#fff] rounded-full mt-6 px-2 py-1 ">
                    <Link href="/register" className="text-white">
                        สมัครสมาชิก
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AuthImageCard