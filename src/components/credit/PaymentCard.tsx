"use client";
import React, { FC } from 'react'

interface PaymentCardProps {
    title: string
    subtitle: string
    onClick?: () => void
}
const PaymentCard: FC<PaymentCardProps> = ({ title, subtitle, onClick }) => {
    return (
        <div
            className="relative h-[260px] bg-gradient-to-br from-blue-500 via-purple-500 to-pink-400 rounded-xl p-6 text-white cursor-pointer hover:transform hover:scale-105 transition-all duration-300 shadow-lg"
            onClick={onClick}
        >
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-xl font-bold mb-1">{title}</h3>
                    <p className="text-sm opacity-90">{subtitle}</p>
                </div>
                <div className="w-12 h-8 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded flex items-center justify-center">
                    <div className="w-8 h-6 bg-yellow-500 rounded-sm flex items-center justify-center">
                        <div className="w-6 h-4 bg-yellow-600 rounded-xs"></div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/10 to-transparent rounded-b-xl"></div>

            <div className="absolute bottom-4 left-6 flex items-center text-sm opacity-75">
                <div className="w-4 h-4 border border-white rounded-full mr-2 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span>พร้อมใช้งาน</span>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
        </div>
    )
}
export default PaymentCard