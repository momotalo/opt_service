/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { FC, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@hooks/useAuth';
import { FaGoogle } from 'react-icons/fa';

const LoginForm: FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const { login } = useAuth();
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            await new Promise(resolve => setTimeout(resolve, 1000));

            if (username === 'admin' && password === '123456') {
                const userData = {
                    name: 'CAT',
                    credit: 1250.50,
                    email: 'admin@example.com',
                    phone: '086-123-4567'
                };
                login(userData);
                router.push('/');
            } else if (username === 'user' && password === '123456') {
                const userData = {
                    name: 'USER01',
                    credit: 500.00,
                    email: 'user01@example.com',
                    phone: '087-765-4321'
                };
                login(userData);
                router.push('/');
            } else {
                setError('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
            }
        } catch (error) {
            setError('เกิดข้อผิดพลาดในการเข้าสู่ระบบ');
        } finally {
            setIsLoading(false);
        }
    };

    const handleGoogleLogin = () => {
        // Handle Google login
        console.log('Google login clicked');
    };

    return (
        <div className="flex flex-col justify-center h-full px-24 bg-white/70 backdrop-blur-sm">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">เข้าสู่ระบบ</h1>
            </div>

            {/* Error Message */}
            {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-6">
                    <p className="text-red-600 text-sm">{error}</p>
                </div>
            )}

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Username Field */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        ชื่อผู้ใช้
                    </label>
                    <input
                        type="text"
                        placeholder="ชื่อผู้ใช้ของคุณ"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 placeholder-gray-400 transition-all"
                        required
                        disabled={isLoading}
                    />
                </div>

                {/* Password Field */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        รหัสผ่าน
                    </label>
                    <input
                        type="password"
                        placeholder="รหัสผ่าน"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 placeholder-gray-400 transition-all"
                        required
                        disabled={isLoading}
                    />
                </div>

                {/* Forgot Password Link */}
                <div className="flex justify-end">
                    <Link
                        href="/forgot-password"
                        className="text-blue-600 text-sm hover:text-blue-700 hover:underline transition-colors"
                    >
                        ลืมรหัสผ่าน?
                    </Link>
                </div>

                {/* Login Button */}
                <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full font-semibold py-3 px-4 rounded-full transition-all duration-200 text-base ${isLoading
                        ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                        : 'bg-[#4F65D3] hover:from-blue-600 hover:to-blue-700 text-white hover:shadow-lg'
                        }`}
                >
                    {isLoading ? (
                        <div className="flex items-center justify-center gap-2">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            กำลังเข้าสู่ระบบ...
                        </div>
                    ) : (
                        'เข้าสู่ระบบ'
                    )}
                </button>

                {/* Divider */}
                <div className="relative flex items-center justify-center my-6">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative px-2 bg-[#FFF] text-sm text-gray-500">
                        or
                    </div>
                </div>

                {/* Google Login Button */}
                <button
                    type="button"
                    onClick={handleGoogleLogin}
                    className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-[#FFF] border border-gray-300 rounded-full font-medium hover:bg-gray-50 transition-colors"
                >
                    <FaGoogle className="text-red-500" />
                </button>

                {/* Footer Links */}
                <div className="flex justify-between items-center pt-6 text-sm">
                    <Link
                        href="/forgot-password"
                        className="text-gray-600 hover:text-gray-800 transition-colors"
                    >
                        ยังไม่ได้เป็นสมาชิกใช่ไหม?
                    </Link>
                    <Link
                        href="/register"
                        className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
                    >
                        สมัครสมาชิก
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;