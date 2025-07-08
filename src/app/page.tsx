'use client'

import Link from "next/link";
import HeroBackground from "@components/layouts/HeroBackground";
import AppLayout from "@components/layouts/AppLayout";
import AutoScroll from "@components/ui/AutoScroll";
import { ServiceGrid } from '@components/Services';
import { AppGrid, SocialAppGrid } from '@components/apps';
import { PhoneGrid } from '@components/phone';
import { PaymentHeroSection } from '@components/payment';
import { SectionHeader } from '@components/shared';
import { OurService, WhyChooseUs } from '@components/landing';
import { phoneNumbers, apps, socialApps, paymentMethods } from '@data/constants';


export default function Home() {
  return (
    <AppLayout className="relative">

      {/* Hero Background Section */}
      <HeroBackground
        backgroundUrl="/images/background/bg-otp.svg"
        className="mb-4"
      >
        <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
          <h1 className="px-4 py-2 mb-4 text-6xl md:text-8xl font-bold text-[#1D3A5F] bg-[#fff] rounded-2xl text-shadow-[2px_2px_2px_black]">
            R-OTP <span className="text-[#FF0000]">24</span> HR
          </h1>
          <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl px-4 py-4 mb-8 max-w-2xl">
            <p className="text-[#000] text-xl md:text-xl font-bold text-shadow-[0px_0px_2px_#646262]">
              บริการขาย OTP เริ่มต้นเพียง 10 บาท รับ OTP สมัครบัญชีต่างๆ ราคาถูก
            </p>
          </div>
          <Link href="" className="border-4 border-white text-white hover:bg-[#000] font-bold py-4 px-8 rounded-xl text-lg">
            ดูข้อมูลเพิ่มเติม
          </Link>
        </div>
      </HeroBackground>

      {/* Container Section */}
      <div className="container w-[80%] mx-auto">

        {/* Services Section */}
        <ServiceGrid />

        {/* Duppicate OTP number Section */}
        <div className="dup-otp mb-30">
          {/* Header Section */}
          <SectionHeader
            title="เบอร์ OTP (ซ้ำ)"
            description="รันเบอร์ OTP เเบบเบอร์ซ้ำ รองรับสมัครทุกบริการ ออนไลน์ 24 ชั่วโมง"
            buttonText="ดูสินค้าเพิ่มเติม"
            buttonHref="/otp-products"
            className="mb-2"
          />

          {/* Card Grid */}
          <PhoneGrid
            phoneNumbers={phoneNumbers}
            onPhoneClick={(phoneNumber) => {
              navigator.clipboard.writeText(phoneNumber);
              // Optional: Add toast notification here
              alert(`คัดลอก ${phoneNumber} เรียบร้อย!`);
            }}
          />
        </div>

        {/* Non Dupicate OTP number Section */}
        <div className="non-dup-otp flex flex-col gap-4 mb-30">
          {/* Header Section */}
          <SectionHeader
            title="เบอร์ OTP (ไม่ซ้ำ)"
            description="เบอร์ OTP หลากหลายประเทศ ใช้สมัครบัญชีต่าง ๆ เช่น Gmail, Facebook, Instagram, Twitter, LINE และบริการอื่น ๆ อีกมากมาย"
            buttonText="ดูสินค้าเพิ่มเติม"
            buttonHref=""
            className="mb-2"
          />

          {/* Auto Scrool */}
          <AutoScroll />

          {/* items Section */}
          <AppGrid
            apps={apps}
            statusText="รับ OTP"
            className="mb-8"
            onAppClick={(app) => {
              // Custom click handler
              alert(`คุณเลือก ${app.name}`);
            }}
          />
        </div>

        {/* Account Premium Section */}
        <div className="flex flex-col gap-4 mb-30">
          {/* Header Section */}
          <SectionHeader
            title="แอคเคาท์พรีเมียม ราคาพิเศษ"
            description="Netflix , Gmail, YouTube Premium, iQIYI, WeTV พร้อมบริการหารจอ ราคาถูกที่สุด"
            buttonText="ดูสินค้าเพิ่มเติม"
            buttonHref="/"
            className="mb-2"
          />

          {/* Auto Scrool */}
          <AutoScroll />

          {/* items Section */}
          <AppGrid
            apps={apps}
            statusText="สินค้า"
            className="mb-8"
            onAppClick={(app) => {
              // Custom click handler
              alert(`คุณเลือก ${app.name}`);
            }}
          />

        </div>

        {/* Up follow Section */}
        <div className="flex flex-col gap-4 mb-30">
          {/* Header Section */}
          <SectionHeader
            title="เพิ่มยอดผู้ติดตาม โซเชียลมีเดีย"
            description="เพิ่มไลค์ เพิ่มผู้ติดตาม TikTok, Instagram, Facebook, YouTube , X , Shopee"
            buttonText="ดูสินค้าเพิ่มเติม"
            buttonHref="/"
            className="mb-2"
          />

          {/* Auto Scrool */}
          <AutoScroll />

          {/* Items Section */}
          <SocialAppGrid
            apps={socialApps}
            gridCols={{ base: 3, lg: 5, xl: 6 }}
            gap={8}
            cardSize="lg"
            onAppClick={(app) => {
              alert(`คุณเลือก ${app.name}`);
            }}
          />
        </div>

        {/* End Container Section */}
      </div>

      {/* Our Services Section */}
      <OurService />

      {/* Why to use RinTechX Services Section */}
      <WhyChooseUs />

      {/* Auto Top up System */}
      <PaymentHeroSection
        btnLink="/"
        paymentMethods={paymentMethods}
        onPaymentClick={(payment) => {
          console.log(`Selected payment: ${payment.name}`);
          // Handle payment selection
        }}
      />

    </AppLayout>
  );
}