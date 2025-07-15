import React from 'react'
import { AppLayout, HeroBackground } from '@components/layouts'
import { SlipVerificationContent } from '@components/credit'

const SlipVerificationPage = () => {
    return (
        <AppLayout>
            <HeroBackground
                title="เติมเครดิต"
                backgroundUrl='/images/background/bg-follow.jpg'
                path='ช่องทางการเติมเครดิต > ตรวจสลิปอัตโนมัติ'
                className="mb-4"
            />

            {/* Container Section */}
            <div className='w-[80%] mx-auto my-8'>
                <SlipVerificationContent />
            </div>
        </AppLayout>
    )
}

export default SlipVerificationPage