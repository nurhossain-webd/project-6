import React, { use } from 'react';
import ProductCard from '../ProductCard/ProductCard';

const ProductsGrid = ({ fetchData, carts, setCarts }) => {
    const data = use(fetchData);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 w-11/12 lg:w-10/12 mx-auto">
            {data.map((cardData) => (
                <ProductCard
                    key={cardData.id}
                    cardData={cardData}
                    carts={carts}
                    setCarts={setCarts}
                />
            ))}
        </div>
    );
};

export default ProductsGrid;