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
        <div className="flex flex-col justify-center h-full px-24 bg-white/70 backdrop-blur-sm">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">ลืมรหัสผ่าน</h1>
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 placeholder-gray-400 transition-all"
                        placeholder="กรอกอีเมลหรือเบอร์โทรศัพท์"
                        required
                        disabled={isLoading}
                    />
                </div>

                <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full font-semibold py-3 px-4 rounded-full transition-all duration-200 text-base ${isLoading
                            ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                            : 'bg-[#4F65D3] hover:bg-blue-700 text-white hover:shadow-lg'
                        }`}
                >
                    {isLoading ? (
                        <div className="flex items-center justify-center gap-2">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            กำลังส่ง OTP...
                        </div>
                    ) : (
                        'ส่งรหัสยืนยัน'
                    )}
                </button>
            </form>

            {/* Back to Login */}
            <div className="mt-6 text-center">
                <Link
                    href="/login"
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
                >
                    กลับไปหน้าเข้าสู่ระบบ
                </Link>
            </div>
        </div>
    );
}