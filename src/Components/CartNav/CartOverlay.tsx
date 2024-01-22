import React from 'react'
import CartOverlayItem from './CartOverlayItem'
import { InteractiveOverlay } from '../InteractiveOverlay'
import CloseIcon from '../assets/CloseIcon'
import { AnimatePresence } from 'framer-motion'
import { useSelector } from 'react-redux'
import { CartItem, Item } from '@/types'
import CartEmptyIcon from './assets/CartEmptyIcon'

const CartOverlay = ({isShowingOverlay, handleClick}: {isShowingOverlay: boolean, handleClick: () => void}) => {

  const cartSelector = useSelector((state: any) => state.cart)
  const itemInCart = cartSelector.cart;

  return (
    <>
        <div className='z-[1000] fixed h-[calc(100vh-40px)] top-5 bg-white solid-shadow rounded-[20px] border-black w-[60vw] max-w-[700px] !px-10 p-10  transition-all'
          style={{right: isShowingOverlay ? "5px" : "-5000px"}}
        >
          <div className="flex justify-between items-center mb-6">
            <h4 className='text-xl font-semibold font-primary'>Your cart</h4>
            <CloseIcon onClick={handleClick} className="scale-[.75] clickable" />
          </div>
          {
            // conditionally rendering the cart items if cart is not empty
            Object.keys(itemInCart).length != 0 ?
            <div className='flex flex-col justify-between h-[100%] pb-5'>
              <ul className='gap-3 flex flex-col overflow-y-auto'>
              {
                Object.keys(itemInCart).map( (itemKey: string) => {
                  return  <CartOverlayItem               
                      key={itemKey} 
                      itemId={itemKey}
                      item={itemInCart[itemKey]}
                  />
                })
              }
              </ul>
              <div className="flex justify-between items-center pb-4 pt-5">
                <h4 className=''>Subtotal 
                  <h2 className='text-2xl font-semibold font-primary '>$ 120</h2>
                </h4>
                <button className=' text-lg w-[60%] text-white rounded-[12px] active:scale-110 group'>
                  <div className='group-hover:animate-bounce bg-black w-[100%] py-3 rounded-[12px] flex justify-center items-center'>
                    <h4>Checkout</h4>
                  </div>
                </button>
              </div>
            </div> :
            <div className='flex justify-center items-center flex-col h-[80%]'>
              <CartEmptyIcon className="w-[300px] h-[300px] fill-gray-300" />
              <p>Oops, look like your cart is empty.</p>
            </div>
          }
        </div>      
      {
        isShowingOverlay &&          
        <InteractiveOverlay handleClick={handleClick} className='fixed w-[100vw] h-[100vh] bg-black/50 right-0 top-0 z-[100] cursor-none'/> 
      }
    </>
  )
}

export default CartOverlay