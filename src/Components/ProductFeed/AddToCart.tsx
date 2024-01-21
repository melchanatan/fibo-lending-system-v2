import React from 'react'
import CloseIcon from '../assets/CloseIcon'
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '@/store/cartReducer';

const AddToCart = () => {
  const cart = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem("hello"))
  }
  
  return (
    <a className='group p-3 bg-black [&>*]:fill-white cursor-pointer active:scale-110' onClick={handleAddToCart}>
      <CloseIcon className='button-bounce' />
    </a>
  )
}

const VerticalNumberInput = () => {
  return (
    <div className='absolute flex flex-col w-[54px] top-[6px] right-[6px] z-10'>
      <div className='p-3 bg-black [&>*]:fill-white rounded-t-[12px]'>
        <CloseIcon />
      </div>
      <input type="number" className='h-[calc(9rem-54px)] bg-white/50 backdrop-blur-sm border-white'/>
      <div className='p-3 bg-black [&>*]:fill-white rounded-b-[12px]'>
        <CloseIcon />
      </div>
    </div>
  )
}

AddToCart.VerticalNumberInput = VerticalNumberInput;
export default AddToCart