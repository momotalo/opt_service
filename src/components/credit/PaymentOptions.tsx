"use client";
import React, { FC } from 'react'
import { useRouter } from 'next/navigation'
import PaymentCard from './PaymentCard'

interface PaymentOption {
    title: string
    subtitle: string
    action: string
}

const PaymentOptions: FC = () => {

    const router = useRouter()

    const handlePaymentClick = (action: string) => {
        switch (action) {
            case 'promptpay':
                router.push('/credit/promptpay')
                break
            case 'slip':
                router.push('/credit/slip-verification')
                break
            default:
                console.log('Unknown payment method')
        }
    }

    const paymentMethods: PaymentOption[] = [
        {
            title: "PromptPay",
            subtitle: "พร้อมเพย์",
            action: "promptpay"
        },
        {
            title: "Slip-Verification",
            subtitle: "ตรวจสลิปอัตโนมัติ",
            action: "slip"
        }
    ]

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {paymentMethods.map((method, index) => (
                <PaymentCard
                    key={index}
                    title={method.title}
                    subtitle={method.subtitle}
                    onClick={() => handlePaymentClick(method.action)}
                />
            ))}
        </div>
    )
}

export default PaymentOptions