import ForgotPasswordForm from '@components/Auth/ForgotPasswordForm';
import AuthImageCard from '@components/AuthImageCard';

export default function ForgotPasswordPage() {
    return (
        <div className="h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-5xl w-full h-[calc(100vh-2rem)]">
                <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] h-full">
                    {/* Left Side - Form */}
                    <ForgotPasswordForm />

                    {/* Right Side - AuthImageCard */}
                    <AuthImageCard
                        title="ยินดีต้อนรับสู่ R-OTP"
                        description="ผู้ให้บริการ เบอร์ OTP ขายแอทเคาท์เติมเกมออนไลน์โปรดระวังมิจฉาชีพแอบอ้างบัญชีเราเพื่อหลอกให้ผู้อื่นจ่ายค่าสินค้าแทน"
                        imagePosition="right"
                        imageSrc="/images/login.jpg"
                        imageAlt="Login Background"
                    />
                </div>
            </div>
        </div>
    );
}