"use client"
import { useParams } from 'next/navigation';
import { AppLayout } from '@components/layouts';
import { ProductDetail } from '@components/account';

const ProductPurchasePage = () => {
    const params = useParams();
    const productId = params.productId as string;

    return (
        <AppLayout className='bg-[#F1F7FE]'>
            <ProductDetail productId={productId} />
        </AppLayout>
    );
};

export default ProductPurchasePage;