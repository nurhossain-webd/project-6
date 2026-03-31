import React, { Suspense } from 'react';
import ProductsTabs from '../ProductsTabs/ProductsTabs';
import ProductsGrid from '../ProductsGrid/ProductsGrid';


const fetchData = async () => {
    const res = await fetch("/data.json");
    return res.json();
}

const ProductsSection = () => {
    const dataPromise = fetchData();
    return (
        <>
            <div className='my-20 text-center'>
                <div className='space-y-4'>
                    <h1 className='text-2xl font-bold'>Premium Digital Tools</h1>
                    <p className='Text-xs text-black/60'> Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
                </div>
                <ProductsTabs />

            </div>
            <div>
                <Suspense>
                    <ProductsGrid dataPromise={dataPromise} />
                </Suspense>
            </div>
        </>

    );
};

export default ProductsSection;