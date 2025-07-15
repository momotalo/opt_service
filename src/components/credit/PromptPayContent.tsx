'use client'
import React, { FC, useState } from 'react'
import { LuCopy, LuCheck } from "react-icons/lu";
import Image from 'next/image';

const PromptPayContent: FC = () => {
    const [copied, setCopied] = useState(false)
    const [amount, setAmount] = useState('')

    const promptPayNumber = "0XX-XXX-XXXX"

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(promptPayNumber)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch (err) {
            console.error('Failed to copy:', err)
        }
    }

    const handleSubmit = () => {
        if (amount) {
            console.log('Submit payment confirmation with amount:', amount)
            // Add payment confirmation logic here
        }
    }

    return (
        <div className="max-w-md mx-auto bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-6">
            {/* Header */}
            <div className="text-center mb-6">
                <h2 className="text-xl font-bold text-gray-800">PromptPay</h2>
            </div>

            {/* QR Code Section */}
            <div className="bg-white rounded-lg p-6 mb-6 flex justify-center">
                <div className="w-48 h-48 flex items-center justify-center">
                    <img
                        src="/images/qr-placeholder.png"
                        alt="QR Code"
                        className="w-full h-full object-contain rounded"
                    />
                </div>
            </div>

            {/* Information List */}
            <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span>รองรับ ทรูมันนี่ ผ่านแพร์อมเพย์</span>
                </div>

                <div className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span>รองรับ แอพธนาคารที่มีระบบ QR Promptpay เช่น Kbank Wallet, mPAY, เป็นต้น</span>
                </div>

                <div className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span>เติมเงินขั้นต่ำ 10 บาท สูงสุด 200,000 บาท</span>
                </div>

                <div className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span>ฟรี! ค่าธรรมเนียม</span>
                </div>

                <div className="flex items-center text-sm text-red-600">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    <span>กรุณาโอนเงินตามจำนวนที่ระบุไว้เท่านั้น</span>
                </div>
            </div>

            {/* Copy Button */}
            <div
                className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-lg cursor-pointer transition-colors duration-200 mb-6"
                onClick={handleCopy}
            >
                <div className="flex items-center justify-center">
                    {copied ? (
                        <LuCheck className="w-5 h-5 mr-2" />
                    ) : (
                        <LuCopy className="w-5 h-5 mr-2" />
                    )}
                    <div className="text-center">
                        <div className="text-sm font-medium">
                            {copied ? 'คัดลอกแล้ว!' : 'ประมาณฟาย : คลิก'}
                        </div>
                        <div className="text-xs opacity-90">
                            {copied ? 'สำเร็จ!' : `เลขที่ : ${promptPayNumber} COPY`}
                        </div>
                        <div className="text-xs opacity-75">
                            {copied ? '' : 'ขั้นตอน : แตะเพื่อ คัดลอก'}
                        </div>
                    </div>
                </div>
            </div>

            {/* Amount Input */}
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    จำนวนเงินที่ต้องการเติม
                </label>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="ระบุจำนวนเงิน"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    min="10"
                    max="200000"
                />
            </div>

            {/* Submit Button */}
            <button
                onClick={handleSubmit}
                disabled={!amount}
                className="w-full bg-blue-800 hover:bg-blue-900 disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200"
            >
                ยืนยันการโอนเงิน
            </button>
        </div>
    )
}

export default PromptPayContent