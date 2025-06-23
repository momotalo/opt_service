import React from 'react'
import AuthImageCard from '@components/AuthImageCard'
import RegisterForm from '@components/RegisterForm'

const RegisterPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden p-4 max-w-4xl w-full h-[600px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 h-full">

                    {/* Left Side - Register Form */}
                    <RegisterForm />

                    {/* Right Side - Image */}
                    <AuthImageCard
                        title="ซิมดัตธุรกิจ R-OTP"
                        description="บริการซื้อ OTP เริ่มต้นเพียง 10 บาท รับ OTP สำเร็จรูปจากทุก SIM หา"
                        activeTab="register"
                        imagePosition="right"
                        imageSrc="/images/register.jpg"
                        imageAlt="Register Background"
                    />

                </div>
            </div>
        </div>
    )
}

export default RegisterPage