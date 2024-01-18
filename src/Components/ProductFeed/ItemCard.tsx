import React from 'react'
import AddToCart from './AddToCart'

const ItemCard = () => {
  return (
    <div className='min-w-[10rem] solid-border rounded-[15px] relative solid-shadow'>
      <div className="bg-[url('/banana-wall.png')] w-full h-[10rem] bg-cover rounded-t-[11px] z-[-1]"></div>
      <div className='flex justify-between pl-3 rounded-b-[11px] top-shadow'>
        <ul className='py-1'>
          <li className='font-semibold'>Item name 1</li>
          <li>120 $</li>
        </ul>
        <div className="flex">
          {/* <AddToCart /> */}
          <AddToCart.VerticalNumberInput />
        </div>
      </div>
    </div>
  )
}

export default ItemCard