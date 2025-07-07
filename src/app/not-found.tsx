import React from 'react'
import Link from 'next/link'

const NotFound = () => {

    return (
        <div className="min-h-screen bg-gradient-to-l from-[#3D78C5] to-[#0E345B] flex items-center justify-center px-4">
            <div className="text-center">
                {/* 404 Number */}
                <h1 className="text-[128px] font-bold text-white">
                    404
                </h1>

                {/* Page Not Found Text */}
                <h2 className="text-[60px] font-medium text-white mb-8">
                    Page Not Found
                </h2>

                {/* Go Home Button */}
                <Link
                    href="/"
                    className="bg-[#0080FF] hover:bg-blue-600 text-white text-[20px] font-bold py-3 px-8 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-blue-700"
                >
                    Go Home
                </Link>
            </div>
        </div>
    )
}

export default NotFound