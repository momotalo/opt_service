'use client'
import React, { FC, useState, useRef } from 'react'
import { LuCopy, LuCheck, LuCloud,LuCreditCard } from "react-icons/lu";

const SlipVerificationContent: FC = () => {
    const [copied, setCopied] = useState(false)
    const [selectedFile, setSelectedFile] = useState<File | null>(null)
    const [amount, setAmount] = useState('')
    const fileInputRef = useRef<HTMLInputElement>(null)

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

    const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (file) {
            setSelectedFile(file)
        }
    }

    const handleUploadClick = () => {
        fileInputRef.current?.click()
    }

    const handleSubmit = () => {
        if (selectedFile && amount) {
            console.log('Submit slip verification:', { file: selectedFile, amount })
            // Add slip verification logic here
        }
    }

    return (
        <div className="max-w-md mx-auto bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-6">
            {/* Header */}
            <div className="text-center mb-6">
                {/* <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <LuCreditCard className="text-white w-8 h-8" />
                </div> */}
                <h2 className="text-xl font-bold text-gray-800">ตรวจสลิปอัตโนมัติ</h2>
                <p className="text-sm text-gray-600 mt-1">สะดวก โดยอัตโนมัติ</p>
            </div>

            {/* Information List */}
            <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span>เอกสารที่ยอมรับคือสลิปโอนเงินจริงเท่านั้น</span>
                </div>

                <div className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span>รูปแบบไฟล์ที่รองรับ: JPG, PNG, PDF</span>
                </div>

                <div className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span>ฟรี! ค่าธรรมเนียม</span>
                </div>

                <div className="flex items-center text-sm text-red-600">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    <span>กรุณาอัพโหลดสลิปที่ชัดเจนและครบถ้วน</span>
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

            {/* File Upload Section */}
            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    อัพโหลดสลิป
                </label>
                <div
                    className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-blue-400 transition-colors duration-200"
                    onClick={handleUploadClick}
                >
                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileSelect}
                        accept="image/*,.pdf"
                        className="hidden"
                    />
                    <LuCloud className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                    <p className="text-sm text-gray-600 mb-2">
                        {selectedFile ? selectedFile.name : 'กรุณาอัพโหลดรูปภาพหรือไฟล์ของคุณ'}
                    </p>
                    <p className="text-xs text-gray-500">
                        รองรับไฟล์ JPG, PNG, PDF
                    </p>
                </div>
            </div>

            {/* Amount Input */}
            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    จำนวนเงินที่ต้องการเติม
                </label>
                <div className="relative">
                    <LuCreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-600 w-5 h-5" />
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="จำนวนเงิน"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        min="10"
                        max="200000"
                    />
                </div>
            </div>

            {/* Submit Button */}
            <button
                onClick={handleSubmit}
                disabled={!selectedFile || !amount}
                className="w-full bg-blue-800 hover:bg-blue-900 disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200"
            >
                ส่งข้อมูล
            </button>
        </div>
    )
}

export default SlipVerificationContent