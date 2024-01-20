import { Item } from '@/types/Item.type'
import React, { createContext, useState } from 'react'

export const ItemContext = createContext<Item>(
    {
        productId: 0,
        productName: '',
        price: 0,
        description: '',
        image: '',
        quantity: 0,
    }
)

export const ItemProvider = ({children}: {children: React.ReactNode}) => {
  const [items, setItems] = useState([])

  return (
    <ItemContext.Provider value={items}>
      {children}
    </ItemContext.Provider>
  )
}