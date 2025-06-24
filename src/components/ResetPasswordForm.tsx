'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { IoEye, IoEyeOff } from 'react-icons/io5';

export default function ResetPasswordForm() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert('รหัสผ่านไม่ตรงกัน');
            return;
        }

        setIsLoading(true);

        try {
            // จำลองการเปลี่ยนรหัสผ่าน
            await new Promise(resolve => setTimeout(resolve, 2000));

            // ลบข้อมูลใน localStorage
            localStorage.removeItem('forgot_password_contact');

            alert('เปลี่ยนรหัสผ่านสำเร็จ');
            router.push('/login');
        } catch (error) {
            console.error('Error resetting password:', error);
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
                <h2 className="text-2xl font-semibold text-gray-800">ตั้งรหัสผ่านใหม่</h2>
                <p className="text-gray-600 mt-2">กรุณากรอกรหัสผ่านใหม่ของคุณ</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                        รหัสผ่านใหม่
                    </label>
                    <div className="relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="กรอกรหัสผ่านใหม่"
                            required
                            minLength={8}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        >
                            {showPassword ? (
                                <IoEyeOff className="h-5 w-5" />
                            ) : (
                                <IoEye className="h-5 w-5" />
                            )}
                        </button>
                    </div>
                </div>

                <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                        ยืนยันรหัสผ่านใหม่
                    </label>
                    <div className="relative">
                        <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="ยืนยันรหัสผ่านใหม่"
                            required
                            minLength={8}
                        />
                        <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        >
                            {showConfirmPassword ? (
                                <IoEyeOff className="h-5 w-5" />
                            ) : (
                                <IoEye className="h-5 w-5" />
                            )}
                        </button>
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-red-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                    {isLoading ? 'กำลังส่ง OTP...' : 'ส่ง OTP'}
                </button>
            </form>
        </div>
    );
}