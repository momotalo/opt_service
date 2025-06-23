import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface AuthImageCardProps {
    title: string;
    description: string;
    activeTab: 'login' | 'register';
    imagePosition?: 'left' | 'right';
    imageSrc: string;
    imageAlt?: string; 
}

const AuthImageCard: FC<AuthImageCardProps> = ({
    title, 
    description, 
    activeTab,
    imagePosition = 'left',
    imageSrc,            
    imageAlt = 'Background'    
}) => {

    const roundedClass = imagePosition === 'left' ? 'rounded-l-3xl' : 'rounded-r-3xl';

    return (
        <div className={`relative overflow-hidden ${roundedClass} h-full`}>
            {/* Background Image */}
            <div className="relative h-full">
                <Image
                    src={imageSrc}  
                    alt={imageAlt}  
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            </div>

            {/* Navigation Tabs */}
            <div className="absolute top-6 left-6 right-6">
                <div className="flex justify-end space-x-2">
                    <Link
                        href="/register"
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'register'
                            ? 'bg-blue-600 text-white'
                            : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white'
                            }`}
                    >
                        สมัครสมาชิก
                    </Link>
                    <Link
                        href="/login"
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'login'
                            ? 'bg-blue-600 text-white'
                            : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white'
                            }`}
                    >
                        เข้าสู่ระบบ
                    </Link>
                </div>
            </div>

            {/* Content Card */}
            <div className="absolute bottom-6 left-6 right-6">
                <div className="text-white">
                    <h2 className="text-xl font-bold mb-3">{title}</h2>
                    <p className="text-sm leading-relaxed opacity-90">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AuthImageCard