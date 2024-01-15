import React from 'react'
import CartOverlayItem from './CartOverlayItem'
import BackgroundDarken from '../BackgroundDarken'
import { InteractiveOverlay } from '../InteractiveOverlay'

const CartOverlay = () => {
  return (
    <>
      <InteractiveOverlay>
      </InteractiveOverlay>    
        {/* <div className='z-50 fixed right-2 h-[100vh] top-0 my-[4px] bg-white solid-border solid-shadow rounded-[20px] border-black w-[60vw]'>
        <h4>Your cart</h4>
        <ul>
          <CartOverlayItem></CartOverlayItem>
        </ul>
      </div> */}
    </>
  )
}

export default CartOverlay