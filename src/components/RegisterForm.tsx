"use client";
import React, { FC, useState } from 'react';
import Link from 'next/link';


const RegisterForm: FC = () => {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Register:', formData);
    };

    return (
        <div className="p-8 lg:p-12 flex flex-col justify-center h-full bg-white rounded-l-3xl">
            {/* Header */}
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800">สมัครสมาชิก</h2>
            </div>

            {/* Register Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
                {/* Username Field */}
                <div>
                    <input
                        type="text"
                        name="username"
                        placeholder="ชื่อผู้ใช้"
                        value={formData.username}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 placeholder-gray-400 text-base transition-all bg-white"
                        required
                    />
                </div>

                {/* Email Field */}
                <div>
                    <input
                        type="email"
                        name="email"
                        placeholder="อีเมล"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 placeholder-gray-400 text-base transition-all bg-white"
                        required
                    />
                </div>

                {/* Password Field */}
                <div>
                    <input
                        type="password"
                        name="password"
                        placeholder="รหัสผ่าน"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 placeholder-gray-400 text-base transition-all bg-white"
                        required
                    />
                </div>

                {/* Confirm Password Field */}
                <div>
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="ยืนยันรหัสผ่าน"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 placeholder-gray-400 text-base transition-all bg-white"
                        required
                    />
                </div>

                {/* Register Button */}
                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-base"
                >
                    สมัครสมาชิก
                </button>

                {/* Footer Links */}
                <div className="text-center pt-4">
                    <div className="flex items-center justify-center space-x-2 text-sm">
                        <span className="text-gray-600">มีบัญชีอยู่แล้ว?</span>
                        <Link
                            href="/login"
                            className="text-blue-600 font-medium hover:text-blue-700 hover:underline transition-colors"
                        >
                            เข้าสู่ระบบ
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default RegisterForm;