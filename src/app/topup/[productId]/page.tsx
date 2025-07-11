"use client"
import React from 'react'
import { useParams } from 'next/navigation';
import { AppLayout, HeroBackground } from '@components/layouts'
import { GameDetailSection } from '@components/game'

const ProductGamePage = () => {
    const params = useParams();
    const productId = params.productId as string;

    return (
        <AppLayout className='bg-[#F1F7FE]'>
            <HeroBackground
                backgroundUrl="/images/background/bg-game.jpg"
                title='บริการเติมเกมออนไลน์ราคาถูก'
                path={`เติมเกมออนไลน์ / ${productId?.toUpperCase() || 'เกม'}`}
                className="mb-4"
            />
            <GameDetailSection gameId={productId} />
        </AppLayout>
    )
}

export default ProductGamePage