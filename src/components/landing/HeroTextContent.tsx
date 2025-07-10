import React from 'react';
import Link from 'next/link';

interface HeroTextContentProps {
    btnLink: string;
    className?: string;
}

const HeroTextContent: React.FC<HeroTextContentProps> = ({
    btnLink,
    className = ""
}) => {
    return (

        <div className={`text-white space-y-6 ${className}`}>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                ระบบเติมเงินอัตโนมัติ
            </h1>

            <hr className="w-[100%] h-[4px] mb-4 bg-gradient-to-r from-[#0E345B] via-[#1E6EC1] to-white border-0 rounded-full" />

            <div className="pl-4 border-l-2 border-[#fff]">
                <p className="text-lg lg:text-xl text-blue-100 leading-relaxed">
                    สะดวก รวดเร็ว ปลอดภัย ตลอด 24 ช.ม.
                </p>

                <div className="text-sm lg:text-base text-blue-200 leading-relaxed space-y-2">
                    <p>รองรับการเติมเงินทุกบัญชีธนาคาร Prompt Pay พร้อมเพย์ , K-Bank กสิกรไทย , SCB ไทยพาณิชย์ , KTB กรุงไทย , GSB ธนาคารออมสิน , BBL กรุงเทพ , BAY กรุงศรี , TMB ทหารไทย , TBANK ธนชาต , KK เกียรตินาคิน , CIMBT ซีไอเอ็มบีไทย , UOB ยูโอบี และ TureWallet ทรูมันนี่วอลเล็ท ปลอดภัย เติมง่ายและรวดเร็ว ด้วยระบบ QRCode</p>
                </div>
            </div>

            <div className="flex justify-end">
                <Link
                    href={btnLink}
                    className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full hover:bg-[#fff] hover:text-blue-800 transition-all duration-300 font-medium"
                >
                    ดูข้อมูลเพิ่มเติม
                </Link>
            </div>
        </div>
    );
};

export default HeroTextContent;