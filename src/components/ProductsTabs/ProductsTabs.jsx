import React from 'react';

const ProductsTabs = ({ selectCart, setSelectCart }) => {
    return (
        <div role="tablist" className="tabs tabs-box flex justify-center mt-3">
            <a onClick={() => setSelectCart(false)} role="tab" className={`"tab rounded-full px-6 ${selectCart ? "themeText" : "themeColor text-white tab-active"} 
            `}>Products</a>
            <a onClick={() => setSelectCart(true)} role="tab" className={`"tab rounded-full px-6 ${selectCart ? "themeColor text-white tab-active" : "themeText"} 
            `}>cart (2) </a>
        </div>
    );
};

export default ProductsTabs;