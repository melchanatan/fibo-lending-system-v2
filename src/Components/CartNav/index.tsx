import React from 'react'
import Profile from './Profile'
import Cart from './Cart'
import CartOverlay from './CartOverlay'

const CardNav = () => {
  return (
    <nav className='flex solid-border gap-2 items-center solid-shadow absolute top-2 right-2 rounded-[14px] bg-white [&>*]:px-3'>
      <Profile />
      <Cart />
      <CartOverlay />
    </nav>
  )
}

export default CardNav