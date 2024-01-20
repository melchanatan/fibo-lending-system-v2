import React from 'react'
import AddToCart from './AddToCart'

// TODO: add image
const ItemCard = ({name, price, quantity, image}: {name: string, price: number, quantity: number, image: string | undefined}) => {
  return (
    <div className='min-w-[10rem] solid-border rounded-[15px] relative solid-shadow'>
      <div className="bg-[url('/banana-wall.png')] w-full h-[10rem] bg-cover rounded-t-[11px] z-[-1]"></div>
      <div className='flex justify-between pl-3 rounded-b-[11px] top-shadow'>
        <ul className='py-1'>
          <li className='font-semibold'>{name}</li>
          <li>{price} $</li>
        </ul>
        <div className="flex">
          <AddToCart />
          {/* <AddToCart.VerticalNumberInput /> */}
        </div>
      </div>
    </div>
  )
}

export default ItemCard