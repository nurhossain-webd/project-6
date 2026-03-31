import React from 'react';

const ProductsTabs = ({ carts, selectCart, setSelectCart }) => {
    return (
        <div role="tablist" className="tabs tabs-box flex justify-center mt-3">

            <button onClick={() => setSelectCart(false)} className={`"tab rounded-full px-6 ${selectCart ? "themeText" : "themeColor text-white tab-active"} 
            `}>Products</button>
            <button onClick={() => setSelectCart(true)} className={`"tab rounded-full px-6 ${selectCart ? "themeColor text-white tab-active" : "themeText"} 
            `}>Cart ({carts.length})</button>
        </div>

    );
};

export default ProductsTabs;