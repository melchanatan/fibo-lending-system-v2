import React from 'react'
import CloseIcon from './assets/ProfileIcon'

const CartOverlayItem = () => {
  return (
    <li className='solid-border  rounded-[15px] flex gap-4 items-center pr-4'>
        <img src="https://imgur.com/a/Lr5ALle" alt="" className='w-[5rem] h-[5rem]'/>
        <div>
          <h5 className='font-semibold'>Item name</h5>
          <p className='text-gray-500'>$ 40</p>
        </div>
        <div className='flex ml-auto'>
          <input type="number" className='bg-gray-100 w-[3ch]'/>
          <CloseIcon />
        </div>
    </li>
  )
}

export default CartOverlayItem