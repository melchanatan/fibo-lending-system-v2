import React from 'react'
import CloseIcon from './assets/ProfileIcon'
import { CartItem } from '@/types'
import { useSelector } from 'react-redux'

const CartOverlayItem = ({itemId, item}: {itemId: string, item: CartItem[0]}) => {
  const itemDetail = useSelector((state: any) => state.products.products[itemId])

  return (
    <li className='solid-border rounded-[15px] flex gap-4 items-center pr-4'>
        <div className="bg-[url('/banana-wall.png')] w-[6rem] h-[6rem] bg-cover rounded-[11px]"></div>
        <div>
          <h5 className='font-semibold'>{itemDetail.productName}</h5>
          <p className='text-gray-500'>{itemDetail.price} $</p>
        </div>
        <div className='flex ml-auto'>
          <input type="number" className='bg-gray-100 w-[3ch] text-2xl text-center font-semibold' value={item.quantity}/>
          <CloseIcon className=''/>
        </div>
    </li>
  )
}

export default CartOverlayItem