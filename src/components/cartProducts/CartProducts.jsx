import React from 'react';
import { LuShoppingCart } from "react-icons/lu";

const CartProducts = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <h3 className='text-2xl'>Your cart</h3>


            <div className="min-h-[60vh] flex items-center justify-center">
                <div className="text-center">
                    <LuShoppingCart className="mx-auto text-6xl text-black/30" />
                    <p className="text-black/30 mt-2">Your cart is empty</p>
                </div>
            </div>

        </div>
    );
};

export default CartProducts;