import React from 'react'
import HeroBackground from '@components/layouts/HeroBackground'
import AppLayout from '@components/layouts/AppLayout';
import CashCard from '@components/ui/CashCard';
import AutoScroll from '@components/ui/AutoScroll';

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
                backgroundUrl="/images/background/bg-game.jpg"
                title='บริการขายบัตรเติมเงินสดราคาถูก'
                path='บัตรเติมเงินสด'
                className="mb-4"
            >
            </HeroBackground>

            {/* Container Section */}
            <div className="container w-[80%] mx-auto my-8 p-4">

                {/* Auto Scrolling */}
                <AutoScroll />

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