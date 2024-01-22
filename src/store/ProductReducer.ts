import { Item } from '@/types';
import {createSlice} from '@reduxjs/toolkit';

const initialState: {products: Item} = {
  products: {
        "012" : {
          productName: 'Item name 12',
          price: 12012,
          description: 'This is a description of item 1.',
          image: './public/banana-wall.png',
          stock: 1,
        },
        "012122" : {
          productName: 'Item name 1',
          price: 120,
          description: 'This is a description of item 1.',
          image: './public/banana-wall.png',
          stock: 1,
        },
    },
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;

export default productSlice.reducer;