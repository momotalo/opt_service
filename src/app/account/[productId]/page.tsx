"use client"
import { useParams } from 'next/navigation';
import { AppLayout, HeroBackground } from '@components/layouts';
import { AccountDetailSection } from '@components/account';

const ProductPurchasePage = () => {
    const params = useParams();
    const productId = params.productId as string;

    return (
        <AppLayout className='bg-[#F1F7FE]'>
            <HeroBackground
                backgroundUrl="/images/background/bg-follow.jpg"
                title='บริการขายแอคเคาท์สตรีมมิ่งราคาถูก'
                path='แอคเคาท์สตรีมมิ่ง'
                className="mb-4">
            </HeroBackground>
            <AccountDetailSection productId={productId} />
        </AppLayout>
    );
};

export default ProductPurchasePage;