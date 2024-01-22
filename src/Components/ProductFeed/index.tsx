import React from 'react'
import ItemCard from './ItemCard'
import {Item} from '@/types/Item.type'
import { useSelector } from 'react-redux';
import { CartItem } from '@/types';



const ProductFeed = () => {
  const itemsSelector = useSelector((state: any) => state.products);
  const items = itemsSelector.products
  return <div className='grid grid-cols-2 items-start content-start gap-5  2xl:grid-cols-4 xl:grid-cols-3 w-full'>
    {
      Object.keys(items)?.map( (itemKey: string) => {
        return ( 
        <ItemCard 
            key={itemKey} 
            itemId={itemKey}
            item={items[itemKey]}
         />)
      })
    }
  </div>
}

export default ProductFeed