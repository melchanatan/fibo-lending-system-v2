import React from 'react'
import CartOverlayItem from './CartOverlayItem'
import { InteractiveOverlay } from '../InteractiveOverlay'
import CloseIcon from '../assets/CloseIcon'
import { AnimatePresence } from 'framer-motion'

const CartOverlay = ({isShowingOverlay, handleClick}: {isShowingOverlay: boolean, handleClick: () => void}) => {
  return (
    <>
        <div className='z-[1000] fixed right-2 h-[100vh] top-0 my-[4px] bg-white solid-shadow rounded-[20px] border-black w-[60vw] p-10 transition-all'
          style={{right: isShowingOverlay ? "0px" : "-5000px"}}
        >
          <div className="flex justify-between items-center mb-6">
            <h4 className='text-xl font-semibold font-primary'>Your cart</h4>
            <CloseIcon onClick={handleClick} className="scale-[.75] clickable" />
          </div>
          <ul>
            <CartOverlayItem></CartOverlayItem>
          </ul>
        </div>      
      {
        isShowingOverlay &&          
        <InteractiveOverlay handleClick={handleClick} /> 
      }
    </>
  )
}

export default CartOverlay