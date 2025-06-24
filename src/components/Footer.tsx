import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
    return (
        <footer className="mt-12 bg-gradient-to-r from-[#3D78C5] to-[#1D3A5F] text-white relative">
            {/* Top warning banner */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="bg-white py-4 px-6 rounded-2xl shadow-lg border border-gray-200">
                    <div className="flex items-center justify-center space-x-4">
                        {/* Left Image */}
                        <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                            <Image
                                src="/images/government-logo.png"
                                alt="Government Logo"
                                width={48}
                                height={48}
                                className="object-contain"
                            />
                        </div>
                        <span className="text-gray-800 text-lg font-sans">
                            ได้รับใบอนุญาติจากกองงาน <span className="text-red-600 font-bold">กสทช.</span>
                        </span>
                    </div>
                </div>
            </div>

            {/* Main footer content */}
            <div className="py-12 px-6 pt-16">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Company Info */}
                    <div className="md:col-span-1">
                        <div className="mb-4">
                            <div className="flex items-center space-x-2 mb-2">
                                <span className="text-2xl font-bold">R</span>
                                <div className="text-sm">
                                    <div>RinTech<span className="text-red-500">X</span></div>
                                </div>
                            </div>
                            <div className="text-lg font-semibold mb-4">
                                support@RinTechX.com
                            </div>
                            <p className="text-sm text-blue-200 leading-relaxed">
                                บริษัท OTP ชำนาญเทคโนโลยี เติมเกมออนไลน์เป็นบริษัทผู้นำเทคโนโลยีในการเพิ่มสิ่งของเกียวข้องกับเวิลด์คลาสจริงอยู่คู่กัดให้
                            </p>
                        </div>
                    </div>

                    {/* การใช้งาน */}
                    <div className="md:col-span-1">
                        <h3 className="text-lg font-semibold mb-6">การใช้งาน</h3>
                        <ul className="space-y-3 text-sm text-blue-200">
                            <li><a href="#" className="hover:text-white transition-colors">แอคเคาท์</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">OTP 24 ชั่วโมง</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">เพิ่มยูสเซอร์เนม</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">เติมเกม</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">เติมยูสซิตี้</a></li>
                        </ul>
                    </div>

                    {/* แจ้งปัญหา */}
                    <div className="md:col-span-1">
                        <h3 className="text-lg font-semibold mb-6">แจ้งปัญหา</h3>
                        <ul className="space-y-3 text-sm text-blue-200">
                            <li><a href="#" className="hover:text-white transition-colors">เติมเครดิต</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">แอคเคาท์มีปัญหา</a></li>
                        </ul>
                    </div>

                    {/* ติดต่อเรา */}
                    <div className="md:col-span-1">
                        <h3 className="text-lg font-semibold mb-6">ติดต่อเรา</h3>
                        <div className="space-y-4">
                            {/* Facebook */}
                            <a href="#" className="flex items-center space-x-3 p-3 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all">
                                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                                    <span className="text-white text-sm font-bold">f</span>
                                </div>
                                <span className="text-sm">RinterX</span>
                            </a>

                            {/* Line */}
                            <a href="#" className="flex items-center space-x-3 p-3 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all">
                                <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                                    <span className="text-white text-xs font-bold">LINE</span>
                                </div>
                                <span className="text-sm">@RinterX</span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom border */}
            <div className="h-2 bg-gradient-to-r from-blue-800 to-blue-900"></div>
        </footer>
    );
};

export default Footer;