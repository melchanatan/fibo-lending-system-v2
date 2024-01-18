import React, { use, useState } from 'react'
import CartIcon from './assets/CartIcon'
import CartOverlay from './CartOverlay';

const Cart = () => {
  const [showingOverlay, setShowingOverlay] = useState(true);

  // toggle showingOverlay
  const toggleOverlay = () => {
    setShowingOverlay(prev => !prev);
  }

 
  return (
    <>
      <a className='cursor-pointer group bg-black py-1 px-2 rounded-[8px]' onClick={toggleOverlay}>
        <CartIcon className="button-bounce w-10 h-10 fill-white "/>
      </a>
      <CartOverlay isShowingOverlay={showingOverlay} handleClick={toggleOverlay}/>
    </>

    )
}

export default Cart