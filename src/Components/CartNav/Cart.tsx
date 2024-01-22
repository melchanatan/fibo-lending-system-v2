import React, { use, useEffect, useState } from 'react'
import CartIcon from './assets/CartIcon'
import CartOverlay from './CartOverlay';
import { useSelector } from 'react-redux';

const Cart = () => {
  const [showingOverlay, setShowingOverlay] = useState(false);
  const cartSelector = useSelector((state: any) => state.cart);

  // toggle showingOverlay
  const toggleOverlay = () => {
    setShowingOverlay(prev => !prev);
  }
  
  const cartLength = Object.keys(cartSelector.cart).length;
  return (
    <>
      <a className='relative cursor-pointer group bg-black py-1 px-2 rounded-[8px]' onClick={toggleOverlay}>
        <CartIcon className="button-bounce w-10 h-10 fill-white"/>
        {
          cartLength > 0 &&
          <span className='absolute w-8 h-8 bg-red-400 shadow-sm rounded-full top-[-.8rem] right-[-.6rem] flex justify-center items-center text-lg text-white font-semibold'>{cartLength}</span>
        }
      </a>
      <CartOverlay isShowingOverlay={showingOverlay} handleClick={toggleOverlay}/>
    </>

    )
}

export default Cart