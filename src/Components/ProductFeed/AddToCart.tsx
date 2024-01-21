import React, { useEffect } from 'react'
import CloseIcon from '../assets/CloseIcon'
import { useDispatch, useSelector } from 'react-redux';
import { addItem, increaseQuantity, decreaseQuantity } from '@/store/cartReducer';

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
      <CloseIcon className='button-bounce' />
    </a>
  )
}

const VerticalNumberInput = ({itemId}: {itemId: string}) => {
  const cartSelector = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  const itemInCart = cartSelector.cart[itemId]?.quantity;

  return (
    <div className='absolute flex flex-col w-[54px] top-[6px] right-[6px] z-10'>
      <a 
        className='group p-3 bg-black [&>*]:fill-white rounded-t-[12px] active:scale-110' 
        onClick={() => dispatch(decreaseQuantity({id: itemId}))}
      >
        <CloseIcon className='button-bounce' />
      </a>
      <input type="number" className='h-[calc(9rem-54px)] bg-white/50 backdrop-blur-sm border-white text-center font-bold text-[2rem]' value={itemInCart}/>
      <a 
        className='group p-3 bg-black [&>*]:fill-white rounded-b-[12px] active:scale-110'
        onClick={() => dispatch(increaseQuantity({id: itemId}))}
      >
        <CloseIcon className='button-bounce'/>
      </a>
    </div>
  )
}

AddToCart.VerticalNumberInput = VerticalNumberInput;
export default AddToCart