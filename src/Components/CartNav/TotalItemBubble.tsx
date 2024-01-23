import React from 'react'
import { useSelector } from 'react-redux';

const TotalItemBubble = () => {
    const cartSelector = useSelector((state: any) => state.cart);

    const cartLength = Object.keys(cartSelector.cart).length;

    return (
        <span className='absolute w-8 h-8 bg-red-400 shadow-sm rounded-full top-[-.8rem] right-[-.6rem] flex justify-center items-center text-lg text-white font-semibold transition-all duration-[50ms] ease-in-out' style={{scale: cartLength > 0 ? 1 : 0}}
        >{cartLength}</span>
    )
}

export default TotalItemBubble