import React from 'react'
import HeroBackground from '@components/layouts/HeroBackground'
import AppLayout from '@components/layouts/AppLayout';
import CashCard from '@components/ui/CashCard';
import AutoScroll from '@components/ui/AutoScroll';

const CashCardPage = () => {

    const cashCards = [
        {
            id: 1,
            cardType: 'CASH' as const,
            logoSrc: '/images/cash-card/cash.svg',
            backgroundColor: '#FF6B8A',
            headerColor: '#E53E3E'
        },
        {
            id: 2,
            cardType: 'STEAM' as const,
            logoSrc: '/images/cash-card/steam.svg',
            backgroundColor: '#A0A0A0',
            headerColor: '#2D3748'
        },
        {
            id: 3,
            cardType: 'RIOT' as const,
            logoSrc: '/images/cash-card/riot.svg',
            backgroundColor: '#FF6B8A',
            headerColor: '#E53E3E'
        },
        {
            id: 4,
            cardType: 'NINTENDO' as const,
            logoSrc: '/images/cash-card/nintendo.svg',
            backgroundColor: '#A0A0A0',
            headerColor: '#2D3748'
        },
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
                                id={card.id}
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

export default CashCardPage