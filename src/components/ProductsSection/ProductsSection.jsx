import React, { Suspense, useState } from 'react';
import ProductsTabs from '../ProductsTabs/ProductsTabs';
import ProductsGrid from '../ProductsGrid/ProductsGrid';
import CartProducts from '../cartProducts/CartProducts';




const ProductsSection = ({ fetchData, carts, setCarts }) => {

    const [selectCart, setSelectCart] = useState(false)

    return (
        <>
            <div className='my-20 text-center'>
                <div className='space-y-4'>
                    <h1 className='text-2xl font-bold'>Premium Digital Tools</h1>
                    <p className='Text-xs text-black/60'> Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
                </div>
                <ProductsTabs setSelectCart={setSelectCart} selectCart={selectCart} carts={carts} />

            </div>
            <div>
                {selectCart ?
                    <CartProducts carts={carts} setCarts={setCarts} />
                    :
                    <Suspense>
                        <ProductsGrid fetchData={fetchData} carts={carts} setCarts={setCarts} />
                    </Suspense>
                }
            </div>
        </>

    );
};

export default ProductsSection;