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
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (password !== confirmPassword) {
            setError('รหัสผ่านไม่ตรงกัน');
            return;
        }

        if (password.length < 8) {
            setError('รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร');
            return;
        }

        setIsLoading(true);

        try {
            // จำลองการเปลี่ยนรหัสผ่าน
            await new Promise(resolve => setTimeout(resolve, 2000));

            // ลบข้อมูลใน localStorage
            localStorage.removeItem('forgot_password_contact');

            // แสดงข้อความสำเร็จและไปหน้า login
            alert('เปลี่ยนรหัสผ่านสำเร็จ');
            router.push('/login');
        } catch (error) {
            console.error('Error resetting password:', error);
            setError('เกิดข้อผิดพลาดในการเปลี่ยนรหัสผ่าน');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col justify-center h-full px-24 bg-white/70 backdrop-blur-sm">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">ตั้งรหัสผ่านใหม่</h1>
                <p className="text-gray-600 mt-2">กรุณากรอกรหัสผ่านใหม่ของคุณ</p>
            </div>

            {/* Error Message */}
            {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-6">
                    <p className="text-red-600 text-sm">{error}</p>
                </div>
            )}

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
                            className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 placeholder-gray-400 transition-all"
                            placeholder="กรอกรหัสผ่านใหม่"
                            required
                            minLength={8}
                            disabled={isLoading}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
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
                            className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 placeholder-gray-400 transition-all"
                            placeholder="ยืนยันรหัสผ่านใหม่"
                            required
                            minLength={8}
                            disabled={isLoading}
                        />
                        <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
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
                    className={`w-full font-semibold py-3 px-4 rounded-full transition-all duration-200 text-base ${isLoading
                            ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                            : 'bg-[#4F65D3] hover:bg-blue-700 text-white hover:shadow-lg'
                        }`}
                >
                    {isLoading ? (
                        <div className="flex items-center justify-center gap-2">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            กำลังบันทึก...
                        </div>
                    ) : (
                        'บันทึกรหัสผ่าน'
                    )}
                </button>
            </form>
        </div>
    );
}