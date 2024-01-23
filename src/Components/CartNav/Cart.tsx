import React, { use, useEffect, useState } from 'react'
import CartIcon from './assets/CartIcon'
import CartOverlay from './CartOverlay';
import { useSelector } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';
import TotalItemBubble from './TotalItemBubble';

const Cart = () => {
  const [showingOverlay, setShowingOverlay] = useState(false);

  // toggle showingOverlay
  const toggleOverlay = () => {
    setShowingOverlay(prev => !prev);
  }
  
  return (
    <>
      <a className='relative cursor-pointer group bg-black py-1 rounded-[8px] px-4' onClick={toggleOverlay}>
        <CartIcon className="button-bounce w-10 h-10 fill-white"/>
      </a>
      <TotalItemBubble />
      <CartOverlay isShowingOverlay={showingOverlay} handleClick={toggleOverlay}/>
    </>

    )
}

export default Cart