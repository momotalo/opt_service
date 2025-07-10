import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface OtpServiceOption {
    id: string;
    type: 'duplicate' | 'unique';
    title: string;
    price: number;
    phoneImage: string;
    buttonText: string;
    href: string; // เพิ่ม href สำหรับ Link
}

interface OtpServiceSelectionProps {
    className?: string;
}

const OtpServiceSelection: React.FC<OtpServiceSelectionProps> = ({
    className = ''
}) => {
    const otpServices: OtpServiceOption[] = [
        {
            id: 'duplicate',
            type: 'duplicate',
            title: 'OTP เบอร์ซ้ำ',
            price: 15,
            phoneImage: '/images/phone-otp.svg',
            buttonText: 'เบอร์ซ้ำ',
            href: '/otp/duplicate'
        },
        {
            id: 'unique',
            type: 'unique',
            title: 'OTP เบอร์ไม่ซ้ำ',
            price: 10,
            phoneImage: '/images/phone-otp.svg',
            buttonText: 'เบอร์ไม่ซ้ำ',
            href: '/otp/unique'
        }
    ];

    return (
        <div className={`w-fit mx-auto px-8 py-4 bg-[radial-gradient(circle,_#8CB2DE,_#fff)] rounded-2xl backdrop-blur ${className}`}>
            {/* Header */}
            <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1D3A5F] mb-2">
                    เลือกการใช้งาน OTP
                </h2>
                <div className="w-full h-1 mx-auto rounded-full bg-[linear-gradient(to_right,_transparent,_#3B82F6,_transparent)]"></div>
            </div>

            {/* OTP Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                {otpServices.map((service) => (
                    <Link
                        key={service.id}
                        href={service.href}
                        className="block group"
                    >
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer h-full">
                            {/* Header Button */}
                            <div className="relative">
                                <div className="w-[140px] mx-auto py-2 px-6 text-white text-center font-semibold text-lg bg-[#3D78C5] rounded-b-2xl">
                                    {service.buttonText}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 text-center">
                                {/* Phone Image */}
                                <div className="mb-6 flex justify-center">
                                    <div className="relative">
                                        <Image
                                            src={service.phoneImage}
                                            alt={`${service.title} Phone`}
                                            width={180}
                                            height={320}
                                            className="object-contain group-hover:scale-120 transition-transform duration-300"
                                            priority
                                        />
                                    </div>
                                </div>

                                {/* Service Info */}
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold text-[#1D3A5F]">
                                        {service.title}
                                    </h3>
                                    <p className="text-2xl font-bold text-[#000]">
                                        ( ราคา {service.price} บาท )
                                    </p>
                                </div>

                                {/* Action Button */}
                                {/* <div className="mt-6">
                                    <div className="w-full bg-gradient-to-r from-blue-500 to-blue-600 group-hover:from-blue-600 group-hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform group-hover:-translate-y-0.5 group-hover:shadow-lg">
                                        เลือกบริการนี้
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Additional Info */}
            <div className="text-center mt-8 max-w-3xl mx-auto">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                    <div className="flex items-center justify-center space-x-2 text-blue-600">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        <span className="font-medium text-sm">
                            <strong>เบอร์ซ้ำ:</strong> เบอร์โทรศัพท์ที่สามารถใช้รับ OTP ได้หลายครั้ง |
                            <strong> เบอร์ไม่ซ้ำ:</strong> เบอร์โทรศัพท์ใหม่สำหรับใช้รับ OTP เพียงครั้งเดียว
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OtpServiceSelection;