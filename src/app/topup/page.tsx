import Footer from '@components/Footer'
import HeroBackground from '@components/HeroBackground'
import Navbar from '@components/Navbar'
import GameCard from '@components/GameCard'
import React from 'react'

const GameTopUpPage = () => {

    const games = [
        {
            title: "Garena Free Fire",
            image: "/api/placeholder/200/120",
            discount: "0.00"
        },
        {
            title: "ROV: Arena of Valor",
            image: "/api/placeholder/200/120",
            discount: "0.00"
        },
        {
            title: "VALORANT",
            image: "/api/placeholder/200/120",
            discount: "0.00"
        },
        {
            title: "EA SPORTS FC MOBILE",
            image: "/api/placeholder/200/120",
            discount: "0.00"
        },
        {
            title: "Garena Free Fire",
            image: "/api/placeholder/200/120",
            discount: "0.00"
        },
        {
            title: "ROV: Arena of Valor",
            image: "/api/placeholder/200/120",
            discount: "0.00"
        },
        {
            title: "VALORANT",
            image: "/api/placeholder/200/120",
            discount: "0.00"
        },
        {
            title: "EA SPORTS FC MOBILE",
            image: "/api/placeholder/200/120",
            discount: "0.00"
        }
    ];

    return (
        <div className='bg-[#F1F7FE]'>
            <Navbar />

            <HeroBackground
                backgroundUrl="/images/game.jpg"
                className="mb-4"
            >
                <div className="flex flex-col items-center justify-center h-[calc(100vh-60px)] px-4 text-center">
                    <h1 className='p-4 text-6xl text-[#1D3A5F] font-bold rounded-3xl bg-[#fff]'>บริการเติมเกมออนไลน์ราคาถูก</h1>
                    <p className="px-6 py-1 text-lg text-[#fff] bg-[#0E345B] rounded-b-4xl">
                        หน้าหลัก / <span className='text-[#737373]'>เติมเกมออนไลน์</span></p>
                </div>
            </HeroBackground>

            {/* Container Section */}
            <div className="container w-[80%] mx-auto my-8 p-4">

                {/* Auto Scrolling */}
                <div className="flex justify-center items-center w-full h-[130px] border-2 rounded-2xl bg-[#fff]">
                    <h1 className="font-mono text-[35px] font-bold ">Auto Scrolling</h1>
                </div>

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
                                title={game.title}
                                image={game.image}
                                discount={game.discount}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <Footer />
        </div>
    )
}

export default GameTopUpPage