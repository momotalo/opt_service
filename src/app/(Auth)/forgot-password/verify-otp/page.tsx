'use client';

import VerifyOTPForm from '@components/VerifyOTPForm';
import AuthImageCard from '@components/AuthImageCard';

export default function VerifyOTPPage() {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden p-4 max-w-4xl w-full h-[600px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 h-full">

                    <AuthImageCard
                        title="ซิมดัตธุรกิจ R-OTP"
                        description="บริการซื้อ OTP เริ่มต้นเพียง 10 บาท รับ OTP สำเร็จรูปจากทุก SIM หา"
                        activeTab="login"
                        imagePosition="left"
                        imageSrc="/images/login.jpg"
                        imageAlt="Login Background"
                    />


                    {/* Right Side - Verify Form */}
                    <VerifyOTPForm />

                </div>
            </div>
        </div>
    );
}