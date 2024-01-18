import React from 'react'
import Profile from './Profile'
import Cart from './Cart'
import CartOverlay from './CartOverlay'
import { InteractiveOverlay } from '../InteractiveOverlay'

const CardNav = () => {
  return (
    <nav className='flex solid-border items-center solid-shadow absolute top-2 right-2 rounded-[14px] bg-white [&>*]:px-3'>
      <Profile />
      <Cart />
    </nav>
  )
}

export default CardNav