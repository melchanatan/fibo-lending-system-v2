import React from 'react'
import ItemCard from './ItemCard'
import {Item} from '@/types/Item.type'

// Placeholder data
const items: Item[] = [
  {
    "012" : {
      productName: 'Item name 12',
      price: 12012,
      description: 'This is a description of item 1.',
      image: './public/banana-wall.png',
      stock: 1,
    },
  },
  {
    "012122" : {
      productName: 'Item name 1',
      price: 120,
      description: 'This is a description of item 1.',
      image: './public/banana-wall.png',
      stock: 1,
    },
  }
    // {
    //   productId: 1,
    //   productName: 'Item name 1',
    //   price: 120,
    //   description: 'This is a description of item 1.',
    //   image: './public/banana-wall.png',
    //   quantity: 1,
    // },
    // {
    //   productId: 2,
    //   productName: 'Item name 2',
    //   price: 130,
    //   description: 'This is a description of item 2.',
    //   image: './public/banana-wall.png',
    //   quantity: 1,
    // },
    // {
    //   productId: 3,
    //   productName: 'Item name 3',
    //   price: 140,
    //   description: 'This is a description of item 3.',
    //   image: './public/banana-wall.png',
    //   quantity: 1,
    // },
    // {
    //   productId: 4,
    //   productName: 'Item name 4',
    //   price: 150,
    //   description: 'This is a description of item 4.',
    //   image: './public/banana-wall.png',
    //   quantity: 1,
    // },
  ];


const ProductFeed = () => (
  <div className='grid grid-cols-2 items-start content-start gap-5  2xl:grid-cols-4 xl:grid-cols-3 w-full'>
    {
      items.map( (item: Item) => {
        const itemKey = Object.keys(item)[0];
        return ( 
        <ItemCard 
            key={itemKey} 
            itemId={itemKey}
            item={item[itemKey]}
         />)
      })
    }
  </div>
)

export default ProductFeed