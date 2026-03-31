import React, { useState } from 'react';
import { LuCheck } from "react-icons/lu";

const ProductCard = ({ cardData, carts, setCarts }) => {
    const badgeClass =
        cardData.tagType === "popular"
            ? "bg-purple-400 bg-gradient-to-r from-[#4F39F6] to-[#951BFF] bg-clip-text text-transparent border border-purple-400 rounded-full"
            : cardData.tagType === "new"
                ? "bg-green-600/20 text-green-700 border border-green-300 rounded-full"
                : "bg-amber-600/20 text-amber-700 border border-amber-300 rounded-full";
    const [buyNow, setBuyNow] = useState(false)

    const handleBuy = () => {
        setBuyNow(true)
        setCarts([...carts, cardData])


    }
    return (

        <div className='border border-black/10 shadow-sm rounded-2xl p-4 text-xs '>
            <div className='flex flex-col justify-between'>
                <div>
                    <span className={`flex justify-end`}>
                        <button className={`${badgeClass} px-2`}>{cardData.tag}</button>
                    </span>

                    <div>
                        <img className='h-8' src={cardData.icon} alt="" />
                        <h2 className='text-xl font-bold my-3'>{cardData.name}</h2>
                        <p>{cardData.description}</p>
                        <p className='my-2'><span className='text-xl font-bold'>${cardData.price}</span>/{cardData.period}</p>

                        {
                            cardData.features.map((feature, idx) => (
                                <p key={idx} className='flex gap-2 items-center'>
                                    <LuCheck className='text-green-500 font-bold' />
                                    <span>{feature}</span>
                                </p>))}
                    </div>
                </div>

                <button onClick={handleBuy} className={` ${buyNow ? 'bg-green-700' : 'themeColor'} w-full text-white my-3 p-2 rounded-full `}>{buyNow ? "Added to Cart" : "Buy Now"}</button>

            </div>


        </div>
    );
};

export default ProductCard;