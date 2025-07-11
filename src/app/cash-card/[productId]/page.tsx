"use client"
import { useParams } from 'next/navigation';
import { AppLayout, HeroBackground } from '@components/layouts';
import { CashcardDetailSection } from '@components/cashcard';

const CashCardProductPage = () => {
    const params = useParams();
    const productId = params.productId as string;

    return (
        <AppLayout className='bg-[#F1F7FE]'>
            <HeroBackground
                backgroundUrl="/images/background/bg-game.jpg"
                title='บริการขายบัตรเติมเงินสดราคาถูก'
                path='บัตรเติมเงินสด'
                className="mb-4">
            </HeroBackground>
            <CashcardDetailSection productId={productId} />
        </AppLayout>
    );
};

export default CashCardProductPage;