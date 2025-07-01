import React from 'react'
import AuthImageCard from '@components/Auth/AuthImageCard'
import RegisterForm from '@components/Auth/RegisterForm'

const RegisterPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-5xl w-full h-auto">
                <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] h-full">
                    {/* Left Side - Auth Image Card */}
                    <AuthImageCard
                        title="ยินดีต้อนรับสู่ R-OTP"
                        description="บริการขาย OTP เริ่มต้นเพียง 10 บาท รับ OTP สมัครบัญชีต่างๆ ราคาถูก"
                        imagePosition="left"
                        imageSrc="/images/register.jpg"
                        imageAlt="Register Background"
                    />

                    {/* Right Side - Register Form */}
                    <RegisterForm />
                </div>
            </div>
        </div>
    )
}

export default RegisterPage