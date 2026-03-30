import React from 'react';

const ProductsTabs = () => {
    return (
        <div role="tablist" className="tabs tabs-box flex justify-center mt-3">
            <a role="tab" className="tab rounded-full px-6 themeColor text-white tab-active">Products</a>
            <a role="tab" className="tab rounded-full px-6 themeText">cart (2) </a>
        </div>
    );
};

export default ProductsTabs;