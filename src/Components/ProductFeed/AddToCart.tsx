import React from 'react'
import CloseIcon from '../assets/CloseIcon'

const AddToCart = () => {
  return (
    <div className='p-3 bg-black [&>*]:fill-white '>
      <CloseIcon />
    </div>
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