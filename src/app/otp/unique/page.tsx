"use client"
import React from 'react'
import { AppLayout, HeroBackground } from '@components/layouts'

const OtpUniquePage = () => {
    return (
        <AppLayout>
            <HeroBackground
                backgroundUrl="/images/background/bg-follow.jpg"
                title='บริการขาย OTP 24 ชั่วโมง (เบอร์ไม่ซ้ำ)'
                path='OTP'
                className="mb-4"

            />
        </AppLayout>
    )
}

export default OtpUniquePage