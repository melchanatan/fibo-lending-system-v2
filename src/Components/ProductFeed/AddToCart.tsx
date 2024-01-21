import React, { useEffect } from 'react'
import PlusIcon from './assets/PlusIcon'
import MinusIcon from './assets/MinusIcon'

import { useDispatch, useSelector } from 'react-redux';
import { addItem, increaseQuantity, decreaseQuantity, editQuantity } from '@/store/cartReducer';

const AddToCart = ({itemId}: {itemId: string}) => {

  const dispatch = useDispatch();

  // Add item to cart with the default quantity of 1
  const handleAddToCart = () => {
    dispatch(addItem({
        id: itemId, 
        quantity: 1
      })
    )
  }
  
  return (
    <a className='group p-3 bg-black [&>*]:fill-white cursor-pointer active:scale-110' onClick={handleAddToCart}>
      <PlusIcon className='button-bounce fill-white stroke-white w-[32px] h-[32px]' />
    </a>
  )
}

const VerticalNumberInput = ({itemId}: {itemId: string}) => {
  const cartSelector = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  const itemInCart = cartSelector.cart[itemId]?.quantity;

  const handleInputChange = (e) => {
    dispatch(editQuantity({id: itemId, quantity: parseInt(e.target.value)}))
  }
  return (
    <div className='absolute flex flex-col w-[54px] top-[6px] right-[6px] z-10'>
      <a 
        className='group p-3 bg-black [&>*]:fill-white rounded-t-[12px] active:scale-110 z-[11]' 
        onClick={() => dispatch(decreaseQuantity({id: itemId}))}
      >
        <MinusIcon className='button-bounce' />
      </a>
      <input
        type="number"
        className='h-[calc(9rem-54px)] bg-white/50 backdrop-blur-sm border-white text-center font-bold text-[1.5rem]' 
        value={itemInCart} 
        onChange={(e) => {handleInputChange(e)}}
      />
      <a 
        className='group p-3 bg-black [&>*]:fill-white rounded-b-[12px] active:scale-110'
        onClick={() => dispatch(increaseQuantity({id: itemId}))}
      >
        <PlusIcon className='button-bounce'/>
      </a>
    </div>
  )
}

AddToCart.VerticalNumberInput = VerticalNumberInput;
export default AddToCart