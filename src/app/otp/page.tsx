import React from 'react'
import AppLayout from '@components/layouts/AppLayout'
import HeroBackground from '@components/layouts/HeroBackground'
import AutoScroll from '@components/ui/AutoScroll'
import { OtpServiceSelection } from '@components/Services'

const OtpPage = () => {

    return (
        <AppLayout className='bg-[#F1F7FE]'>
            {/* HeroBackground Section */}
            <HeroBackground
                backgroundUrl="/images/background/bg-follow.jpg"
                title='บริการขาย OTP 24 ชั่วโมง'
                path='OTP'
                className="mb-4"
            />

            {/* Container Section */}
            <div className="w-[80%] mx-auto">
                {/* High light Auto Scrolling */}
                <AutoScroll />

                {/* Select OTP Service */}
                <OtpServiceSelection
                    className="my-8"
                />

            </div>
        </AppLayout>
    )
}

export default OtpPage