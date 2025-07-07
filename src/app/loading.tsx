'use client';

import React from 'react';

interface LoadingScreenProps {
    message?: string;
    isFullScreen?: boolean;
}

// Default export component สำหรับ Next.js loading.tsx
export default function Loading() {
    return <LoadingScreen />;
}

// Named export component สำหรับใช้ในที่อื่น
export const LoadingScreen = ({
    message = "กำลังโหลด...",
    isFullScreen = true
}: LoadingScreenProps) => {
    if (!isFullScreen) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <LoadingSpinner message={message} />
            </div>
        );
    }

    return (
        <div
            className="fixed inset-0 z-[9999] bg-gradient-to-br from-gray-50 via-white to-blue-50 flex items-center justify-center"
            style={{
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)'
            }}
        >
            <LoadingSpinner message={message} />
        </div>
    );
};

const LoadingSpinner = ({ message }: { message: string }) => {
    return (
        <div className="text-center px-6 py-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 min-w-[320px]">
            <div className="relative mb-6">
                <div className="w-16 h-16 mx-auto relative">
                    <div className="absolute inset-0 rounded-full bg-gray-400 opacity-20 animate-ping"></div>

                    <div className="absolute inset-1 rounded-full border-4 border-transparent border-t-blue-500 border-r-gray-500 animate-spin"></div>
                    <div className="absolute inset-2 rounded-full border-3 border-transparent border-b-gray-400 border-l-blue-400 animate-spin-reverse"></div>

                    <div className="absolute inset-6 rounded-full bg-blue-500 animate-pulse"></div>
                </div>
            </div>

            <h3 className="text-xl font-bold mb-4 text-gray-700">
                {message}
            </h3>
            <div className="flex justify-center space-x-2 mb-6">
                {[0, 200, 400].map((delay, index) => (
                    <div
                        key={index}
                        className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"
                        style={{ animationDelay: `${delay}ms` }}
                    ></div>
                ))}
            </div>
            <div className="w-48 mx-auto">
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-gray-500 to-blue-500 rounded-full animate-progress"></div>
                </div>
            </div>

            <style jsx>{`
                @keyframes spin-reverse {
                    from { transform: rotate(360deg); }
                    to { transform: rotate(0deg); }
                }
                
                @keyframes progress {
                    0% { transform: translateX(-100%); width: 0%; }
                    50% { width: 100%; }
                    100% { transform: translateX(100%); width: 0%; }
                }
                
                .animate-spin-reverse {
                    animation: spin-reverse 1s linear infinite;
                }
                
                .animate-progress {
                    animation: progress 2s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};