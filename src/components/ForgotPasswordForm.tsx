'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ForgotPasswordForm() {
    const [emailOrPhone, setEmailOrPhone] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            // จำลองการส่ง OTP
            await new Promise(resolve => setTimeout(resolve, 2000));

            // เก็บข้อมูลใน localStorage หรือ context
            localStorage.setItem('forgot_password_contact', emailOrPhone);

            // ไปหน้าใส่ OTP
            router.push('/forgot-password/verify-otp');
        } catch (error) {
            console.error('Error sending OTP:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="p-8 lg:p-12 flex flex-col justify-center h-full bg-white">
            {/* Header */}
            <div className="text-center mb-8">
                <h1
                    className="text-4xl font-bold text-[#1D3A5F] mb-4"
                    style={{
                        WebkitTextStroke: '2px white',
                        textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
                    }}
                >
                    R-OTP
                </h1>
                <h2 className="text-2xl font-semibold text-gray-800">ลืมรหัสผ่าน</h2>
                <p className="text-gray-600 mt-2">กรุณากรอกอีเมลหรือเบอร์โทรศัพท์ของคุณ</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="emailOrPhone" className="block text-sm font-medium text-gray-700 mb-2">
                        อีเมลหรือเบอร์โทรศัพท์
                    </label>
                    <input
                        type="text"
                        id="emailOrPhone"
                        value={emailOrPhone}
                        onChange={(e) => setEmailOrPhone(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="กรอกอีเมลหรือเบอร์โทรศัพท์"
                        required
                    />
                </div>

                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-red-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                    {isLoading ? 'กำลังส่ง OTP...' : 'ส่ง OTP'}
                </button>
            </form>

            {/* Back to Login */}
            <div className="mt-6 text-center">
                <Link
                    href="/login"
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                    กลับไปหน้าเข้าสู่ระบบ
                </Link>
            </div>
        </div>
    );
}