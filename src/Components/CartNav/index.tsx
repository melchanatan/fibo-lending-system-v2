import React from 'react'
import Profile from './Profile'
import Cart from './Cart'
import CartOverlay from './CartOverlay'
import { InteractiveOverlay } from '../InteractiveOverlay'

const CardNav = () => {
  return (
    <nav className='flex solid-border items-center solid-shadow fixed top-9 right-[5vw] rounded-[14px] bg-white  z-[100]'>
      <Profile />
      <Cart />
    </nav>
  )
}

export default CardNav