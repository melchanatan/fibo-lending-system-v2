import React from 'react'
import CartOverlayItem from './CartOverlayItem'
import { InteractiveOverlay } from '../InteractiveOverlay'

const CartOverlay = ({isShowingOverlay, handleClick}: {isShowingOverlay: boolean, handleClick: () => void}) => {
  return (
    <>
      {
        isShowingOverlay &&
        <div className='flex'>
          <div className='z-[1000] fixed right-2 h-[100vh] top-0 my-[4px] bg-white solid-shadow rounded-[20px] border-black w-[60vw] p-10'>
            <h4 className='text-xl font-semibold font-primary mb-6'>Your cart</h4>
            <ul>
              <CartOverlayItem></CartOverlayItem>
            </ul>
          </div>
          <InteractiveOverlay handleClick={handleClick} /> 
      </div>
      }
    </>
  )
}

export default CartOverlay