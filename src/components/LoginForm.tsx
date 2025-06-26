/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { FC, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@hooks/useAuth';

const LoginForm: FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const { login } = useAuth(); // ใช้ hook แทน props
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            // Simulate API call delay
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Simple validation for demo
            if (username === 'admin' && password === '123456') {
                const userData = {
                    name: 'CAT',
                    credit: 1250.50,
                    email: 'admin@example.com',
                    phone: '086-123-4567'
                };

                login(userData); // ใช้ login function จาก context
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
        } catch (err) {
            setError('เกิดข้อผิดพลาดในการเข้าสู่ระบบ');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="px-8 lg:px-8 flex flex-col justify-between h-full bg-white">
            {/* Header */}
            <h1 className="text-4xl font-bold text-[#1D3A5F] mb-4" style={{
                WebkitTextStroke: '2px white',
                textShadow: '2px 2px 4px black'
            }}>R-OTP</h1>
            <div className="flex justify-center items-center">
                <h2 className="text-2xl font-semibold text-gray-800">เข้าสู่ระบบ</h2>
            </div>

            {/* Demo Accounts Info */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                <h3 className="text-sm font-semibold text-blue-800 mb-2">บัญชีทดสอบ:</h3>
                <div className="text-xs text-blue-600 space-y-1">
                    <div>Admin: username = <span className="font-mono">admin</span>, password = <span className="font-mono">123456</span></div>
                    <div>User: username = <span className="font-mono">user</span>, password = <span className="font-mono">123456</span></div>
                </div>
            </div>

            {/* Error Message */}
            {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
                    <p className="text-red-600 text-sm">{error}</p>
                </div>
            )}

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-6 pb-8">
                {/* Username Field */}
                <div>
                    <input
                        type="text"
                        placeholder="ชื่อผู้ใช้หรืออีเมล"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 placeholder-gray-400 text-base transition-all bg-white"
                        required
                        disabled={isLoading}
                    />
                </div>

                {/* Password Field */}
                <div>
                    <input
                        type="password"
                        placeholder="รหัสผ่าน"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 placeholder-gray-400 text-base transition-all bg-white"
                        required
                        disabled={isLoading}
                    />
                </div>

                {/* Forgot Password Link */}
                <div className="flex justify-end">
                    <Link
                        href="/forgot-password"
                        className="text-red-500 text-sm hover:text-red-600 hover:underline transition-colors"
                    >
                        ลืมรหัสผ่าน?
                    </Link>
                </div>

                {/* Login Button */}
                <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full font-semibold py-4 px-4 rounded-full transition-all duration-200 shadow-lg text-base ${isLoading
                        ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                        : 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white hover:shadow-xl transform hover:-translate-y-0.5'
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

                {/* Footer Links */}
                <div className="text-center pt-4">
                    <div className="flex items-center justify-center space-x-2 text-sm">
                        <span className="text-gray-600">ยังไม่มีบัญชีหรือ?</span>
                        <Link
                            href="/register"
                            className="text-red-500 font-medium hover:text-red-600 hover:underline transition-colors"
                        >
                            สมัครสมาชิก
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;