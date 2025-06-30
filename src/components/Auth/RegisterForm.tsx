"use client";
import React, { FC, useState } from 'react';
import Link from 'next/link';
import { FaGoogle } from 'react-icons/fa';

const RegisterForm: FC = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log('Register:', formData);
        } catch (error) {
            console.error('Registration error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleGoogleRegister = () => {
        console.log('Google register clicked');
    };

    return (
        <div className="flex flex-col justify-center h-full px-24 py-8 bg-white/70 backdrop-blur-sm">
            {/* Header */}
            <div className="mb-4">
                <h1 className="text-3xl font-bold text-[#0E345B]">สมัครสมาชิก</h1>
            </div>

            {/* Register Form */}
            <form onSubmit={handleSubmit} className="space-y-3">
                {/* Username Field */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        ชื่อผู้ใช้
                    </label>
                    <input
                        type="text"
                        name="username"
                        placeholder="ชื่อผู้ใช้ของคุณ"
                        value={formData.username}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 placeholder-gray-400 transition-all"
                        required
                        disabled={isLoading}
                    />
                </div>

                {/* Email Field */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        ชื่อผู้ใช้หรืออีเมล
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="ชื่อผู้ใช้หรืออีเมล"
                        value={formData.email}
                        onChange={handleChange}
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
                        name="password"
                        placeholder="รหัสผ่าน"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 placeholder-gray-400 transition-all"
                        required
                        disabled={isLoading}
                    />
                </div>

                {/* Confirm Password Field */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        ยืนยันรหัสผ่าน
                    </label>
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="ยืนยันรหัสผ่าน"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 placeholder-gray-400 transition-all"
                        required
                        disabled={isLoading}
                    />
                </div>

                {/* Register Button */}
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
                            กำลังสมัครสมาชิก...
                        </div>
                    ) : (
                        'สมัครสมาชิก'
                    )}
                </button>

                {/* Divider */}
                <div className="relative flex items-center justify-center my-2">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative px-2 bg-white text-sm text-gray-500">
                        or
                    </div>
                </div>

                {/* Google Register Button */}
                <button
                    type="button"
                    onClick={handleGoogleRegister}
                    className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-white border border-gray-300 rounded-full font-medium hover:bg-gray-50 transition-colors"
                >
                    <FaGoogle className="text-red-500" />
                </button>

                {/* Footer Links */}
                <div className="flex justify-between items-center pt-4 text-sm">
                    <Link
                        href="/login"
                        className="text-gray-600 hover:text-gray-800 transition-colors"
                    >
                        เป็นสมาชิกอยู่แล้วใช่ไหม?
                    </Link>
                    <Link
                        href="/login"
                        className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
                    >
                        เข้าสู่ระบบ
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;