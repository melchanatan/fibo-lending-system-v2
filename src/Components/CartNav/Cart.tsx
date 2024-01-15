import React, { use, useState } from 'react'
import CloseIcon from './assets/CloseIcon'
import CartOverlay from './CartOverlay';

const Cart = () => {
  const [showingOverlay, setShowingOverlay] = useState(true);

  // toggle showingOverlay
  const toggleOverlay = () => {
    setShowingOverlay(prev => !prev);
  }

 
  return (
    <>
      <a className='bg-black py-1 px-2 rounded-[8px]' onClick={toggleOverlay}>
        <CloseIcon className="fill-white"/>
      </a>
      <CartOverlay isShowingOverlay={showingOverlay} handleClick={toggleOverlay}/>
    </>

    )
}

export default Cart