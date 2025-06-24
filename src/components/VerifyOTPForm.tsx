'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function VerifyOTPForm() {
    const [otp, setOtp] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [countdown, setCountdown] = useState(300); // 5 minutes
    const [canResend, setCanResend] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (countdown > 0) {
            const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
            return () => clearTimeout(timer);
        } else {
            setCanResend(true);
        }
    }, [countdown]);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            // จำลองการตรวจสอบ OTP
            await new Promise(resolve => setTimeout(resolve, 2000));

            // ไปหน้าตั้งรหัสผ่านใหม่
            router.push('/forgot-password/reset-password');
        } catch (error) {
            console.error('Error verifying OTP:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleResendOTP = async () => {
        setIsLoading(true);
        try {
            // จำลองการส่ง OTP ใหม่
            await new Promise(resolve => setTimeout(resolve, 1000));

            setCountdown(300);
            setCanResend(false);
        } catch (error) {
            console.error('Error resending OTP:', error);
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
                <h2 className="text-2xl font-semibold text-gray-800">ยืนยัน OTP</h2>
                <p className="text-gray-600 mt-2">
                    กรุณากรอกรหัส OTP ที่ส่งไปยังอีเมลหรือเบอร์โทรของคุณ
                </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-2">
                        รหัส OTP
                    </label>
                    <input
                        type="text"
                        id="otp"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center text-lg tracking-widest"
                        placeholder="กรอกรหัส OTP"
                        maxLength={6}
                        required
                    />
                </div>

                {/* Countdown */}
                <div className="text-center">
                    {!canResend ? (
                        <p className="text-gray-600 text-sm">
                            ส่งรหัสใหม่ได้ในอีก {formatTime(countdown)}
                        </p>
                    ) : (
                        <button
                            type="button"
                            onClick={handleResendOTP}
                            className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                            disabled={isLoading}
                        >
                            ส่งรหัส OTP ใหม่
                        </button>
                    )}
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