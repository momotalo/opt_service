import React from 'react'
import HeroBackground from '@components/layouts/HeroBackground'
import AppLayout from '@components/layouts/AppLayout';
import CashCard from '@components/CashCard';

const CashCardSalesPage = () => {

    const cashCards = [
        {
            cardType: 'ROBLOX' as const,
            logoSrc: '/api/placeholder/48/48', // Replace with actual Roblox logo
            backgroundColor: '#FF6B8A',
            headerColor: '#E53E3E'
        },
        {
            cardType: 'STEAM' as const,
            logoSrc: '/api/placeholder/48/48', // Replace with actual Steam logo
            backgroundColor: '#A0A0A0',
            headerColor: '#2D3748'
        },
        {
            cardType: 'RIOT' as const,
            logoSrc: '/api/placeholder/48/48', // Replace with actual Riot logo
            backgroundColor: '#FF6B8A',
            headerColor: '#E53E3E'
        },
        {
            cardType: 'GAREBA' as const,
            logoSrc: '/api/placeholder/48/48', // Replace with actual Garena logo
            backgroundColor: '#A0A0A0',
            headerColor: '#2D3748'
        },
        {
            cardType: 'ROBLOX' as const,
            logoSrc: '/api/placeholder/48/48', // Replace with actual Roblox logo
            backgroundColor: '#FF6B8A',
            headerColor: '#E53E3E'
        },
        {
            cardType: 'STEAM' as const,
            logoSrc: '/api/placeholder/48/48', // Replace with actual Steam logo
            backgroundColor: '#A0A0A0',
            headerColor: '#2D3748'
        },
        {
            cardType: 'RIOT' as const,
            logoSrc: '/api/placeholder/48/48', // Replace with actual Riot logo
            backgroundColor: '#FF6B8A',
            headerColor: '#E53E3E'
        },
        {
            cardType: 'GAREBA' as const,
            logoSrc: '/api/placeholder/48/48', // Replace with actual Garena logo
            backgroundColor: '#A0A0A0',
            headerColor: '#2D3748'
        }
    ];

    return (
        <AppLayout>

            <HeroBackground
                backgroundUrl="/images/bg-game.jpg"
                className="mb-4"
            >
                <div className="flex flex-col items-center justify-center h-[calc(100vh-60px)] px-4 text-center">
                    <h1 className='p-4 text-6xl text-[#1D3A5F] font-bold rounded-3xl bg-[#fff]'>บริการขายบัตรเติมเงินสดราคาถูก</h1>
                    <p className="px-6 py-1 text-lg text-[#fff] bg-[#0E345B] rounded-b-4xl">
                        หน้าหลัก / <span className='text-[#737373]'>บัตรเติมเงินสด</span></p>
                </div>
            </HeroBackground>

            {/* Container Section */}
            <div className="container w-[80%] mx-auto my-8 p-4">

                {/* Auto Scrolling */}
                <div className="flex justify-center items-center w-full h-[130px] border-2 rounded-2xl bg-[#fff]">
                    <h1 className="font-mono text-[35px] font-bold ">Auto Scrolling</h1>
                </div>

                {/* Cash Card Sales Section */}
                <div className="mt-8">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
                        {cashCards.map((card, index) => (
                            <CashCard
                                key={`row1-${index}`}
                                cardType={card.cardType}
                                logoSrc={card.logoSrc}
                                backgroundColor={card.backgroundColor}
                                headerColor={card.headerColor}
                            />
                        ))}
                    </div>
                </div>
            </div>

        </AppLayout>
    )
}

export default CashCardSalesPage