"use client";
import React, { FC, useState } from 'react';
import Link from 'next/link';

const LoginPage: FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Login:', { username, password });
    };

    return (
        <div className="px-8 lg:px-8 flex flex-col justify-between h-full bg-white">
            {/* Header */}
            <h1 className="text-4xl font-bold text-[#1D3A5F] mb-4" style={{
                WebkitTextStroke: '2px white',      // เส้นขอบสีขาว หนา 2px
                textShadow: '2px 2px 4px black'  // เงาเล็กน้อย
            }}>R-OTP</h1>
            <div className="flex justify-center items-center">
                <h2 className="text-2xl font-semibold text-gray-800">เข้าสู่ระบบ</h2>
            </div>

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
                    className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-4 px-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-base"
                >
                    เข้าสู่ระบบ
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

export default LoginPage;