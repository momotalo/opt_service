import React from 'react'
import LoginForm from '@components/Auth/LoginForm';
import AuthImageCard from '@components/Auth/AuthImageCard';

const LoginPage = () => {
    return (
        <div className="h-screen bg-[#EDEDED] flex items-center justify-center p-4 px-6 md:px-20">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-5xl w-full h-[calc(100vh-2rem)]">
                <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] h-full">
                    {/* Left Side - Login Form */}
                    <LoginForm />

                    {/* Right Side - Auth Image Card */}
                    <div className="hidden lg:block">
                        <AuthImageCard
                            title="ยินดีต้อนรับสู่ R-OTP"
                            description="ผู้ให้บริการ เบอร์ OTP ขายแอทเคาท์เติมเกมออนไลนโปรดระวังมิจฉาชีพแอบอ้างบัญชีเราเพื่อหลอกให้ผู้อื่นจ่ายค่าสินค้าแทน"
                            imagePosition="right"
                            imageSrc="/images/login.jpg"
                            imageAlt="Login Background"
                            className=''
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage