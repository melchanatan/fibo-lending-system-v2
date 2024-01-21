import React, { useEffect } from 'react'
import AddToCart from './AddToCart'
import { Item } from '@/types'
import { useSelector } from 'react-redux';

// TODO: add image
const ItemCard = ({item, itemId}: {item: Item[0], itemId: string}) => {
  const cartSelector = useSelector((state: any) => state.cart);

  const itemInCart = cartSelector.cart[itemId]?.quantity;
  console.log(itemInCart)
  return (
    <div className='min-w-[10rem] solid-border rounded-[15px] relative solid-shadow'>
      <div className="bg-[url('/banana-wall.png')] w-full h-[10rem] bg-cover rounded-t-[11px] z-[-1]"></div>
      <div className='flex justify-between pl-3 rounded-b-[11px] top-shadow'>
        <ul className='py-1'>
          <li className='font-semibold'>{item.productName}</li>
          <li>{item.price} $</li>
        </ul>
        <div className="flex">
          {
            itemInCart == undefined || itemInCart == 0 ?
            <AddToCart itemId={itemId} />
            :
            <AddToCart.VerticalNumberInput itemId={itemId} />
          }
        </div>
      </div>
    </div>
  )
}

export default ItemCard