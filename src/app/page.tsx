'use client'
import Image from "next/image";
import Link from "next/link";
import AppLayout from "@components/layouts/AppLayout";
import HeroBackground from "@components/layouts/HeroBackground";
import { FaMobileAlt, FaGamepad, FaCreditCard } from "react-icons/fa";
import { phoneNumbers, chunkArray, apps, socialApps } from '@data/constants';


export default function Home() {
  // ฟังก์ชันสำหรับแบ่งเบอร์โทรศัพท์เป็นคอลัมน์
  const columns = chunkArray(phoneNumbers, 4);

  return (
    <AppLayout className="relative">

      {/* Hero Background Section */}
      <HeroBackground
        backgroundUrl="/images/OTP.svg"
        className="mb-4"
      >
        <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">
            R-OTP <span className="text-red-500">24</span> HR
          </h1>
          <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-full px-8 py-4 mb-8 max-w-2xl">
            <p className="text-gray-800 text-lg md:text-xl font-medium">
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
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 sm:grid-cols-2 mb-30">
          {/* Row 1 */}
          <div className="card flex flex-col items-center py-12 rounded-2xl bg-gradient-to-b from-[#2C5886] to-[#73AFED]">
            <div className="img flex justify-center items-center w-18 h-18 rounded-full bg-[#fff]">
              <FaMobileAlt className="w-12 h-12" />
            </div>
            <h1 className="text-[#fff] text-2xl font-bold">OTP</h1>
          </div>

          <div className="card flex flex-col items-center py-12 rounded-2xl bg-gradient-to-b from-[#2C5886] to-[#73AFED]">
            <div className="img flex justify-center items-center w-18 h-18 rounded-full bg-[#fff]">
              <FaGamepad className="w-12 h-12" />
            </div>
            <h1 className="text-[#fff] text-2xl font-bold">เติมเกม</h1>
          </div>

          <div className="card flex flex-col items-center py-12 rounded-2xl bg-gradient-to-b from-[#2C5886] to-[#73AFED]">
            <div className="img flex justify-center items-center w-18 h-18 rounded-full bg-[#fff]">
              <FaCreditCard className="w-12 h-12" />
            </div>
            <h1 className="text-[#fff] text-2xl font-bold">บัตรเงินสด</h1>
          </div>

          {/* Row 2 */}
          <div className="card flex flex-col items-center py-12 rounded-2xl bg-gradient-to-b from-[#2C5886] to-[#73AFED]">
            <div className="img flex justify-center items-center w-18 h-18 rounded-full bg-[#fff]">
              <FaMobileAlt className="w-12 h-12" />
            </div>
            <h1 className="text-[#fff] text-2xl font-bold">OTP</h1>
          </div>

          <div className="card flex flex-col items-center py-12 rounded-2xl bg-gradient-to-b from-[#2C5886] to-[#73AFED]">
            <div className="img flex justify-center items-center w-18 h-18 rounded-full bg-[#fff]">
              <FaGamepad className="w-12 h-12" />
            </div>
            <h1 className="text-[#fff] text-2xl font-bold">เติมเกม</h1>
          </div>

          <div className="card flex flex-col items-center py-12 rounded-2xl bg-gradient-to-b from-[#2C5886] to-[#73AFED]">
            <div className="img flex justify-center items-center w-18 h-18 rounded-full bg-[#fff]">
              <FaCreditCard className="w-12 h-12" />
            </div>
            <h1 className="text-[#fff] text-2xl font-bold">บัตรเงินสด</h1>
          </div>
        </div>

        {/* Duppicate OTP number Section */}
        <div className="dup-otp mb-30">
          {/* Header Section */}
          <div className="mb-2">
            <h1 className="text-3xl">เบอร์ OTP (ซ้ำ)</h1>
            <p className="text-[#a8a8a8]">รันเบอร์ OTP เเบบเบอร์ซ้ำ รองรับสมัครทุกบริการ ออนไลน์ 24 ชั่วโมง</p>
            <div className="btn flex justify-between items-center">
              <hr className="w-[50%] h-[4px] bg-gradient-to-r from-[#0E345B] via-[#1E6EC1] to-white border-0 rounded-full" />
              <Link href=""
                className="border-4 border-[#29527D] text-[#0E345B] hover:bg-[#73AFED] hover:text-[#fff] font-bold py-2 px-4 rounded-xl text-lg">
                ดูสินค้าเพิ่มเติม
              </Link>
            </div>
          </div>

          {/* Card Grid */}
          <div className="grid grid-cols-3 gap-12">
            {/* Column 1 */}
            {columns.map((columnNumbers, columnIndex) => (
              <div key={columnIndex} className="bg-[#29527D] rounded-2xl p-6 shadow-2xl">
                {/* Card 1 */}
                {columnNumbers.map((number, index) => (
                  <div
                    key={`col-${columnIndex}-${index}`} onClick={() => navigator.clipboard.writeText(number)}
                    className="bg-white rounded-xl p-4 mb-4 flex items-center gap-4 cursor-pointer transition-all duration-300 ease-in-out hover:transform hover:-translate-y-1 hover:shadow-lg group"
                  >
                    <div className="text-2xl flex-shrink-0 group-hover:animate-bounce">
                      🐝
                    </div>
                    <span className="text-lg font-semibold text-gray-900 tracking-wide select-none">
                      0943070567
                    </span>
                    <div className="ml-auto">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Non Dupicate OTP number Section */}
        <div className="non-dup-otp flex flex-col gap-4 mb-30">
          {/* Header Section */}
          <div className="mb-2">
            <h1 className="text-3xl">เบอร์ OTP (ไม่ซ้ำ)</h1>
            <p className="text-[#a8a8a8]">เบอร์ OTP หลากหลายประเทศ ใช้สมัครบัญชีต่าง ๆ เช่น Gmail, Facebook, Instagram, Twitter, LINE และบริการอื่น ๆ อีกมากมาย</p>
            <div className="btn flex justify-between items-center">
              <hr className="w-[50%] h-[4px] bg-gradient-to-r from-[#0E345B] via-[#1E6EC1] to-white border-0 rounded-fu" />
              <Link href=""
                className="border-4 border-[#29527D] text-[#0E345B] hover:bg-[#73AFED] hover:text-[#fff] font-bold py-2 px-4 rounded-xl text-lg">
                ดูสินค้าเพิ่มเติม
              </Link>
            </div>
          </div>

          {/* Auto Scrool */}
          <div className="flex justify-center items-center w-full h-[170px] bg-gray-400">
            <h1 className="font-mono text-[35px] font-bold ">Auto Scrolling</h1>
          </div>

          {/* items Section */}
          <div className="items">
            <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
              {apps.map((app) => (
                <div
                  key={app.id}
                  className="relative group cursor-pointer rounded-lg bg-gradient-to-b from-[#2C5886] to[#737373]"
                >
                  {/* Main app card */}
                  <div
                    className="p-4 h-[190px] flex flex-col items-center justify-center shadow-md hover:shadow-lg 
                    transition-shadow duration-200 border-gray-600"
                  >
                    {/* App Icon */}
                    <div className="flex items-center justify-center border w-[135px] h-[135px] p-2 rounded-lg bg-[#fff]">
                      <Image
                        src={app.iconUrl}
                        alt={app.name}
                        width={32}
                        height={32}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>

                  {/* App name label */}
                  <div className="flex justify-between items-center h-[40px] bg-[#29527D] rounded-b-lg px-2 py-2">
                    <span className="text-base font-medium text-[#FFF]">
                      {app.name}
                    </span>
                    <span className="text-xs text-[#000] bg-[#FFF] p-1 rounded-full">
                      รับ OTP
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Account Premium Section */}
        <div className="flex flex-col gap-4 mb-30">
          {/* Header Section */}
          <div className="mb-2">
            <h1 className="text-3xl">แอคเคาท์พรีเมียม ราคาพิเศษ</h1>
            <p className="text-[#a8a8a8]">Netflix , Gmail, YouTube Premium, iQIYI, WeTV พร้อมบริการหารจอ ราคาถูกที่สุด</p>
            <div className="btn flex justify-between items-center">
              <hr className="w-[50%] h-[4px] bg-gradient-to-r from-[#0E345B] via-[#1E6EC1] to-white border-0 rounded-fu" />
              <Link href=""
                className="border-4 border-[#29527D] text-[#0E345B] hover:bg-[#73AFED] hover:text-[#fff] font-bold py-2 px-4 rounded-xl text-lg">
                ดูสินค้าเพิ่มเติม
              </Link>
            </div>
          </div>

          {/* Auto Scrool */}
          <div className="flex justify-center items-center w-full h-[170px] bg-gray-400">
            <h1 className="font-mono text-[35px] font-bold ">Auto Scrolling</h1>
          </div>

          {/* items Section */}
          <div className="items">
            <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
              {apps.map((app) => (
                <div
                  key={app.id}
                  className="relative group cursor-pointer rounded-lg bg-gradient-to-b from-[#2C5886] to[#737373]"
                >
                  {/* Main app card */}
                  <div
                    className="p-4 h-[190px] flex flex-col items-center justify-center shadow-md hover:shadow-lg 
                    transition-shadow duration-200 border-gray-600"
                  >
                    {/* App Icon */}
                    <div className="flex items-center justify-center w-[135px] h-[135px] p-2 rounded-lg bg-[#fff]">
                      <Image
                        src={app.iconUrl}
                        alt={app.name}
                        width={32}
                        height={32}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>

                  {/* App name label */}
                  <div className="flex justify-between items-center h-[40px] bg-[#29527D] rounded-b-lg px-2 py-2">
                    <span className="text-base font-medium text-[#FFF]">
                      {app.name}
                    </span>
                    <span className="text-xs text-[#000] bg-[#FFF] p-1 rounded-full">
                      รับ OTP
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Up follow Section */}
        <div className="flex flex-col gap-4 mb-30">
          {/* Header Section */}
          <div className="mb-2">
            <h1 className="text-3xl">เพิ่มยอดผู้ติดตาม โซเชียลมีเดีย</h1>
            <p className="text-[#a8a8a8]">เพิ่มไลค์ เพิ่มผู้ติดตาม TikTok, Instagram, Facebook, YouTube , X , Shopee</p>
            <div className="btn flex justify-between items-center">
              <hr className="w-[50%] h-[4px] bg-gradient-to-r from-[#0E345B] via-[#1E6EC1] to-white border-0 rounded-fu" />
              <Link href=""
                className="border-4 border-[#29527D] text-[#0E345B] hover:bg-[#73AFED] hover:text-[#fff] font-bold py-2 px-4 rounded-xl text-lg">
                ดูสินค้าเพิ่มเติม
              </Link>
            </div>
          </div>

          {/* Auto Scrool */}
          <div className="flex justify-center items-center w-full h-[170px] bg-gray-400">
            <h1 className="font-mono text-[35px] font-bold ">Auto Scrolling</h1>
          </div>

          {/* Items Section */}
          <div className="items">
            {/* Grid layout */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
              {socialApps.map((app) => (
                <div
                  key={app.id}
                  className="flex flex-col items-center group cursor-pointer"
                >
                  {/* App card */}
                  <div
                    className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#cccccc] 
                    w-full aspect-square flex flex-col items-center justify-between">
                    {/* Icon container */}
                    <div className="w-[115px] h-[115px] rounded-full flex items-center justify-center">
                      <Image
                        src={app.iconUrl}
                        alt={app.name}
                        width={40}
                        height={40}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* App name */}
                    <div className="mt-3 text-center">
                      <span className="text-xl font-medium text-gray-600">
                        {app.name}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Our Services Section */}
      <div className="w-full h-[520px] mb-15">
        {/* Container for left and right sections */}
        <div className="h-full flex gap-8 relative">

          {/* Left section - Blue background with text content */}
          <div className="w-1/2 h-full flex items-center p-4 bg-[#1D3A5F] rounded-r-4xl">
            <div className="w-[80%]">
              <h1 className="text-white text-4xl font-bold mb-4 leading-tight">
                บริการของเรา
              </h1>
              <hr className="w-[100%] h-[4px] mb-4 bg-gradient-to-r from-[#0E345B] via-[#1E6EC1] to-white border-0 rounded-full" />

              <div className="text-white text-base leading-relaxed space-y-1">
                <p>เว็บขายแอคเคาท์ Netflix รายอาทิตย์ รายเดือน ,
                  Youtube Premium รายเดือน รายปี , Disney รายปี ,
                  WeTV VIP , IQIY Gold , Viu , Ch3 Plus , MonoMAX ,
                  HBO , Prime video , แอคเคาท์เปล่า , Gmail , Outlook ,
                  Facebook , Twitter , instagram , Discord
                  และส่วนลดอื่นๆ อีกมากมายทุกวันตลอดทั้งเดือน
                  แอคเคาท์พรีเมียมราคาถูกต้องที่นี่เท่านั้น เปิดให้บริการตลอด 24 ชั่วโมง</p>
              </div>
            </div>
          </div>

          {/* Right section - Image background */}
          <div className="w-1/2 relative flex justify-end items-center bg-[#2C5886] rounded-l-4xl">
            {/* Movie grid background */}
            <div className="relative w-[50%] h-[50%] rounded-l-3xl bg-white overflow-hidden">
              <Image
                src="/images/bg-home.jpg"
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Center white div overlapping both sides */}
          <div className="absolute top-1/2 left-[calc(50%+5rem)] transform -translate-x-1/2 -translate-y-1/2 z-20 rotate-3 hover:rotate-0 transition-transform duration-300">
            <div className="bg-white rounded-2xl p-6 shadow-2xl w-[400px] h-[300px]">

              {/* Image container */}
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src="/images/netflix1.jpg"
                  alt="Netflix Interface"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Why to use RinTechX Services Section */}
      <div className="w-full h-[520px] mb-30">
        {/* Container for left and right sections */}
        <div className="h-full flex gap-8 relative">

          {/* Left section - Blue background with text content */}
          <div className="w-2/6 h-full flex items-center p-4 bg-[#2C5886] rounded-r-4xl">
          </div>

          {/* Right section - Image background */}
          <div className="w-4/6 relative flex justify-center items-center bg-[#1D3A5F] rounded-l-4xl min-h-[400px]">
            <div className="w-[70%] ml-20">
              <h1 className="text-white text-4xl font-bold mb-6 leading-tight">
                ทำไมต้องใช้บริการกับ RinTech<span className="text-[#C81013]">X</span>
              </h1>

              <hr className="w-[100%] h-[4px] mb-8 bg-gradient-to-l from-[#0E345B] via-[#1E6EC1] to-white border-0 rounded-full" />

              <div className="border-l-2 border-[#fff] pl-4">
                <div className="mb-4">
                  <div className="inline-flex items-center py-2 rounded-lg mb-4">
                    <span className="text-3xl text-white font-semibold">จำหน่ายเเอคเคาท์พรีเพียมราคาถูก</span>
                  </div>
                </div>

                <div className="text-white text-base leading-relaxed">
                  <p className="mb-4">
                    ซื้อแอคเคาท์พรีเมียม หรือ เติมเกม มีโปรโมชั่นดีๆเพียบ ง่ายนิดเดียว
                    ใช้เวลาไม่นาน เติมเกมราคาถูก แอคเคาท์ราคาส่ง คุ้มค่าที่สุด มีให้เลือกมากมาย
                    เรารวบรวม แอคเคาท์พรีเมียม และ เกมชื่อดังมากมาย ให้คุณในที่เดียว
                    สะดวกสบายในการชำระเงิน ผ่านช่องทางต่างๆ
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Center white div overlapping both sides */}
          <div className="absolute top-1/2 left-[calc(20%+5rem)] transform -translate-x-1/2 -translate-y-1/2 z-20 rotate-3 hover:rotate-0 transition-transform duration-300">
            <div className="bg-white rounded-2xl p-6 shadow-2xl w-[500px] h-[300px]">

              {/* Image container */}
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src="/images/netflix3.jpg"
                  alt="Netflix Interface"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Auto Top up System */}
      <div className="h-[520px] bg-[#1D3A5F] flex items-center justify-center p-6 mb-20">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* Left Section - Text Content */}
          <div className="text-white space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              ระบบเติมเงินอัตโนมัติ
            </h1>

            <hr className="w-[100%] h-[4px] mb-4 bg-gradient-to-r from-[#0E345B] via-[#1E6EC1] to-white border-0 rounded-full" />

            <div className="pl-4 border-l-2 border-[#fff]">

              <p className="text-lg lg:text-xl text-blue-100 leading-relaxed">
                สะดวก รวดเร็ว ปลอดภัย ตลอด 24 ช.ม.
              </p>

              <div className="text-sm lg:text-base text-blue-200 leading-relaxed space-y-2">
                <p>
                  รองรับการเติมเงินทุกบัญชีธนาคาร Prompt Pay พร้อมเพย์ ,
                  K-Bank กสิกรไทย , SCB ไทยพาณิชย์ , KTB กรุงไทย ,
                  GSB ธนาคารออมสิน , BBL กรุงเทพ , BAY กรุงศรี , TMB ทหารไทย ,
                  TBANK ธนชาต , KK เกียรตินาคิน , CIMBT ซีไอเอ็มบีไทย , UOB ยูโอบี
                  และ TureWallet ทรูมันนี่วอลเล็ท ปลอดภัย เติมง่ายและรวดเร็ว
                  ด้วยระบบ QRCode
                </p>
              </div>
            </div>

            <div className="flex justify-end">
              <Link href=""
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full hover:bg-[#fff] hover:text-blue-800 transition-all duration-300 font-medium">
                ดูข้อมูลเพิ่มเติม
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <div className="grid grid-cols-3 gap-6">

              {/* Row 1 */}
              <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-full h-16 rounded-lg flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/payments/visa-logo.png"
                    alt="VISA"
                    width={80}
                    height={50}
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-full h-16 rounded-lg flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/payments/truemoney-logo.png"
                    alt="TrueMoney"
                    width={100}
                    height={50}
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-full h-16 rounded-lg flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/payments/mastercard-logo.png"
                    alt="Mastercard"
                    width={80}
                    height={50}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-full h-16 rounded-lg flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/payments/paypal-logo.png"
                    alt="PayPal"
                    width={100}
                    height={50}
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-full h-16 rounded-lg flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/payments/promptpay-logo.png"
                    alt="PromptPay"
                    width={100}
                    height={50}
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-full h-16 rounded-lg flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/payments/truewallet-logo.png"
                    alt="TrueWallet"
                    width={100}
                    height={50}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Row 3 */}
              <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-full h-16 rounded-lg flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/payments/linepay-logo.png"
                    alt="LINE Pay"
                    width={100}
                    height={50}
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-full h-16 rounded-lg flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/payments/mpay-logo.png"
                    alt="M Pay"
                    width={100}
                    height={50}
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-full h-16 rounded-lg flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/payments/bank-transfer-logo.png"
                    alt="Bank Transfer"
                    width={100}
                    height={50}
                    className="object-contain"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

    </AppLayout>
  );
}