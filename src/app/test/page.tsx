import HeroBackground from '@components/layouts/HeroBackground'
import Navbar from '@components/layouts/Navbar'
import ProfileSidebar from '@components/layouts/ProfileSidebar'
import React from 'react'

const TestPage = () => {
    return (
        <div>
            <Navbar />

            <HeroBackground
                backgroundUrl="/images/OTP.svg"
                className="mb-4">
            </HeroBackground>

            <div className="container w-[80%] mx-auto my-4">
                <ProfileSidebar />
            </div>
        </div>
    )
}

export default TestPage