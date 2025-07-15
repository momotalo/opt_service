import React from 'react'
import { AppLayout, HeroBackground } from '@components/layouts'
import { PaymentOptions } from '@components/credit'

const CreditPage = () => {
    return (
        <AppLayout>
            <HeroBackground
                title="เติมเครดิต"
                backgroundUrl='/images/background/bg-follow.jpg'
                path='ช่องทางการเติมเครดิต'
                className="mb-4"
            />
            
            {/* Container Section */}
            <div className='w-[80%] mx-auto my-8'>
                <PaymentOptions />
            </div>
        </AppLayout>
    )
}

export default CreditPage