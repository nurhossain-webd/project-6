import React from "react";
import { LuShoppingCart } from "react-icons/lu";

const CartProducts = ({ carts, setCarts }) => {
    const totalPrice = carts.reduce((sum, item) => sum + item.price, 0)
    const removeFromCart = (item) => {
        const filterCart = carts.filter(cart => cart.id !== item.id)
        setCarts(filterCart)
    }
    return (
        <div className="w-10/12 mx-auto">
            <h3 className="text-2xl">Your cart</h3>

            {carts.length === 0 ? (
                <div className="min-h-[60vh] flex items-center justify-center">
                    <div className="text-center">
                        <LuShoppingCart className="mx-auto text-6xl text-black/30" />
                        <p className="text-black/30 mt-2">Your cart is empty</p>
                    </div>
                </div>
            ) : (
                <div className="mt-6 space-y-3">
                    {carts.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-between border border-black/10 rounded-xl p-4 shadow-sm"
                        >
                            <div className="flex items-center gap-3">
                                <img src={item.icon} alt="" />
                                <div>
                                    <p className="font-semibold">{item.name}</p>
                                    <p className="text-sm text-black/60">
                                        ${item.price}
                                    </p>
                                </div>
                            </div>

                            <button onClick={() => removeFromCart(item)} className="text-red-500 p-2">Remove</button>
                        </div>
                    ))}
                    <div className="flex justify-between p-3">
                        <div>Total</div>
                        <div className="font-bold"><span>${totalPrice}</span></div>
                    </div>
                    <button onClick={() => setCarts([])} className='themeColor w-full text-white my-3 p-2 rounded-full '>Proceed to Checkout</button>
                </div>
            )}


        </div>
    );
};

export default CartProducts;