import React, { use } from 'react';
import ProductCard from '../ProductCard/ProductCard';


const ProductsGrid = ({ dataPromise }) => {
    const data = use(dataPromise)
    return (
        <div className='grid grid-cols-3 gap-4 w-10/12 mx-auto'>
            {data.map(cardData => <ProductCard key={cardData.id} cardData={cardData} />)}

        </div>
    );
};

export default ProductsGrid;