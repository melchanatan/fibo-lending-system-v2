import React from 'react'
import ItemCard from './ItemCard'
import {Item} from '@/types/Item.type'

// Placeholder data
const items: Item[] = [
    {
      productId: 1,
      productName: 'Item name 1',
      price: 120,
      description: 'This is a description of item 1.',
      image: './public/banana-wall.png',
      quantity: 1,
    },
    {
      productId: 2,
      productName: 'Item name 2',
      price: 130,
      description: 'This is a description of item 2.',
      image: './public/banana-wall.png',
      quantity: 1,
    },
    {
      productId: 3,
      productName: 'Item name 3',
      price: 140,
      description: 'This is a description of item 3.',
      image: './public/banana-wall.png',
      quantity: 1,
    },
    {
      productId: 4,
      productName: 'Item name 4',
      price: 150,
      description: 'This is a description of item 4.',
      image: './public/banana-wall.png',
      quantity: 1,
    },
  ];


const ProductFeed = () => (
  <div className='grid grid-cols-2 items-start content-start gap-5  2xl:grid-cols-4 xl:grid-cols-3 w-full'>
    {items.map( (item: Item) => 
      <ItemCard 
        name={item.productName}
        price={item.price} 
        image={item.image} 
        quantity={item.quantity}
        id={item.productId}
        key={item.productId} 
      />)
    }
  </div>
)

export default ProductFeed