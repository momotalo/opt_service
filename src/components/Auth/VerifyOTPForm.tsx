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
        <div className="flex flex-col justify-center h-full px-24 bg-white/70 backdrop-blur-sm">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">ยืนยัน OTP</h1>
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-center text-lg tracking-widest text-gray-700 placeholder-gray-400 transition-all"
                        placeholder="กรอกรหัส OTP"
                        maxLength={6}
                        required
                        disabled={isLoading}
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
                            className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
                            disabled={isLoading}
                        >
                            ส่งรหัส OTP ใหม่
                        </button>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={isLoading || otp.length !== 6}
                    className={`w-full font-semibold py-3 px-4 rounded-full transition-all duration-200 text-base ${isLoading || otp.length !== 6
                            ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                            : 'bg-[#4F65D3] hover:bg-blue-700 text-white hover:shadow-lg'
                        }`}
                >
                    {isLoading ? (
                        <div className="flex items-center justify-center gap-2">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            กำลังตรวจสอบ...
                        </div>
                    ) : (
                        'ยืนยัน'
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