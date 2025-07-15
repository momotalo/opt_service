import React from 'react'
import { AppLayout, HeroBackground } from '@components/layouts'
import { PromptPayContent } from '@components/credit'

const PromptPayPage = () => {
    return (
        <AppLayout>
            <HeroBackground
                title="เติมเครดิต"
                backgroundUrl='/images/background/bg-follow.jpg'
                path='ช่องทางการเติมเครดิต > PromptPay'
                className="mb-4"
            />

            {/* Container Section */}
            <div className='w-[80%] mx-auto my-8'>
                <PromptPayContent />
            </div>
        </AppLayout>
    )
}

export default PromptPayPage