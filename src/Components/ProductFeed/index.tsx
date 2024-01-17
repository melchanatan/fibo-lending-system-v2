import React from 'react'
import ItemCard from './ItemCard'

const items = [1, 1, 2, 2, 2, 1, 2, 1, 2, 1, 2];
const ProductFeed = () => (
  <div className='grid grid-cols-2 items-start gap-5 2xl:grid-cols-4 xl:grid-cols-3 w-full'>
    {items.map( () => <ItemCard />)}
  </div>
)

export default ProductFeed