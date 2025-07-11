"use client"
import { AppLayout, HeroBackground } from '@components/layouts'
import { AutoScroll, GameCard } from '@components/ui'
import { useRouter } from 'next/navigation'
import React from 'react'

const GameTopUpPage = () => {
    const router = useRouter();

    const games = [
        {
            id: "garena",
            title: "Garena Free Fire",
            image: "/images/games/garena.svg",
            discount: "20.00"
        },
        {
            id: "rov",
            title: "ROV: Arena of Valor",
            image: "/images/games/rov.svg",
            discount: "15.00"
        },
        {
            id: "valorant",
            title: "VALORANT",
            image: "/images/games/valorant.svg",
            discount: "25.00"
        },
        {
            id: "fc-mobile",
            title: "EA SPORTS FC MOBILE",
            image: "/images/games/fc-mobile.svg",
            discount: "10.00"
        },
    ];

    const handleGameClick = (gameId: string) => {
        router.push(`/topup/${gameId}`);
    };

    return (
        <AppLayout className='bg-[#F1F7FE]'>

            <HeroBackground
                backgroundUrl="/images/background/bg-game.jpg"
                title='บริการเติมเกมออนไลน์ราคาถูก'
                path='เติมเกมออนไลน์'
                className="mb-4"
            >
            </HeroBackground>

            {/* Container Section */}
            <div className="container w-[80%] mx-auto my-8 p-4">

                {/* Auto Scrolling */}
                <AutoScroll />

                {/* Search Gmae Section */}
                <div className="py-6">
                    {/* Header with search */}
                    <div className="flex flex-col mb-12 gap-4">
                        <h2 className="text-3xl font-bold text-[#2C5886]">ค้นหาเกม</h2>
                        <div className="w-full">
                            <input
                                type="text"
                                placeholder="ค้นหาเกม..."
                                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                    </div>

                    {/* Game Grid - First Row */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-4">
                        {games.map((game, index) => (
                            <GameCard
                                key={`row1-${index}`}
                                id={game.id}
                                title={game.title}
                                image={game.image}
                                discount={game.discount}
                                onClick={() => handleGameClick(game.id)}
                            />
                        ))}
                    </div>
                </div>
            </div>

        </AppLayout>
    )
}

export default GameTopUpPage