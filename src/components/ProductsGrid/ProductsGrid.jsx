import React, { use } from 'react';
import ProductCard from '../ProductCard/ProductCard';


const ProductsGrid = ({ dataPromise }) => {
    const data = use(dataPromise)
    console.log(data)
    return (
        <div>
            <ProductCard />
        </div>
    );
};

export default ProductsGrid;