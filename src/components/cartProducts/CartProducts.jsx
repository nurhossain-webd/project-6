import React from "react";
import { LuShoppingCart } from "react-icons/lu";
import { toast, Zoom } from "react-toastify";

const CartProducts = ({ carts, setCarts }) => {
    const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

    const removeFromCart = (item) => {
        const filterCart = carts.filter(cart => cart.id !== item.id);
        setCarts(filterCart);
    };

    return (
        <div className="w-11/12 lg:w-10/12 mx-auto">
            <h3 className="text-xl sm:text-2xl">Your cart</h3>

            {carts.length === 0 ? (
                <div className="min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center">
                    <div className="text-center">
                        <LuShoppingCart className="mx-auto text-5xl sm:text-6xl text-black/30" />
                        <p className="text-sm sm:text-base text-black/30 mt-2">Your cart is empty</p>
                    </div>
                </div>
            ) : (
                <div className="mt-6 space-y-3">
                    {carts.map((item) => (
                        <div
                            key={item.id}
                            className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border border-black/10 rounded-xl p-4 shadow-sm"
                        >
                            <div className="flex items-center gap-3">
                                <img className="h-8 w-8 sm:h-10 sm:w-10 object-contain" src={item.icon} alt="" />
                                <div>
                                    <p className="font-semibold text-sm sm:text-base">{item.name}</p>
                                    <p className="text-xs sm:text-sm text-black/60">
                                        ${item.price}
                                    </p>
                                </div>
                            </div>

                            <button
                                onClick={() => {
                                    removeFromCart(item), toast.error(`${item.name} removed cart`, {
                                        position: "top-right",
                                        autoClose: 1500,
                                        transition: Zoom,
                                    });
                                }}
                                className="text-red-500 p-2 text-sm sm:text-base self-start sm:self-auto"
                            >
                                Remove
                            </button>
                        </div>
                    ))}

                    <div className="flex justify-between items-center p-3 text-sm sm:text-base">
                        <div>Total</div>
                        <div className="font-bold">
                            <span>${totalPrice}</span>
                        </div>
                    </div>

                    <button
                        onClick={() => {
                            toast.success(`Order placed for $${totalPrice}`, {
                                position: "top-right",
                                autoClose: 1500,
                                transition: Zoom,
                            });
                            setCarts([]);
                        }}
                        className="themeColor w-full text-white my-3 p-2 sm:p-3 rounded-full text-sm sm:text-base"
                    >
                        Proceed to Checkout
                    </button>
                </div>
            )}
        </div>
    );
};

export default CartProducts;